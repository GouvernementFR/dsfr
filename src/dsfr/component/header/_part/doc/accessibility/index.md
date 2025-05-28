---
title: Accessibilité de l'En-tête
shortTitle: Accessibilité de l'En-tête
description: Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.
shortDescription: Identification du site et accès rapides
keywords: en-tête, header, marque, recherche, navigation, DSFR, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant En-tête est positionné en haut de chaque page et permet à l’usager de savoir sur quel site il se trouve, tout en facilitant l’accès aux fonctions principales comme la recherche ou la connexion.
summary: Ce composant structure la zone supérieure de chaque page d’un site public. Il intègre les éléments d’identité visuelle de l’État, les éventuels accès rapides à des fonctions essentielles, et le moteur de recherche. Non personnalisable, l’en-tête garantit cohérence, lisibilité et conformité avec la charte de l’État, en version desktop comme mobile. Il peut être enrichi ou simplifié selon les besoins du site.
---

## En-tête

L’en-tête est un élément de navigation permettant aux usagers d’identifier sur quel site ils se trouvent et de leur donner un accès simplifié au moteur de recherche et à certaines pages ou fonctionnalités clés du site.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **En-tête** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **En-tête**.

Les interactions clavier sont celles des composants qui la compose :
- voir [Bloc marque](../../../../logo/_part/doc/accessibility/index.md).
- voir [Lien](../../../../link/_part/doc/accessibility/index.md).
- voir [Bouton](../../../../button/_part/doc/accessibility/index.md).
- voir [Barre de recherche](../../../../search/_part/doc/accessibility/index.md).
- voir [Navigation principale](../../../../navigation/_part/doc/accessibility/index.md).
- voir [Modale](../../../../modal/_part/doc/accessibility/index.md).
- voir [Sélecteur de langue](../../../../translate/_part/doc/accessibility/index.md).
- voir [Paramètre d'affichage](../../../../display/_part/doc/accessibility/index.md).

#### Règles d'accessibilité

- L'élément `<header>` doit posséder le role aria `banner`.
- Pour les libellés des liens, utiliser des formulations claires et concises.
- Fournir des alternatives textuelles pour les éléments visuels.
- Le lien vers l’accueil du site est placé sur le nom du site (qu’il soit dans le bloc-marque, le nom du site et sa baseline ou le logo).
- Le lien est étendu à l’ensemble du bloc-marque en css par le bias de la classe `fr-enlarge-link`.
- Le title du lien doit contenir le terme Accueil, suivi du nom du site (ex: `title="Accueil - [À MODIFIER | Nom du site / service]”`).
- Si l'en-tête est complexe et que le bloc marque n’est pas "République Française", mais une autre entité, cette dernière doit également être ajoutée (voir les exemples du [Bloc marque](../../../../logo/_part/doc/code/index.md)).

Les règles d'accessibilité du composant d'en-tête découlent de celles des composants qui la compose (cf liste ci-dessus).

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
