import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import security from 'eslint-plugin-security';

export default [
  {
    ignores: ['dist'],
    files: ['**/*.{js,jsx}'], // Target JavaScript files
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      prettier: prettier,
      'jsx-a11y': jsxA11y,
      security: security,
    },
    rules: {
      // Base JavaScript rules
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
      'linebreak-style': ['error', 'unix'], // Enforces LF
    },
  },
  {
    files: ['**/*.{ts,tsx}'], // Target TypeScript files
    languageOptions: {
      parser: tsParser, // Use TypeScript parser for TS files
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettier,
    },
    rules: {
      // TypeScript-specific rules
      ...tseslint.configs['recommended'].rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
