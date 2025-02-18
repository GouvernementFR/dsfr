---
title: Code de la liste déroulante
---

## Liste déroulante

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Liste déroulante** permet à l'utilisateur de choisir une option parmi une liste déroulante.
Sa structure est la suivante :

- La liste déroulante doit être **contenu** dans un élément HTML `<div>` défini par la classe `fr-select-group`.
- La **Liste déroulante** est un élément HTML `<select>` défini par la classe `fr-select`.
- La liste déroulante doit être associée à un **libellé** `<label>` avec la classe `fr-label`.
- Une **description additionnelle** de l'option - optionnelle - peut être ajoutée dans le libellé, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque option est un élément `<option>` contenu dans le `<select>`.
- Un **message** d'erreur ou de succès peut être associé à la liste déroulante en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut `id` doit être associé à l'attribut `aria-describedby` de la liste déroulante.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

```HTML
<div class="fr-select-group">
    <label class="fr-label" for="select-hint">
        Libellé pour liste déroulante
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <select class="fr-select" aria-describedby="select-hint-messages" id="select-hint" name="select-hint">
        <option value="" selected disabled hidden>Sélectionner une option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <div class="fr-messages-group" id="select-hint-messages" aria-live="polite">
    </div>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et de la liste déroulante doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/select/select.min.css" rel="stylesheet">
```

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/select/select.legacy.min.css" rel="stylesheet">
```

#### Variantes d'états

Les états d'erreur/succès/désactivé sont gérés au niveau du groupe.
Pour ajouter un état à une liste déroulante, ajoutez une des classes suivantes :

- La classe `fr-select-group--error` : Indique une erreur.
- La classe `fr-select-group--valid` : Indique un succès.
- L'attribut `fr-select-group--disabled` : Indique un état désactivé.

Un message d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du groupe de la liste déroulante et doit être lié à la liste déroulante via un attribut `aria-describedby`.

**Exemple de liste déroulante avec erreur**

:::fr-accordion[Déplier pour voir le code]{id=code-select-erreur}

```HTML
<div class="fr-select-group fr-select-group--error">
    <label class="fr-label" for="select-error">
        Libellé pour liste déroulante
    </label>
    <select class="fr-select" aria-describedby="select-error-messages" id="select-error" name="select-error">
        <option value="" selected disabled hidden>Sélectionner une option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <div class="fr-messages-group" id="select-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="select-error-message-error">Texte d’erreur obligatoire</p>
    </div>
</div>
```

:::

**Exemple de liste déroulante avec succès**

:::fr-accordion[Déplier pour voir le code]{id=code-select-succes}

```HTML
<div class="fr-select-group fr-select-group--valid">
    <label class="fr-label" for="select-valid">
        Libellé pour liste déroulante
    </label>
    <select class="fr-select" aria-describedby="select-valid-messages" id="select-valid" name="select-valid">
        <option value="" selected disabled hidden>Sélectionner une option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <div class="fr-messages-group" id="select-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="select-valid-message-valid">Texte de validation</p>
    </div>
</div>
```

:::

**Exemple de liste déroulante désactivée**

:::fr-accordion[Déplier pour voir le code]{id=code-select-disabled}

```HTML
<div class="fr-select-group fr-select-group--disabled">
    <label class="fr-label" for="select-disabled">
        Libellé pour liste déroulante
    </label>
    <select class="fr-select" aria-describedby="select-disabled-messages" disabled id="select-disabled" name="select-disabled">
        <option value="" selected disabled hidden>Sélectionner une option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <div class="fr-messages-group" id="select-disabled-messages" aria-live="polite">
    </div>
</div>
```

:::

#### Variantes de liste déroulante avec groupe d'options

L'élément HTML `<optgroup>` est utilisé pour regrouper les options associées dans une liste déroulante.

Si vous disposez d’une longue liste d’options, les groupes d’options associées sont plus faciles à gérer pour un utilisateur.

**Exemple de liste déroulante avec groupe d'options**

:::fr-accordion[Déplier pour voir le code]{id=code-select-group}

```HTML
<div class="fr-select-group">
    <label class="fr-label" for="select-group">
        Libellé pour liste déroulante
    </label>
    <select class="fr-select" aria-describedby="select-group-messages" id="select-group" name="select-group">
        <option value="" selected disabled hidden>Selectionnez une option</option>
        <optgroup label="Groupe 1">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </optgroup>
        <optgroup label="Groupe 2">
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
            <option value="7">Option 7</option>
        </optgroup>
    </select>
    <div class="fr-messages-group" id="select-group-messages" aria-live="polite">
    </div>
</div>
```

:::

---

### JavaScript

Le composant Liste déroulante **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+select+)
