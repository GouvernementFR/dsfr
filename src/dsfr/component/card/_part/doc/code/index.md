---
boost: 0
sitemap:
  noindex: true
title: Code de la Carte
shortTitle: Code de la Carte
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Carte.
shortDescription: Carte cliquable redirigeant vers une page éditoriale avec aperçu.
keywords: carte, composant, aperçu, lien, redirection, contenu, média, badge, tag, bouton, DSFR, tuile
cover: ../_asset/cover/cover.png
excerpt: Le composant carte permet d’accéder à un contenu éditorial à partir d’un aperçu visuel structuré, sous forme verticale ou horizontale.
summary: Le composant carte est un point d’entrée vers une page éditoriale ou un contenu spécifique. Il permet d’afficher un aperçu clair à travers une structure visuelle contenant un titre, une description, des éléments comme badges ou tags, une image ou vidéo, et des actions. Il existe en formats vertical et horizontal, en plusieurs tailles, et peut inclure des variations esthétiques comme le fond gris ou l’absence de bordure. Des règles UX précises guident son usage pour garantir la cohérence, l’accessibilité et la bonne hiérarchisation de l’information.
mesh:
  - component/badge
  - component/tag
  - component/tile
---

## Carte

La carte est un élément d’interaction avec l’interface permettant de rediriger l’usager vers une page éditoriale donc elle donne un aperçu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Carte** est un élément interactif permettant de donner des aperçus cliquables d’une page de contenu. Elle fait généralement partie d'une collection ou liste d’aperçus de contenus similaires.
Sa structure est la suivante :

- La **Carte** est un élément HTML `<div>` défini par la classe `fr-card`.
- Les cartes sont généralement utilisées au sein d'une **grille**, disponible dans les fondamentaux (voir [grille](../../../../../core/_part/doc/grid/index.md)).
- Son contenu est structuré en deux parties :
  - Le **corps de la carte** `fr-card__body` est obligatoire, il contient le contenu de la carte :
    - Un **bloc de contenu** `fr-card__content`, obligatoire, qui contient les informations propres à la carte :
      - Le **titre** de la carte, obligatoire, un élément HTML avec un niveau d'entête `<hx>` et la classe `fr-card__title` pouvant contenir un lien ou un simple texte. Le zone de clic du lien peut être **étendu** à toute la carte en ajoutant la classe `fr-enlarge-link` sur la carte.
      - Une **description**, optionnelle, `fr-card__desc`, un élément HTML de type `<p>`.
      - Une zone se plaçant **avant** le contenu `fr-card__start` et une zone se plaçant **après** le contenu `fr-card__end` qui peuvent toutes deux accueillir :
        - Un groupe de badge ou un groupe de tag, optionnels, (voir composants [badge](../../../../badge/_part/doc/code/index.md) et [tag](../../../../tag/_part/doc/code/index.md)).
        - Un texte de détail `fr-card__detail`, optionnel, auquel on peut associer une icône.
    - Un bloc de **zone d'action**  `fr-card__footer`, optionnel, qui permet l'ajout de boutons ou de liens supplémentaires.
  - **L'entête de la carte** `fr-card__header`, optionnel, pouvant contenir :
    - Une **image** dans un élément `fr-card__img`. L'image doit posséder la classe `fr-responsive-img` pour s'adapter au conteneur.
    - Un groupe de **badges** ou un groupe de **tags**, optionnels, placé par dessus l'image (voir composants [badge](../../../../badge/_part/doc/code/index.md) et [tag](../../../../tag/_part/doc/code/index.md)).

**Exemple de structure HTML simple**

```HTML
<div class="fr-grid-row">
    <div class="fr-col fr-col-md-6">
        <div class="fr-card fr-enlarge-link">
            <div class="fr-card__body">
                <div class="fr-card__content">
                    <h3 class="fr-card__title">
                        <a href="#">Titre de la carte</a>
                    </h3>
                    <p class="fr-card__desc">Description de la carte</p>
                </div>
            </div>
            <div class="fr-card__header">
                <div class="fr-card__img">
                    <img class="fr-responsive-img" src="/img/placeholder.16x9.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]">
                </div>
            </div>
        </div>
    </div>
</div>
```

#### Carte de téléchargement

Une variante carte de téléchargement existe, comme pour les composants [Lien](../../../../link/_part/doc/code/index.md) et [Tuile](../../../../tile/_part/doc/code/index.md), pour proposer le téléchargement d'un fichier. La carte de téléchargement est toujours en format horizontale en desktop.
Cette variante reprend la même structure que la carte standard à l'exception de certains éléments :

- La Carte doit avoir la classe `fr-card--download`.
- L'intitulé du titre doit avoir ce format : **Télécharger le/la [Typologie de document] « [Nom du document] »**.
- Le **lien** du titre doit avoir :
  - l'attribut `download`, y ajouter une valeur permet de renommer le fichier au moment du téléchargement.
  - l'attribut `hreflang` avec comme valeur le code langue du document à télécharger s'il est dans une autre langue.
