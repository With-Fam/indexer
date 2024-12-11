import { Address } from "viem";
import { publicClient } from "libs/viem/publicClient";
import { HypersubAbi } from "abis/HypersubAbi";

const getBalanceOf = async (hypersub: Address, subscriber: Address) => {
  const balance = await publicClient.readContract({
    address: hypersub,
    abi: HypersubAbi,
    functionName: "balanceOf",
    args: [subscriber],
  });
  return balance;
};

export default getBalanceOf;
