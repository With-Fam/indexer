import getBlockNumber from "./getBlockNumber.js";
import { NETWORKS } from "./rpc.js";

async function getFromBlock(network) {
  // Get the latest block number for the network
  const latestBlock = await getBlockNumber(network);
  return latestBlock;
}

export default getFromBlock;
