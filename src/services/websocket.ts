import { createPublicClient, webSocket, PublicClient } from "viem";
import { config } from "../utils/config";

const RECONNECT_DELAY = 5000; // 5 seconds
const MAX_RETRIES = 5;

let reconnectAttempts: Record<string, number> = {};

export async function createWebSocketClient(
  network: string
): Promise<PublicClient> {
  const wsUrl = config.networks[network].ws;
  console.log(`Connecting to WebSocket endpoint: ${wsUrl}`);

  reconnectAttempts[network] = reconnectAttempts[network] || 0;

  const transport = webSocket(wsUrl, {
    retryCount: MAX_RETRIES,
    retryDelay: RECONNECT_DELAY,
    // Use the official reconnection mechanism
    reconnectOnError: true,
    onRetry: () => {
      reconnectAttempts[network]++;
      console.warn(
        `WebSocket reconnection attempt ${reconnectAttempts[network]}/${MAX_RETRIES} for network: ${network}`
      );

      if (reconnectAttempts[network] >= MAX_RETRIES) {
        console.error(
          `Max retry attempts (${MAX_RETRIES}) reached for network: ${network}. Exiting process...`
        );
        process.exit(1); // Force process restart to ensure clean state
      }
    },
  });

  const client = createPublicClient({
    transport,
  });

  // Reset reconnection counter on successful connection
  reconnectAttempts[network] = 0;

  return client;
}
