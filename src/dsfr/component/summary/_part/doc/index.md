---
title: Sommaire
shortTitle: Sommaire
titleId: Summary
description: Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.
shortDescription: Navigation entre les sections d’une page
keywords: sommaire, navigation, ancre, contenu long, DSFR, accessibilité, design système, interface
cover: ./_asset/cover/cover.png
excerpt: Le composant Sommaire affiche des liens ancrés vers les différentes sections d’une page, facilitant la lecture et l’accès rapide à l’information pour l’usager.
summary: Ce composant permet d’améliorer l’expérience utilisateur dans les pages à forte densité de contenu. Il affiche en haut de page une liste d’ancres reprenant fidèlement les titres des sections éditoriales, dans un bloc distinct visuellement. Le sommaire n’est pas sticky, ne se personnalise pas, et garantit une navigation fluide et cohérente au sein d’un même contenu.
---

## Sommaire

Le sommaire est un système de navigation secondaire présentant une liste d’ancres placée au-dessus du contenu correspondant.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=summary--summary}

### Quand utiliser ce composant ?

Proposer le sommaire pour permettre à l’usager d’avoir un aperçu du contenu consulté et de naviguer entre les différentes sections d’une page.

Il est recommandé d’utiliser le sommaire dans une page de contenu longue ou à forte densité.

> [!WARNING]
> Bien différencier le sommaire du menu latéral. Le [menu latéral](../../../sidemenu/_part/doc/index.md) est utilisé pour naviguer entre différentes pages d’une rubrique ou d’un même thème. Il ne présente pas des ancres mais des liens.

### Comment utiliser ce composant ?

- **Placer le sommaire en haut de page**, juste avant le corps de texte. Si un chapô est présent en début de page, le sommaire s’affiche entre le chapô et le contenu éditorial.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Placer le sommaire en haut de page, avant le corps de texte.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas intégrer le sommaire au sein du contenu éditorial lui-même.

:::

::::

- **Positionner le titre du sommaire au-dessus de la liste d’ancres**.
- **Reprendre les titres de section de la page (H1 et H2) sous forme d’ancre** vers le contenu correspondant. Au clic sur un lien, l’utilisateur est redirigé dans la page, au niveau de la section cherchée.
- **Conserver le fond de couleur du sommaire,** destiné à le séparer visuellement du contenu.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Garantir une distinction visuelle entre sommaire et le contenu éditorial.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas supprimer le fond de couleur, au risque d’altérer la bonne compréhension de l’usager.

:::

::::

- **Garantir le positionnement du sommaire en haut de page**. Il ne s’agit pas d’un élément fixé qui reste visible au défilement de la page.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Conserver le sommaire en haut de page.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-3.png)

Ne pas rendre le sommaire sticky.

:::

::::

### Règles éditoriales

- **Reprendre le texte exact de chaque titre de section** comme libellé des ancres du sommaire.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Nommer les ancres du sommaire comme les titres des sections de la page vers lesquelles elles renvoient.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas proposer des titres différents entre les ancres du sommaire et les sections de la page.

:::

::::
