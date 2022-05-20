/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
export default {
  rpc: {},
  types: {
    StreamDetails: {
      stream_hash: 'HashOf',
      controller: 'CordAccountOf',
      holder: 'Option<CordAccountOf>',
      schema: 'Option<IdOf>',
      link: 'Option<IdOf>',
      space_id: 'Option<IdentifierOf>',
      revoked: 'StatusOf'
    }
    // PalletStreamStreamsStreamDetails: 'StreamDetails'
  }
};
