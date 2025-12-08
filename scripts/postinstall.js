const readline = require('readline');
const { existsSync } = require('fs');
const path = require('path');
const fs = require('fs');
const log = require('../tool/utilities/log');

const checkLicense = () => {
  return new Promise((resolve, reject) => {
    // 1. Si l'utilisateur a déjà défini DSFR_ACCEPT_LICENSE=1 (CI, automation)
    if (process.env.DSFR_ACCEPT_LICENSE === '1') {
      log.info('Licence DSFR acceptée via la variable d’environnement.');
      resolve(true);
      return;
    }

    // 2. Environnement non interactif → refuser
    if (!process.stdin.isTTY) {
      log.error(
        'erreur: vous devez accepter les conditions générales d’utilisation du DSFR.\n' +
        'définissez dsfr_accept_license=1 dans votre environnement pour continuer.'
      );
      reject(new Error('Licence non acceptée en environnement non interactif'));
      return;
    }

    // 3. Prompt normal avec mise en forme colorée
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    log.warning('Pour installer le DSFR, vous devez accepter les conditions générales d’utilisation :');
    log.step('https://www.systeme-de-design.gouv.fr/version-courante/fr/a-propos/conditions-generales-d-utilisation');

    const cguPath = path.join(__dirname, '..', 'doc', 'legal', 'cgu.md');
    if (existsSync(cguPath)) {
      const cguContent = fs.readFileSync(cguPath, 'utf8');
      log.info(cguContent);
    } else {
      log.warning('Fichier cgu.md non trouvé, voir le lien ci-dessus pour les conditions.');
    }

    log.warning('Acceptez-vous les conditions générales d’utilisation du DSFR ? (o/n) : ');

    rl.question('', (answer) => {
      if (answer.toLowerCase() !== 'o') {
        log.step('Installation annulée : Vous avez refusé les conditions générales d’utilisation du DSFR.');
        rl.close();
        reject(new Error('Licence non acceptée par l’utilisateur'));
        return;
      }

      log.success('Merci. Vous avez accepté les conditions générales d’utilisation du DSFR.');
      rl.close();
      resolve(true);
    });
  });
};

const postinstall = async () => {
  log.section('📋 ACCEPTATION DES CONDITIONS GÉNÉRALES D’UTILISATION DU SYSTÈME DE DESIGN DE L’ÉTAT REQUISE');

  try {
    await checkLicense();
    log.step('Vérification de l’installation...');

    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    if (existsSync(packageJsonPath)) {
      log.step('✓ Package DSFR installé avec succès');
    }

    log.success('Installation terminée avec succès !');
    log.info('Documentation : https://www.systeme-de-design.gouv.fr/');
  } catch (error) {
    log.error('✗ Erreur lors de l’installation: ' + error.message);
    process.exit(1);
  }
};

// Exécution si le script est appelé directement
if (require.main === module) {
  postinstall();
}

module.exports = { postinstall };
