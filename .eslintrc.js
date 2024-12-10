module.exports = {
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', caughtErrors: 'none' },
    ],
  },
};
