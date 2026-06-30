const fs = require('fs');

const root = require('../utilities/root');

const extractCguVersion = (cguContent) => {
  const frontMatterMatch = cguContent.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/m);

  if (!frontMatterMatch) return null;

  const versionMatch = frontMatterMatch[1].match(/^\s*cguVersion:\s*["']?([^"'\s]+)["']?/m);

  return versionMatch ? versionMatch[1] : null;
};

const getCguVersion = () => {
  const cguPath = root('doc/legal/cgu.md');
  const cguContent = fs.readFileSync(cguPath, 'utf8');

  return extractCguVersion(cguContent);
};

module.exports = {
  extractCguVersion,
  getCguVersion
};
