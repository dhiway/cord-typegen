// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BlockNumber } from '@cord.network/types/interfaces/runtime';
import type { Struct, bool } from '@polkadot/types-codec';

/** @name PalletEntityVerifiersVerifierDetails */
export interface PalletEntityVerifiersVerifierDetails extends VerifierDetails {}

/** @name VerifierDetails */
export interface VerifierDetails extends Struct {
  readonly block: BlockNumber;
  readonly revoked: bool;
}

export type PHANTOM_ENTITY = 'entity';
