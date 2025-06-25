---
title: Interrupteur
shortTitle: Interrupteur
titleId: Toggle
description: Présentation du composant Interrupteur permettant de basculer entre deux états opposés sans validation supplémentaire.
shortDescription: Basculer entre deux états opposés
keywords: interrupteur, switch, interface, interaction, accessibilité, design système, DSFR, état activé, état désactivé
cover: ./_asset/cover/cover.png
excerpt: Le composant Interrupteur permet à l’usager de choisir entre deux états opposés, comme activer ou désactiver une fonctionnalité, avec effet immédiat.
summary: Ce composant est conçu pour gérer rapidement des actions binaires dans une interface, notamment pour paramétrer des fonctionnalités comme les notifications. Il permet un usage fluide grâce à un affichage clair, des libellés explicites et une structure accessible. Il peut être utilisé seul ou en groupe et s’adapte visuellement aux contraintes d’affichage sans nécessiter de validation supplémentaire.
---

## Interrupteur

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=toggle--toggle}

### Quand utiliser ce composant ?

Privilégier l’usage des interrupteurs pour paramétrer des fonctionnalités transverses (exemple : activation / désactivation des notifications), d’autant que le changement d'état de l’interrupteur a un effet immédiat et ne nécessite pas de validation.

### Comment utiliser ce composant ?

- **Veiller à ce que l’interrupteur et son libellé soient visuellement proches** afin d’en simplifier la compréhension et l’accessibilité (notamment pour les usagers naviguant avec une loupe d’écran).
- **Prioriser la composition interrupteur à gauche et libellé à droite** qui est la plus commune et la plus intelligible.
- **Utiliser l’interrupteur en groupe** pour constituer une liste d’actions de même nature.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Utiliser l’interrupteur en groupe pour constituer une liste d’actions de même nature.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas regrouper des interrupteurs qui n’ont rien à voir.

:::

::::

- **Respecter un format unique pour tous les interrupteurs d’un même groupe** (bouton à gauche et libellé à droite, ajout d’une description,statut etc.) ****

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Respecter un format unique pour tous les interrupteurs d’un même groupe.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas proposer des formats différents entre les interrupteurs d’un même groupe.

:::

::::

### Règles éditoriales

- **Rédiger un libellé clair, explicite et concis** pour faciliter la compréhension de l’usager.
- **Accompagner le libellé d’une description** lorsque celui-ci ne permet pas, à lui seul, de comprendre l’action requise par l’usager.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Accompagner le libellé d’une description lorsqu’il ne permet pas, à lui seul, de comprendre l’action requise par l’usager.

:::

::::

- **Ajouter un titre au composant** pour clarifier le cadre dans lequel il est utilisé.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-2.png)

Ajouter un titre au composant pour clarifier le cadre dans lequel il est utilisé.

:::

::::
