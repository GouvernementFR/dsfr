---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du champ de saisie
shortTitle: Accessibilité du champ de saisie
description: Le champ de saisie permet à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.
shortDescription: Saisie de données dans une interface.
keywords: champ de saisie, formulaire, saisie, interface, accessibilité, design system, UX, UI, libellé, texte d’aide
cover: ../_asset/cover/cover.png
excerpt: Ce document présente l’usage du champ de saisie pour permettre à l’usager d’entrer des informations, en précisant les cas d’usage appropriés et les bonnes pratiques d’interface.
summary: Ce contenu décrit le champ de saisie comme un composant d’interface permettant à l’usager de saisir du contenu ou des données. Il indique quand l’utiliser, avec quelles alternatives dans le cas de choix fermés, et fournit des recommandations précises sur son usage, la disposition des éléments, les messages de retour, l’accessibilité et les libellés. Il s’adresse aux concepteurs et développeurs souhaitant garantir une saisie claire, efficace et cohérente dans leurs interfaces.
---

## Champ de saisie

Le champ de saisie est un élément d’interaction avec l’interface permettant à l’usager d’entrer du contenu et/ou des données.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Les champs de saisie sont conçus pour être accessibles et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n’y a aucune interaction spécifique au composant **Champ de saisie**.

### Règles d’accessibilité

#### Intitulé pertinent&nbsp;: nom accessible

Un champ de saisie doit avoir une **étiquette pertinente**. On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de&nbsp;:

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

>[!CAUTION]
>Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` de la case à cocher.
>
>L’attribut `for` du label doit correspondre à l'attribut `id` de la case à cocher. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet&nbsp;:
- d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal),
- de mettre le focus dans le champ en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

#### Étiquette visible et accolée

L’étiquette est visible et accolée au champ de saisie.

#### État désactivé

> [!WARNING]
> **L’état désactivé d’un champ de saisie peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure et l’étiquette du champ de saisie désactivé sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:
- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires, format attendu et contrôle de saisie

- Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que le champ est obligatoire.
- Le format de saisie attendu doit être indiqué et correctement relié au champ préalablement à la validation du formulaire.
- En cas d’erreur, le message d’erreur doit proposer un exemple de valeur attendue.

#### Informations personnelles et attribut `autocomplete`

Pour les champs de saisie se rapportant à une information concernant l’utilisateur, il est nécessaire d’ajouter un attribut `autocomplete` sur le champ.

Voir la [liste des valeurs disponibles](https://www.w3.org/Translations/WCAG21-fr/#input-purposes).

#### Contrastes de couleurs

Par défaut, le composant Champ de saisie est suffisamment contrasté en thème clair et en thème sombre.

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
- **Formulaires&nbsp;:** 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 11.11, 11.12, 11.13,
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Live regions ARIA&nbsp;:bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)
