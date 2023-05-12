import { JsonRpcFetchFunc, JsonRpcProvider } from '@ethersproject/providers'
import { planqToEth } from './bech32-utils'
import { VoidSigner } from '@ethersproject/abstract-signer'
import { ExternalProvider } from "@ethersproject/providers/src.ts/web3-provider";
import {Deferrable, resolveProperties, shallowCopy} from "@ethersproject/properties";
import {TransactionRequest} from "@ethersproject/abstract-provider";
import {hexlify} from "@ethersproject/bytes";

export class KeplrProvider extends JsonRpcProvider {
  keplrAvailable = false
  chainId = 'planq_7070-2'
  keplrSigner = null
  readonly provider: ExternalProvider;
  readonly jsonRpcFetchFunc: JsonRpcFetchFunc;
  permissions = null

  constructor(url, network, chainId, overrideMetamask) {
    super(url, network)
    this.jsonRpcFetchFunc = this.send
    this.provider = null
    this.chainId = chainId
    this.permissions = []
    // @ts-ignore
    if (window.keplr) {
      this.keplrAvailable = true
    }
    this.attach(overrideMetamask)
  }

  // attach the provider to window.ethereum in case MetaMask is not available
  attach(overrideMetamask) {
    // @ts-ignore
    if (!window.ethereum || overrideMetamask) {
      // @ts-ignore
      window.ethereum = this
    }
  }

  // check current network and switch
  async checkNetwork() {
    if (this.keplrAvailable) {
      const chainId = 'planq_7070-2'
      await this.addPlanqChain()
      // @ts-ignore
      await window.keplr.enable(chainId)
    }
  }

  async getAccountsBech32() {
    // @ts-ignore
    const offlineSigner = window.keplr.getOfflineSigner(this.chainId)
    const accounts = await offlineSigner.getAccounts()
    return accounts[0].address
  }

  async listAccounts(): Promise<Array<string>> {
    return this.getAccounts()
  }

  async getAccounts(): Promise<Array<string>> {
    // @ts-ignore
    const offlineSigner = window.keplr.getOfflineSigner(this.chainId)
    const accounts = await offlineSigner.getAccounts()
    const resp = []
    resp[0] = planqToEth(accounts[0].address)
    return resp
  }

  async send(method: string, params: Array<any>): Promise<any> {
    switch (method) {
      case 'wallet_getPermissions':
        return undefined
      case 'eth_accounts':
        return this.getAccounts()
      case 'eth_requestAccounts':
        return this.getAccounts()
      case 'wallet_requestPermissions':
        return undefined
      default:
        return super.send(method, params)
    }
    return super.send(method, params)

  }

  // @ts-ignore
  async getSigner(index):JsonRpcSigner {
    let account = await this.getAccounts()
    if (!this.keplrSigner) {
      this.keplrSigner = new KeplrSigner(account[0], this)
    }
    return this.keplrSigner
  }

  async addPlanqChain() {
    // @ts-ignore
    await window.keplr.experimentalSuggestChain({
      chainId: 'planq_7070-2',
      chainName: 'Planq',
      rpc: 'https://rpc.planq.network',
      rest: 'https://rest.planq.network',
      bip44: {
        coinType: 60,
      },
      bech32Config: {
        bech32PrefixAccAddr: 'plq',
        bech32PrefixAccPub: 'plq' + 'pub',
        bech32PrefixValAddr: 'plq' + 'valoper',
        bech32PrefixValPub: 'plq' + 'valoperpub',
        bech32PrefixConsAddr: 'plq' + 'valcons',
        bech32PrefixConsPub: 'plq' + 'valconspub',
      },
      currencies: [
        {
          coinDenom: 'PLANQ',
          coinMinimalDenom: 'aplanq',
          coinDecimals: 18,
          coinGeckoId: 'planq',
        },
      ],
      feeCurrencies: [
        {
          coinDenom: 'PLANQ',
          coinMinimalDenom: 'aplanq',
          coinDecimals: 18,
          coinGeckoId: 'planq',
          gasPriceStep: {
            low: 25000000000,
            average: 25000000000,
            high: 40000000000,
          },
        },
      ],
      stakeCurrency: {
        coinDenom: 'PLANQ',
        coinMinimalDenom: 'aplanq',
        coinDecimals: 18,
        coinGeckoId: 'planq',
      },
      features: ['ibc-transfer', 'ibc-go', 'eth-address-gen', 'eth-key-sign'],
    })
  }
}

