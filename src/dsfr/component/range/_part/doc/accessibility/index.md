---
title: Accessibilité du curseur
---

# Curseur

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Curseur** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le curseur :

- `Tab` : Place le focus sur l'élément focalisable suivant.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.
- `Flèche gauche` ou `Flèche bas` : Diminue la valeur du curseur.
- `Flèche droite` ou `Flèche haut` : Augmente la valeur du curseur.

### Règles d'accessibilité

- Le curseur `<input>` de type `range` doit être associé à un `<label>` pour indiquer son libellé. L'attribut `aria-labelledby` de l'`<input>` doit correspondre à l'attribut `id` du `<label>`.
- Un **message** d'erreur ou de succès peut être associé au curseur. Son attribut `id` doit être associé à l'attribut `aria-describedby` du curseur. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé au technologies d'assistance en utilisant l'attribut `aria-live="polite"`.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
