import convertBigIntToString from "../convertBigIntToString.js";

const getEventPayload = (network, event) => {
  const { args, blockNumber, transactionHash, address } = event;
  const { party, hypersub } = args;

  return [
    {
      name: `HypersubSet-${network}`,
      account: party,
      uniqueId: `${network}-${transactionHash}`,
      pointSystemId: process.env.STACK_SYSTEM_ID,
      points: "1",
      metadata: {
        ...convertBigIntToString({
          party,
          hypersub,
          blockNumber,
        }),
        network,
        contractAddress: address,
        transactionHash,
      },
    },
  ];
};

export default getEventPayload;
