---
title: Accessibilité de l'Accordéon
shortTitle: Accessibilité de l'Accordéon
description: Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.
shortDescription: Masquer ou révéler du contenu textuel
keywords: accordéon, contenu, interaction, affichage, design système, DSFR, accessibilité, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Accordéon permet à l’usager d’ouvrir ou fermer une section de contenu dans une page, pour en faciliter la lecture et alléger la structure globale.
summary: Utilisé pour structurer et hiérarchiser du contenu éditorial, l’accordéon masque par défaut les informations secondaires pour ne révéler que ce que l’usager souhaite consulter. Il est particulièrement utile dans les longues pages de contenu. Il permet des interactions simples, peut être utilisé seul ou en groupe, et respecte des règles strictes de lisibilité et d’accessibilité.
---

## Accordéon

L’accordéon est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer une section de contenu présentée dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le système d'accordéon utilise le motif de conception ARIA WAI "Accordion" et suit les critères du RGAA.

### Interactions clavier

- `Entrée` ou `Espace` :
  - Lorsque le focus est placé sur le bouton d'ouverture de l'accordéon, et que son "collapse" associé est fermé, ouvre le collapse. Si l'accordéon est lié aux autres accordéon du groupe et qu'un accordéon était déjà ouvert, celui-ci est alors fermé.
  - Lorsque le focus est placé sur le bouton d'ouverture de l'accordéon, et que son "collapse" associé est déjà ouvert, referme le collapse.
- `Tab` : Place le focus sur le prochain élément focalisable. Tous les éléments focalisables placés dans le collapse sont inclus dans la séquence des éléments accessibles au `tab` de la page.
- `shift` + `Tab` : Place le focus sur l'élément focalisable précédent. Tous les éléments focalisables placés dans le collapse sont inclus dans la séquence des éléments accessibles au `tab` de la page.


### Règles d'accessibilités

- Le titre de l'accordéon contient un bouton d'ouverture avec le type="button".
- Les boutons d'ouverture des accordéons sont inclus dans un niveau de titre hx
  - Le niveau de titre doit être ajusté au niveau approprié à l'architecture des informations de la page.
  - Le bouton doit être le seul élément présent dans le titre.
- Si le collapse associé au bouton d'ouverture de l'accordéon est visible, le bouton a l'attribut `aria-expanded` défini sur true. Si le collapse n'est pas visible, `aria-expanded` est défini sur false.
- Le bouton d'ouverture de l'accordéon a l'attribut `aria-controls` défini sur l'ID du collapse.
- Optionnellement, un role `region` sur le collapse peut être utile à la compréhension de sa structure pour les lecteurs d'écran, notamment dans le cas d'utilisation de niveaux de titre à l'intérieur ou d'accordéons imbriqués.

### Références
- [https://www.w3.org/WAI/ARIA/apg/patterns/accordion/](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
