---
title: Accessibilité du Curseur
shortTitle: Accessibilité du Curseur
description: Présentation du composant Curseur permettant à l’usager de sélectionner une valeur entre un minimum et un maximum de manière intuitive.
shortDescription: Sélection d’une valeur sur une échelle
keywords: curseur, range, sélection, valeur, interface, DSFR, accessibilité, filtre, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Curseur permet à l’usager de définir une valeur dans une plage donnée, souvent utilisée pour ajuster un paramètre de façon dynamique et visuelle.
summary: Le curseur est utile lorsque la saisie d’une valeur approximative est suffisante, comme pour filtrer des contenus ou ajuster des préférences. Il propose différentes variantes - simple, double ou cranté, avec ou sans affichage des bornes. Non personnalisable, il est conçu pour un usage fluide et accessible, avec retour visuel en temps réel sur les valeurs sélectionnées.
---

## Curseur

Le curseur est un élément d’interaction avec l’interface permettant à l’usager de délimiter manuellement une sélection par rapport à une valeur minimale et maximale.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Curseur** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le curseur :

- `Tab` : Place le focus sur l'élément focalisable suivant.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.
- `Flèche gauche` ou `Flèche bas` : Diminue la valeur du curseur.
- `Flèche droite` ou `Flèche haut` : Augmente la valeur du curseur.

### Règles d'accessibilité

- Le curseur `<input>` de type `range` doit être associé à un `<label>` pour indiquer son libellé. L'attribut `aria-labelledby` de l'`<input>` doit correspondre à l'attribut `id` du `<label>`.
- Un **message** d'erreur ou de succès peut être associé au curseur. Son attribut `id` doit être associé à l'attribut `aria-describedby` du curseur. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé au technologies d'assistance en utilisant l'attribut `aria-live="polite"`.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
