---
boost: 0
sitemap:
  noindex: true
title: Design de la Mise en exergue
shortTitle: Design de la Mise en exergue
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Mise en exergue.
shortDescription: Mettre en évidence une information essentielle.
keywords: mise en exergue, contenu, composant éditorial, UX, design system, accessibilité, information, page, interface, valorisation
cover: ../_asset/cover/cover.png
excerpt: Le composant Mise en exergue permet de faire ressortir une information capitale intégrée dans le contenu principal, tout en respectant les principes de lisibilité et de hiérarchisation.
summary: Ce contenu décrit le composant Mise en exergue comme un outil d’identification rapide d’informations clés au sein d’un texte. Il précise ses usages, le distingue de la mise en avant, et détaille les bonnes pratiques de mise en forme pour assurer sa visibilité. L’alignement, la position dans la page et la nature du contenu sont essentiels à son efficacité. Ce guide est destiné aux créateurs de contenu et designers cherchant à hiérarchiser l’information de manière claire et accessible.
mesh:
  - component/callout
  - component/quote
---

## Mise en exergue

La mise en exergue est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la mise en exergue](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une bordure]{required=true}

::dsfr-doc-pin[Un texte]{required=true}

:::

### Variations

La mise en exergue ne propose aucune variation.

### Tailles

La mise en exergue est disponible en trois tailles :

- SM pour small

::dsfr-doc-storybook{storyId=highlight--size-sm}

- MD pour medium - taille par défaut.

::dsfr-doc-storybook{storyId=highlight--default}

- LG pour large.

::dsfr-doc-storybook{storyId=highlight--size-lg}

### États

La mise en exergue n’est sujette à aucun changement d’état.

### Personnalisation

Seule la couleur de la bordure de la mise en exergue est personnalisable.

Elle peut utiliser l’ensemble des couleurs illustratives.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Personnaliser la bordure de la mise en exergue avec l’ensemble des couleurs illustratives d’indice $main.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas utiliser une couleur illustrative ou des indices autre que ceux autorisés.

:::

::::

:::fr-table[Titre du tableau]{valign=top multiline=true caption=false}
|  Éléments | Indice thème clair | Indice thème sombre |
|:-----|:-----|:-----|
| **Bordure `$border-default-blue-france`** | Indice **main**<br> exemple : `$green-emeraude-main-632` | Indice **main**<br> exemple : `$green-emeraude-main-632` |

:::
