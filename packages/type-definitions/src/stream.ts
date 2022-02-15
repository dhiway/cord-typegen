/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
export default {
  rpc: {},
  types: {
    StreamDetails: {
      stream_id: 'IdOf',
      creator: 'CordAccountOf',
      holder: 'Option<CordAccountOf>',
      schema: 'Option<IdOf>',
      cid: 'Option<CidOf>',
      parent: 'Option<HashOf>',
      link: 'Option<IdOf>',
      revoked: 'StatusOf'
    }
    // PalletStreamStreamsStreamDetails: 'StreamDetails'
  }
};
