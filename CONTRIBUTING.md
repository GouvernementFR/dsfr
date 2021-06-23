# Contribuer au Système de Design de l'État

Avant de commencer à utiliser le Système de Design de l'État (ci-après, **DSFR**) , veillez à prendre connaissance 
des [conditions générales d'utilisations](doc/legal/cgu.md).
Si vous souhaitez contribuer au DSFR, veuillez prendre connaissance des documents relatifs à la [cession des droits d'auteur](doc/legal/cession.md) et du [certificat garantissant l'originalité](doc/legal/cgod.md) de votre contribution.

## Installation
### Installation locale
Le DSFR est basé sur une architecture NodeJS, et utilise principalement Yarn. 

Afin de pouvoir commencer à développer et contribuer au DSFR, assurez-vous tout d'abord de faire un fork du projet depuis votre compte github (https://help.github.com/articles/fork-a-repo/)
 
Il suffit ensuite de cloner votre fork, en téléchargeant les sources depuis le bouton “clone” de github, ou via un terminal avec commande :
`git clone https://github.com/VOTRE_NOM_UTILISATEUR_GITHUB/dsfr-dev`


La branche `**dev**` est la principale branche de travail - la branche main correspondant aux versions de productions livrées aux utilisateurs. 
Il est donc necessaire de créer de nouvelles branches de travail pour l'ajout et la modification de packages depuis la branche **dev**. (Voir la section Utilisation > Git, pour le fontionnement détaillé).

Afin de télécharger les dépendances, compiler les css/js et générer le dossier public contenant toutes les pages d'examples, utilisez respectivement :
- `yarn` ou `npm i` 
- `yarn release` 


### Packages

Le DSFR est un monorepo proposant différents composants, listés dans le dossier `src`.

Un composant doit avoir une arborescence de type :
```
/
└── example/
└── styles/
└── templates/
    ├── ejs/
└── index.scss
└── main.scss
└── package.json
└── .package.yml
```

Le dossier **example** comprend les fichiers de templating ejs permettant de générer les examples html dans /public
Le dossier **styles** contient les fichiers .scss permettant la génération du css du composant.
Le dossier **templates** contient les templates des composants


Certains de ces packages sont dépendants les uns des autres. Chacun de ces packages possède donc son propre fichier `package.json`, listant l'ensemble de ses dépendances à d'autres composants du DSFR.

Afin d'ajouter une dépendance à un package, il est nécessaire de l'insérer aussi dans le fichier `.package.yml`.Celui-ci gère les imports et le wrapper des examples html générés ainsi que l'implémentation des readme.md. Il est stucturé de cette façon :
```
id: buttons (nom du package)
title: Boutons (nom du composant, en français)
description: description insérée dans le readme
doc: lien vers la documentation
wrapper: col-8 (le conteneur dans lequel on insert l'example)
styles: (liste des packages dont le css dépend)
  - core
scripts: (liste des packages dont le js dépend)
  - core
follow:   (pas de dépendance à link mais doit etre placé après link)
  styles:
    - links
example: (dépendances sur la page d'exemple uniquement)
  styles:
    - header
```
## Utilisation

Après avoir cloné le repository, Il faut ensuite installer les dépendances NPM avec la commande `yarn` ou `npm i`.
Il est nécessaire de lancer un serveur local pour visualiser les examples html.

Il existe pour cela de nombreux outils comme browser-sync :
```
npm i -g browser-sync
cd public/
browser-sync start --server --port 8080 --startPath example/
```

ou simplement en php
```
cd public/
php -S localhost:8080/example
```

Un serveur local sera alors lancé sur l'adresse `localhost:8080`, accèder à `http://localhost:8080/example/` pour voir la liste des exemples.

### Sass
Le DSFR utilise Sass pour la génération automatique des styles liés à chaque composant. Chacun d'entre eux possède une structure identique à ce niveau, par exemple le composant `buttons` :

```
/src/buttons
└── styles
    ├── _module.scss
    ├── _schemes.scss
    ├── _tools.scss
    ├── _settings.scss
    └── modules/
        └── _buttons-group.scss
└── index.scss
└── main.scss
```

Il peut donc y avoir plusieurs fichier .scss, mais seuls main.scss à la racine du composant, et _module.scss sont obligatoires, et chacun à son propre rôle :

 - main.scss : Fichier principal du composant servant d'entrée, et composé uniquement d'`@import`. Il importe le fichier index ainsi que des fichiers modules du composant *(obligatoire)*
 - index.scss : Fichier secondaire du composant, aussi composé d'`@imports`, importe uniquement les fichiers de settings et tools du composant ainsi que l'index.scss des composants dépendants. *(obligatoire)*
 - _module.scss : Comprend l'ensemble des styles du module *(obligatoire)*
 - _schemes.scss : doit contenir tous les styles liés aux couleurs, afin de gérer la thématisation. *(optionnel)*
 - _settings.scss : Contient les variables sass utilisées par le composant *(optionnel)*
 - _tools.scss : Contient les `functions` et `mixins` pouvant être utilisés par le composant, par exemple la gestion des token d'espacements *(optionnel)*
 - modules/_buttons-group.scss : Example de sous-composant permettant d'alléger _module.scss, qui importe ce fichier


### Javascript
Certains packages font utilisation de javascript, afin d'apporter une couche interactive à ceux-ci. C'est le cas par exemple du package navigation, où le javascript est utilisé pour déplier les sous-menus.
La couche javascript est structurée comme ceci, par exemple pour le composant `navigation` :

```
/src/navigation
└── scripts
    ├── module.js
    └── navigation/
        ├── constants.js
        └── navigation.js
└── api.js
└── index.js
└── main.js
```

`api.js` : importe depuis core l'objet global qui contient les classes, variables et instances du DSFR (Fichier identique dans chaque package avec du js)
`index.js` : Ajoute à l'objet global `api` des définitions de classes et variables spécifiques au composant
`main.js`: importe l'index et le module à la racine (Fichier identique dans chaque package avec du js). Permet l'initialisation du composant.
Un Dossier `scripts` qui contient :
- `module.js` : initialise les classes js (ici navigation)
- Un dossier par fonctionalité js, ici `navigation` contient :
  - `constants.js` pour stocker les variables globales
  - `navigation.js` (ou nom-classe.js) contient le code de la fonctionalité js, structuré en classes instantiables (es6).

Lors du `yarn release`, le javascript est compilé en version "module" (es6) et "nomodule" (es5), ainsi qu'en version .min et .map
En mode développement, `yarn build` permet de regénérer uniquement la version .module.js (es6 non minifié)

### EJS
Nous utilisons au sein du DSFR, le langage de template EJS, permettant la génération des pages d'exemples au format HTML, ainsi que les snippets de code de manière automatisée.

Les fichiers ejs sont séparés dans 2 dossiers, par exemple pour le package `callouts` :
```
/src/callouts
└── example
    ├── index.ejs
    └── samples/
        └── callout-default.ejs
└── templates
    └── ejs
        └── callout.ejs
```

Dans le dossier `example`,
`ìndex.ejs` est la page d'exemple publiée, elle affiche les différents exemples grâce à la fonction `sample()` (qui inclut l'exemple et le snippet de code)
Le dossier `samples` contient les différents examples (inclusion des templates avec des données d'exemples)

Dans le dossier `templates`, on insère ici les templates dans un sous-dossier nommé en fonction du système de templating utilisé (`ejs` pour l'instant). Ces templates sont paramétrables pour y injecter des données. Chaque fichier possède une documentation sommaire détaillant ces paramètres.

Pour accèder aux fonctions du core (comme `includeClasses()` et `includeAttr()`), chaque template inclut l'`index.ejs` de core au début du fichier : ```<% eval(include('../../../core/index.ejs')); %>```

Afin de générer tous les exemples HTML utilisez `yarn release`.
Ou, plus spécifiquement avec `yarn build`, le paramètre `-h` de yarn build permet de reconstruire uniquement l'html : `yarn build -h [-p nomPackage]`, avec `-p` pour préciser le(s) package(s).

### Git

#### Branches
Afin de travailler sur un nouveau package, ou un correctif d'un package existant, il est nécessaire de créer une nouvelle branche à partir de la branche `dev`. 
git checkout -b prefixe/ma-branche dev

##### Nommage des branches
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
* **fix**: Un commit de type `fix` permet de patcher un bug ([\[PATCH\]](https://semver.org/#summary))
* **feat**: Un commit de type `feat` permet d'introduire une nouvelle fonctionnalité ([\[MINOR\]](https://semver.org/#summary))
* D'autres types que `feat` et `fix` peuvent être utilisés, nous utilisons [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional), qui recommande l'utilisation des principaux types suivants : `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`

* **BREAKING CHANGE**: Un commit avec un footer `BREAKING CHANGE:` introduit un changement important dans le code ([\[MAJOR\]](https://semver.org/#summary))

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

***Note*** : Un hook de pre-commit est utilisé pour vérifier la validité du conventional commit. 
Afin d'éviter cette validation, il est possible de passer un paramètre --no-verify lors du commit

```
git commit -m "build: add webpack" --no-verify
```

#### Signature des commits

Afin de garantir l'originalité des contributions, nous demandons aux contributeurs de signer leurs commits et/ou de nous faire parvenir le [certificat de garantie de l'origine du développeur](doc/legal/cgod.md). 

Pour signer un commit : 

```
git commit --signoff (ou git commit -s)
```


#### Proposer une pull request

Pour contribuer sur le git DSFR, il convient d’utiliser une “pull-request” (PR). 
Lorsque vous estimez que votre développement est terminé et qu'il peut-être révisé par l'équipe DSFR, vos devez créer une pull request depuis github  (https://github.com/GouvernementFR/dsfr-dev/pulls) ou github cli (gh).
La pull-request suit les même règles de nommage décrites précédemment (branches, commits) 

## Compilation
La compilation des sources permet de créer un dossier `public` à la racine du projet, contenant les dossiers `dist`, `src`, et `example`.
Le dossier `dist` contient les fichiers CSS et JS compilés, ainsi que les favicons et l'ensemble des fonts utilisées au sein du DSFR.
Le dossier `src` est une quasi copie du src à la racine, si ce n'est qu'il contient les fichiers readme généré à la place du package.json et .package.yml
Le dossier `example` contient les examples html gérénéré depuis les samples ejs. L'ordre des imports css et js est défini par l'ordre des dépendances dans le `package.yml`

La commande générale qui lance la création du dossier `public`, la génération des fichiers dist, les tests, et les examples se fait via la commande :
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
La gestion des icônes se fait à l'aide d'une webfont, chargée directement via CSS. Celle-ci est générée automatiquement à partir de fichiers `.svg` se trouvant dans le dossier `/icons/svg/` à la racine du DSFR. Il est donc possible d'ajouter des icônes, en ajoutant des fichiers `.svg` à ce dossier, et en lançant la commande suivante :

```
yarn run icon-font
```

### Sassdoc
Des commentaires spéciaux sont utilisés sur l'ensemble des fichier `scss`, afin de permettre la génération d'une [Sassdoc](http://sassdoc.com/) automatiquement, documentant l'ensemble des `mixins` et `functions` utilisés sur le DSFR :

```
yarn run styleguide
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

