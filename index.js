module.exports = {
  env: { browser: true },
  extends: [
    '@milosys/eslint-config-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
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
