const root = require('../utilities/root');
const { createFile } = require('../utilities/file');
const { getCguVersion } = require('./version');
const log = require('../utilities/log');

const CONSENT_FILE_NAME = '.dsfr.yml';
const ACCEPT_LICENSE_KEY = 'accept-license';

const acceptLicense = () => {
  const cguVersion = getCguVersion();

  if (!cguVersion) {
    throw new Error('La version des CGU est introuvable dans doc/legal/cgu.md.');
  }

  const consentPath = root(CONSENT_FILE_NAME);
  const consentContent = `${ACCEPT_LICENSE_KEY}: ${cguVersion}\n`;

  createFile(consentPath, consentContent);
  log.info(`Modalités d'utilisation du dsfr acceptées (version ${cguVersion}).`);
};

module.exports = {
  acceptLicense
};
