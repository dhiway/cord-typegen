// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CordAccountOf, HashOf, IdentifierOf } from '@cord.network/types/interfaces/base';
import type { BlockNumber } from '@cord.network/types/interfaces/runtime';
import type { Enum, Option, Struct, bool } from '@polkadot/types';

/** @name PalletSchemaSchemasSchemaCommit */
export interface PalletSchemaSchemasSchemaCommit extends SchemaCommit {}

/** @name PalletSchemaSchemasSchemaCommitOf */
export interface PalletSchemaSchemasSchemaCommitOf extends SchemaCommitOf {}

/** @name PalletSchemaSchemasSchemaDetails */
export interface PalletSchemaSchemasSchemaDetails extends SchemaDetails {}

/** @name SchemaCommit */
export interface SchemaCommit extends Struct {
  readonly hash: HashOf;
  readonly cid: Option<IdentifierOf>;
  readonly block: BlockNumber;
  readonly commit: SchemaCommitOf;
}

/** @name SchemaCommitOf */
export interface SchemaCommitOf extends Enum {
  readonly isGenesis: boolean;
  readonly isUpdate: boolean;
  readonly isDelegates: boolean;
  readonly isRevokeDelegates: boolean;
  readonly isPermission: boolean;
  readonly isStatusChange: boolean;
}

/** @name SchemaDetails */
export interface SchemaDetails extends Struct {
  readonly hash: HashOf;
  readonly cid: Option<IdentifierOf>;
  readonly parent_cid: Option<IdentifierOf>;
  readonly creator: CordAccountOf;
  readonly block: BlockNumber;
  readonly permissioned: bool;
  readonly revoked: bool;
}

export type PHANTOM_SCHEMA = 'schema';
