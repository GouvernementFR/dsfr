---
boost: 0
sitemap:
  noindex: true
title: Code du Tableau
shortTitle: Code du Tableau
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Tableau.
shortDescription: Présentation du composant Tableau pour organiser et comparer des données.
keywords: tableau, table, tri, pagination, données, DSFR, accessibilité, lignes, colonnes, affichage structuré, composant, visualisation
cover: ../_asset/cover/cover.png
excerpt: Le composant Tableau permet d’organiser des données sous forme de lignes et colonnes, facilitant la lecture, la comparaison et la sélection d’informations. Il prend en charge le tri, la pagination et l’intégration de composants interactifs.
summary: Le tableau est conçu pour présenter des données de manière claire et structurée. Il prend en charge les fonctionnalités de tri, pagination, sélection de lignes et intégration de composants variés (boutons, liens, champs de saisie…). Il propose plusieurs états (par défaut, sélectionné) et tailles d’affichage (SM, MD, LG) selon le contexte. Bien que non personnalisable dans son ensemble, il permet de personnaliser les composants qu’il intègre. Son usage est recommandé pour des données complexes ou nombreuses, tout en restant attentif à la lisibilité sur tous les formats d’écran.
---

## Tableau

Le tableau permet de présenter une liste structurée de données textuelles et/ou numériques dans le but de simplifier l’analyse et la comparaison d’informations pour l’usager.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Tableau** permet de présenter des données tabulaires. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

- Un conteneur principal sous la balise `<div>` :
  - Doit avoir la classe `fr-table`.
- Un premier sous-conteneur sous la balise `<div>` :
  - Doit avoir la classe `fr-table__wrapper`.
- Un deuxième sous-conteneur sous la balise `<div>` :
  - Doit avoir la classe `fr-table__container`.
- Un troisième sous-conteneur sous la balise `<div>` :
  - Doit avoir la classe `fr-table__content`.
- Une zone de contenu pour le tableau :
  - Représentée par un élément `<table>`.
- Un titre, obligatoire, qui peut être positionné en haut (par défaut), en bas ou hors écran :
  - Représenté par un élément `<caption>`.
- Une ligne d’en-tête de colonne, obligatoire :
  - Représentée par un élément `<thead>`.
- Plusieurs ligne de corps, obligatoires :
  - Regroupées dans un ou plusieurs éléments `<tbody>`.
  - Représentées par un élément `<tr>`.
- Plusieurs cellules de contenu, obligatoires :
  - Représentées par un élément `<th>` ou `<td>`.

**Exemple de structure HTML**

:::fr-accordion[Déplier pour voir le code]{id=code-tableau}

```HTML
<div class="fr-table">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

:::

---

### CSS

#### Installation du CSS


Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Table      | Oui         |          |
| Checkbox   | Non         | Uniquement pour la version avec sélection de lignes |
| Button     | Non         | Uniquement pour les boutons de trie ou l'ajout d'actions dans le header ou footer du tableau |
| Select     | Non         | Uniquement pour la selection du nombre de ligne par page dans footer du tableau |
| Pagination | Non         | Uniquement pour ajouter une pagination dans le footer du tableau |
| Segmented  | Non         | Uniquement pour ajouter un contrôle segmenté dans le header du tableau |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/table/table.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/table/table.legacy.min.css" rel="stylesheet">
```

#### Comportement du tableau

Le tableau par défaut scrollable prend toujours 100% de la largeur de son conteneur et le contenu des cellules est affiché sur une seule ligne.

La largeur d’une colonne s’adapte à la largeur de la cellule dont le contenu est le plus long.

Nous mettons à disposition les variations multiline à travers l’utilisation des classes `fr-table--multiline` sur le composant ou  `fr-cell--multiline` au niveau des cellules (`<th>` ou `<td>`) pour permettre le retour à la ligne à l’intérieur des cellules. C'est alors le navigateur qui décidera de faire des passages à la ligne pour éviter au maximum le scroll.

Nous mettons aussi à disposition des classes `fr-col--xs` (et sm, md, lg) pour fixer la largeur minimale d'une colonne. Associées à la classe `fr-table--multiline` elles permettent de fixer la largeur des colonnes du tableau (hors césure de mots).

#### Variantes de tableau avec retour à la ligne automatique dans les cellules

Le tableau met à disposition des classes CSS pour permettre le retour à la ligne à l’intérieur des cellules :

- `fr-table--multiline` sur le composant `fr-table` applique le retour à la ligne sur toutes les cellules du tableau
- `fr-cell--multiline` au niveau des cellules (`<th>` ou `<td>`) applique le retour à la ligne sur la cellule

**Exemple de tableau avec retour à la ligne automatique dans les cellules**

```HTML
<div class="fr-table fr-table--multiline">
    <!-- Contenu de tableau avec retour à la ligne automatique dans les cellules -->
</div>
```

#### Variantes de tableau avec largeur de colonnes minimales

