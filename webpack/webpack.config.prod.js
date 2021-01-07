const Webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const common = require('./webpack.common.js');
const fs = require('fs');
const renderPage = require('./renderPage');
const { sassVarsLoader, jsVarsLoader } = require('./varsLoaders');
const global = require('../package.json').config;
const packages = require('./packages');

const jsEntriesPck = {};
const cssEntriesPck = {};

packages.forEach((pck) => {
  let id = pck.id;
  if (fs.existsSync('./packages/' + id + '/src/scripts/dist.js') && id !== 'all') {
    jsEntriesPck[id] = ['./packages/' + id + '/src/scripts/dist.js', './packages/' + id + '/_dist.scss']; 
  } else {
    cssEntriesPck[id] = './packages/' + id + '/_dist.scss';
  }
});

const totalEntries = {...jsEntriesPck, ...cssEntriesPck}

const configPackages = merge(common, {
  mode: 'none',
  devtool: 'source-map',
  stats: 'errors-only',
  bail: true,
  optimization: {
    minimize: true,
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/dist/css/[name].css'
    }),
    new CssoWebpackPlugin({
      pluginOutputPostfix: 'min' 
    }),
    new UnminifiedWebpackPlugin({
      exclude: /css.*/
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '../fonts',
            name: '[name].[ext]',
            outputPath: '/all/dist/fonts/'
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
      }
    ]
  }
});

const dsPackages = Object.assign({}, configPackages,{
  entry: totalEntries,
  output: {
    path: path.join(__dirname, '../packages'),
    filename: '[name]/dist/js/[name].min.js'
  }
});

const configPackageAll = merge(common, {
  mode: 'none',
  devtool: 'source-map',
  stats: 'errors-only',
  bail: true,
  optimization: {
    minimize: true,
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/dist/css/[name].css'
    }),
    new CssoWebpackPlugin({
      pluginOutputPostfix: 'min' 
    }),
    new UnminifiedWebpackPlugin({
      exclude: /css.*/
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '../fonts',
            name: '[name].[ext]',
            outputPath: '/all/dist/fonts/'
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
      }
    ]
  }
});

const packageAll = Object.assign({}, configPackageAll,{
  entry: {
    all: './packages/all/src/scripts/dist.js'
  },
  output: {
    path: path.join(__dirname, '../packages'),
    filename: '[name]/dist/js/[name].min.js'
  }
});

module.exports = [
  dsPackages, packageAll
];
