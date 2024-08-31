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
    plugins: [
        'react',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
    rules: {
      // Add any custom rules you want here
      'no-console': 'warn',
    },
  };
