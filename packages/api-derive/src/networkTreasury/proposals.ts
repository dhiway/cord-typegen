// Copyright 2017-2021 cord.network authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { ProposalIndex } from '@polkadot/types/interfaces';
import type { PalletNetworkTreasuryProposal } from '@cord.network/types/interfaces';
import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';

import type {
  DeriveCordCollectiveProposal,
  DeriveNetworkTreasuryProposal,
  DeriveNetworkTreasuryProposals
} from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '@polkadot/api-derive/util';

interface Result {
  allIds: ProposalIndex[];
  allProposals: Option<PalletNetworkTreasuryProposal>[];
  approvalIds: ProposalIndex[];
  councilProposals: DeriveCollectiveProposal[];
  proposalCount: ProposalIndex;
}

function parseResult(
  api: ApiInterfaceRx,
  { allIds, allProposals, approvalIds, councilProposals, proposalCount }: Result
): DeriveNetworkTreasuryProposals {
  const approvals: DeriveNetworkTreasuryProposal[] = [];
  const proposals: DeriveNetworkTreasuryProposal[] = [];
  const networkTreasury = councilProposals.filter(
    ({ proposal }) =>
      api.tx.networkTreasury.approveProposal.is(proposal) || api.tx.networkTreasury.rejectProposal.is(proposal)
  );

  allIds.forEach((id, index): void => {
    if (allProposals[index].isSome) {
      const council = networkTreasury
        .filter(({ proposal }) => id.eq(proposal.args[0]))
        .sort((a, b) => a.proposal.method.localeCompare(b.proposal.method));
      const isApproval = approvalIds.some((approvalId) => approvalId.eq(id));
      const derived = { council, id, proposal: allProposals[index].unwrap() };

      if (isApproval) {
        approvals.push(derived);
      } else {
        proposals.push(derived);
      }
    }
  });

  return { approvals, proposalCount, proposals };
}

function retrieveProposals(
  api: ApiInterfaceRx,
  proposalCount: ProposalIndex,
  approvalIds: ProposalIndex[]
): Observable<DeriveNetworkTreasuryProposals> {
  const proposalIds: ProposalIndex[] = [];
  const count = proposalCount.toNumber();

  for (let index = 0; index < count; index++) {
    if (!approvalIds.some((id) => id.eqn(index))) {
      proposalIds.push(api.registry.createType('ProposalIndex', index));
    }
  }

  const allIds = [...proposalIds, ...approvalIds];

  return combineLatest([
    api.query.networkTreasury.proposals.multi(allIds),
    // api.query.networkCouncil ?
    // api.query.networkCouncil.proposals()
    // :
    of([] as DeriveCordCollectiveProposal[])
  ]).pipe(
    map(
      ([allProposals, councilProposals]: [
        Option<PalletNetworkTreasuryProposal>[],
        DeriveCordCollectiveProposal[]
      ]): DeriveNetworkTreasuryProposals =>
        parseResult(api, { allIds, allProposals, approvalIds, councilProposals, proposalCount })
    )
  );
}

/**
 * @description Retrieve all active and approved treasury proposals, along with their info
 */
export function proposals(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveNetworkTreasuryProposals> {
  return memo(
    instanceId,
    (): Observable<DeriveNetworkTreasuryProposals> =>
      api.query.networkTreasury
        ? combineLatest([api.query.networkTreasury.proposalCount(), api.query.networkTreasury.approvals()]).pipe(
            switchMap(([proposalCount, approvalIds]: [ProposalIndex, ProposalIndex[]]) =>
              retrieveProposals(api, proposalCount, approvalIds)
            )
          )
        : of({
            approvals: [],
            proposalCount: api.registry.createType('ProposalIndex'),
            proposals: []
          } as DeriveNetworkTreasuryProposals)
  );
}
