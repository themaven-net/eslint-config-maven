module.exports = {
    extends: ['prettier'],
    plugins: ['prettier'],
    env: {
        browser: true,
        node: true,
    },
    // extra globals for the Angular part of the codebase.
    globals: {
        angular: true,
        define: true,
    },
    rules: {
        'max-len': [
            'error',
            {
                code: 110,
                ignoreStrings: true,
                ignoreUrls: true,
            },
        ],
        'prettier/prettier': [
            'error',
            require('./.prettierrc'),
        ],

        // enable a subset of eslint:recommended; consider enabling all of it
        // https://eslint.org/docs/rules/
        // When adding a rule here, also check whether you have to add
        // the typescript version in eslint-ts.js
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-compare-neg-zero': 'error',
        'no-const-assign': 'error',
        'no-this-before-super': 'error',
        'no-class-assign': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-fallthrough': 'error',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-setter-return': 'error',
        'no-sparse-arrays': 'error',
        'use-isnan': 'error',

        'one-var': 'off',
        'spaced-comment': 'off',
        'no-useless-escape': 'off', // TODO should probably be on, with our errors fixed
        'prefer-promise-reject-errors': 'off', // TODO consider fixing
        'no-unneeded-ternary': 'off', // TODO should probably be on, with our errors fixed
        'no-useless-return': 'off',
        'new-cap': 'off',
        'no-path-concat': 'off',
        'no-throw-literal': 'off', // TODO should probably be on, with our errors fixed
        'no-template-curly-in-string': 'off',
        yoda: 'off',
    },
};
