// Copyright 2019-2021 cord.network authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@open-web3/dev-config/config/jest.cjs');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@cord.network/base(.*)$': '<rootDir>/packages/base/src/$1',
    '@cord.network/type-definitions(.*)$': '<rootDir>/packages/type-definitions/src/$1',
    '@cord.network/known-types(.*)$': '<rootDir>/packages/known-types/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/build',
    '<rootDir>/packages/base/build',
    '<rootDir>/packages/known-types/build',
    '<rootDir>/packages/type-definitions/build'
  ],
  transformIgnorePatterns: ['/node_modules/(?!@polkadot|@babel/runtime/helpers/esm/)']
});
