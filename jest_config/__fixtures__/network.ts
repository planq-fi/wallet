import { Network, NodeType, TTicker, TUuid } from '@types';
import { makeExplorer } from '@utils';

export const Ethereum: Network = {
  id: 'Ethereum',
  name: 'Ethereum',
  chainId: 1,
  isCustom: false,
  isTestnet: false,
  color: '#007896',
  gasPriceSettings: {
    min: 1,
    max: 60,
    initial: 20
  },
  dPaths: {
    TREZOR: {
      name: 'Trezor (ETH)',
      path: "m/44'/60'/0'/0/<account>"
    },
    LEDGER_NANO_S: {
      name: 'Ledger (ETH)',
      path: "m/44'/60'/0'/<account>"
    },
    default: {
      name: 'Default (ETH)',
      path: "m/44'/60'/0'/0/<account>"
    }
  },
  baseAsset: '356a192b-7913-504c-9457-4d18c28d46e6' as TUuid,
  baseUnit: 'ETH' as TTicker,
  nodes: [
    {
      name: 'eth_mycrypto',
      type: NodeType.RPC,
      service: 'MyCrypto',
      url: 'https://api.mycryptoapi.com/eth'
    },
    {
      name: 'eth_ethscan',
      type: NodeType.ETHERSCAN,
      service: 'Etherscan',
      url: 'https://api.etherscan.io/api'
    }
  ],
  blockExplorer: makeExplorer({
    name: 'Etherscan',
    origin: 'https://etherscan.io'
  })
};


export const fNetworks = [Ethereum];

export const fNetwork = fNetworks[1];