Vous avez à votre disposition des classes CSS pour permettre de fixer la largeur minimale des colonnes :

- `fr-col--xs` pour fixer une colonne minimale à 4rem (64px),
- `fr-col--sm` pour fixer une colonne minimale à 5rem (80px),
- `fr-col--md` pour fixer une colonne minimale à 12.5rem (200px),
- `fr-col--lg` pour fixer une colonne minimale à 25 rem (400px).

Ces classes doivent être utilisées au niveau des en-têtes de colonne `<th>`.

Combinées avec la classe `fr-table--multiline` au niveau du composant elles permettent de fixer la largeur des colonnes du tableau (hors césure de mots).

**Exemple de tableau avec retour à la ligne automatique dans les cellules et largeur de colonnes minimales**

:::fr-accordion[Déplier pour voir le code]{id=code-tableau-colonne-largeur}

```HTML
<div class="fr-table fr-table--multiline">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th class="fr-col--xs">
                                xs
                            </th>
                            <th class="fr-col--sm">
                                sm
                            </th>
                            <th class="fr-col--md">
                                md
                            </th>
                            <th class="fr-col--lg">
                                lg
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Lorem
                            </td>
                            <td>
                                Lorem [...
                            </td>
                            <td>
                                Lorem [...] eli
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem
                            </td>
                            <td>
                                Lorem [...
                            </td>
                            <td>
                                Lorem [...] eli
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

:::

#### Variantes de densité

Le tableau peut être de différentes densités. Si la taille des composants intégrés dans les cellules ne change pas, cela vous permet de varier la densité d’affichage de votre tableau en fonction de son contenu.
Il existe 3 niveaux de densité pour les cellules du tableau :

- `fr-table--sm` : densité SM,
- Par défaut en densité MD,
- `fr-table--lg` : densité LG.

**Exemple de tableau de différentes densité**

```HTML
<div class="fr-table fr-table--sm">
    <!-- Contenu de tableau SM -->
</div>
<div class="fr-table">
    <!-- Contenu de tableau MD -->
</div>
<div class="fr-table fr-table--lg">
    <!-- Contenu de tableau LG -->
</div>
```

#### Variante de tableau avec séparateurs verticaux

Vous avez la possibilité d'afficher des séparateurs de colonnes verticaux (obligatoires en cas de tableaux complexes) grâce à l'ajout de la classe `fr-table--bordered`.

**Exemple de tableau avec séparateurs verticaux**

```HTML
<div class="fr-table fr-table--bordered">
    <!-- Contenu de tableau -->
</div>
```

#### Variante de tableau non scrollable

Le conteneur est responsive par défaut mais vous avez la possibilité de rendre le tableau non scrollable grâce à la classe `fr-table--no-scroll`.

**Exemple de tableau non scrollable**

```HTML
<div class="fr-table fr-table--no-scroll">
    <!-- Contenu de tableau -->
</div>
```

#### Variantes de placement du titre

Le titre (`<caption>`) du tableau est obligatoire mais peut être positionné à différents emplacements :

- Par défaut en haut.
- `fr-table--caption-bottom` : en bas.
- `fr-table--no-caption` : hors écran.

**Exemple de tableau avec titre en bas**

```HTML
<div class="fr-table">
    <!-- Contenu de tableau avec titre en haut -->
</div>
<div class="fr-table fr-table--caption-bottom">
    <!-- Contenu de tableau avec titre en bas -->
</div>
<div class="fr-table fr-table--no-caption">
    <!-- Contenu de tableau avec titre hors écran -->
</div>
```

#### Variantes de tableau avec lignes sélectionnables

Le tableau peut contenir des en-têtes de ligne contenant des cases à cocher permettant de selectionner la ligne entière :

- L'en-tête du tableau `<thead>` doit contenir :
  - dans sa première colonne une en-tête de ligne `<th>` avec la classe `fr-cell--fixed` contenant :
    - un texte hors écran avec la classe `fr-sr-only` annonçant l'action de "Sélectionner".
- Chaque ligne du corps du tableau `<tr>` doit avoir un attribut `aria-selected` et contenir :
  - dans sa première colonne une en-tête de ligne `<th>` avec la classe `fr-cell--fixed` contenant :
    - une case à cocher `<input type="checkbox">` avec les attributs `data-fr-row-select="true"` et `id` obligatoires, pour être liée au libellé.
    - un libellé `<label>`, avec la classe `fr-label`, lié à la case à cocher via l'attribut `for`, sa valeur doit correspondre à l'attribut `id` de la case à cocher et son texte doit annonçer l'action de selection par exemple "Sélectionner la ligne 1".

**Exemple de tableau avec lignes sélectionnables**

:::fr-accordion[Déplier pour voir le code]{id=code-tableau-selectionnable}

```HTML
<div class="fr-table">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th class="fr-cell--fixed" role="columnheader">
                                <span class="fr-sr-only">Sélectionner</span>
                            </th>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="fr-cell--fixed" scope="row">
                                <div class="fr-checkbox-group fr-checkbox-group--sm">
                                    <input data-fr-row-select="true" id="table-select-checkbox-1" type="checkbox">
                                    <label class="fr-label" for="table-select-checkbox-1">
                                        Sélectionner la ligne 1
                                    </label>
                                </div>
                            </th>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <!-- Lignes de corps supplémentaires -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

