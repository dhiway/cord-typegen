/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
export default {
  rpc: {},
  types: {
    SchemaDetails: {
      schema_hash: 'HashOf',
      cid: 'Option<IdentifierOf>',
      parent_cid: 'Option<IdentifierOf>',
      creator: 'CordAccountOf',
      block: 'BlockNumber',
      permissioned: 'bool',
      revoked: 'bool'
    },
    SchemaCommit: {
      schema_hash: 'HashOf',
      cid: 'Option<IdentifierOf>',
      block: 'BlockNumber',
      commit: 'SchemaCommitOf'
    },
    SchemaCommitOf: {
      _enum: ['Genesis', 'Update', 'Delegates', 'RevokeDelegates', 'Permission', 'StatusChange']
    },
    PalletSchemaSchemasSchemaDetails: 'SchemaDetails',
    PalletSchemaSchemasSchemaCommit: 'SchemaCommit',
    PalletSchemaSchemasSchemaCommitOf: 'SchemaCommitOf'
  }
};
