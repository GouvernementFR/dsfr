const root = require('../utilities/root');
const ejs = require('ejs');
const fs = require('fs');
const { createFile } = require('../utilities/file');
const { getPackages, getPackageYML, getPublicPackage, getAllPackagesYML } = require('../utilities/config');
const beautify = require('js-beautify').html;
const log = require('../utilities/log');
const beautyOpts = beautify.defaultOptions();
beautyOpts.end_with_newline = true;
beautyOpts.max_preserve_newlines = 0;
beautyOpts.indent_inner_html = true;
beautyOpts.indent_handlebars = true;

beautyOpts.inline = [];

let count = 0;

function uniqueId (module) {
  count++;
  return `${module}-${count}`;
}

const buildExample = (id, dest) => {
  const pagePath = root('examples/example.ejs');
  const page = fs.readFileSync(pagePath, {
    encoding: 'utf8',
    flag: 'r'
  });

  const config = getPublicPackage().config;
  const yml = getPackageYML(id);

  const options = {
    ...yml,
    ...config,
    root: root.toString(),
    beautify: (html) => { return beautify(html, beautyOpts); },
    uniqueId: uniqueId
  };

  const html = ejs.render(page, options);
  const beautified = beautify(html, beautyOpts);

  createFile(`${dest}/${id}/index.html`, beautified);
  log(38, `${id}/index.html`);
};

const buildList = (dest) => {
  const indexPath = root('examples/index.ejs');
  const index = fs.readFileSync(indexPath, {
    encoding: 'utf8',
    flag: 'r'
  });

  const config = getPublicPackage().config;
  config.packages = getAllPackagesYML();

  const options = {
    ...config,
    root: root.toString(),
    beautify: (html) => { return beautify(html, beautyOpts); },
    uniqueId: uniqueId
  };

  const html = ejs.render(index, options);
  const beautified = beautify(html, beautyOpts);

  createFile(`${dest}/index.html`, beautified);
  log(38, 'index.html');
};

const buildMain = (dest) => {
  const indexPath = root('examples/main.ejs');
  const index = fs.readFileSync(indexPath, {
    encoding: 'utf8',
    flag: 'r'
  });

  const config = getPublicPackage().config;
  config.packages = getAllPackagesYML();

  const options = {
    ...config,
    root: root.toString(),
    beautify: (html) => { return beautify(html, beautyOpts); },
    noSnippet: true,
    noHeading: true,
    uniqueId: uniqueId
  };

  const html = ejs.render(index, options);
  const beautified = beautify(html, beautyOpts);

  createFile(`${dest}/${config.namespace}/index.html`, beautified);
  log(38, `${config.namespace}/index.html`);
};

module.exports = { buildExample, buildList, buildMain };
