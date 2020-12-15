# Design System

## Table des matières
- [Installation](#installation)
- [Mise à jour](#mise-à-jour)
- [Fonctionnement](#fonctionnement)
- [Utilisation](#utilisation)
- [Contribuer](#contribution)

## Installation
L'installation du Design System de l'Etat (ci-après, le **DS**) peut se faire de deux manières différentes. En téléchargeant l'ensemble des fichiers nécessaires à son utilisation, ou en utilisant le gestionnaire de paquets **NPM**.

### Fichiers statiques
Il est possible de télécharger l'ensemble du Design System de l'Etat au format zip à [cette adresse](#). Le zip contient un ensemble de fichiers CSS et Javascript, ainsi que les différentes polices web utilisées, à savoir la Marianne et la Spectral.

### NPM
Le Design System de l'Etat est disponible sur **NPM** via un ensemble de packages qu'il est possible d'ajouter directement à votre projet.
Il est de ce fait nécessaire d'installer [NodeJS](https://nodejs.org/en/), et d'avoir un fichier `package.json` à la racine de votre projet. (Il est possible d'en créer un directement via la commande `npm init`).

Une fois en place, il suffit d'installer les packages du Design System de l'Etat dont vous avez besoin via la commande suivante, l'ensemble des packages nécessaires devant être séparés d'une virgule :

```
npm install @gouvfr/header @gouvfr/footer
```

Il est également possible d'installer les composants avec [Yarn](https://yarnpkg.com/) :

```
yarn add @gouvfr/design-system
```

Il est à noter que pour chaque package installé, l'ensemble des dépendances de celui-ci seront également installées. De ce fait, l'installation du package `inputs` par exemple téléchargera également automatiquement le package `forms`.

Un package `all` est également disponibe afin de récupérer sur NPM l'ensemble du **DS** en une seule fois :

```
npm install @gouvfr/all
// ou avec Yarn :
yarn add @gouvfr/all
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

En cas d'installation via NPM, il est important de récupérer les polices web dans le dossier node_modules/@gouvfr/core/fonts, ou de les [télécharger directement ici](#).

Il est ensuite nécéssaire, via votre outil de build, de charger l'ensemble des fichiers css et js des packages à utiliser.

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

## Mise à jour
Afin de mettre à jour le Design System de l'Etat à après une montée en version de celui ci, il est nécessaire de récupérer la dernière version, que ce soit un .zip des fichiers statiques, ou en mettant à jour la version de NPM.

### Fichiers statiques
En cas d'installation simple via des fichiers statiques, il est possible de mettre à jour le **DS** en téléchargeant la nouvelle version au format .zip, et de simplement remplacer les fichiers CSS et JS de votre projet par les nouveaux fichiers mis à disposition.

### NPM

Afin de mettre à jour la version de package utilisée via NPM, il est nécessaire de récupérer la dernière version, à l'aide de la commande NPM suivante, en précisant chaque package présent dans votre fichier `package.json` :

```
npm install @gouvfr/header@latest @gouvfr/footer@latest
```

ou via Yarn, de mettre à jour automatiquement tous les packages du **DS** :
```
yarn upgrade -S @gouvfr --latest  
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

## Liste des composants

## Documentations Confluence
- [Accordion](packages/accordions/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/312082509)
- [All](packages/all/README.md)
- [Breadcrumb](packages/breadcrumb/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019278/Fil+d+Ariane+-+Breadcrumb)
- [Buttons](packages/buttons/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/217284660/Boutons+-+Buttons)
- [Callouts](packages/callouts/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222331196/Mise+en+avant+-+Call-out)
- [Cards](packages/cards/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222331445/Carte+-+Card)
- [Checkboxes](packages/checkboxes/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/217251933/Case+cocher+-+Checkbox)
- [Content](packages/content/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/153813475/M+dias+-+medias)
- [Footer](packages/footer/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222331413/Pied+de+page+-+Footer)
- [Grid](packages/grid/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222331372/Grille+et+points+de+rupture+-+Grid+and+breakpoints)
- [Header](packages/header/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222789846/En-t+te+-+Header)
- [Highlights](packages/highlights/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019199/Mise+en+exergue+-+Highlight)
- [Icons](packages/icons/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222331396/Ic+nes+-+Icons)
- [Inputs](packages/inputs/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/217088099/Champs+de+saisie+-+Text+input)
- [Links](packages/links/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/217284725/Liens+-+Links)
- [Medias](packages/medias/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/153813475/M+dias+-+medias)
- [Navigation](packages/navigation/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222789853/Navigation+principale+-+Main+navigation)
- [Pagination](packages/pagination/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223051980/Pagination+-+Pagination)
- [Radios](packages/radios/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/217088553/Boutons+radio+-+Radio+button)
- [Search](packages/search/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/217186376/Barre+de+recherche+-+Search+bar)
- [Selects](packages/selects/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019306/Liste+d+roulante+-+Select)
- [Skiplinks](packages/skiplinks/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222789880/Liens+d+vitement+-+Skip+links)
- [Table](packages/table/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/312016971)
- [Tags](packages/tags/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/310706305)
- [Tiles](packages/tiles/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222331438/Tuile+-+Tile)
- [Typography](packages/typography/README.md) - [Documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019527/Typographie+-+Typography)
