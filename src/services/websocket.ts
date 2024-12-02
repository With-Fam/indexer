import { createPublicClient, webSocket, PublicClient } from "viem";
import { config } from "../utils/config";

const RECONNECT_DELAY = 5000;
const MAX_RETRIES = 5;

export async function createWebSocketClient(
  network: string
): Promise<PublicClient> {
  const wsUrl = config.networks[network].ws;
  console.log(`Connecting to WebSocket endpoint: ${wsUrl}`);

  const transport = webSocket(wsUrl, {
    retryCount: MAX_RETRIES,
    retryDelay: RECONNECT_DELAY,
    reconnect: {
      attempts: MAX_RETRIES,
      delay: RECONNECT_DELAY,
    },
  });

  const client = createPublicClient({
    transport,
  });

  return client;
}
