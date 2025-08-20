---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Curseur
shortTitle: Accessibilité du Curseur
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Curseur.
shortDescription: Sélection d’une valeur sur une échelle
keywords: curseur, range, sélection, valeur, interface, DSFR, accessibilité, filtre, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Curseur permet à l’usager de définir une valeur dans une plage donnée, souvent utilisée pour ajuster un paramètre de façon dynamique et visuelle.
summary: Le curseur est utile lorsque la saisie d’une valeur approximative est suffisante, comme pour filtrer des contenus ou ajuster des préférences. Il propose différentes variantes - simple, double ou cranté, avec ou sans affichage des bornes. Non personnalisable, il est conçu pour un usage fluide et accessible, avec retour visuel en temps réel sur les valeurs sélectionnées.
mesh:
  - component/input
  - component/select
  - component/radio
---

## Curseur

Le curseur est un élément d’interaction avec l’interface permettant à l’usager de délimiter manuellement une sélection par rapport à une valeur minimale et maximale.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Curseur** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le curseur&nbsp;:

- `Flèche gauche` ou `Flèche bas` : diminue la valeur du curseur.
- `Flèche droite` ou `Flèche haut` : augmente la valeur du curseur.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Un curseur doit avoir une **étiquette pertinente**. On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de&nbsp;:

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

##### Curseur simple
Dans le cas du curseur simple, utiliser l’élément `<label>` avec une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id`.

Préciser les valeurs minimum et maximale dans le texte de description additionnel.

##### Curseur double

Pour le curseur double avec deux `input type="range"`, on peut utiliser l’attribut `aria-labelledby` ou l’attribut `aria-label`.

En cas d’utilisation de l’attribut `aria-labelledby`, le texte additionnel doit être très explicite pour permettre de comprendre qu’il y a deux curseurs (un minimum / un maximum).

Si `aria-label` est la méthode retenue, il faudra veiller à ce que le contenu de l’étiquette visible soit bien repris.

Exemple&nbsp;: `aria-label="[Minimum - Label Texte de description additionnel]"` et `aria-label="[Maximum - Label Texte de description additionnel]"`

#### Étiquette visible et accolée

L’étiquette est visible et accolée au curseur.

#### État désactivé

> [!WARNING]
> **L’état désactivé du curseur peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

Les éléments du curseur désactivé sont insuffisamment contrastés. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:
- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Contrastes de couleurs

Le composant Curseur est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

L’input type="range" est bien supporté par les différents lecteurs d’écran.

Il est vocalisé «&nbsp;curseur&nbsp;» (VoiceOver, TalkBack), «&nbsp;potentiomètre&nbsp;» (Narrateur, NVDA, JAWS).

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type**. L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

#### Restitution de l'état désactivé

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran&nbsp;:

- VoiceOver macOS et iOS&nbsp;: «&nbsp;estompé&nbsp;»
- NVDA et JAWS&nbsp;: «&nbsp;bouton non disponible&nbsp;»
- Narrateur et Talkback &nbsp;: «&nbsp;bouton désactivé&nbsp;»

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type range](https://html.spec.whatwg.org/#range-state-(type=range))
