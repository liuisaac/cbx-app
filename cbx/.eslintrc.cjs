module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  settings: { react: { version: 'detect' } }, // Changed to detect React version
  rules: {
    'react/prop-types': 'off', // Turn off prop-types rule
    'react/react-in-jsx-scope': 'off', // Turn off react-in-jsx-scope rule
    'no-unused-vars': 'off', // Turn off unused-vars rule if necessary
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['position', 'intensity', 'rotation', 'object'], // Ignore specific properties
      },
    ],
  },
};
