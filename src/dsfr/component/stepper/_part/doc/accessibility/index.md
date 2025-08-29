---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Indicateur d'étapes
shortTitle: Accessibilité de l'Indicateur d’étapes
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Indicateur d'étapes.
shortDescription: Suivi d’un parcours en plusieurs étapes
keywords: indicateur d’étapes, formulaire, démarche, progression, design système, DSFR, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: L’indicateur d’étapes permet à l’usager de se repérer dans un processus linéaire, en affichant la position actuelle dans le parcours ainsi que les étapes restantes.
summary: Ce composant s’intègre dans les parcours à étapes pour aider l’usager à visualiser son avancée. Il affiche une barre de progression, un titre explicite pour chaque étape et un repère numérique. Il ne permet pas de navigation directe entre les étapes mais accompagne visuellement l’usager du début à la fin du formulaire. Sa structure est fixe, sans personnalisation, pour garantir une expérience uniforme et accessible.
mesh:
  - component/input
  - component/form
---

## Indicateur d’étapes

L’indicateur d'étapes est un élément éditorial permettant d’accompagner l’usager au sein d’un formulaire ou une démarche en plusieurs étapes.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Indicateur d'étapes** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Indicateur d’étapes**.

### Règles d’accessibilité

- Le titre de l’étape en cours est contenu dans un élément `<hx>`.
- Le nom de l’étape suivante est dans un élément `<p>`.
- La barre de progression ne nécessite aucune alternative ni attribut ARIA (car purement illustrative).

### Contrastes de couleurs

Le composant Indicateur d’étapes est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Indicateur d’étapes.

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2
- **Éléments obligatoires&nbsp;** 8.9
- **Structuration&nbsp;:** 9.1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.4, 10.5, 10.11, 10.12
- **Consultation&nbsp;:** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
