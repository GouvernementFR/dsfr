const subsetFont = require('subset-font');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');
const { I18n } = require('../classes/i18n/i18n');
const { readFile } = require('fs').promises;

const standaloneFontSubset = async (pck) => {
  const i18n = new I18n();
  const content = {};

  for (const type in pck.fontSubset) content[type] = pck.fontSubset[type].map(item => (typeof item === 'string' ? i18n.joinTexts(item, pck.id) : i18n.joinTexts(item.key, item.id))).join('');

  let font = `$${pck.id}-subset: (
  `;

  let separator = '';

  for (const key in content) {
    const woff = await readFile(root(`src/core/asset/fonts/Marianne-${key}.woff2`));
    const buffer = await subsetFont(woff, content[key], { targetFormat: 'woff2' });
    font += `${separator}${key.toLowerCase()}: '${buffer.toString('base64')}'`;
    separator = `,
    `;
  }

  font += `
);`;

  createFile(root(`.config/subsets/${pck.id}.scss`), font, true);
};

module.exports = { standaloneFontSubset };
