const path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
//const { createLoader } = require('simple-functional-loader');
const renderPage = require('./renderPage');
const { sassVarsLoader, jsVarsLoader } = require('./varsLoaders');

const p = path.resolve('.');
const segments = p.split('/');
const id = segments[segments.length - 1];

let content = renderPage(id);

module.exports = merge(common, {
  entry: './tests/scripts/index.js',
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    inline: true,
    hot: true,
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ from: path.resolve(__dirname, '../assets/img'), to: 'img'}] }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      templateContent: content,
    }),
    new StylelintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true
            }
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'packages/core/fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: [
            'style-loader',
            'css-loader?sourceMap=true',
            'sass-loader',
            sassVarsLoader
        ]
      }
    ]
  }
});
