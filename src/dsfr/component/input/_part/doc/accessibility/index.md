---
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

### Accessibilité

Les champs de saisie sont conçus pour être accessibles et suivent les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Lorsque le focus est positionné sur le champ de saisie :

- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

Lorsque le focus est positionné sur le bouton d'envoi ou le bouton d'action associé au champ de saisie :

- `Entrée` : Actionne le bouton.

#### Règles d'accessibilité

- Utiliser l'attribut `required` pour indiquer que le champ est obligatoire.
- Utiliser l'attribut `aria-describedby` pour associer un message d'information/erreur/avertissement/succès au champ de saisie.
- L'utilisation d'un label est obligatoire pour associer le champ de saisie à son libellé.
- Utiliser un texte de description additionnel pour indiquer le format attendu ou les contraintes de saisie.
- Pour utiliser moins d'espace, le format attendu peut être donné sous forme d'exemple dans le placeholder du champ.
- Lorsqu'il est associé à un champ de saisie, le bouton d'envoi ou le bouton d'action doit avoir un libellé explicite. N'utilisez un bouton avec icône seule que si l'icône est suffisamment explicite pour être comprise sans texte, et ajoutez un attribut `title`.

#### Références

- [https://www.w3.org/WAI/tutorials/forms/](https://www.w3.org/WAI/tutorials/forms/)
- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
