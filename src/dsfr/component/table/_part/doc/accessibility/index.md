---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du tableau
shortTitle: Accessibilité du Tableau
description: Présentez des données organisées en lignes et colonnes avec le composant Tableau, pensé pour faciliter la lisibilité, la comparaison et la manipulation de contenus structurés dans vos interfaces.
shortDescription: Présentation du composant Tableau pour organiser et comparer des données.
keywords: tableau, table, tri, pagination, données, DSFR, accessibilité, lignes, colonnes, affichage structuré, composant, visualisation
cover: ../_asset/cover/cover.png
excerpt: Le composant Tableau permet d’organiser des données sous forme de lignes et colonnes, facilitant la lecture, la comparaison et la sélection d’informations. Il prend en charge le tri, la pagination et l’intégration de composants interactifs.
summary: Le tableau est conçu pour présenter des données de manière claire et structurée. Il prend en charge les fonctionnalités de tri, pagination, sélection de lignes et intégration de composants variés (boutons, liens, champs de saisie…). Il propose plusieurs états (par défaut, sélectionné) et tailles d’affichage (SM, MD, LG) selon le contexte. Bien que non personnalisable dans son ensemble, il permet de personnaliser les composants qu’il intègre. Son usage est recommandé pour des données complexes ou nombreuses, tout en restant attentif à la lisibilité sur tous les formats d’écran.
---

## Tableau

Le tableau permet de présenter une liste structurée de données textuelles et/ou numériques dans le but de simplifier l’analyse et la comparaison d’informations pour l’usager.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Tableau** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction clavier n'est liée au composant.

### Règles d’accessibilité

#### Structuration

- Le tableau propose une balise caption contenant un titre pertinent.
- Les en-têtes de lignes et de colonnes doivent être des `<th>`.
- Associer les en-têtes de lignes et de colonnes avec&nbsp;:
  - un attribut `scope="row"` pour les en-têtes de lignes,
  - un attribut `scope="col"` pour les en-têtes de colonnes.

> [!NOTE]
> L’attribut `scope` n’est pas nécessaire sur les tableaux de données avec une seule ligne ou une seule colonne d’en-têtes.

#### Tableau complexe

Un tableau est dit complexe lorsqu’il y a des cellules fusionnées.

- Le tableau doit avoir un résumé pour aider les personnes qui en ont besoin d’appréhender le contenu présenté.
- Lier les cellules de contenu aux cellules d’en-tête avec l’attribut `headers` et les `id` des cellules d’en-tête séparés par un espace. L’attribut `scope` n’est alors pas nécessaire.

#### Contrastes de couleurs

Le composant Tableau est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Tableau.

---

### Critères RGAA applicables
- **Couleurs** : 3.2
- **Tableaux&nbsp;:** 5.1, 5.2, 5.4, 5.5, 5.6, 5.7
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.11, 10.12
- **Consultation&nbsp;:** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Ressources
[Tableaux de données complexes : comment les intégrer de manière accessible en HTML ?](https://access42.net/tableaux-donnees-complexes-integration-html-accessible-rgaa/).