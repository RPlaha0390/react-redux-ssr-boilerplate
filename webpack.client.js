const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  /**
   * Tell webpack about the entry point 
   * of our client application
   */
  entry: './src/client/index.js',
  /**
   * Tell webpack where to put the output
   * that is generated
   */ 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);
