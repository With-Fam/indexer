import { createPublicClient, http, decodeEventLog } from "viem";
import { EventHandlerRegistry } from "./core/EventHandlerRegistry";
import { handlePartyCardAdded, handleHypersubSet, } from "./handlers/PartyCardHandler";
import { config } from "./utils/config";
import { ManageFamAuthorityAbi } from "./abis/ManageFamAuthorityAbi";
async function indexNetwork(network, registry) {
    console.log(`Indexing events for network: ${network}`);
    const client = createPublicClient({
        transport: http(config.networks[network].http[0]),
    });
    try {
        const logs = await client.getLogs({
            address: config.contracts.manageFamAuthority,
            events: ManageFamAuthorityAbi,
            fromBlock: BigInt(0),
            toBlock: "latest",
        });
        console.log(`Found ${logs.length} logs for ${network}`);
        for (const log of logs) {
            try {
                const decodedLog = decodeEventLog({
                    abi: ManageFamAuthorityAbi,
                    data: log.data,
                    topics: log.topics,
                });
                if (!decodedLog.eventName)
                    continue;
                if (registry.hasHandler(decodedLog.eventName)) {
                    await registry.handleEvent(decodedLog.eventName, {
                        network,
                        args: decodedLog.args || {},
                        log: {
                            address: log.address,
                            blockHash: log.blockHash,
                            blockNumber: log.blockNumber,
                            logIndex: log.logIndex,
                            transactionHash: log.transactionHash,
                            transactionIndex: log.transactionIndex,
                            id: `${log.transactionHash}-${log.logIndex}`,
                        },
                    });
                }
            }
            catch (error) {
                console.warn(`Failed to decode log: ${error}`);
                continue;
            }
        }
        console.log(`Completed indexing for network: ${network}`);
    }
    catch (error) {
        console.error(`Error indexing network ${network}:`, error);
        throw error;
    }
}
async function main() {
    const registry = new EventHandlerRegistry();
    registry.register("PartyCardAdded", handlePartyCardAdded);
    registry.register("HypersubSet", handleHypersubSet);
    try {
        console.log("Starting indexer with registered events:", registry.getRegisteredEvents());
        await Promise.all(Object.keys(config.networks).map((network) => indexNetwork(network, registry)));
    }
    catch (error) {
        console.error("Error in indexer:", error);
    }
}
main().catch(console.error);
