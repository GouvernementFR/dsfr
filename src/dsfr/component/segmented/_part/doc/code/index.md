---
boost: 0
sitemap:
  noindex: true
title: Code du contrôle segmenté
shortTitle: Code du contrôle segmenté
description: Le contrôle segmenté permet à l’usager de choisir une vue parmi plusieurs options d’affichage disponibles dans une interface.
shortDescription: Sélection de vues avec un contrôle segmenté.
keywords: contrôle segmenté, vue, affichage, interface, UX, UI, design system, libellé, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Ce document présente le contrôle segmenté comme un moyen de basculer entre différentes vues d’un même contenu tout en assurant clarté et cohérence dans l’interface.
summary: Ce contenu décrit l’usage du contrôle segmenté dans les interfaces pour permettre à l’usager de basculer entre plusieurs types d’affichage d’un même contenu, comme une vue en liste ou en carte. Il insiste sur les bonnes pratiques à respecter telles que la limitation du nombre de segments, la nécessité d’un libellé clair pour chaque option et l’obligation d’une valeur par défaut. Ce guide s’adresse aux concepteurs et développeurs souhaitant garantir une navigation fluide, explicite et accessible.
mesh:
  - component/form
---

## Contrôle segmenté

Le contrôle segmenté est un élément d’interaction avec l’interface permettant à l'usager de choisir un type de vue parmi plusieurs options d'affichage disponibles.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Contrôle segmenté** permet à l'utilisateur de choisir une option parmi plusieurs segments.
Sa structure est la suivante :

- Le conteneur du contrôle segmenté doit être un élément HTML `<fieldset>` défini par la classe `fr-segmented`.
- La légende du contrôle segmenté est un élément HTML `<legend>` défini par la classe `fr-segmented__legend`.
- La liste des segments est un élément HTML `<div>` défini par la classe `fr-segmented__elements`.
- Chaque segment est contenu dans un élément HTML `<div>` défini par la classe `fr-segmented__element`.
- Chaque segment est un élément `<input>` de type `radio` associé à un `<label>` avec la classe `fr-label`.
- Une description additionnelle, optionnelle, peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.

**Exemple de structure HTML simple**

```HTML
<fieldset class="fr-segmented">
    <legend class="fr-segmented__legend">
        Légende
        <span class="fr-hint-text">Description additionnelle</span>
    </legend>
    <div class="fr-segmented__elements">
        <div class="fr-segmented__element">
            <input value="1" type="radio" id="segmented-1" name="segmented">
            <label class="fr-label" for="segmented-1">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="2" checked type="radio" id="segmented-2" name="segmented">
            <label class="fr-label" for="segmented-2">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="3" type="radio" id="segmented-3" name="segmented">
            <label class="fr-label" for="segmented-3">
                Libellé
            </label>
        </div>
    </div>
</fieldset>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| Form       | Oui         |          |
| Segmented  | Oui         |          |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/segmented/segmented.min.css" rel="stylesheet">
```

#### Variante de taille

Le contrôle segmenté est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation.
Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<fieldset class="fr-segmented">` :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-segmented--sm`.

**Exemple de variante de taille**

```HTML
<fieldset class="fr-segmented fr-segmented--sm">
  <!-- Contenu du contrôle segmenté -->
</fieldset>
```

#### Variante avec légende en ligne

Le contrôle segmenté par défaut est affiché en dessous de sa légende mais il est possible de les afficher sur une même ligne avec l'utilisation de la classe `fr-segmented__legend--inline` sur l'élément `<legend>`.

**Exemple de contrôle segmenté avec légende en ligne**

```HTML
<fieldset class="fr-segmented">
    <legend class="fr-segmented__legend fr-segmented__legend--inline">
        Légende
    </legend>
    <div class="fr-segmented__elements">
        <!-- Contenu du contrôle segmenté -->
    </div>
</fieldset>
```

#### Variante sans légende visible

La légende `<legend>` du contrôle segmenté est obligatoire mais peut être positionné hors écran avec l'utilisation de la classe `fr-segmented--no-legend` sur l'élément `<fieldset>`.

**Exemple de contrôle segmenté sans légende visible**

```HTML
<fieldset class="fr-segmented fr-segmented--no-legend">
    <!-- Contenu du contrôle segmenté -->
</fieldset>
```

#### Variante avec icônes

Les libellés des segment du contrôle segmenté peuvent avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/_part/doc/icon/index.md)).

**Exemple de variante avec icônes**

:::fr-accordion[Déplier pour voir le code]{id=code-segmented-icons}

```HTML
<fieldset class="fr-segmented">
    <legend class="fr-segmented__legend">
        Légende
    </legend>
    <div class="fr-segmented__elements">
        <div class="fr-segmented__element">
            <input value="1" type="radio" id="segmented-icon-1" name="segmented-icon">
            <label class="fr-icon-road-map-line fr-label" for="segmented-icon-1">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="2" checked type="radio" id="segmented-icon-2" name="segmented-icon">
            <label class="fr-icon-road-map-line fr-label" for="segmented-icon-2">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="3" type="radio" id="segmented-icon-3" name="segmented-icon">
            <label class="fr-icon-road-map-line fr-label" for="segmented-icon-3">
                Libellé
            </label>
        </div>
    </div>
</fieldset>
```

:::

---

### JavaScript

Le composant Contrôle segmenté nécessite l'utilisation de JavaScript pour son fonctionnement de base, notamment pour gérer le passage à la ligne des éléments lorsque l'espace disponible est insuffisant. La classe `fr-segmented--vertical` est ainsi ajoutée par le JavaScript lorsqu'il est nécessaire de passer en mode vertical.

#### Installation du JavaScript

Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/segmented/segmented.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/segmented/segmented.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le comportement fonctionne automatiquement.

#### Instances

Sur le contrôle segmenté, l'élément suivant est instancié :

- Le composant "segmented", via la classe : `fr-segmented`
- Chaque "segmentedElement" du composant, via le sélecteur : `fr-segmented__element input`

Une fois chargé, le JS ajoute l'attribut `data-fr-js-segmented="true"` sur les éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### segmented

:::fr-table[resize]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Permet de mettre à jour le composant après un changement de libellé. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmented).segmented.resize()` |

:::

:::fr-table[node]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmented).segmented.node` |

:::

##### segmentedElement

:::fr-table[node]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmentedElement).segmentedElement.node` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+segmented+)
