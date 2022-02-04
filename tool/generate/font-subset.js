const subsetFont = require('subset-font');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');
const { readFile } = require('fs').promises;

const standaloneFontSubset = async () => {
  const regular = await readFile(root('src/core/asset/fonts/Marianne-Regular.woff2'));
  const bold = await readFile(root('src/core/asset/fonts/Marianne-Bold.woff2'));

  const file = await readFile(root('src/component/connect/content.json'));
  const json = JSON.parse(file);

  let regText = '';
  for (const key in json.login) regText += json.login[key];

  let boldText = '';
  for (const key in json.brand) boldText += json.brand[key];

  const regularBuffer = await subsetFont(regular, regText, { targetFormat: 'woff2' });
  const boldBuffer = await subsetFont(bold, boldText, { targetFormat: 'woff2' });

  const font = `$connect-regular: '${regularBuffer.toString('base64')}';
$connect-bold: '${boldBuffer.toString('base64')}';`;

  createFile(root('src/component/connect/standalone/_font.scss'), font, true);
};

module.exports = { standaloneFontSubset };
