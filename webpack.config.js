const webpack = require('webpack');

module.exports = [
  {
    mode: 'development',
    entry: [
      'webpack-hot-middleware/client',
      './clientEntry.js'
    ],
    output: {
      filename: 'bundle.js',
      publicPath: 'http://localhost:3000/dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader:'babel-loader',
          options: {
            presets: [ 'env', 'react' ]
          },
        }
      ]
    },
    stats: { colors: true },
    plugins: [ new webpack.HotModuleReplacementPlugin() ]
  },

  {
    mode: 'development',
    entry: './serverEntry.js',
    output: {
      filename: 'serverRenderer.js',
      libraryTarget: 'commonjs2'
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader:'babel-loader',
          options: { presets: [ 'env', 'react' ] },
        }
      ]
    },
  }
]
