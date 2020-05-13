const Webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const RemovePlugin = require('remove-files-webpack-plugin');
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
  if (fs.existsSync('./packages/' + id + '/src/scripts/dist.js')) {
    jsEntriesPck[id] = './packages/' + id + '/src/scripts/dist.js';
  } else {
    cssEntriesPck[id] = './packages/' + id + '/_dist.scss';
  }
});

const totalEntries = {...jsEntriesPck, ...cssEntriesPck}

const configPackages = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  stats: 'errors-only',
  bail: true,
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css'
    })
  ],
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

const cssPackages = Object.assign({}, configPackages,{
  entry: totalEntries,
  output: {
    path: path.join(__dirname, '../dist/packages'),
    filename: '[name]/[name].js'
  }
});

const configGlobal = merge(common, {
  mode: 'none',
  devtool: 'source-map',
  stats: 'errors-only',  
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: "css/dsfr.css",
    }),
    new CssoWebpackPlugin({ pluginOutputPostfix: 'min' }),
    new RemovePlugin({
      after: {
        include: [
            './dist/main.js',
            './dist/main.js.map'
        ],
      }
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
            outputPath: '/fonts/'
          },
        },
      },
      {
        test: /\.scss$/,
        use : [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
          sassVarsLoader
        ]
      }
    ]
  }
})

const cssGlobal = Object.assign({}, configGlobal,{
  entry: './scripts/global.js',
  output: {
    path: path.join(__dirname, '../dist'),
  }
});

const configJsGlobal = merge(common, {
  mode: 'none',
  stats: 'errors-only',
  devtool: 'source-map',
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
})

const jsGlobal = Object.assign({}, configJsGlobal,{
  entry: './scripts/distGlobal.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/dsfr.js'
  }
});

const configJsGlobalMin = merge(common, {
  mode: 'production',
  stats: 'errors-only',
  optimization: {
    minimizer: [new TerserJSPlugin()],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
})

const jsGlobalMin = Object.assign({}, configJsGlobalMin,{
  entry: './scripts/distGlobal.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/dsfr.min.js'
  }
});

module.exports = [
  jsGlobalMin, jsGlobal, cssGlobal, cssPackages
];