:::

#### Variantes de tableau à double entrée avec colonne d'en-tête fixe

Le tableau peut présenter des en-têtes de ligne `<th>` fixes au scroll horizontal avec la classe `fr-cell--fixed`.

**Exemple de tableau à double entrée avec colonne d'en-tête fixe**

:::fr-accordion[Déplier pour voir le code]{id=code-tableau-en-tete-fixe}

```HTML
<div class="fr-table">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th class="fr-cell--fixed" role="columnheader">
                                <span class="fr-sr-only">En tête de colonne [À MODIFIER]</span>
                            </th>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="fr-cell--fixed" scope="row">
                                th0
                            </th>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

:::

##### Alignement

Par défaut, le contenu des cellules est aligné à gauche et centré verticalement.

Vous avez à votre disposition des classes CSS pour modifier l’**alignement vertical** des cellules de contenu :

- `fr-cell--top` : Alignement vertical en haut.
- Alignement vertical au centre par défaut.
- `fr-cell--bottom` : Alignement vertical en bas.

Vous avez à votre disposition des classes CSS pour modifier l’**alignement horizontal** des cellules de contenu :

- Alignement horizontal à gauche par défaut.
- `fr-cell--center` : Alignement horizontal au centre.
- `fr-cell--right` : Alignement horizontal à droite.

**Exemple de tableau avec des alignements de cellules différents**

:::fr-accordion[Déplier pour voir le code]{id=code-tableau-alignement}

```HTML
<div class="fr-table fr-table--bordered">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fr-cell--top">
                                Lorem [...] elit ut.
                            </td>
                            <td class="fr-cell--bottom">
                                Lorem [...] elit ut.
                            </td>
                            <td class="fr-cell--center">
                                Lorem [...] elit ut.
                            </td>
                            <td class="fr-cell--right">
                                Lorem
                                <br>Lorem [...
                                <br>Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

::::::fr-accordion[Déplier pour voir le code]{id=code-tableau-alignement}

##### Retour à la ligne automatique

Le contenu en ligne des cellules est par défaut affiché sur une seule ligne grâce à la propriété CSS `white-space: nowrap;` qui empêche les retours à la ligne.
Ce comportement peut être désactivé en ajoutant la classe `fr-cell--multiline` sur l'element `<table>`, une ligne `<tr>`, une en-tête de ligne `<th>` ou une cellule `<td>` du tableau.

**Exemple de tableau avec retour à la ligne automatique**

```HTML
<div class="fr-table">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table class="fr-cell--multiline">
                    <!-- Contenu de tableau avec retour à la ligne automatique -->
                </table>
            </div>
        </div>
    </div>
</div>
```

---

### JavaScript

Un script est disponible pour ajouter des fonctionnalités interactives au tableau, comme le placement du caption, la gestion des ombres sur la version dépréciée, et la sélection de lignes via les checkbox.

#### Installation du JavaScript

Pour fonctionner le composant tableau nécessite l'utilisation de JavaScript.

Le JavaScript du composant et de ses dépendances doivent être importés. L'import doit se faire à la fin de la page, avant la balise `</body>`, et de préférence avec les fichiers minifiés, car plus légers.

:::fr-table[Dépendances JS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| checkbox   | Non         | Uniquement pour la version avec lignes sélectionnables |
| Table      | Oui         |          |

:::

**Exemple d'imports JS**

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/checkbox/checkbox.module.min.js"></script>
<script type="module" src="dist/component/table/table.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/checkbox/checkbox.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/table/table.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le tableau, les éléments suivants sont instanciés :

- Le composant "table", via la classe : `fr-table`
- L'élément `<table` du composant, via le sélecteur : `fr-table table` (pour la version dépréciée)
- Les lignes du tableau, via le sélecteur : `fr-table tr` (pour la version avec lignes sélectionnables)
- Les checkboxes du tableau, via le sélecteur : `fr-table td` (pour la version avec lignes sélectionnables)

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```javascript
const elem = document.getElementById('ID_TABLE');
dsfr(elem).table.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### table

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du tableau est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).table.isEnabled = false` |

:::

:::fr-table[parent]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parent |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

:::

:::fr-table[children]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Renvoie un tableau d'instances enfants |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).children` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).table.node` |

:::

##### tableCaption

:::fr-table[resize]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Permet de mettre à jour la taille du caption après un changement de libellé. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(tableCaption).tableCaption.resize()` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+table)

::dsfr-doc-changelog
