const toposort = require('toposort');

// If there are any chunks that should be excluded, pass them in as an array.
function RequiredAssetsPlugin(filename, excludedChunks) {
  this.filename = filename;
  this.excludedChunks = excludedChunks || [];
}

RequiredAssetsPlugin.prototype.apply = function apply(compiler) {
  const filename = this.filename;
  const excludedChunks = this.excludedChunks;

  compiler.plugin('emit', (compilation, done) => {
    let result = null;

    compilation.assets[filename] = {
      size: function getSize() {
        return result && result.length || 0;
      },

      source: function getSource() {
        // Filtering and sorting ideas borrowed from html-webpack-plugin.
        let chunks = compilation.chunks.filter((chunk) => {
          if (chunk.name === undefined) return false;
          if (typeof chunk.isInitial === 'function') {
            if (!chunk.isInitial()) return false;
          } else if (!chunk.initial) {
            return false;
          }
          if (excludedChunks.indexOf(chunk.name) !== -1) return false;
          return true;
        });

        // Build array of graph edges (dependencies)
        const chunkDependencies = [];
        chunks.forEach((chunk) => {
          if (chunk.parents) {
            chunk.parents.forEach((parentChunk) => {
              chunkDependencies.push([parentChunk, chunk]);
            });
          }
        });

        // Sort chunks
        chunks = toposort.array(chunks, chunkDependencies);

        // Get scripts and styles
        let publicPath = compilation.options.output.publicPath;
        if (!publicPath.endsWith('/')) publicPath += '/';

        const scripts = [];
        const styles = [];
        chunks.forEach((chunk) => {
          // The first file is always a js file - the rest are either css or sourcemaps
          scripts.push(publicPath + chunk.files[0]);
          chunk.files.forEach((file) => {
            if (file.endsWith('.css')) {
              file = publicPath + file;
              if (styles.indexOf(file) === -1)
                styles.push(file);
            }
          });
        });

        result = JSON.stringify({ scripts, styles });
        return result;
      }
    };
    done();
  });
};

module.exports = RequiredAssetsPlugin;
