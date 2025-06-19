---
boost: 0
sitemap:
  noindex: true
title: Code de la mise en exergue
shortTitle: Code de la mise en exergue
description: La mise en exergue est un composant éditorial destiné à distinguer une information importante au sein du contenu principal d’une page.
shortDescription: Mettre en évidence une information essentielle.
keywords: mise en exergue, contenu, composant éditorial, UX, design system, accessibilité, information, page, interface, valorisation
cover: ../_asset/cover/cover.png
excerpt: Le composant Mise en exergue permet de faire ressortir une information capitale intégrée dans le contenu principal, tout en respectant les principes de lisibilité et de hiérarchisation.
summary: Ce contenu décrit le composant Mise en exergue comme un outil d’identification rapide d’informations clés au sein d’un texte. Il précise ses usages, le distingue de la mise en avant, et détaille les bonnes pratiques de mise en forme pour assurer sa visibilité. L’alignement, la position dans la page et la nature du contenu sont essentiels à son efficacité. Ce guide est destiné aux créateurs de contenu et designers cherchant à hiérarchiser l’information de manière claire et accessible.
---

## Mise en exergue

La mise en exergue est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Mise en exergue** permet de mettre en évidence des informations importantes. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<div>` :
    - Doit avoir la classe `fr-highlight`.
2. Une zone de contenu pour le texte de la mise en exergue :
    - Représentée par un élément `<p>`.

**Exemple de structure HTML**

```HTML
<div class="fr-highlight">
    <p>Lorem [...] elit ut.</p>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, le style CSS de la mise en exergue et du core doit être importé dans la page. Les fichiers doivent être inclus dans le `<head>` avant le contenu de la page.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/highlight/highlight.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/highlight/highlight.legacy.min.css" rel="stylesheet">
```

#### Variantes de taille

Le texte de la mise en exergue peut être de différentes tailles :

- Par défaut en taille md.
- `fr-text--sm` : Petit texte.
- `fr-text--lg` : Grand texte.

**Exemple de texte de différentes tailles**

```HTML
<div class="fr-highlight">
  <p class="fr-text--lg">Lorem [...] elit ut.</p>
</div>
```

#### Variantes d'accentuation

Le composant Mise en exergue est accentuable, permettant le changement de la couleur de la bordure latérale. Pour cela, ajouter la classe `fr-highlight--NOM-COULEUR` au même niveau que la classe `fr-highlight`.

**Exemple de structure accentuée**

```HTML
<div class="fr-highlight fr-highlight--green-emeraude">
    <p>Lorem [...] elit ut.</p>
</div>
```

### JavaScript

Le composant Mise en exergue **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+highlight+)

::dsfr-doc-changelog
