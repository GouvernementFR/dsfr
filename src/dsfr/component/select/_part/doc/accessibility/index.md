---
title: Accessibilité de la liste déroulante
---

# Liste déroulante

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant Liste déroulante est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur la liste déroulante :

- `Flèche bas` : Ouvre la liste déroulante et permet de naviguer entre les options.
- `Flèche haut` : Ouvre la liste déroulante et permet de naviguer entre les options.
- `Espace` : Ouvre la liste déroulante et sélectionne l'option mise en surbrillance.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- La liste déroulante doit être utilisée pour permettre à l'utilisateur de sélectionner **une seule option** parmi une liste d'options.
- Chaque liste déroulante doit être associée à un **label** `<label>` pour indiquer son libellé. L'attribut `for` du `<label>` doit correspondre à l'attribut `id` du `<select>`. Ainsi, le clic sur le label place sur le focus sur la liste déroulante.
- Le **libellé des options** doit être explicite et décrire clairement l'option que la liste déroulante représente.
- Pour sélectionner une option par défaut, ajoutez l'attribut `selected` à l'`<option>`. Une seule option peut être sélectionnée par défaut.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
