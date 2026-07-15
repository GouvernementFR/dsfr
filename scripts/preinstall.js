const path = require('path');
const fs = require('fs');
const log = require('../tool/utilities/log');

const CONSENT_FILE_NAME = '.dsfr.yml';
const ACCEPT_LICENSE_KEY = 'accept-license';
const ACCEPT_LICENSE_ENV = 'DSFR_ACCEPT_LICENSE';
const CREATE_DSFR_PACKAGE = '@gouvfr/dsfr';
const CREATE_DSFR_COMMANDS = {
  npm: `npm create ${CREATE_DSFR_PACKAGE}`,
  pnpm: `pnpm create ${CREATE_DSFR_PACKAGE}`,
  yarn: `yarn create ${CREATE_DSFR_PACKAGE}`,
  bun: `bun create ${CREATE_DSFR_PACKAGE}`
};

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

const isLicenseAcceptedFromEnv = () => process.env[ACCEPT_LICENSE_ENV] === '1';

const getPackageManager = () => {
  const userAgent = process.env.npm_config_user_agent || '';
  const userAgentMatch = userAgent.match(/^([^/\s]+)\//);

  if (userAgentMatch && CREATE_DSFR_COMMANDS[userAgentMatch[1]]) {
    return userAgentMatch[1];
  }

  const execPath = process.env.npm_execpath || '';
  const packageManager = Object.keys(CREATE_DSFR_COMMANDS)
    .sort((a, b) => b.length - a.length)
    .find(name => execPath.includes(name));

  return packageManager || 'yarn';
};

const getCreateDsfrCommand = () => CREATE_DSFR_COMMANDS[getPackageManager()];

const getProjectInitializationError = (message) => {
  return new Error(`${message} Le DSFR n'est pas installé dans ce projet. Lancez \`${getCreateDsfrCommand()}\` pour l'initialiser.`);
};

const checkLicense = () => {
  if (isLicenseAcceptedFromEnv()) return true;

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
    throw new Error(`[UPDATE-${acceptedVersion}->${cguVersion}] La version des modalités d'utilisation acceptée (${acceptedVersion}) ne correspond pas à la dernière version des modalités d'utilisation (${cguVersion}). Lancez \`${getCreateDsfrCommand()}\` pour accepter les modalités d'utilisation à jour.`);
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
