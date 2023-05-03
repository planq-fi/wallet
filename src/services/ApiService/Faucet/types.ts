export interface FaucetResponse {
  success: boolean;
}

export interface FaucetErrorResponse extends FaucetResponse {
  message: string;
  success: false;
}

export interface FaucetChallengeResponse {
  success: true;
  message?: string;
  result: {
    id: string;
    challenge: string;
  };
}

export interface FaucetSolvedChallengeResponse {
  success: true;
  message?: string;
  result: {
    chainId: number;
    data: string;
    from: string;
    gasLimit: string;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    hash: string;
    network: string;
    nonce: number;
    to: string;
    value: string;
  };
}
