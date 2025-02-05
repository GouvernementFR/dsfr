---
title: Accessibilité de la transcription
---

# Transcription

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Transcription** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le bouton de transcription :

- `Entrée` ou `Espace` :
  - Lorsque le focus est placé sur le bouton d'ouverture de l'accordéon de la transcription, et que son "collapse" associé est fermé, ouvre le collapse.
  - Lorsque le focus est placé sur le bouton d'ouverture de l'accordéon de la transcription, et que son "collapse" associé est déjà ouvert, referme le collapse.
- `Tab` : Place le focus sur le bouton d'ouverture de la modale de la transcription.
  - `Entrée` ou `Espace` : Lorsque le focus est placé sur le bouton d'ouverture de la modale ouvre la modale de la transcription et place le focus sur le bouton de fermeture de la modale.
  - `Esc` : Lorsque la modale est ouverte, referme la modale et place le focus sur le bouton d'ouverture de la modale.
  - `Entrée` ou `Espace` : Lorsque le focus est placé sur le bouton de fermeture de la modale referme la modale de la transcription et place le focus sur le bouton d'ouverture de la modale.
  - `Tab` : Place le focus sur le prochain élément focalisable. Tous les éléments focalisables placés dans la modale sont inclus dans la séquence des éléments accessibles au `tab` de la page.
  - `shift` + `Tab` : Place le focus sur l'élément focalisable précédent. Tous les éléments focalisables placés dans le collapse sont inclus dans la séquence des éléments accessibles au `tab` de la page.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- La transcription contient un bouton d'ouverture d'accordéon avec le type="button".
  - Le bouton d'ouverture de l'accordéon a l'attribut `aria-controls` défini sur l'ID du collapse.
  - Si le collapse de l'accordéon est visible, le bouton a l'attribut `aria-expanded` défini sur true. Si le collapse de l'accordéon n'est pas visible, `aria-expanded` est défini sur false.
- L'accordéon de la transcription contient un bouton d'ouverture de la modale de transcription avec le type="button".
  - Le bouton d'ouverture de la modale dispose d'un attribut `aria-label` dont la valeur "Agrandir la transcription" explicite l'action d'ouverture de la modale.
  - Le bouton d'ouverture de la modale a l'attribut `aria-controls` défini sur l'ID de la modale.
  - Si la modale est visible, le bouton a l'attribut `data-fr-opened` défini sur true. Si la modale n'est pas visible, `data-fr-opened` est défini sur false.
- La modale de transcription est un élément HTML "dialog" et dispose d'un attribut `aria-modal="true"` pour indiquer aux lecteurs d'écran que l'élément est une modale lorsqu'il est affiché.
  - La modale dispose d'un attribut `aria-labelledby` défini sur l'ID du titre de la modale.
- La modale de transcription contient un titre de niveau `H1`.
- La modale de transcription contient un bouton de fermeture de type="button".
  - Le bouton de fermeture de la modale dispose d'un attribut `aria-controls` défini sur l'ID de la modale.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
