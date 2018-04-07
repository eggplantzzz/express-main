const express = require('express');
const app = express();
const branch = require('wakaflaka');
const renderer = require('./dist/serverRenderer');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js')[0];
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(
  compiler,
  { path: '/__webpack_hmr' }
));

app.use(express.static('dist'));
app.use('/branch', branch);
app.get('/', (req, res, next) => {
  const responseText = renderer({ message: 'hello' });
  res.send(responseText);
});

app.listen(8080, () => {
  console.log(`App listening on port 3000!`);
});
