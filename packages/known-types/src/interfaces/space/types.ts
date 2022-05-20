// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CordAccountOf, HashOf, StatusOf } from '@cord.network/known-types/interfaces/base';
import type { Struct } from '@polkadot/types-codec';

/** @name SpaceDetails */
export interface SpaceDetails extends Struct {
  readonly stream_hash: HashOf;
  readonly contoller: CordAccountOf;
  readonly archived: StatusOf;
}

export type PHANTOM_SPACE = 'space';
