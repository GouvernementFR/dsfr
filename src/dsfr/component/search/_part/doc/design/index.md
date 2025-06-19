---
boost: 0
sitemap:
  noindex: true
title: Design de la Barre de recherche
shortTitle: Design de la Barre de recherche
description: Présentation du composant Barre de recherche permettant d’accéder rapidement à un contenu via un mot clé ou une phrase.
shortDescription: Accès rapide à un contenu par mot clé
keywords: recherche, barre de recherche, navigation, formulaire, interface, DSFR, accessibilité, moteur de recherche
cover: ../_asset/cover/cover.png
excerpt: La barre de recherche permet à l’usager d’accéder à un contenu ciblé en saisissant un mot clé ou une phrase. Elle peut être globale ou contextuelle selon l’usage.
summary: Ce composant propose un champ de saisie avec bouton pour rechercher un contenu spécifique au sein d’un site ou d’un bloc fonctionnel. Elle s’intègre idéalement à l’en-tête pour un usage global ou dans une section précise pour des recherches contextuelles. Le composant suit des recommandations strictes en matière d’accessibilité, de largeur minimale, de rédaction des libellés et ne permet pas de personnalisation graphique.
---

## Barre de recherche

La barre de recherche est un système de navigation permettant à l'usager d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une phrase.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la barre de recherche](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un champ]{required=true}

::dsfr-doc-pin[Un bouton]{required=true}

::dsfr-doc-pin[Un texte d’exemple]{required=true}

:::

### Variations

La barre de recherche n’a pas de variation.

### Tailles

La barre de recherche est disponible en 2 tailles :

- MD pour medium

::dsfr-doc-storybook{storyId=search--default}

- LG pour large

::dsfr-doc-storybook{storyId=search--size-lg}

La largeur de la barre de recherche s’adapte à la taille de son conteneur.

> [!NOTE]
> La taille du bouton est toujours définie par son libellé. Ici, c’est donc bien la taille du champ de saisie qui évolue jusqu’à prendre la totalité de la largeur du conteneur.

- **Choisir la barre de recherche MD** lorsqu'il y a des contraintes d'espace dans vos interfaces. Le cas d’usage principal est l’accès à la recherche globale depuis l’en-tête. Il peut également être spécifique à certains composants dans le cas de recherche contextuelle (exemple : recherche pour filtrer des listes ou à l’intérieur d’un tableau de données).
- **Choisir la barre de recherche LG** pour présenter un moteur de recherche global à l’intérieur d'une page (exemple : mise en avant de la recherche depuis la page d’accueil, moteur de recherche sur la liste de résultats de recherche etc.).

> [!NOTE]
> En responsive version mobile et tablette, il est obligatoire d’utiliser le format MD qui est le plus adapté.

Si vous utilisez le format LG en desktop, le composant sera donc automatiquement redimensionné au format MD.

### États

La barre de recherche n’est sujette à aucun changement d’état.

### Personnalisation

La barre de recherche n’est pas personnalisable.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur du bouton de recherche

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas personnaliser la couleur du liseré de la barre de recherche.

:::

::::


::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-3.png)

Ne pas personnaliser le pictogramme du bouton de recherche.

:::

::::

### Maillage

- [En-tête](../../../../header/_part/doc/index.md)
