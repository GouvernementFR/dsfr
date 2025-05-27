---
title: Accessibilité du sélecteur de langue
shortTitle: Accessibilité du sélecteur de langue
description: Le sélecteur de langues permet à l’usager de choisir la langue d’affichage du site dans un environnement multilingue.
shortDescription: Choisir la langue d’affichage du site.
keywords: sélecteur de langues, multilingue, accessibilité, langue, interface, UX, design system, en-tête, code ISO, traduction
cover: ../_asset/cover/cover.png
excerpt: Le sélecteur de langues est un composant essentiel dans les sites multilingues. Il permet à l’usager de basculer entre différentes langues tout en respectant les bonnes pratiques d’affichage et de positionnement.
summary: Ce contenu présente les usages du sélecteur de langues dans un site disponible en plusieurs langues. Il précise son positionnement recommandé dans l’interface, généralement dans l’en-tête en tant qu’accès rapide, ainsi que les règles éditoriales à respecter pour nommer les langues avec clarté. Il rappelle également les recommandations juridiques liées à l’affichage du français. Ce guide est destiné aux concepteurs de sites publics ou multilingues qui souhaitent garantir une navigation fluide, cohérente et conforme aux bonnes pratiques.
---

# Sélecteur de langue

Le sélecteur de langues est un élément d’interaction avec l’interface permettant à l’usager de choisir la langue dans laquelle est affiché le contenu du site.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Sélecteur de langue** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le Sélecteur de langue :

- `Entrée` : Ouvre ou ferme le menu de sélection de langue.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Le sélecteur de langue dispose d'un `role="navigation"`.
- Le sélecteur de langue contient un bouton d'ouverture avec le `type="button"`.
- Si le collapse associé au bouton d'ouverture du sélecteur de langue est visible, le bouton a l'attribut `aria-expanded` défini sur `true`. Si le collapse n'est pas visible, `aria-expanded` est défini sur `false`.
- Le bouton d'ouverture du sélecteur de langue a l'attribut `aria-controls` défini sur l'ID du collapse.
- L'élément actif de la liste de langue porte un attribut `aria-current=”true”`.
- Chaque élément de la liste de langue disposent d'un attribut `hreflang` et un attribut `lang`, dont les valeurs spécifient la langue cible.
- Une langue est indiquée par son code [ISO 639-1](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1), puis son nom en toute lettres et dans la langue cible.
  Par exemple, on écrira "EN - English", et pas "EN - Anglais".

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
