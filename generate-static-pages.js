const app = require('./lib/ExpressApp');
const cheerio = require('cheerio');
const config = require('./config.json');
const debug = require('util').debuglog('static');
const { eachSeries } = require('async');
const { get } = require('http');
const { mkdtempSync, writeFileSync } = require('fs');
const { sync: mkdirp } = require('mkdirp');
const { tmpdir } = require('os');
const ospath = require('path');
const path = ospath.posix;

const PATHS = config.staticPaths.map((p) => p.endsWith('/') ? p : p + '/');

const isAbsoluteUri = (function() {
  const rgx = new RegExp('^(?:[a-z]+:)?//', 'i');
  return rgx.test.bind(rgx);
})();

function outputPath(base, uri) {
  if (uri.endsWith('/'))
    uri = uri + 'index.html';
  else if (path.extname(uri) == '')
    uri = uri + '.html';
  if (ospath.sep != path.sep)
    uri = uri.replace(path.sep, ospath.sep);
  if (uri.startsWith(config.publicPath))
    uri = uri.substr(config.publicPath.length);
  return path.resolve(base, '.' + uri);
}

function cleanupUri(uri) {
  return uri.replace(/\?.*$/, '').replace(/#.*$/, '');
}

const outputs = [];
function retrievePath(uri, done) {
  const output = outputPath(baseOutputDir, uri);
  if (outputs.includes(output)) {
    done();
    return;
  }

  debug(`Retrieving ${uri}`);
  get({ socketPath: socket, path: uri }, (res) => {
    const chunks = [];
    res.on('data', chunks.push.bind(chunks));
    res.on('end', () => {
      if (res.statusCode != 200) {
        debug(`Got status ${res.statusCode}; skipping`);
        return;
      }

      debug(`Writing to ${output}`);

      const data = Buffer.concat(chunks);
      mkdirp(ospath.dirname(output))
      writeFileSync(output, data);
      outputs.push(output);

      // eslint-disable-next-line no-console
      console.log('Static', uri, '->', output);

      const paths = [];
      const $ = cheerio.load(data.toString());
      debug('Getting new paths to crawl');
      $('a[href]').each(function() {
        let href = cleanupUri($(this).attr('href'));
        if (href.length > 0 && !isAbsoluteUri(href)) {
          if (!path.isAbsolute(href))
            href = path.resolve(uri, '..', href);
          debug(`Adding new path: ${$(this).attr('href')} -> ${href}`);
          paths.push(href);
        }
      });
      eachSeries(paths, retrievePath, done);
    });

    res.on('error', (err) => {
      // eslint-disable-next-line no-console
      console.log('Error retrieving', uri, ':', err.message);
      done();
    });
  }).on('error', (err) => {
    // eslint-disable-next-line no-console
    console.log('Error requesting', uri, ':', err.message);
    done();
  });
}

const baseOutputDir = ospath.resolve('build', 'public');
debug(`Base output directory: ${baseOutputDir}`);

const socket = ospath.join(mkdtempSync(ospath.join(tmpdir(), 'StaticSite')), 'express');
debug(`Socket: ${socket}`);

const server = app.listen(socket, () => {
  eachSeries(PATHS.map(cleanupUri), retrievePath, server.close.bind(server));
});
