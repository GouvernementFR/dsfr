---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la citation
shortTitle: Accessibilité de la citation
description: La citation permet d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.
shortDescription: Citer un texte dans un contenu éditorial.
keywords: citation, contenu éditorial, extrait, source, typographie, italique, UX, accessibilité, design system, mise en forme
cover: ../_asset/cover/cover.png
excerpt: Le composant Citation permet d’intégrer un extrait textuel dans une page, avec des champs de détails pour ajouter des précisions sur la source. Il doit respecter une présentation typographique soignée.
summary: Ce document décrit les usages du composant Citation, destiné à intégrer des extraits de textes ou de discours dans un contenu éditorial. Il explique comment distinguer la citation des composants de mise en avant ou de mise en exergue, précise les règles typographiques à appliquer, comme l’usage de guillemets et de l’italique, et recommande d’éviter les citations trop longues pour préserver la lisibilité. Il fournit également des indications sur la structuration, l’usage des champs de détails, et les règles de propriété intellectuelle à respecter.
mesh:
  - component/callout
  - component/highlight
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

Le composant **Citation** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

- Le texte cité est contenu dans un élément `<blockquote>` inséré dans un bloc `<figure>` et les informations complémentaires (image, auteur, ouvrage… ) dans l'élément `<figcaption>`.
- L’ouvrage cité doit être placé dans une balise `<cite>` et ainsi apparaitre en italique.
- L’icône et l’image sont décoratives et ne doivent pas être restituées aux technologies d’assistance.

> [!NOTE]
> Ne pas confondre l’attribut `cite` qui permet d’ajouter l’URL de la source de la citation si celle-ci provient d’un autre site et l’élément `<cite>` à utiliser pour le titre de l’œuvre citée.
> L’attribut et l’élément n’ont pas d’importance pour l’accessibilité.

### Contrastes de couleurs

Le composant Citation est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

NVDA et JAWS sont les seuls lecteurs d’écran à restituer correctement la sémantique de l’élément blockquote.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2
- **Liens&nbsp;:** 6.1, 6.2
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.3, 9.4
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:**: 13.9, 13.11

---

### Références

- [Élément blockquote](https://html.spec.whatwg.org/#the-blockquote-element)
- [Élément cite](https://html.spec.whatwg.org/#the-cite-element)
- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
