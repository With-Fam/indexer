import type { Address } from "viem";

export type NetworkConfig = {
  http: readonly string[];
  ws: string;
};

export type Networks = {
  [key: string]: NetworkConfig;
};

export type Config = {
  stackApiKey: string | undefined;
  stackApiUrl: string;
  stackPointSystemId: number;
  networks: Networks;
  contracts: {
    manageFamAuthority: Address;
  };
};
