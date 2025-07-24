---
title: Partage
shortTitle: Partage
titleId: Share
description: Présentation du composant Partage permettant à l’usager de diffuser un contenu via les réseaux sociaux, un email ou un lien direct.
shortDescription: Partager un contenu via différents canaux
keywords: partage, réseaux sociaux, interaction, DSFR, accessibilité, design système, bouton, lien
cover: ./_asset/cover/cover.png
excerpt: Le composant Partage permet à l’usager de diffuser une page ou un contenu en quelques clics à travers plusieurs canaux comme les réseaux sociaux, l’email ou un lien copié.
summary: Ce composant facilite la diffusion de contenus numériques en permettant aux usagers de partager une page via des boutons accessibles et adaptés à chaque canal. Il garantit une intégration cohérente avec les règles d’accessibilité, une présentation compacte et une compatibilité avec les outils de gestion du consentement pour les services tiers.
mesh:
  - component/button
---

## Partage

Le partage est un groupe d’éléments d’interaction avec l’interface permettant à l’usager de partager le contenu consulté via différents canaux.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=share--share}

### Quand utiliser ce composant ?

**Utiliser le partage pour permettre à l’usager de partager facilement le contenu qu’il consulte** à d’autres usagers, via les réseaux sociaux, par le biais d’un envoi par mail ou en copiant simplement le lien de la page.

### Comment utiliser ce composant ?

- **Conserver des boutons et liens d’icônes seules**. Ces derniers sont assez explicites pour ne pas avoir a être accompagnés de libellés visible.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas ajouter le nom du réseau en libellé du bouton, en plus de l’icône.

:::

::::

- **Positionner le partage en haut ou en bas** de vos pages de contenu riches.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Positionner le partage en haut de page.

:::

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Positionner le partage en bas de page.
:::

::::

- **Rationaliser le nombre d’éléments proposés** afin que le partage reste sur une même ligne et ne prenne pas trop de place. Il est recommandé de ne pas excéder 5 boutons (3 liens pour les réseaux sociaux et les deux boutons de partage, par exemple).

### Règles éditoriales

Le partage n’est régit par aucune règle éditoriale spécifique.
