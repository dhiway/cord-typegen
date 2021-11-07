// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CordAccountOf, HashOf, IdOf, IdentifierOf } from '@cordnetwork/types/interfaces/base';
import type { BlockNumber } from '@cordnetwork/types/interfaces/runtime';
import type { Enum, Option, Struct, bool } from '@polkadot/types';

/** @name PalletStreamStreamsStreamCommit */
export interface PalletStreamStreamsStreamCommit extends StreamCommit {}

/** @name PalletStreamStreamsStreamCommitOf */
export interface PalletStreamStreamsStreamCommitOf extends StreamCommitOf {}

/** @name PalletStreamStreamsStreamDetails */
export interface PalletStreamStreamsStreamDetails extends StreamDetails {}

/** @name PalletStreamStreamsStreamLink */
export interface PalletStreamStreamsStreamLink extends StreamLink {}

/** @name StreamCommit */
export interface StreamCommit extends Struct {
  readonly hash: HashOf;
  readonly cid: Option<IdentifierOf>;
  readonly block: BlockNumber;
  readonly commit: StreamCommitOf;
}

/** @name StreamCommitOf */
export interface StreamCommitOf extends Enum {
  readonly isCreate: boolean;
  readonly isUpdate: boolean;
  readonly isStatus: boolean;
}

/** @name StreamDetails */
export interface StreamDetails extends Struct {
  readonly streamHash: HashOf;
  readonly cid: Option<IdentifierOf>;
  readonly parent_cid: Option<IdentifierOf>;
  readonly schema: Option<IdOf>;
  readonly link: Option<IdOf>;
  readonly creator: CordAccountOf;
  readonly block: BlockNumber;
  readonly revoked: bool;
}

/** @name StreamLink */
export interface StreamLink extends Struct {
  readonly identifier: IdOf;
  readonly creator: CordAccountOf;
}

export type PHANTOM_STREAM = 'stream';
