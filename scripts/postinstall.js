const readline = require('readline');
const { existsSync } = require('fs');
const path = require('path');
const fs = require('fs');
const log = require('../tool/utilities/log');
const os = require('os');

const getActualCguVersion = () => {
  try {
    const cguContent = fs.readFileSync(path.resolve(__dirname, '../doc/legal/cgu.md'), 'utf8');
    const match = cguContent.match(/^---\s*[\s\S]*?cguVersion:\s*["']?([\d.]+)["']?/m);
    if (match) {
      return match[1];
    }
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

const hasAlreadyConsented = async () => {
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

      // Parcourir tous les consentements pour trouver une correspondance
      for (let i = 0; i < consentData.length; i++) {
        if (consentData[i] && consentData[i].cguVersion === cguVersion) {
          resolve(true);
          return;
        }
      }

      // Si aucune version correspondante n'est trouvée
      log.info('Une mise à jour des conditions générales d\'utilisation requiert un nouveau consentement.');
      resolve(false);
    } catch (e) {
      resolve(false);
    }
  });
};

const storeConsent = async () => {
  return new Promise((resolve, reject) => {
    const consentPath = getConsentPath();

    const consentDir = path.dirname(consentPath);
    if (!fs.existsSync(consentDir)) {
      fs.mkdirSync(consentDir, { recursive: true });
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
      fs.writeFileSync(consentPath, JSON.stringify(consentData, null, 2), 'utf8');
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
  const chunkSize = 20; // nombre de lignes par "page"

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
    if (existsSync(cguPath)) {
      const cguContent = fs.readFileSync(cguPath, 'utf8');
      await showLongText(cguContent, rl);
    } else {
      log.warning('Fichier cgu.md non trouvé, voir le lien ci-dessus pour les conditions.');
    }

    const answer = await new Promise((resolve) => {
      log.warning('\n📋 Acceptez-vous les conditions générales d\'utilisation du DSFR ? (o/n) : ');
      rl.question('', resolve);
    });

    rl.close();

    if (answer.toLowerCase() !== 'o') {
      throw new Error('Vous avez refusé les conditions générales d\'utilisation du DSFR');
    }

    log.success('Merci. Vous avez accepté les conditions générales d\'utilisation du DSFR.');
    await storeConsent();
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
    if (existsSync(packageJsonPath)) {
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
