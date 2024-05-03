module.exports = {
  extends: [
    '@milosys/eslint-config-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: [ 'react-refresh' ],
  rules: {
    'react-refresh/only-export-components': [ 'warn', { allowConstantExport: true } ],
  },
}
