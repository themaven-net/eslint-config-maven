import eslintJs from './eslint-js.js';
import eslintTs from './eslint-ts.js';

export default [
    ...eslintJs,
    ...eslintTs.map((config) => ({
        ...config,
        files: ['**/*.ts', '**/*.tsx'],
    })),
];
