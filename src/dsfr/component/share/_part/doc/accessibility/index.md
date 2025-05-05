---
title: Accessibilité du Partage
---

## Partage

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Partage** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Lorsque le focus est positionné sur un lien de partage :

- `Entrée` : Actionne le Lien.
  - Redirige vers la destination définie par l'attribut `href`.
  - Déplace le focus vers la page de destination.
  - Si le lien est en `target="_blank"`, ouvre la destination dans un nouvel onglet.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

#### Règles d'accessibilité

- Voir les [règles d'accessibilité du composant Lien](../../../../link/_part/doc/accessibility/index.md#regles-d-accessibilite) pour les liens de partage.

### Références

- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
