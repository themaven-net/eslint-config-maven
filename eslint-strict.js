module.exports = {
    extends: ['./eslint-js.js', 'eslint:recommended', 'plugin:jest/recommended'],
    plugins: ['jest', 'simple-import-sort', 'import'],
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
    },
    overrides: [
        // add no-op overrides as an alternative to passing --ext in the CLI
        {
            files: ['*.cjs', '*.mjs', '*.jsx'],
        },
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                './eslint-ts.js',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            plugins: [],
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
            },
        },
    ],
};
