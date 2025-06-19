---
boost: 0
sitemap:
  noindex: true
title: Code de la Pagination
shortTitle: Code de la Pagination
description: Présentation du composant Pagination permettant à l’usager de naviguer facilement entre les pages d’une liste d’éléments trop longue pour être affichée en une seule fois.
shortDescription: Navigation entre plusieurs pages d’une liste
keywords: pagination, navigation, pages, liste, interface, design système, DSFR, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le composant Pagination permet à l’usager de parcourir les différentes pages d’une liste d’éléments, avec des repères clairs, une troncature automatique et des actions de navigation simples.
summary: Ce composant permet de diviser une liste importante d’éléments en plusieurs pages pour améliorer la lisibilité et l’expérience de navigation. Il intègre des repères de position, des boutons d’accès direct et une gestion responsive adaptée. Sa structure fixe garantit la cohérence et l’accessibilité dans l’ensemble des parcours utilisateurs tout en optimisant le référencement du contenu.
---

## Pagination

La pagination est un système de navigation qui permet à l’usager de naviguer entre les différentes pages d’une liste d’éléments.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Pagination** permet aux utilisateurs de naviguer entre les différentes pages d’une liste d'éléments.

Sa structure comprend les éléments suivants :

1. Un conteneur principal sous la balise `<nav>` :
    - Doit avoir l’attribut `role="navigation"` pour indiquer sa fonction.
    - Utilise l’attribut `aria-label` pour fournir une description contextuelle, par exemple `aria-label="pagination"`.
2. Une liste `<ul>` avec la classe `fr-pagination__list`, contenant les éléments de pagination :
    - Chaque segment est un élément `<li>` :
      - Les segments avec des liens utilisent une balise `<a>` avec la classe `fr-pagination__link` et disposent d'un attribut `title` de façon à ce qu’ils indiquent explicitement leur fonction.
      - Le lien de la page actuelle utilise l'attribut `aria-current="page"` pour indiquer la page courante.
      - Les liens vers la première page ou la dernière page sont définis par les classes `fr-pagination__link--first` et `fr-pagination__link--last`.
      - Les liens vers la page précédente ou la page suivante sont définis par les classes `fr-pagination__link--prev` et `fr-pagination__link--next`, ils disposent d'un libellé caché par défaut qui peut être affiché avec l'utilisation de la classe `fr-pagination__link--label` ou uniquement à partir du breakpoint LG avec la classe `fr-pagination__link--lg-label`.
      - L'utilisation des classes utilitaires `fr-hidden` et `fr-unhidden-lg` peut permettre de n'afficher qu'un nombre réduit de résultats en dessous du breakpoint LG dans un soucis de gain d'espace.

**Exemple de structure HTML**

```HTML
<nav role="navigation" class="fr-pagination" aria-label="pagination">
    <ul class="fr-pagination__list">
        <li>
            <a class="fr-pagination__link fr-pagination__link--first" title="Première page" aria-disabled="true" role="link">
                Première page
            </a>
        </li>
        <li>
            <a class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--lg-label" title="Page précédente" aria-disabled="true" role="link">
                Page précédente
            </a>
        </li>
        <li>
            <a class="fr-pagination__link" aria-current="page" title="Page 1">
                1
            </a>
        </li>
        <li>
            <a class="fr-pagination__link" href="#" title="Page 2">
                2
            </a>
        </li>
        <li>
            <a class="fr-pagination__link fr-hidden fr-unhidden-lg" href="#" title="Page 3">
                3
            </a>
        </li>
        <li>
            <span class="fr-pagination__link fr-hidden fr-unhidden-lg">
                …
            </span>
        </li>
        <li>
            <a class="fr-pagination__link fr-hidden fr-unhidden-lg" href="#" title="Page 130">
                130
            </a>
        </li>
        <li>
            <a class="fr-pagination__link fr-hidden fr-unhidden-lg" href="#" title="Page 131">
                131
            </a>
        </li>
        <li>
            <a class="fr-pagination__link" href="#" title="Page 132">
                132
            </a>
        </li>
        <li>
            <a class="fr-pagination__link fr-pagination__link--next fr-pagination__link--lg-label" id="pagination-6519" href="#" title="Page suivante">
                Page suivante
            </a>
        </li>
        <li>
            <a class="fr-pagination__link fr-pagination__link--last" href="#" title="Dernière page">
                Dernière page
            </a>
        </li>
    </ul>
</nav>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement, le style CSS de la pagination et du core doit être importé dans la page. Les fichiers doivent être inclus dans le `<head>` avant le contenu de la page.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/pagination/pagination.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/pagination/pagination.legacy.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Pagination **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+pagination+)

::dsfr-doc-changelog