export class KeplrSigner extends VoidSigner {
  keplrInstance = null
  constructor(address, provider) {
    super(address, provider)
    this.keplrInstance = provider
  }
  async signTransaction(transaction) {
    const account = await this.keplrInstance.getAccountsBech32()

    // @ts-ignore
    return await window.keplr.signEthereum(
      this.keplrInstance.chainId,
      account,
      JSON.stringify(transaction),
      'transaction',
    )
  }

  async sendUncheckedTransaction(transaction: Deferrable<TransactionRequest>): Promise<string> {
    transaction = shallowCopy(transaction);

    const fromAddress = this.getAddress().then((address) => {
      if (address) { address = address.toLowerCase(); }
      return address;
    });

    // The JSON-RPC for eth_sendTransaction uses 90000 gas; if the user
    // wishes to use this, it is easy to specify explicitly, otherwise
    // we look it up for them.
    if (transaction.gasLimit == null) {
      const estimate = shallowCopy(transaction);
      estimate.from = fromAddress;
      transaction.gasLimit = this.provider.estimateGas(estimate);
    }

    if (transaction.to != null) {
      transaction.to = Promise.resolve(transaction.to).then(async (to) => {
        if (to == null) { return null; }
        const address = await this.provider.resolveName(to);
        if (address == null) {
          new Error("provided ENS name resolves to null tx.to" + to);
        }
        return address;
      });
    }

    return resolveProperties({
      tx: resolveProperties(transaction),
      sender: fromAddress
    }).then(async ({tx, sender}) => {

      if (tx.from != null) {
        if (tx.from.toLowerCase() !== sender) {
          new Error("from address mismatch transaction" + transaction);
        }
      } else {
        tx.from = sender;
      }
      const signedTx = await this.signTransaction(tx)

      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const hexTx = hexlify(signedTx);

      return this.keplrInstance.send("eth_sendRawTransaction", [hexTx]).then((hash) => {
        return hash;
      }, (error) => {
        new Error("sendTransaction" + error + " " + hexTx);
      });
    });
  }
  async getAddress() {
    return this.address;
  }

  async signMessage(message) {
    const account = await this.keplrInstance.getAccountsBech32()
    // @ts-ignore
    return await window.keplr.signEthereum(
      this.keplrInstance.chainId,
      account,
      JSON.stringify(message),
      'message',
    )
  }
}

export class LeapProvider extends JsonRpcProvider {
  leapAvailable = false
  chainId = 'planq_7070-2'
  leapSigner = null
  readonly provider: ExternalProvider;
  readonly jsonRpcFetchFunc: JsonRpcFetchFunc;
  permissions = null
  constructor(url, network, chainId, overrideMetamask) {
    super(url, network)
    this.jsonRpcFetchFunc = this.send
    this.chainId = chainId
    this.provider = null
    this.permissions = []
    // @ts-ignore
    if (window.leap) {
      this.leapAvailable = true
    }
    this.attach(overrideMetamask)
  }

  // attach the provider to window.ethereum in case MetaMask is not available
  attach(overrideMetamask) {
    // @ts-ignore
    if (!window.ethereum || overrideMetamask) {
      // @ts-ignore
      window.ethereum = this
    }
  }

  // check current network and switch
  async checkNetwork() {
    if (this.leapAvailable) {
      const chainId = 'planq_7070-2'
      await this.addPlanqChain()
      // @ts-ignore
      await window.leap.enable(chainId)
    }
  }

  async getAccountsBech32() {
    // @ts-ignore
    const offlineSigner = window.leap.getOfflineSigner(this.chainId)
    const accounts = await offlineSigner.getAccounts()
    return accounts[0].address
  }

  async listAccounts(): Promise<Array<string>> {
    return this.getAccounts()
  }
  async getAccounts(): Promise<Array<string>> {
    // @ts-ignore
    const offlineSigner = window.leap.getOfflineSigner(this.chainId)
    const accounts = await offlineSigner.getAccounts()
    const resp = []
    resp[0] = planqToEth(accounts[0].address)
    return resp
  }

