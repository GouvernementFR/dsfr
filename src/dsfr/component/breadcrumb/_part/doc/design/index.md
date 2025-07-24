---
boost: 0
sitemap:
  noindex: true
title: Design du fil d'Ariane
shortTitle: Design du fil d’Ariane
description: Le fil d’Ariane est un composant de navigation secondaire permettant à l’usager de se repérer dans l’arborescence d’un site et de revenir à un niveau supérieur.
shortDescription: Se repérer dans l’arborescence avec le fil d’Ariane.
keywords: fil d’Ariane, navigation, arborescence, hiérarchie, composant, UX, design system, position, retour, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le fil d’Ariane est un outil de navigation essentiel pour guider l’usager dans une structure de site complexe. Il indique la position courante et facilite les retours à des pages de niveau supérieur.
summary: Ce document présente le fil d’Ariane comme un composant fondamental de navigation secondaire. Il explique quand l’utiliser, comment le positionner correctement dans la page, les règles de cliquabilité, les restrictions liées au fond et les principes éditoriaux à respecter. Le fil d’Ariane renforce l’orientation de l’usager en lui offrant un repère visuel clair dans l’architecture du site. Ce guide s’adresse aux designers et intégrateurs souhaitant garantir une navigation fluide et cohérente dans des environnements complexes.
mesh:
  - component/header
  - component/navigation
---

## Fil d'Ariane

Le fil d’Ariane est un système de navigation secondaire qui permet à l’usager de se situer sur le site qu’il consulte.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du fil d'Ariane](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un lien vers la racine du site (page d’accueil)]{required=true}

::dsfr-doc-pin[Des liens vers les pages depuis la racine du site]{add="si la hiérarchie du site comporte plus d’un niveau" required=true}

::dsfr-doc-pin[Texte de la page courante]{add='seul élément non cliquable' required=true}

:::

### Variations

**Version mobile**

Le fil d’Ariane doit être maintenu sur mobile et apparaître de la manière suivante :

::dsfr-doc-storybook{storyId=breadcrumb--breadcrumb width=375}

- Afficher par défaut un bouton “Voir le fil d’Ariane”.
- Faire apparaître le fil d’Ariane au clic sur le bouton, sur plusieurs lignes si nécessaire.

### Tailles

La largeur du fil d’Ariane s’adapte à son contenu, tout en étant dépendante de la taille du conteneur principal de la page.

### États

Le fil d’Ariane n’est sujet à aucun changement d’état.

### Personnalisation

Le fil d’Ariane n’est pas personnalisable.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas changer la structure du fil d’Ariane.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas changer la couleur du texte du fil d’Ariane.

:::

::::
