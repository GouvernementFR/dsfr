---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Barre de recherche
shortTitle: Accessibilité de la Barre de recherche
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Barre de recherche.
shortDescription: Accès rapide à un contenu par mot clé
keywords: recherche, barre de recherche, navigation, formulaire, interface, DSFR, accessibilité, moteur de recherche
cover: ../_asset/cover/cover.png
excerpt: La barre de recherche permet à l’usager d’accéder à un contenu ciblé en saisissant un mot clé ou une phrase. Elle peut être globale ou contextuelle selon l’usage.
summary: Ce composant propose un champ de saisie avec bouton pour rechercher un contenu spécifique au sein d’un site ou d’un bloc fonctionnel. Elle s’intègre idéalement à l’en-tête pour un usage global ou dans une section précise pour des recherches contextuelles. Le composant suit des recommandations strictes en matière d’accessibilité, de largeur minimale, de rédaction des libellés et ne permet pas de personnalisation graphique.
mesh:
  - component/header
---

## Barre de recherche

La barre de recherche est un système de navigation permettant à l'usager d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une phrase.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Barre de recherche** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

L’ensemble des règles d’accessibilité du [champs de saisie](../../../../input/_part/doc/accessibility/index.md) doivent être respectées.

- Le conteneur de la barre de recherche possède un `role="search"`.
- Le champ de recherche est de type `search`.
- Le champ de recherche a une étiquette positionnée hors écran. Le bouton de recherche adjacent permet de comprendre la nature et fonction du champ.
- Le bouton de recherche a un intitulé et un attribut title explicite.

### Contrastes de couleurs

Le composant Barre de recherche est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Barre de recherche.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.9
- **Navigation&nbsp;:** 12.1, 12.5, 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- <a href="https://www.w3.org/TR/wai-aria/#search" rel="noopener external" target="_blank" title="W3C - nouvelle fenêtre">Rôle <span lang="en">search</span></a>
- [Technique G167 WCAG](https://www.w3.org/WAI/WCAG21/Techniques/general/G167)&nbsp;: labelliser un champ avec un bouton adjacent explicite.
