const { createFile } = require('../utilities/file');
const { Readme } = require('../classes/md/readme');
const root = require('../utilities/root');
const log = require('../utilities/log');
const { I18n } = require('../classes/i18n/i18n');
const { Config } = require('../classes/config/config');

const generateMarkdown = async (pck, locale) => {
  const i18n = new I18n(locale);
  const readme = new Readme(pck.id, i18n);
  const config = await Config.get();

  if (pck.description) readme.describe(pck.description);

  for (const dependency of pck.combination) readme.depends(dependency);

  for (const p of pck.usage.style) readme.useStyle(p);
  for (const p of pck.usage.script) readme.useScript(p, config.flat);

  switch (true) {
    case Array.isArray(pck.doc):
      for (const doc of pck.doc) readme.document(doc.title, doc.url);
      break;

    case typeof pck.doc === 'string':
      readme.document(pck.title, pck.doc);
      break;
  };

  const p = `${pck.dist}/README.md`;
  const filePath = root(p);

  createFile(filePath, readme.publish(), true);
  log(38, p);
};

module.exports = { generateMarkdown };
