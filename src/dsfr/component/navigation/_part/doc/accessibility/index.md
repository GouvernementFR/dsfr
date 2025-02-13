---
title: Accessibilité de la Navigation principale
---

## Navigation principale

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Navigation principale** est conçu pour être accessible et suit les critères du RGAA.

Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

- `Entrée` ou `Espace` :
    - Lorsque le focus est placé sur un bouton d'ouverture de sous-section de la navigation principale, et que sa sous-section associée est fermée, ouvre la sous-section.
    - Lorsque le focus est placé sur un bouton d'ouverture de sous-section la navigation principale, et que sa sous-section associée est déjà ouverte, referme la sous-section.
    - Lorsque le focus est placé sur un lien direct active l’élément focalisé.
- `Tab` : Place le focus sur le prochain élément focalisable. Tous les éléments focalisables placés dans la sous-section sont inclus dans la séquence des éléments accessibles au `tab` de la page.
- `shift` + `Tab` : Place le focus sur l'élément focalisable précédent. Tous les éléments focalisables placés dans la sous-section sont inclus dans la séquence des éléments accessibles au `tab` de la page.

#### Règles d'accessibilité

- Le conteneur principal de la navigation dispose des attributs `role="navigation"` et `aria-label`, dont la valeur doit décrit la fonction de la navigation (ex: "Menu principal").
- Les boutons d'ouverture et de fermeture des menus déroulants et mega-menus ont l'attribut `aria-controls` défini sur l'ID du bloc refermable associé.
- Si une sous-section associée à un bouton d'ouverture de la navigation est visible, le bouton a l'attribut `aria-expanded` défini sur "true". Si la sous-section n'est pas visible, `aria-expanded` est défini sur "false".
- Si une sous-section associée à un bouton d'ouverture de la navigation est active, le bouton a l'attribut `aria-current` défini sur "true".
- Le lien actif dispose d'un attribut `aria-current="page"`.
- Sur les sous-menus du mega menu, le lien permettant de replier le sous-menu doit être le premier élément prenant le focus.

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
