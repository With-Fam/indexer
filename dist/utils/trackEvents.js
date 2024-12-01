import fetch from "node-fetch";
import { config } from "./config";
export async function trackEvents(network, events) {
    try {
        console.log(`${network} - Processing events:`, events);
        const headers = {
            "Content-Type": "application/json",
        };
        if (config.stackApiKey) {
            headers["x-api-key"] = config.stackApiKey;
        }
        const response = await fetch(config.stackApiUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(events),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(`${events.length} events tracked successfully`);
    }
    catch (error) {
        console.error("Error tracking events:", error);
        throw error;
    }
}
