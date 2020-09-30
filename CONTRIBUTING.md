# Contributing
## Installation
### Installation locale
Le Design System de l'Etat est basé sur une architecture NodeJS, et utilise principalement Yarn et Webpack. Afin de l'installer de manière locale, il suffit de cloner ce repository et d'installer les dépendances NPM avec la commande `yarn`.  Pour lancer le serveur local et travailler sur le Design System, il est ensuite nécessaire de sélectionner le package sur lequel travailler, et lancer la commande `yarn start` :

```
cd packages/buttons
yarn start
```

### Packages

Le Design System est un monorepo proposant différents composants, listés dans le dossier `packages`. Certains de ces packages sont dépendants les uns des autres. Chacun de ces packages possède donc son propre fichier `package.json`, listant l'ensemble de ses dépendances à d'autres composants du Design System.

Pour faire cohabiter l'ensemble des packages, nous utilisons l'outil [Lerna](https://github.com/lerna/lerna), permettant d'organiser notre monorepo sous forme de plusieurs packages interdépendants.

Afin d'ajouter une dépendance à un package, il est nécessaire d'utiliser la commande `lerna add`. Ainsi, pour ajouter par exemple le package `core` en tant que dépendance du package `buttons`, il faut utiliser la commande suivante :

```
lerna add @frds/core --scope=@frds/buttons
```

Un composant doit avoir une arborescence de type :
```
/
└── src
    ├── scripts
    ├── styles
└── tests
    ├── samples
    ├── scripts
    ├── templates
└── _main.scss
└── package.json
└── README.md
```

Le dossier **src** comprend les fichiers de style .scss, ainsi que des fichiers .js au besoin.
Le dossier **tests** comprend les fichiers .ejs permettant la génération des pages de test au format HTML.

## Utilisation
### Sass
Le Design System utilise Sass pour la génération automatique des styles liés à chaque composant. Chacun d'entre eux possède une structure identique à ce niveau, par exemple le composant `core` :

```
/packages/core
└── src
    ├── styles
    │   ├── _generic.scss
    │   ├── _module.scss
    │   ├── _settings.scss
    │   ├── _tools.scss
└── _main.scss
```

Il peut donc y avoir plusieurs fichier .scss, mais seuls _main.scss à la racine du composant, et _module.scss sont obligatoires, et chacun à son propre rôle :

 - _main.scss : Fichier principal du composant servant d'entrée, et composé uniquement d'`@import` des autres fichiers .scss du composant *(obligatoire)*
 - _generic.scss : Contient un reset des principales balise, ce fichier n'est présent que pour le composant `core`. (optionnel)
 - _module.scss : Comprend l'ensemble des styles du module *(obligatoire)*
 - _settings.scss : Contient les variables sass utilisées par le composant, par exemple l'ensemble des tailles de polices pour le composant `core` *(optionnel)*
 - _tools.scss : Contient les `functions` et `mixins` pouvant être utilisés par le composant, par exemple la gestion des espacements *(optionnel)*

### Javascript
Certains packages font utilisation de javascript, afin d'apporter une couche interactive à ceux-ci. C'est le cas par exemple du package nav, où le javascript est utilisé pour déplier les sous-menus.

**A compléter par @Bertrand**

### EJS
Nous utilisons au sein du Design System, le langage de template EJS, permettant la génération des pages de tests au format HTML, ainsi que les snippets de code de manière automatisée.

**A compléter par @Bertrand**

### Git

#### Branches
Afin de travailler sur un nouveau package, ou un correctif d'un package existant, il est nécessaire de créer une nouvelle branche à partir de la branche `dev`, sous la forme `feature/mon-nouveau-package`, ou `fix/correction-package` par exemple.

La branche nouvelle créée peut ensuite être mergée sur la branche `test`, afin d'être validée par l'équipe sur l'url de test Netlify. Les retours s'effectueront directement sur la nouvelle branche, puis rebasculée sur `test` autant de fois que nécessaire.

Une fois validée, il faut faire un rebase de la branche `dev` :
```
git rebase dev
```

Puis merger la nouvelle branche dans la branche dev avec un message de commit détaillé :

```
git checkout dev
git merge --squash featurebranch > mettre un message de commit final
```

#### Commits
Nous utilisons des [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) qui doivent donc s'écrire sous la forme suivante :

```
<type>[optional scope]: <description en français>

[optional body]

[optional footer(s)]
```

La Changelog de chaque package sera donc mis à jour automatiquement en fonction du `type` de commit :
* **fix**: Un commit de type `fix` permet de patcher un bug ([\[PATCH\]](https://semver.org/#summary))
* **feat**: Un commit de type `feat` permet d'introduire une nouvelle fonctionnalité ([\[MINOR\]](https://semver.org/#summary))
* **BREAKING CHANGE**: Un commit avec un footer `BREAKING CHANGE:` introduit un changement important dans le code ([\[MAJOR\]](https://semver.org/#summary))
* D'autres types que `feat` et `fix` peuvent être utilisés, nous utilisons [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional), qui recommande l'utilisation des principaux types suivants : `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`

Exemple de commit simple :

```
docs: add sassdoc info
```

Exemple de commit avec `scope`, description et `BREAKING CHANGE` footer
```
fix(core): change mixin name my-mixin to my-new-mixin

BREAKING CHANGE: new name for the mixin my-mixin
```

***Note*** : Un hook de pre-commit est utilisé pour vérifier la validité du conventional commit. Afin d'éviter cette validation,  il est possible de passer un paramètre --no-verify lors du commit

```
git commit -m "build: add webpack" --no-verify
```

#### Pull requests

Une fois la branche de `dev` validée, il est désormais possible de faire un pull request sur le repository de production, afin de pouvoir valider définitivement ces nouveaux changements.

## Compilation
La compilation des sources permet de créer un dossier `dist` à la racine du projet, comprenant les fichiers CSS et JS compilés, ainsi que l'ensemble des fonts utilisées au sein du Design System.

La génération de ces fichiers se fait via la commande

```
yarn build
```

## Autres commandes
### Sassdoc
Des commentaires spéciaux sont utilisés sur l'ensemble des fichier `scss`, afin de permettre la génération d'une [Sassdoc](http://sassdoc.com/) automatiquement, documentant l'ensemble des `mixins` et `functions` utilisés sur le Design System :

```
yarn run styleguide
```
Cette commande permet la génération de la doc dans le dossier `sassdoc`, à la racine du projet.

### Tests
Afin de s'assurer de la qualité du code, nous utilisons des tests automatisés qu'il est nécessaire d'exécuter régulièrement pour vérifier que le code du Design System reste valide et cohérent, notamment avant d'effectuer des pull requests sur le repository de production, et avant publication sur NPM

#### Sass
Afin de tester les différentes `functions` et `mixins`, nous utilisons jest et sass-true, afin d'effectuer une batterie de tests, présents dans un fichier `tests/_sass-tests.scss` au sein de certains packages.

Ces tests permettent de vérifier que le code renvoyé par ces derniers est bien conforme. (Par exemple, vérifier que le mixin de line-height renvoie bien la bonne valeur

Pour vérifier l'ensemble de ces tests, il faut utiliser la commande suivante :

```
yarn run test:sass
```

#### Accessibilité
Pour tester de manière automatisée l'accessibilité des composants du Design System, nous utilisons [Pa11y](https://pa11y.org/) sur les pages de tests des différents packages :

```
yarn run test:pa11y
```

Afin d'exclure un élément de ces tests, il est possible de lui attribuer une class spécifique `.is-pa11y-hidden`

### Icônes
La gestion des icônes se fait à l'aide d'une webfont, chargée directement via CSS. Celle-ci est générée automatiquement à partir de fichiers `.svg` se trouvant dans le dossier `/icons` à la racine du Design System. Il est donc possible d'ajouter des icônes, en ajoutant des fichiers `.svg` à ce dossier, et en lançant la commande suivante :

```
yarn run icon-font
```
