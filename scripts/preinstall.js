const path = require('path');
const fs = require('fs');
const log = require('../tool/utilities/log');

const CONSENT_FILE_NAME = '.dsfr.yml';
const ACCEPT_LICENSE_KEY = 'accept-license';
const CREATE_DSFR_COMMAND = 'yarn create @gouvfr/dsfr';

const getPackageRoot = () => path.join(__dirname, '..');

const getCguPath = () => path.join(getPackageRoot(), 'doc', 'legal', 'cgu.md');

const getProjectRootFromNodeModules = () => {
  let dir = getPackageRoot();
  let projectRoot = null;

  while (dir !== path.dirname(dir)) {
    if (path.basename(dir) === 'node_modules') {
      projectRoot = path.dirname(dir);
      break;
    }

    dir = path.dirname(dir);
  }

  return projectRoot;
};

const getProjectRoot = () => {
  if (process.env.INIT_CWD) {
    return path.resolve(process.env.INIT_CWD);
  }

  return getProjectRootFromNodeModules() || process.cwd();
};

const extractCguVersion = (cguContent) => {
  const frontMatterMatch = cguContent.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/m);

  if (!frontMatterMatch) {
    return null;
  }

  const versionMatch = frontMatterMatch[1].match(/^\s*cguVersion:\s*["']?([^"'\s]+)["']?/m);

  return versionMatch ? versionMatch[1] : null;
};

const getActualCguVersion = () => {
  try {
    const cguContent = fs.readFileSync(getCguPath(), 'utf8');
    return extractCguVersion(cguContent);
  } catch (e) {
    return null;
  }
};

const getConsentPath = (projectRoot = getProjectRoot()) => path.join(projectRoot, CONSENT_FILE_NAME);

const getAcceptedLicenseVersion = (consentContent) => {
  const acceptLicenseRegExp = new RegExp(`^\\s*${ACCEPT_LICENSE_KEY}\\s*(?:=|:)\\s*["']?([^"'\\s#]+)["']?\\s*(?:#.*)?$`);
  const lines = consentContent.split(/\r?\n/);
  const acceptLicenseLine = lines.find(line => acceptLicenseRegExp.test(line));

  if (!acceptLicenseLine) {
    return null;
  }

  return acceptLicenseLine.match(acceptLicenseRegExp)[1];
};

const getProjectInitializationError = (message) => {
  return new Error(`${message} Le DSFR n'est pas installé dans ce projet. Lancez \`${CREATE_DSFR_COMMAND}\` pour l'initialiser.`);
};

const checkLicense = () => {
  const cguVersion = getActualCguVersion();

  if (!cguVersion) {
    throw getProjectInitializationError('[MISSING_CGU_VERSION]');
  }

  const consentPath = getConsentPath();

  if (!fs.existsSync(consentPath)) {
    throw getProjectInitializationError('[NO_YML]');
  }

  const acceptedVersion = getAcceptedLicenseVersion(fs.readFileSync(consentPath, 'utf8'));

  if (!acceptedVersion) {
    throw getProjectInitializationError('[MISSING_FIELD]');
  }

  if (acceptedVersion !== cguVersion) {
    throw getProjectInitializationError(`[UPDATE-${acceptedVersion}->${cguVersion}]`);
  }
  return true;
};

const preinstall = () => {
  try {
    checkLicense();
  } catch (error) {
    log.error(`${error.message}`);
    process.exit(1);
  }
};

if (require.main === module) {
  preinstall();
}

module.exports = {
  checkLicense
};
