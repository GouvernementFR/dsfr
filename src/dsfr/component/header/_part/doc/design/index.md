---
boost: 0
sitemap:
  noindex: true
title: Design de l'En-tête
shortTitle: Design de l'En-tête
description: Présentation du composant En-tête utilisé pour identifier le site consulté et donner accès à des fonctionnalités clés comme la recherche ou la connexion.
shortDescription: Identification du site et accès rapides
keywords: en-tête, header, marque, recherche, navigation, DSFR, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant En-tête est positionné en haut de chaque page et permet à l’usager de savoir sur quel site il se trouve, tout en facilitant l’accès aux fonctions principales comme la recherche ou la connexion.
summary: Ce composant structure la zone supérieure de chaque page d’un site public. Il intègre les éléments d’identité visuelle de l’État, les éventuels accès rapides à des fonctions essentielles, et le moteur de recherche. Non personnalisable, l’en-tête garantit cohérence, lisibilité et conformité avec la charte de l’État, en version desktop comme mobile. Il peut être enrichi ou simplifié selon les besoins du site.
mesh:
  - component/navigation
  - component/footer
---

## En-tête

L’en-tête est un élément de navigation permettant aux usagers d’identifier sur quel site ils se trouvent et de leur donner un accès simplifié au moteur de recherche et à certaines pages ou fonctionnalités clés du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de l'en-tête](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Le bloc marque]{required=true}

::dsfr-doc-pin[Un logo opérateur]{add="au format vertical ou horizontal"}

::dsfr-doc-pin[Le nom du site]

::dsfr-doc-pin[Une baseline]{add="sous le nom du site"}

::dsfr-doc-pin[Des boutons d’accès rapides]{add="jusqu’à 3 maximum"}

::dsfr-doc-pin[Une barre de recherche]{add="de taille medium"}

:::

### Variations

**En-tête en berne**

::dsfr-doc-storybook{storyId=header--header-minimal args="{ isMourning: true }"}

Lors des périodes de deuil national, il est possible d’utiliser la version en berne du header. La Marianne s’affichera alors dans sa version en berne.

**Responsive**

::dsfr-doc-storybook{storyId=header--tool-links-search width=375}

En version mobile, l’en-tête se compose d’une zone haute intégrant les éléments obligatoires liés au bloc marque. Le bloc marque suit les mêmes règle de composition que pour le desktop et doit respecter [la charte de marque de l'État](https://www.gouvernement.fr/marque-Etat).

Il est complété d’une potentielle zone basse comprenant :

- Le nom du site - si présent,
- Le pictogramme “loupe” pour accéder à la recherche - si présente.

Il permet l’affichage de la barre de recherche dans un “overlay” dédié.

- Le pictogramme “burger” pour accéder au menu principal - si accès rapides et/ou navigation principale présents ([voir en détail la navigation mobile](../../../../navigation/_part/doc/index.md)).

Il permet l’affichage du menu principal dans “overlay’ dédié.

### Tailles

La largeur de l’en-tête est de taille fixe et prend les 12 colonnes disponibles de la grille.

La hauteur minimale de l’en-tête est également de taille fixe, puis celle-ci s’agrandit en fonction de la hauteur du bloc marque.

### États

L’en-tête n’est sujet à aucun changement d’état.

### Personnalisation

L’en-tête n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#en-tête).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](../_asset/custom/do-1.png)

Considérer que chaque élément de l’en-tête à une place définie et conserver leur design en l’état, sans personnalisation.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas modifier le positionnement des éléments de l’en-tête.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas modifier les tailles et types de typographie du nom du site et de la baseline.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-3.png)

Ne pas personnaliser le type de bouton des accès rapides.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-4.png)

Ne pas proposer de contour aux boutons tertiaires, hormis s’il s’agit de celui positionner le plus à droite.

:::

::::
