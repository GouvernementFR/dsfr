# 🇫🇷 Système de Design de l’État

[![GitHub release](https://img.shields.io/github/v/release/gouvernementFR/dsfr.svg)](https://GitHub.com/gouvernementFR/dsfr/releases/) [![Generic badge](https://img.shields.io/badge/npm-yellow.svg)](https://www.npmjs.com/package/@gouvfr/dsfr) [![Generic badge](https://img.shields.io/badge/license-grey.svg)](https://github.com/GouvernementFR/dsfr/blob/main/LICENSE.md) [![Npm package monthly downloads](https://badgen.net/npm/dm/@gouvfr/dsfr)](https://npmjs.com/package/@gouvfr/dsfr)

Le Système de Design de l’État (ci-après, le **DSFR**) est un ensemble de composants web HTML, CSS et Javascript pour faciliter le travail des équipes projets des sites Internet publics, et créer des interfaces numériques de qualité et accessibles.

L'outil est développé, maintenu et géré par le [Service d'Information du Gouvernement (SIG)](https://www.info.gouv.fr/organisation/service-d-information-du-gouvernement-sig).

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

L'installation du Système de Design de l'État (ci-après, le DSFR) peut se faire en téléchargeant l'ensemble des fichiers nécessaires à son utilisation, ou en utilisant le gestionnaire de paquets NPM.

### Fichiers statiques

Il est possible de télécharger le DSFR déjà compilé jusqu'à la version 1.14.3, au format zip. Le zip contient un ensemble de fichiers HTML, CSS et JavaScript, ainsi que les différentes polices web utilisées (Marianne et Spectral), et un ensemble d'icônes et de pictogrammes.

[Télécharger le DSFR au format zip sur Github](https://github.com/GouvernementFR/dsfr/releases)

A partir de la version 1.15.0, il est nécessaire de télécharger les sources du DSFR et de les compiler soi-même, en suivant les instructions de la section "Installation via NPM" ci-dessous.

### NPM

Le DSFR est disponible sur NPM via un ensemble de packages qu'il est possible d'ajouter directement à votre projet. Il est de ce fait nécessaire d'installer [NodeJS](https://nodejs.org/en/), et d'avoir un fichier `package.json` à la racine de votre projet. (Il est possible d'en créer un directement via la commande `npm init`).

Une fois en place, il suffit d'installer le package @gouvfr/dsfr contenant l’ensemble des composants:

```html
npm install @gouvfr/dsfr
```

Il est également possible d'installer le package avec [Yarn](https://yarnpkg.com/) :

```html
yarn add @gouvfr/dsfr
```

A partir de la version 1.15.0, l'installation du package @gouvfr/dsfr nécessite l'acceptation des conditions d'utilisation du DSFR, qui sont présentées lors de l'installation. En cas de refus, le package ne sera pas installé.

Une fois terminé le dsfr sera alors installé dans le dossier `node_modules/@gouvfr/dsfr/`.

### Github

Il est également possible de cloner le projet directement depuis Github, et de l'installer localement. Pour cela, il suffit de cloner le projet avec la commande suivante :

```html
git clone https://github.com/GouvernementFR/dsfr.git
```

Puis de se rendre dans le dossier du projet, installer les dépendances, et compiler le projet avec les commandes suivantes :

```html
cd dsfr
yarn install
yarn build
```

## Pages d'exemples

Pour visualiser les exemples, il est nécessaire de lancer un serveur local. Pour cela, installer le package browser-sync, puis lancer le serveur dans le dossier du dsfr :

```html
npm install browser-sync
cd node_modules/@gouvfr/dsfr/
npm run serve
```

Une fois le serveur lancé, les exemples sont disponibles à l'adresse http://localhost:8080/example/

## Structure du DSFR

La structure du projet est la suivante :

- **dist** : contient les fichiers css et js compilés à importer dans votre projet
- **src** : contient les sources sass et js des différents composants
- **example** : contient des snippets html d'exemple des composants et modèles de pages que vous pouvez consulter en local
- **standalone** : contient des éléments utilisables de manière autonome, sans utilisation du DSFR

## Configuration de votre projet

Lors de la création de votre projet, il est nécessaire d’adopter l’arborescence prévue par celui-ci, à savoir les fichiers HTML à la racine du projets, et les différentes sources du répertoire "dist" dans des dossiers spécifiques :

Une structure minimale serait :

```html
/ Racine du projet
└── index.html
└── dsfr.min.css
└── dsfr.module.min.js
└── dsfr.nomodule.min.js
└── icons/
└── favicon/
└── fonts/
└── utility/
  └── utility.min.css
```

Les polices de caractères utilisées sur le DS, à savoir la Marianne et la Spectral, sont des fichiers .woff et .woff2, ils doivent se trouver dans le répertoire ***fonts***.

Les dossiers ***fonts*** et ***favicon*** doivent être placés au même niveau que le dossier contenant le CSS du core du dsfr (ou au même niveau que le css ***dsfr.min.css*** à la racine de dist, qui contient le core). Le fichier ***utility.min.css*** doit être placé un niveau plus bas que le dossier ***icons***, dans dossier utility par exemple, pour respecter les chemins d'accès vers les icônes.

### Le HTML

Le point de départ de l’utilisation du DSFR est la création de fichiers HTML, afin de pouvoir utiliser les différents composants. Ces fichiers sont à mettre à la racine de votre projet. L’exemple ci dessous est le code minimal afin de pouvoir utiliser le DSFR.

```html
<!doctype html>
<html lang="fr" data-fr-scheme="system">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">

    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="favicon/favicon.svg" type="image/svg+xml">
    <link rel="shortcut icon" href="favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->

    <link rel="stylesheet" href="dsfr.min.css">
    <link rel="stylesheet" href="utility/utility.min.css">

    <!--- Script pour corriger l'effet de flash au chargement du mode sombre, à placer dans le head pour être exécuté le plus tôt possible -->
    <script type="module">
      const e="system",t="dark",c="dark",o="data-fr-theme",a="data-fr-scheme",r=`:root[${o}], :root[${a}]`,m=()=>{document.documentElement.setAttribute(o,c),document.documentElement.style.colorScheme="dark"},n=()=>{window.matchMedia("(prefers-color-scheme: dark)").matches&&m()};(()=>{if(document.documentElement.matches(r)){const c=(()=>{try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}})()?localStorage.getItem("scheme"):"",o=document.documentElement.getAttribute(a);switch(!0){case c===t:m();break;case c===e:n();break;case o===t:m();break;case o===e:n()}}})();
    </script>

    <title>Titre de la page - Nom du site</title>
  </head>
  <body>
    <!--
      code de la page
     -->

    <!-- Script en version es6 module et nomodule pour les navigateurs le ne supportant pas -->
    <script type="module" src="dsfr.module.min.js"></script>
    <script type="text/javascript" nomodule src="dsfr.nomodule.min.js"></script>
  </body>
</html>
```

### Les CSS

Le DSFR est composé de plusieurs fichiers CSS, chacun correspondant à un ensemble de styles. Il est possible d'importer l'ensemble des composants et styles du DSFR ou de n'importer que ceux dont vous avez besoin.

Pour importer l'ensemble des composants et styles, il suffit d'inclure le fichier CSS principal `dist/dsfr.min.css`. Ce fichier contient les styles de base du DSFR ainsi que les styles de tous les composants. Les classes utilitaires, comme les icônes ou les utilitaires de couleurs, sont disponibles dans un fichier séparé `dist/utility/utility.min.css`.

**Exemple d'importation complète**

```html
<html>
  <head>
    <link rel="stylesheet" href="dsfr.min.css">
    <link rel="stylesheet" href="utility/utility.min.css">
```

Le fichier `dsfr.min.css` contient les styles du cœur du DSFR (core), la gestion du mode sombre (scheme), ainsi que les styles de tous les composants (component). Ce qui correspond à l'importation des fichiers suivants :

```html
<link rel="stylesheet" href="dist/core/core.min.css">
<link rel="stylesheet" href="dist/scheme/scheme.min.css">
<link rel="stylesheet" href="dist/component/component.min.css">
```

Ainsi, si vous ne souhaitez pas utiliser le mode sombre, par exemple, vous pouvez vous passer du fichier `scheme.min.css`.

Le DSFR est conçu pour être modulaire, ce qui signifie que vous pouvez choisir d'importer uniquement les composants dont vous avez besoin. Pour cela, il suffit d'importer le fichier CSS du composant souhaité ainsi que celui de ses dépendances CSS. Ces dépendances sont listées dans le ***README.md*** de chaque composants et dans la partie code de sa documentation.

Par exemple, si vous souhaitez utiliser uniquement le composant "modal", la documentation indique une dépendance au "core" et au "button", on ajoutera aussi la dépendance à "scheme" si l'on utilise le mode sombre. Vous pouvez donc importer les fichiers CSS suivants :

```html
<link rel="stylesheet" href="dist/core/core.min.css">
<link rel="stylesheet" href="dist/scheme/scheme.min.css">
<link rel="stylesheet" href="dist/components/modal/modal.min.css">
<link rel="stylesheet" href="dist/components/button/button.min.css">
```

Pour encore plus de modularité, le DSFR propose un découpage plus fin des fichiers CSS.
Chaque fichier CSS est découpé en plusieurs sous fichiers avec les suffixes suivants :

- ".main.min.css" : contient les styles principaux du composant.
- ".print.min.css" : contient les styles spécifiques à l'impression.
- ".legacy.min.css" : contient les styles spécifiques aux anciens navigateurs, notamment Internet Explorer 11.

Enfin, pour chacun des fichiers et sous fichiers CSS, il est possible de les importer en version "minifiée" ou non. La version minifiée est optimisée pour la production, tandis que la version non minifiée est destinée au développement et au débogage.

### Thèmes

L’ajout de l’attribut **data-fr-scheme** sur la balise html permet d’activer la gestion des thèmes clair et sombre. Les valeurs possibles sont "system", "light", "dark". La valeur “system” permet d’utiliser la configuration définie sur le système d’exploitation de l’utilisateur. Consultez la documentation du composant "[Paramètre d’affichage](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/parametres-d-affichage)" afin d’en savoir plus.

### Le Javascript

L’ensemble du code javascript nécessaire au bon fonctionnement du DSFR se trouve dans deux fichiers `dist/dsfr/dsfr.module.min.js` et `dist/dsfr/dsfr.nomodule.min.js`.

De la même façon que le CSS il est possible d’importer uniquement le JS des composants utilisés (et leurs dépendances).

Le fichier `dsfr.module.min.js` utilise les modules javascript natifs - sa balise script d’appel doit avoir l’attribut `type=”module”`. Le fichier `dsfr.nomodule.min.js` est utilisé par les anciens navigateurs ne supportant pas les modules javascript - sa balise script doit contenir l’attribut `nomodule`. Il est impératif d’appeler les deux fichiers javascript afin que le code s’exécute correctement sur l’ensemble des navigateurs supportés. Le navigateur choisira automatiquement le fichier à exécuter en fonction de sa compatibilité avec les modules javascript.

Les fichiers javascript sont à importer dans la balise `<body>` de votre page, après le contenu HTML, afin de ne pas bloquer le rendu de la page.

**Exemple d'importation des fichiers javascript**

```html
    <script type="module" src="dsfr/dsfr.module.min.js"></script>
    <script type="text/javascript" nomodule src="dsfr/dsfr.nomodule.min.js"></script>
  </body>
</html>
```

Les fichiers `dsfr.module.min.js` et `dsfr.nomodule.min.js` contiennent les scripts du cœur du DSFR (core), la gestion du mode sombre (scheme), ainsi que les scripts de tous les composants (component). La version nomodule importe aussi son lot de polyfills pour les anciens navigateurs (legacy). Ce qui correspond à l'importation des fichiers suivants :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/scheme/scheme.module.min.js"></script>
<script type="module" src="dist/component/component.module.min.js"></script>
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/scheme/scheme.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/component.nomodule.min.js"></script>
```

Les composants du DSFR sont conçus pour être instanciés automatiquement par le JavaScript via leur structure HTML. Une API est mise à disposition pour permettre aux développeurs de les manipuler de manière programmatique. Consultez la documentation de l'[API JavaScript du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur/api-javascript) pour en savoir plus.

### Favicon

[La documentation des icônes de favoris](https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/icone-de-favori) détaille la façon de les implémenter dans vos pages.

## Fonctionnement

### BEM

Le DSFR utilise la méthodologie [BEM](http://getbem.com/naming/) (Block - Element - Modifier) comme convention de nommage des classes CSS. Elle permet aux développeurs une meilleure compréhension de la relation entre HTML et CSS dans un projet donné.

Selon cette méthodologie, un block représente le plus haut niveau d'abstraction d'un nouveau composant, par exemple ***.parent***. Des éléments (ou enfants), peuvent être placés à l'intérieur de ces blocks, et sont désignés par deux underscore précédés du nom du block : ***.parent__element***. Les modifiers quant à eux, servent à manipuler les blocs, de manière à les styliser de manière indépendante en s'assurant de ne pas induire de changement à des blocks sans aucun rapport avec celui-ci. Ils sont notés à l'aide de deux tirets précédés du nom du block comme suit : ***.parent--modifier***.

### Utilisation

Le DSFR est constitué de différents composants, que vous pouvez utiliser indépendamment au sein de votre projet. Une documentation spécifique est prévue pour chaque composant, précisant ses principes d’utilisation, ainsi que les snippets de code HTML à utiliser pour votre projet.

**Vous êtes maintenant prêt à utiliser le DSFR !**

## Contribution

Le processus de contribution est détaillé sur la [page CONTRIBUTING.md](CONTRIBUTING.md).

## Documentation

[Documentation développeur·se](https://www.systeme-de-design.gouv.fr/version-courante/fr/premiers-pas/vous-etes-developpeur)
