---
title: Tableau
shortTitle: Tableau
titleId: Table
description: Présentez des données organisées en lignes et colonnes avec le composant Tableau, pensé pour faciliter la lisibilité, la comparaison et la manipulation de contenus structurés dans vos interfaces.
shortDescription: Présentation du composant Tableau pour organiser et comparer des données.
keywords: tableau, table, tri, pagination, données, DSFR, accessibilité, lignes, colonnes, affichage structuré, composant, visualisation
cover: ./_asset/cover/cover.png
excerpt: Le composant Tableau permet d’organiser des données sous forme de lignes et colonnes, facilitant la lecture, la comparaison et la sélection d’informations. Il prend en charge le tri, la pagination et l’intégration de composants interactifs.
summary: Le tableau est conçu pour présenter des données de manière claire et structurée. Il prend en charge les fonctionnalités de tri, pagination, sélection de lignes et intégration de composants variés (boutons, liens, champs de saisie…). Il propose plusieurs états (par défaut, sélectionné) et tailles d’affichage (SM, MD, LG) selon le contexte. Bien que non personnalisable dans son ensemble, il permet de personnaliser les composants qu’il intègre. Son usage est recommandé pour des données complexes ou nombreuses, tout en restant attentif à la lisibilité sur tous les formats d’écran.
---

## Tableau

Le tableau permet de présenter une liste structurée de données textuelles et/ou numériques dans le but de simplifier l’analyse et la comparaison d’informations pour l’usager.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=table--table}

### Quand utiliser ce composant ?

Utiliser le tableau pour présenter des données. À titre d’exemple, il peut :

- Permettre une visualisation de données organisées en lignes et en colonnes.
- Permettre l’analyse et la comparaison d’informations.
- Servir d’alternative textuelle à un graphique, si vous souhaitez que l'usager puisse lire les valeurs exactes des données plutôt que de les estimer visuellement, par exemple.

Toutefois, si les tableaux sont très pratiques, ils peuvent très vite devenir complexes et générer des difficultés de compréhension. Soyez donc créatifs pour que votre interface soit synthétique, intuitive et agréable à utiliser en proposant, si c’est nécessaire, plusieurs modes de présentation des données.

Pour consulter des exemples de vues alternatives aux tableaux, se référer à [la planche Figma](https://www.figma.com/design/uVVICt7kJ1n4dzJ6t8x1uL/DSFR---Composants---v1.12.0?node-id=29382-10540&t=cJHK2fZAoZxn4ck2-1).

> [!NOTE]
> Ce composant tableau n’est pas un tableur, il ne permet pas (sauf développement ad hoc) de réaliser d'opérations avec les données.

### Comment utiliser ce composant ?

- **Adapter l’usage du tableau à la complexité et/ou au volume de données à présenter**. Lorsque les données sont très simples ou si votre tableau possède moins de 4 lignes ou 3 colonnes, envisagez d’autres formats de présentation.
- **Insérer des composants au sein de vos tableaux**, selon vos besoin, et parmi ceux autorisés : texte, chiffres, icône, pictogramme, tag, badge, bouton, lien, champ de saisie, infobulle, interrupteur et liste déroulante.
- **Permettre le tri du contenu de chaque colonne** par ordre croissant ou décroissant, lorsque nécessaire.
- **Rendre la première colonne flottante** afin de permettre le défilement du reste du tableau, notamment s’il est plus large que la fenêtre.
- **Ajouter une pagination dans la barre d’outils** si le tableau contient beaucoup de lignes afin de faciliter la navigation de l’usager.
- **Ajouter des cases à cocher**, placée tout à gauche de la ligne, si vous souhaitez permettre la sélection de lignes.
- **Intégrer un ou plusieurs boutons d’actions** spécifiques à une ligne dans une cellule, au besoin. Dans ce cas, pensez à utiliser les boutons secondaires et tertiaires pour apporter la bonne hiérarchie entre les différents niveaux d’actions possibles.
- **Permettre la sélection du nombre de lignes affichées par page du tableau** via une liste déroulante lorsque cela est pertinent.
- **Utiliser des bordures verticales** pour améliorer la lisibilité du tableau si ce dernier est complexe.
- **Améliorer la lisibilité du tableau en version mobile** en utilisant une vue plus adaptée comme la liste.
- **Placer systématiquement les actions de colonnes à droite** au sein de la cellule d’en-tête.
- **Placer systématiquement la colonne de case à cocher à gauche**.
- **Placer systématiquement la cellule d’action par ligne à droite**.
- **Permettre la fusion de cellules d’en-tête et de contenu**, de façon verticale et/ou horizontale.
- **Éviter de détourner l’usage des tableaux**. Ils sont destinés à présenter des données et non à faire de la mise en page.

### Règles éditoriales

- **Utiliser des titres de colonnes et, le cas échéant, de lignes, clairs et concis.**
- **Mettre une majuscule au début des titres de colonnes** et ne pas terminer par un élément de ponctuation (virgule, point ou point-virgule).
- **Synthétiser les contenus** à l’intérieur de chaque cellule.
- **Indiquer “N/A” dans toute cellule vide**.
- **Préciser l’unité de mesure d’une donnée dans le titre de la colonne correspondante**, afin d'éviter les répétitions dans les cellules de contenu.
- **Aligner les chiffres à droite** au sein de la cellule. Par défaut, le reste du contenu des cellules est aligné à gauche et centré verticalement.