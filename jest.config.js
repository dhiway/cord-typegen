// Copyright 2017-2021 @cordnetwork/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@open-web3/dev-config/config/jest.cjs');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@cordnetwork/api(.*)$': '<rootDir>/packages/api/src/$1',
    '@cordnetwork/type-definitions(.*)$': '<rootDir>/packages/type-definitions/src/$1',
    '@cordnetwork/types(.*)$': '<rootDir>/packages/types/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/build',
    '<rootDir>/packages/api/build',
    '<rootDir>/packages/types/build',
    '<rootDir>/packages/type-definitions/build'
  ],
  transformIgnorePatterns: ['/node_modules/(?!@polkadot|@babel/runtime/helpers/esm/)']
});
