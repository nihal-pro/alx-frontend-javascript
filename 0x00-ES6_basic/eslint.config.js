import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
{
    plugins: {
      react,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      // Add more React-related rules here
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
},
];
