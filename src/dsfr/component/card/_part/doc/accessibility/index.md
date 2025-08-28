---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Carte
shortTitle: Accessibilité de la Carte
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Carte.
shortDescription: Carte cliquable redirigeant vers une page éditoriale avec aperçu.
keywords: carte, composant, aperçu, lien, redirection, contenu, média, badge, tag, bouton, DSFR, tuile
cover: ../_asset/cover/cover.png
excerpt: Le composant carte permet d’accéder à un contenu éditorial à partir d’un aperçu visuel structuré, sous forme verticale ou horizontale.
summary: Le composant carte est un point d’entrée vers une page éditoriale ou un contenu spécifique. Il permet d’afficher un aperçu clair à travers une structure visuelle contenant un titre, une description, des éléments comme badges ou tags, une image ou vidéo, et des actions. Il existe en formats vertical et horizontal, en plusieurs tailles, et peut inclure des variations esthétiques comme le fond gris ou l’absence de bordure. Des règles UX précises guident son usage pour garantir la cohérence, l’accessibilité et la bonne hiérarchisation de l’information.
mesh:
  - component/badge
  - component/tag
  - component/tile
---

## Carte

La carte est un élément d’interaction avec l’interface permettant de rediriger l’usager vers une page éditoriale donc elle donne un aperçu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Carte** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h3>`.
- Les éléments média, description, badges, tags, détails, boutons sont situés après le titre dans le code HTML.
- L’image de la carte peut être décorative ou porteuse d’information selon le contexte.

#### Zone cliquable étendue

- Le lien est placé uniquement sur le titre de la carte qui doit être explicite.
- Si aucun autre élément cliquable n’est présent dans la carte, il est possible d’étendre la zone cliquable du lien à toute la carte pour améliorer l’expérience utilisateur.
- L’indication de prise de focus se positionne alors autour de la carte plutôt qu’autour du lien.

Voir les [règles d’accessibilité du composant Lien](../../../../link/_part/doc/accessibility/index.md#regles-d-accessibilite).

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Carte.

### Critères RGAA applicables

- **Images&nbsp;:** 1.1, 1.2, 1.3
- **Couleurs&nbsp;:** 3.2
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
