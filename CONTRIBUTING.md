# Contribuer au Système de Design de l'État <!-- omit in toc -->

Avant de commencer à utiliser le Système de Design de l'État (ci-après, **DSFR**) , veillez à prendre connaissance
des [conditions générales d'utilisations](doc/legal/cgu.md).
Si vous souhaitez contribuer au DSFR, veuillez prendre connaissance des documents relatifs à la [cession des droits d'auteur](doc/legal/cession.md) et du [certificat garantissant l'originalité](doc/legal/cgod.md) de votre contribution.

- [Installation](#installation)
  - [Installation locale](#installation-locale)
  - [Packages](#packages)
- [Utilisation](#utilisation)
  - [Sass](#sass)
  - [Javascript](#javascript)
  - [EJS](#ejs)
  - [Git](#git)
    - [Branches](#branches)
    - [Commits](#commits)
    - [Signature des commits](#signature-des-commits)
    - [Proposer une pull request](#proposer-une-pull-request)
- [Compilation](#compilation)
- [Autres commandes](#autres-commandes)
  - [Icônes](#icônes)
  - [Sassdoc](#sassdoc)
  - [Tests](#tests)
    - [tests Sass](#tests-sass)
    - [tests Accessibilité](#tests-accessibilité)
    - [Lint](#lint)

## Installation
### Installation locale
Le **DSFR** est basé sur une architecture [NodeJS](https://nodejs.org/), il est donc nécessaire d’installer une version récente de nodeJs. Dans le terminal nous utiliserons les commandes de **npm** ou **yarn** pour lancer les scripts.

Le dépôt est disponible à cette adresse: https://github.com/GouvernementFR/dsfr

Afin de pouvoir commencer à développer et contribuer au DSFR, assurez-vous tout d'abord de faire un fork du projet depuis votre compte github (https://help.github.com/articles/fork-a-repo/)

Il suffit ensuite de cloner votre fork, en téléchargeant les sources depuis le bouton “clone” de github, ou via un terminal avec commande :
```
git clone https://github.com/VOTRE_NOM_UTILISATEUR_GITHUB/dsfr
```

La branche **dev** est la principale branche de travail - la branche main correspondant aux versions de productions livrées aux utilisateurs. Il est donc nécessaire de créer de nouvelles branches de travail pour l'ajout et la modification de packages depuis la branche **dev**. (Voir la section [Utilisation > Git](#git), pour le fonctionnement détaillé).

Une fois le projet récupéré, il est nécessaire d'installer les dépendances (node_modules) avec :

```
yarn
```
OU

```
npm i
```
Puis pour compiler les css/js et générer les pages d’exemples, utilisez :

```
yarn release
```
OU

```
npm run release
```
Enfin, il est nécessaire de lancez un serveur local pour visualiser les pages d’exemples :

```
yarn serve
```
OU

```
npm run serve
```
Un serveur local sera alors lancé sur l'adresse localhost:8080. Accéder à http://localhost:8080/example/ pour voir la liste des exemples.

### Packages

Le DSFR est un monorepo proposant différents composants, listés dans le dossier `src/component`.

Un composant doit avoir une arborescence de type :

```
/
└── example/
└── style/
└── template/
    ├── ejs/
└── index.scss
└── main.scss
└── legacy.scss
└── .package.yml
```

Le dossier **example** comprend les fichiers ejs d’exemple (ils utilisent les templates du composant en passant des valeurs d’exemple en paramètre).
Le dossier **style** contient les fichiers .scss permettant la génération du css du composant.
Le dossier **template** contient les templates des composants (la mise en forme html).

Certains de ces packages sont dépendants les uns des autres. Chacun de ces packages possède donc un fichier **package.yml**, listant l'ensemble de ses dépendances à d'autres composants du DSFR.

Celui-ci gère les imports et le wrapper des examples html générés ainsi que l'implémentation des readme.md. Il est structuré de cette façon :

```
id: id du package, en anglais, unique, au singulier et composé d'un seul mot (ex: button)
title: nom du composant, en français (ex: Bouton)
description: description insérée dans le readme
doc: lien vers la documentation
wrapper: conteneur dans lequel on insert l'example. valeurs possibles : [container, col-8]
style: liste des id des packages dont dépend le css
  - core
script: liste des id des packages dont le js dépend
  - core
follow: liste des id des packages devant être initialisé avant le composant, mais sans dépendance directe. les sous objets style et script permettent de définir si c'est au niveau du css ou du javascript.
  style:
    - links
example: liste des id des packages nécessaire à la page d'exemple. les sous objets style et script permettent de définir si c'est au niveau du css ou du javascript.
  style:
    - header
```
## Utilisation
### Sass
Le DSFR utilise Sass pour la génération automatique des styles liés à chaque composant. Chacun d'entre eux possède une structure identique à ce niveau, par exemple le composant `button` :

```
/src/component/button
└── style
    ├── _legacy.scss
    ├── _module.scss
    ├── _scheme.scss
    ├── _setting.scss
    ├── _tool.scss
    └── module/
        └── _buttons-group.scss
└── index.scss
└── legacy.scss
└── main.scss
```

Les fichiers à la racine du composant importent les éléments nécessaires depuis le dossier style. Ceux-ci étant des points d'entrée principaux, ils n'ont pas d'underscore et ne contiennent que des `@import`, pas de déclaration.

 - index.scss : Fichier permettant de donner accès aux mixins, fonctions et settings du composant. Les fichiers importés ne continnent pas de déclaration directe et par conséquent il ne produit pas de code. Il importe également les index des dépendances.
 - main.scss : Fichier principal du composant servant d'entrée, il produit l'essentiel du code du composant. Il importe le fichier index ainsi que des fichiers modules du composant
 - legacy.scss : Permet de générer un fichier séparé pour le support navigateur

Dans le dossier style, on retrouve les fichiers suivants lorsqu'ils s'avèrent pertinents :
 - _module.scss : Comprend l'ensemble des styles du module
 - _scheme.scss : doit contenir tous les styles liés aux couleurs, afin de gérer la thématisation.
 - _legacy.scss : Contient tous les styles uniquement lié au support des anciens navigateurs
 - _setting.scss : Contient les variables sass utilisées par le composant
 - _function.scss : Contient les `functions` pouvant être utilisés par le composant
 - _tool.scss : Contient les `mixins` pouvant être utilisées par le composant

Afin de limiter la longeur des fichiers de code (maximum une centaine de ligne), ces fichiers peuvent être redécomposer en sous fichiers qui prendront place dans des sous-dossier du même nom.


### Javascript
Certains packages font utilisation de javascript, afin d'apporter une couche interactive à ceux-ci. C'est le cas par exemple du package navigation, où le javascript est utilisé pour déplier les sous-menus. La couche javascript est structurée comme ceci, par exemple pour le composant `navigation` :

```
/src/component/navigation
└── script
    └── navigation/
        ├── navigation-item.js
        ├── navigation.js
        ...
└── api.js
└── index.js
└── main.js
```


`api.js` : importe depuis core l'objet global qui contient les classes, variables et instances du DSFR (Fichier identique dans chaque package avec du js). C'est l'objet qui sera accessible à l'execution dans `window.dsfr`

`index.js` : Ajoute à l'objet global `api` des définitions de classes et variables spécifiques au composant.

`main.js` : importe l'index et permet l'initialisation du composant.

Un dossier `script` qui contient un dossier par fonctionalité js, ici `navigation` puis :

`navigation.js` (ou nom-classe.js) contient le code de la fonctionnalité js, structurée en classes instanciables (es6) .

Lors du `yarn release`, le javascript est compilé en version "module" (es6) et "nomodule" (es5), ainsi qu'en version .min et .map.
En mode développement, `yarn build` permet de regénérer uniquement la version .module.js (es6 non minifié)

### EJS
Nous utilisons au sein du DSFR, le langage de template EJS ([documentation officielle](https://ejs.co/#docs)), permettant la génération des pages d'exemples au format HTML, ainsi que les snippets de code de manière automatisée.

Les fichiers ejs sont séparés dans 2 dossiers, par exemple pour le package `callout` :
```
/src/component/callouts
└── example
    ├── index.ejs
    └── samples/
        └── callout-default.ejs
└── template
    └── ejs
        └── callout.ejs
```

Dans le dossier `example`,
`ìndex.ejs` est la page d'exemple publiée, elle affiche les différents exemples grâce à la fonction `sample()` (qui inclut l'exemple et le snippet de code)
Le dossier `samples` contient les différents types d'examples (inclusion des templates avec des données d'exemples)

Dans le dossier `templates`, on insère ici les templates dans un sous-dossier nommé en fonction du système de templating utilisé (`ejs` pour l'instant). Ces templates sont paramétrables pour y injecter des données. Chaque fichier possède une documentation sommaire détaillant ces paramètres.

Pour accèder aux fonctions du core (comme `includeClasses()` et `includeAttr()`), chaque template inclut l'`index.ejs` de core au début du fichier : ```<% eval(include('../../../core/index.ejs')); %>```

La commande `yarn release` permet de générer toutes les page d'exemple.
Plus spécifiquement avec la commande `yarn build`, le paramètre `-h` permet de reconstruire uniquement l'html : `yarn build -h [-p idPackage]`, avec `-p` pour préciser le(s) package(s).

### Git

#### Branches
Afin de travailler sur un nouveau package, ou un correctif d'un package existant, il est nécessaire de créer une nouvelle branche à partir de la branche `dev`.
```
git checkout -b prefixe/ma-branche dev
```

##### Nommage des branches <!-- omit in toc -->
Afin d'organiser et d'identifier rapidement la nature du contenu des branches, il est nécessaire de prefixer les branches :
feature/nom-de-la-branche pour les nouvelles fonctionnalités ou nouveaux composants.
fix/nom-de-la-branche pour les correctifs apportés sur des fonctionnalités ou composants existants.


#### Commits
Nous utilisons des [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) qui doivent donc s'écrire sous la forme suivante :

```
<type>[optional scope]: <description en français>

[optional body]

[optional footer(s)]
```

Les valeurs possibles pour le `type` de commit sont :
* **fix**: Un commit de type `fix` permet de patcher un bug ([[PATCH]](https://semver.org/#summary))
* **feat**: Un commit de type `feat` permet d'introduire une nouvelle fonctionnalité ([[MINOR]](https://semver.org/#summary))
* D'autres types que `feat` et `fix` peuvent être utilisés, nous utilisons [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional), qui recommande l'utilisation des principaux types suivants : `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`

* **BREAKING CHANGE**: Un commit avec un footer `BREAKING CHANGE:` introduit un changement important dans le code ([[MAJOR]](https://semver.org/#summary))

Les messages de commits sont écrits en français (exeption faite des mots réservés par conventional commit, ainsi que les termes techniques).

Exemple de commit simple :

```
feat: ajout du composant Alerte
```

Exemple de commit avec `scope`  le nom du composant ou de la f, description et `BREAKING CHANGE` footer
```
fix(core): maj mixin: ancien-nom devient nouveau-nom

BREAKING CHANGE: nouveau nom pour la mixin ....
```


#### Signature des commits

Afin de garantir l'originalité des contributions, nous demandons aux contributeurs de signer leurs commits et/ou de nous faire parvenir le [certificat de garantie de l'origine du développeur](doc/legal/cgod.md) signé.

Pour signer un commit :

```
git commit --signoff (ou git commit -s)
```



#### Proposer une pull request


Important

**Avant de proposer une pull request**, assurez vous que vous respectez la [garantie d’origine de vos développements](https://github.com/GouvernementFR/dsfr/blob/main/doc/legal/cgod.md), et pour les personnes **n'étant pas des agents de l’État,** que vous avez pris connaissance des documents relatifs à la [cession des droits d’auteur](doc/legal/cession.md), **document à nous transmettre signé**.

**Toute ‘pull request’ ne respectant pas ces pré-requis sera systématiquement rejetée.**

Pour contribuer sur le git DSFR, il convient d’utiliser une “pull-request” (PR).
Lorsque vous estimez que votre développement est terminé et qu'il peut-être révisé par l'équipe DSFR, vos devez créer une pull request depuis github (https://github.com/GouvernementFR/dsfr/pulls ) ou github cli (gh).
La pull-request suit les même règles de nommage décrites précédemment (branches, commits), à savoir le [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
Une description détaillant le problème à résoudre, la façon dont la contribution résout le problème et toute autre information utile à la revue de code est fortement conseillée!

La pull request doit être faite depuis la branche de votre fork vers la branche **dev** du dépôt officiel


## Compilation
La compilation des sources permet de créer un dossier `dist`, `exemple` et `.config` à la racine du projet. Le dossier `dist` contient les fichiers CSS et JS compilés, ainsi que les favicons et l'ensemble des fonts utilisées au sein du DSFR.

Le dossier `.config` contient les variables générales JS et SCSS ainsi que la configuration nécessaire au build. Plus particulièrement le fichier `config.json` répertorie toute l’arborescence de src, les dépendances et leur ordre qu’il récupère depuis les fichiers `package.yml` de chaque package et `folder.yml` pour les dossier (src, component, page, pattern)

Le dossier `example` contient les exemples HTML générés depuis les samples ejs. L'ordre des imports css et js est défini par l'ordre des dépendances dans le `package.yml`.

La commande générale pour lancer la génération des fichiers dist, des exemples, ainsi que les tests est :
```
yarn release
```


En mode développement, il est possible d'utiliser la commande :
```
yarn build
```
Cette commande permet de générer uniquement les fichiers css/js/html. Cette commande est plus rapide puisqu'elle n'éxécute pas les test, et ne compile pas les fichier .map, .md, .min.css, .nomodule.js...
De plus, grâce au paramètre `-p` il est possible de spécifier uniquement les packages que l'on souhaite recompiler.

Pour voir les différents paramètres disponibles : `yarn build --help`

## Autres commandes

### Icônes
La gestion des icônes se fait à l'aide d'une webfont, chargée directement via CSS en base64. Celle-ci est générée automatiquement à partir des fichiers `.svg` se trouvant dans le dossier `src/core/icon/svg/`. Il est donc possible d'ajouter des icônes, en ajoutant des fichiers `.svg` à ce dossier, et en relançant le build :

```
yarn build --clean
```

### Sassdoc
Des commentaires spéciaux sont utilisés sur l'ensemble des fichier `scss`, afin de permettre la génération d'une [Sassdoc](http://sassdoc.com/) automatiquement, documentant l'ensemble des `mixins` et `functions` utilisés sur le DSFR :

```
yarn styleguide
```
Cette commande permet la génération de la doc dans le dossier `sassdoc`, à la racine du projet.

### Tests
Afin de s'assurer de la qualité du code, nous utilisons des tests automatisés qu'il est nécessaire d'exécuter régulièrement pour vérifier que le code du DSFR reste valide et cohérent, notamment avant d'effectuer des pull requests sur le repository de production, et avant publication sur NPM.

Ces tests sont éxecutés lors de la commande : `yarn release`
Ou plus spécifiquement avec :

```
yarn build --test
```
Qui peut être combiner avec `-p nomPackage` pour spécifier un ou des package(s).

Pour voir les différents paramètres disponibles : `yarn build --help`

#### tests Sass
Afin de tester les différentes `functions` et `mixins`, nous utilisons jest et sass-true, afin d'effectuer une batterie de tests, présents dans un fichier `tests/_sass-tests.scss` au sein de certains packages.

Ces tests permettent de vérifier que le code renvoyé par ces derniers est bien conforme. (Par exemple, vérifier que le mixin de line-height renvoie bien la bonne valeur).
Ces tests sont effectués lors du yarn release, ou plus spécifiquement avec :

```
yarn build --test
```

#### tests Accessibilité
Pour tester de manière automatisée l'accessibilité des composants du DSFR, nous utilisons [Pa11y](https://pa11y.org/) sur les pages de tests des différents packages.
Ces tests sont effectués lors du yarn release, ou plus spécifiquement avec :

```
yarn build --test
```

Afin d'exclure un élément à tester au niveau des pages de test, il est possible de lui attribuer une class spécifique `.is-pa11y-hidden`
Les tests se jouent automatiquement sur chaque page de test de package, en mode normal puis en Darkmode

#### Lint
Pour vérifier de manière automatisée les erreurs de syntax, de mise en forme du code, ou de non respect des bonne pratiques, nous utilisons **esLint** lors du `yarn release` ou plus spécifiquement avec :

```
yarn build --test
```
La configuration est présente dans le fichier `.eslintrc.json`. Elle reprend en grande partie la configuration standard de esLint

