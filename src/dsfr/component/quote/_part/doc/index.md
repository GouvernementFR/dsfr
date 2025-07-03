---
title: Citation
shortTitle: Citation
titleId: Quote
description: La citation permet d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.
shortDescription: Citer un texte dans un contenu éditorial.
keywords: citation, contenu éditorial, extrait, source, typographie, italique, UX, accessibilité, design system, mise en forme
cover: ./_asset/cover/cover.png
excerpt: Le composant Citation permet d’intégrer un extrait textuel dans une page, avec des champs de détails pour ajouter des précisions sur la source. Il doit respecter une présentation typographique soignée.
summary: Ce document décrit les usages du composant Citation, destiné à intégrer des extraits de textes ou de discours dans un contenu éditorial. Il explique comment distinguer la citation des composants de mise en avant ou de mise en exergue, précise les règles typographiques à appliquer, comme l’usage de guillemets et de l’italique, et recommande d’éviter les citations trop longues pour préserver la lisibilité. Il fournit également des indications sur la structuration, l’usage des champs de détails, et les règles de propriété intellectuelle à respecter.
mesh:
  - component/callout
  - component/highlight
---

## Citation

La citation est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=quote--quote}

### Quand utiliser ce composant ?

Insérer la citation dans une page éditoriale pour citer un texte. La citation peut provenir d'un extrait d’un discours oral ou d’un texte écrit.

> [!WARNING]
> Bien différencier la citation de la mise en avant ou mise en exergue.

[La mise en avant](../../../callout/_part/doc/index.md) est utilisée pour mettre l’accent sur une information importante, venant compléter le contenu principal.

La [mise en exergue](../../../highlight/_part/doc/index.md) quant à elle permet d’identifier plus facilement une information au sein d’un contenu existant.

### Comment utiliser ce composant ?

- **Utiliser les champs de détails pour préciser des informations complémentaires**, telles que l’édition, la collection, la fonction ou le titre de l’auteur par exemple. Il est également possible d’indiquer une URL au sein de ces champs en ajoutant un soulignement pour en faire un lien.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Préciser les informations complémentaires à la citation au sein des champs de détails.

:::

- **Veiller à ce que deux citations ne se suivent pas directement** au sein d’un contenu éditorial.

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Veiller à ce que deux citations ne se suivent pas directement au sein d’un contenu éditorial.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas positionner deux citations à la suite au sein d’un même contenu éditorial.

:::

::::

### Règles éditoriales

- **Intégrer des guillemets avec espaces insécables** au début et à la fin du texte de la citation.
- **Appliquer systématiquement de l’italique** au nom d’un ouvrage lorsqu’il est mentionné dans la source.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Indiquer le nom d’un ouvrage en italique lorsqu’il est mentionné dans la source.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas indiquer un nom d’un ouvrage sans italique lorsqu’il est mentionné dans la source.

:::

- **Eviter les citations trop longues** pour qu’elles ne prennent pas trop de place, notamment en mobile. La citation n’est pas nativement limité en nombre de caractères mais il convient de ne pas excéder une taille trop importante.

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/edit/do-2.png)

Limiter les citations à une longueur raisonnable.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/edit/dont-2.png)

Ne pas proposer des citations trop longues, pour qu’elles ne prennent pas trop de place, notamment en mobile.

:::

::::

> [!IMPORTANT]
> Les citations courtes d’une oeuvre publiée sont autorisées et encadrées en France par le Code de la Propriété Intellectuelle et plus précisément l'[article L122-5](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006069414&idArticle=LEGIARTI000037388886&dateTexte=20191211).
