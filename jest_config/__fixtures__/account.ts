import { BigNumber } from '@ethersproject/bignumber';

import { REPV1UUID } from '@config';
import { DWAccountDisplay, ExtendedDPath } from '@services';
import { StoreAccount, TAddress, TTicker, TUuid, WalletId } from '@types';

import { Ethereum } from './network';

export const fAccounts: StoreAccount[] = [
  {
    address: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c' as TAddress,
    networkId: 'Ethereum',
    wallet: 'WALLETCONNECT' as WalletId,
    path: {
      name: 'Ledger (ETH)',
      path: "m/44'/60'/0'/<account>"
    },
    index: 0,
    assets: [
      {
        uuid: '356a192b-7913-504c-9457-4d18c28d46e6' as TUuid,
        name: 'Ether',
        networkId: 'Ethereum',
        type: 'base',
        ticker: 'ETH' as TTicker,
        decimal: 18,
        isCustom: false,
        balance: BigNumber.from('0x1b9ced41465be000')
      },
      {
        uuid: REPV1UUID,
        name: 'REPv1',
        networkId: 'Ethereum',
        type: 'erc20',
        ticker: 'REPv1' as TTicker,
        decimal: 18,
        contractAddress: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
        isCustom: false,
        balance: BigNumber.from('0x3782dace9d900000')
      }
    ],
    transactions: [],
    favorite: false,
    mtime: 0,
    uuid: '15d5e8f3-c595-5206-b5f3-86c180eb7119' as TUuid,
    network: Ethereum,
    label: 'WalletConnect Account 1'
  },
  {
    address: '0x03a0775e92dc3ad2d2cb3eaf58af5ee99b183d49' as TAddress,
    networkId: 'Ethereum',
    wallet: 'WALLETCONNECT' as WalletId,
    path: {
      name: 'Ledger (ETH)',
      path: "m/44'/60'/0'/<account>"
    },
    index: 0,
    assets: [
      {
        uuid: '356a192b-7913-504c-9457-4d18c28d46e6' as TUuid,
        name: 'Ether',
        networkId: 'Ethereum',
        type: 'base',
        ticker: 'ETH' as TTicker,
        decimal: 18,
        isCustom: false,
        balance: BigNumber.from('0x1b9ced41465be000')
      }
    ],
    transactions: [],
    favorite: false,
    mtime: 0,
    uuid: '4ffb0d4a-adf3-1990-5eb9-fe78e613f70y' as TUuid,
    network: Ethereum,
    label: 'WalletConnect Account 2'
  }
];

export const fDWAccounts: DWAccountDisplay[] = [
  {
    address: '0x982ae6031EBE31e1A01490dd4D3270003d732830' as TAddress,
    pathItem: {
      path: "m/44'/60'/0'/0",
      baseDPath: {
        name: 'Ledger (ETH)',
        path: "m/44'/60'/0'/<account>",
        offset: 0,
        numOfAddresses: 5
      } as ExtendedDPath,
      index: 0
    },
    balance: '100000000000000000000'
  },
  {
    address: '0xE8C0F5417B272f2a1C24419bd2cF6B3F584c6b9A' as TAddress,
    pathItem: {
      path: "m/44'/60'/0'/1",
      baseDPath: {
        name: 'Ledger (ETH)',
        path: "m/44'/60'/0'/<account>",
        offset: 0,
        numOfAddresses: 5
      } as ExtendedDPath,
      index: 1
    },
    balance: '0'
  },
  {
    address: '0xE8A0F5417B272f2a1C24419bd2cF6B3F584c6b9A' as TAddress,
    pathItem: {
      path: "m/44'/60'/0'/2",
      baseDPath: {
        name: 'Ledger (ETH)',
        path: "m/44'/60'/0'/<account>",
        offset: 0,
        numOfAddresses: 5
      } as ExtendedDPath,
      index: 1
    },
    balance: '1000000000000000000'
  },
  {
    address: '0xE8B0F5417B272f2a1C24419bd2cF6B3F584c6b9A' as TAddress,
    pathItem: {
      path: "m/44'/60'/0'/3",
      baseDPath: {
        name: 'Ledger (ETH)',
        path: "m/44'/60'/0'/<account>",
        offset: 0,
        numOfAddresses: 5
      } as ExtendedDPath,
      index: 1
    },
    balance: '1500000000000000000'
  },
  {
    address: '0xE8D0F5417B272f2a1C24419bd2cF6B3F584c6b9A' as TAddress,
    pathItem: {
      path: "m/44'/60'/0'/4",
      baseDPath: {
        name: 'Ledger (ETH)',
        path: "m/44'/60'/0'/<account>",
        offset: 0,
        numOfAddresses: 5
      } as ExtendedDPath,
      index: 1
    },
    balance: '0'
  },
  {
    address: '0xE8E0F5417B272f2a1C24419bd2cF6B3F584c6b9A' as TAddress,
    pathItem: {
      path: "m/44'/60'/0'/5",
      baseDPath: {
        name: 'Ledger (ETH)',
        path: "m/44'/60'/0'/<account>",
        offset: 0,
        numOfAddresses: 5
      } as ExtendedDPath,
      index: 1
    },
    balance: '12000000000000000000'
  }
];

export const fAccount: StoreAccount = fAccounts[1];
