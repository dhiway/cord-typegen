// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CordAccountOf, HashOf, IdentifierOf, StatusOf } from '@cord.network/types/interfaces/base';
import type { Option, Struct } from '@polkadot/types-codec';

/** @name SchemaDetails */
export interface SchemaDetails extends Struct {
  readonly schema_hash: HashOf;
  readonly contoller: CordAccountOf;
  readonly space_id: Option<IdentifierOf>;
  readonly revoked: StatusOf;
}

export type PHANTOM_SCHEMA = 'schema';
