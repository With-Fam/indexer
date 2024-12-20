export const PartyAbi = [
  {
    inputs: [
      {
        internalType: "contract IGlobals",
        name: "globals",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "AlreadyVotedError",
    type: "error",
  },
  {
    inputs: [],
    name: "BadPreciousListError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "proposalHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "actualHash",
        type: "bytes32",
      },
    ],
    name: "BadProposalHashError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum PartyGovernance.ProposalStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "BadProposalStatusError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
    ],
    name: "BelowMinWithdrawAmountError",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotDisableRageQuitAfterInitializationError",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotEnableRageQuitIfNotDistributionsRequireVoteError",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotModifyTotalVotingPowerAndAcceptError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "rageQuitTimestamp",
        type: "uint40",
      },
    ],
    name: "CannotRageQuitError",
    type: "error",
  },
  {
    inputs: [],
    name: "DistributionsRequireVoteError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "errData",
        type: "bytes",
      },
    ],
    name: "EthTransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "maxExecutableTime",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "timestamp",
        type: "uint40",
      },
    ],
    name: "ExecutionTimeExceededError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "rageQuitTimestamp",
        type: "uint40",
      },
    ],
    name: "FixedRageQuitTimestampError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int192",
        name: "i192",
        type: "int192",
      },
    ],
    name: "Int192ToUint96CastOutOfRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "bps",
        type: "uint16",
      },
    ],
    name: "InvalidBpsError",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDelegateError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "InvalidGovernanceParameter",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidNewHostError",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTokenOrderError",
    type: "error",
  },
  {
    inputs: [],
    name: "MismatchedPreciousListLengths",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "NotATokenError",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "NotMinted",
    type: "error",
  },
  {
    inputs: [],
    name: "NothingToBurnError",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyDelegateCallError",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyWhenEmergencyActionsAllowedError",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyWhenEnabledError",
    type: "error",
  },
  {
    inputs: [],
    name: "PartyNotStartedError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "currentTime",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "cancelTime",
        type: "uint40",
      },
    ],
    name: "ProposalCannotBeCancelledYetError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenTransferFailedError",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManyHosts",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "v",
        type: "uint256",
      },
    ],
    name: "Uint256ToInt192CastOutOfRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "v",
        type: "uint256",
      },
    ],
    name: "Uint256ToUint96CastOutOfRange",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsafeRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votingPower",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum ITokenDistributor.TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "DistributionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountEth",
        type: "uint256",
      },
    ],
    name: "EmergencyExecute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EmergencyExecuteDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldHost",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newHost",
        type: "address",
      },
    ],
    name: "HostStatusTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "intrinsicVotingPower",
        type: "uint256",
      },
    ],
    name: "PartyCardIntrinsicVotingPowerSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "PartyDelegateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint40",
        name: "timestamp",
        type: "uint40",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "delegatedVotingPower",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "intrinsicVotingPower",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isDelegated",
        type: "bool",
      },
    ],
    name: "PartyVotingSnapshotCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
    ],
    name: "ProposalAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "nextProgressData",
        type: "bytes",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalPassed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "host",
        type: "address",
      },
    ],
    name: "ProposalVetoed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint40",
            name: "maxExecutableTime",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "cancelDelay",
            type: "uint40",
          },
          {
            internalType: "bytes",
            name: "proposalData",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct PartyGovernance.Proposal",
        name: "proposal",
        type: "tuple",
      },
    ],
    name: "Proposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "contract IERC20[]",
        name: "withdrawTokens",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "RageQuit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint40",
        name: "oldRageQuitTimestamp",
        type: "uint40",
      },
      {
        indexed: false,
        internalType: "uint40",
        name: "newRageQuitTimestamp",
        type: "uint40",
      },
    ],
    name: "RageQuitSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "IMPL",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION_ID",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "abdicateAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPartyHost",
        type: "address",
      },
    ],
    name: "abdicateHost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "snapIndex",
        type: "uint256",
      },
    ],
    name: "accept",
    outputs: [
      {
        internalType: "uint256",
        name: "totalVotes",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "authority",
        type: "address",
      },
    ],
    name: "addAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint40",
            name: "maxExecutableTime",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "cancelDelay",
            type: "uint40",
          },
          {
            internalType: "bytes",
            name: "proposalData",
            type: "bytes",
          },
        ],
        internalType: "struct PartyGovernance.Proposal",
        name: "proposal",
        type: "tuple",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "votingPower",
        type: "uint96",
      },
    ],
    name: "decreaseTotalVotingPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint96",
        name: "votingPower",
        type: "uint96",
      },
    ],
    name: "decreaseVotingPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "delegateCallAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "delegateVotingPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "delegationsByVoter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disableEmergencyExecute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum ITokenDistributor.TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "distribute",
    outputs: [
      {
        components: [
          {
            internalType: "enum ITokenDistributor.TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "distributionId",
            type: "uint256",
          },
          {
            internalType: "contract Party",
            name: "party",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "feeRecipient",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "memberSupply",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "fee",
            type: "uint128",
          },
          {
            internalType: "uint96",
            name: "totalShares",
            type: "uint96",
          },
        ],
        internalType: "struct ITokenDistributor.DistributionInfo",
        name: "distInfo",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "targetCallData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountEth",
        type: "uint256",
      },
    ],
    name: "emergencyExecute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyExecuteDisabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint40",
            name: "maxExecutableTime",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "cancelDelay",
            type: "uint40",
          },
          {
            internalType: "bytes",
            name: "proposalData",
            type: "bytes",
          },
        ],
        internalType: "struct PartyGovernance.Proposal",
        name: "proposal",
        type: "tuple",
      },
      {
        internalType: "contract IERC721[]",
        name: "preciousTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "preciousTokenIds",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "progressData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeBps",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRecipient",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "timestamp",
        type: "uint40",
      },
    ],
    name: "findVotingPowerSnapshotIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getDistributionShareOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGovernanceValues",
    outputs: [
      {
        components: [
          {
            internalType: "uint40",
            name: "voteDuration",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "executionDelay",
            type: "uint40",
          },
          {
            internalType: "uint16",
            name: "passThresholdBps",
            type: "uint16",
          },
          {
            internalType: "uint96",
            name: "totalVotingPower",
            type: "uint96",
          },
        ],
        internalType: "struct ProposalStorage.GovernanceValues",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProposalEngineOpts",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "enableAddAuthorityProposal",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "allowArbCallsToSpendPartyEth",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "allowOperators",
            type: "bool",
          },
          {
            internalType: "enum ProposalStorage.DistributionsConfig",
            name: "distributionsConfig",
            type: "uint8",
          },
        ],
        internalType: "struct ProposalStorage.ProposalEngineOpts",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProposalExecutionEngine",
    outputs: [
      {
        internalType: "contract IProposalExecutionEngine",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint40",
            name: "maxExecutableTime",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "cancelDelay",
            type: "uint40",
          },
          {
            internalType: "bytes",
            name: "proposalData",
            type: "bytes",
          },
        ],
        internalType: "struct PartyGovernance.Proposal",
        name: "proposal",
        type: "tuple",
      },
    ],
    name: "getProposalHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "proposalHash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getProposalStateInfo",
    outputs: [
      {
        internalType: "enum PartyGovernance.ProposalStatus",
        name: "status",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint40",
            name: "proposedTime",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "passedTime",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "executedTime",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "completedTime",
            type: "uint40",
          },
          {
            internalType: "uint96",
            name: "votes",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "totalVotingPower",
            type: "uint96",
          },
          {
            internalType: "uint8",
            name: "numHosts",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "numHostsAccepted",
            type: "uint8",
          },
          {
            internalType: "uint40",
            name: "voteDuration",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "executionDelay",
            type: "uint40",
          },
          {
            internalType: "uint16",
            name: "passThresholdBps",
            type: "uint16",
          },
        ],
        internalType: "struct PartyGovernance.ProposalStateValues",
        name: "values",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "timestamp",
        type: "uint40",
      },
      {
        internalType: "uint256",
        name: "snapIndex",
        type: "uint256",
      },
    ],
    name: "getVotingPowerAt",
    outputs: [
      {
        internalType: "uint96",
        name: "votingPower",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getVotingPowerShareOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "votingPower",
        type: "uint96",
      },
    ],
    name: "increaseTotalVotingPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint96",
        name: "votingPower",
        type: "uint96",
      },
    ],
    name: "increaseVotingPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "address[]",
                    name: "hosts",
                    type: "address[]",
                  },
                  {
                    internalType: "uint40",
                    name: "voteDuration",
                    type: "uint40",
                  },
                  {
                    internalType: "uint40",
                    name: "executionDelay",
                    type: "uint40",
                  },
                  {
                    internalType: "uint16",
                    name: "passThresholdBps",
                    type: "uint16",
                  },
                  {
                    internalType: "uint96",
                    name: "totalVotingPower",
                    type: "uint96",
                  },
                  {
                    internalType: "uint16",
                    name: "feeBps",
                    type: "uint16",
                  },
                  {
                    internalType: "address payable",
                    name: "feeRecipient",
                    type: "address",
                  },
                ],
                internalType: "struct PartyGovernance.GovernanceOpts",
                name: "governance",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "bool",
                    name: "enableAddAuthorityProposal",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "allowArbCallsToSpendPartyEth",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "allowOperators",
                    type: "bool",
                  },
                  {
                    internalType: "enum ProposalStorage.DistributionsConfig",
                    name: "distributionsConfig",
                    type: "uint8",
                  },
                ],
                internalType: "struct ProposalStorage.ProposalEngineOpts",
                name: "proposalEngine",
                type: "tuple",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "customizationPresetId",
                type: "uint256",
              },
            ],
            internalType: "struct Party.PartyOptions",
            name: "options",
            type: "tuple",
          },
          {
            internalType: "contract IERC721[]",
            name: "preciousTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "preciousTokenIds",
            type: "uint256[]",
          },
          {
            internalType: "address[]",
            name: "authorities",
            type: "address[]",
          },
          {
            internalType: "uint40",
            name: "rageQuitTimestamp",
            type: "uint40",
          },
        ],
        internalType: "struct Party.PartyInitData",
        name: "initData",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isAuthority",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isHost",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastProposalId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTotalVotingPowerChangeTimestamp",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "votingPower",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintedVotingPower",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numHosts",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "preciousListHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint40",
            name: "maxExecutableTime",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "cancelDelay",
            type: "uint40",
          },
          {
            internalType: "bytes",
            name: "proposalData",
            type: "bytes",
          },
        ],
        internalType: "struct PartyGovernance.Proposal",
        name: "proposal",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "latestSnapIndex",
        type: "uint256",
      },
    ],
    name: "propose",
    outputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "contract IERC20[]",
        name: "withdrawTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minWithdrawAmounts",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "rageQuit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rageQuitTimestamp",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint40",
        name: "newRageQuitTimestamp",
        type: "uint40",
      },
    ],
    name: "setRageQuit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenCount",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "veto",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votingPowerByTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
] as const;
