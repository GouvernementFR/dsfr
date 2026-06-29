const path = require('path');
const fs = require('fs');
const log = require('../tool/utilities/log');

const CONSENT_FILE_NAME = '.dsfr.yml';
const ACCEPT_LICENSE_KEY = 'accept-license';
const CREATE_DSFR_COMMAND = 'yarn create @gouvfr/dsfr [-v version]';

const getPackageRoot = () => path.join(__dirname, '..');

const getCguPath = () => path.join(getPackageRoot(), 'doc', 'legal', 'cgu.md');

const getProjectRootFromNodeModules = () => {
  let dir = getPackageRoot();
  let projectRoot = null;

  while (dir !== path.dirname(dir)) {
    if (path.basename(dir) === 'node_modules') {
      projectRoot = path.dirname(dir);
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

const parseSemver = (version) => {
  const semverMatch = /^v?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/.exec(version);

  if (!semverMatch) {
    return null;
  }

  return {
    major: Number(semverMatch[1]),
    minor: Number(semverMatch[2]),
    patch: Number(semverMatch[3]),
    prerelease: semverMatch[4] ? semverMatch[4].split('.') : []
  };
};

const compareSemverIdentifier = (left, right) => {
  const leftIsNumeric = /^\d+$/.test(left);
  const rightIsNumeric = /^\d+$/.test(right);

  if (leftIsNumeric && rightIsNumeric) {
    return Number(left) - Number(right);
  }

  if (leftIsNumeric) return -1;
  if (rightIsNumeric) return 1;
  if (left < right) return -1;
  if (left > right) return 1;
  return 0;
};

const compareSemver = (leftVersion, rightVersion) => {
  const left = parseSemver(leftVersion);
  const right = parseSemver(rightVersion);

  if (!left || !right) {
    return null;
  }

  for (const key of ['major', 'minor', 'patch']) {
    if (left[key] !== right[key]) {
      return left[key] - right[key];
    }
  }

  if (left.prerelease.length === 0 && right.prerelease.length === 0) return 0;
  if (left.prerelease.length === 0) return 1;
  if (right.prerelease.length === 0) return -1;

  const maxLength = Math.max(left.prerelease.length, right.prerelease.length);

  for (let i = 0; i < maxLength; i++) {
    if (left.prerelease[i] === undefined) return -1;
    if (right.prerelease[i] === undefined) return 1;

    const comparison = compareSemverIdentifier(left.prerelease[i], right.prerelease[i]);
    if (comparison !== 0) return comparison;
  }

  return 0;
};

const getProjectInitializationError = (message) => {
  return new Error(`${message} Le projet doit être initialisé via la commande "${CREATE_DSFR_COMMAND}".`);
};

const getUpdatedCguError = (acceptedVersion, cguVersion) => {
  return new Error(
    `Les conditions générales d'utilisation du DSFR ont été mises à jour (version acceptée : ${acceptedVersion}, version attendue : ${cguVersion}). Relancez "yarn create @gouvfr/dsfr".`
  );
};

const assertAcceptedLicenseVersion = (acceptedVersion, cguVersion) => {
  if (acceptedVersion === cguVersion) {
    return;
  }

  const versionComparison = compareSemver(acceptedVersion, cguVersion);

  if (versionComparison !== null && versionComparison < 0) {
    throw getUpdatedCguError(acceptedVersion, cguVersion);
  }

  throw getProjectInitializationError(
    `La version des CGU acceptée dans ${CONSENT_FILE_NAME} (${acceptedVersion}) ne correspond pas à la version attendue (${cguVersion}).`
  );
};

const checkLicense = () => {
  const cguVersion = getActualCguVersion();

  if (!cguVersion) {
    throw new Error('Impossible de lire la version des CGU depuis doc/legal/cgu.md.');
  }

  const consentPath = getConsentPath();

  if (!fs.existsSync(consentPath)) {
    throw getProjectInitializationError(`Le fichier ${CONSENT_FILE_NAME} est introuvable.`);
  }

  const acceptedVersion = getAcceptedLicenseVersion(fs.readFileSync(consentPath, 'utf8'));

  if (!acceptedVersion) {
    throw getProjectInitializationError(
      `La variable ${ACCEPT_LICENSE_KEY} est absente du fichier ${CONSENT_FILE_NAME}.`
    );
  }

  assertAcceptedLicenseVersion(acceptedVersion, cguVersion);
  log.info(`Conditions générales d'utilisation du DSFR acceptées pour la version ${cguVersion}.`);
  return true;
};

const preinstall = () => {
  try {
    checkLicense();
  } catch (error) {
    log.error(`✗ Erreur lors de l'installation du DSFR : ${error.message}`);
    process.exit(1);
  }
};

if (require.main === module) {
  preinstall();
}

module.exports = {
  checkLicense
};
