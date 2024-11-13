module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
  ],
  ignorePatterns: [
    'public',
    'config',
    'webpack.config.ts',
  ],
  rules: {
    'no-plusplus': [
      'error', {
        'allowForLoopAfterthoughts': true
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error', {
        'functions': false
      },
    ],
    'react/require-default-props': ['off'],
  },
};
