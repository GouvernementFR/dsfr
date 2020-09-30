# Publishing

Le Design System de L'Etat est mis à disposition des utilisateurs sous la forme d'un fichier .zip téléchargeable, mais également sous forme d'un package NPM.
Ce dernier peut-être mis à jour par l'équipe de manière manuelle, en procédant à un changement de version, et en publiant sur NPM la nouvelle version.

## Git
La version publiée sur NPM doit être la version à jour sur la branch `master` de ce repository. Il est de ce fait nécessaire de bien vérifier que l'ensemble des packages soient à jour avant publication.

Il faut ensuite compiler les sources afin de générer le dossier `dist` à jour, avec les dernières versions des fichiers CSS et Javascript, avec la commande `yarn build`.

## Configuration NPM
Une fois la branche `master` en place et prête à être publiée, il convient de  mettre à jour le fichier `package.json`, afin d'y préciser le numéro de la nouvelle version de package.
La gestion sémantique de version SemVer prévoit d'incrémenter de numéro de version (MAJEUR.MINEUR.CORRECTIF) de la façon suivante :

1.  le numéro de version MAJEUR quand il y a des changements non rétrocompatibles,
2.  le numéro de version MINEUR quand il y a des ajouts de fonctionnalités rétrocompatibles,
3.  le numéro de version de CORRECTIF quand il y a des corrections d’anomalies rétrocompatibles.

***Exemple*** : 1.2.1

***Important*** : Le Design System de L'Etat fonctionne sous la forme dans Monorepo, et fonctionne avec des workspaces Yarn. Lors de la publication, il est important de vérifier que le fichier `package.json` ne soit pas privé (`"private": true`).

## Publication

Afin de publier une nouvelle version du Design System il est obligatoire d'avoir un compte NPM membre de l'organisation `@gouvfr`, et donc d'avoir les droits de publication sur les packages de celui-ci.

Une fois placé à la racine du projet, il faut donc dans un premier temps se connecter à npm via la commande `npm login`.

Pour publier la nouvelle version, utilisez la commande suivante :

```
npm publish -timeout=9999999 --access public
```
