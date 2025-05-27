---
title: Accessibilité des paramètres d'affichage
shortTitle: Accessibilité des paramètres d'affichage
description: Le composant Paramètres d’affichage permet à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.
shortDescription: Choisir le thème clair ou sombre d’un site.
keywords: paramètres d’affichage, thème clair, thème sombre, accessibilité, modale, interface, design system, expérience utilisateur, header, footer
cover: ../_asset/cover/cover.png
excerpt: Le composant Paramètres d’affichage permet de basculer entre un thème clair ou sombre. Il s’intègre dans l’en-tête ou le pied de page et s’utilise via une modale dédiée.
summary: Ce document décrit les usages du composant Paramètres d’affichage, qui offre à l’usager le choix entre un thème clair ou sombre pour améliorer son confort de navigation. Il précise où et comment intégrer ce composant, les comportements attendus lors de l’ouverture de la modale et la gestion de l’arrière-plan. Le changement de thème s’opère instantanément, sans validation supplémentaire. Ce guide s’adresse aux concepteurs souhaitant offrir une personnalisation simple et accessible de l’interface.
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

### Accessibilité

Le composant **Paramètre d'affichage** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Paramètre d'affichage**.

Les interactions clavier sont celles liées à la [modale](../../../../modal/_part/doc/accessibility/index.md), aux [boutons](../../../../button/_part/doc/accessibility/index.md), et aux [boutons radios](../../../../radio/_part/doc/accessibility/index.md).

#### Règles d'accessibilité

- Privilégier le thème système par défaut pour garantir une expérience utilisateur optimale.
- Le thème change automatiquement au clic sur un bouton radio.
- Si l’utilisateur effectue un changement de thème, son choix est conservé (dans le local storage) pour les visites ultérieures.
- Les règles d'accessibilité des [boutons]((../../../../button/_part/doc/accessibility/index.md), de la [modale](../../../../modal/_part/doc/accessibility/index.md), et des [boutons radios](../../../../radio/_part/doc/accessibility/index.md) doivent être respectées.

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
