/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
export default {
  rpc: {},
  types: {
    SchemaDetails: {
      version: 'VersionOf',
      schema_id: 'IdOf',
      creator: 'CordAccountOf',
      cid: 'Option<CidOf>',
      parent: 'Option<HashOf>',
      block: 'BlockNumber',
      permissioned: 'StatusOf',
      revoked: 'StatusOf'
    }
    // PalletSchemaSchemasSchemaDetails: 'SchemaDetails'
  }
};
