import { createPublicClient, webSocket, PublicClient } from "viem";
import { config } from "../utils/config";

export async function createWebSocketClient(
  network: string
): Promise<PublicClient> {
  const wsUrl = config.networks[network].ws;
  console.log(`Connecting to WebSocket endpoint: ${wsUrl}`);

  return createPublicClient({
    transport: webSocket(wsUrl),
  });
}
