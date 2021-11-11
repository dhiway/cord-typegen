// Copyright 2017-2021 cord.network authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { DeriveCustom } from '@polkadot/api-derive';

import * as cordCollective from './cordCollective';
import * as networkCouncil from './networkCouncil';
import * as networkTreasury from './networkTreasury';

export const derive: DeriveCustom = {
  cordCollective: cordCollective as unknown as DeriveCustom[string],
  networkCouncil: networkCouncil as unknown as DeriveCustom[string],
  networkTreasury: networkTreasury as unknown as DeriveCustom[string]
};

export * from './types';
