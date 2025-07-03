---
boost: 0
sitemap:
  noindex: true
title: Code de la case à cocher
shortTitle: Code de la Case à cocher
description: Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.
shortDescription: Sélection multiple dans une liste
keywords: case à cocher, checkbox, sélection multiple, formulaire, DSFR, design système, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Case à cocher permet à l’usager de sélectionner librement une ou plusieurs options dans un ensemble de choix. Il est utilisé seul ou en groupe, avec ou sans texte d’aide.
summary: Ce composant permet une sélection multiple ou binaire dans les interfaces, particulièrement dans les formulaires. Il peut être utilisé seul pour un choix isolé, ou en liste pour plusieurs options. Des variantes avec texte d’aide sont proposées pour améliorer la compréhension. Il respecte les contraintes d’ergonomie, d’accessibilité et de cohérence éditoriale, sans personnalisation graphique.
mesh:
  - component/radio
  - component/input
  - component/form
---

## Case à cocher

La case à cocher est un élément d’interaction avec l’interface permettant à l’usager de sélectionner une ou plusieurs options dans une liste.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Case à cocher**, ci-après nommée **Checkbox**, est un élément interactif permettant de sélectionner une ou plusieurs options. Sa structure est la suivante :

- La checkbox doit être **contenu** dans un élément HTML `<div>` défini par la classe `fr-checkbox-group`.
- La checkbox est un élément HTML `<input>` de type `checkbox` défini par la classe `fr-checkbox`.
- La checkbox doit être associée à un **label** `<label>` avec la classe `fr-label`.
- Une **description additionnelle** de l'option - optionnelle - peut être ajoutée dans le label, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Un **message** d'erreur ou de succès peut être associé à la checkbox en utilisant un élément `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`. Son attribut`id` doit être associé à l'attribut `aria-describedby` de la checkbox. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

```HTML
<div class="fr-checkbox-group">
    <input id="checkbox" type="checkbox" aria-describedby="checkbox-messages">
    <label class="fr-label" for="checkbox">
        Libellé checkbox
        <span class="fr-hint-text">Description optionnelle</span>
    </label>
    <div class="fr-messages-group" id="checkbox-messages" aria-live="polite">
    </div>
</div>
```

#### Groupe de checkboxes

Pour **regrouper plusieurs checkboxes liées**, utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regroupé plusieurs champs ayant chacun un label. Dans le cas des checkboxes la légende est visuellement perçue comme le label du groupe de checkboxes. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément de checkbox est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- Comme pour chaque checkbox, le groupe de checkbox, représenté par un fieldset, peut contenir un message d'erreur/information/succès via un bloc `fr-messages-group`.

**Exemple de groupe de checkboxes**

:::fr-accordion[Déplier pour voir le code]{id=checkboxes-structure}

```HTML
<fieldset class="fr-fieldset" aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="checkboxes-1" id="checkboxes-1" type="checkbox">
            <label class="fr-label" for="checkboxes-1">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input checked name="checkboxes-2" id="checkboxes-2" type="checkbox">
            <label class="fr-label" for="checkboxes-2">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="checkboxes-3" id="checkboxes-3" type="checkbox">
            <label class="fr-label" for="checkboxes-3">
                Libellé case à cocher
            </label>
            </div>
        </div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
    </div>
</fieldset>
```

:::

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et des checkboxes doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/checkbox/checkbox.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/checkbox/checkbox.legacy.min.css" rel="stylesheet">
```

#### Variantes de tailles

La checkbox est disponible en deux variantes de tailles :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-checkbox-group--sm`.

**Exemples de variantes de tailles**

```HTML
<div class="fr-checkbox-group fr-checkbox-group--sm">
    <input id="checkbox-sm" type="checkbox">
    <label class="fr-label" for="checkbox-sm">
        Libellé checkbox taille SM
    </label>
</div>
```

#### Variantes d'états

La checkbox est disponible en plusieurs variantes d'états :

- La checkbox avec **erreur** : définie par la classe `fr-checkbox-group--error`.
- La checkbox avec **succès** : définie par la classe `fr-checkbox-group--valid`.
- La checkbox **désactivée** : définie par l'attribut `disabled` sur l'élément `<input>`.

Dans le cas d'utilisation d'un groupe de checkboxes, ces états sont définis sur le groupe (le fieldset), et non sur chaque checkbox.

- Groupe en **erreur** : définie par la classe `fr-fieldset--error`.
- Groupe en **succès** : définie par la classe `fr-fieldset--valid`.
- Groupe **désactivée** : définie par l'attribut `disabled`.

**Exemples de variantes d'états**

:::fr-accordion[Déplier pour voir le code]{id=checkbox-etats}

**Erreur**

```HTML
<div class="fr-checkbox-group fr-checkbox-group--error">
    <input id="checkbox-error" type="checkbox" aria-describedby="checkbox-messages-error">
    <label class="fr-label" for="checkbox-error">
        Libellé checkbox avec erreur
    </label>
    <div class="fr-messages-group" id="checkbox-messages-error" aria-live="polite">
        <p class="fr-message fr-message--error">Texte d’erreur</p>
    </div>
</div>
```

**Succès**

```HTML
<div class="fr-checkbox-group fr-checkbox-group--valid">
    <input id="checkbox-valid" type="checkbox" aria-describedby="checkbox-messages-valid">
    <label class="fr-label" for="checkbox-valid">
        Libellé checkbox avec succès
    </label>
    <div class="fr-messages-group" id="checkbox-messages-valid" aria-live="polite">
        <p class="fr-message fr-message--valid">Texte de succès</p>
    </div>
</div>
```

**Désactivé**

```HTML
<div class="fr-checkbox-group">
    <input id="checkbox-disabled" type="checkbox" disabled>
    <label class="fr-label" for="checkbox-disabled">
        Libellé checkbox désactivée
    </label>
</div>
```

:::

**Exemple de variante d'état au niveau du groupe**

:::fr-accordion[Déplier pour voir le code]{id=checkboxes-etats}

**Erreur**

```HTML
<fieldset class="fr-fieldset fr-fieldset--error" aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments en erreur
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
        <p class="fr-message fr-message--error">Texte d’erreur globale</p>
    </div>
</fieldset>
```

**Succès**

```HTML
<fieldset class="fr-fieldset fr-fieldset--valid" aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments en succès
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
        <p class="fr-message fr-message--error">Texte de succès global</p>
    </div>
</fieldset>
```

**Désactivé**

```HTML
<fieldset class="fr-fieldset" disabled aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments déactivés
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
    </div>
</fieldset>
```

:::

---

### JavaScript

Le composant Case à cocher **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+checkbox+)

::dsfr-doc-changelog
