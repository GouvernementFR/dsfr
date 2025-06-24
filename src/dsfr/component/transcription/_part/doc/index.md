---
title: Transcription
shortTitle: Transcription
titleId: Transcription
description: Présentation du composant Transcription destiné à afficher un texte associé à un contenu média dans une interface.
shortDescription: Affichage de texte lié à un contenu média
keywords: transcription, composant, contenu média, accessibilité, modale, accordéon, design système, DSFR
cover: ./_asset/cover/cover.png
excerpt: Le composant Transcription permet de proposer un texte associé à un contenu média, à afficher ou masquer dans une interface, sous forme d’accordéon ou de modale.
summary: Ce composant facilite l’accès au texte d’une vidéo ou d’un média pour les usagers qui en ont besoin, en l’affichant sur la même page dans une zone repliable ou via une modale. Il est conçu pour garantir une lecture simultanée fluide et accessible, avec une structure claire et des règles d’intégration strictes.
---

## Transcription

La transcription est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer le texte traduisant un contenu média au sein d’une page.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=transcription--transcription}

### Quand utiliser ce composant ?

Proposer une transcription pour accompagnée un [contenu média](../../../content/_part/doc/index.md), en la plaçant directement sous ce dernier, dans une zone à déployer au clic.

### Comment utiliser ce composant ?

- **Garantir que la zone à déployer et le contenu tiennent sur un même écran**, sans nécessiter de défilement.
- **Afficher la transcription sur la même page que le contenu média** pour permettre la lecture simultanée.
- **Masquer la transcription quand celle-ci est longue**, dans une zone à développer au clic ou sur une page séparée (modale) atteinte via un lien.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Ajouter la transcription directement sous le contenu média associé, accessible simultanément.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas positionner la transcription avant le contenu média ou trop loin, pour que les deux soient consultés en même temps.
:::

::::

### Règles éditoriales

- **Proposer une transcription textuelle pertinente et accessible**.
