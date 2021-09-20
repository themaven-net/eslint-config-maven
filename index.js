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
        'prettier/prettier': [
            'error',
            require('./.prettierrc'),
        ],
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
