const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { sassVarsLoader, jsVarsLoader } = require('./varsLoaders');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          jsVarsLoader,
          {
            loader:'babel-loader',
            options: {
              presets: [
                [

                  "@babel/preset-env",
                  {
                    "useBuiltIns": "entry",
                    "corejs":"3",
                    "targets":
                        {
                          "chrome": "58",
                          "ie": "11"
                        }
                  }
                ]
              ],
            }
          }
        ],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      },
    ],
  },
};