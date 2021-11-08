// Copyright 2017-2021 @cordnetwork/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Metadata } from '@polkadot/types';
import { TypeRegistry } from '@polkadot/types/create';

import metaHex from '../src/metadata/static-latest';

const POLKADOT_KNOWN_ORIGINS: Record<string, string> = {
  Council: 'CollectiveOrigin',
  System: 'SystemOrigin',
  TechnicalCommittee: 'CollectiveOrigin'
};

const CORD_KNOWN_ORIGINS: Record<string, string> = {
  NetworkCouncil: 'CollectiveOrigin'
};

const KNOWN_ORIGINS = {
  ...POLKADOT_KNOWN_ORIGINS,
  ...CORD_KNOWN_ORIGINS
};

function getOriginCallerDef(): void {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, metaHex);
  const modules = metadata.asLatest.pallets;

  const isIndexed = modules.some(({ index }) => !index.eqn(255));

  const moduleIndex = modules
    .map((mod, index): [string, number] => [mod.name.toString(), isIndexed ? mod.index.toNumber() : index])
    .sort((a, b) => a[1] - b[1]);

  const def = {
    OriginCaller: {
      _enum: moduleIndex.reduce((result: Record<string, string>, [name, index]): Record<string, string> => {
        for (let i = Object.keys(result).length; i < index; i++) {
          result[`Empty${i}`] = 'Null';
        }

        result[name] = KNOWN_ORIGINS[name] || 'Null';

        return result;
      }, {})
    }
  };

  console.log(JSON.stringify(def));
}

getOriginCallerDef();
