---
title: Code des liens d'évitement
shortTitle: Code des liens d'évitement
description: Les liens d’évitement permettent aux usagers utilisant un clavier ou un lecteur d’écran d’accéder rapidement aux zones principales d’une page.
shortDescription: Accéder rapidement au contenu avec le clavier.
keywords: lien d’évitement, accessibilité, navigation clavier, lecteur d’écran, UX, interface, design system, contenu, header, composant
cover: ../_asset/cover/cover.png
excerpt: Le lien d’évitement est un composant essentiel à l’accessibilité. Il permet aux usagers de naviguer directement vers les zones clés d’une page, sans passer par tous les éléments précédents.
summary: Ce document présente le composant Lien d’évitement, un outil fondamental pour l’accessibilité numérique. Il explique pourquoi son intégration est obligatoire, comment l’utiliser correctement en début de page, et avec quels types de liens. Il précise également les règles d’affichage, de contenu et de quantité, pour en garantir l’efficacité. Ce guide s’adresse aux développeurs et designers soucieux d’offrir une navigation fluide aux usagers naviguant au clavier ou via un lecteur d’écran.
---

## Liens d'évitement

Les liens d’évitement sont un système de navigation secondaire permettant à l’usager naviguant au clavier, ou équipé d’un lecteur d'écran, d’accéder plus rapidement à des zones précises de la page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Liens d'évitement** permet aux utilisateurs de naviguer rapidement vers les sections principales de la page.

**Toujours placé en haut de la page**, sa structure est la suivante :

- Le **conteneur des liens d'évitement** est un élément HTML `<div>` défini par la classe `fr-skiplinks`.
- Les liens d'évitement sont entourés par un élément HTML `<nav>` défini par la classe `fr-container` avec le rôle `navigation` et comportant un attribut `aria-label` dont la valeur est "Accès rapide".
- La **liste des liens d'évitement** est un élément HTML `<ul>` défini par la classe `fr-skiplinks__list`.
- Chaque élément `<li>` de la liste contient :
  - Un **lien d'évitement**, un élément HTML `<a>` défini par la classe `fr-link`.

> [!WARNING]
> Les liens d'évitement pointent vers des ancres (`#intitulé`), qui doivent être présentes dans la page.
> Par exemple, Le lien `<a class="fr-link" href="#content">Contenu</a>` ne peut fonctionner que si un élément avec l’id “content” est présent dans la page (comme `<main id=”content”>`), à l’endroit souhaité.

**Exemple de structure HTML**

```HTML
<div class="fr-skiplinks">
    <nav role="navigation" aria-label="Accès rapide" class="fr-container">
        <ul class="fr-skiplinks__list">
            <li>
                <a class="fr-link" href="#content">Contenu</a>
            </li>
            <li>
                <a class="fr-link" href="#header-navigation">Menu</a>
            </li>
            <li>
                <a class="fr-link" href="#header-search">Recherche</a>
            </li>
            <li>
                <a class="fr-link" href="#footer">Pied de page</a>
            </li>
        </ul>
    </nav>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et des liens d'évitement doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/skiplink/skiplink.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/skiplink/skiplink.legacy.min.css" rel="stylesheet">
```

#### Variantes de style

Le composant **Liens d'évitement** ne possède pas de variantes de style.

---

### JavaScript

Le composant **Liens d'évitement** ne nécessite pas de JavaScript spécifique pour fonctionner.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+skiplink+)
