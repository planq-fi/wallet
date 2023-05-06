import {
  DEFAULT_BSC,
  DEFAULT_ETH,
  DEFAULT_POLYGON,
  LEDGER_ETH,
  TESTNET_ETH,
} from '@mycrypto/wallets';

import {
  DEFAULT_NETWORK,
  DEFAULT_NETWORK_TICKER,
  ETHPLORER_URL,
  GAS_PRICE_DEFAULT,
  GAS_PRICE_TESTNET
} from '@config';
import { NetworkId, NetworkLegacy, TTicker, WalletId } from '@types';
import { makeExplorer } from '@utils/makeExplorer'; // leads to circular dependency if importing from base utils dir

// Temporay type to bridge the difference between v1 and v2 network definitions.
export type NetworkConfig = {
  [key in NetworkId]: NetworkLegacy;
};

export const NETWORKS_CONFIG: NetworkConfig = {
  Ethereum: {
    id: 'Ethereum', // Ethereum Network Id
    name: 'Ethereum',
    baseUnitName: 'Ether',
    unit: 'ETH' as TTicker,
    chainId: 1,
    isCustom: false,
    color: '#007896',
    blockExplorer: makeExplorer({
      name: 'Etherscan',
      origin: 'https://etherscan.io'
    }),
    tokenExplorer: makeExplorer({
      name: 'Ethplorer',
      origin: ETHPLORER_URL
    }),
    tokens: [],
    contracts: require('./contracts/eth.json'),
    dPaths: {
      [WalletId.TREZOR]: DEFAULT_ETH,
      [WalletId.LEDGER_NANO_S]: LEDGER_ETH,
      [WalletId.TREZOR_NEW]: DEFAULT_ETH,
      [WalletId.LEDGER_NANO_S_NEW]: LEDGER_ETH,
      [WalletId.GRIDPLUS]: DEFAULT_ETH,
      default: DEFAULT_ETH
    },
    gasPriceSettings: GAS_PRICE_DEFAULT,
    shouldEstimateGasPrice: true,
    supportsEIP1559: true
  },
  Ropsten: {
    id: 'Ropsten',
    name: 'Ropsten',
    unit: 'RopstenETH' as TTicker,
    chainId: 3,
    isCustom: false,
    color: '#adc101',
    blockExplorer: makeExplorer({
      name: 'Etherscan',
      origin: 'https://ropsten.etherscan.io'
    }),
    tokens: [],
    contracts: require('./contracts/ropsten.json'),
    isTestnet: true,
    dPaths: {
      [WalletId.TREZOR]: TESTNET_ETH,
      [WalletId.LEDGER_NANO_S]: TESTNET_ETH,
      [WalletId.TREZOR_NEW]: TESTNET_ETH,
      [WalletId.LEDGER_NANO_S_NEW]: TESTNET_ETH,
      [WalletId.GRIDPLUS]: DEFAULT_ETH,
      default: TESTNET_ETH
    },
    gasPriceSettings: GAS_PRICE_TESTNET,
    supportsEIP1559: true
  },
  MATIC: {
    id: 'MATIC',
    name: 'Polygon',
    unit: 'MATIC' as TTicker,
    chainId: 137,
    isCustom: false,
    color: '#60da9a',
    blockExplorer: makeExplorer({
      name: 'PolygonScan Explorer',
      origin: 'https://polygonscan.com'
    }),
    tokens: [],
    contracts: [],
    dPaths: {
      [WalletId.TREZOR]: DEFAULT_POLYGON,
      [WalletId.LEDGER_NANO_S]: LEDGER_ETH,
      [WalletId.TREZOR_NEW]: DEFAULT_POLYGON,
      [WalletId.LEDGER_NANO_S_NEW]: LEDGER_ETH,
      [WalletId.GRIDPLUS]: DEFAULT_POLYGON,
      default: DEFAULT_POLYGON
    },
    gasPriceSettings: {
      min: 30,
      max: 100,
      initial: 30
    },
    shouldEstimateGasPrice: false,
    supportsEIP1559: true
  },
  SmartChain: {
    id: 'SmartChain',
    name: 'Smart Chain',
    unit: 'BNB' as TTicker,
    chainId: 56,
    isCustom: false,
    color: '#f0b90b',
    blockExplorer: makeExplorer({
      name: 'BscScan Explorer',
      origin: 'https://bscscan.com'
    }),
    tokens: [],
    contracts: [],
    dPaths: {
      [WalletId.TREZOR]: DEFAULT_BSC,
      [WalletId.LEDGER_NANO_S]: LEDGER_ETH,
      [WalletId.TREZOR_NEW]: DEFAULT_ETH,
      [WalletId.LEDGER_NANO_S_NEW]: DEFAULT_BSC,
      [WalletId.GRIDPLUS]: DEFAULT_BSC,
      default: DEFAULT_BSC
    },
    gasPriceSettings: {
      min: 1,
      max: 20,
      initial: 5
    }
  },
  Planq: {
    id: DEFAULT_NETWORK,
    name: 'Planq',
    unit: DEFAULT_NETWORK_TICKER,
    chainId: 7070,
    isCustom: false,
    color: '#6d2eae',
    blockExplorer: makeExplorer({
      name: 'Planq Explorer',
      origin: 'https://evm.planq.network'
    }),
    tokens: [],
    contracts: [],
    dPaths: {
      [WalletId.TREZOR]: DEFAULT_ETH,
      [WalletId.LEDGER_NANO_S]: LEDGER_ETH,
      [WalletId.TREZOR_NEW]: DEFAULT_ETH,
      [WalletId.LEDGER_NANO_S_NEW]: LEDGER_ETH,
      [WalletId.GRIDPLUS]: DEFAULT_ETH,
      default: DEFAULT_ETH
    },
    gasPriceSettings: {
      min: 1,
      max: 60,
      initial: 1
    },
    supportsEIP1559: true
  }
};
