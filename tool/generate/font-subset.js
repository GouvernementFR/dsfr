const subsetFont = require('subset-font');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');
const { readFile } = require('fs').promises;

const standaloneFontSubset = async (pck) => {
  const file = await readFile(root(pck.standalone.content.file));
  const json = JSON.parse(file);

  const content = {};

  for (const key in json) {
    const text = json[key];
    const type = text.type;
    if (!type) continue;
    if (content[type] === undefined) content[type] = '';
    content[type] += text.value;
  }

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

  createFile(root(pck.standalone.content.dest), font, true);
};

module.exports = { standaloneFontSubset };
