/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry';
import { generateDefaultLookup } from '@polkadot/typegen/generate/lookup';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';
import {
  generateDefaultConsts,
  generateDefaultQuery,
  generateDefaultTx,
  generateDefaultRpc,
  generateDefaultErrors,
  generateDefaultEvents
} from '@polkadot/typegen/generate';
import metadata from '../src/metadata/static-latest';

import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';

import * as cordDefinitions from '../src/interfaces/definitions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime, ...substrateDefinitions } = defaultDefinitions;

const definitions = {
  '@polkadot/types/interfaces': substrateDefinitions,
  '@cord.network/known-types/interfaces': cordDefinitions
} as any;

const customLookupDefinitions = {
  rpc: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
  types: require('../src/interfaces/lookup.ts').default
} as Definitions;

generateTsDef(definitions, 'packages/known-types/src/interfaces', '@cord.network/known-types/interfaces');
generateInterfaceTypes(definitions, 'packages/known-types/src/interfaces/augment-types.ts');
generateDefaultConsts(
  'packages/known-types/src/interfaces/augment-api-consts.ts',
  metadata,
  definitions,
  false,
  customLookupDefinitions
);
generateDefaultLookup('packages/known-types/src/interfaces', metadata);
generateDefaultConsts(
  'packages/known-types/src/interfaces/augment-api-consts.ts',
  metadata,
  definitions,
  false,
  customLookupDefinitions
);
generateDefaultErrors('packages/known-types/src/interfaces/augment-api-errors.ts', metadata, definitions);
generateDefaultEvents(
  'packages/known-types/src/interfaces/augment-api-events.ts',
  metadata,
  definitions,
  false,
  customLookupDefinitions
);
generateDefaultQuery(
  'packages/known-types/src/interfaces/augment-api-query.ts',
  metadata,
  definitions,
  false,
  customLookupDefinitions
);
generateDefaultRpc('packages/known-types/src/interfaces/augment-api-rpc.ts', definitions);
generateDefaultTx(
  'packages/known-types/src/interfaces/augment-api-tx.ts',
  metadata,
  definitions,
  false,
  customLookupDefinitions
);
