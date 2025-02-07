---
title: Code de l'Indicateur d'étapes
---

## Indicateur d'étapes

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant

Le composant **Indicateur d'étapes** est un élément permettant de visualiser les étapes d'un processus.

Sa structure est la suivante :

- Le **conteneur du stepper** est un élément HTML `<div>` défini par la classe `fr-stepper`.
- Le **titre de l'étape en cours**, obligatoire, est contenu dans un niveau d'entête `<hx>`, variable en fonction de sa hérarchie dans la page (par défaut h2), et possède la classe `fr-stepper__title`.
    - Le numéro de l'étape et le nombre d'étapes total, obligatoires, sont précisés à l'intérieur du titre dans un élément HTML `<span>` défini par la classe `fr-stepper__state`.
- La **barre de progression**, obligatoire, un élément HTML `<div>` défini par la classe `fr-stepper__steps`.
    - La balise possède des attributs `data-fr-steps` et `data-fr-current-step` pour définir le nombre total d'étapes et l'étape actuelle.
- Les détails de l'étape sont un élément HTML `<p>` défini par la classe `fr-stepper__details` et contiennent :
    - Le **titre de l'étape suivante**, obligatoire, dans un élément HTML `<span>`.

**Exemple de structure HTML**

```HTML
<div class="fr-stepper">
    <h2 class="fr-stepper__title">
        Titre de l’étape en cours
        <span class="fr-stepper__state">Étape 1 sur 3</span>
    </h2>
    <div class="fr-stepper__steps" data-fr-current-step="1" data-fr-steps="3"></div>
    <p class="fr-stepper__details">
        <span class="fr-text--bold">Étape suivante :</span> Titre de la prochaine étape
    </p>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et du stepper doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/stepper/stepper.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/stepper/stepper.legacy.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant **Indicateur d'étapes** ne nécessite pas de JavaScript spécifique pour fonctionner.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+stepper+)
