# 🇫🇷 Système de Design de l’État

[![GitHub release](https://img.shields.io/github/v/release/gouvernementFR/dsfr.svg)](https://GitHub.com/gouvernementFR/dsfr/releases/) [![Generic badge](https://img.shields.io/badge/npm-yellow.svg)](https://www.npmjs.com/package/@gouvfr/dsfr) [![Generic badge](https://img.shields.io/badge/license-grey.svg)](https://github.com/GouvernementFR/dsfr/blob/main/LICENSE.md) [![Npm package monthly downloads](https://badgen.net/npm/dm/@gouvfr/dsfr)](https://npmjs.com/package/@gouvfr/dsfr)

Le Système de Design de l’État (ci-après, le **DSFR**) est un ensemble de composants web HTML, CSS et Javascript pour faciliter le travail des équipes projets des sites Internet publics, et créer des interfaces numériques de qualité et accessibles.

L'outil est développé, maintenu et géré par le [Service d'Information du Gouvernement (SIG)](https://www.gouvernement.fr/service-d-information-du-gouvernement-sig).

Son utilisation par les administrations est soumise à une demande d'agrément (voir partie 5 des Conditions Générales d'Utilisation).

[Voir la documentation officielle](https://www.systeme-de-design.gouv.fr).

## Licence et droit d'utilisation

Le contenu de ce projet est placé sous licence MIT License, à l'exception de la fonte Marianne. Voir [LICENSE.md](https://github.com/GouvernementFR/dsfr/blob/main/LICENSE.md).

#### ⚠️ Utilisation interdite en dehors des sites Internet de l'État

>Il est formellement interdit à tout autre acteur d’utiliser le Système de Design de l’État (les administrations territoriales ou tout autre acteur privé) pour des sites web ou des applications. Le Système de Design de l’État représente l’identité numérique de l’État. En cas d’usage à des fins trompeuses ou frauduleuses, l'État se réserve le droit d’entreprendre les actions nécessaires pour y mettre un terme.

Voir les [conditions générales d'utilisation](doc/legal/cgu.md).

#### ⚠️ Prohibited Use Outside Government Websites

>This Design System is only meant to be used by official French public services' websites and apps. Its main purpose is to make it easy to identify governmental websites for citizens. See terms.

## Installation

L'installation du Système de Design de l'État (ci-après, le **DSFR**) peut se faire de manières différentes. En téléchargeant l'ensemble des fichiers nécessaires à son utilisation, en utilisant le gestionnaire de paquets **NPM**, ou encore via **git**.

### Fichiers statiques

Il est possible de télécharger l'ensemble du **DSFR** au format zip ci-dessous. Le zip contient un ensemble de fichiers CSS et Javascript, ainsi que les différentes polices web utilisées (Marianne et Spectral), et un ensemble d'icônes et de pictogrammes.

Vous trouverez sur [la page Release de Github](https://github.com/GouvernementFR/dsfr/releases), toutes les sources des versions précédentes et la dernière en date.

### NPM

Le **DSFR** est disponible sur NPM via un ensemble de packages qu'il est possible d'ajouter directement à votre projet. Il est de ce fait nécessaire d'installer [NodeJS](https://nodejs.org), et d'avoir un fichier **package.json** à la racine de votre projet. (Il est possible d'en créer un directement via la commande `npm init`).

Une fois en place, il suffit d'installer le package **@gouvfr/dsfr** contenant l’ensemble des composants via un des package manager suivant :

[NPM](https://www.npmjs.com/) :
```
npm install @gouvfr/dsfr
```
[Yarn](https://yarnpkg.com/) :
```
yarn add @gouvfr/dsfr
```
[PNPM](https://pnpm.io/) :
```
pnpm install @gouvfr/dsfr
```

Une fois terminé le dsfr sera alors installé dans le dossier ```node_modules/@gouvfr/dsfr/```.

Pour visualiser les exemples, il est possible de lancer storybook associé au franmework de composants :

```

```

### Structure du DSFR

La structure que nous mettons à disposition , sur le zip ou npm est la suivante:


### Configuration de votre projet




🙌 Vous êtes maintenant prêt(e) à utiliser le **DSFR**.

## Contribution

Le processus de contribution est détaillé sur la [page CONTRIBUTING.md](CONTRIBUTING.md).

## Documentation
