const { createFile } = require('../utilities/file');
const { copyFiles } = require('../build/copy');
const Readme = require('./readme');
const root = require('../utilities/root');
const { getPackages, getPackageYML, getPublicPackage, getAllPackagesYML } = require('../utilities/config');
const log = require('../utilities/log');
const fs = require('fs');

const generateMarkdown = (id) => {
  const data = getPackageYML(id);
  const readme = new Readme(data.id);

  if (data.description) readme.describe(data.description);

  const config = getPublicPackage().config;

  const packages = getPackages();

  const usage = config.usage;

  const combination = packages.filter((p) => {
    return p !== id && (
      (usage.styles[id] && usage.styles[id].indexOf(p) > -1) ||
      (usage.scripts[id] && usage.scripts[id].indexOf(p) > -1)
    );
  });

  for (const dependency of combination) readme.depends(dependency);

  if (usage.styles[id]) {
    for (const p of usage.styles[id]) readme.useStyle(p);
  }

  if (usage.scripts[id]) {
    for (const p of usage.scripts[id]) readme.useScript(p);
  }

  switch (true) {
    case Array.isArray(data.doc):
      for (const doc of data.doc) readme.document(doc.title, doc.url);
      break;

    case typeof data.doc === 'string':
      readme.document(data.title, data.doc);
      break;
  };

  const p = `public/src/${id}/README.md`;
  const filePath = root(p);

  createFile(filePath, readme.publish(), true);
  log(38, p);
};

const completeGlobalMarkdown = () => {
  const file = root('README.md');
  let fileContents = fs.readFileSync(file, 'utf8');

  const packages = getAllPackagesYML();

  for (const pck of packages) {
    fileContents += `\n##### ${pck.title}\n`;
    //fileContents += `- [README](src/${pck.id}/README.md)\n`; @jch: wrong README Path. Waiting for next folders' update.

    switch (true) {
      case Array.isArray(pck.doc):
        for (const d of pck.doc) fileContents += `- [Documentation ${d.title}](${d.url})\n`;
        break;

      case typeof pck.doc === 'string':
        fileContents += `- [Documentation](${pck.doc})\n`;
        break;
    }
  }

  const p = 'public/README.md';
  const filePath = root(p);

  createFile(filePath, fileContents, true);
  log(38, p);

  const mkfiles = ['LICENCE.md','SECURITY.md'];
  copyFiles(root(''), root('public/'), mkfiles, false, false);
  log(38, 'public/LICENCE.md');
  log(38, 'public/SECURITY.md');
  }

module.exports = { generateMarkdown, completeGlobalMarkdown };
