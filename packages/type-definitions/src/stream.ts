/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
export default {
  rpc: {},
  types: {
    StreamDetails: {
      stream_hash: 'HashOf',
      cid: 'Option<IdentifierOf>',
      parent_cid: 'Option<IdentifierOf>',
      schema: 'Option<IdOf>',
      link: 'Option<IdOf>',
      creator: 'CordAccountOf',
      block: 'BlockNumber',
      revoked: 'bool'
    },
    StreamCommit: {
      stream_hash: 'HashOf',
      cid: 'Option<IdentifierOf>',
      block: 'BlockNumber',
      commit: 'StreamCommitOf'
    },
    StreamCommitOf: {
      _enum: ['Genesis', 'Update', 'StatusChange']
    },
    StreamLink: {
      identifier: 'IdOf',
      creator: 'CordAccountOf'
    },
    PalletStreamStreamsStreamDetails: 'StreamDetails',
    PalletStreamStreamsStreamCommit: 'StreamCommit',
    PalletStreamStreamsStreamCommitOf: 'StreamCommitOf',
    PalletStreamStreamsStreamLink: 'StreamLink'
  }
};
