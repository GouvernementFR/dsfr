---
boost: 0
sitemap:
  noindex: true
title: Code de la tuile
shortTitle: Code de la tuile
description: Le composant Tuile permet de créer des points d’entrée vers des pages de contenu au sein d’interfaces organisées.
shortDescription: Rediriger l’usager vers du contenu via des tuiles.
keywords: tuile, composant, design system, interface, navigation, contenu, accessibilité, UX, UI, carte
cover: ../_asset/cover/cover.png
excerpt: Ce guide présente le composant Tuile comme un élément de navigation vers des contenus, avec des recommandations d’usage et des règles éditoriales pour assurer cohérence et clarté.
summary: Ce contenu décrit l’usage du composant Tuile dans un design system. Il précise son rôle dans la navigation vers des pages de contenu, ses différences avec le composant Carte, et les bonnes pratiques à adopter pour garantir une présentation cohérente dans les listes ou collections. Ce guide s’adresse aux concepteurs et développeurs souhaitant structurer visuellement des ensembles de liens tout en assurant une expérience utilisateur fluide et accessible.
mesh:
  - component/badge
  - component/card
  - component/tag
---

## Tuile

La tuile est un élément d’interaction avec l’interface permettant de rediriger l’usager vers des pages de contenu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Tuile** est un élément interactif permettant de donner des aperçus cliquables d’une page de contenu. Sa structure est la suivante :

- La tuile est un élément HTML `<div>` défini par la classe `fr-tile`.
- Les Tuiles sont généralement utilisées au sein d'une **grille**, disponible dans les fondamentaux (voir [grille](../../../../../core/_part/doc/grid/index.md)).
- Son contenu est structuré en plusieurs parties :
  - L'en-tête de la tuile `fr-tile__header`, optionnel, pouvant contenir :
    - Un pictogramme dans un élément `fr-tile__pictogram` (voir [Pictogramme](../../../../../core/_part/doc/pictogram/index.md)).
  - Le corps de la tuile `fr-tile__body`, obligatoire, il contient le contenu de la tuile :
    - Un titre, obligatoire, un élément HTML avec un niveau d'entête `<hx>` et la classe `fr-tile__title` pouvant contenir un lien ou un simple texte.
    - Une description, optionnelle, `fr-tile__desc`, un élément HTML de type `<p>`.
    - Un texte de détail, optionnel, `fr-tile__detail`, un élément HTML de type `<p>`.
    - Une zone se plaçant avant le contenu `fr-tile__start` qui peut accueillir :
      - Un badge ou un tag, optionnels, (voir composants [Badge](../../../../badge/_part/doc/code/index.md) et [Tag](../../../../tag/_part/doc/code/index.md)).
      - Un texte de détail `fr-tile__detail`, optionnel, auquel on peut associer une icône.

**Exemple de structure HTML simple**

```HTML
<div class="fr-tile fr-enlarge-link">
    <div class="fr-tile__body">
        <div class="fr-tile__content">
            <h3 class="fr-tile__title">
                <a href="[url - à modifier]">Intitulé de la tuile</a>
            </h3>
            <p class="fr-tile__desc">Description de la tuile</p>
            <p class="fr-tile__detail">Détail</p>
            <div class="fr-tile__start">
                <p class="fr-badge fr-badge--purple-glycine">Libellé badge</p>
            </div>
        </div>
    </div>
    <div class="fr-tile__header">
        <div class="fr-tile__pictogram">
            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use>
                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use>
                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use>
            </svg>
        </div>
    </div>
</div>
```

#### Tuile de téléchargement

Une variante tuile de téléchargement existe, comme pour les composants Lien et Carte, pour proposer le téléchargement d'un fichier. La tuile de téléchargement est toujours en format horizontale par défaut.
Cette variante reprend la même structure que la tuile standard à l'exception de certains éléments :

- La Tuile doit avoir la classe `fr-card--download`.
- L'intitulé du titre doit avoir ce format : **Télécharger le/la [Typologie de document] « [Nom du document] »**.
- Le lien du titre doit avoir :
  - L'attribut `download`. Ajouter une valeur à l'attribut permet de renommer le fichier au moment du téléchargement.
  - L'attribut `hreflang`, si le fichier est dans une autre langue, avec comme valeur le code langue du document à télécharger.
