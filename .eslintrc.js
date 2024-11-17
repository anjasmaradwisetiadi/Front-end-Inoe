module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  plugins: [
    'html',
    'standard',
    'promise'
  ],
  globals: {
    __static: true
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    indent: ['error', 2],
    'sort-vars': 'off',
    'sort-keys': 'off',
    'sort-imports': 'off',
    'no-sync': 'off',
    camelcase: ['error', { properties: 'never' }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'id-length': ['error', { min: 1 }],
    'arrow-parens': ['error', 'always'],
    semi: ['error', 'always'],
    'semi-spacing': ['error'],
    'no-multiple-empty-lines': ['error'],
    'padded-blocks': 'off',
    'space-before-function-paren': ['error'],
    'quote-props': 'off',
    'object-property-newline': 'off',
    'comma-dangle': ['error', 'never'],
    'no-var': 'error',
    'require-await': 'error',
    'no-console': 'off',
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
    'object-curly-newline': ['error', { consistent: true }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-magic-numbers': 'off',
    'key-spacing': ['error'],
    'no-whitespace-before-property': ['error'],
    'one-var-declaration-per-line': ['error'],
    eqeqeq: ['error'],
    'no-undef-init': ['error'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'max-len': ['error', { code: 300 }],
  
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
  