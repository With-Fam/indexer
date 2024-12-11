import { Address } from "viem";
import { walletClient, account } from "libs/viem/wallet";
import { ManageFamAuthorityAbi } from "abis/ManageFamAuthorityAbi";
import { publicClient } from "libs/viem/publicClient";
import { config } from "utils/config";

const removePartyCards = async (partyAddress: Address, tokenIds: bigint[]) => {
  try {
    console.log("Simulating removePartyCards", account.address);
    const { request } = await publicClient.simulateContract({
      account,
      address: config.contracts.manageFamAuthority,
      abi: ManageFamAuthorityAbi,
      functionName: "removePartyCards",
      args: [partyAddress, tokenIds],
    });

    console.log("removePartyCards simulation successful");
    const hash = await walletClient.writeContract(request);

    console.log("removePartyCards transaction sent:", hash);
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log(
      "removePartyCards transaction confirmed:",
      receipt.transactionHash
    );
  } catch (error: any) {
    console.error("Error executing removePartyCards:", error?.cause || error);
    return;
  }
};

export default removePartyCards;
