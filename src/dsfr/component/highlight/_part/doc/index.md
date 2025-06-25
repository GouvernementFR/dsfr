---
title: Mise en exergue
shortTitle: Mise en exergue
titleId: Highlight
description: La mise en exergue est un composant éditorial destiné à distinguer une information importante au sein du contenu principal d’une page.
shortDescription: Mettre en évidence une information essentielle.
keywords: mise en exergue, contenu, composant éditorial, UX, design system, accessibilité, information, page, interface, valorisation
cover: ./_asset/cover/cover.png
excerpt: Le composant Mise en exergue permet de faire ressortir une information capitale intégrée dans le contenu principal, tout en respectant les principes de lisibilité et de hiérarchisation.
summary: Ce contenu décrit le composant Mise en exergue comme un outil d’identification rapide d’informations clés au sein d’un texte. Il précise ses usages, le distingue de la mise en avant, et détaille les bonnes pratiques de mise en forme pour assurer sa visibilité. L’alignement, la position dans la page et la nature du contenu sont essentiels à son efficacité. Ce guide est destiné aux créateurs de contenu et designers cherchant à hiérarchiser l’information de manière claire et accessible.
---

## Mise en exergue

La mise en exergue est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=highlight--highlight}

### Quand utiliser ce composant ?

Utiliser la mise en exergue pour distinguer une information importante au sein du contenu principal d’une page (par exemple, une reformulation ou une reprise de texte).

Elle permet une identification rapide et facile par l’usager.

> [!WARNING]
> Bien différencier la mise en exergue de la mise en avant.
> La [mise en avant](../../../callout/_part/doc/index.md) est utilisée pour mettre l’accent sur une information complémentaire au contenu principal.

### Comment utiliser ce composant ?

- **Insérer la mise en exergue** au sein d’un contenu éditorial.
- **Conserver l’écart prévu** afin que la mise en exergue ne soit pas alignée à gauche avec le corps du texte.  Cela permet notamment de l’identifier plus facilement.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Intégrer une mise en exergue au sein d’un contenu en conservant l’alinéa prévu. L’objectif étant d’opérer une distinction.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas minimiser la mise en exergue au sein du contenu en alignant la bordure au corps du texte.

:::

::::

- **Adapter l’usage de la mise en exergue à l’information que vous souhaitez relayée**. Par exemple, les messages d’erreur ou de confirmation ne sont pas considérés comme des mises en avant mais bien des [alertes](../../../alert/_part/doc/index.md).

### Règles éditoriales

- **Présenter l’information de façon synthétique** afin qu’elle soit facilement lue et comprise de l’usager.
