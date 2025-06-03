---
title: Accessibilité du tableau
---
# Tableau

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

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