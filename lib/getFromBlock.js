import getBlockNumber from "./getBlockNumber.js";
import { NETWORKS } from "./rpc.js";

async function getFromBlock(network) {
  const latestBlock = await getBlockNumber(network);
  return latestBlock;
}

export default getFromBlock;
