// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { PalletEntityVerifiersVerifierDetails } from '@cord.network/types/interfaces/entity';
import type { PalletNetworkTreasuryProposal } from '@cord.network/types/interfaces/networkTreasury';
import type { AccountId32, Call, H256 } from '@cord.network/types/interfaces/runtime';
import type { PalletSchemaSchemasSchemaCommit, PalletSchemaSchemasSchemaDetails } from '@cord.network/types/interfaces/schema';
import type { PalletStreamStreamsStreamCommit, PalletStreamStreamsStreamDetails, PalletStreamStreamsStreamLink } from '@cord.network/types/interfaces/stream';
import type { ApiTypes } from '@polkadot/api/types';
import type { Bytes, Option, Vec, bool, u32 } from '@polkadot/types';
import type { FrameSupportWeightsPerDispatchClassU64, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, PalletCollectiveVotes, SpRuntimeGenericDigest } from '@polkadot/types/lookup';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    entity: {
      /**
       * identity verification information stored on chain.
       * It maps from an identity to its verification status.
       **/
      entities: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<bool>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * registrars stored on-chain.
       **/
      verifiers: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletEntityVerifiersVerifierDetails>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    networkCouncil: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    networkCouncilMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    networkTreasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNetworkTreasuryProposal>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    schema: {
      /**
       * schema commits stored on chain.
       * It maps from a schema Id to a vector of commit details.
       **/
      commits: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Vec<PalletSchemaSchemasSchemaCommit>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * transactions stored on chain.
       * It maps from an identifier to a vector of delegates.
       **/
      delegations: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<AccountId32>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * schemas stored on chain.
       * It maps from a schema identifier to its details.
       **/
      schemas: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletSchemaSchemasSchemaDetails>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    stream: {
      /**
       * stream commit details stored on chain.
       * It maps from a stream Id to a vector of commit details.
       **/
      commits: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Vec<PalletStreamStreamsStreamCommit>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * stream links stored on chain.
       * It maps from a stream Id to a vector of stream links.
       **/
      links: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Vec<PalletStreamStreamsStreamLink>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * stream hashes stored on chain.
       * It maps from a stream hash to Id (resolve from hash).
       **/
      streamHash: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<H256>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * streams stored on chain.
       * It maps from stream Id to its details.
       **/
      streams: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletStreamStreamsStreamDetails>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportWeightsPerDispatchClassU64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeGenericDigest>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: This storage item is explicitly unbounded since it is never intended to be read
       * from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    [key: string]: QueryableModuleStorage<ApiType>;
  }
}
