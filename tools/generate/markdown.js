const { createFile } = require('../utilities/file');
const Readme = require('./readme');
const root = require('../utilities/root');
const { getPackageYML, getPublicPackage } = require('../utilities/config');
const getPackages = require('../utilities/packages');
const log = require('../utilities/log');

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

  const p = `public/packages/${id}/README.md`;
  const filePath = root(p);

  log(38, p);

  createFile(filePath, readme.publish());
};

module.exports = generateMarkdown;
