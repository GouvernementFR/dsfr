const Webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.js');
const fs = require('fs');
const renderPage = require('./renderPage');
const { sassVarsLoader, jsVarsLoader } = require('./varsLoaders');
const global = require('../package.json').config;
const packages = require('./packages');

let data = {
  ...global,
  packages:packages
};

const entries = {index: './scripts/index.js'};
const plugins = [
    new Webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
}),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['index'],
      template: './page-test/index.ejs',
      templateParameters:data
   }),
    new CopyWebpackPlugin({ patterns: [
        { from: path.resolve(__dirname, '../icons/font'), to: 'icons'},
        { from: path.resolve(__dirname, '../assets/img'), to: 'img'}
      ] }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
];

packages.forEach((pck) => {

  let id = pck.id;

  if (pck.id !== 'all') {
    entries[id] = './packages/' + id + '/tests/scripts/index.js';
    let content = renderPage(id);

    plugins.push(new HtmlWebpackPlugin({
      inject: true,
      chunks: [id],
      filename: id + '/index.html',
      templateContent: content,
    }));
  }
});

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  stats: 'errors-only',
  bail: true,
  entry: entries,
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    path: path.join(__dirname, '../test'),
  },
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.s?css/i,
        use : [
          'css-loader',
          'sass-loader',
          sassVarsLoader
        ]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '/fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.s?css/i,
        use : [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
          sassVarsLoader
        ]
      },
    ]
  }
});
