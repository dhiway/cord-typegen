// Copyright 2017-2021 cord.network authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId } from '@polkadot/types/interfaces';

import { members as collectiveMembers } from '../cordCollective';
import { memo } from '@polkadot/api-derive/util';

export function members(instanceId: string, api: ApiInterfaceRx): () => Observable<AccountId[]> {
  return memo(instanceId, collectiveMembers(instanceId, api, 'networkCouncil'));
}
