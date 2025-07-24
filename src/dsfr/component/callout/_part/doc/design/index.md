---
boost: 0
sitemap:
  noindex: true
title: Design de la mise en avant
shortTitle: Design de la mise en avant
description: La mise en avant est un élément éditorial servant à valoriser une information complémentaire dans une page de contenu.
shortDescription: Mettre en valeur une information secondaire.
keywords: mise en avant, contenu, composant éditorial, UX, design system, accessibilité, information, valorisation, page, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Mise en avant permet de valoriser un contenu complémentaire dans une page, en attirant l’attention de l’usager sans perturber la lecture principale.
summary: Ce contenu décrit le composant Mise en avant utilisé pour signaler une information complémentaire au sein d’un contenu éditorial. Il précise ses cas d’usage, le distingue de la mise en exergue et des alertes, et recommande de limiter son usage à une ou deux occurrences par page. Des règles éditoriales simples sont proposées pour garantir lisibilité et efficacité. Ce guide s’adresse aux concepteurs de contenus et interfaces souhaitant structurer l’information de manière claire et hiérarchisée.
mesh:
  - component/quote
  - component/highlight
---

## Mise en avant

La mise en avant est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la mise en avant](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une icône]{add="pour aider à la compréhension du message"}

::dsfr-doc-pin[Un titre]

::dsfr-doc-pin[Une description]{required=true}

::dsfr-doc-pin[Un bouton pour inciter à l’action ou un lien pour naviguer vers un autre contenu]

::dsfr-doc-pin[Une bordure de couleur]{required=true}

:::

### Variations

La mise en avant ne propose aucune variation.

### Tailles

La largeur de la mise en avant s’adapte à la taille de son conteneur.

Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant à intégrer au sein de pages de contenu.

### États

La mise en avant n’est sujette à aucun changement d’état.

### Personnalisation

Les éléments fond et bordure de la mise en avant sont personnalisables et peuvent utiliser l’ensemble les couleurs illustratives.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](../_asset/custom/do-1.png)

Personnaliser la mise en avant avec l’ensemble des couleurs illustratives d’indice $main pour la bordure et $950 pour le fond.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas utiliser une couleur illustrative ou des indices autre que ceux autorisés.

:::

::::

:::fr-table[Titre du tableau]{valign=top multiline=true caption=false}
|  Éléments | Indice thème clair | Indice thème sombre |
|:-----|:-----|:-----|
| **Bordure `$border-default-blue-france`** | Indice **main**<br> exemple : `$green-emeraude-main-632` | Indice **main**<br> exemple : `$green-emeraude-main-632` |
| **Fond `$background-contrast-neutral`**| Indice **950**<br> exemple : `$green-emeraude-950` | Indice **100**<br> exemple : `$green-emeraude-100` |
:::

Par ailleurs, certains éléments sont optionnels et les icônes peuvent être changées - voir [la structure du composant](#mise-en-avant).
