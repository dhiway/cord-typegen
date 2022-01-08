// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CordAccountOf, HashOf, IdOf, IdentifierOf } from '@cord.network/types/interfaces/base';
import type { BlockNumber } from '@cord.network/types/interfaces/runtime';
import type { Enum, Option, Struct, bool, u32, u8 } from '@polkadot/types';

/** @name PalletProductProductsProductCommit */
export interface PalletProductProductsProductCommit extends ProductCommit {}

/** @name PalletProductProductsProductCommitOf */
export interface PalletProductProductsProductCommitOf extends ProductCommitOf {}

/** @name PalletProductProductsProductDetails */
export interface PalletProductProductsProductDetails extends ProductDetails {}

/** @name PalletProductProductsProductLink */
export interface PalletProductProductsProductLink extends ProductLink {}

/** @name ProductCommit */
export interface ProductCommit extends Struct {
  readonly ProductHash: HashOf;
  readonly cid: Option<IdentifierOf>;
  readonly block: BlockNumber;
  readonly commit: ProductCommitOf;
}

/** @name ProductCommitOf */
export interface ProductCommitOf extends Enum {
  readonly isCreate: boolean;
  readonly isList: boolean;
  readonly isUpdate: boolean;
  readonly isOrder: boolean;
  readonly isReturn: boolean;
  readonly isRating: boolean;
  readonly isStatusChange: boolean;
}

/** @name ProductDetails */
export interface ProductDetails extends Struct {
  readonly tx_hash: HashOf;
  readonly cid: Option<IdentifierOf>;
  readonly parent_cid: Option<IdentifierOf>;
  readonly store_id: Option<IdOf>;
  readonly schema: Option<IdOf>;
  readonly link: Option<IdOf>;
  readonly creator: CordAccountOf;
  readonly price: Option<u32>;
  readonly rating: Option<u8>;
  readonly block: BlockNumber;
  readonly status: bool;
}

/** @name ProductLink */
export interface ProductLink extends Struct {
  readonly identifier: IdOf;
  readonly store_id: IdOf;
  readonly creator: CordAccountOf;
}

export type PHANTOM_PRODUCT = 'product';
