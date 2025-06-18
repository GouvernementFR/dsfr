---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la tuile
shortTitle: Accessibilité de la tuile
description: Le composant Tuile permet de créer des points d’entrée vers des pages de contenu au sein d’interfaces organisées.
shortDescription: Rediriger l’usager vers du contenu via des tuiles.
keywords: tuile, composant, design system, interface, navigation, contenu, accessibilité, UX, UI, carte
cover: ../_asset/cover/cover.png
excerpt: Ce guide présente le composant Tuile comme un élément de navigation vers des contenus, avec des recommandations d’usage et des règles éditoriales pour assurer cohérence et clarté.
summary: Ce contenu décrit l’usage du composant Tuile dans un design system. Il précise son rôle dans la navigation vers des pages de contenu, ses différences avec le composant Carte, et les bonnes pratiques à adopter pour garantir une présentation cohérente dans les listes ou collections. Ce guide s’adresse aux concepteurs et développeurs souhaitant structurer visuellement des ensembles de liens tout en assurant une expérience utilisateur fluide et accessible.
---

## Tuile

La tuile est un élément d’interaction avec l’interface permettant de rediriger l’usager vers des pages de contenu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Tuile** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h3>`.
- Les éléments description, badges, tags, détails sont situés après le titre dans le code HTML.
- L’image de la tuile est décorative.

#### Zone cliquable étendue

- Le lien est placé uniquement sur le titre de la tuile qui doit être explicite.
- Si aucun autre élément cliquable n’est présent dans la tuile, il est possible d’étendre la zone cliquable du lien à toute la tuile pour améliorer l’expérience utilisateur.
- L’indication de prise de focus se positionne alors autour de la tuile plutôt qu’autour du lien.

Voir les [règles d’accessibilité du composant Lien](../../../../link/_part/doc/accessibility/index.md#regles-d-accessibilite).

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Tuile.

### Critères RGAA applicables

- **Images&nbsp;:** 1.2
- **Couleurs&nbsp;:** 3.2
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)