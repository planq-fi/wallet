import { NetworkId } from '@types';

enum EthscanSupportedNetworks {
  Ethereum = 'Ethereum',
  MATIC = 'MATIC',
}

export const ETHSCAN_NETWORKS: NetworkId[] = Object.values(EthscanSupportedNetworks);
