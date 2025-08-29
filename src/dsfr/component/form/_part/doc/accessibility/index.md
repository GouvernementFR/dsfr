---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Formulaire
cover: ../_asset/cover/cover.png
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Formulaire.
shortDescription: Gestion de l'agencement des éléments de formulaire.
keywords: formulaire, saisie, données, interaction, accessibilité, design système, DSFR
excerpt: Le formulaire est un composant essentiel pour la saisie de données dans une interface, permettant d'organiser les champs de saisie et les messages d'état de manière cohérente et accessible.
summary: Le formulaire est un composant d'interface qui organise les éléments de saisie de données et les messages d'état. Il est conçu pour faciliter l'interaction de l'usager avec l'interface, en respectant les principes d'accessibilité et de design du DSFR. Il permet de structurer les informations à saisir, d'afficher des messages d'erreur ou de succès, et de guider l'usager dans son parcours de saisie. Ce guide s'adresse aux concepteurs et développeurs souhaitant implémenter des formulaires conformes aux standards du DSFR et aux bonnes pratiques d'accessibilité.
mesh:
  - component/radio
  - component/input
  - component/select
---

## Formulaires

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Les composants de formulaire sont conçus pour être accessibles et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction spécifique n’est associée au formulaire.

Les interactions clavier du formulaire sont celles liées aux éléments de formulaire qu’il contient&nbsp;:

- [champs de saisie](../../../../input/_part/doc/accessibility/index.md),
- [boutons](../../../../button/_part/doc/accessibility/index.md),
- [liste déroulante](../../../../select/_part/doc/accessibility/index.md),
- [cases à cocher](../../../../checkbox/_part/doc/accessibility/index.md),
- [boutons radio](../../../../radio/_part/doc/accessibility/index.md),
- [ajout de fichier](../../../../upload/_part/doc/accessibility/index.md), etc.

### Règles d’accessibilité

#### Regroupement de champs

- Utiliser un élément `<fieldset>` accompagné d’un élément `<legend>` pour regrouper un ensemble de champs de formulaire de même nature lorsque les étiquettes des champs ne sont pas suffisamment explicites.
- La légende du regroupement doit être pertinente.

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:

- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires

Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que le champ est obligatoire.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 11.11, 11.12, 11.13
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Tutoriel WAI - Formulaires](https://www.w3.org/WAI/tutorials/forms/)
- [Live regions ARIA&nbsp;:bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)