import { createPublicClient, http, type PublicClient, type Chain } from "viem";
import { base, baseSepolia } from "viem/chains";

export const getPublicClient = (chain: Chain): PublicClient => {
  return createPublicClient({
    chain,
    transport: http(),
    batch: {
      multicall: true,
    },
  });
};

export const baseClient = getPublicClient(base);
export const baseSepoliaClient = getPublicClient(baseSepolia);
