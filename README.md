
# Design System

## Table des matières
- [Installation](#installation)
- [Fonctionnement](#fonctionnement)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)

## Installation
L'installation du Design System de l'Etat (ci-après, le **DS**) peut se faire de deux manières différentes. En téléchargeant l'ensemble des fichiers nécessaires à son utilisation, ou en utilisant le gestionnaire de paquets **NPM**.

### Fichiers statiques
Il est possible de télécharger l'ensemble du Design System de l'Etat au format zip à [cette adresse](#). Le zip contient un ensemble de fichiers CSS et Javascript, ainsi que les différentes polices web utilisées, à savoir la Marianne et la Spectral.

### NPM
Un package complet du Design System de l'Etat est disponible sur NPM, permettant de télécharger l'ensemble des fichiers nécessaires.
Il est de ce fait nécessaire d'installer [NodeJS](https://nodejs.org/en/), et d'avoir un fichier `package.json` à la racine de votre projet. (Il est possible d'en créer un directement via la commande `npm init`).

Une fois en place, il suffit d'installer le package du Design System de l'Etat via la commande suivante :

```
npm install @gouvfr/design-system
```

Il est également possible d'installer les composants avec [Yarn](https://yarnpkg.com/) :

```
yarn add @gouvfr/design-system
```

### Arborescence du projet

Lors de la création de votre projet, il est nécessaire d’adopter l’arborescence prévue par le Design System de l'Etat, à savoir les fichiers HTML à la racine du projet, et les différentes sources dans des dossiers spécifiques :

```text
/ Racine du projet
└── css
└── fonts
└── js
index.html
```

En cas d'installation via NPM, il est important de récupérer les polices webs dans le dossier node_modules/@ds-fr/dist/fonts, ou de les [télécharger directement ici](#).

### Template HTML de base
Le point de départ de l’utilisation du DS est la création de fichiers HTML afin de pouvoir utiliser les différents composants. Ces fichiers sont à mettre à la racine de votre projet. Voici un exemple de code HTML minimal pour utiliser le DS, chargeant les polices et styles précisés dans la précédente section :

```html
<!doctype html>
<html lang="fr">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1,
         shrink-to-fit=no">
      <link rel="stylesheet" href="css/dsfr.min.css">
      <title>Design System de l'Etat</title>
   </head>
   <body>
      <div class="rf-container"></div>
      <script src="js/dsfr.min.js"></script>
   </body>
</html>
```
## Fonctionnement

### BEM
Le **DS** utilise la méthodologie [**BEM**]([https://css-tricks.com/bem-101/]([http://getbem.com/naming/](http://getbem.com/naming/))) (Block - Element - Modifier) comme convention de nommage des classes CSS. Elle permet aux développeurs une meilleure compréhension de la relation entre HTML et CSS dans un projet donné.

Selon cette méthodologie, un block représente le plus haut niveau d'abstraction d'un nouveau composant, par exemple `.parent`.
Des éléments (ou enfants), peuvent être placés à l'intérieur de ces blocks, et sont désignés par deux underscore précédés du nom du block : `.parent__element`.
Les modifiers quant à eux, servent à manipuler les blocs, de manière à les styliser de manière indépendante en s'assurant de ne pas induire de changement à des blocks sans aucun rapport avec celui-ci. Ils sont notés à l'aide de deux tirets précédés du nom du block comme suit : `.parent--modifier`.

### Icônes
Le Design System de l'Etat utilise une webfont d'icônes, directement chargées en CSS. Il est de ce fait possible d'ajouter directement à votre projet, les icônes mises à disposition par le **DS**, à l'aide de classes spécifiques pouvant se trouver directement sur des composants, ou de manière autonome, à l'aide de balises `<span>`. Exemple :


```html
<span class="rf-fi-alert-fill"></span>
```
## Utilisation

L'ensemble du **DS** est divisé en différents composants qu'il vous est possible d'utiliser dans votre projet. [La documentation en ligne](#) vous permettra de connaître l'ensemble des composants disponibles, ainsi que le code nécessaire à l'implémentation de ceux-ci au sein de votre projet.

## Contribution
Pour des instructions complètes afin de contribuer au code source du **DS**, vous pouvez vous référer
au fichier  [CONTRIBUTING.md](CONTRIBUTING.md).
Ces instructions vous permettrons également d'installer une copie locale du Design System de l'Etat pour le développement d'un nouveau composant.
