---
title: Accessibilité du Tag
---

## Tag

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Tag** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Lorsque le focus est positionné sur le tag :

- `Entrée` ou `Espace` : Active le tag cliquable, activable ou supprimable.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

#### Règles d'accessibilité

- Chaque **tag cliquable** doit être un élément `<a>` ou `<button>` pour être accessible au clavier.
    - Un attribut `title` peut être ajouté pour préciser la cible du lien.
- Un **tag supprimable** doit avoir un libellé explicite pour les technologies d'assistance, l’attribut `aria-label` doit contenir le libellé "Retirer" suivi de l’intitulé du filtre visible à l'écran.

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
