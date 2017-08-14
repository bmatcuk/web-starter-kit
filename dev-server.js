require('babel-register');

var bs = require('browser-sync').create();
var spa = require('connect-history-api-fallback');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.babel.js')();
var compiler = webpack(webpackConfig);

var spaIndex = webpackConfig.output.publicPath;
if (!spaIndex.endsWith('/')) spaIndex += '/';
spaIndex += 'index.html';

bs.init({
  server: false,
  open: false,
  reloadOnRestart: true,
  middleware: [
    spa({ index: spaIndex, verbose: true }),

    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      }
    }),

    webpackHotMiddleware(compiler)
  ]
});
