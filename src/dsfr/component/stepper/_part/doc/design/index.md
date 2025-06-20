---
boost: 0
sitemap:
  noindex: true
title: Design de l'Indicateur d'étapes
shortTitle: Design de l'Indicateur d’étapes
description: Présentation du composant Indicateur d’étapes destiné à guider l’usager au sein d’un parcours en plusieurs étapes comme un formulaire ou une démarche en ligne.
shortDescription: Suivi d’un parcours en plusieurs étapes
keywords: indicateur d’étapes, formulaire, démarche, progression, design système, DSFR, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: L’indicateur d’étapes permet à l’usager de se repérer dans un processus linéaire, en affichant la position actuelle dans le parcours ainsi que les étapes restantes.
summary: Ce composant s’intègre dans les parcours à étapes pour aider l’usager à visualiser son avancée. Il affiche une barre de progression, un titre explicite pour chaque étape et un repère numérique. Il ne permet pas de navigation directe entre les étapes mais accompagne visuellement l’usager du début à la fin du formulaire. Sa structure est fixe, sans personnalisation, pour garantir une expérience uniforme et accessible.
---

## Indicateur d'étapes

L’indicateur d'étapes est un élément éditorial permettant d’accompagner l’usager au sein d’un formulaire ou une démarche en plusieurs étapes.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Le numéro de l'étape en cours et le nombre d'étapes total]{required=true}

::dsfr-doc-pin[Le titre de l'étape en cours]{required=true}

::dsfr-doc-pin[Une barre de progression]{required=true add='qui contient autant de sections qu’il y a d’étapes, avec les étapes validées et en cours indiquées en bleu'}

::dsfr-doc-pin[Le titre de l'étape suivante]{required=true}

:::

> [!NOTE]
> Aucun des éléments de l’indicateur d'étapes n’est cliquable.

### Variations

L’indicateur d’étapes ne propose aucune variation.

### Tailles

La largeur de l’indicateur d’étapes s’adapte à la taille de son conteneur.

### États

L’indicateur d’étapes n’est sujet à aucun changement d’état.

### Personnalisation

L’indicateur d’étapes n’est pas personnalisable.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Conserver la barre de progression en l’état.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur ou le design de la barre de progression.

:::

::::

### Maillage

- [Formulaires](../../../../form/_part/doc/index.md)
- [Champ de saisie](../../../../input/_part/doc/index.md)
