const webpack = require('webpack');
const path = require('path');

const libraryName = require('./package.json').name;
const outputFile = libraryName + '.js';

console.log('outputFile', outputFile)

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./src/components'),
      path.resolve('node_modules'),
    ],
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
