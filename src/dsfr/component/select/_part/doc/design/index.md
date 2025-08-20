---
boost: 0
sitemap:
  noindex: true
title: Design de la Liste déroulante
shortTitle: Design de la Liste déroulante
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Liste déroulante.
shortDescription: Sélectionner une option dans une liste.
keywords: liste déroulante, formulaire, interface, sélection, interaction, design system, UX, UI, accessibilité, boutons radio, cases à cocher
cover: ../_asset/cover/cover.png
excerpt: La liste déroulante est un composant d’interface utile pour choisir un seul élément parmi plusieurs dans un espace restreint. Elle est recommandée entre 6 et 15 options.
summary: Ce contenu décrit l’usage du composant liste déroulante, conçu pour permettre à l’usager de sélectionner une seule option dans une liste lorsque l’espace est contraint. Il explique dans quels cas l’utiliser ou non, en comparaison avec les boutons radio ou les cases à cocher, selon le nombre de choix proposés. Des recommandations sont également données pour bien contextualiser son usage dans une interface et suivre les règles éditoriales adaptées. Ce guide s’adresse aux concepteurs d’interfaces soucieux de l’ergonomie et de la compréhension utilisateur.
mesh:
  - component/search
  - component/radio
  - component/checkbox
---

## Liste déroulante

La liste déroulante est un élément d’interaction avec l’interface permettant à l’usager de choisir un élément dans une liste donnée.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie de la liste déroulante](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé]{required=true}

::dsfr-doc-pin[Une description additionnelle]

::dsfr-doc-pin[Un champ]{required=true}

::dsfr-doc-pin[Un chevron orienté vers le bas]{add="indiquant que la liste se déroule" required=true}

:::

### Variations

**Liste déroulante avec texte d’aide**

::dsfr-doc-storybook{storyId=select--hint}

Il est recommandé d’ajouter un texte d’aide sous le libellé de la liste déroulante afin de faciliter le choix de l’usager.

### Tailles

La largeur de la liste déroulante s’adapte à la taille de son conteneur.

### États

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

::dsfr-doc-storybook{storyId=select--select args="{ status: error }"}

**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

::dsfr-doc-storybook{storyId=select--select args="{ status: valid }"}

**Etat désactivé**

L'état désactivé indique que l’usager ne peux pas interagir avec la liste déroulante.

::dsfr-doc-storybook{storyId=select--select args="{ disabled: true }"}

Cet état peut être utilisé pour empêcher l'utilisateur d'interagir avec la liste jusqu'à ce qu'une autre action soit terminée.

### Personnalisation

La liste déroulante n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#liste-déroulante).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement une typographie noire.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des textes.

:::

::::
