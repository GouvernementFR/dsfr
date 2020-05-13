# @frds/icons

## Dépendance
```shell
icons
└─ core
```

## Installation
Installation via NPM:
```
npm install @frds/icons
```
Via Yarn :
```
yarn add install @frds/icons
```

## Utilisation
Afin d'utilise le composant `icons`, il est nécessaire d'importer le composant ainsi que ses dépendances :
```scss
@import 'node_modules/@frds/core/main';
@import 'node_modules/@frds/icons/main';
```

### Général
Le composant `icons` permet d'ajouter des icônes à votre fichier HTML. Le **DS** utilise comme système d'icônes un sprite SVG. L'ensemble des icônes sont de ce fait regroupées dans un seul fichier `/icons/sprite.svg`.
Il est donc possible d'ajouter une icône à votre fichier HTML en utilisant une balise `svg` possédant la classe `.rf-icon`, et précisant l'identifiant de l'icône à utiliser, par exemple `#account-line`.

Il est possible de voir l'ensemble des icônes utilisables directement dans le dossier `src/assets/icons`. L'identifiant à utiliser correspond au nom du fichier sans le `.svg`, précédé du symbole `#`

Exemple :

```html
<svg class="rf-icon" aria-hidden="true" focusable="false">
	<use xlink:href="icons/sprite.svg#account-fill"></use>
</svg>
```

### Variantes
#### Taille
Il est possible de modifier la taille des icônes à l'aide de `modifiers` spécifiques.

Exemple :
```html
// Icône Extra Large
<svg class="rf-icon rf-icon--xl" aria-hidden="true" focusable="false">
	<use xlink:href="icons/sprite.svg#account-fill"></use>
</svg>

// Icône Large
<svg class="rf-icon rf-icon--lg" aria-hidden="true" focusable="false">
	<use xlink:href="icons/sprite.svg#account-fill"></use>
</svg>

// Icône Small
<svg class="rf-icon rf-icon--sm" aria-hidden="true" focusable="false">
	<use xlink:href="icons/sprite.svg#account-fill"></use>
</svg>

// Icône Extra Small
<svg class="rf-icon rf-icon--xs" aria-hidden="true" focusable="false">
	<use xlink:href="icons/sprite.svg#account-fill"></use>
</svg>
```

**Note** : *Utilisé avec le composant `buttons`, la taille des icônes est fixée en fonction des `modifiers` de taille appliqués aux boutons directement. Il est donc impossible d'afficher un bouton XS dans un bouton LG, par souci de cohérence graphique.*

## Documentation

Consulter [la documentation](#) sur les icônes
