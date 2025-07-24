---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Navigation principale
shortTitle: Accessibilité de la Navigation principale
description: La navigation principale organise les grandes rubriques d’un site et permet à l’usager de s’orienter dans son arborescence.
shortDescription: Orienter l’usager dans les sections du site.
keywords: navigation principale, menu, rubriques, arborescence, design system, UX, interface, usager, header, mega menu
cover: ../_asset/cover/cover.png
excerpt: La navigation principale guide l’usager dans les sections clés d’un site et structure les niveaux d’accès à l’information. Elle se place sous l’en-tête et peut inclure des menus déroulants ou mega menus.
summary: Ce document décrit la navigation principale comme un composant central d’un site web, servant à organiser et hiérarchiser les principales rubriques. Il présente les cas d’usage, les variantes possibles, les limites en matière de profondeur et de densité, ainsi que les bonnes pratiques éditoriales. Il donne aussi des recommandations sur l’association avec d’autres composants comme la barre de recherche ou le menu latéral, afin de renforcer l’expérience utilisateur dans la navigation globale du site.
mesh:
  - component/header
  - component/footer
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

Le composant **Navigation principale** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

- `Entrée` ou `Espace` :
  - Lorsque le focus est placé sur un bouton d'ouverture de sous-section de la navigation principale, et que sa sous-section associée est fermée, ouvre la sous-section.
  - Lorsque le focus est placé sur un bouton d'ouverture de sous-section la navigation principale, et que sa sous-section associée est déjà ouverte, referme la sous-section.
  - Lorsque le focus est placé sur un lien direct active l’élément focalisé.
- `Tab` : place le focus sur le prochain élément focalisable.
- `Maj` + `Tab` : place le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Structuration

- La navigation principale est structurée dans un élément `nav role="navigation"`.
- L’attribut `aria-label="Menu principal"` est utilisé pour nommer et donner un contexte explicite à la navigation.
- Les éléments de la navigation principale sont structurés dans une liste avec les éléments `ul` et `li`.

##### Éléments actifs

- Le lien actif dispose d’un attribut `aria-current="page"`.
- Si une sous-section associée à un bouton d'ouverture de la navigation est active, le bouton a un attribut `aria-current` défini sur "true".

##### Entrée de menu

- Les boutons d’ouverture et de fermeture des menus déroulants et mega-menus possèdent&nbsp;:
  - un attribut `aria-expanded` défini à `true`lorsque le sous-menu est affiché, à `false`lorsque la sous-section est fermée.
  - un attribut `aria-controls` défini sur l'ID du bloc refermable associé.

##### Responsive

En version mobile, la navigation principale est disponible dans une fenêtre modale à partir du bouton burger «&nbsp;Menu&nbsp;».

#### Contrastes de couleurs

La navigation principale est suffisamment contrastée en thème clair.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Navigation principale.

---

### Critères RGAA applicables

- **Couleurs** : 3.1, 3.2, 3.3
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Structuration** : 9.1, 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément nav](https://html.spec.whatwg.org/#the-nav-element)
