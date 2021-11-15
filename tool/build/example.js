const root = require('../utilities/root');
const ejs = require('ejs');
const fs = require('fs');
const global = require('../../package.json');
const { createFile } = require('../utilities/file');
const beautify = require('js-beautify').html;
const log = require('../utilities/log');
const { getPackages } = require('../utilities/config');
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

const buildExample = (pck) => {
  const pagePath = root('tool/example/example.ejs');
  const page = fs.readFileSync(pagePath, {
    encoding: 'utf8',
    flag: 'r'
  });

  const packages = getPackages();

  const files = {
    style: {
      main: [],
      scheme: [],
      legacy: []
    },
    script: {
      module: [],
      nomodule: []
    }
  };

  const up = pck.path.split('/').map(s => '../').join('');

  const requiredStyle = ['core', 'scheme', 'link', 'accordion', 'form', 'radio', 'modal', 'button'];
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
    const path = up + p.dist;
    if (p.style.files.length > 1) {
      p.style.files.forEach(f => files.style[f].push(`${path}/${p.id}.${f}.css`));
    } else {
      files.style.main.push(`${path}/${p.id}.css`);
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
    const path = up + p.dist;
    if (p.module) files.script.module.push(`${path}/${p.id}.module.js`);
    if (p.nomodule) files.script.nomodule.push(`${path}/${p.id}.nomodule.js`);
  });

  const options = {
    ...global.config,
    ...pck,
    files: files,
    relativeRoot: '../'.repeat(pck.path.split('/').length),
    root: root.toString(),
    beautify: (html) => { return beautify(html, beautyOpts); },
    uniqueId: uniqueId
  };

  const html = ejs.render(page, options);
  const beautified = beautify(html, beautyOpts);

  createFile(pck.example.file, beautified, true);
  log(38, pck.example.file);
};


module.exports = { buildExample };
