---
title: Bouton radio
shortTitle: Bouton radio
titleId: Radio
description: Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.
shortDescription: Sélection d’une option unique
keywords: bouton radio, sélection, interface, formulaire, design système, DSFR, accessibilité, choix unique
cover: ./_asset/cover/cover.png
excerpt: Le composant Bouton radio permet de proposer à l’usager un choix unique parmi plusieurs options. Il est recommandé pour les listes de 2 à 5 éléments maximum.
summary: Ce composant est conçu pour faciliter le choix unique dans une interface, en particulier dans les formulaires. Il offre différentes dispositions et variations, y compris des versions enrichies avec pictogrammes. Il s’utilise en groupe, avec des libellés clairs et une hiérarchie visuelle cohérente. L’intégration respecte des règles d’ergonomie, d’accessibilité et d’uniformité éditoriale.
---

## Bouton radio

Le bouton radio est un élément d’interaction avec l’interface permettant à l’usager de réaliser un choix unique parmi plusieurs options.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=radio--radio}

### Quand utiliser ce composant ?

Utiliser les boutons radio pour permettre à l’utilisateur de sélectionner une option unique dans une liste.

> [!NOTE]
> Bien différencier les boutons radio des cases à cocher ou liste déroulante. Les boutons radio sont recommandés lorsque l’utilisateur doit choisir un seul élément parmi 2 à 5 choix possibles.

Si plusieurs choix sont possibles ou que la sélection n’est pas obligatoire, privilégiez le composant case à cocher.

Au-delà de 5 choix ou lorsque l’espace est restreint, utilisez pour une liste déroulante.

### Comment utiliser ce composant ?

- **Considérer toujours le bouton radio comme un groupe de boutons radio**. Le bouton radio ne peut pas être utilisé seul, dans la mesure où il permet de faire un choix entre différentes options (minimum 2).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Utiliser les boutons radios pour permettre à l’usager de faire un choix entre différentes options.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas proposer de bouton radio seul.

:::

::::


- **Privilégier une disposition en liste verticale** des boutons radio, une liste horizontale étant plus difficile à lire, notamment lorsque les options sont nombreuses.
- **Éviter de sélectionner une option par défaut** pour que le choix de l’usager soit conscient (en particulier si celui-ci est obligatoire).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Proposer des choix sans sélectionner une option par défaut.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas pousser une option par défaut afin de laisser l’usager faire son choix en conscience.

:::

::::

### Règles éditoriales

- Il est important de **rédiger des libellés clairs et concis** pour faciliter la compréhension des options et du choix à réaliser.
- **Maintenir une cohérence dans les libellés** des boutons radio en utilisant des termes logiques entre eux et cohérents avec le reste du site.
- **Conserver une unité dans le format** d’écriture de tous les libellés de boutons radio, en mettant uniquement la première lettre en majuscule et sans ponctuer la fin d’un libellé.
- **Accompagner les boutons radio d’un texte d’aide pour clarifier la nature du contenu attendu** lorsque nécessaire. Si cette information est essentielle, éviter de la masquer dans une infobulle.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Accompagner les boutons radio d’un texte d’aide pour clarifier la nature du contenu attendu.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas masquer le texte d’aide dans une infobulle.

:::

::::
