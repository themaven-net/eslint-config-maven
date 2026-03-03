import js from '@eslint/js';
import jest from 'eslint-plugin-jest';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importX from 'eslint-plugin-import-x';
import tseslint from 'typescript-eslint';
import eslintJs from './eslint-js.js';
import eslintTs from './eslint-ts.js';

export default [
    ...eslintJs,
    js.configs.recommended,
    jest.configs['flat/recommended'],
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
            import: importX,
        },
        rules: {
            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],

            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            eqeqeq: ['error', 'always', { null: 'ignore' }],
        },
    },
    ...eslintTs.map((config) => ({
        ...config,
        files: ['**/*.ts', '**/*.tsx'],
    })),
    ...tseslint.configs.recommendedTypeChecked.map((config) => ({
        ...config,
        files: ['**/*.ts', '**/*.tsx'],
    })),
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            '@typescript-eslint/consistent-type-imports': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            // disable require-await because it is common for methods
            // to be async to satisfy an interface even if they do not await
            '@typescript-eslint/require-await': 'off',
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/strict-boolean-expressions': 'error',
            '@typescript-eslint/no-base-to-string': 'error',
        },
    },
];
