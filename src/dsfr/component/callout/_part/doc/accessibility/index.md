---
title: Accessibilité de la mise en avant
shortTitle: Accessibilité de la mise en avant
description: La mise en avant est un élément éditorial servant à valoriser une information complémentaire dans une page de contenu.
shortDescription: Mettre en valeur une information secondaire.
keywords: mise en avant, contenu, composant éditorial, UX, design system, accessibilité, information, valorisation, page, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Mise en avant permet de valoriser un contenu complémentaire dans une page, en attirant l’attention de l’usager sans perturber la lecture principale.
summary: Ce contenu décrit le composant Mise en avant utilisé pour signaler une information complémentaire au sein d’un contenu éditorial. Il précise ses cas d’usage, le distingue de la mise en exergue et des alertes, et recommande de limiter son usage à une ou deux occurrences par page. Des règles éditoriales simples sont proposées pour garantir lisibilité et efficacité. Ce guide s’adresse aux concepteurs de contenus et interfaces souhaitant structurer l’information de manière claire et hiérarchisée.
---

## Mise en avant

La mise en avant est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Mise en avant** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Aucune interaction clavier n'est liée au composant.
Lorsque qu'un composant interactif est utilisé à l'intérieur, comme un bouton ou un lien, les interactions clavier correspondent à celles de cet élément.

#### Règles d'accessibilité

- Hiérarchisez et sélectionnez votre contenu, afin d’utiliser une ou deux mises en avant maximum par page, sinon elles attireront moins l’œil de l’utilisateur.
- Le niveau d'en-tête du titre dépend du contexte (et ne sera pas toujours un `<h3>`).
- La mise en avant est illustrative, toutefois, un attribut `aria-label` peut être utilisé sur le conteneur principal pour indiquer qu'il s'agit d'un texte en avant (ex: information importante).
- L'icône est illustrative et n'a pas nécessité à être retranscrite sur lecteur d'écran.

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)