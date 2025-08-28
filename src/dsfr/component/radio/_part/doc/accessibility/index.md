---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Bouton radio
shortTitle: Accessibilité du Bouton radio
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Bouton radio.
shortDescription: Sélection d’une option unique
keywords: bouton radio, sélection, interface, formulaire, design système, DSFR, accessibilité, choix unique
cover: ../_asset/cover/cover.png
excerpt: Le composant Bouton radio permet de proposer à l’usager un choix unique parmi plusieurs options. Il est recommandé pour les listes de 2 à 5 éléments maximum.
summary: Ce composant est conçu pour faciliter le choix unique dans une interface, en particulier dans les formulaires. Il offre différentes dispositions et variations, y compris des versions enrichies avec pictogrammes. Il s’utilise en groupe, avec des libellés clairs et une hiérarchie visuelle cohérente. L’intégration respecte des règles d’ergonomie, d’accessibilité et d’uniformité éditoriale.
mesh:
  - component/checkbox
  - component/input
  - component/select
---

## Bouton radio

Le bouton radio est un élément d’interaction avec l’interface permettant à l’usager de réaliser un choix unique parmi plusieurs options.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

## Accessibilité

Le composant **Bouton radio** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Au passage du focus, le bouton radio actif reçoit le focus. Si aucun radio du groupe n’est sélectionné, c’est le premier radio de l’ensemble qui obtient le focus. Lorsque le focus est positionné sur un radio&nbsp;:

- `Espace`&nbsp;: Sélectionne le radio s’il n’est pas déjà sélectionné.
- `Flèche droite` ou `Flèche bas`&nbsp;: place le focus sur le prochain radio de l'ensemble, décoche le radio précédent s’il est sélectionné et coche le radio qui reçoit le focus. Si le focus est sur le dernier radio de l'ensemble, place le focus sur le premier radio de l'ensemble.
- `Flèche gauche` ou `Flèche haut`&nbsp;: place le focus sur le radio précédent de l’ensemble, décoche le radio précédemment sélectionné et coche le radio qui reçoit le focus. Si le focus est sur le premier radio de l'ensemble, place le focus sur le dernier radio de l’ensemble.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Un bouton radio doit avoir une **étiquette pertinente**. On doit comprendre l’option sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de&nbsp;:

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

>[!CAUTION]
>Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` du bouton radio.
>
>L’attribut `for` du label doit correspondre à l'attribut `id` de la case à cocher. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet :
- d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal),
- de cocher ou décocher le bouton radio en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

#### Étiquette visible et accolée

L’étiquette est visible et accolée au bouton radio.

#### État désactivé

> [!WARNING]
> **L’état désactivé d’un bouton radio peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure et l’étiquette du bouton radio désactivé sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:
- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires

- Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que sélectionner un bouton radio est obligatoire.

#### Regroupement des boutons radio

- Les boutons radio doivent être regroupés dans un élément `<fieldset>` avec une légende `<legend>`.
  - La **légende** doit être visible, explicite et décrire le groupe d'options. Elle ne doit pas être en gras puisqu’elle n’est pas considérée ici comme le titre d’un regroupement de champs mais comme le libellé de l'ensemble d'options.
  - Si le **fieldset contient des messages** d’erreur, d'informations ou de succès, il doit être associé à un attribut `aria-labelledby` pour lier la légende et les messages. Les id des éléments doivent être séparés par un espace. Il faudra également ajouter l’attribut `role="group"` à l’élément `<fieldset>` pour améliorer le rendu des technologies d’assistance.
- **Les radios d’un groupe sont liés** par leur attribut `name`. Les radios d’un même groupe doivent avoir le même attribut `name`. Cela permet notamment aux personnes handicapées motrices de ne pas avoir à tabuler sur chaque option.

#### Bouton radio riche

Les images des boutons radio riches doivent être décoratives.

#### Contrastes de couleurs

Par défaut, le composant Bouton radio est suffisamment contrasté en thème clair et en thème sombre.

:::fr-table[Contrastes par défaut]{valign=top multiline=true}
| Thème |  Bordure | Point | Étiquette |
|------|-----|-----|-----|
|**Thème clair**| 14,9:1 | 14,9:1 | 18,1:1 |
|**Thème sombre**| 5,8:1 | 5,8:1 | 18,1:1 |
:::

En cas de succès ou d’erreur, le ratio de contraste de la bordure et celui de l’étiquette sont de 5,8 en thème clair et sombre.

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type**. L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran&nbsp;:

- VoiceOver macOS et iOS&nbsp;: «&nbsp;estompé&nbsp;»
- NVDA et JAWS&nbsp;: «&nbsp;bouton non disponible&nbsp;»
- Narrateur et Talkback &nbsp;: «&nbsp;bouton désactivé&nbsp;»

---

### Critères RGAA applicables
- **Couleurs** : 3.2, 3.3
- **Présentation de l’information** : 10.1, 10.2, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires** : 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.9
- **Navigation** : 12.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type radio](https://html.spec.whatwg.org/#checkbox-state-(type=radio))
- [Live regions ARIA&nbsp;: bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)
