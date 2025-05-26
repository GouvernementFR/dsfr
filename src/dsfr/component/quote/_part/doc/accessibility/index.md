---
title: Accessibilité de la citation
shortTitle: Accessibilité de la citation
description: La citation permet d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.
shortDescription: Citer un texte dans un contenu éditorial.
keywords: citation, contenu éditorial, extrait, source, typographie, italique, UX, accessibilité, design system, mise en forme
cover: ../_asset/cover/cover.png
excerpt: Le composant Citation permet d’intégrer un extrait textuel dans une page, avec des champs de détails pour ajouter des précisions sur la source. Il doit respecter une présentation typographique soignée.
summary: Ce document décrit les usages du composant Citation, destiné à intégrer des extraits de textes ou de discours dans un contenu éditorial. Il explique comment distinguer la citation des composants de mise en avant ou de mise en exergue, précise les règles typographiques à appliquer, comme l’usage de guillemets et de l’italique, et recommande d’éviter les citations trop longues pour préserver la lisibilité. Il fournit également des indications sur la structuration, l’usage des champs de détails, et les règles de propriété intellectuelle à respecter.
---

## Citation

La citation est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Citation** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Aucune interaction clavier n'est liée au composant.
Lorsque qu'un composant interactif est utilisé à l'intérieur, comme un bouton ou un lien, les interactions clavier correspondent à celles de cet élément.

#### Règles d'accessibilité

- Le texte de la citation est contenu dans un élément `<blockquote>` inséré dans un bloc `<figure>` et les informations complémentaires (image, auteur, ouvrage... ) dans l'élément `<figcaption>`.
- Lorsque la citation reprend un text d’un autre site, ajouter l’url de celui-ci en attribut `cite` de l'élément `<blockquote>` afin d’indiquer au moteur de recherche la liaison. Ne pas ajouter l’attribut si aucune url de ressource n’est disponible.
- L’ouvrage cité doit être placé dans une balise `<cite>` et ainsi apparaitre en italique.
- L'icône est illustrative et n'a pas nécessité à être retranscrite sur lecteur d'écran.

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
