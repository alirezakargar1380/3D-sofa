import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/refs': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off'
    },
  },
  globalIgnores(['.next/**', 'out/**', 'dist/**', 'build/**', 'coverage/**', 'next-env.d.ts']),
]);
