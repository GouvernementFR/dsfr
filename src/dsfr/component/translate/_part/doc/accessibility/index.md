---
title: Accessibilité du sélecteur de langue
---

# Sélecteur de langue

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Sélecteur de langue** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le Sélecteur de langue :

- `Entrée` : Ouvre ou ferme le menu de sélection de langue.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Le sélecteur de langue dispose d'un `role="navigation"`.
- Le sélecteur de langue contient un bouton d'ouverture avec le `type="button"`.
- Si le collapse associé au bouton d'ouverture du sélecteur de langue est visible, le bouton a l'attribut `aria-expanded` défini sur `true`. Si le collapse n'est pas visible, `aria-expanded` est défini sur `false`.
- Le bouton d'ouverture du sélecteur de langue a l'attribut `aria-controls` défini sur l'ID du collapse.
- L'élément actif de la liste de langue porte un attribut `aria-current=”true”`.
- Chaque élément de la liste de langue disposent d'un attribut `hreflang` et un attribut `lang`, dont les valeurs spécifient la langue cible.
- Une langue est indiquée par son code [ISO 639-1](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1), puis son nom en toute lettres et dans la langue cible.
  Par exemple, on écrira "EN - English", et pas "EN - Anglais".

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
