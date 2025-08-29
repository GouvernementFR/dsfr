---
boost: 0
sitemap:
  noindex: true
title: Code de l'Indicateur d'étapes
shortTitle: Code de l'Indicateur d’étapes
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Indicateur d’étapes.
shortDescription: Suivi d’un parcours en plusieurs étapes
keywords: indicateur d’étapes, formulaire, démarche, progression, design système, DSFR, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: L’indicateur d’étapes permet à l’usager de se repérer dans un processus linéaire, en affichant la position actuelle dans le parcours ainsi que les étapes restantes.
summary: Ce composant s’intègre dans les parcours à étapes pour aider l’usager à visualiser son avancée. Il affiche une barre de progression, un titre explicite pour chaque étape et un repère numérique. Il ne permet pas de navigation directe entre les étapes mais accompagne visuellement l’usager du début à la fin du formulaire. Sa structure est fixe, sans personnalisation, pour garantir une expérience uniforme et accessible.
mesh:
  - component/input
  - component/form
---

## Indicateur d'étapes

L’indicateur d'étapes est un élément éditorial permettant d’accompagner l’usager au sein d’un formulaire ou une démarche en plusieurs étapes.

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

- Le conteneur du stepper est un élément HTML `<div>` défini par la classe `fr-stepper`.
- Le titre de l'étape en cours, obligatoire, est contenu dans un niveau d'entête `<hx>`, variable en fonction de sa hiérarchie dans la page (par défaut h2), et possède la classe `fr-stepper__title`.
  - Le numéro de l'étape et le nombre d'étapes total, obligatoires, sont précisés à l'intérieur du titre dans un élément HTML `<span>` défini par la classe `fr-stepper__state`.
- La barre de progression, obligatoire, un élément HTML `<div>` défini par la classe `fr-stepper__steps`.
  - La balise possède des attributs `data-fr-steps` et `data-fr-current-step` pour définir le nombre total d'étapes et l'étape actuelle.
- Les détails de l'étape sont un élément HTML `<p>` défini par la classe `fr-stepper__details` et contiennent :
  - Le titre de l'étape suivante, obligatoire, dans un élément HTML `<span>`.

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

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Stepper    | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/stepper/stepper.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Indicateur d'étapes **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+stepper+)
