const global = require('../package.json').config;

const sassVarsLoader  = {
    loader: "@epegzz/sass-vars-loader",
    options: {
        syntax: 'scss',
        vars: {
            prefix: global.prefix
        }
    }
};

const jsVarsLoader = {
    loader: 'string-replace-loader',
    options: {
        search: /\$\{prefix\}/g,
        replace: global.prefix,
    }
};

module.exports = {
    sassVarsLoader,
    jsVarsLoader
}
