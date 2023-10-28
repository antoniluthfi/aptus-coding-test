const path = require('path');

module.exports = {
  root: true,
  extends: ['@react-native', 'airbnb-typescript', 'prettier'],
  plugins: ['import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'off',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'react/prop-types': [0],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [path.resolve(__dirname, './tsconfig.json')],
  },
};
