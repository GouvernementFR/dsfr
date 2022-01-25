const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/html",
  staticDirs: ['../dist', '../src', '../.storybook'],
  // webpackFinal: async (config) => {
  //   config.node = {
  //     fs: 'empty'
  //   }
  //   // config.resolve.alias = {
  //   //   ...config.resolve.alias,
  //   //   'fs': path.resolve(__dirname, 'fsMock.js')
  //   // };
  //   // config.module.rules.push({
  //   //   test: /\.ejs$/,
  //   //   loaders: ['ejs-compiled-loader']
  //   // })
  //   return config
  // }
};
