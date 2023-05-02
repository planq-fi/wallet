import { BigNumber } from '@ethersproject/bignumber';

import {
  ITxData,
  ITxFromAddress,
  ITxGasLimit,
  ITxGasPrice,
  ITxNonce,
  ITxToAddress,
  ITxValue,
  NetworkId,
  TAddress,
  TAssetType,
  TTicker,
  TUuid
} from '@types';

import { fAccounts } from './account';
import { fAssets } from './assets';


export const fApproveErc20TxConfig = {
  amount: '5',
  asset: {
    balance: BigNumber.from('0x3782dace9d900000'),
    contractAddress: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
    decimal: 18,
    isCustom: false,
    name: 'REPv1',
    networkId: 'Ethereum' as NetworkId,
    ticker: 'REPv1' as TTicker,
    type: 'erc20' as TAssetType,
    uuid: 'd017a1e8-bdd3-5c32-8866-da258f75b0e9' as TUuid
  },
  baseAsset: { ...fAssets[0], balance: BigNumber.from('0x1b9ced41465be000') },
  rawTransaction: {
    chainId: 1,
    data: '0x095ea7b3000000000000000000000000221657776846890989a759ba2973e427dff5c9bb0000000000000000000000000000000000000000000000004563918244f40000' as ITxData,
    from: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c' as ITxFromAddress,
    gasLimit: '0x249f0' as ITxGasLimit,
    gasPrice: '0x12a05f200' as ITxGasPrice,
    nonce: '0x1' as ITxNonce,
    to: '0x1985365e9f78359a9B6AD760e32412f4a445E862' as ITxToAddress,
    value: '0x0' as ITxValue
  },
  receiverAddress: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c' as TAddress,
  senderAccount: fAccounts[0],
  from: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c' as TAddress,
  networkId: 'Ethereum' as NetworkId
};

export const fTokenMigrationTxConfig = {
  amount: '5',
  asset: {
    balance: BigNumber.from('0x3782dace9d900000'),
    contractAddress: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
    decimal: 18,
    isCustom: false,

    name: 'REPv1',
    networkId: 'Ethereum',
    ticker: 'REPv1',
    type: 'erc20',
    uuid: 'd017a1e8-bdd3-5c32-8866-da258f75b0e9'
  },
  baseAsset: { ...fAssets[0], balance: BigNumber.from('0x1b9ced41465be000') },
  from: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c',
  rawTransaction: {
    chainId: 1,
    data: '0x75d9aa1a',
    from: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c',
    gasLimit: '0x249f0',
    gasPrice: '0x12a05f200',
    nonce: '0x1',
    to: '0x221657776846890989a759BA2973e427DfF5C9bB',
    value: '0x0'
  },
  receiverAddress: '0xfE5443FaC29fA621cFc33D41D1927fd0f5E0bB7c',
  senderAccount: fAccounts[0],
  networkId: 'Ethereum'
};
