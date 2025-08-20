---
boost: 0
sitemap:
  noindex: true
title: Design de la Citation
shortTitle: Design de la Citation
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Citation.
shortDescription: Citer un texte dans un contenu éditorial.
keywords: citation, contenu éditorial, extrait, source, typographie, italique, UX, accessibilité, design system, mise en forme
cover: ../_asset/cover/cover.png
excerpt: Le composant Citation permet d’intégrer un extrait textuel dans une page, avec des champs de détails pour ajouter des précisions sur la source. Il doit respecter une présentation typographique soignée.
summary: Ce document décrit les usages du composant Citation, destiné à intégrer des extraits de textes ou de discours dans un contenu éditorial. Il explique comment distinguer la citation des composants de mise en avant ou de mise en exergue, précise les règles typographiques à appliquer, comme l’usage de guillemets et de l’italique, et recommande d’éviter les citations trop longues pour préserver la lisibilité. Il fournit également des indications sur la structuration, l’usage des champs de détails, et les règles de propriété intellectuelle à respecter.
mesh:
  - component/callout
  - component/highlight
---

## Citation

La citation est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la citation](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une icône]{add="permettant d’informer l’usager qu’il s’agit de la mise en avant d’une citation" required=true}

::dsfr-doc-pin[Le texte de la citation]{required=true}

::dsfr-doc-pin[Une image d’illustration]{add="pour incarner la citation"}

::dsfr-doc-pin[Un séparateur]{required=true}

::dsfr-doc-pin[Une signature]{add="pour préciser l’auteur de la citation"}

::dsfr-doc-pin[Une zone de détails]{add="pour préciser l’origine du texte cité"}

:::

### Variations

**Citation sans illustration**

::dsfr-doc-storybook{storyId=quote--imageless}

- Utiliser la citation sans illustration lorsqu’il n’est pas nécessaire ou possible d’incarner l’auteur de la citation.

En version mobile, le séparateur passe en dessous de la zone de détails.

**Citation avec illustration**

::dsfr-doc-storybook{storyId=quote--default}

- Utiliser la citation avec illustration pour incarner l’auteur.

En version mobile, le comportement du séparateur est le même que pour la variation sans illustration. En complément, l’illustration est affichée en dessous du texte de la citation.

### Tailles

La largeur de la citation s’adapte à la taille de son conteneur.

Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant de mise en forme de contenu.

Le texte de la citation est quant à lui disponible en 3 tailles :

- MD pour medium - taille par défaut.

::dsfr-doc-storybook{storyId=quote--default}

- LG pour large.

::dsfr-doc-storybook{storyId=quote--default args="{ size: lg }"}

- XL pour extra large.

::dsfr-doc-storybook{storyId=quote--default args="{ size: xl }"}

### États

La citation n’est sujette à aucun changement d’état.

### Personnalisation

Seule la couleur de l’icône de la citation est personnalisable. Elle peut utiliser l’ensemble des couleurs illustratives en indice $main uniquement.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Personnaliser la couleur de l’icône de la citation parmi les couleurs illustratives, en indice $main.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas utiliser une couleur illustrative d’un indice autre que $main.

:::

::::

:::fr-table[Titre du tableau]{valign=top multiline=true caption=false}
|  Éléments | Indice thème clair | Indice thème sombre |
|:-----|:-----|:-----|
| **Icône `$artwork-minor-blue-france`** | Indice **main**<br> exemple : `$pink-tuile-main-556` | Indice **main**<br> exemple : `$pink-tuile-main-556` |
:::

Par ailleurs, certains éléments sont optionnels - voir [la structure du composant](#citation).
