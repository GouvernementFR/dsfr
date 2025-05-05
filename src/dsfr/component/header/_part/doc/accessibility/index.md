---
title: Accessibilité de l'en-tête
---

## En-tête

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