  async send(method: string, params: Array<any>): Promise<any> {
    switch (method) {
      case 'wallet_getPermissions':
        return undefined
      case 'eth_accounts':
        return this.getAccounts()
      case 'eth_requestAccounts':
        return this.getAccounts()
      case 'wallet_requestPermissions':
        return undefined
      default:
        return super.send(method, params)
    }
    return super.send(method, params)

  }

  // @ts-ignore
  async getSigner(index): JsonRpcSigner {
    let account = await this.getAccounts()
    if (!this.leapSigner) {
      this.leapSigner = new LeapSigner(account[0], this)
    }
    return this.leapSigner
  }

  async addPlanqChain() {
    // @ts-ignore
    await window.leap.experimentalSuggestChain({
      chainId: 'planq_7070-2',
      chainName: 'Planq',
      rpc: 'https://rpc.planq.network',
      rest: 'https://rest.planq.network',
      bip44: {
        coinType: 60,
      },
      bech32Config: {
        bech32PrefixAccAddr: 'plq',
        bech32PrefixAccPub: 'plq' + 'pub',
        bech32PrefixValAddr: 'plq' + 'valoper',
        bech32PrefixValPub: 'plq' + 'valoperpub',
        bech32PrefixConsAddr: 'plq' + 'valcons',
        bech32PrefixConsPub: 'plq' + 'valconspub',
      },
      currencies: [
        {
          coinDenom: 'PLANQ',
          coinMinimalDenom: 'aplanq',
          coinDecimals: 18,
          coinGeckoId: 'planq',
        },
      ],
      feeCurrencies: [
        {
          coinDenom: 'PLANQ',
          coinMinimalDenom: 'aplanq',
          coinDecimals: 18,
          coinGeckoId: 'planq',
          gasPriceStep: {
            low: 25000000000,
            average: 25000000000,
            high: 40000000000,
          },
        },
      ],
      stakeCurrency: {
        coinDenom: 'PLANQ',
        coinMinimalDenom: 'aplanq',
        coinDecimals: 18,
        coinGeckoId: 'planq',
      },
      features: ['ibc-transfer', 'ibc-go', 'eth-address-gen', 'eth-key-sign'],
    })
  }
}

export class LeapSigner extends VoidSigner {
  leapInstance = null
  constructor(address, provider) {
    super(address, provider)
    this.leapInstance = provider
  }
  async signTransaction(transaction) {
    const account = await this.leapInstance.getAccountsBech32()

    // @ts-ignore
    return await window.leap.signEthereum(
      this.leapInstance.chainId,
      account,
      JSON.stringify(transaction),
      'transaction',
    )
  }

  async sendUncheckedTransaction(transaction: Deferrable<TransactionRequest>): Promise<string> {
    transaction = shallowCopy(transaction);

    const fromAddress = this.getAddress().then((address) => {
      if (address) { address = address.toLowerCase(); }
      return address;
    });

    // The JSON-RPC for eth_sendTransaction uses 90000 gas; if the user
    // wishes to use this, it is easy to specify explicitly, otherwise
    // we look it up for them.
    if (transaction.gasLimit == null) {
      const estimate = shallowCopy(transaction);
      estimate.from = fromAddress;
      transaction.gasLimit = this.provider.estimateGas(estimate);
    }

    if (transaction.to != null) {
      transaction.to = Promise.resolve(transaction.to).then(async (to) => {
        if (to == null) { return null; }
        const address = await this.provider.resolveName(to);
        if (address == null) {
          new Error("provided ENS name resolves to null tx.to" + to);
        }
        return address;
      });
    }

    return resolveProperties({
      tx: resolveProperties(transaction),
      sender: fromAddress
    }).then(async ({tx, sender}) => {

      if (tx.from != null) {
        if (tx.from.toLowerCase() !== sender) {
          new Error("from address mismatch transaction" + transaction);
        }
      } else {
        tx.from = sender;
      }
      const signedTx = await this.signTransaction(tx)

      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const hexTx = hexlify(signedTx);

      return this.leapInstance.send("eth_sendRawTransaction", [hexTx]).then((hash) => {
        return hash;
      }, (error) => {
        new Error("sendTransaction" + error + " " + hexTx);
      });
    });
  }

  async getAddress() {
    return this.address;
  }

  async signMessage(message) {
    const account = await this.leapInstance.getAccountsBech32()
    // @ts-ignore
    return await window.leap.signEthereum(
      this.leapInstance.chainId,
      account,
      JSON.stringify(message),
      'message',
    )
  }
}

