---
title: Lien
shortTitle: Lien
titleId: Link
description: Présentation du composant Lien permettant à l’usager d’accéder à un autre contenu, sur la même page ou sur une autre page, interne ou externe.
shortDescription: Navigation secondaire vers d’autres contenus
keywords: lien, navigation, ancre, téléchargement, retour, DSFR, accessibilité
cover: ./_asset/cover/cover.png
excerpt: Le composant Lien facilite la navigation de l’usager dans une même page, vers une autre page du site ou vers un site tiers, en complément de la navigation principale.
summary: Le lien est un composant essentiel pour structurer la navigation au sein des interfaces numériques. Il se décline en différentes formes selon son usage - dans un texte, hors contenu, vers une page externe ou pour un téléchargement. Non personnalisable, il suit des règles d’usage strictes afin de préserver la lisibilité, l’accessibilité et l’uniformité graphique. Son usage s’inscrit dans une hiérarchie d’interaction bien définie, distincte de celle du bouton.
mesh:
  - component/breadcrumb
  - component/sidemenu
  - component/summary
---

## Lien

Le lien est un système de navigation secondaire qui permet à l’usager de se déplacer au sein d’une même page, entre deux pages d’un même site ou vers un site externe.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=link--link}

### Quand utiliser ce composant ?

Proposer le lien pour permettre à l’usager de naviguer au sein d’un site, en complément de la [navigation principale](../../../navigation/_part/doc/index.md).

> [!NOTE]
> Bien différencier le lien des autres composant permettant une interaction avec l’interface.

Le lien a vocation à faciliter la navigation vers d’autres contenus. Pour les actions d’un autre type, comme la soumission d’un formulaire par exemple, il faut utiliser [le bouton](../../../button/_part/doc/index.md).

### Comment utiliser ce composant ?

- **Utiliser le lien pour renvoyer l’usager vers davantage de contenus**.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Proposer un lien pour consulter plus d’actualités.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas utiliser un bouton pour renvoyer vers davantage de contenus.

:::

::::

- **Adapter le type de lien choisi au besoin rencontré**. Par exemple, le lien simple ne doit pas être utilisé au sein d’un paragraphe mais bien en dehors de tout contenu. Pour insérer un lien dans un paragraphe, utiliser les liens contextuels au fil du texte.
- **Eviter de démultiplier les liens** au sein d’une même page afin de préserver une navigation simple et claire par l’usager.

### Règles éditoriales

- **Privilégier des liens courts et explicites** garantissant la compréhension de l’usager.
