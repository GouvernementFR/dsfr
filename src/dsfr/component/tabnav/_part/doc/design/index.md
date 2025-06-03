---
title: Design de la Navigation Tertiaire bêta
shortTitle: Design de la Navigation Tertiaire bêta
description: Composant de navigation en version bêta, destiné à offrir un troisième niveau de navigation complémentaire à la navigation secondaire.
shortDescription: Composant de navigation de 3e niveau en complément du menu latéral
keywords: navigation, tertiaire, DSFR, menu, accessibilité, hiérarchie, bêta
cover: ../_asset/cover/cover.png
excerpt: Système de navigation destiné aux sites à structure complexe, la navigation tertiaire permet d’accéder à des pages liées à une sous-rubrique en complément d’un menu latéral.
summary: La navigation tertiaire est un composant en bêta permettant d’ajouter un troisième niveau de navigation pour les sites structurés avec des rubriques profondes. Elle ne peut être utilisée qu’en complément d’une navigation secondaire (comme un menu latéral), et vient structurer l’accès à des pages qui ne sont pas couvertes par les navigations principales. L’état actif, le positionnement sous le titre de rubrique et l’uniformité des styles sont essentiels à sa bonne intégration.
beta: true
---

## Navigation Tertiaire bêta

La navigation tertiaire est un système de navigation permettant un troisième niveau de navigation au sein d’une section de contenu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- Design

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la navigation tertiaire](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé du lien direct]{required=true}

::dsfr-doc-pin[Un soulignement]{required=true add="pour indiquer la page active"}

::dsfr-doc-pin[Un séparateur]{required=true}

:::

### Variations

La navigation tertiaire ne propose aucune variation.

### Tailles

La navigation tertiaire prend une largeur fixe de 8 colonnes.

### États

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole une entrée de la navigation tertiaire.

**État au clic**

L’état au clic correspond au comportement constaté par l’usager après avoir cliqué sur une entrée de la navigation tertiaire.

**État actif**

L’état actif correspond au comportement constaté par l’usager après avoir cliqué sur un des liens de la navigation tertiaire. Il renseigne sur la page courante en cours de consultation.

### Personnalisation

La navigation tertiaire n’est pas personnalisable.

- Utiliser uniquement la couleur bleu pour les sections de la navigation tertiaire.
- Ne pas personnaliser la couleur des sections de la navigation tertiaire.
- Utiliser le soulignement prévu à cet effet pour indiquer la page active au sein de la navigation tertiaire.
- Ne pas personnaliser l’état actif de la page courante.

### Maillage

- [Menu latéral](../../../../sidemenu/_part/doc/index.md)
- [Navigation principale](../../../../navigation/_part/doc/index.md)
