---
title: Accessibilité de la barre de recherche
---

# Barre de recherche

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Barre de recherche** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le champ de recherche :

- `Tab` : Place le focus sur le bouton de recherche.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

Lorsque le focus est positionné sur le bouton de recherche :

- `Entrée` : Lance la recherche.
- `Tab` : Place le focus sur l'élément focalisable suivant.
- `shift + Tab` : Place le focus sur le champ de recherche.

### Règles d'accessibilité

- Le champ de recherche `<input>` de type `search` doit être associé à un `<label>` pour indiquer son libellé. L'attribut `for` du `<label>` doit correspondre à l'attribut `id` de l'`<input>`.
- Le bouton de recherche `<button>` doit avoir un attribut `title` et un texte explicite pour indiquer son action.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
