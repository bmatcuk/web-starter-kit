const express = require('express');
const path = require('path');

const { scripts, styles } = require('../build/assets.json');
const renderer = require('../build/server')(scripts, styles);

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build', 'public')));

app.get('*', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Rendering ', req.url);
  return renderer(req, res);
});

module.exports = app;
