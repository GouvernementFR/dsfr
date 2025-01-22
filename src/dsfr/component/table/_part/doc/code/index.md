---
title: Code du tableau
---
# Tableau

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant
Le composant Tableau permet de présenter des données tabulaires. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<div>` :
    - Doit avoir la classe `fr-table`.
2. Un premier sous-conteneur sous la balise `<div>` :
    - Doit avoir la classe `fr-table__wrapper`.
3. Un deuxième sous-conteneur sous la balise `<div>` :
    - Doit avoir la classe `fr-table__container`.
3. Un troisième sous-conteneur sous la balise `<div>` :
    - Doit avoir la classe `fr-table__content`.
4. Une zone de contenu pour le tableau :
    - Représentée par un élément `<table>`.
5. Un titre - obligatoire - qui peut être positionné en haut (par défaut), en bas ou hors écran :
    - Représenté par un élément `<caption>`.
6. Une ligne d’en-tête de colonne - obligatoire - :
    - Représentée par un élément `<thead>`.
7. Plusieurs ligne de corps - obligatoire - :
    - Regroupées dans un ou plusieurs élémente `<tbody>`.
    - Représentées par un élément `<tr>`.
8. Plusieurs cellules de contenu - obligatoire - :
    - Représentées par un élément `<th>` ou `<td>`.

**Exemple de structure HTML**

```HTML
<div class="fr-table" id="table-md-component">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table id="table-md">
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="table-md-row-key-1" data-row-key="1">
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr id="table-md-row-key-2" data-row-key="2">
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr id="table-md-row-key-3" data-row-key="3">
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr id="table-md-row-key-4" data-row-key="4">
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

---

### CSS

#### Installation

Pour fonctionner correctement, le style CSS du tableau et du core doit être importé dans la page. Les fichiers doivent être inclus dans le `<head>` avant le contenu de la page.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/table/table.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/table/table.legacy.min.css" rel="stylesheet">
```

#### Styles du composant

##### Variantes de taille
Le tableau peut être de différentes tailles, si la taille des composants intégrés dans les cellules ne change pas, cela vous permet de varier la densité d’affichage de votre tableau en fonction de son contenu.
Il existe 3 tailles pour les cellules du tableau :
- Par défaut en taille md.
- `fr-table--sm` : Petit tableau.
- `fr-table--lg` : Grand tableau.

**Exemple de tableau de différentes tailles**

```HTML
<div class="fr-table fr-table--lg">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

##### Variante de tableau avec séparateurs verticaux
Vous avez la possibilité d'afficher des séparateurs de colonnes verticaux (obligatoires en cas de tableaux complexes) grâce à l'ajout de la classe `fr-table--bordered`.

**Exemple de tableau avec séparateurs verticaux**

```HTML
<div class="fr-table fr-table--bordered">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```

##### Variante de tableau non scrollable
Le conteneur est responsive par défaut mais vous avez la possibilité de rendre le tableau non scrollable grâce à la classe `fr-table--no-scroll`.

**Exemple de tableau non scrollable**

```HTML
<div class="fr-table fr-table--no-scroll">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```


### JavaScript

#### Installation

Pour fonctionner le composant tableau nécessite l'utilisation de JavaScript.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :
```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/table/table.module.min.js"></script>
```
<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :
```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/table/table.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclose+table)

::dsfr-doc-changelog
