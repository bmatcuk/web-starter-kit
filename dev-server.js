require('babel-register');

var bs = require('browser-sync').create();
var spa = require('connect-history-api-fallback');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.babel.js')();
var compiler = webpack(webpackConfig);

bs.init({
  server: false,
  open: false,
  reloadOnRestart: true,
  middleware: [
    spa({ verbose: true }),

    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      }
    }),

    webpackHotMiddleware(compiler)
  ]
});
