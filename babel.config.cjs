const path = require('path')

module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          _test: path.resolve(__dirname, 'test'),
        },
      },
    ],
  ],
}
