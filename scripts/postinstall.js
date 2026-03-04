const readline = require('readline');
const { existsSync } = require('fs');
const path = require('path');
const fs = require('fs');
const log = require('../tool/utilities/log');

const pause = (rl) => {
  return new Promise(resolve => {
    rl.question('\n📖 Appuyez sur Entrée pour continuer la lecture...', () => resolve());
  });
};

const showLongText = async (cguContent, rl) => {
  const lines = cguContent.split('\n');
  const chunkSize = 20; // nombre de lignes par "page"

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
    log.info('Licence DSFR acceptée via la variable d\'environnement.');
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
    log.warning('Pour installer le DSFR, vous devez accepter les conditions générales d\'utilisation :');
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
      log.step('Installation annulée : Vous avez refusé les conditions générales d\'utilisation du DSFR.');
      throw new Error('Licence non acceptée par l\'utilisateur');
    }

    log.success('Merci. Vous avez accepté les conditions générales d\'utilisation du DSFR.');
    return true;
  } catch (error) {
    rl.close();
    throw error;
  }
};

const postinstall = async () => {
  log.section('📋 ACCEPTATION DES CONDITIONS GÉNÉRALES D\'UTILISATION DU SYSTÈME DE DESIGN DE L\'ÉTAT REQUISE');

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

module.exports = { postinstall };
