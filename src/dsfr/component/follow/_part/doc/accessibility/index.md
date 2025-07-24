---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la lettre d'information et des réseaux sociaux
shortTitle: Accessibilité de la lettre d'information et réseaux sociaux
description: Ce composant permet de proposer l’inscription à une lettre d’information et de diriger vers les réseaux sociaux de l’entité.
shortDescription: Inscription à une lettre d’info et accès aux réseaux sociaux.
keywords: lettre d’information, newsletter, réseaux sociaux, footer, interface, composant, design system, RGPD, accessibilité, usager
cover: ./_asset/cover/cover.png
excerpt: Ce document présente le composant Lettre d’information et réseaux sociaux, destiné à favoriser l’abonnement et la consultation des comptes sociaux, avec recommandations d’intégration et règles éditoriales.
summary: Ce contenu décrit le composant Lettre d’information et réseaux sociaux, conçu pour permettre aux usagers de s’abonner à une ou plusieurs lettres d’information et de consulter les réseaux sociaux de l’entité. Il précise les recommandations d’intégration, notamment sa position dans la page, et les consignes éditoriales telles que l’adaptation du message selon le contexte ou les mentions relatives à l’utilisation des données personnelles. Ce guide s’adresse aux équipes chargées de la conception éditoriale et technique des sites web publics.
mesh:
  - component/button
  - component/input
---

## Lettre d’information et Réseaux Sociaux

La lettre d’information et réseaux sociaux est un ensemble d’éléments d’interaction avec l’interface permettant à l’usager de s’inscrire à (aux) lettre(s) d’information proposée(s), ainsi que des liens vers les réseaux sociaux de l’entité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Lettre d’information et Réseaux Sociaux** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

L’ensembles des règles d'accessibilité des [liens](../../../../input/_part/doc/accessibility/index.md), des [boutons](../../../../button/_part/doc/accessibility/index.md) et des [champs de saisie](../../../../input/_part/doc/accessibility/index.md) doivent être respectées.

#### Liens réseaux sociaux

- Les liens des réseaux sociaux doivent être structurés dans une liste.
- Pour expliciter les liens-icônes, ajouter un attribut `title` sur le lien.

#### Lettre d’information

- Le `<label>` du champ de saisie de la <span lang="en">newsletter</span> doit être présent, même s'il est masqué visuellement.
- Un attribut `title` sur l'`<input>` explicite la fonction du champ.

### Contrastes de couleurs

Le composant est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Lettre d’information et Réseaux Sociaux.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3, 7.5
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.9, 11.10, 11.11, 11.13
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
