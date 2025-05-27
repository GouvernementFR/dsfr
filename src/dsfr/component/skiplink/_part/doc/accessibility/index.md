---
title: Accessibilité des liens d'évitement
shortTitle: Accessibilité des liens d'évitement
description: Les liens d’évitement permettent aux usagers utilisant un clavier ou un lecteur d’écran d’accéder rapidement aux zones principales d’une page.
shortDescription: Accéder rapidement au contenu avec le clavier.
keywords: lien d’évitement, accessibilité, navigation clavier, lecteur d’écran, UX, interface, design system, contenu, header, composant
cover: ../_asset/cover/cover.png
excerpt: Le lien d’évitement est un composant essentiel à l’accessibilité. Il permet aux usagers de naviguer directement vers les zones clés d’une page, sans passer par tous les éléments précédents.
summary: Ce document présente le composant Lien d’évitement, un outil fondamental pour l’accessibilité numérique. Il explique pourquoi son intégration est obligatoire, comment l’utiliser correctement en début de page, et avec quels types de liens. Il précise également les règles d’affichage, de contenu et de quantité, pour en garantir l’efficacité. Ce guide s’adresse aux développeurs et designers soucieux d’offrir une navigation fluide aux usagers naviguant au clavier ou via un lecteur d’écran.
---

## Liens d'évitement

Les liens d’évitement sont un système de navigation secondaire permettant à l’usager naviguant au clavier, ou équipé d’un lecteur d'écran, d’accéder plus rapidement à des zones précises de la page.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Liens d'évitement** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Lorsque le focus n'est pas encore positionné dans la page :

- `Tab` : Affiche les liens d'évitement et place le focus sur le premier lien de la liste.
- `Entrée` : Actionne le lien d'évitement et fait defiler la page jusqu'à l'ancre définie sur le lien.

Lorsque le focus est positionné sur les liens d'évitement :

- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

Lorsque le focus est sur le premier élement focusable de la page hors liens d'évitement :

- `shift + Tab` : Affiche les liens d'évitement et place le focus sur le dernier lien de la liste.
- `Entrée` : Actionne le lien d'évitement et fait defiler la page jusqu'à l'ancre définie sur le lien.

#### Règles d'accessibilité

- Les liens d'évitement doivent être les premiers éléments focusables de la page.
- Les liens d’accès rapide doivent être entourés par une balise `<nav>`.
- Les liens d’accès rapide doivent être structurés avec une liste `<ul><li>`.
- Le lien d’accès au contenu devrait toujours être le premier dans la liste.

#### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
