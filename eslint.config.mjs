import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintParserTypeScript from '@typescript-eslint/parser';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import stylistic from '@stylistic/eslint-plugin';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        project: true
      }
    }
  },
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss
    },
    rules: {
      // enable all recommended rules to report a warning
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      // enable all recommended rules to report an error
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,

      // or configure rules individually
      'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 100 }]
    },
    settings: {
      'better-tailwindcss': {
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
        entryPoint: 'app/globals.css',
      }
    }
  },
  {
    plugins: { '@stylistic': stylistic },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
