// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CordAccountOf, HashOf, IdentifierOf, StatusOf } from '@cord.network/known-types/interfaces/base';
import type { Option, Struct } from '@polkadot/types-codec';

/** @name StreamDetails */
export interface StreamDetails extends Struct {
  readonly stream_hash: HashOf;
  readonly controller: CordAccountOf;
  readonly holder: Option<CordAccountOf>;
  readonly schema: Option<IdentifierOf>;
  readonly link: Option<IdentifierOf>;
  readonly space: Option<IdentifierOf>;
  readonly revoked: StatusOf;
}

export type PHANTOM_STREAM = 'stream';
