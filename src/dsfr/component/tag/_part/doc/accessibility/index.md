---
title: Accessibilité du Tag
shortTitle: Accessibilité du Tag
description: Présentation complète du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.
shortDescription: Le tag sert à classer ou filtrer les contenus.
keywords: tag, composant, design system, catégorisation, filtre, accessibilité, UI, UX, badge, interface, contenu
cover: ../_asset/cover/cover.png
excerpt: Le tag est un composant utilisé pour classer ou filtrer des contenus à l'aide de mots clés. Il s'adapte selon le contexte d'utilisation et respecte des règles éditoriales précises.
summary: Ce contenu présente le composant Tag dans un design system. Il explique ses usages principaux, notamment pour la catégorisation de contenus ou comme filtre interactif dans les interfaces. Des conseils pratiques et règles éditoriales y sont fournis pour garantir une intégration cohérente et accessible. Ce guide s’adresse aux designers et développeurs travaillant sur des interfaces nécessitant une organisation claire et intuitive de l’information.
---

## Tag

Le tag est un élément d’indication ou d’interaction (selon les contextes) permettant de catégoriser, classer, organiser les contenus d’un site à l’aide de mots clés. Il aide les usagers à rechercher et à trouver facilement une information.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Tag** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Lorsque le focus est positionné sur le tag :

- `Entrée` ou `Espace` : Active le tag cliquable, activable ou supprimable.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

#### Règles d'accessibilité

- Chaque **tag cliquable** doit être un élément `<a>` ou `<button>` pour être accessible au clavier.
    - Un attribut `title` peut être ajouté pour préciser la cible du lien.
- Un **tag supprimable** doit avoir un libellé explicite pour les technologies d'assistance, l’attribut `aria-label` doit contenir le libellé "Retirer" suivi de l’intitulé du filtre visible à l'écran.

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
