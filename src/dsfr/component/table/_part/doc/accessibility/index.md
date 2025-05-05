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
