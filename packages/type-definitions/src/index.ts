/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import type { OverrideVersionedType } from '@polkadot/types/types';

import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';

import base from './base';
import builderTreasury from './builderTreasury';
import cordv1 from './cordv1';
import delegation from './delegation';
import entity from './entity';
import mark from './mark';
import schema from './schema';
import { signedExtensions as cordSignedExtensions } from './signedExtensions';
import stream from './stream';

const cordDefsV4 = {
  cordv1,
  mark,
  delegation
};

const cordDefsV5 = {
  base,
  entity,
  schema,
  stream,
  builderTreasury
};

export const types04 = {
  ...typesFromDefs(cordDefsV4)
};

export const types05 = {
  ...typesFromDefs(cordDefsV5)
};
export const rpc = jsonrpcFromDefs(cordDefsV5);
export const typesAlias = typesAliasFromDefs(cordDefsV5);

const cordVersioned: OverrideVersionedType[] = [
  {
    minmax: [400, 499],
    types: {
      ...types04
    }
  },
  {
    minmax: [500, undefined],
    types: {
      ...types05
    }
  }
];

function getBundle (versioned: OverrideVersionedType[]) {
  return {
    rpc,
    instances: {
      council: ['generalCouncil', 'builderCouncil'],
      technicalCommitee: ['techinicalCouncil']
    },
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
