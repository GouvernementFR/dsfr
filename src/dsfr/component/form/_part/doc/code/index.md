---
title: Code des formulaires
---

## Formulaires

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### Code

Un **formulaire** permet de collecter des informations de l'utilisateur. Il est composé d'un ou plusieurs champs, et ces informations sont envoyées à un serveur au clic sur un bouton de soumission ou dynamiquement au changement de valeur d'un champ.
Le DSFR propose des styles pour structurer des ensembles de champs de formulaire, la gestion des erreurs, des messages d'aide et des messages de succès.
De la même manière que pour les champs de formulaire unitaires, des états d'erreur et succès ainsi que des messages d'erreur/succès/avertissement/information peuvent être ajoutés à un **ensemble d'éléments** de formulaire (fieldset).

La structure d'un ensemble de champs de formulaire, dans un `<form>` est la suivante :

- Un **ensemble de champs de formulaire** est défini par un élément `<fieldset>`.
  - Celui-ci doit contenir une légende `<legend>`, obligatoire.
  - Chaque champ de formulaire est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. C'est ces éléments qui permettront d'agencer les champs et de gérer les espacements. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
  - Comme pour chaque champ de formulaire, le groupe de champs, représenté par un fieldset, peut contenir un message d'erreur/information/avertissement/succès via un bloc `fr-messages-group`.

**Exemple de structure de formulaire simple**

```html
<form action="" method="post">
    <fieldset class="fr-fieldset" aria-labelledby="text-legend text-messages">
        <legend class="fr-fieldset__legend" id="text-legend">
            Légende pour l’ensemble des éléments
            <span class="fr-hint-text">Texte de description additionnel</span>
        </legend>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-1">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-1" id="text-1" type="text">
            </div>
        </div>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-2">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-2" id="text-2" type="text">
            </div>
        </div>
        <div class="fr-messages-group" id="text-messages" aria-live="polite">
        </div>
    </fieldset>

    <button class="fr-btn" type="submit">
        Enregistrer les informations
    </button>
</form>
```

**Exemple de structure de formulaire en erreur**

```html
<form action="" method="post">
    <fieldset class="fr-fieldset fr-fieldset--error" aria-labelledby="text-legend text-messages">
        <legend class="fr-fieldset__legend" id="text-legend">
            Légende pour l’ensemble des éléments
        </legend>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-1">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-1" id="text-1" type="text">
            </div>
        </div>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-2">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-2" id="text-2" type="text">
            </div>
        </div>
        <div class="fr-messages-group" id="text-messages" aria-live="polite">
            <p class="fr-message fr-message--error">Texte d’erreur obligatoire</p>
        </div>
    </fieldset>

    <button class="fr-btn" type="submit">
        Enregistrer les informations
    </button>
</form>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et des formulaires doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```html
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/form/form.legacy.min.css" rel="stylesheet">
```

#### Variantes de fieldset-element

Les éléments de fieldset peuvent être disposés **en ligne** avec la classe `fr-fieldset__element--inline`.
Il est aussi possible de définir la disposition en ligne en desktop uniquement `fr-fieldset__element--inline@md` : Disposition en ligne à partir du breakpoint `md` - 48em (768px).

D'autres classes sont disponibles pour gérer la **taille des éléments**, notamment pour les champs de saisie :

- La classe `fr-fieldset__element--inline-grow` : La taille du champ s'adapte à la largeur restante.
- La classe `fr-fieldset__element--postal` : Taille d'un champ code postal (240px).
- La classe `fr-fieldset__element--number` : Taille d'un champ numéro de rue, jour, ou mois - 5 chiffres max (80px).
- La classe `fr-fieldset__element--year` : Taille d'un champ année (112px).

**Exemple de variantes de fieldset-element**

```html
<div class="fr-fieldset__element fr-fieldset__element--number">
    <!-- Champs numéro de rue -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--inline-grow">
    <!-- Champs nom de rue sur le reste de la ligne -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--postal">
    <!-- Champs code postal, à la ligne -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--inline@md">
    <!-- Champs ville, en ligne en desktop et à la ligne en mobile -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--year">
    <!-- Champs année de naissance -->
</div>
```

#### Variantes d'états

Les formulaires peuvent avoir différents états définis sur le fieldset :

- La classe `fr-fieldset--error` : Groupe de champs **en erreur**.
- La classe `fr-fieldset--success` : Groupe de champs **validé**.
- L'attribut `disabled` : Groupe de champs **désactivé**.

**Exemples de variantes d'états**

```html
<fieldset class="fr-fieldset fr-fieldset--error">
    <!-- Champs en erreur -->
</fieldset>
<fieldset class="fr-fieldset fr-fieldset--success">
    <!-- Champs validés -->
</fieldset>
```

#### Variantes de messages

Les groupes de champs peuvent contenir des messages d'erreur, d'information, d'avertissement ou de succès via un bloc `fr-messages-group`.
Ce bloc peut contenir un ou plusieurs messages, définis par la classe `fr-message` et une variante de type de message :

- La classe `fr-message--error` : Message d'**erreur**.
- La classe `fr-message--info` : Message d'**information**.
- La classe `fr-message--warning` : Message d'**avertissement**.
- La classe `fr-message--success` : Message de **succès**.

Dans le cas d'un groupe de champs en état d'erreur ou de succès, un message d'erreur ou de succès est obligatoire.

**Exemples de variantes de messages**

```html
<div class="fr-messages-group" id="text-messages" aria-live="polite">
    <p class="fr-message fr-message--error">Texte d’erreur obligatoire</p>
    <p class="fr-message fr-message--info">Texte d’information</p>
    <p class="fr-message fr-message--warning">Texte d’avertissement</p>
    <p class="fr-message fr-message--success">Texte de succès</p>
</div>
```

---

### JavaScript

Le DSFR ne propose pas de JavaScript pour les formulaires. Cependant, il est possible d'utiliser des bibliothèques JavaScript tierces pour ajouter des fonctionnalités supplémentaires, comme la validation des champs, l'envoi dynamique des données, etc.

Il est recommandé d'utiliser des bibliothèques JavaScript qui respectent les principes d'accessibilité et de performance.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+form+)

::dsfr-doc-changelog
