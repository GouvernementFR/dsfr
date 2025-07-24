---
title: Case à cocher
shortTitle: Case à cocher
titleId: Checkbox
description: Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.
shortDescription: Sélection multiple dans une liste
keywords: case à cocher, checkbox, sélection multiple, formulaire, DSFR, design système, accessibilité, interface
cover: ./_asset/cover/cover.png
excerpt: Le composant Case à cocher permet à l’usager de sélectionner librement une ou plusieurs options dans un ensemble de choix. Il est utilisé seul ou en groupe, avec ou sans texte d’aide.
summary: Ce composant permet une sélection multiple ou binaire dans les interfaces, particulièrement dans les formulaires. Il peut être utilisé seul pour un choix isolé, ou en liste pour plusieurs options. Des variantes avec texte d’aide sont proposées pour améliorer la compréhension. Il respecte les contraintes d’ergonomie, d’accessibilité et de cohérence éditoriale, sans personnalisation graphique.
mesh:
  - component/radio
  - component/input
  - component/form
---

## Case à cocher

La case à cocher est un élément d’interaction avec l’interface permettant à l’usager de sélectionner une ou plusieurs options dans une liste.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=checkbox--checkbox}

### Quand utiliser ce composant ?

Utiliser les cases à cocher pour permettre à l’utilisateur de sélectionner une ou plusieurs options dans une liste.

> [!NOTE]
> Bien différencier les cases à cocher des boutons radio ou liste déroulante. Les cases à cocher sont recommandées lorsque l’utilisateur doit effectuer une sélection multiple (de 0 à N éléments) dans une liste ou pour permettre un choix binaire (lorsque l’utilisateur peut sélectionner ou désélectionner une seule option).

Au-delà de 5 choix ou lorsque l’espace est restreint, utilisez une liste déroulante.

Si vous souhaitez contraindre le choix de l’utilisateur à une seule option, choisissez les boutons radio.

### Comment utiliser ce composant ?

- **Utiliser la case à cocher seule ou en liste**, selon son contexte d’utilisation.

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Utiliser la case à cocher au sein d’un formulaire.

:::

- **Privilégier une disposition en liste verticale** des cases à cocher lorsqu’elles sont en liste, la version horizontale étant plus difficile à lire pour les utilisateurs, notamment lorsque les options sont nombreuses.

### Règles éditoriales

- Il est important de **rédiger des libellés clairs et concis** pour faciliter la compréhension des options et du choix à réaliser.
- **Maintenir une cohérence dans les libellés** des boutons radio en utilisant des termes logiques entre eux et cohérents avec le reste du site.
- **Conserver une unité dans le format** d’écriture de tous les libellés de case à cocher, en mettant uniquement la première lettre en majuscule et sans ponctuer la fin d’un libellé.
- **Accompagner la ou les cases à cocher d’un texte d’aide pour clarifier la nature du contenu attendu,** lorsque nécessaire. Si cette information est essentielle, éviter de la masquer dans une infobulle.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Accompagner les cases à cocher d’un texte d’aide pour clarifier la nature du contenu attendu.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas masquer le texte d’aide dans une infobulle.

:::

::::
