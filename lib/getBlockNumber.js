import { getWebSocketClient } from "./websocketClient.js";

async function getBlockNumber(network) {
  const client = getWebSocketClient(network);
  return await client.getBlockNumber();
}

export default getBlockNumber;
