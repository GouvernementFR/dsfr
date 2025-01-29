---
title: Accessibilité du bouton radio
---

# Bouton radio

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant Bouton radio est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Au passage du focus, le bouton radio actif reçoit le focus. Si aucun radio du groupe n'est sélectionné c'est le premier radio de l'ensemble qui obtient le focus. Lorsque le focus est positionné sur un radio :

- `Espace` : Sélectionne le radio s'il n'est pas déjà sélectionné.
- `Flèche droite` ou `Flèche bas` : Place le focus sur le prochain radio de l'ensemble, décoche le radio précédent s'il est sélectionné et coche le radio qui reçoit le focus. Si le focus est sur le dernier radio de l'ensemble, place le focus sur le premier radio de l'ensemble.
- `Flèche gauche` ou `Flèche haut` : Place le focus sur le radio précédent de l'ensemble, décoche le radio précédemment sélectionné et coche le radio qui reçoit le focus. Si le focus est sur le premier radio de l'ensemble, place le focus sur le dernier radio de l'ensemble.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Les boutons radios doivent être utilisés pour permettre à l'utilisateur de sélectionner **une seule option** parmi un groupe d'options.
- **Les radios d'un groupe sont liés** par leur attribut `name`. Les radios d'un même groupe doivent avoir le même attribut `name`.
- Chaque radio doit être associé à un **label** `<label>` pour indiquer son libellé. L'attribut `for` du `<label>` doit correspondre à l'attribut `id` de l'`<ìnput>`. Ainsi, le clic sur le label activera le radio.
- Le **libellé des options** doit être explicite et décrire clairement l'option que le radio représente.
- L'état sélectionné est indiqué visuellement par un **point** à l'intérieur du radio.
- Pour sélectionner une option par défaut, ajoutez l'attribut `checked` à l'`<input>`. Un seul radio peut être sélectionné par défaut.
- Si aucun radio n'a d'attribut `checked`, aucun radio n'est sélectionné. Une fois un radio sélectionné par l'utilisateur, que ce soit au clic ou via les flèches du clavier, il n'est **pas possible de désélectionner** tous les radios du groupe.
- La **légende** est obligatoire et doit être visible, elle fait office de libellé pour le groupe de radios.
- La légende doit être explicite et décrire le groupe d'options. Elle ne doit pas être en gras puisqu'elle n'est pas considérée ici comme le titre d'un regroupement de champs mais comme le libellé de l'ensemble d'options.
- Si le fieldset contient des **messages d'erreur, d'information ou de succès**, il doit être associé à un attribut `aria-labelledby` pour **lier la légende et les messages**. Les id des éléments doivent être séparés par un espace. Il faudra également ajouter l'attribut `role="group"` à l'élément `<fieldset>` pour améliorer le rendu des technologies d'assistance.

### Références

- [https://www.w3.org/WAI/ARIA/apg/patterns/radio/](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
