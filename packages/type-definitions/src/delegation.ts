/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
export default {
  rpc: {},
  types: {
    DelegationNode: {
      rootId: 'DelegationNodeId',
      parent: 'Option<DelegationNodeId>',
      owner: 'AccountId',
      permissions: 'Permissions',
      revoked: 'bool'
    },
    DelegationNodeId: 'Hash',
    DelegationRoot: {
      mtypeHash: 'Hash',
      owner: 'AccountId',
      revoked: 'bool'
    }
  }
};
