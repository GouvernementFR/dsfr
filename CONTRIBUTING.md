
# Contributing
## Installation
### Installation locale
Le Design System est construit sous NodeJS, et utilise principalement Yarn et Webpack. Afin de l'installer de manière locale, il suffit de cloner ce repository et d'installer les dépendances NPM avec la commande `yarn`.  Pour lancer le serveur local et travailler sur le Design System, il est ensuite nécessaire de sélectionner le package sur lequel travailler, et lancer la commande `yarn start` :

```
cd packages/buttons
yarn start
```

### Packages

Le Design System est un monorepo proposant différents composants, listés dans le dossier `packages`. Certains de ces packages sont dépendants les uns des autres. Chacun de ces packages possède donc son propre fichier `package.json`, listant l'ensemble de ses dépendances à d'autres composants du Design System. Afin d'ajouter une dépendance à un package, il est nécessaire d'utiliser la commande `lerna add`. Ainsi, pour ajouter par exemple le package `core` en tant que dépendance du package `buttons`, il faut utiliser la commande suivante :

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
Le dossier **tests** comprend les fichiers .ejs permettant la génération des pages de test.

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

### EJS

### Git

Nous utilisons des [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) afin d'automatiser la génération automatique de Changelog au sein des différents packages du design system via [Lerna.js](https://lerna.js.org/), ainsi que des numéros de version des différents packages via le schéma [SemVer](https://semver.org/#summary) (Semantic Versionning).
Les commits doivent donc s'écrire sous la forme suivante :

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

La Changelog de chaque package sera donc mis à jour automatiquement en fonction du `type` de commit :
* **fix**: Un commit de type `fix` permet de patcher un bug ([\[PATCH\]](https://semver.org/#summary))
* **feat**: Un commit de type `feat` permet d'introduire une nouvelle fonctionnalité ([\[MINOR\]](https://semver.org/#summary))
* **BREAKING CHANGE**: Un commit avec un footer `BREAKING CHANGE:` introduit un changement important dans le code ([\[MAJOR\]](https://semver.org/#summary))
* D'autres types que `feat` et `fix` peuvent être utilisés, nous utilisons [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional), qui recommande l'utilisation des principaux types suivants : `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`

Lors d'une release, Lerna va automatiquement créer un commit de type `chore(packages): release` avec comme description l'ensemble des packages qui ont été créés mis à jour, avec leurs bons numéros de version

#### Exemples
Commit simple :

```
docs: add sassdoc info
```

Commit avec `scope`, description et `BREAKING CHANGE` footer
```
fix(core): change mixin name my-mixin to my-new-mixin

BREAKING CHANGE: new name for the mixin my-mixin
```

#### Tests automatiques

Un hook de pre-commit est utilisé pour lancer les tests automatisés avant de valider un commit. Il permet de s'assurer que le code ajouté respecte bien l'ensemble des tests. Pour passer la vérification de ces tests (Lors par exemple de modifications uniquement sur le process de build), il est possible de passer un paramètre --no-verify lors du commit. Exemple :

```
git commit -m "build: add webpack" --no-verify
```

## Autres commandes
### Sassdoc
Des commentaires spéciaux sont utilisés sur l'ensemble des fichier `scss`, afin de permettre la génération d'une [Sassdoc](http://sassdoc.com/) automatiquement, documentant l'ensemble des `mixins` et `functions` utilisés sur le Design System :

```
yarn run styleguide
```
Cette commande permet la génération de la doc dans le dossier `sassdoc`, à la racine du projet.

### Tests
Afin de s'assurer de la qualité du code, nous utilisons des tests automatisés qu'il est nécessaire d'exécuter régulièrement pour vérifier que le code du Design System reste valide et cohérent.

#### Sass
Afin de tester les différentes `functions` et `mixins`, nous utilisons jest et sass-true, afin d'effectuer une batterie de tests, présents dans un fichier `tests/_sass-tests.scss` au sein de certains packages.

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
