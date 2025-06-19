---
boost: 0
sitemap:
  noindex: true
title: Design de l'Onglet
shortTitle: Design de l'Onglet
description: Présentation du composant Onglets pour structurer du contenu lié dans un espace restreint avec des recommandations d’usage et d’accessibilité.
shortDescription: Structuration de contenu avec des onglets
keywords: onglets, composant, interface, navigation, accessibilité, design système, UX, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le composant Onglets permet de regrouper plusieurs sections de contenu dans un espace réduit en affichant une seule section à la fois. Il est utile pour simplifier la lecture et améliorer l’expérience utilisateur.
summary: Cette fiche détaille le fonctionnement du composant Onglets du design système de l’État. Elle décrit ses usages recommandés, ses règles d’intégration et d’accessibilité, ainsi que son comportement responsive. Le contenu est destiné aux équipes design et développement souhaitant structurer des interfaces avec plusieurs sections de contenu apparentées tout en maintenant une expérience claire et fluide.
---

## Onglet

Le système d’onglets permet de structurer et de présenter plusieurs sections de contenu liées, en affichant une seule section à la fois dans un espace limité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de l'onglet](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé d’onglet]{required=true add='cliquable, qui permet d’afficher la zone de contenu associée'}

::dsfr-doc-pin[Une bordure pour l’onglet en état “courant”]{required=true}

::dsfr-doc-pin[Une icône]{required=false add='à gauche du titre'}

::dsfr-doc-pin[Un fond blanc]{required=true}

::dsfr-doc-pin[Une zone de contenu]{required=true}

:::

### Variations

**Responsive**

::dsfr-doc-storybook{storyId=tabs--tabs width=375}

En mobile, les onglets affichent un scroll horizontal qui permet d’accéder à l’ensemble des sections.

### Tailles

La largeur du composant s’adapte à la taille de son conteneur. Si le nombre d’onglets dépasse la largeur du conteneur, un scroll horizontal permet de naviguer entre les différents onglets.

::dsfr-doc-storybook{storyId=tabs--tabs width=576}

Il est toutefois recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant à intégrer au sein de pages de contenu.

Par ailleurs, la largeur des onglets eux-mêmes s’adapte à la taille de leur contenu. C’est pourquoi il est recommandé de proposer des titres concis, afin de permettre la juxtaposition de l’ensemble des onglets, sans forcer le scroll horizontal.

### États

**État au clic**

L’état au clic correspond au comportement constaté par l’usager une fois un onglet sélectionné, après avoir cliqué dessus.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole les onglets.

### Personnalisation

Les onglets ne sont pas personnalisables.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées - voir la [structure du composant](../../../../tab/_part/doc/index.md).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement la couleur de fond par défaut des onglets.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur de fond des onglets.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Utiliser uniquement la taille de typographie prévue pour le titre des onglets.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas augmenter la taille de typographie du titre des onglets.

:::

::::

#### Maillage

- [Accordéon](../../../../accordion/_part/doc/index.md)
- [Modale](../../../../modal/_part/doc/index.md)
