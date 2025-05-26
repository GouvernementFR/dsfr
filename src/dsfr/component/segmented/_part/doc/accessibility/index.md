---
title: Accessibilité du contrôle segmenté
shortTitle: Accessibilité du contrôle segmenté
description: Le contrôle segmenté permet à l’usager de choisir une vue parmi plusieurs options d’affichage disponibles dans une interface.
shortDescription: Sélection de vues avec un contrôle segmenté.
keywords: contrôle segmenté, vue, affichage, interface, UX, UI, design system, libellé, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Ce document présente le contrôle segmenté comme un moyen de basculer entre différentes vues d’un même contenu tout en assurant clarté et cohérence dans l’interface.
summary: Ce contenu décrit l’usage du contrôle segmenté dans les interfaces pour permettre à l’usager de basculer entre plusieurs types d’affichage d’un même contenu, comme une vue en liste ou en carte. Il insiste sur les bonnes pratiques à respecter telles que la limitation du nombre de segments, la nécessité d’un libellé clair pour chaque option et l’obligation d’une valeur par défaut. Ce guide s’adresse aux concepteurs et développeurs souhaitant garantir une navigation fluide, explicite et accessible.
---

# Contrôle segmenté

Le contrôle segmenté est un élément d’interaction avec l’interface permettant à l'usager de choisir un type de vue parmi plusieurs options d'affichage disponibles.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Contrôle segmenté** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur un segment :

- `Flèche droite` ou `Flèche du bas` : Sélectionne le segment suivant.
- `Flèche gauche` ou `Flèche du haut` : Sélectionne le segment précédent.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Le contrôle segmenté doit être utilisée pour permettre à l'utilisateur de sélectionner **une seule option** parmi la liste des segments.
- Le contrôle segmenté doit être contenu dans un élément `<fieldset>` et contenir un élément `<legend>` qui fait office de libellé pour le contrôle segmenté.
- Chaque segment `<input>` de type `radio` du contrôle segmenté doit être associé à un `<label>` pour indiquer son libellé. L'attribut `for` du `<label>` doit correspondre à l'attribut `id` de l'`<input>`.
- Les **segments d'un contrôle segmenté sont liés** par leur attribut `name`. Les éléments `<input>` de type `radio` d'un même contrôle segmenté doivent avoir le même attribut `name`.
- Le **libellé des segments** doit être explicite et décrire clairement l'option que le segment représente.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
