---
title: Accessibilité de la lettre d'information et des réseaux sociaux
shortTitle: Accessibilité de la lettre d'information et réseaux sociaux
description: Ce composant permet de proposer l’inscription à une lettre d’information et de diriger vers les réseaux sociaux de l’entité.
shortDescription: Inscription à une lettre d’info et accès aux réseaux sociaux.
keywords: lettre d’information, newsletter, réseaux sociaux, footer, interface, composant, design system, RGPD, accessibilité, usager
cover: ./_asset/cover/cover.png
excerpt: Ce document présente le composant Lettre d’information et réseaux sociaux, destiné à favoriser l’abonnement et la consultation des comptes sociaux, avec recommandations d’intégration et règles éditoriales.
summary: Ce contenu décrit le composant Lettre d’information et réseaux sociaux, conçu pour permettre aux usagers de s’abonner à une ou plusieurs lettres d’information et de consulter les réseaux sociaux de l’entité. Il précise les recommandations d’intégration, notamment sa position dans la page, et les consignes éditoriales telles que l’adaptation du message selon le contexte ou les mentions relatives à l’utilisation des données personnelles. Ce guide s’adresse aux équipes chargées de la conception éditoriale et technique des sites web publics.
---

## Lettre d'information et Réseaux Sociaux

La lettre d’information et réseaux sociaux est un ensemble d’éléments d’interaction avec l’interface permettant à l’usager de s’inscrire à (aux) lettre(s) d’information proposée(s), ainsi que des liens vers les réseaux sociaux de l’entité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Lettre d'information et Réseaux Sociaux** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Lettre d'information et Réseaux Sociaux**.

Les interactions clavier sont celles liées aux [liens](../../../../link/_part/doc/accessibility/index.md), aux [boutons](../../../../button/_part/doc/accessibility/index.md) et aux [champs de saisies](../../../../input/_part/doc/accessibility/index.md).

#### Règles d'accessibilité

- Pour rendre accessibles les liens réseaux sociaux, il suffit de renseigner l’attribut `title` du lien de façon à ce qu’il indique explicitement sa fonction.
- Le `<label>` du champs de saisie de la newsletter doit être présent, même s'il est masqué visuellement. Et un attribut `title` sur l'`<input>` doit expliquer la fonction du champs.
- Le placeholder de l'`<input>` doit être utilisé pour donner un exemple sur le format attendu.
- L'ensembles des règles d'accessibilité des [liens](../../../../input/_part/doc/accessibility/index.md), des [boutons](../../../../button/_part/doc/accessibility/index.md) et des [champs de saisies](../../../../input/_part/doc/accessibility/index.md) doivent être respectées.

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
