---
title: Pagination
shortTitle: Pagination
titleId: Pagination
description: Présentation du composant Pagination permettant à l’usager de naviguer facilement entre les pages d’une liste d’éléments trop longue pour être affichée en une seule fois.
shortDescription: Navigation entre plusieurs pages d’une liste
keywords: pagination, navigation, pages, liste, interface, design système, DSFR, accessibilité
cover: ./_asset/cover/cover.png
excerpt: Le composant Pagination permet à l’usager de parcourir les différentes pages d’une liste d’éléments, avec des repères clairs, une troncature automatique et des actions de navigation simples.
summary: Ce composant permet de diviser une liste importante d’éléments en plusieurs pages pour améliorer la lisibilité et l’expérience de navigation. Il intègre des repères de position, des boutons d’accès direct et une gestion responsive adaptée. Sa structure fixe garantit la cohérence et l’accessibilité dans l’ensemble des parcours utilisateurs tout en optimisant le référencement du contenu.
mesh:
  - component/card
---

## Pagination

La pagination est un système de navigation qui permet à l’usager de naviguer entre les différentes pages d’une liste d’éléments.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=pagination--pagination}

### Quand utiliser ce composant ?

**Utiliser la pagination lorsqu’une liste d'éléments est trop importante pour être affichée sur une seule page** (plus de 20 éléments). Il est dès lors préférable de la diviser en plusieurs pages, afin de simplifier le parcours de l’usager au sein de cette liste.

Privilégier la pagination au rechargement automatique ou à un bouton “Voir plus” permet également un meilleur référencement de votre site.

### Comment utiliser ce composant ?

- **Placer systématiquement la pagination en bas de la liste**.
- **Mettre clairement en avant la page sur laquelle l’usager se trouve** grâce à l’état courant disponible.
- **Indiquer la dernière page de la liste comme dernier élément de la pagination** afin que l’usager connaisse le nombre total de pages.
- **Désactiver le lien “Précédent”** lorsque l’usager se trouve sur la première page et le lien “Suivant” lorsqu’il est sur la dernière page.
- **Permettre un accès rapide à la première et dernière page** lorsque celles-ci ne sont pas actives (soit avec les boutons “I<“ et “>I”, soit avec la page “1” et la dernière page).
- **Limiter de 5 à 7 le nombre de pages affichées par défaut dans la pagination**. Au-delà, masquer les autres pages par un système de troncature. La troncature est matérialisée par l’icône “…” qui s’affiche uniquement quand le nombre total de pages de la liste est supérieur à la limite fixée.
- **Envisager la double troncature** lorsque la page consultée est séparée par 5 pages ou plus de la première et de la dernière page.
- **Renvoyer l’usager en haut de page** lorsqu’il change de page à l’aide de la pagination.
- **Conserver le même fonctionnel de pagination** à travers l’intégralité de votre site.

### Règles éditoriales

La pagination n’est régie par aucune règle éditoriale spécifique.
