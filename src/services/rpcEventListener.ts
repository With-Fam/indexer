import { baseClient, baseSepoliaClient } from "../libs/getPublicClient";
import { pollTransferEvents } from "../libs/pollTransferEvents";

export const startEventListeners = async () => {
  try {
    console.log("Starting Transfer event listeners...");

    // Start pollers for both networks
    const cleanupFns = [
      await pollTransferEvents(baseClient),
      await pollTransferEvents(baseSepoliaClient),
    ];

    console.log("Transfer event listeners started successfully");

    return () => {
      console.log("Stopping Transfer event listeners...");
      cleanupFns.forEach((cleanup) => cleanup());
    };
  } catch (error) {
    console.error("Error starting event listeners:", error);
    throw error;
  }
};

export { pollTransferEvents };
