import { Address, Hash } from "viem";

export interface BaseEvent {
  network: string;
  args: Record<string, any>;
  log: {
    address: Address;
    blockHash: Hash;
    blockNumber: bigint;
    logIndex: number;
    transactionHash: Hash;
    transactionIndex: number;
    id: string;
  };
}

export interface PartyCardAddedEvent extends BaseEvent {
  args: {
    party: Address;
    partyMember: Address;
    newIntrinsicVotingPower: bigint;
  };
}

export interface HypersubSetEvent extends BaseEvent {
  args: {
    party: Address;
    hypersub: Address;
  };
}
