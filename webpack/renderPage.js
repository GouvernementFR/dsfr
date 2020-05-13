const global = require('../package.json').config;
const ejs = require('ejs');
const fs = require('fs');
const beautify = require('js-beautify').html;
//const cleaner = require('clean-html');
const beautyOpts = beautify.defaultOptions();
beautyOpts.end_with_newline = true;
beautyOpts.max_preserve_newlines = 0;
beautyOpts.indent_inner_html = true;
beautyOpts.indent_handlebars = true;
beautyOpts.inline = []

function includeAttrs(attrs) {
    let html = '';

    for (let prop in attrs) html += prop + '="' + attrs[prop] + '"';

    return html;
}

function includeClasses(classes) {
    if (classes !== undefined && classes.length > 0) return 'class="' + classes.join(' ') + '"';
    return '';
}

function snippet(html) {
    html = beautify(html, beautyOpts);

    html = html.replace(/(class=".*)\s(")/gm, '$1$2');
    html = html.replace(/&/g, '&amp;');
    html = html.replace(/</g, '&lt;');
    html = html.replace(/>/g, '&gt;');

    return '<pre class=" language-html"><code>' + html + '</code></pre>';
}

function renderPage(id) {
    let pagePath = __dirname + '/../page-test/page.ejs';
    let page = fs.readFileSync(pagePath , {encoding:'utf8', flag:'r'});

    let jsonPath = __dirname + '/../packages/' + id + '/package.json';
    let raw = fs.readFileSync(jsonPath);
    let json = JSON.parse(raw);

    let options = {... global};

    options.desc = json.description;
    options.config = json.config;
    options.dir =  __dirname + '/../packages/' + id + '/tests/';
    options.root =  __dirname + '/../';
    options.includeAttrs = includeAttrs;
    options.includeClasses = includeClasses;
    options.snippet = snippet;
    
    let html = ejs.render(page, options);

    return beautify(html, beautyOpts);
}

module.exports = renderPage;