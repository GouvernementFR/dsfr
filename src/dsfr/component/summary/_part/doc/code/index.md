---
title: Code du Sommaire
---

## Sommaire

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant

Le composant **Sommaire** est un élément interactif permettant de naviguer entre différentes sections de contenu.

Sa structure est la suivante :

- Le **conteneur du sommaire** est une balise `<div>` avec la classe `fr-summary` et le rôle `navigation`.
    - Le sommaire dispose d'un attribut `aria-labelledby` défini sur l'ID du titre du sommaire.
- Le **titre du sommaire**, obligatoire, est defini par la classe `fr-summary__title`.
- Les éléments de la **liste d'ancre**, obligatoire, sont contenus dans une balise `<ol>`.
    - Chaque élément de la liste `<li>` contient un lien `<a>` défini par la classe `fr-summary__link`.

**Exemple de structure HTML**

```HTML
<nav class="fr-summary" role="navigation" aria-labelledby="fr-summary-title">
    <h2 class="fr-summary__title" id="fr-summary-title">Sommaire</h2>
    <ol>
        <li>
            <a class="fr-summary__link" id="summary-link-1" href="#anchor-1">Libellé du lien 1</a>
            <ol>
                <li>
                    <a class="fr-summary__link" id="summary-link-1-1" href="#anchor-1.1">Libellé du lien 1.1</a>
                </li>
                <li>
                    <a class="fr-summary__link" id="summary-link-1-2" href="#anchor-1.2">Libellé du lien 1.2</a>
                </li>
                <li>
                    <a class="fr-summary__link" id="summary-link-1-3" href="#anchor-1.3">Libellé du lien 1.3</a>
                </li>
            </ol>
        </li>
        <li>
            <a class="fr-summary__link" id="summary-link-2" href="#anchor-2">Libellé du lien 2</a>
        </li>
    </ol>
</nav>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et du sommaire doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/summary/summary.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/summary/summary.legacy.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant **Sommaire** ne nécessite pas de JavaScript spécifique pour fonctionner.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+summary+)

::dsfr-doc-changelog
