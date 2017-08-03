module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [ 'react' ],
  'rules': {

    // enforce consistent indentation
    'indent': [ 'error', 2 ],

    // enforce the consistent use of either backticks, double, or single quotes
    'quotes': [
      'error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    // require or disallow semicolons instead of ASI
    'semi': [ 'error', 'never' ],

    // require or disallow trailing commas
    'comma-dangle': [ 'error', 'only-multiline' ],
  }
}
