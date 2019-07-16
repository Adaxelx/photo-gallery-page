module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    document: true,
    window: true,
  },
  parser: 'babel-eslint',
  extends: ['prettier', 'prettier/react'],
  env: {
    jest: true,
  },
};
