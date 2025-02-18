---
title: Code du contrôle segmenté
---

## Contrôle segmenté

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

- Le **Conteneur** du contrôle segmenté doit être un élément HTML `<fieldset>` défini par la classe `fr-segmented`.
- La **Légende** du contrôle segmenté est un élément HTML `<legend>` défini par la classe `fr-segmented__legend`.
- La **Liste des segments** est un élément HTML `<div>` défini par la classe `fr-segmented__elements`.
- Chaque **segment** est contenu dans un élément HTML `<div>` défini par la classe `fr-segmented__element`.
- Chaque **segment** est un élément `<input>` de type `radio` associé à un `<label>` avec la classe `fr-label`.
- Une **description additionnelle**, optionnelle, peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.

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

Pour fonctionner correctement, les styles CSS du core et du contrôle segmenté doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/segmented/segmented.min.css" rel="stylesheet">
```

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/segmented/segmented.legacy.min.css" rel="stylesheet">
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

Les libellés des segment du contrôle segmenté peuvent avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/icon/_part/doc/index.md)).

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

Le composant Contrôle segmenté **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+segmented+)
