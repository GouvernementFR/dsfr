---
title: Accessibilité du badge
shortTitle: Accessibilité du Badge
description: Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.
shortDescription: Affichage d’un statut informatif
keywords: badge, statut, état, information, design système, DSFR, accessibilité, non cliquable, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Badge permet de mettre en avant une information courte liée à un élément précis de l’interface, comme un statut ou un état, sans interaction de la part de l’usager.
summary: Utilisé pour signaler un état ou un statut dans une interface, le composant Badge apporte une information rapide à lire, positionnée au plus près de l’élément concerné. Il peut apparaître dans des menus, des tuiles, des tableaux ou des pages. Les badges système suivent des règles strictes de design et d’accessibilité, tandis que les badges standards autorisent une personnalisation encadrée.
---

## Badge

Le badge est un élément d’indication permettant de valoriser une information liée à un élément précis du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Anatomie](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant Badge est conçu pour respecter les critères du RGAA et les bonnes pratiques d'accessibilité.

#### Interactions clavier

Le composant Badge n'est pas un élément interactif. Il n'y a donc pas d'interaction clavier associée.

#### Règles d'accessibilité

- Les badges doivent être utilisés pour fournir des informations complémentaires ou contextuelles sans représenter une information essentielle à elle seule.
- Le contenu textuel du badge doit être clair, concis et compréhensible.
- Éviter l’utilisation de lettre capitale (préférer l’ajout d’une classe css).
- Toujours utiliser la balise `<p>`, ou un `<span>` si celui-ci est à l'intérieur d'un `<p>`.
- La couleur du badge doit être accompagnées d’un contraste suffisant par rapport à son arrière-plan (au moins 4.5:1, selon le WCAG).
- Le Badge ne doit pas être utilisé comme élément interactif. Si une action est attendue, un autre composant interactif doit être préféré (exemple : bouton, lien, tag).
- Si un badge est utilisé pour indiquer un état important ou une alerte, cet état doit être communiqué autrement que visuellement (par exemple, via un texte ou un attribut ARIA dans le contexte environnant).

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)