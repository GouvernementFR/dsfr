---
boost: 0
sitemap:
  noindex: true
title: Design des liens d'évitement
shortTitle: Design des liens d'évitement
description: Les liens d’évitement permettent aux usagers utilisant un clavier ou un lecteur d’écran d’accéder rapidement aux zones principales d’une page.
shortDescription: Accéder rapidement au contenu avec le clavier.
keywords: lien d’évitement, accessibilité, navigation clavier, lecteur d’écran, UX, interface, design system, contenu, header, composant
cover: ../_asset/cover/cover.png
excerpt: Le lien d’évitement est un composant essentiel à l’accessibilité. Il permet aux usagers de naviguer directement vers les zones clés d’une page, sans passer par tous les éléments précédents.
summary: Ce document présente le composant Lien d’évitement, un outil fondamental pour l’accessibilité numérique. Il explique pourquoi son intégration est obligatoire, comment l’utiliser correctement en début de page, et avec quels types de liens. Il précise également les règles d’affichage, de contenu et de quantité, pour en garantir l’efficacité. Ce guide s’adresse aux développeurs et designers soucieux d’offrir une navigation fluide aux usagers naviguant au clavier ou via un lecteur d’écran.
mesh:
  - component/link
---

## Liens d'évitement

Les liens d’évitement sont un système de navigation secondaire permettant à l’usager naviguant au clavier, ou équipé d’un lecteur d'écran, d’accéder plus rapidement à des zones précises de la page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie des liens d'évitement](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un ou plusieurs liens simples]{required=true}

::dsfr-doc-pin[Un fond gris]{required=true}

:::

### Variations

Les liens d’évitement ne propose aucune variation.

### Tailles

La largeur des liens d’évitement s’adapte à leur contenu, tout en étant dépendante de la taille du conteneur principal de la page.

### États

**Etat au focus**

L’état au focus correspond au comportement constaté par l’usager lorsqu’il sélectionne un lien via la navigation au clavier.

### Personnalisation

Les liens d’évitement ne sont pas personnalisables.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur de fond des liens d’évitement.

:::

::::
