---
title: Accessibilité de la Navigation principale
shortTitle: Accessibilité de la Navigation principale
description: La navigation principale organise les grandes rubriques d’un site et permet à l’usager de s’orienter dans son arborescence.
shortDescription: Orienter l’usager dans les sections du site.
keywords: navigation principale, menu, rubriques, arborescence, design system, UX, interface, usager, header, mega menu
cover: ../_asset/cover/cover.png
excerpt: La navigation principale guide l’usager dans les sections clés d’un site et structure les niveaux d’accès à l’information. Elle se place sous l’en-tête et peut inclure des menus déroulants ou mega menus.
summary: Ce document décrit la navigation principale comme un composant central d’un site web, servant à organiser et hiérarchiser les principales rubriques. Il présente les cas d’usage, les variantes possibles, les limites en matière de profondeur et de densité, ainsi que les bonnes pratiques éditoriales. Il donne aussi des recommandations sur l’association avec d’autres composants comme la barre de recherche ou le menu latéral, afin de renforcer l’expérience utilisateur dans la navigation globale du site.
---

## Navigation principale

La navigation principale est le système central de navigation au sein d’un site. Elle permet d’orienter l’usager à travers les rubriques principales et secondaires du site.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Navigation principale** est conçu pour être accessible et suit les critères du RGAA.

Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

- `Entrée` ou `Espace` :
    - Lorsque le focus est placé sur un bouton d'ouverture de sous-section de la navigation principale, et que sa sous-section associée est fermée, ouvre la sous-section.
    - Lorsque le focus est placé sur un bouton d'ouverture de sous-section la navigation principale, et que sa sous-section associée est déjà ouverte, referme la sous-section.
    - Lorsque le focus est placé sur un lien direct active l’élément focalisé.
- `Tab` : Place le focus sur le prochain élément focalisable. Tous les éléments focalisables placés dans la sous-section sont inclus dans la séquence des éléments accessibles au `tab` de la page.
- `shift` + `Tab` : Place le focus sur l'élément focalisable précédent. Tous les éléments focalisables placés dans la sous-section sont inclus dans la séquence des éléments accessibles au `tab` de la page.

#### Règles d'accessibilité

- Le conteneur principal de la navigation dispose des attributs `role="navigation"` et `aria-label`, dont la valeur doit décrit la fonction de la navigation (ex: "Menu principal").
- Les boutons d'ouverture et de fermeture des menus déroulants et mega-menus ont l'attribut `aria-controls` défini sur l'ID du bloc refermable associé.
- Si une sous-section associée à un bouton d'ouverture de la navigation est visible, le bouton a l'attribut `aria-expanded` défini sur "true". Si la sous-section n'est pas visible, `aria-expanded` est défini sur "false".
- Si une sous-section associée à un bouton d'ouverture de la navigation est active, le bouton a l'attribut `aria-current` défini sur "true".
- Le lien actif dispose d'un attribut `aria-current="page"`.
- Sur les sous-menus du mega menu, le lien permettant de replier le sous-menu doit être le premier élément prenant le focus.

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
