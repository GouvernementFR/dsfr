# Système de design de l’État

Le Système de design de l’État (ci-après, le **DSFR**) est un ensemble de composants html / css / js ayant pour but de faciliter la vie des développeurs et intégrateurs pour bâtir leurs interfaces.

## Installation

L'installation du Système de Design de l'État (ci-après, le **DSFR**) peut se faire de manières différentes. En téléchargeant l'ensemble des fichiers nécessaires à son utilisation, en utilisant le gestionnaire de paquets **NPM**, ou encore via **git**.

### Fichiers statiques
Il est possible de télécharger l'ensemble du **DSFR** au format zip ci-dessous. Le zip contient un ensemble de fichiers CSS et Javascript, ainsi que les différentes polices web utilisées, à savoir la Marianne et la Spectral.

[Fichiers statiques](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019574/D+veloppeurs#Fichiers-statiques)

### NPM
Le **DSFR** est disponible sur NPM via un ensemble de packages qu'il est possible d'ajouter directement à votre projet. Il est de ce fait nécessaire d'installer [NodeJS](https://nodejs.org), et d'avoir un fichier **package.json** à la racine de votre projet. (Il est possible d'en créer un directement via la commande ```npm init```).

Une fois en place, il suffit d'installer le package **@gouvfr/dsfr** contenant l’ensemble des composants:

```
npm install @gouvfr/dsfr
```
Il est également possible d'installer le package avec [Yarn](https://yarnpkg.com/) :
```
yarn add @gouvfr/dsfr
```
Une fois terminé le dsfr sera alors installé dans le dossier ```node_modules/@gouvfr/dsfr/```.


Pour visualiser les exemples, il est nécéssaire de lancer un serveur local :


```
npm run serve
```
Une fois le serveur lancé, les exemples sont disponibles à l'adresse : http://localhost:8080/example/

### Structure du DSFR

La structure que nous mettons à disposition , sur le zip ou npm est la suivante:
- **dist** : contient les fichiers css et js à importer en fonction des packages utilisés.
- **src** : contient les sources sass et js des différents composants.
- **example** : contient des snippets html d’example des composants que vous pouvez consulter en local.

### Configuration de votre projet
Lors de la création de votre projet, il est nécessaire d’adopter l’arborescence prévue par celui-ci, à savoir les fichiers HTML à la racine du projets, et les différentes sources du **répertoire dist** dans des dossiers spécifiques :

Une structure minimale serait :

```
/ Racine du projet
└── font
└── dsfr
  └── dsfr.min.css
  └── dsfr.module.min.js
  └── dsfr.nomodule.min.js
└── favicon
└── index.html
```
Les polices de caractères utilisées sur le DS, à savoir la Marianne et la Spectral, sont des fichiers .woff et .woff2, ils doivent se trouver dans le répertoire font. Ce dossier doit être placé au même niveau que le dossier contenant le CSS du core dsfr ('dsfr' dans notre exemple puisque dsfr.min.css contient le core)

### Le HTML
Le point de départ de l’utilisation du DSFR  est la création de fichiers HTML, afin de pouvoir utiliser les différents composants. Ces fichiers sont à mettre à la racine de votre projet. L’exemple ci dessous est le code minimal afin de pouvoir utiliser le DSFR.

L’ajout de l’attribut **data-fr-theme** sur la balise html permet d’activer la gestion des thèmes clair et sombre. Les valeurs possibles sont default, light, dark.
Consulter la [documentation des paramètres d’affichage](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/579928166) afin d’en savoir plus.

```html
<!doctype html>
<html lang="fr" data-fr-theme="default">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="dsfr/dsfr.min.css">

    <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="favicon/favicon.svg" type="image/svg+xml">
    <link rel="shortcut icon" href="favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->

    <title>Titre de la page - Nom du site</title>
  </head>
  <body>

    <!--
      code de la page
     -->

    <!-- Script en version es6 module et nomodule pour les navigateurs le ne supportant pas -->
    <script type="module" src="dsfr/dsfr.module.min.js"></script>
    <script type="text/javascript" nomodule src="dsfr/dsfr.nomodule.min.js"></script>
  </body>
</html>
```

**Les CSS**

Afin d’inclure la totalité des composants et des styles du DS, il est nécessaire d’inclure la feuille de style ```dist/dsfr/dsfr.min.css```.

Il est aussi possible d’importer uniquement ce que l’on souhaite utiliser. En effet, pour ajouter un composant seul il suffit d’importer son CSS ainsi que celui de chacune des dépendances de ce composant. Ces dépendances sont listés dans le ```README.md``` de chaque package.



**Le Javascript**

L’ensemble du code javascript nécessaire au bon fonctionnement du DS se trouve dans deux fichiers ```dist/dsfr/dsfr.module.min.js``` et ```dist/dsfr/dsfr.nomodule.min.js```.

De la même façon que le CSS il est possible d’importer uniquement le JS des composants utilisés (et leurs dépendances).


Le fichier dsfr.module.min.js utilise les modules javascript natifs - sa balise script d’appel doit avoir l’attribut **type=”module”**.
Le fichier dsfr.nomodule.min.js est utilisé par les anciens navigateurs ne supportant pas les modules javascript - sa balise script doit contenir l’attribut **nomodule**.
Il est **impératif** d’appeler les **deux fichiers** javascript afin que le code s’exécute correctement sur l’ensemble des navigateurs supportés :

```html
    <script type="module" src="dsfr/dsfr.module.min.js"></script>
    <script type="text/javascript" nomodule src="dsfr/dsfr.nomodule.min.js"></script>
  </body>
</html>
```

### Favicon
[La documentation des favicons](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/577930274) détaille la façon de les implémenter dans vos pages.


## Fonctionnement

### BEM
Le **DSFR** utilise la méthodologie [**BEM**]([https://css-tricks.com/bem-101/]([http://getbem.com/naming/](http://getbem.com/naming/))) (Block - Element - Modifier) comme convention de nommage des classes CSS. Elle permet aux développeurs une meilleure compréhension de la relation entre HTML et CSS dans un projet donné.

Selon cette méthodologie, un block représente le plus haut niveau d'abstraction d'un nouveau composant, par exemple `.parent`.
Des éléments (ou enfants), peuvent être placés à l'intérieur de ces blocks, et sont désignés par deux underscore précédés du nom du block : `.parent__element`.
Les modifiers quant à eux, servent à manipuler les blocs, de manière à les styliser de manière indépendante en s'assurant de ne pas induire de changement à des blocks sans aucun rapport avec celui-ci. Ils sont notés à l'aide de deux tirets précédés du nom du block comme suit : `.parent--modifier`.

### Utilisation
Le **DSFR** est constitué de différents composants, que vous pouvez utiliser indépendamment au sein de votre projet.
Une documentation spécifique est prévue pour chaque composant, précisant ses principes d’utilisation, ainsi que les snippets de code HTML à utiliser pour votre projet.

🙌 Vous êtes maintenant prêt(e) à utiliser le **DSFR**.

## Contribution
Le processus de contribution est détaillé sur la [page CONTRIBUTING.md](CONTRIBUTING.md).

## Documentation

[Documentation développeurs](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019574/D+veloppeurs)
