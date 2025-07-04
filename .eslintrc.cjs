module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true,
    node: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'build'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
  ],
  rules: {
    // React specific rules
    'react-refresh/only-export-components': [
      'error',
      { allowConstantExport: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error', 
    
    // TypeScript specific rules
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    
    // Performance and code quality
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-alert': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'eqeqeq': ['error', 'always'],
    'complexity': ['error', 10],
    'max-depth': ['error', 3],
    'max-lines': ['warn', 400],
    'max-params': ['warn', 6],
    'no-nested-ternary': 'error',
    'no-unused-expressions': 'error',
    'prefer-template': 'error',
    'curly': ['error', 'all'],
    
    // Performance specific rules
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-self-compare': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'prefer-spread': 'error',
    'radix': 'error',
  }
}