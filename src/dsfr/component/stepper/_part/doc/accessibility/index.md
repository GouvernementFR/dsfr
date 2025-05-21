---
title: Accessibilité de l'Indicateur d'étapes
shortTitle: Accessibilité de l'Indicateur d’étapes
description: Présentation du composant Indicateur d’étapes destiné à guider l’usager au sein d’un parcours en plusieurs étapes comme un formulaire ou une démarche en ligne.
shortDescription: Suivi d’un parcours en plusieurs étapes
keywords: indicateur d’étapes, formulaire, démarche, progression, design système, DSFR, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: L’indicateur d’étapes permet à l’usager de se repérer dans un processus linéaire, en affichant la position actuelle dans le parcours ainsi que les étapes restantes.
summary: Ce composant s’intègre dans les parcours à étapes pour aider l’usager à visualiser son avancée. Il affiche une barre de progression, un titre explicite pour chaque étape et un repère numérique. Il ne permet pas de navigation directe entre les étapes mais accompagne visuellement l’usager du début à la fin du formulaire. Sa structure est fixe, sans personnalisation, pour garantir une expérience uniforme et accessible.
---

## Indicateur d'étapes

L’indicateur d'étapes est un élément éditorial permettant d’accompagner l’usager au sein d’un formulaire ou une démarche en plusieurs étapes.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Indicateur d'étapes** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Indicateur d'étapes**.

#### Règles d'accessibilité

- Le titre de l’étape en cours est contenu dans un élément `<hx>`.
- Le nom de l'étape suivante est dans un élément `<p>`.
- La barre de progression ne nécessite aucune alternative ni attribut aria (car purement illustrative).

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
