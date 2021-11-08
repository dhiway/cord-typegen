// Copyright 2017-2021 @cordnetwork/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { derive as cordDerives } from '@cordnetwork/api-derive';

import {
  rpc as cordRpc,
  signedExtensions as cordSignedExtensions,
  types as cordTypes,
  typesAlias as cordTypesAlias,
  typesBundle as cordTypesBundle
} from '@cordnetwork/types';

import { ApiOptions } from '@polkadot/api/types';

export const defaultOptions: ApiOptions = {
  rpc: cordRpc,
  types: cordTypes
};

export const options = ({
  types = {},
  rpc = {},
  signedExtensions,
  typesAlias = {},
  typesBundle = {},
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  rpc: {
    ...cordRpc,
    ...rpc
  },
  signedExtensions: {
    ...cordSignedExtensions,
    ...signedExtensions
  },
  types: {
    ...types
  },
  typesAlias: {
    ...cordTypesAlias,
    ...typesAlias
  },
  derives: {
    ...cordDerives
  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      cord: {
        ...cordTypesBundle?.spec?.cord,
        ...typesBundle?.spec?.cord
      }
    }
  },
  ...otherOptions
});
