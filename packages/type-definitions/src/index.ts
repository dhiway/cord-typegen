/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import type { OverrideVersionedType } from '@polkadot/types/types';

import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';

import base from './base';
import cordv1 from './cordv1';
import delegation from './delegation';
import entity from './entity';
import mark from './mark';
import schema from './schema';
import { signedExtensions as cordSignedExtensions } from './signedExtensions';
import stream from './stream';

const cordDefsV0 = {
  cordv1,
  mark,
  delegation
};

const cordDefsV1 = {
  base,
  entity,
  schema,
  stream
};

const cordDefsV2 = {
  base,
  schema,
  stream
};

export const types0 = {
  ...typesFromDefs(cordDefsV0)
};

export const types1 = {
  ...typesFromDefs(cordDefsV1)
};
export const types2 = {
  ...typesFromDefs(cordDefsV2)
};

export const rpc = jsonrpcFromDefs(cordDefsV2);
export const typesAlias = typesAliasFromDefs(cordDefsV2);

const cordVersioned: OverrideVersionedType[] = [
  {
    minmax: [0, 99],
    types: {
      ...types0
    }
  },
  {
    minmax: [100, 199],
    types: {
      ...types1
    }
  },
  {
    minmax: [200, undefined],
    types: {
      ...types2
    }
  }
];

function getBundle(versioned: OverrideVersionedType[]) {
  return {
    rpc,
    types: [...versioned].map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...version.types
        }
      };
    }),
    alias: typesAlias
  };
}

export const typesBundle = {
  spec: {
    cord: getBundle(cordVersioned)
  }
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    cord: getBundle(cordVersioned)
  }
};

export const signedExtensions = cordSignedExtensions;
