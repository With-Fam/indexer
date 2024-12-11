import { Address, Log } from "viem";

export type Event = {
  args: {
    to: Address;
    tokenId: bigint;
    [key: string]: any;
  };
  log: Log;
};

export type Context = {
  client: {
    chain: {
      id: number;
    };
  };
};

export type IndexerParams = {
  event: Event;
  context: Context;
};
