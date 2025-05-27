---
title: Accessibilité du Menu latéral
shortTitle: Accessibilité du Menu latéral
description: Le menu latéral est un composant de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.
shortDescription: Naviguer entre pages liées avec un menu latéral.
keywords: menu latéral, navigation, composant, design system, interface, UX, accessibilité, hiérarchie, rubrique, sommaire
cover: ./_asset/cover/cover.png
excerpt: Le menu latéral permet de structurer la navigation entre les pages d’une même rubrique ou d’un thème. Il s’utilise en complément de la navigation principale, notamment pour les sites à profondeur élevée.
summary: Ce contenu présente le menu latéral comme un composant de navigation secondaire destiné à faciliter la circulation entre les pages d’une rubrique. Il détaille ses cas d’usage, ses comportements interactifs, ses variations selon la profondeur de navigation, et les règles éditoriales à respecter. Il précise également les contraintes de structure, les bonnes pratiques en responsive, et rappelle les distinctions avec le sommaire. Ce guide est conçu pour les équipes souhaitant implémenter une navigation hiérarchique claire et accessible dans des interfaces complexes.
---

## Menu latéral

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Menu latéral** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

- `Entrée` ou `Espace` :
    - Lorsque le focus est placé sur le bouton d'ouverture du menu latéral, et que sa sous-section associée est fermée, ouvre la sous-section.
    - Lorsque le focus est placé sur le bouton d'ouverture du menu latéral, et que sa sous-section associée est déjà ouverte, referme la sous-section.
- `Tab` : Place le focus sur le prochain élément focalisable. Tous les éléments focalisables placés dans la sous-section sont inclus dans la séquence des éléments accessibles au `tab` de la page.
- `shift` + `Tab` : Place le focus sur l'élément focalisable précédent. Tous les éléments focalisables placés dans la sous-section sont inclus dans la séquence des éléments accessibles au `tab` de la page.


#### Règles d'accessibilité

- Le conteneur principal du menu latéral a l'attribut `aria-labelledby` défini sur l'ID du titre du menu latéral.
- Le bouton d'ouverture du menu latéral a l'attribut `aria-controls` défini sur l'ID de la sous-section.
- Si la sous-section associée au bouton d'ouverture du menu latéral est visible, le bouton a l'attribut `aria-expanded` défini sur "true". Si la sous-section n'est pas visible, `aria-expanded` est défini sur "false".
- Si la sous-section associée au bouton d'ouverture du menu latéral est active, le bouton a l'attribut `aria-current` défini sur "true". Si la sous-section n'est pas active, `aria-current` est défini sur "false".
- Le lien actif de la liste du menu latéral a l'attribut `aria-current` défini sur "page".

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
