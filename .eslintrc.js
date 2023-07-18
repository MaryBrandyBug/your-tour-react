module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 0,
    'max-len': 0,
    'prefer-template': 'off',
    'import/extensions': 'off',
    'react/jsx-key': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
