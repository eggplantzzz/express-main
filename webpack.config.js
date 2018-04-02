module.exports = [
  {
    entry: './clientEntry.js',
    output: {
      filename: 'bundle.js'
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
    stats: {
      colors: true
    },
    devtool: 'source-map'
  },
  {
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
          options: {
            presets: [ 'env', 'react' ]
          },
        }
      ]
    },
  }
]
