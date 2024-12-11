import { walletClient } from "libs/viem/wallet";
import { ManageFamAuthorityAbi } from "abis/ManageFamAuthorityAbi";
import { MANAGE_FAM_AUTHORITY_ADDRESS } from "libs/consts";
import { publicClient } from "libs/viem/publicClient";
import { Address } from "viem";
import { account } from "libs/viem/wallet";
import { config } from "utils/config";

export const addPartyCards = async (
  partyAddress: Address,
  subscriber: Address
) => {
  try {
    console.log(
      "Simulating addPartyCards for subscriber",
      subscriber,
      "to party",
      partyAddress
    );

    const { request } = await publicClient.simulateContract({
      account,
      address: config.contracts.manageFamAuthority,
      abi: ManageFamAuthorityAbi,
      functionName: "addPartyCards",
      args: [
        partyAddress, // party address
        [subscriber], // new party members (just the subscriber)
        [1n], // voting power (1 for the subscriber)
        [subscriber], // initial delegate (self-delegation)
      ],
    });

    console.log("addPartyCards simulation successful");
    const hash = await walletClient.writeContract(request);
    console.log("addPartyCards transaction sent:", hash);

    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log(
      "addPartyCards transaction confirmed:",
      receipt.transactionHash
    );

    return receipt.transactionHash;
  } catch (error: any) {
    console.error(
      "Error executing addPartyCards:",
      error?.shortMessage || error?.message || error
    );
    throw error; // Re-throw to allow caller to handle the error
  }
};
