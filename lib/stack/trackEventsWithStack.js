import fetch from "node-fetch";
import dotenv from "dotenv";
import getEventPayload from "./getEventPayload.js";

dotenv.config();

export const STACK_API_KEY = process.env.STACK_API_KEY;
export const STACK_API_URL = "https://track.stack.so/event";

// Log environment variables (masking API key for security)
console.log("Stack Environment Variables:");
console.log("STACK_SYSTEM_ID:", process.env.STACK_SYSTEM_ID);
console.log(
  "STACK_API_KEY:",
  process.env.STACK_API_KEY
    ? "****" + process.env.STACK_API_KEY.slice(-4)
    : "undefined"
);

async function trackEventsWithStack(network, events) {
  try {
    const payloads = events.flatMap((event) => getEventPayload(network, event));
    console.log(`${network} - Processing payloads:`, payloads);

    const response = await fetch(STACK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": STACK_API_KEY,
      },
      body: JSON.stringify(payloads),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.log("Response headers:", response.headers);
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${errorBody}`
      );
    }

    console.log(`${payloads.length} events tracked with Stack.so successfully`);
  } catch (error) {
    console.error("Error tracking events with Stack.so:", error);
  }
}

export default trackEventsWithStack;
