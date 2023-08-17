module.exports = {
  root: true,
  extends: [
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
  ],
  rules: {
    'react-native/no-color-literals': 0,
    'no-shadow': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'react-native/sort-styles': 'off',
    'react-native/no-raw-text': ['warn'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': ['warn'],
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-native/no-inline-styles': 'warn',
  },
  plugins: ['@typescript-eslint', 'react-native', 'react-hooks'],
  globals: {
    JSX: true,
  },
};
