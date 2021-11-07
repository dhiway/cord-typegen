/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { Metadata } from '@polkadot/types';
import { TypeRegistry } from '@polkadot/types/create';
import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';
import {
  generateDefaultConsts,
  generateDefaultQuery,
  generateDefaultTx,
  generateDefaultRpc
} from '@polkadot/typegen/generate';
import { registerDefinitions } from '@polkadot/typegen/util';
import metaHex from '../src/metadata/static-latest';

import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';

import * as cordDefinitions from '../src/interfaces/definitions';

// Only keep our own pallets to avoid conflicts with the one provided by polkadot.js
function filterPallets(names: string[], defs: any): string {
  const registry = new TypeRegistry();
  registerDefinitions(registry, defs);
  const metadata = new Metadata(registry, metaHex);

  // hack https://github.com/polkadot-js/api/issues/2687#issuecomment-705342442
  metadata.asLatest.toJSON();
  const filtered = metadata.toJSON() as any;

  filtered.metadata.v14.pallets = filtered.metadata.v14.pallets.filter(({ name }: any) => names.includes(name));

  return new Metadata(registry, filtered).toHex();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime, ...substrateDefinitions } = defaultDefinitions;

const definitions = {
  '@polkadot/types/interfaces': substrateDefinitions,
  '@cordnetwork/types/interfaces': cordDefinitions
} as any;

const metadata = filterPallets(
  [
    'System',
    'GeneralCouncil',
    'BuilderCouncil',
    'BuilderCouncilMembership',
    'TechnicalCouncil',
    'TechnicalCouncilMembership',
    'BuilderTreasury',
    'Entity',
    'Schema',
    'Stream'
  ],
  definitions
);

generateTsDef(definitions, 'packages/types/src/interfaces', '@cordnetwork/types/interfaces');
generateInterfaceTypes(definitions, 'packages/types/src/interfaces/augment-types.ts');
generateDefaultConsts('packages/types/src/interfaces/augment-api-consts.ts', metadata, definitions);
generateDefaultTx('packages/types/src/interfaces/augment-api-tx.ts', metadata, definitions);
generateDefaultQuery('packages/types/src/interfaces/augment-api-query.ts', metadata, definitions);
generateDefaultRpc('packages/types/src/interfaces/augment-api-rpc.ts', definitions);