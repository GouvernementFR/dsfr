---
title: Accessibilité de la mise en exergue
shortTitle: Accessibilité de la mise en exergue
description: La mise en exergue est un composant éditorial destiné à distinguer une information importante au sein du contenu principal d’une page.
shortDescription: Mettre en évidence une information essentielle.
keywords: mise en exergue, contenu, composant éditorial, UX, design system, accessibilité, information, page, interface, valorisation
cover: ../_asset/cover/cover.png
excerpt: Le composant Mise en exergue permet de faire ressortir une information capitale intégrée dans le contenu principal, tout en respectant les principes de lisibilité et de hiérarchisation.
summary: Ce contenu décrit le composant Mise en exergue comme un outil d’identification rapide d’informations clés au sein d’un texte. Il précise ses usages, le distingue de la mise en avant, et détaille les bonnes pratiques de mise en forme pour assurer sa visibilité. L’alignement, la position dans la page et la nature du contenu sont essentiels à son efficacité. Ce guide est destiné aux créateurs de contenu et designers cherchant à hiérarchiser l’information de manière claire et accessible.
---

## Mise en exergue

La mise en exergue est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Mise en exergue** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Aucune interaction clavier n'est liée au composant.

#### Règles d'accessibilité

- Hiérarchisez et sélectionnez votre contenu, afin d’utiliser une ou deux mises en exergue maximum par page, sinon elles attireront moins l’œil de l’utilisateur.
- La mise en exergue est illustrative, toutefois, un attribut `aria-label` peut être utilisé sur le conteneur principal pour indiquer qu'il s'agit d'un texte en exergue (ex: "à noter :").
- Le texte doit être clair et concis.
- La couleur de la bordure doit avoir un contraste suffisant avec le fond pour être visible.

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
