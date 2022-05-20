// Copyright 2019-2021 cord.network authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './interfaces/augment-api';
import './interfaces/augment-api-consts';
import './interfaces/augment-api-query';
import './interfaces/augment-api-rpc';
import './interfaces/augment-api-tx';
import './interfaces/augment-types';

import {
  rpc as cordRpc,
  signedExtensions as cordSignedExtensions,
  types2 as cordTypes,
  typesAlias as cordTypeAlias,
  typesBundle as cordTypesBundle
} from '@cord.network/type-definitions';

import {
  DefinitionRpc,
  DefinitionRpcSub,
  OverrideBundleType,
  OverrideModuleType,
  RegistryTypes
} from '@polkadot/types/types';

export const types: RegistryTypes = cordTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = cordRpc;

export const typesAlias: Record<string, OverrideModuleType> = cordTypeAlias;

export const typesBundle = cordTypesBundle as unknown as OverrideBundleType;

export const signedExtensions = cordSignedExtensions;
