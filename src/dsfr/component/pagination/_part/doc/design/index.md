---
boost: 0
sitemap:
  noindex: true
title: Design de la Pagination
shortTitle: Design de la Pagination
description: Présentation du composant Pagination permettant à l’usager de naviguer facilement entre les pages d’une liste d’éléments trop longue pour être affichée en une seule fois.
shortDescription: Navigation entre plusieurs pages d’une liste
keywords: pagination, navigation, pages, liste, interface, design système, DSFR, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le composant Pagination permet à l’usager de parcourir les différentes pages d’une liste d’éléments, avec des repères clairs, une troncature automatique et des actions de navigation simples.
summary: Ce composant permet de diviser une liste importante d’éléments en plusieurs pages pour améliorer la lisibilité et l’expérience de navigation. Il intègre des repères de position, des boutons d’accès direct et une gestion responsive adaptée. Sa structure fixe garantit la cohérence et l’accessibilité dans l’ensemble des parcours utilisateurs tout en optimisant le référencement du contenu.
---

## Pagination

La pagination est un système de navigation qui permet à l’usager de naviguer entre les différentes pages d’une liste d’éléments.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un bouton tertiaire avec icône seule permettant de se rendre directement à la première ou à la dernière page]

::dsfr-doc-pin[Un bouton tertiaire avec icône permettant de revenir à la page précédente ou de passer à la page suivante]{required=true}

::dsfr-doc-pin[Un bouton primaire indiquant la page active]{required=true}

::dsfr-doc-pin[Des boutons tertiaires de numéros de page]{required=true}

::dsfr-doc-pin[Un bouton troncature]{add='sous forme de points de suspension pour éviter d’afficher tous les numéros de page lorsqu’ils sont nombreux'}

:::

### Variations

**Responsive**

::dsfr-doc-storybook{storyId=pagination--pagination}

- Conserver le même fonctionnel sur les différentes tailles d'écran.
- Cacher certains numéros de page pour alléger l'affichage sur les écrans mobiles.
- Limiter le nombre de pages visibles pour pouvoir idéalement afficher l’ensemble des éléments de la pagination sur une seule ligne.
- Privilégier les icônes “<“ et “>” pour les actions “Précédent” et “Suivant”.

### Tailles

La largeur de la pagination s’adapte à la taille de son conteneur.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec un lien.

::dsfr-doc-storybook{storyId=pagination--last-page}

- Appliquer cet état aux liens “Précédent” et "première page" lorsque vous êtes sur la première page et sur les liens “Suivant” et "dernière page" lorsque vous êtes sur la dernière page.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole un des liens avec sa souris.

**État courant**

L’état courant permet d’indiquer à l’usager la page active, soit celle sur laquelle il se situe.

::dsfr-doc-storybook{storyId=pagination--pagination}

### Personnalisation

La pagination n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#pagination).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Mettre en évidence la page active en appliquant un fond bleu derrière le numéro de page.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur du fond qui indique la page active.

:::

::::

### Maillage

- [Carte](../../../../card/_part/doc/index.md)
