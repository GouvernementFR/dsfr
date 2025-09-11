---
title: Grille et points de rupture
shortTitle: Grille et points de rupture
description: Comprendre et maîtriser la grille du DSFR pour structurer les interfaces web de l’État selon les résolutions cibles, avec ou sans gouttières, en respectant les points de rupture et les bonnes pratiques d’alignement et de mise en page.
shortDescription: Structure responsive, points de rupture, alignements et classes CSS du DSFR.
keywords: grille, responsive, DSFR, points de rupture, breakpoints, layout, gouttières, fr-container, fr-grid-row, fr-col, fr-col-offset, alignements, design système
cover: ../_asset/grid/cover/cover.png
excerpt: Tout ce qu’il faut savoir sur la grille du DSFR, breakpoints, colonnes, gouttières, marges, alignements… pour une mise en page homogène et responsive à travers tous les services numériques de l’État.
summary: Cette page détaille le fonctionnement de la grille du Design Système de l’État (DSFR), ses points de rupture, les valeurs à utiliser pour le design et le développement, et les classes CSS associées. Elle précise comment structurer les interfaces selon les tailles d’écran, ajuster les alignements, ajouter des gouttières ou des marges, et utiliser des décalages. Ces règles garantissent des interfaces cohérentes, accessibles et adaptables sur tous les supports.
order: 6
---

# Grille et points de rupture

:::fr-table[Caractéristiques de la grille]{valign=top multiline=true}
| Mise en page | Valeurs en px | Résolution maquette en px | Token | Largeur max. du contenu | Tailles des gouttières (optionnelles) |
| --- | --- | --- | --- | --- | --- |
| XS | de 0 à 575 | 320 |  | / | 16px |
| SM | de 576 à 767 | 576 | `$bp-sm` | / | 16px |
| MD | de 768 à 991 | 768 | `$bp-md` | / | 16px |
| LG | de 992 à 1247 | 992 | `$bp-lg` | / | 24px |
| XL | ≥ 1248 | 1440 | `$bp-xl` | 1200 | 24px |
:::

## Points de rupture

Les points de rupture sont :

- SM : 576 pixels
- MD : 768 pixels
- LG : 992 pixels
- XL : 1248 pixels

**Pour les designers**

Par défaut, nous utilisons la grille avec gouttières. Les différentes mises en page sont disponibles dans la librairie afin de vous guider dans la conception de vos maquettes pour chaque résolution.

Nous recommandons de privilégier pour vos maquettes les résolutions suivantes :

- Mobile (XS) : 320px
- Desktop (XL) : 1440px

**Pour les développeurs**

Par défaut la grille est proposée sans gouttière, et avec des marges externes dans le code. Vous pouvez néanmoins utiliser les modificateurs disponibles pour :

- ajouter les gouttières de la grille
- supprimer les marges externes
- adapter la largeur et l’affichage de vos blocs de contenu

## Affichages et alignements

Il est possible d’adapter la grille à votre besoin, en utilisant les différentes classes à votre disposition.

**Ajouter ou supprimer des marges externes et ou gouttières**

**Mise en page avec marge externe et sans gouttière (par défaut)**

```HTML
<div class="fr-container">
    <div class="fr-grid-row">
        <div class="fr-col"></div>
        <div class="fr-col-4"></div>
        <div class="fr-col-12 fr-col-lg-4"></div>
    </div>
</div>
```

**Mise en page avec marge externe et avec gouttière**

Il est possible d’ajouter des gouttières de 16 ou 24px selon votre résolution (voir tableau ci-dessus), à l’aide du modificateur `fr-grid-row--gutters` .

```HTML
<div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col"></div>
        <div class="fr-col-4"></div>
        <div class="fr-col-12 fr-col-lg-4"></div>
    </div>
</div>
```

**Mise en page sans marge externe et sans gouttière**

Pour l'utiliser, il suffit d’utiliser la classe `fr-container--fluid`.

