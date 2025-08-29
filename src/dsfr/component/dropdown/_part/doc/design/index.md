---
boost: 0
sitemap:
  noindex: true
title: Design du Menu déroulant
badge: beta
shortTitle: Design du Menu déroulant
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Menu déroulant.
shortDescription: Afficher des actions contextuelles sans encombrer l’interface
keywords: menu déroulant, dropdown, actions, filtre, bouton, options, accessibilité, interface, DSFR
cover: ./_asset/cover/cover.png
excerpt: Le menu déroulant du DSFR permet de proposer des options d’action, de filtrage ou de navigation dans un espace réduit, en dehors des formulaires.
summary: Le menu déroulant est un composant d’interface permettant de regrouper des actions, liens ou contrôles dans une zone compacte, accessible au clic. Il ne doit pas être utilisé pour la saisie de données en formulaire, où la liste déroulante est préférable. Ce composant est en version bêta et peut encore évoluer - ses cas d’usage sont nombreux, allant du filtre contextuel à l’action rapide, sans modification de libellé du bouton déclencheur. Il existe en trois tailles (SM, MD, LG) et respecte les bonnes pratiques d’accessibilité du Design Système de l’État.
mesh:
  - component/radio
  - component/checkbox
  - component/select
---

## Menu déroulant

> [!NOTE]
> **Ce composant est en version bêta.** Il n'existe pas en code et son design ou ses fonctionnalités peuvent encore être amenés à évoluer. N'hésitez pas à nous partager vos cas d'usage ou retours qui le concerne via notre formulaire de contact ou notre Tchap pour que nous puissions les étudier.

Retrouvez ces composants sur Figma [dans un fichier dédié bêta disponible sur Community](https://www.figma.com/community/file/1096003483468520396).

Le menu déroulant présente une liste d'actions ou de choix parmi lesquels un usager peut sélectionner une ou plusieurs options.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- Design

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du menu déroulant](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un bouton tertiaire]{required=true}

::dsfr-doc-pin[Une icône]{add="placée à gauche du libellé"}

::dsfr-doc-pin[Un libellé de bouton]{required=true}

::dsfr-doc-pin[Un chevron]{required=true add="placé à droite du libellé"}

::dsfr-doc-pin[Un séparateur]

::dsfr-doc-pin[Une liste d’options]{required=true}

:::

### Variations

Le menu déroulant ne propose aucune variation.

### Tailles

Le menu déroulant est disponible en 3 tailles :

- SM pour small
- MD pour medium
- LG pour large

La taille des éléments à l’intérieur dépend de la taille du bouton d’ouverture utilisé.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le menu déroulant.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le menu déroulant avec sa souris.

**État au clic**

L’état au clic correspond au comportement constaté par l’usager lorsqu’il clique sur le menu déroulant.

### Personnalisation

Le menu déroulant n’est pas personnalisable.
