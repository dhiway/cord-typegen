// Copyright 2017-2021 cord.network authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { u32 } from '@polkadot/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';

import {
  hasProposals as collectiveHasProposals,
  proposal as collectiveProposal,
  proposalCount as collectiveProposalCount,
  proposalHashes as collectiveProposalHashes,
  proposals as collectiveProposals
} from '../cordCollective';
import { memo } from '@polkadot/api-derive/util';

export function hasProposals(instanceId: string, api: ApiInterfaceRx): () => Observable<boolean> {
  return memo(instanceId, collectiveHasProposals(instanceId, api, 'networkCouncil'));
}

export function proposal(
  instanceId: string,
  api: ApiInterfaceRx
): (hash: Hash | Uint8Array | string) => Observable<DeriveCollectiveProposal | null> {
  return memo(instanceId, collectiveProposal(instanceId, api, 'networkCouncil'));
}

export function proposalCount(instanceId: string, api: ApiInterfaceRx): () => Observable<u32 | null> {
  return memo(instanceId, collectiveProposalCount(instanceId, api, 'networkCouncil'));
}

export function proposalHashes(instanceId: string, api: ApiInterfaceRx): () => Observable<Hash[]> {
  return memo(instanceId, collectiveProposalHashes(instanceId, api, 'networkCouncil'));
}

export function proposals(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveCollectiveProposal[]> {
  return memo(instanceId, collectiveProposals(instanceId, api, 'networkCouncil'));
}
