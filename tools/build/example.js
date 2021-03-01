const root = require('../utilities/root');
const ejs = require('ejs');
const fs = require('fs');
const { createFile } = require('../utilities/file');
const { getPackageYML, getPublicPackage } = require('../utilities/config');
const beautify = require('js-beautify').html;
const getPackages = require('../utilities/packages');
const beautyOpts = beautify.defaultOptions();
beautyOpts.end_with_newline = true;
beautyOpts.max_preserve_newlines = 0;
beautyOpts.indent_inner_html = true;
beautyOpts.indent_handlebars = true;

beautyOpts.inline = [];

let count = 0;

function uniqueId (module) {
  count++;
  return `${module}-${count}-dep`;
}

function snippet (html) {
  console.log('snippet est déprécié, lui préférer la méthode sample (accordions pour référence)');
  html = beautify(html, beautyOpts);

  html = html.replace(/(class=".*)\s(")/gm, '$1$2');
  html = html.replace(/&/g, '&amp;');
  html = html.replace(/</g, '&lt;');
  html = html.replace(/>/g, '&gt;');

  const id = uniqueId('snippet');

  const prefix = global.prefix;

  return `<div class="${prefix}-mt-3w ${prefix}-pb-6w" ><section class="${prefix}-accordion"><h3 class="${prefix}-accordion__title"><button class="${prefix}-accordion__btn" aria-expanded="false" aria-controls="${id}">Snippet de code</button></h3><div class="${prefix}-collapse" id="${id}"><pre class=" language-html"><code>${html}</code></pre></div></section></div>`;
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
    snippet: snippet
  };

  const html = ejs.render(page, options);
  const beautified = beautify(html, beautyOpts);

  createFile(`${dest}/${id}/index.html`, beautified);
  console.log('\x1b[38m', `${id}/index.html`, '\x1b[0m');
};

const buildMap = (dest) => {
  const indexPath = root('examples/index.ejs');
  const index = fs.readFileSync(indexPath, {
    encoding: 'utf8',
    flag: 'r'
  });

  const config = getPublicPackage().config;
  config.packages = [];
  const packages = getPackages();
  packages.forEach((p) => { config.packages.push(getPackageYML(p)); });

  const options = {
    ...config,
    root: root.toString(),
    beautify: (html) => { return beautify(html, beautyOpts); },
  };

  const html = ejs.render(index, options);
  const beautified = beautify(html, beautyOpts);

  createFile(`${dest}/index.html`, beautified);
  console.log('\x1b[38m', 'index.html', '\x1b[0m');
};

module.exports = { buildExample, buildMap };
