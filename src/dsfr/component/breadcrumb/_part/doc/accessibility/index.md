---
title: Accessibilité du fil d'Ariane
---

## Fil d'Ariane

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Fil d’Ariane** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

- `Entrée` ou `Espace` : Permet de déplier le fil d’Ariane en mobile.
- `Tab` : Place le focus sur le prochain lien du fil d’Ariane.
- `shift + tab` : Place le focus sur liens précédent du fil d’Ariane.

#### Règles d'accessibilité

- Placer le fil d’Ariane avant le contenu principal `<main>` dans le DOM. Le placer ici permet au lien d'évitement "Aller au contenu" d'éviter tous les liens de navigation.
- Le conteneur principal du fil d’Ariane utilise l’attribut `role="navigation"` pour indiquer qu'il s'agit d'une zone de navigation.
- L’attribut `aria-label="vous êtes ici :"` est utilisé pour donner un contexte explicite à la navigation.
- En mode mobile, un bouton remplace l’affichage direct du fil d’Ariane. Ce bouton :
  - Dispose de l’attribut `aria-expanded` pour indiquer l’état d’ouverture ou de fermeture du contenu (valeurs possibles : `true` ou `false`).
  - Utilise l’attribut `aria-controls` pour établir un lien avec l’élément `<div>` contenant le fil d’Ariane (par son `id`).
- Le lien vers la page actuelle dans le fil d’Ariane utilise l’attribut `aria-current="page"` pour identifier l'élément représentant la page active.
- L’ordre des éléments dans le DOM respecte la logique de navigation.
- S'assurer qu’aucun autre élément interactif ne soit placé trop près des liens du fil d’Ariane pour éviter les erreurs de clic. [WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)