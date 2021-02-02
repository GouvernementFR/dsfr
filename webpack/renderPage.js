const global = require('../package.json').config;
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const beautify = require('js-beautify').html;
const packages = require('./packages');
const beautyOpts = beautify.defaultOptions();
beautyOpts.end_with_newline = true;
beautyOpts.max_preserve_newlines = 0;
beautyOpts.indent_inner_html = true;
beautyOpts.indent_handlebars = true;
beautyOpts.inline = [];

let count = 0;

function includeAttrs (attrs) {
  let html = '';

  for (const prop in attrs) html += prop + '="' + attrs[prop] + '"';

  return html;
}

function includeClasses (classes) {
  if (classes !== undefined && classes.length > 0) return 'class="' + classes.join(' ') + '"';
  return '';
}

function getPackage (id) {
  for (let i = 0; i < packages.length; i++) {
    if (packages[i].id === id) return packages[i];
  }
}

function uniqueId (module) {
  count++;
  return `${module}~${count}`;
}

function snippet (html) {
  html = beautify(html, beautyOpts);

  html = html.replace(/(class=".*)\s(")/gm, '$1$2');
  html = html.replace(/&/g, '&amp;');
  html = html.replace(/</g, '&lt;');
  html = html.replace(/>/g, '&gt;');

  const id = uniqueId('snippet');

  const prefix = global.prefix;

  return `<div class="${prefix}-mt-3w ${prefix}-pb-6w" ><section class="${prefix}-accordion"><h3 class="${prefix}-accordion__title"><button class="${prefix}-accordion__btn" aria-expanded="false" aria-controls="${id}">Snippet de code</button></h3><div class="${prefix}-collapse" id="${id}"><pre class=" language-html"><code>${html}</code></pre></div></section></div>`;
}

function renderPage (id) {
  const pagePath = __dirname + '/../page-test/page.ejs';
  const page = fs.readFileSync(pagePath, {
    encoding: 'utf8',
    flag: 'r'
  });

  const options = { ...global };

  options.pck = getPackage(id);
  options.packages = packages;
  options.dir = __dirname;
  options.root = __dirname + '/../';
  options.includeAttrs = includeAttrs;
  options.includeClasses = includeClasses;
  options.uniqueId = uniqueId;
  options.snippet = snippet;

  const html = ejs.render(page, options);

  return beautify(html, beautyOpts);
}

module.exports = renderPage;
