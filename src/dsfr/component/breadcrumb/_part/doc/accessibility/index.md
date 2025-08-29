---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Fil d'Ariane
shortTitle: Accessibilité du Fil d’Ariane
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Fil d'Ariane.
shortDescription: Se repérer dans l’arborescence avec le fil d’Ariane.
keywords: fil d’Ariane, navigation, arborescence, hiérarchie, composant, UX, design system, position, retour, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le fil d’Ariane est un outil de navigation essentiel pour guider l’usager dans une structure de site complexe. Il indique la position courante et facilite les retours à des pages de niveau supérieur.
summary: Ce document présente le fil d’Ariane comme un composant fondamental de navigation secondaire. Il explique quand l’utiliser, comment le positionner correctement dans la page, les règles de cliquabilité, les restrictions liées au fond et les principes éditoriaux à respecter. Le fil d’Ariane renforce l’orientation de l’usager en lui offrant un repère visuel clair dans l’architecture du site. Ce guide s’adresse aux designers et intégrateurs souhaitant garantir une navigation fluide et cohérente dans des environnements complexes.
mesh:
  - component/header
  - component/navigation
---

## Fil d’Ariane

Le fil d’Ariane est un système de navigation secondaire qui permet à l’usager de se situer sur le site qu’il consulte.

Le fil d’Ariane est un système de navigation secondaire qui permet à l’usager de se situer sur le site qu’il consulte.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Fil d’Ariane** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

> [!NOTE]
> Le fil d’Ariane n’est pas obligatoire dans le cadre du respect du RGAA. Il s’agit d’un critère d’accessibilité de niveau AAA de WCAG.
>
> Son usage est néanmoins fortement recommandé pour aider les personnes avec un handicap cognitif notamment à mieux se repérer sur le site.

#### Structuration

- Le fil d’Ariane est un système de navigation secondaire. Il doit être structuré dans un élément `nav role="navigation"`.
- L’attribut `aria-label="vous êtes ici :"` est utilisé pour nommer et donner un contexte explicite à la navigation.
- Le fil d’Ariane doit être placé en dehors du contenu principal (`main`) afin de permettre au lien d’accès au d’éviter tous les liens de navigation.
- Les éléments du fil d’Ariane sont structurés dans une liste numérotée avec les éléments `ol` et `li `.

En version mobile, l’affichage direct du fil d’Ariane est remplacé par un bouton «&nbsp;Voir le fil d’Ariane&nbsp;». À l’activation du bouton, le bouton disparaît et le focus est replacé sur le premier élément du fil d’Ariane.

**Il est obligatoire de conserver le même emplacement pour le fil d’Ariane au sein d’un ensemble de pages.**

##### Identification de la page courante

- La page courante n’est pas structurée dans un lien et n’est pas soulignée.
- Elle est en plus identifiée explicitement avec un attribut `aria-current="page"` pour les personnes aveugles.

### Contrastes de couleurs

Le composant Fil d’Ariane est suffisamment contrasté en thème clair et en thème sombre.

:::fr-table[Contrastes des textes — composant Fil d’Ariane]{valign=top multiline=true caption=false}
| Élément |  Thème clair | Thème sombre |
|------|-----|-----|
|**lien / bouton**| 5,74:1 | 5,82:1 |
|**page courante**| 11,37:1| 11,5:1 |
:::

---

### Restitution par les lecteurs d’écran

L’attribut `aria-current="page"` peut être restitué différemment selon les lecteurs d’écran.

- VoiceOver macOS, Narrateur&nbsp;: «&nbsp;page actuelle&nbsp;»
- NVDA, JAWS&nbsp;: «&nbsp;page courante&nbsp;»
- Talkback, VoiceOver iOS&nbsp;: «&nbsp;page active&nbsp;»

À noter&nbsp;: VoiceOver iOS et Narrateur ne restituent pas `aria-current` sur un élément `a` sans attribut `href`.

La page courante est alors indiquée implicitement aux personnes aveugles car celle-ci n’est pas structurée dans un lien, contrairement aux autres pages.

---

### Critères RGAA applicables

- **Couleurs** : 3.1, 3.2
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Structuration** : 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Attribut aria-current](https://www.w3.org/TR/wai-aria-1.1/#aria-current)
- [Critère de succès WCAG 2.4.8 AAA — Localisation](https://www.w3.org/Translations/WCAG21-fr/#location)
