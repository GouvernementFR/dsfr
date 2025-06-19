---
boost: 0
sitemap:
  noindex: true
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

Le composant **Liens d'évitement** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

> [!NOTE]
> Le RGAA demande qu’**au moins un lien d’accès au contenu principal** soit présent et fonctionnel sur chaque page web sauf cas particulier (site constitué d’une seule page ou accès direct au contenu principal).
>
>Cela permet aux personnes handicapées motrices d’éviter les blocs répétés (ex. menu, fil d’Ariane). Les liens d’évitement ou d’accès rapide sont également utilisés dans une moindre mesure par les personnes aveugles.

#### Structuration

- Les liens d’évitement / accès rapide doivent être à l’intérieur d’un élément `<nav role="navigation>`.
- L’attribut `aria-label="Accès rapide"` est utilisé pour nommer et donner un contexte explicite à la navigation.
- S’il y a plusieurs liens&nbsp;:
  - les liens doivent être structurés avec une liste `<ul><li>`,
  - le lien d’accès «&nbsp;Contenu&nbsp;» est le premier de la liste.

#### Présentation

Les liens d’évitement sont positionnés hors écran et apparaissent à la navigation au clavier lors de la prise de focus.

#### Contrastes de couleurs

Le composant **Liens d'évitement** est suffisamment contrasté en thème clair (ratio de 12,8:1) et en thème sombre (ratio de 4,9:1).

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant.

---

### Critères RGAA applicables
- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Structuration** : 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.8, 12.9
- **Consultation** : 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
