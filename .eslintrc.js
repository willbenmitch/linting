module.exports = {
    extends: ['eslint:recommended'],
    plugins: ['react'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },

    env: {
        browser: true,
        node: true,
        es2020: true,
    },
    rules: {
        'no-var': 2,
        strict: 2,
        camelcase: 1,
        'prefer-const': 1,
    },
}
