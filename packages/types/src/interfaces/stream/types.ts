// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CidOf, CordAccountOf, HashOf, IdOf, StatusOf } from '@cord.network/types/interfaces/base';
import type { Option, Struct } from '@polkadot/types-codec';

/** @name StreamDetails */
export interface StreamDetails extends Struct {
  readonly stream_id: IdOf;
  readonly creator: CordAccountOf;
  readonly holder: Option<CordAccountOf>;
  readonly schema: Option<IdOf>;
  readonly cid: Option<CidOf>;
  readonly parent: Option<HashOf>;
  readonly link: Option<IdOf>;
  readonly revoked: StatusOf;
}

export type PHANTOM_STREAM = 'stream';
