const readline = require('readline');
const path = require('path');
const fs = require('fs');
const log = require('../tool/utilities/log');
const os = require('os');

const getActualCguVersion = () => {
  try {
    const cguContent = fs.readFileSync(path.resolve(__dirname, '../doc/legal/cgu.md'), 'utf8');
    const frontMatterMatch = cguContent.match(/^---\s*\n([\s\S]*?)\n---/m);
    if (!frontMatterMatch) return null;
    const versionMatch = frontMatterMatch[1].match(/^\s*cguVersion:\s*["']?([\d.]+)["']?/m);
    if (versionMatch) return versionMatch[1];
    return null;
  } catch (e) {
    log.error('Erreur lors de la lecture de la version CGU, fichier cgu.md introuvable ou illisible.');
    return null;
  }
};

const getConsentPath = () => {
  if (process.platform === 'win32') {
    const appDataPath = process.env.APPDATA || os.homedir();
    return path.join(appDataPath, 'dsfr', 'consent.json');
  } else {
    return path.join(os.homedir(), '.config', 'dsfr', 'consent.json');
  }
};

const hasAlreadyConsented = () => {
  return new Promise((resolve) => {
    const consentPath = getConsentPath();

    if (!fs.existsSync(consentPath)) {
      resolve(false);
      return;
    }

    try {
      const content = fs.readFileSync(consentPath, 'utf8');
      const consentData = JSON.parse(content);

      if (!Array.isArray(consentData) || consentData.length === 0) {
        log.error('Format de données de consentement invalide');
        resolve(false);
        return;
      }

      // Récupère la version CGU actuelle
      const cguVersion = getActualCguVersion();
      if (!cguVersion) {
        resolve(false);
        return;
      }

      // Vérifie si au moins un consentement correspond à la version actuelle des CGU
      const hasMatchingConsent = consentData.some((entry) => entry && entry.cguVersion === cguVersion);
      if (hasMatchingConsent) {
        resolve(true);
        return;
      }

      // Si aucune version correspondante n'est trouvée
      log.info('Une mise à jour des conditions générales d\'utilisation requiert un nouveau consentement.');
      resolve(false);
    } catch (e) {
      resolve(false);
    }
  });
};

const storeConsent = () => {
  return new Promise((resolve, reject) => {
    const consentPath = getConsentPath();

    const consentDir = path.dirname(consentPath);
    if (!fs.existsSync(consentDir)) {
      try {
        fs.mkdirSync(consentDir, { recursive: true });
      } catch (e) {
        log.error(`Erreur lors du stockage du consentement "${consentDir}".`);
        reject(e);
        return;
      }
    }

    let consentData = [];
    if (fs.existsSync(consentPath)) {
      try {
        const content = fs.readFileSync(consentPath, 'utf8');
        consentData = JSON.parse(content);
        if (!Array.isArray(consentData)) {
          consentData = [];
        }
      } catch (e) {
        consentData = [];
      }
    }

    const cguVersion = getActualCguVersion();
    if (!cguVersion) {
      reject(new Error('Impossible de récupérer la version CGU actuelle.'));
      return;
    }
    // Remove any existing consent for the current CGU version to avoid duplicates
    consentData = consentData.filter(entry => entry.cguVersion !== cguVersion);
    consentData.push({
      acceptedAt: new Date().toISOString(),
      cguVersion: cguVersion
    });

    try {
      fs.writeFileSync(consentPath, JSON.stringify(consentData, null, 2), { encoding: 'utf8', mode: 0o600 });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

const start = (rl) => {
  return new Promise(resolve => {
    rl.question('\n📖 Appuyez sur Entrée pour lire les conditions générales d\'utilisation...', () => resolve());
  });
};

const pause = (rl) => {
  return new Promise(resolve => {
    rl.question('\n📖 Appuyez sur Entrée pour continuer la lecture...', () => resolve());
  });
};

const showLongText = async (cguContent, rl) => {
  const lines = cguContent.split('\n');
  const chunkSize = 15; // nombre de lignes par "page"

  await start(rl);

  for (let i = 0; i < lines.length; i += chunkSize) {
    const chunk = lines.slice(i, i + chunkSize);
    log.info(chunk.join('\n'));

    if (i + chunkSize < lines.length) {
      await pause(rl);
    }
  }
};

const checkLicense = async () => {
  if (process.env.DSFR_ACCEPT_LICENSE === '1') {
    log.info('Conditions générales d\'utilisation du DSFR acceptées via la variable d\'environnement.');
    return true;
  }

  if (await hasAlreadyConsented()) {
    log.info('Conditions générales d\'utilisation du DSFR déjà acceptées (voir doc/legal/cgu.md).');
    return true;
  }

  if (!process.stdin.isTTY) {
    log.error(
      'Erreur: vous devez accepter les conditions générales d\'utilisation du DSFR.\n' +
      'définissez DSFR_ACCEPT_LICENSE=1 dans votre environnement pour continuer.'
    );
    throw new Error('Licence non acceptée en environnement non interactif');
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    log.section('📋 ACCEPTATION DES CONDITIONS GÉNÉRALES D\'UTILISATION DU SYSTÈME DE DESIGN DE L\'ÉTAT REQUISE');
    log.warning('Pour utiliser le DSFR, vous devez accepter les conditions générales d\'utilisation :');
    log.step('https://www.systeme-de-design.gouv.fr/version-courante/fr/a-propos/conditions-generales-d-utilisation');

    const cguPath = path.join(__dirname, '..', 'doc', 'legal', 'cgu.md');
    if (fs.existsSync(cguPath)) {
      const cguContent = fs.readFileSync(cguPath, 'utf8');
      await showLongText(cguContent, rl);
    } else {
      log.warning('Fichier cgu.md non trouvé, voir le lien ci-dessus pour les conditions.');
    }
    while (true) {
      const answer = await new Promise((resolve) => {
        log.warning('\n📋 Acceptez-vous les conditions générales d\'utilisation du DSFR ? (o/n) : ');
        rl.question('', resolve);
      });

      const normalized = (answer || '').toString().trim().toLowerCase();
      if (normalized === 'o') {
        break;
      }
      if (normalized === 'n') {
        throw new Error('Vous avez refusé les conditions générales d\'utilisation du DSFR');
      }
      log.info('Réponse non reconnue, veuillez répondre "o" pour accepter ou "n" pour refuser.');
    }

    log.success('Merci. Vous avez accepté les conditions générales d\'utilisation du DSFR.');
    await storeConsent();

    rl.close();
    return true;
  } catch (error) {
    rl.close();
    throw error;
  }
};

const postinstall = async () => {
  try {
    await checkLicense();
    log.step('Vérification de l\'installation...');

    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      log.step('✓ Package DSFR installé avec succès');
    }

    log.success('Installation terminée avec succès !');
    log.info('Documentation : https://www.systeme-de-design.gouv.fr/');
  } catch (error) {
    log.error('✗ Erreur lors de l\'installation: ' + error.message);
    process.exit(1);
  }
};

if (require.main === module) {
  postinstall();
}

module.exports = { postinstall, checkLicense };
