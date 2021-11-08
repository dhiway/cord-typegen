// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId } from '@polkadot/types/interfaces';

import { prime as collectivePrime } from '../cordCollective';
import { memo } from '@polkadot/api-derive/util';

export function prime(instanceId: string, api: ApiInterfaceRx): () => Observable<AccountId | null> {
  return memo(instanceId, collectivePrime(instanceId, api, 'networkCouncil'));
}
