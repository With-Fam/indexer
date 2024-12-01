import dotenv from "dotenv";
import { Config } from "../types/config";
import { Address } from "viem";

dotenv.config();

export const config: Config = {
  stackApiKey: process.env.STACK_API_KEY,
  stackApiUrl: "https://track.stack.so/event",
  networks: {
    base: {
      http: [
        "https://mainnet.base.org",
        "https://base.llamarpc.com",
        "https://base.blockpi.network/v1/rpc/public",
      ],
      ws: "wss://base-rpc.publicnode.com",
    },
    baseSepolia: {
      http: [
        "https://sepolia.base.org",
        "https://base-sepolia-rpc.publicnode.com",
      ],
      ws: "wss://base-sepolia-rpc.publicnode.com",
    },
  },
  contracts: {
    manageFamAuthority: "0x8eaC17a5A609976507734e979873d7c3B3eEbeb6" as Address,
  },
};
