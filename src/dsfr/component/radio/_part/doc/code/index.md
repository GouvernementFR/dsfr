---
boost: 0
sitemap:
  noindex: true
title: Code du Bouton radio
shortTitle: Code du Bouton radio
description: Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.
shortDescription: Sélection d’une option unique
keywords: bouton radio, sélection, interface, formulaire, design système, DSFR, accessibilité, choix unique
cover: ../_asset/cover/cover.png
excerpt: Le composant Bouton radio permet de proposer à l’usager un choix unique parmi plusieurs options. Il est recommandé pour les listes de 2 à 5 éléments maximum.
summary: Ce composant est conçu pour faciliter le choix unique dans une interface, en particulier dans les formulaires. Il offre différentes dispositions et variations, y compris des versions enrichies avec pictogrammes. Il s’utilise en groupe, avec des libellés clairs et une hiérarchie visuelle cohérente. L’intégration respecte des règles d’ergonomie, d’accessibilité et d’uniformité éditoriale.
---

## Bouton radio

Le bouton radio est un élément d’interaction avec l’interface permettant à l’usager de réaliser un choix unique parmi plusieurs options.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant Bouton radio, ci-après nommé **Radio**, est un élément interactif permettant de sélectionner une seule option parmi un groupe d'options. Il n'est pas utilisé seul, mais toujours dans un ensemble de radios. Un radio seul correspond en fait à une **option**.

Sa structure est la suivante :

- Le Radio doit être contenu dans un élément HTML `<div>` défini par la classe `fr-radio-group`.
- Le Radio est un élément HTML `<input>` de type `radio` défini par la classe `fr-radio`.
- Le radio doit être associé à un libellé `<label>` avec la classe `fr-label`.
- Une description additionnelle de l'option, optionnelle, peut être ajoutée dans le label, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.

**Exemple de structure HTML simple**

```HTML
<div class="fr-radio-group">
    <input id="radio" type="radio" name="radio" aria-describedby="radio-messages">
    <label class="fr-label" for="radio">
        Libellé bouton radio
        <span class="fr-hint-text">Description optionnelle</span>
    </label>
</div>
```

#### Groupe de radios

Un bouton radio seul ne fait pas sens, il doit **toujours être dans un ensemble de boutons radio**, pour cela, utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regrouper plusieurs champs ayant chacun un label. Dans le cas des radios, la légende est visuellement perçue comme le label du groupe de radios. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément de radio est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- L'ensemble de radios, représenté par un fieldset, peut contenir un message d'erreur ou succès via un bloc `fr-messages-group`.

**Exemple de groupe de radios**

:::fr-accordion[Déplier pour voir le code]{id=radios-structure}

```HTML
<fieldset class="fr-fieldset" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="3" type="radio" id="radio-3" name="radio">
            <label class="fr-label" for="radio-3">
                Libellé bouton radio
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
    </div>
</fieldset>
```

:::

#### Bouton radio riche

Le composant bouton radio propose une variante de bouton radio riche. Cette variante permet d'ajouter une bordure et un pictogramme, optionnel. La différence se caractérise par la classe `fr-radio-rich` et l'ajout d'un élément `<div>` de classe `fr-radio-rich__pictogram` contenant un pictogramme SVG.

Le regroupement de radios riches se fait de la même manière que pour les radios simples.

**Exemple de bouton radio riche**

```HTML
<div class="fr-radio-group fr-radio-rich">
    <input value="1" type="radio" id="radio-rich-1" name="radio-rich">
    <label class="fr-label" for="radio-rich-1">
        Libellé bouton radio
    </label>
    <div class="fr-radio-rich__pictogram">
        <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
            <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use>
            <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use>
            <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use>
        </svg>
    </div>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et du bouton radio doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/radio/radio.min.css" rel="stylesheet">
```

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/radio/radio.legacy.min.css" rel="stylesheet">
```

#### Variante de taille

Le composant Bouton radio propose une variante de taille pour s'adapter à différents contextes d'utilisation. Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<div class="fr-radio-group">` :

- Par défaut : Taille MD.
- `fr-radio-group--sm` : Taille SM.

#### Variantes du radio bouton riche

La variante de bouton radio riche est définie par la classe `fr-radio-rich`. Pour ajouter un pictogramme, ajoutez un élément `<div>` de classe `fr-radio-rich__pictogram` contenant un pictogramme SVG. Le pictogramme doit être ajouté avec ses 3 parties : `fr-artwork-decorative`, `fr-artwork-minor` et `fr-artwork-major`. La partie mineur peut être accentuée via les classes utilitaires d'artwork `fr-artwork--NOM-COULEUR`, ex : fr-artwork--green-emeraude. Voir la [documentation des pictogrammes](../../../../../core/_part/doc/pictogram/index.md) pour plus d'informations.

Il est aussi possible d'utiliser cette variante **sans pictogramme**. Il suffit pour cela de ne pas ajouter l'élément `<div>` de classe `fr-radio-rich__pictogram`.

Les boutons radios riches sont aussi disponibles en taille SM et MD.

#### Variantes d'états

Les boutons radios étant toujours utilisés en groupe, les états d'erreur/succès sont gérés au niveau du groupe. Pour ajouter un état à un bouton radio, ajoutez une des propriétés suivantes à l'élément `<fieldset class="fr-fieldset">` :

- La classe `fr-fieldset--error` : Indique une erreur.
- La classe `fr-fieldset--valid` : Indique un succès.
- L'attribut `disabled` : Indique un état désactivé.

Un message d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du fieldset et doit être lié au fieldset via un attribut `aria-describedby`.

**Exemple de groupe de radios avec erreur**

:::fr-accordion[Déplier pour voir le code]{id=code-radios-erreur}

```HTML
<fieldset class="fr-fieldset fr-fieldset--error" role="group" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments en erreur
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio 1
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio 2
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="radio-message-error">Texte d’erreur</p>
    </div>
</fieldset>
```

:::

**Exemple de groupe de radios avec succès**

:::fr-accordion[Déplier pour voir le code]{id=code-radios-succes}

```HTML
<fieldset class="fr-fieldset fr-fieldset--valid" role="group" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments en succès
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio 1
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio 2
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="radio-message-error">Texte de succès</p>
    </div>
</fieldset>
```

:::

**Exemple de groupe de radios désactivés**

:::fr-accordion[Déplier pour voir le code]{id=code-radios-disabled}

```HTML
<fieldset class="fr-fieldset" disabled role="group" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments désactivés
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio 1
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio 2
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
    </div>
</fieldset>
```

:::

---

### JavaScript

Le composant Bouton radio **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+radio+)

::dsfr-doc-changelog