- **Étendre le clic** à toute la carte est obligatoire.
  - Ajouter la classe : `fr-enlarge-link` sur la carte pour étendre le lien.
  - Dans le cas d'un téléchargement programmatique, le téléchargement peut venir d'un bouton. Il est possible de remplacer le lien du titre par un `button`. Il faudra alors utiliser la classe `fr-enlarge-button` sur la carte.
- La zone `fr-card__end` placée après le contenu est obligatoire et doit contenir impérativement et uniquement un **texte de détail** `fr-card__details`.
  - Il doit indiquer le type de fichier (son extension), son poids, et sa langue si différente de la page.
  - Il est possible de remplir automatiquement le détail en JS grâce à l'attribut `data-fr-assess-file` sur le lien (Voir section [Javascript](#javascript)).

**Exemple de carte de téléchargement**

```HTML
<div class="fr-card fr-enlarge-link fr-card--download">
    <div class="fr-card__body">
        <div class="fr-card__content">
            <h3 class="fr-card__title">
                <a download href="/example/img/placeholder.3x4.pdf">Télécharger le/la [Typologie de document] « [Nom du document] »</a>
            </h3>
            <p class="fr-card__desc">Lorem [...] elit ut.</p>
            <div class="fr-card__start">
                <ul class="fr-badges-group">
                    <li>
                        <p class="fr-badge fr-badge--purple-glycine">Libellé badge</p>
                    </li>
                    <li>
                        <p class="fr-badge fr-badge--green-menthe">Libellé badge</p>
                    </li>
                </ul>
                <p class="fr-card__detail fr-icon-info-line">détail (optionnel)</p>
            </div>
            <div class="fr-card__end">
                <p class="fr-card__detail">PDF - 48 ko</p>
            </div>
        </div>
    </div>
    <div class="fr-card__header">
        <div class="fr-card__img">
            <img class="fr-responsive-img" src="../../../../example/img/placeholder.3x4.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]" />
        </div>
    </div>
</div>
```

#### Groupe de cartes

Il n'existe pas à proprement parlé de groupe de carte. Néanmoins, les cartes sont généralement utilisées sous forme d'un ensemble d'élément. Elles peuvent être disposées côte à côte grâce à la **grille** disponible dans les fondamentaux.
La grille permet de définir un nombre de colonne pour chaque carte, sur une base de 12 colonnes, et peut varier en fonction de la taille de l'écran (breakpoint) (Voir [grille](../../../../../core/_part/doc/grid/index.md)).

**Exemple de grille de carte**

```HTML
<div class="fr-grid-row fr-grid-row--gutters">
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">(...)</div>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">(...)</div>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">(...)</div>
    </div>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Card       | Oui         |          |
| Link       | Oui         |          |
| Button     | Non         | Uniquement si zone d'action avec boutons |
| Badge      | Non         | Uniquement si ajout de badge dans la carte |
| Tag        | Non         | Uniquement si ajout de tag dans la carte |

:::

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/link/link.min.css" rel="stylesheet">
<link href="dist/component/card/card.min.css" rel="stylesheet">
```

#### Variantes de taille

La carte peut avoir différentes tailles qui auront un impact sur la taille du texte, des espacements, et de l'icône :

- `fr-card--sm` : Petite carte.
- Par défaut : Carte moyenne.
- `fr-card--lg` : Grande carte.

Par défaut, la carte prend 100% de la largeur de son conteneur et sa hauteur varie en fonction de son contenu. La largeur des cartes peut être ajustée via le nombre de colonnes de la grille (Voir [grille](../../../../../core/_part/doc/grid/index.md)).

Utiliser une taille de carte adaptée à la largeur de son conteneur :

- 3 à 4 colonne pour une carte SM.
- 4 à 6 colonne pour une carte MD.
- 6 à 12 colonnes pour une carte LG.

**Exemples de variantes de taille**

```HTML
<div class="fr-card fr-card--sm">
    <!-- Contenu de la carte SM -->
</div>
<div class="fr-card">
    <!-- Contenu de la carte MD -->
</div>
<div class="fr-card fr-card--lg">
    <!-- Contenu de la carte LG -->
</div>
```

#### Variantes de style

La carte est disponible en plusieurs autres variantes :

- La Carte avec **fond gris** : définie par la classe `fr-card--grey`.
- La Carte sur **fond transparent** : définie par la classe `fr-card--no-background`.
- La Carte **sans bordure** : définie par la classe `fr-card--no-border`.
- La Carte **avec ombre portée** : définie par la classe `fr-card--shadow`.

**Exemples de variantes de style**

