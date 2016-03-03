'use strict'

const path = require('path')
const webpack = require('webpack')
const node_modules = path.resolve(__dirname, './node_modules')

const config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/src/app.js'),
    'file?name=index.html!jade-html!./app/src/index.jade'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.jade?$/,
      loader: 'jade-html'
    }, {
      test: /\.tpl\.html?$/,
      loader: `ngtemplate?relativeTo=/${path.resolve(__dirname, './dist')}!html`
    }, {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'ng-annotate!babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.svg|ico|png|jpg$/,
      exclude: /favicon\.ico/,
      loader: 'url?limit=8192'
    }, {
      // assets
      test: /\.woff|eot|woff2|ttf|swf$/,
      loader: 'file'
    }, {
      test: /\.styl$/,
      loader: 'style!css!stylus?paths=node_modules/bootstrap-styl/'
    }]
  }
}

module.exports = config
