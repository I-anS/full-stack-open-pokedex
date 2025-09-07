module.exports = {
  env: {
    browser: true,
    node: true, // ✅ fixes 'module', 'require', 'process' no-undef
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended', // optional but nice with jest/globals
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 'warn', // error/warn; silence specific logs if needed
    'no-unused-vars': ['warn'],
    'react/prop-types': 0,
  },
  settings: {
    react: { version: 'detect' }, // ← fixes the warning
  },
}