```HTML
<div class="fr-card fr-card--grey">
    <!-- Contenu de la carte sur fond gris -->
</div>
<div class="fr-card fr-card--no-background">
    <!-- Contenu de la carte sur fond transparent -->
</div>
<div class="fr-card fr-card--no-border">
    <!-- Contenu de la carte sans bordure -->
</div>
<div class="fr-card fr-card--shadow">
    <!-- Contenu de la carte avec ombre -->
</div>
```

#### Variantes d'orientation

Les carte sont disponibles, par défaut, en format vertical (image en haut et contenu en bas). Il existe aussi des variantes permettant de passer la carte en format **horizontal** en desktop (image à gauche et contenu à droite). La classe `fr-card--horizontal` passe la carte en format horizontal à partir du breakpoint MD (768px).

Le **ratio image/contenu** de la carte horizontale est par défaut de 40% de la largeur pour l'image, et 60% de la largeur pour le contenu. Il existe des variantes permettant de modifier ce ratio :

- `fr-card--horizontal-half` : passe le ratio image/contenu à 50%/50%.
- `fr-card--horizontal-tier` : passe le ratio image/contenu à 1 tier / 2 tiers.

**Exemples de carte horizontale**

```HTML
<div class="fr-card fr-card--horizontal">
    <!-- Contenu de la carte horizontale -->
</div>
<div class="fr-card fr-card--horizontal fr-card--horizontal-half">
    <!-- Contenu de la carte horizontale 50/50 -->
</div>
<div class="fr-card fr-card--horizontal fr-card--horizontal-tier">
    <!-- Contenu de la carte horizontale 33/66 -->
</div>
```

#### Ratio d'images

L'image placée dans la partie "header" de la carte doit avoir la classe `fr-responsive-img` pour s'adapter à la largeur de la carte. Sa hauteur dépend de son ratio largeur/hauteur.
Le ratio de l'image est par défaut en 16/9ème. Celui-ci peut être modifié en fonction du besoin grâce aux [classes utilitaires de ratio](../../../../../core/_part/doc/media/index.md) disponibles dans le core :

- `fr-ratio-32x9` : pour un ratio largeur/hauteur de 32/9.
- `fr-ratio-3x2` : pour un ratio largeur/hauteur de 3/2.
- `fr-ratio-4x3` : pour un ratio largeur/hauteur de 4/3.
- `fr-ratio-1x1` : pour un ratio largeur/hauteur de 1/1, soit carré.
- `fr-ratio-3x4` : pour un ratio largeur/hauteur de 3/4. (non recommandé)
- `fr-ratio-3x4` : pour un ratio largeur/hauteur de 2/3. (non recommandé)
- `fr-ratio-32x9` : pour un ratio largeur/hauteur de 32/9. (non recommandé)

Les ratios avec une hauteur plus grande que la largeur ne sont pas conseillés, car le rendu mobile n'est pas approprié.

Sur les cartes horizontales, la hauteur de l'image de la carte est fixée par celle du contenu. L'image est donc croppée pour conserver 100% de la hauteur de la carte. L'utilisation de classes de ratio n'est ici pas possible.

#### Variantes d'icônes

Par défaut, sur les **cartes avec lien étendu et non externe**, une icône "arrow-right" apparaît en bas à droite. Dans certains cas, comme pour réduire la taille de la carte, il peut être utile de **retirer cette icône**. Il suffit pour cela d'ajouter la classe `fr-card--no-icon` sur la carte.
Si le lien est un **lien externe**, l'icône "external-link" reste obligatoire.

**Exemple de retrait d'icône**

```HTML
<div class="fr-card fr-enlarge-link fr-card--no-icon">
    <!-- Contenu de la carte -->
</div>
```

---

### JavaScript

Le composant Carte **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Une fonctionnalité disponible dans le core, permet de remplir automatiquement le détail des **cartes de téléchargement**.
Pour instancier le javascript de remplissage automatique du détail sur la carte de téléchargement, ajouter l'attribut `data-fr-assess-file` sur le lien du titre.
Les propriétés de type, poids, et langue sont récupérées depuis le fichier. Le texte de détail est automatiquement remplacé au chargement du JS. Il est conseillé de tout de même remplir les infos connues dans le détail en solution de repli.
Si la page est en Anglais, l'attribut `data-fr-assess-file` doit prendre la valeur "bytes", pour afficher le poids en Bytes plutôt qu'en Octet.

Pour fonctionner le fichier à télécharger doit être sur le même cross-domain que le site.

#### Installation du JavaScript

Pour fonctionner, le **remplissage automatique du détail des cartes de téléchargement** nécessite l'utilisation de JavaScript.
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
> L'activation ou la désactivation de la fonction de remplissage automatique du détail des cartes de téléchargement (assess-file) n'est pas disponible via l'API JS, elle se fait via l'ajout ou le retrait de l'attribut `data-fr-assess-file` sur le lien.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+card+)

::dsfr-doc-changelog
