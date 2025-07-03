---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du contrôle segmenté
shortTitle: Accessibilité du contrôle segmenté
description: Le contrôle segmenté permet à l’usager de choisir une vue parmi plusieurs options d’affichage disponibles dans une interface.
shortDescription: Sélection de vues avec un contrôle segmenté.
keywords: contrôle segmenté, vue, affichage, interface, UX, UI, design system, libellé, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Ce document présente le contrôle segmenté comme un moyen de basculer entre différentes vues d’un même contenu tout en assurant clarté et cohérence dans l’interface.
summary: Ce contenu décrit l’usage du contrôle segmenté dans les interfaces pour permettre à l’usager de basculer entre plusieurs types d’affichage d’un même contenu, comme une vue en liste ou en carte. Il insiste sur les bonnes pratiques à respecter telles que la limitation du nombre de segments, la nécessité d’un libellé clair pour chaque option et l’obligation d’une valeur par défaut. Ce guide s’adresse aux concepteurs et développeurs souhaitant garantir une navigation fluide, explicite et accessible.
mesh:
  - component/form
---

## Contrôle segmenté

Le contrôle segmenté est un élément d’interaction avec l’interface permettant à l'usager de choisir un type de vue parmi plusieurs options d'affichage disponibles.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Contrôle segmenté** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur un segment&nbsp;:

- `Flèche droite` ou `Flèche du bas`&nbsp;: sélectionne le segment suivant.
- `Flèche gauche` ou `Flèche du haut`&nbsp;: sélectionne le segment précédent.

### Règles d’accessibilité

L’ensemble des règles d’accessibilité du [champs de saisie](../../../../input/_part/doc/accessibility/index.md) doivent être respectées.

#### Structuration

- Le contrôle segmenté est contenu dans un élément `<fieldset>` avec élément `<legend>`.
- Chaque segment est un `<input>` de type `radio`.
- Les **segments d’un contrôle segmenté sont liés** par leur attribut `name` qui doit être identique.
- Le **libellé des segments** doit être explicite et décrire clairement l'option que le segment représente.

#### Contrastes de couleurs

Le composant **Contrôle segmenté** est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Contrôle segmenté.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
