module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            'tab'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'space-infix-ops': [
            'error',
            {"int32Hint": false}
        ],
        "spaced-comment": [
            "error",
            "always",
            { "markers": ["/"] }
        ],
        'key-spacing': [
            "singleLine",
            "multiLine"
        ],
        'space-in-parens': [
            'error',
            'never',
        ],
        'space-before-function-paren': [
            'error',
            'always'
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 2,
                'maxEOF': 1,
                'maxBOF': 0,
            }
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'eqeqeq': [
            'error',
            'always'
        ],
        'brace-style': [
            'error',
        ],
        'space-before-blocks': 'always',
        'camelcase': 2,
        'id-length': 2,
        'keyword-spacing': 1,
        'no-multi-spaces': 'error',

    }
};