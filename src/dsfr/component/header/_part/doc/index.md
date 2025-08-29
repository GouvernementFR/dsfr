---
title: En-tête
shortTitle: En-tête
titleId: Header
description: Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.
shortDescription: Identification du site et accès rapides
keywords: en-tête, header, marque, recherche, navigation, DSFR, accessibilité, interface
cover: ./_asset/cover/cover.png
excerpt: Le composant En-tête est positionné en haut de chaque page et permet à l’usager de savoir sur quel site il se trouve, tout en facilitant l’accès aux fonctions principales comme la recherche ou la connexion.
summary: Ce composant structure la zone supérieure de chaque page d’un site public. Il intègre les éléments d’identité visuelle de l’État, les éventuels accès rapides à des fonctions essentielles, et le moteur de recherche. Non personnalisable, l’en-tête garantit cohérence, lisibilité et conformité avec la charte de l’État, en version desktop comme mobile. Il peut être enrichi ou simplifié selon les besoins du site.
mesh:
  - component/navigation
  - component/footer
---

## En-tête

L’en-tête est un élément de navigation permettant aux usagers d’identifier sur quel site ils se trouvent et de leur donner un accès simplifié au moteur de recherche et à certaines pages ou fonctionnalités clés du site.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](demo/index.md)
- [Design](design/index.md)
- [Code](code/index.md)
- [Accessibilité](accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=header--header}

### Quand utiliser ce composant ?

**Intégrer l’en-tête sur l’ensemble des sites de la sphère gouvernementale**. Au sein d’un site, l’en-tête doit être affiché en haut de chacune des pages.

### Comment utiliser ce composant ?

- **Utiliser l’en-tête simple** (bloc Marque, nom du site et baseline) pour les sites n’ayant pas l’utilité d’un moteur de recherche, ni d’accès rapides.
- **Utiliser l’en-tête avec accès rapides** pour les sites souhaitant mettre en avant certaines pages ou fonctionnalités clés, par exemple la connexion à un espace sécurisé.
- **Utiliser l’en-tête avec la recherche** pour les sites souhaitant rendre facilement accessible leur moteur de recherche.
- **Utiliser la version complète** (accès rapides et moteur de recherche) pour les sites souhaitant combinés les deux fonctionnalités.
- **Ajouter un badge comportant la mention "Bêta" à l’en-tête** pour notifier l’usager que le site ou l’applicatif n’est pas en version stable.
- **Compléter l’en-tête d’une navigation principale** si nécessaire. L’en-tête peut tout à fait vivre seul, sans système de navigation principale, par exemple dans le cas de one-pager ou de site outil. [La navigation principale](../../../navigation/_part/doc/index.md) est un composant dissocié de l’en-tête.
- **Intégrer un lien vers la page d’accueil du site au sein de l’en-tête**. Son emplacement peut varier selon les éléments présents dans l’en-tête.

### Règles éditoriales

- **Proposer des libellés d’accès rapides clairs et concis** afin que l’usager comprenne facilement les pages ou fonctionnalités auxquelles il peut accéder.
- **Eviter de proposer un logo opérateur seul** et préférer l’accompagner du nom de site, voire d’une baseline, pour apporter du contexte à l’usager.
