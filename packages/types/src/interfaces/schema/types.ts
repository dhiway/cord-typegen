// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CidOf, CordAccountOf, HashOf, IdOf, StatusOf, VersionOf } from '@cord.network/types/interfaces/base';
import type { BlockNumber } from '@cord.network/types/interfaces/runtime';
import type { Option, Struct } from '@polkadot/types-codec';

/** @name SchemaDetails */
export interface SchemaDetails extends Struct {
  readonly version: VersionOf;
  readonly schema_id: IdOf;
  readonly creator: CordAccountOf;
  readonly cid: Option<CidOf>;
  readonly parent: Option<HashOf>;
  readonly block: BlockNumber;
  readonly permissioned: StatusOf;
  readonly revoked: StatusOf;
}

export type PHANTOM_SCHEMA = 'schema';
