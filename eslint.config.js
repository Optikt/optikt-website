import svelte from 'eslint-plugin-svelte';
import ts from 'typescript-eslint';
import configPrettier from 'eslint-config-prettier';
import svelteConfig from './svelte.config.js';

export default ts.config(
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  configPrettier,
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        svelteConfig,
      },
    },
  },
  {
    ignores: ['.svelte-kit/', 'build/', 'node_modules/', '.wrangler/'],
  },
);
