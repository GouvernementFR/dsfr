---
title: Accessibilité du Sommaire
shortTitle: Accessibilité du Sommaire
description: Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.
shortDescription: Navigation entre les sections d’une page
keywords: sommaire, navigation, ancre, contenu long, DSFR, accessibilité, design système, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Sommaire affiche des liens ancrés vers les différentes sections d’une page, facilitant la lecture et l’accès rapide à l’information pour l’usager.
summary: Ce composant permet d’améliorer l’expérience utilisateur dans les pages à forte densité de contenu. Il affiche en haut de page une liste d’ancres reprenant fidèlement les titres des sections éditoriales, dans un bloc distinct visuellement. Le sommaire n’est pas sticky, ne se personnalise pas, et garantit une navigation fluide et cohérente au sein d’un même contenu.
---

## Sommaire

Le sommaire est un système de navigation secondaire présentant une liste d’ancres placée au-dessus du contenu correspondant.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Sommaire** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Lorsque le focus est positionné sur le sommaire :

- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

#### Règles d'accessibilité

- L'élément qui sert de conteneur pour l'ensemble des éléments a le rôle `navigation`.
    - Il dispose d'un attribut `aria-labelledby` défini sur l'ID du titre du sommaire.

#### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
