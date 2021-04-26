module.exports = {
        "parser": "babel-eslint",
        'env': {
                'browser': true,
                'commonjs': true,
                'es6': true,
                'node': true
        },
        'extends': [
                'eslint:recommended',
                'plugin:react/recommended'
        ],
        'parserOptions': {
                'ecmaFeatures': {
                        'jsx': true
                },
                'ecmaVersion': 12,
                'sourceType': 'module'
        },
        'plugins': [
                'react'
        ],
        'rules': {
                "react/prop-types": 0,
                'no-console': 'off',        
                'indent': ['error', 4, { 'SwitchCase': 1 }],
                'quotes': [
                        'error',
                        'single'
                ],
                'semi': [
                        'error',
                        'always'
                ]
        }
};
