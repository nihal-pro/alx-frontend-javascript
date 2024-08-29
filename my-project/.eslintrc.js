module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      // Add any custom rules you want here
      'no-console': 'warn',
    },
  };
