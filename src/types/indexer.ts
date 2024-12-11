import { Address, Log } from "viem";

export type Event = {
  args: {
    to: Address;
    tokenId: bigint;
    [key: string]: any;
  };
  log: Log;
  chainId: number;
};

export type IndexerParams = {
  event: Event;
};
