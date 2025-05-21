---
title: Accessibilité de la Pagination
shortTitle: Accessibilité de la Pagination
description: Présentation du composant Pagination permettant à l’usager de naviguer facilement entre les pages d’une liste d’éléments trop longue pour être affichée en une seule fois.
shortDescription: Navigation entre plusieurs pages d’une liste
keywords: pagination, navigation, pages, liste, interface, design système, DSFR, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le composant Pagination permet à l’usager de parcourir les différentes pages d’une liste d’éléments, avec des repères clairs, une troncature automatique et des actions de navigation simples.
summary: Ce composant permet de diviser une liste importante d’éléments en plusieurs pages pour améliorer la lisibilité et l’expérience de navigation. Il intègre des repères de position, des boutons d’accès direct et une gestion responsive adaptée. Sa structure fixe garantit la cohérence et l’accessibilité dans l’ensemble des parcours utilisateurs tout en optimisant le référencement du contenu.
---

## Pagination

La pagination est un système de navigation qui permet à l’usager de naviguer entre les différentes pages d’une liste d’éléments.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Pagination** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Lorsque le focus est positionné sur le composant pagination :

- `Tab` : Place le focus sur le prochain lien actif de pagination.
- `shift + tab` : Place le focus sur le lien actif précédent de pagination.

#### Règles d'accessibilité

- Placer la pagination après le contenu principal `<main>` dans le DOM.
- Le conteneur principal de la pagination utilise l’attribut `role="navigation"` pour indiquer qu'il s'agit d'une zone de navigation.
- L’attribut `aria-label="pagination"` est utilisé pour donner un contexte explicite à la navigation.
- Le lien vers la page actuelle dans la pagination utilise l’attribut `aria-current="page"` pour identifier l'élément représentant la page active.
- Les liens disposent d'un attribut `title` de façon à ce qu’ils indiquent explicitement leur fonction.
- Les liens désactivés n’ont pas d’attribut `href`, et possèdent les attributs `aria-disabled="true"` et `role="link"`.
- L’ordre des éléments dans le DOM respecte la logique de navigation.

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
