---
title: Accessibilité de la carte
---

# Carte

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Carte** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur la Carte :

- `Entrée` : Actionne le lien contenu dans la carte.
  - Redirige vers la destination définie par l'attribut `href` du lien.
  - Déplace le focus vers la page de destination.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Le **niveau d'en-tête** du titre dépend du contexte (et ne sera pas toujours un `<h3>`).
- Il est recommandé d'étendre à toute la carte la **zone cliquable** du lien du titre pour améliorer l'expérience utilisateur.
  - Le focus se positionne alors autour de la carte plûtot qu'autour du lien.
  - Étendre la zone de clic du lien **uniquement si aucun autre élément cliquable n'est présent dans la carte**.
- Le titre de la carte doit avoir un **libellé accessible**.
  - L’intitulé doit être explicite, c’est à dire exprimer clairement ce qui va se passer pour l’utilisateur et lui permettre de comprendre la destination ou la fonction du lien.
  - De préférence utiliser un libellé court et direct.
- En cas de **lien vers un autre site** :
  - Le lien doit s'ouvrir dans une nouvelle fenêtre via l'attribut `target="_blank"`. Une icône "lien externe" apparaît alors à la suite du lien, ou en bas à droite si le lien est étendu.
  - Avoir la mention "nouvelle fenêtre" dans le `title` du lien (ex : `title="libellé lien - nouvelle fenêtre"`).
  - Il est conseillé d'ajouter l'attribut `rel="noopener external"` par mesure de sécurité.
- Pour **désactiver** le lien d'une carte, retirer le `href` rendra le lien visuellement désactivé, mais il est nécessaire d'ajouter les attributs `role="link"` et `aria-disabled="true"` pour indiquer aux technologies d'assistance qu'il s'agit d'un lien désactivé.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