```HTML
<div class="fr-container--fluid">
    <div class="fr-grid-row">
        <div class="fr-col"></div>
        <div class="fr-col-4"></div>
        <div class="fr-col-12 fr-col-lg-4"></div>
    </div>
</div>
```

**Mise en page sans marge externe et avec gouttière**

Pour l’utiliser il suffit d’intégrer le modificateur `fr-container--fluid` et de le combiner avec le modificateur `fr-grid-row--gutter`.

```HTML
<div class="fr-container--fluid">
    <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col"></div>
        <div class="fr-col-4"></div>
        <div class="fr-col-12 fr-col-lg-4"></div>
    </div>
</div>
```

**Ajuster la largeur des blocs de contenu**

Les blocs de contenu peuvent s’afficher selon vos besoins, sur une ou plusieurs colonnes de la grille, grâce à la classe `fr-col`.

Nous formulons cependant des recommandations pour la majorité des composants afin de vous guider (exemple : 8 colonnes max. pour le corps de texte)

:::fr-table[Détail sur l’utilisation de "fr-col"]{valign=top multiline=true}

| Classe | Description | Exemple |
| --- | --- | --- |
| `fr-col` | Calculé automatiquement en fonction du nombre `fr-col` intégré dans le code | Si vous utilisez 4 classes `fr-col` votre interface affichera 4 colonnes de même taille. |
| `fr-col-n` | La largeur de la colonne est définie par n/12 | Si n=8. La largeur de la celulle sera équivalente à 8/12 soit 66,6666% |
| `fr-col-[breakpoint]-n` | Identique à `fr-col-n` mais appliqué à partir d'un breakpoint. ( SM, MD, LG, XL) | `fr-col-12` `fr-col-sm-8` `fr-col-md-6` `fr-col-lg-4` `fr-col-xl-2` appliquera 100% de largeur de 0 à 575px, puis 66.6666% de largeur de 576px à 767px, 50% de largeur de 768px à 991px, 33.3333% de largeur de 992px à 1199px, et 16.6666% de largeur au delà de 1200px |

:::

**Ajuster l’alignement des contenus**

Vous pouvez personnaliser l'alignement vertical ou horizontal d’un contenu, en utilisant les modificateurs suivants :

- **Alignement horizontal :** `fr-grid-row--left`, `fr-grid-row--right`, `fr-grid-row--center`

```HTML
<div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        <div class="fr-col-4"></div>
    </div>
</div>
```

- **Alignement vertical :** `fr-grid-row--top`, `fr-grid-row--bottom`, `fr-grid-row--middle`

```HTML
<div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--bottom">
        <div class="fr-col-4"></div>
    </div>
</div>
```

Vous pouvez créer des décalages dans la grille en utilisant la classe `fr-col-offset-n`. La valeur N représente le nombre de colonnes que vous souhaitez laisser vides à gauche du bloc.

- `fr-col-offset-1` : laissera 1 colonne vide
- `fr-col-offset-2` : laissera 2 colonnes vides
- etc

La gestion des breakpoints fonctionne de la même manière ici.

- `fr-col-offset-3` associé à `fr-col-offset-sm-4` : laissera 3 colonnes vides en XS, puis 4 à partir de SM

Vous pouvez mettre ce décalage à la droite du bloc avec le modificateur `--right`, exemple : `fr-col-offset-3--right`

**Exemple d’un décalage commun à toutes les mises en page**

```HTML
<div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-offset-4"></div>
    </div>
</div>
```

**Exemple d’un décalage différent sur chaque mise en page**

```HTML
<div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-offset-1 fr-col-offset-sm-3 fr-col-offset-md-6"></div>
    </div>
</div>
```

## Règles d’utilisation

Pour que la grille s’affiche correctement, il faut respecter la structure : `fr-container` (ou `fr-container--fluid`) contenant un `fr-grid-row`, qui lui-même contient vos différentes colonnes (`fr-col` etc.).