- **Étendre le clic** à toute la tuile est obligatoire.
  - Ajouter la classe : `fr-enlarge-link` sur la tuile pour étendre le lien.
  - Dans le cas d'un téléchargement programmatique, le téléchargement peut venir d'un bouton. Il est possible de remplacer le lien du titre par un `button`. Il faudra alors utiliser la classe `fr-enlarge-button` sur la tuile.
- La **texte de détail est obligatoire** `fr-card__details`.
  - Il doit indiquer le type de fichier (son extension), son poids, et sa langue si différente de la page.
  - Il est possible de remplir automatiquement le détail en JS grâce à l'attribut `data-fr-assess-file` sur le lien (Voir section [Javascript](#javascript)).

**Exemple de tuile de téléchargement**

```HTML
<div class="fr-tile fr-tile--download fr-enlarge-link">
    <div class="fr-tile__body">
        <div class="fr-tile__content">
            <h3 class="fr-tile__title">
                <a download href="[url - à modifier]">Télécharger le document XX</a>
            </h3>
            <p class="fr-tile__desc">Description (optionnelle)</p>
            <p class="fr-tile__detail">Détail obligatoire (Extension - Poids - Langue)</p>
        </div>
    </div>
    <div class="fr-tile__header">
        <div class="fr-tile__pictogram">
            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                <use class="fr-artwork-decorative" href="../../../../dist/artwork/pictograms/document/document-download.svg#artwork-decorative"></use>
                <use class="fr-artwork-minor" href="../../../../dist/artwork/pictograms/document/document-download.svg#artwork-minor"></use>
                <use class="fr-artwork-major" href="../../../../dist/artwork/pictograms/document/document-download.svg#artwork-major"></use>
            </svg>
        </div>
    </div>
</div>
```

#### Groupe de Tuiles

Il n'existe pas à proprement parlé de groupe de Tuiles. Néanmoins, les Tuiles sont généralement utilisées sous forme d'un ensemble d'élément. Elles peuvent être disposées côte à côte grâce à la **grille** disponible dans les fondamentaux.
La grille permet de définir un nombre de colonne pour chaque Tuile, sur une base de 12 colonnes, et peut varier en fonction de la taille de l'écran (breakpoint).
Voir page [grille](../../../../../core/_part/doc/index.md) pour plus d'information.

**Exemple de grille de Tuile**

```HTML
<div class="fr-grid-row fr-grid-row--gutters">
    <div class="fr-col-12 fr-col-md-4 fr-col-lg-3">
        <div class="fr-tile fr-enlarge-link">(...)</div>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-tile fr-enlarge-link">(...)</div>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-tile fr-enlarge-link">(...)</div>
    </div>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Tile       | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tile/tile.min.css" rel="stylesheet">
```

#### Variantes de taille

La tuile peut avoir différentes tailles qui auront un impact sur la taille du texte, des espacements, du pictogramme, et de l'icône :

- `fr-tile--sm` : Petite tuile.
- Par défaut : Tuile moyenne.

Par défaut, la tuile prend 100% de la largeur de son conteneur et sa hauteur varie en fonction de son contenu. La largeur des Tuiles peut être ajustée via le nombre de colonnes de la grille (Voir [grille](../../../../../core/_part/doc/grid/index.md)).

Utiliser une taille de Tuile adaptée à la largeur de son conteneur :

- 2 à 4 colonne pour une Tuile SM.
- 3 à 6 colonne pour une Tuile MD.

**Exemples de variantes de taille**

```HTML
<div class="fr-tile fr-tile--sm fr-enlarge-link">
    <!-- Contenu de la tuile SM -->
</div>
<div class="fr-tile fr-enlarge-link">
    <!-- Contenu de la tuile MD -->
</div>
```

#### Variantes de style

La tuile est disponible en plusieurs autres variantes :

