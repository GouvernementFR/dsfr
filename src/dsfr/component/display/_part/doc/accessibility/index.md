---
boost: 0
sitemap:
  noindex: true
title: Accessibilité des Paramètres d'affichage
shortTitle: Accessibilité des Paramètres d'affichage
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Paramètres d'affichage.
shortDescription: Choisir le thème clair ou sombre d’un site.
keywords: paramètres d’affichage, thème clair, thème sombre, accessibilité, modale, interface, design system, expérience utilisateur, header, footer
cover: ../_asset/cover/cover.png
excerpt: Le composant Paramètres d’affichage permet de basculer entre un thème clair ou sombre. Il s’intègre dans l’en-tête ou le pied de page et s’utilise via une modale dédiée.
summary: Ce document décrit les usages du composant Paramètres d’affichage, qui offre à l’usager le choix entre un thème clair ou sombre pour améliorer son confort de navigation. Il précise où et comment intégrer ce composant, les comportements attendus lors de l’ouverture de la modale et la gestion de l’arrière-plan. Le changement de thème s’opère instantanément, sans validation supplémentaire. Ce guide s’adresse aux concepteurs souhaitant offrir une personnalisation simple et accessible de l’interface.
mesh:
  - component/header
  - component/modal
  - component/footer
---

## Paramètres d'affichage

Les paramètres d’affichage représentent un parcours simple permettant à l’usager d’interagir avec l’interface afin de modifier le thème d’un site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Paramètres d’affichage** est conçu pour être accessible et respecter les critères du RGAA.

Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Paramètre d'affichage**.

Les interactions clavier sont celles liées à la [modale](../../../../modal/_part/doc/accessibility/index.md), aux [boutons](../../../../button/_part/doc/accessibility/index.md), et aux [boutons radios](../../../../radio/_part/doc/accessibility/index.md).

### Règles d’accessibilité

- Si la gestion du thème est activée, toujours intégrer le composant Paramètre d'affichage pour laisser la possibilité à l’utilisateur de choisir l’affichage qui lui convient le mieux.
- Privilégier le thème système par défaut pour garantir une expérience utilisateur optimale.
- Si l’utilisateur effectue un changement de thème, son choix est conservé (dans le local storage) pour les visites ultérieures.

Respecter les règles d’accessibilité pour&nbsp;:

- les [boutons](../../../../button/_part/doc/accessibility/index.md),
- la [modale](../../../../modal/_part/doc/accessibility/index.md),
- les [boutons radio](../../../../radio/_part/doc/accessibility/index.md).

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Scripts&nbsp;:** 7.1, 7.3
- **Structuration&nbsp;:** 9.1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.10, 13.11, 13.12

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Ressources

- [Thème sombre et accessibilité](https://stephaniewalter.design/fr/blog/theme-sombre-dark-mode-et-mythe-daccessibilite/)
