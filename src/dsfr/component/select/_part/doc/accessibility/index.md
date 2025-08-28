---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Liste déroulante
shortTitle: Accessibilité de la Liste déroulante
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Liste déroulante.
shortDescription: Sélectionner une option dans une liste.
keywords: liste déroulante, formulaire, interface, sélection, interaction, design system, UX, UI, accessibilité, boutons radio, cases à cocher
cover: ../_asset/cover/cover.png
excerpt: La liste déroulante est un composant d’interface utile pour choisir un seul élément parmi plusieurs dans un espace restreint. Elle est recommandée entre 6 et 15 options.
summary: Ce contenu décrit l’usage du composant liste déroulante, conçu pour permettre à l’usager de sélectionner une seule option dans une liste lorsque l’espace est contraint. Il explique dans quels cas l’utiliser ou non, en comparaison avec les boutons radio ou les cases à cocher, selon le nombre de choix proposés. Des recommandations sont également données pour bien contextualiser son usage dans une interface et suivre les règles éditoriales adaptées. Ce guide s’adresse aux concepteurs d’interfaces soucieux de l’ergonomie et de la compréhension utilisateur.
mesh:
  - component/search
  - component/radio
  - component/checkbox
---

## Liste déroulante

La liste déroulante est un élément d’interaction avec l’interface permettant à l’usager de choisir un élément dans une liste donnée.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Liste déroulante** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur la liste déroulante&nbsp;:

- `Flèche bas`&nbsp;: ouvre la liste déroulante et permet de naviguer entre les options.
- `Flèche haut`&nbsp;: ouvre la liste déroulante et permet de naviguer entre les options.
- `Espace`&nbsp;: ouvre la liste déroulante et sélectionne l’option mise en surbrillance.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Une liste déroulante doit avoir une **étiquette pertinente**. On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de&nbsp;:

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

>[!CAUTION]
>Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` de la liste déroulante.
>
>L’attribut `for` du label doit correspondre à l'attribut `id` de la liste déroulante. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal).

#### Étiquette visible et accolée

L’étiquette est visible et accolée à la liste déroulante.

#### État désactivé

> [!WARNING]
> **L’état désactivé d’une liste déroulante peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure, la coche et l’étiquette de la liste déroulante désactivée sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:
- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Champ obligatoire

Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que sélectionner une option est obligatoire.

#### Contrastes de couleurs

Par défaut, le composant Liste déroulante est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type**. L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran&nbsp;:

- VoiceOver macOS et iOS&nbsp;: «&nbsp;estompé&nbsp;»
- NVDA et JAWS&nbsp;: «&nbsp;bouton non disponible&nbsp;»
- Narrateur et Talkback &nbsp;: «&nbsp;bouton désactivé&nbsp;»

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.1, 3.2, 3.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7, 11.8, 11.10, 11.11
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
