import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  prettierConfig,
  {
    files: ['src/**/*.{js,ts}'],
    ignores: ['node_modules/', 'dist/'],        
    rules: {
      'no-async-promise-executor': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            '{}': false,
          },
          extendDefaults: true,
        },
      ],
    },
  },
);
