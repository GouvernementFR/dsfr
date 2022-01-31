const path = require('path')

// module.exports = async ({ config }) => {

//   config.module.rules.push({
//     test: /\.ejs$/,
//     loaders: ['ejs-compiled-loader'],
//   })

//   return config;
// }

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  externals: {
    ejs: 'ejs',
  }
};
