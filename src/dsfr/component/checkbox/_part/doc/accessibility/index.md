---
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

## Accessibilité

Le composant Case à cocher, ci-après nommée **Checkbox**, est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur la checkbox :

- `Espace` : Coche ou décoche la checkbox.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Chaque checkbox doit être associée à un **label** `<label>` pour indiquer son libellé. L'attribut `for` du label doit correspondre à l'attribut `id` de la checkbox. Ainsi, le clic sur le label activera la checkbox.
- Le libellé doit être explicite et décrire clairement l'option que la checkbox représente.
- Un **message** d'erreur, d'information, ou de succès peut être associé à la checkbox. Son attribut `id` doit être associé à l'attribut `aria-describedby` de la checkbox. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé au technologies d'assistance en utilisant l'attribut `aria-live="polite"`.
- Utiliser des groupes de checkboxes pour des options liées, en les regroupant dans un élément `<fieldset>` avec une légende `<legend>`.
  - La **légende** doit être explicite et décrire le groupe d'options. Elle ne doit pas être en gras puisqu'elle n'est pas considérée ici comme le titre d'un regroupement de champs mais comme le libellé de l'ensemble d'options.
  - Si le **fieldset contient des messages** d'erreur, d'informations ou de succès, il doit être associé à un attribut `aria-labelledby` pour lier la légende et les messages. Les id des éléments doivent être séparés par un espace. Il faudra également ajouter l'attribut `role="group"` à l'élément `<fieldset>` pour améliorer le rendu des technologies d'assistance.

### Références

- [https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
