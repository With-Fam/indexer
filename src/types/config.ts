import { Address } from "viem";

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
  networks: Networks;
  contracts: {
    manageFamAuthority: Address;
  };
};
