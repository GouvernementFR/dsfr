---
title: Code de l'Infobulle
---
# Infobulle

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant
Il existe deux types d’infobulles suivant son déclenchement.

##### Déclenchement au survol
L’infobulle au survol se compose des éléments suivants :

1. Une zone de déclenchement :
    - Doit être un element focusable (`<a>`, `<input>`, `<select>`, `<textarea>`, etc) pour déclencher l'affichage du conteneur à la prise de focus.
    - Elle est liée au conteneur via l'attribut `aria-describedby`, sa valeur doit correspondre à l'attribut `id` du conteneur.
2. Un conteneur pour le texte de l'infobulle :
    - Représenté par un élément `<span>`.
    - Il dispose d'un attribut `id` obligatoire, pour être lié à la zone de déclenchement.
    - Doit avoir la classe `fr-tooltip`.

**Exemple de structure HTML**

```HTML
<a class="fr-link" aria-describedby="tooltip-2989" id="link-2990" href="#">
    Exemple
</a>
<span class="fr-tooltip fr-placement" id="tooltip-2989" role="tooltip" aria-hidden="true">
    Lorem [...] elit ut.
</span>
```

##### Déclenchement au clic
L’infobulle au clic se compose des éléments suivants :

1. Une zone de déclenchement :
    - La zone de déclenchement est une balise `<button type="button">`.
    - Elle est liée au conteneur via l'attribut `aria-describedby`, sa valeur doit correspondre à l'attribut `id` du conteneur.
    - Doit avoir les classes `fr-btn--tooltip fr-btn`.

2. Un conteneur pour le texte de l'infobulle :
    - Représenté par un élément `<span>`.
    - Il dispose d'un attribut `id` obligatoire, pour être lié à la zone de déclenchement.
    - Doit avoir la classe `fr-tooltip`.

**Exemple de structure HTML**

```HTML
<button class="fr-btn--tooltip fr-btn" type="button" id="button-2995" aria-describedby="tooltip-2994">
    Information contextuelle
</button>
<span class="fr-tooltip fr-placement" id="tooltip-2994" role="tooltip" aria-hidden="true">
    Lorem [...] elit ut.
</span>
```

---

### CSS

#### Installation

Pour fonctionner correctement, le style CSS de l'infobulle et du core doit être importé dans la page. Les fichiers doivent être inclus dans le `<head>` avant le contenu de la page.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tooltip/tooltip.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/tooltip/tooltip.legacy.min.css" rel="stylesheet">
```

#### Styles du composant

##### Accentuation
Aucune personnalisation n'est possible.

### JavaScript

Pour fonctionner le composant **Infobulle** nécessite l'utilisation de JavaScript.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :
```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/table/table.module.min.js"></script>
<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :
```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/table/table.nomodule.min.js"></script>

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclose+tooltip+)

::dsfr-doc-changelog
