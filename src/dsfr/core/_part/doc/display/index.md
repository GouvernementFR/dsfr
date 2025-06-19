---
title: Classes CSS d’affichage
shortTitle: Classes CSS d’affichage
description: Cette page documente les classes utilitaires CSS permettant de contrôler l’affichage ou le masquage d’éléments à l’écran ou pour les technologies d’assistance selon les breakpoints définis par le DSFR.
shortDescription: Classes CSS pour gérer l’affichage et la visibilité
keywords: CSS, classes utilitaires, affichage, masquage, fr-hidden, fr-sr-only, responsive, accessibilité, DSFR, breakpoints
cover: ../_asset/display/cover/cover.png
excerpt: Liste des classes CSS pour masquer ou afficher des éléments à l’écran ou pour les lecteurs d’écran selon les points de rupture.
summary: Cette page décrit les classes CSS utilitaires fournies par le Design Système de l’État pour gérer l’affichage conditionnel des éléments. Elle couvre les usages de `fr-sr-only` pour les lecteurs d’écran, `fr-hidden` pour le masquage complet, et leurs variantes responsives en fonction des breakpoints. Elle explique également comment combiner `fr-hidden` avec `fr-unhidden-[breakpoint]` pour un contrôle fin de la visibilité selon les tailles d’écran. Ces classes facilitent la mise en page accessible et adaptative.
order: 12
---

# Classes CSS d'affichage

Le Design Système de l’État (DSFR) propose des classes utilitaires CSS pour contrôler l'affichage des éléments dans vos pages web. Ces classes permettent de masquer ou d'afficher des éléments en fonction des besoins, que ce soit pour les utilisateurs finaux ou pour les technologies d'assistance comme les lecteurs d'écran.

>[!NOTE]
>Pour voir ce qui est masqué sur l'écran, regardez avec l'inspecteur CSS les blocs de textes cachés grâce à ces utilitaires.

### fr-sr-only

Cette classe cache visuellement l'élément mais il reste présent pour les lecteurs d'écran.

```html
<div class="fr-sr-only">
    <p>Lorem [...] elit ut.</p>
</div>
```

### fr-sr-only-[breakpoint]

Cette classe cache visuellement l'élément, uniquement à partir du breakpoint souhaité (sm, md, lg, xl), mais il reste présent pour les lecteurs d'écran. <br>
Exemple en LG :

```html
<div class="fr-sr-only-lg">
    <p>Lorem [...] elit ut.</p>
</div>
```

### fr-hidden

Cette classe cache complètement l'élément, à la fois visuellement et aussi pour les lecteurs d'écran (équivalent au `display: none`).

```html
<div class="fr-hidden">
    <p>Lorem [...] elit ut.</p>
</div>
```

## fr-hidden-[breakpoint]

Cette classe cache complètement l'élément, à la fois visuellement et aussi pour les lecteurs d'écran (équivalent au `display: none`) à partir du breakpoint souhaité (sm, md, lg, xl). <br>
Exemple en LG :

```html
<div class="fr-hidden-lg">
    <p>Lorem [...] elit ut.</p>
</div>
```

## fr-unhidden-[breakpoint]

Cette classe, associée à la classe `fr-hidden` permet de ré-afficher l'élément caché à partir du breakpoint souhaité (sm, md, lg, xl). <br>
Exemple en LG :

```html
<div class="fr-hidden fr-unhidden-lg">
    <p>Lorem [...] elit ut.</p>
</div>
```
