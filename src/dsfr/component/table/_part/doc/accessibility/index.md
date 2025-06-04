---
title: Accessibilité du tableau
shortTitle: Accessibilité du Tableau
description: Présentez des données organisées en lignes et colonnes avec le composant Tableau, pensé pour faciliter la lisibilité, la comparaison et la manipulation de contenus structurés dans vos interfaces.
shortDescription: Présentation du composant Tableau pour organiser et comparer des données.
keywords: tableau, table, tri, pagination, données, DSFR, accessibilité, lignes, colonnes, affichage structuré, composant, visualisation
cover: ../_asset/cover/cover.png
excerpt: Le composant Tableau permet d’organiser des données sous forme de lignes et colonnes, facilitant la lecture, la comparaison et la sélection d’informations. Il prend en charge le tri, la pagination et l’intégration de composants interactifs.
summary: Le tableau est conçu pour présenter des données de manière claire et structurée. Il prend en charge les fonctionnalités de tri, pagination, sélection de lignes et intégration de composants variés (boutons, liens, champs de saisie…). Il propose plusieurs états (par défaut, sélectionné) et tailles d’affichage (SM, MD, LG) selon le contexte. Bien que non personnalisable dans son ensemble, il permet de personnaliser les composants qu’il intègre. Son usage est recommandé pour des données complexes ou nombreuses, tout en restant attentif à la lisibilité sur tous les formats d’écran.
---

# Tableau

Le tableau permet de présenter une liste structurée de données textuelles et/ou numériques dans le but de simplifier l’analyse et la comparaison d’informations pour l’usager.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

Le composant **Tableau** utilise le motif de conception ARIA WAI "Table" et suit les critères du RGAA.

### Interactions clavier

Aucune interaction clavier n'est liée au composant.

### Règles d'accessibilité

Sur ce composant plus qu’ailleurs, le respect des règles de gestion de l’accessibilité est primordial pour assurer la bonne utilisation par les technologies d’assistance. Les pré-requis sont :

  - Le tableau propose une balise caption contenant un titre pertinent.
  - Les en-têtes de lignes et de colonnes `<th>` doivent être déclarées comme telles :
    - Elles doivent être associées aux cellules de données :
      - Pour les en-têtes de ligne avec un attribut `scope="row"`.
      - Pour les en-têtes de colonne avec un attribut `scope="col"`.
  - Dans les tableaux dits complexes :
    - L’utilisation de cellules fusionnées en en-tête ou dans le corps du tableau implique de préciser la composition du tableau dans le caption afin d’aider un utilisateur à appréhender son contenu.
    - Il faudra également lier les cellules de contenu aux cellules d’en-tête via l’attribut `headers` et les `id` des cellules d’en-tête séparés par un espace. Dans ce cas, les attributs d’en-tête de ligne et colonne scope n’ont plus lieu d’être ajoutés ([Source Access42](https://access42.net/tableaux-donnees-complexes-integration-html-accessible-rgaa/)).

### Références

- [https://www.w3.org/WAI/ARIA/apg/patterns/table/](https://www.w3.org/WAI/ARIA/apg/patterns/table/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5)
