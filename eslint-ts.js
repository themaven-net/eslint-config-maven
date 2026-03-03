import tseslint from 'typescript-eslint';

export default [
    tseslint.configs.eslintRecommended,
    {
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2020,
                projectService: true,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {
            // Disable opinionated rules from eslintRecommended
            // https://github.com/typescript-eslint/typescript-eslint/blob/v5.15.0/packages/eslint-plugin/src/configs/eslint-recommended.ts
            'no-var': 'warn',
            'prefer-const': 'warn',
            'prefer-rest-params': 'warn',
            'prefer-spread': 'warn',

            // high-precision rules from plugin:@typescript-eslint/recommended
            // and plugin:@typescript-eslint/recommended-requiring-type-checking
            '@typescript-eslint/no-extra-non-null-assertion': 'error',
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/no-namespace': 'error',
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
            '@typescript-eslint/no-require-imports': 'error',
            '@typescript-eslint/prefer-namespace-keyword': 'error',
        },
    },
];