- La Tuile avec **fond gris** : définie par la classe `fr-tile--grey`.
- La Tuile sur **fond transparent** : définie par la classe `fr-tile--no-background`.
- La Tuile **sans bordure** : définie par la classe `fr-tile--no-border`.
- La Tuile **avec ombre portée** : définie par la classe `fr-tile--shadow`.

**Exemples de variantes de style**

```HTML
<div class="fr-tile fr-tile--grey fr-enlarge-link">
    <!-- Contenu de la tuile sur fond gris -->
</div>
<div class="fr-tile fr-tile--no-background fr-enlarge-link">
    <!-- Contenu de la tuile sur fond transparent -->
</div>
<div class="fr-tile fr-tile--no-border fr-enlarge-link">
    <!-- Contenu de la tuile sans bordure -->
</div>
<div class="fr-tile fr-tile--shadow fr-enlarge-link">
    <!-- Contenu de la tuile avec ombre -->
</div>
```

#### Variantes d'orientation

Les tuiles sont disponibles, par défaut, en format vertical (pictogramme en haut et contenu en bas). Il existe aussi des variantes permettant de passer la tuile en format **horizontal** (pictogramme à gauche et contenu à droite).

- La classe `fr-tile--horizontal` : passe la tuile en format horizontal en mobile et desktop.
- Les classes `fr-tile--horizontal` et `fr-tile--vertical@md` : passe la tuile en format horizontal puis en vertical à partir du breakpoint MD (768px).
- Les classes `fr-tile--horizontal` et `fr-tile--vertical@lg` : passe la tuile en format horizontal puis en vertical à partir du breakpoint LG (992px).

**Exemples de tuiles horizontales**

```HTML
<div class="fr-tile fr-tile--horizontal fr-enlarge-link">
    <!-- Contenu de la tuile horizontale -->
</div>
<div class="fr-tile fr-tile--horizontal fr-tile--vertical@md fr-enlarge-link">
    <!-- Contenu de la tuile horizontale puis verticale à partir du breakpoint MD -->
</div>
<div class="fr-tile fr-tile--horizontal fr-tile--vertical@lg fr-enlarge-link">
    <!-- Contenu de la tuile horizontale puis verticale à partir du breakpoint LG -->
</div>
```

#### Variantes d'icônes

Par défaut, sur les **tuiles avec lien étendu et non externe**, une icône "arrow-right" apparaît en bas à droite. Dans certains cas, comme pour réduire la taille de la tuile, il peut être utile de **retirer cette icône**. Il suffit pour cela d'ajouter la classe `fr-tile--no-icon` sur la tuile.
Si le lien est un **lien externe**, l'icône "external-link" reste obligatoire.

**Exemple de retrait d'icône**

```HTML
<div class="fr-tile fr-enlarge-link fr-tile--no-icon">
    <!-- Contenu de la tuile -->
</div>
```

---

### JavaScript

Le composant Tuile **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Une fonctionnalité disponible dans le core, permet de remplir automatiquement le détail des **Tuiles de téléchargement**.
Pour instancier le javascript de remplissage automatique du détail sur la Tuile de téléchargement, ajouter l'attribut `data-fr-assess-file` sur le lien du titre.
Les propriétés de type, poids, et langue sont récupérées depuis le fichier. Le texte de détail est automatiquement remplacé au chargement du JS. Il est conseillé de tout de même remplir les infos connues dans le détail en solution de repli.
Si la page est en Anglais, l'attribut `data-fr-assess-file` doit prendre la valeur "bytes", pour afficher le poids en Bytes plutôt qu'en Octet.

Pour fonctionner le fichier à télécharger doit être sur le même cross-domain que le site.

#### Installation du JavaScript

Pour fonctionner, le **remplissage automatique du détail des Tuiles de téléchargement** nécessite l'utilisation de JavaScript.
Cette fonctionnalité est disponible dans le core.

Il est donc nécessaire d'importer les fichiers js du core à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
```

#### API

> [!NOTE]
> L'activation ou la désactivation de la fonction de remplissage automatique du détail des Tuiles de téléchargement (assess-file) n'est pas disponible via l'API JS, elle se fait via l'ajout ou le retrait de l'attribut `data-fr-assess-file` sur le lien.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tile+)

::dsfr-doc-changelog
