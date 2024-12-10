module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows modern syntax
    sourceType: 'module', // Allows ES Modules
    ecmaFeatures: {
      jsx: true, // Allows JSX syntax
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
