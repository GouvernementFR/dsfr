---
title: Accessibilité de la modale
---

# Modale

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Modale** utilise le motif de conception ARIA WAI "Dialog (Modal)" et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le bouton de la modale :

- `Entrée` ou `Espace` :
  - Lorsque le focus est placé sur le bouton d'ouverture de la modale, ouvre la modale et place le focus sur le bouton de fermeture de la modale.
- `Esc` : Lorsque la modale est ouverte, referme la modale et place le focus sur le bouton d'ouverture de la modale.
- `Tab` :
  - Lorsque le focus est placé à l'interieur de la modale celui-ci ne peut pas sortir de la modale. Cette dernière doit être fermée afin de reprendre la navigation dans la page courante. À cet effet, le focus est repositionné sur le bouton qui a permis d'ouvrir la modale.
  - Place le focus sur le prochain élément focalisable de la modale. Tous les éléments focalisables placés dans la modale sont inclus dans la séquence des éléments accessibles au `tab` de la page.
- `shift` + `Tab` : Place le focus sur l'élément focalisable précédent. Tous les éléments focalisables placés dans la modale sont inclus dans la séquence des éléments accessibles au `tab` de la page.

### Règles d'accessibilité

- Le bouton d'ouverture de la modale est de type="button".
  - Le bouton d'ouverture de la modale a l'attribut `aria-controls` défini sur l'ID de la modale.
  - Si la modale est visible, le bouton a l'attribut `data-fr-opened` défini sur true. Si la modale n'est pas visible, `data-fr-opened` est défini sur false.
- La modale est un élément HTML "dialog" et dispose d'un attribut `aria-modal="true"` pour indiquer aux lecteurs d'écran que l'élément est une modale lorsqu'il est affiché.
  - La modale dispose d'un attribut `aria-labelledby` défini sur l'ID du titre de la modale.
- La modale contient un titre de niveau `H1`.
- La modale contient un bouton de fermeture de type="button".
  - Le bouton de fermeture de la modale dispose d'un attribut `aria-controls` défini sur l'ID de la modale.

### Références

- [https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
