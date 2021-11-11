// Copyright 2019-2021 cord.network authors & contributors
// SPDX-License-Identifier: Apache-2.0

export default {
  rpc: {},
  types: {
    VerifierDetails: {
      block: 'BlockNumber',
      revoked: 'bool'
    },
    PalletEntityVerifiersVerifierDetails: 'VerifierDetails'
  }
};
