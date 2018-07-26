const MemoryFileSystem = require('memory-fs');
const path = require('path');
const webpack = require('webpack');

module.exports = (fixture, options) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.png$/,
          use: {
            loader: path.resolve(__dirname, './loader.js'),
            options
          }
        }
      ]
    }
  });

  compiler.outputFileSystem = new MemoryFileSystem();
  return new Promise((resolve, reject) =>
    compiler.run((error, stats) => {
      if (error) {
        reject(error);
      }
      resolve(stats);
    })
  );
};
