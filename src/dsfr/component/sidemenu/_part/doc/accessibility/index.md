---
title: Accessibilité du Menu latéral
---

## Menu latéral

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Menu latéral** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

- `Entrée` ou `Espace` :
    - Lorsque le focus est placé sur le bouton d'ouverture du menu latéral, et que sa sous-section associée est fermée, ouvre la sous-section.
    - Lorsque le focus est placé sur le bouton d'ouverture du menu latéral, et que sa sous-section associée est déjà ouverte, referme la sous-section.
- `Tab` : Place le focus sur le prochain élément focalisable. Tous les éléments focalisables placés dans la sous-section sont inclus dans la séquence des éléments accessibles au `tab` de la page.
- `shift` + `Tab` : Place le focus sur l'élément focalisable précédent. Tous les éléments focalisables placés dans la sous-section sont inclus dans la séquence des éléments accessibles au `tab` de la page.


#### Règles d'accessibilité

- Le conteneur principal du menu latéral a l'attribut `aria-labelledby` défini sur l'ID du titre du menu latéral.
- Le bouton d'ouverture du menu latéral a l'attribut `aria-controls` défini sur l'ID de la sous-section.
- Si la sous-section associée au bouton d'ouverture du menu latéral est visible, le bouton a l'attribut `aria-expanded` défini sur "true". Si la sous-section n'est pas visible, `aria-expanded` est défini sur "false".
- Si la sous-section associée au bouton d'ouverture du menu latéral est active, le bouton a l'attribut `aria-current` défini sur "true". Si la sous-section n'est pas active, `aria-current` est défini sur "false".
- Le lien actif de la liste du menu latéral a l'attribut `aria-current` défini sur "page".

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
