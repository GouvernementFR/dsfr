---
title: Onglet
shortTitle: Onglet
titleId: Tab
description: Présentation du composant Onglets pour structurer du contenu lié dans un espace restreint avec des recommandations d’usage et d’accessibilité.
shortDescription: Structuration de contenu avec des onglets
keywords: onglets, composant, interface, navigation, accessibilité, design système, UX, DSFR
cover: ./_asset/cover/cover.png
excerpt: Le composant Onglets permet de regrouper plusieurs sections de contenu dans un espace réduit en affichant une seule section à la fois. Il est utile pour simplifier la lecture et améliorer l’expérience utilisateur.
summary: Cette fiche détaille le fonctionnement du composant Onglets du design système de l’État. Elle décrit ses usages recommandés, ses règles d’intégration et d’accessibilité, ainsi que son comportement responsive. Le contenu est destiné aux équipes design et développement souhaitant structurer des interfaces avec plusieurs sections de contenu apparentées tout en maintenant une expérience claire et fluide.
---

## Onglet

Le système d’onglets permet de structurer et de présenter plusieurs sections de contenu liées, en affichant une seule section à la fois dans un espace limité.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=tabs--tabs}

### Quand utiliser ce composant ?

Utiliser le système d'onglets pour regrouper du contenu lié dans un espace limité ou diviser un contenu dense en sections accessibles individuellement, afin de faciliter la lecture pour l’usager.

> [!NOTE]
> Il est recommandé d’utiliser des onglets si vous avez moins de 5 sections. Si vous avez plus de 5 sections, utilisez plutôt des [accordéons](../../../accordion/_part/doc/index.md)<br>
> N’utilisez pas les onglets pour naviguer entre différentes pages, préférez un menu latéral ou un sommaire.

### Comment utiliser ce composant ?

- **Trier les onglets en fonction des besoins des usagers**, en plaçant le plus important en premier.
- **Séparer le contenu utilement, en sections clairement identifiées**. Dans le cas contraire, les onglets perdent de leur pertinence.
- **Adapter leur utilisation au contexte**. Les onglets ne doivent pas être utilisés si l’usager a besoin de lire le contenu de l’ensemble des sections.
- **Intégrer les onglets dans des pages de contenu de préférence courtes** afin qu’ils ne se perdent pas dans la masse d’information. L’usager doit pouvoir y revenir facilement si nécessaire.

### Règles éditoriales

- **Rédiger un titre d’onglet clair, explicite et concis**. L’utilisateur doit comprendre facilement le contenu proposé par chacun des onglets.
