const root = require('../utilities/root');
const fs = require('fs');
const ejs = require('ejs');
const global = require('../../package.json');
const buildSchemeBootScript = require('./scripts').buildSchemeBootScript;
const { createFile } = require('../utilities/file');
const beautify = require('js-beautify').html;
const log = require('../utilities/log');
const { getPackages } = require('../utilities/config');
const prand = require('pure-rand');
const { I18n } = require('../classes/i18n/i18n');
const beautyOpts = beautify.defaultOptions();
beautyOpts.end_with_newline = true;
beautyOpts.max_preserve_newlines = 0;
beautyOpts.indent_inner_html = false;
beautyOpts.indent_handlebars = true;
beautyOpts.inline = [];
beautyOpts.unformatted = ['script'];

let count = 0;

function uniqueId (module) {
  count++;
  return `${module}-${count}`;
}

const imgToBase64 = (path, format = 'png') => {
  const img = fs.readFileSync(path, { encoding: 'base64' });
  return `data:image/${format};base64,${img}`;
};

const buildExample = async (pck, locale) => {
  if (!pck.example || !pck.example.root) return;

  const schemeBootScript = await buildSchemeBootScript();

  const packages = getPackages();

  const files = {
    style: {
      main: [],
      scheme: [],
      legacy: [],
      print: []
    },
    script: {
      module: [],
      nomodule: []
    }
  };

  const requiredStyle = ['core', 'scheme', 'link', 'accordion', 'form', 'radio', 'modal', 'button', 'utility'];
  const exampleStyle = pck.example.style.map(id => packages.filter(i => i.id === id)[0].usage.style).flat();
  const neededStyle = [...pck.usage.style, ...requiredStyle, ...exampleStyle].filter((id, index, array) => array.indexOf(id) === index);

  const replaceStyle = neededStyle.map(id => packages.filter(p => p.id === id)[0].replace.style).flat();
  const style = neededStyle.filter((id, index, array) => replaceStyle.indexOf(id) === -1);

  style.sort((a, b) => {
    const pa = packages.filter(p => p.id === a)[0];
    const pb = packages.filter(p => p.id === b)[0];
    return pa.style.level - pb.style.level;
  });

  style.forEach(id => {
    const p = packages.filter(i => i.id === id)[0];
    if (p.style.files.length > 1) {
      p.style.files.forEach(f => files.style[f].push(`${p.dist}/${p.id}.${f}.css`));
    } else {
      files.style.main.push(`${p.dist}/${p.id}.css`);
    }
  });

  const requiredScript = ['legacy', 'core', 'scheme', 'accordion', 'modal', 'display'];
  const exampleScript = pck.example.script.map(id => packages.filter(i => i.id === id)[0].usage.script).flat();
  const neededScript = [...pck.usage.script, ...requiredScript, ...exampleScript].filter((id, index, array) => array.indexOf(id) === index);
  const replaceScript = neededScript.map(id => packages.filter(p => p.id === id)[0].replace.script).flat();
  const script = neededScript.filter((id, index, array) => replaceScript.indexOf(id) === -1);
  script.sort((a, b) => {
    const pa = packages.filter(p => p.id === a)[0];
    const pb = packages.filter(p => p.id === b)[0];
    return pa.script.level - pb.script.level;
  });

  script.forEach(id => {
    const p = packages.filter(i => i.id === id)[0];
    if (p.module) files.script.module.push(`${p.dist}/${p.id}.module.js`);
    if (p.nomodule) files.script.nomodule.push(`${p.dist}/${p.id}.nomodule.js`);
  });

  const options = {
    ...global.config,
    ...pck,
    files: files,
    entry: 'example',
    root: root.toString(),
    isStandalone: false,
    beautify: (html) => { return beautify(html, beautyOpts); },
    uniqueId: uniqueId,
    i18n: new I18n(locale),
    locale: locale,
    schemeBootScript: schemeBootScript,
    prand: prand
  };

  renderExample(options, pck.example.root);
};

const renderExample = (options, node) => {
  if (node && node.hasData) {
    const opts = {
      ...options,
      src: node.src,
      config: node.config,
      relativeRoot: '../'.repeat(node.dest.split('/').length - 1),
      subdir: node.subdir || []
    };

    ejs.renderFile(root('tool/example/decorator.ejs'), opts
      , (error, str) => {
        if (error) {
          console.log(error);
        } else {
          const beautified = beautify(str, beautyOpts);

          createFile(root(node.dest), beautified, true);
          log(38, node.dest);
        }
      });
  }

  if (node && node.children) {
    for (const child of node.children) renderExample(options, child);
  }
};

const buildStandaloneExample = (pck, locale) => {
  const options = {
    ...pck,
    imgToBase64: path => imgToBase64(`${pck.path}/${path}`),
    entry: 'standalone',
    root: root.toString(),
    beautify: (html) => { return beautify(html, beautyOpts); },
    isStandalone: true,
    uniqueId: uniqueId,
    i18n: new I18n(locale),
    locale: locale,
    prand: prand
  };

  renderExample(options, pck.standalone.example.root);
};

module.exports = { buildExample, buildStandaloneExample };
