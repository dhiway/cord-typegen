/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
export default {
  rpc: {},
  types: {
    ProductDetails: {
      tx_hash: 'HashOf',
      cid: 'Option<IdentifierOf>',
      parent_cid: 'Option<IdentifierOf>',
      store_id: 'Option<IdOf>',
      schema: 'Option<IdOf>',
      link: 'Option<IdOf>',
      creator: 'CordAccountOf',
      price: 'Option<u32>',
      rating: 'Option<u32>',
      block: 'BlockNumber',
      status: 'bool'
    },
    ProductCommit: {
      ProductHash: 'HashOf',
      cid: 'Option<IdentifierOf>',
      block: 'BlockNumber',
      commit: 'ProductCommitOf'
    },
    ProductCommitOf: {
      _enum: ['Create', 'List', 'Update', 'Order', 'Return', 'Rating', 'StatusChange']
    },
    ProductLink: {
      identifier: 'IdOf',
      store_id: 'IdOf',
      creator: 'CordAccountOf'
    },
    PalletProductProductsProductDetails: 'ProductDetails',
    PalletProductProductsProductCommit: 'ProductCommit',
    PalletProductProductsProductCommitOf: 'ProductCommitOf',
    PalletProductProductsProductLink: 'ProductLink'
  }
};
