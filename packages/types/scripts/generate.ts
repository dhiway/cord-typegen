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
  generateDefaultRpc,
  generateDefaultErrors,
  generateDefaultEvents
} from '@polkadot/typegen/generate';
import { registerDefinitions, HEADER } from '@polkadot/typegen/util';
import metaHex from '../src/metadata/static-latest';
import fs from 'fs';

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

const aug_api_gen = [
  HEADER('chain'),
  ...[
    '@polkadot/api/augment/rpc',
    ...['consts', 'errors', 'events', 'query', 'tx', 'rpc'].filter((key) => !!key).map((key) => `./augment-api-${key}`)
  ].map((path) => `import '${path}';\n`)
].join('');

function writeFile(dest, generator, noLog) {
  !noLog && console.log(`${dest}\n\tGenerating`);
  let generated = generator();

  while (generated.includes('\n\n\n')) {
    generated = generated.replace(/\n\n\n/g, '\n\n');
  }

  !noLog && console.log('\tWriting');
  fs.writeFileSync(dest, generated, {
    flag: 'w'
  });
  !noLog && console.log('');
}

generateTsDef(definitions, 'packages/types/src/interfaces', '@cordnetwork/types/interfaces');
generateInterfaceTypes(definitions, 'packages/types/src/interfaces/augment-types.ts');
generateDefaultConsts('packages/types/src/interfaces/augment-api-consts.ts', metadata, definitions);
generateDefaultErrors('packages/types/src/interfaces/augment-api-errors.ts', metadata, definitions);
generateDefaultEvents('packages/types/src/interfaces/augment-api-events.ts', metadata, definitions);
generateDefaultQuery('packages/types/src/interfaces/augment-api-query.ts', metadata, definitions);
generateDefaultRpc('packages/types/src/interfaces/augment-api-rpc.ts', definitions);
generateDefaultTx('packages/types/src/interfaces/augment-api-tx.ts', metadata, definitions);
// writeFile('packages/types/src/interfaces/augment-api.ts', aug_api_gen);

writeFile('packages/types/src/interfaces/augment-api.ts', () =>
  [
    HEADER('chain'),
    ...[
      '@polkadot/api/augment/rpc',
      ...['consts', 'errors', 'events', 'query', 'tx', 'rpc']
        .filter((key) => !!key)
        .map((key) => `./augment-api-${key}`)
    ].map((path) => `import '${path}';\n`)
  ].join('')
);

// writeFile(path.join(process.cwd(), output, 'augment-api.ts'), () =>
//   [
//     HEADER('chain'),
//     ...[
//       '@polkadot/api/augment/rpc',
//       ...['consts', 'errors', 'events', 'query', 'tx', 'rpc']
//         .filter((key) => !!key)
//         .map((key) => `./augment-api-${key}`)
//     ].map((path) => `import '${path}';\n`)
//   ].join('')
// );
