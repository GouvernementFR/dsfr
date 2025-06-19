---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la transcription
shortTitle: Accessibilité de la transcription
description: Présentation du composant Transcription destiné à afficher un texte associé à un contenu média dans une interface.
shortDescription: Affichage de texte lié à un contenu média
keywords: transcription, composant, contenu média, accessibilité, modale, accordéon, design système, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le composant Transcription permet de proposer un texte associé à un contenu média, à afficher ou masquer dans une interface, sous forme d’accordéon ou de modale.
summary: Ce composant facilite l’accès au texte d’une vidéo ou d’un média pour les usagers qui en ont besoin, en l’affichant sur la même page dans une zone repliable ou via une modale. Il est conçu pour garantir une lecture simultanée fluide et accessible, avec une structure claire et des règles d’intégration strictes.
---

## Transcription

La transcription est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer le texte traduisant un contenu média au sein d’une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Transcription** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

Voir les interactions au clavier pour le [composant Accordéon](../../../../accordion/_part/doc/accessibility/index.md#regles-d-accessibilite) et le [composant Modale](../../../../modal/_part/doc/accessibility/index.md#regles-d-accessibilite).

### Règles d’accessibilité

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

#### Contrastes de couleurs

Le composant Transcription est suffisamment contrasté en thème clair.

### Restitution par les lecteurs d’écran

Voir les tests de restitution pour le [composant Accordéon](../../../../accordion/_part/doc/accessibility/index.md#regles-d-accessibilite) et le [composant Modale](../../../../modal/_part/doc/accessibility/index.md#regles-d-accessibilite).

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
