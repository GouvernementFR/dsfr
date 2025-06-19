---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la case à cocher
shortTitle: Accessibilité de la Case à cocher
description: Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.
shortDescription: Sélection multiple dans une liste
keywords: case à cocher, checkbox, sélection multiple, formulaire, DSFR, design système, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Case à cocher permet à l’usager de sélectionner librement une ou plusieurs options dans un ensemble de choix. Il est utilisé seul ou en groupe, avec ou sans texte d’aide.
summary: Ce composant permet une sélection multiple ou binaire dans les interfaces, particulièrement dans les formulaires. Il peut être utilisé seul pour un choix isolé, ou en liste pour plusieurs options. Des variantes avec texte d’aide sont proposées pour améliorer la compréhension. Il respecte les contraintes d’ergonomie, d’accessibilité et de cohérence éditoriale, sans personnalisation graphique.
---

## Case à cocher

La case à cocher est un élément d’interaction avec l’interface permettant à l’usager de sélectionner une ou plusieurs options dans une liste.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Case à cocher** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le composant&nbsp;:

- `Espace`&nbsp;: coche ou décoche la case à cocher.

Dans un groupe de cases à cocher&nbsp;:

- `Tab`&nbsp;: déplace le focus sur le prochain élément focalisable.
- `Maj + Tab`&nbsp;: déplace le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Une case à cocher doit avoir une **étiquette pertinente**. On doit en comprendre la fonction sans ambiguïté.

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
- de cocher ou décocher la case à cocher en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

#### Étiquette visible et accolée

L’étiquette est visible et accolée à la case à cocher.

#### État désactivé

> [!WARNING]
> **L’état désactivé d’une case à cocher peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure, la coche et l’étiquette de la case à cocher désactivée sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:
- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires

Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que la case à cocher est obligatoire.

#### Groupe de cases à cocher

- Utiliser des groupes de cases à cocher pour des options liées, en les regroupant dans un élément `<fieldset>` avec une légende `<legend>`.
  - La **légende** doit être explicite et décrire le groupe d'options. Elle ne doit pas être en gras puisqu’elle n’est pas considérée ici comme le titre d’un regroupement de champs mais comme le libellé de l'ensemble d'options.
  - Si le **fieldset contient des messages** d’erreur, d'informations ou de succès, il doit être associé à un attribut `aria-labelledby` pour lier la légende et les messages. Les id des éléments doivent être séparés par un espace. Il faudra également ajouter l’attribut `role="group"` à l’élément `<fieldset>` pour améliorer le rendu des technologies d’assistance.

#### Contrastes de couleurs

Par défaut, le composant Case à cocher est suffisamment contrasté en thème clair et en thème sombre.

:::fr-table[Contrastes par défaut]{valign=top scroll=false}
| Thème |  Bordure | Coche | Étiquette |
|------|-----|-----|-----|
|**Thème clair**| 14,9:1 | 14,9:1 | 18,1:1 |
|**Thème sombre**| 5,8:1| 4,7:1 | 18,1:1 |
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

- **Couleurs&nbsp;:** 3.1, 3.2, 3.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7, 11.8, 11.10, 11.11
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type checkbox](https://html.spec.whatwg.org/#checkbox-state-(type=checkbox))
- [Live regions ARIA&nbsp;:bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)
