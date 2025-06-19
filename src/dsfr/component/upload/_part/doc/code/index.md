---
boost: 0
sitemap:
  noindex: true
title: Code de l'Ajout de fichier
shortTitle: Code de l'Ajout de fichier
description: Présentation du composant Ajout de fichier permettant à l’usager de sélectionner et envoyer un ou plusieurs fichiers via une interface.
shortDescription: Sélection et envoi de fichiers
keywords: ajout de fichier, upload, formulaire, interaction, accessibilité, design système, DSFR, sélection, fichier multiple
cover: ../_asset/cover/cover.png
excerpt: Le composant Ajout de fichier permet à l’usager de transmettre un ou plusieurs fichiers à travers une interface, avec des indications claires sur les formats attendus et les erreurs éventuelles.
summary: Ce composant facilite l’envoi de documents par l’usager, en l’intégrant aux formulaires de façon accessible et informative. Il prend en compte les contraintes liées aux fichiers (format, poids, nature), propose des variantes pour l’envoi multiple et signale les erreurs rencontrées lors de l’interaction. Son design est standardisé et non personnalisable pour garantir la cohérence visuelle dans l’ensemble du service.
---

# Ajout de fichier

L’ajout de fichier est un élément d’interaction avec l’interface qui permet à l’usager de sélectionner et d’envoyer un ou plusieurs fichiers.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Ajout de fichier** permet aux utilisateurs de sélectionner et envoyer un ou plusieurs fichiers.

Sa structure est la suivante :

- Le composant ajout de fichier est un élément HTML `<div>` défini par la classe `fr-upload-group` et contenant :
  - Le libellé est un élément HTML de type `<label>`, obligatoire :
    - Défini par la classe `fr-label`.
    - Il dispose de l'attribut `for` dont la valeur est égale à l'ID du champ de fichier.
    - Il doit inclure un texte explicatif, obligatoire, dans un élément HTML `<span>` défini par la classe `fr-hint-text`.
  - Le champ de fichier est un élément HTML `<input>` de type `file`, obligatoire :
    - Défini par la classe `fr-upload`.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au libellé et d'un attribut `name` dont la valeur est libre.
    - Il peut disposer d'un attribut `aria-describedby` dont la valeur est égale à l'ID du groupe de messages.
    - Il peut disposer d'un attribut `multiple` dans le cas d'un composant ajout de fichiers multiples.
  - Le groupe de messages est un élément HTML `<div>` défini par la classe `fr-messages-group`.
    - Il dispose d'un attribut `id` pour être lié au champ de fichier et d'un attribut `aria-live="polite"`.
    - Le groupe de messages peut contenir un message d'erreur de type `<p>` défini par les classes `fr-message` et `fr-message--error`.

**Exemple de structure HTML**

```HTML
<div class="fr-upload-group">
    <label class="fr-label" for="file-upload">
        Ajouter un fichier
        <span class="fr-hint-text">Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
    </label>
    <input class="fr-upload" aria-describedby="file-upload-messages" type="file" id="file-upload" name="file-upload">
    <div class="fr-messages-group" id="file-upload-messages" aria-live="polite"></div>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et de l'ajout de fichier doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/upload/upload.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/upload/upload.legacy.min.css" rel="stylesheet">
```

#### Variante d'ajout de fichier avec erreur

Le composant Ajout de fichier peut être affiché en état d'erreur avec l'utilisation de la classe `fr-upload-group--error` et comporter dans le groupe de messages un message d'erreur.

**Exemple de variante d'ajout de fichier avec erreur**

```HTML
<div class="fr-upload-group fr-upload-group--error">
    <label class="fr-label" for="file-upload-with-error">
        Ajouter un fichier
        <span class="fr-hint-text">Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
    </label>
    <input class="fr-upload" aria-describedby="file-upload-with-error-messages" type="file" id="file-upload-with-error" name="file-upload-with-error">
    <div class="fr-messages-group" id="file-upload-with-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error">Format de fichier non supporté</p>
    </div>
</div>
```

#### Variante d'ajout de fichiers multiples

Afin de pouvoir sélectionner plusieurs fichiers, il faut ajouter l'attribut `multiple` à la balise input

**Exemple de variante d'ajout de fichiers multiples**

```HTML
<div class="fr-upload-group">
    <label class="fr-label" for="file-upload-multiple">
        Ajouter des fichiers
        <span class="fr-hint-text">Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
    </label>
    <input class="fr-upload" aria-describedby="file-upload-multiple-messages" multiple type="file" id="file-upload-multiple" name="file-upload-multiple">
    <div class="fr-messages-group" id="file-upload-multiple-messages" aria-live="polite">
    </div>
</div>
```

#### Variante d'ajout de fichier désactivé

Le composant Ajout de fichier peut être désactivé avec l'utilisation de la classe `fr-upload-group--disabled` et comporter dans le groupe de messages un message d'erreur.

**Exemple de variante d'ajout de fichier désactivé**

```HTML
<div class="fr-upload-group fr-upload-group--disabled">
    <!-- Contenu de l'ajout de fichier désactivé -->
</div>
```

---

### JavaScript

Le composant Ajout de fichier **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+upload)

::dsfr-doc-changelog
