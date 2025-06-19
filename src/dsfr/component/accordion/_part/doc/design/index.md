---
boost: 0
sitemap:
  noindex: true
title: Design de l'Accordéon
shortTitle: Design de l'Accordéon
description: Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.
shortDescription: Masquer ou révéler du contenu textuel
keywords: accordéon, contenu, interaction, affichage, design système, DSFR, accessibilité, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Accordéon permet à l’usager d’ouvrir ou fermer une section de contenu dans une page, pour en faciliter la lecture et alléger la structure globale.
summary: Utilisé pour structurer et hiérarchiser du contenu éditorial, l’accordéon masque par défaut les informations secondaires pour ne révéler que ce que l’usager souhaite consulter. Il est particulièrement utile dans les longues pages de contenu. Il permet des interactions simples, peut être utilisé seul ou en groupe, et respecte des règles strictes de lisibilité et d’accessibilité.
---

## Accordéon

L’accordéon est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer une section de contenu présentée dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de l'accordéon](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un en-tête]{required=true add='correspondant au titre de la section'}

::dsfr-doc-pin[Un chevron orienté vers le bas]{required=true add="indiquant que le panneau peut s'ouvrir. Il est orienté vers le haut quand le panneau peut se refermer"}

::dsfr-doc-pin[Une zone de contenu libre]{required=true add='masquée par défaut'}

::dsfr-doc-pin[Un séparateur]{required=true}

:::

### Variations

**Groupe d’accordéons**

- Par défaut, les accordéons compris dans un groupe d’accordéons sont fermés. Seuls l’en-tête et le chevron sont visibles.
- La totalité de la barre d’en-tête est cliquable. Au clic, le contenu est révélé, ou caché, et le chevron change d'orientation en conséquence.
- Par défaut, le groupe d’accordéons ne permet l’ouverture que d’un accordéon à la fois. Le clic sur un accordéon du groupe entraîne la fermeture de l’accordéon précédemment ouvert.

> [!NOTE]
> L'utilisation d'accordéons non liés entre eux (seuls et non au sein d’un groupe) reste toutefois possible, permettant l'ouverture de chaque accordéon indépendamment des autres.

#### Tailles

La largeur de l’accordéon s’adapte à la taille de son conteneur. Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant de mise en forme de contenu.

#### États

**État au clic**

L’état au clic correspond au comportement constaté par l’usager une fois le panneau ouvert, après avoir cliqué sur l’accordéon.

**État au survol**

L’état au survol correspond au comportement constaté par l’utilisateur lorsqu’il survol le bouton d'ouverture de l’accordéon avec sa souris. Il existe 2 états au survol :

- Lorsque l’accordéon est non cliqué
- Lorsque l’accordéon est cliqué

#### Personnalisation

Les accordéons ne sont pas personnalisables.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les accordéons.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des accordéons.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Utiliser uniquement la taille de typographie prévue pour l’en-tête des accordéons.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas augmenter la taille de typographie de l’en-tête des accordéons.

:::

::::

### Maillage

- [Onglet](../../../../tab/_part/doc/design/index.md)
- [Modale](../../../../modal/_part/doc/design/index.md)
