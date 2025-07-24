---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Sommaire
shortTitle: Accessibilité du Sommaire
description: Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.
shortDescription: Navigation entre les sections d’une page
keywords: sommaire, navigation, ancre, contenu long, DSFR, accessibilité, design système, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Sommaire affiche des liens ancrés vers les différentes sections d’une page, facilitant la lecture et l’accès rapide à l’information pour l’usager.
summary: Ce composant permet d’améliorer l’expérience utilisateur dans les pages à forte densité de contenu. Il affiche en haut de page une liste d’ancres reprenant fidèlement les titres des sections éditoriales, dans un bloc distinct visuellement. Le sommaire n’est pas sticky, ne se personnalise pas, et garantit une navigation fluide et cohérente au sein d’un même contenu.
mesh:
  - component/breadcrumb
  - component/sidemenu
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

Le composant **Sommaire** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le sommaire&nbsp;:

- `Tab` : place le focus sur le prochain élément focalisable.
- `Maj + Tab` : lace le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

- Le sommaire est un système de navigation secondaire. Il doit être structuré dans un élément `nav role="navigation"`.
- Le conteneur principal du menu latéral possède un attribut `aria-labelledby` défini sur l’ID du titre du sommaire afin de nommer et donner un contexte explicite à la navigation.
- Les éléments du sommaire sont structurés dans une liste avec les éléments `ul` et `li`.

### Contrastes de couleurs

Le composant Sommaire est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Menu latéral.

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Structuration** : 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément nav](https://html.spec.whatwg.org/#the-nav-element)
