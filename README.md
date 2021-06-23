# Système de design de l’État

Le Système de design de l’État (ci-après, le **DSFR**) est un ensemble de composants html / css / js ayant pour but de faciliter la vie des développeurs et intégrateurs pour bâtir leurs interfaces. 

## Installation

L'installation du **DSFR** peut se faire de deux manières différentes. En téléchargeant l'ensemble des fichiers nécessaires à son utilisation, ou en utilisant le gestionnaire de paquets **NPM**.

### Fichiers statiques
Il est possible de télécharger l'ensemble du **DSFR** au format zip ci-dessous. Le zip contient un ensemble de fichiers CSS et Javascript, ainsi que les différentes polices web utilisées, à savoir la Marianne et la Spectral.

[Fichiers statiques](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019574/D+veloppeurs#Fichiers-statiques)

### NPM
Le **DSFR** est disponible sur NPM via un package qu'il est possible d'ajouter directement à votre projet. Il est de ce fait nécessaire d'installer [NodeJS](https://nodejs.org/en/), et d'avoir un fichier package.json à la racine de votre projet. (Il est possible d'en créer un directement via la commande npm init).

Une fois en place, il suffit d'installer le package **@gouvfr/dsfr** contenant l’ensemble des composants: 

```
npm install @gouvfr/dsfr
```
Il est également possible d'installer le package avec [Yarn](https://yarnpkg.com/) : :
```
yarn add @gouvfr/dsfr
```

### Configuration de votre projet 
Lors de la création de votre projet, il est préférable d’adopter l’arborescence prévue par celui-ci, à savoir les fichiers HTML à la racine de projets, et les différentes sources dans des dossiers spécifiques : 

```
/ Racine du projet
└── fonts
└── css
└── js
└── favicons
└── index.html
```

### Template HTML de base
Le point de départ de l’utilisation du DS est la création de fichiers HTML, afin de pouvoir utiliser les différents composants. Ces fichiers sont à mettre à la racine de votre projet. L’exemple ci dessous est le code minimal afin de pouvoir utiliser le design System.

L’ajout de l’attribut data-fr-theme sur la balise html permet d’activer la gestion des thèmes clair et sombre. Les valeurs possibles sont vide,  light ou dark.

```html
<!doctype html>
<html lang="fr" data-fr-theme>
  <head>
    <title>Titre de la page - Nom du site</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="css/dsfr.min.css">
    <link rel="apple-touch-icon" href="favicons/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="favicons/favicon.svg" type="image/svg+xml">
    <link rel="shortcut icon" href="favicons/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="favicons/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
  </head>
  <body>

    <!-- 
      
      code de la page


     -->

    <!-- Script en version es6 module et nomodule pour les navigateurs le ne supportant pas -->
    <script type="module" src="js/dsfr.module.min.js"></script>
    <script type="text/javascript" nomodule src="js/dsfr.nomodule.min.js"></script>
  </body>
</html>
```

**Les CSS**

Afin d’inclure la totalité des composants et des styles du DS, il est nécessaire d’inclure la feuille de style dsfr.min.css.

**Le Javascript**

L’ensemble du code javascript nécessaire au bon fonctionnement du DS se trouve dans deux fichiers dsfr.module.min.js et dsfr.nomodule.min.js. 
Le fichier dsfr.module.min.js utilise les modules javascript natifs. 
Le fichier dsfr.nomodule.min.js est utilisé par les anciens navigateurs ne supportant pas les modules javascript. 
Il est donc impératif d’appeler les deux fichiers javascript afin que le code s’exécute correctement sur l’ensemble des navigateurs supportés.

```html
    <script type="module" src="js/dsfr.module.min.js"></script>
    <script type="text/javascript" nomodule src="js/dsfr.nomodule.min.js"></script>
  </body>
</html>
```

🙌 Vous êtes maintenant prêt(e) à utiliser le **DSFR**.

## Fonctionnement

### BEM
Le **DSFR** utilise la méthodologie [**BEM**]([https://css-tricks.com/bem-101/]([http://getbem.com/naming/](http://getbem.com/naming/))) (Block - Element - Modifier) comme convention de nommage des classes CSS. Elle permet aux développeurs une meilleure compréhension de la relation entre HTML et CSS dans un projet donné.

Selon cette méthodologie, un block représente le plus haut niveau d'abstraction d'un nouveau composant, par exemple `.parent`.
Des éléments (ou enfants), peuvent être placés à l'intérieur de ces blocks, et sont désignés par deux underscore précédés du nom du block : `.parent__element`.
Les modifiers quant à eux, servent à manipuler les blocs, de manière à les styliser de manière indépendante en s'assurant de ne pas induire de changement à des blocks sans aucun rapport avec celui-ci. Ils sont notés à l'aide de deux tirets précédés du nom du block comme suit : `.parent--modifier`.

### Utilisation
Le **DSFR** est constitué de différents composants, que vous pouvez utiliser indépendamment au sein de votre projet.
Une documentation spécifique est prévue pour chaque composant, précisant ses principes d’utilisation, ainsi que les snippets de code HTML à utiliser pour votre projet.

## Contribution
Le processus de contribution est détaillé sur la [page CONTRIBUTING.md](CONTRIBUTING.md).

## Documentation

[Documentation développeurs](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019574/D+veloppeurs)
