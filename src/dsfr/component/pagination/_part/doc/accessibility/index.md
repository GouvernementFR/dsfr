---
title: Accessibilité de la pagination
---

## Pagination

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
