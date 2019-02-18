module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    eqeqeq: 'off',
    'vue/require-v-for-key': 'warn',
    'no-param-reassign': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
