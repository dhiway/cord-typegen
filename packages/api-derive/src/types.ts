// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Hash, Proposal, ProposalIndex, Votes } from '@polkadot/types/interfaces';
// import type { PalletTreasuryProposal } from '@polkadot/types/lookup';
import type { PalletNetworkTreasuryProposal } from '@cord.network/types/interfaces';

export interface DeriveCordCollectiveProposal {
  hash: Hash;
  proposal: Proposal;
  votes: Votes | null;
}

export interface DeriveNetworkTreasuryProposal {
  council: DeriveCordCollectiveProposal[];
  id: ProposalIndex;
  proposal: PalletNetworkTreasuryProposal;
}

export interface DeriveNetworkTreasuryProposals {
  approvals: DeriveNetworkTreasuryProposal[];
  proposalCount: ProposalIndex;
  proposals: DeriveNetworkTreasuryProposal[];
}

export type Collective = 'council' | 'membership' | 'networkCouncil';
