---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Bandeau d'information importante
shortTitle: Accessibilité du Bandeau d'information importante
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Bandeau d'information importante.
shortDescription: Afficher une alerte temporaire prioritaire.
keywords: bandeau, notice, alerte, information importante, vigilance météo, composant éditorial, interface, UX, design system, accessibilité, urgence
cover: ../_asset/cover/cover.png
excerpt: Le bandeau d’information importante sert à attirer l’attention sur une information temporaire prioritaire comme une alerte météo. Il s’affiche sous la navigation principale sur l’ensemble des pages.
summary: Ce document présente les bonnes pratiques d’usage du bandeau d’information importante. Il décrit son rôle dans la diffusion d’informations urgentes ou prioritaires, précise les cas d’usage recommandés, notamment pour les alertes météo, et définit les règles de positionnement et de rédaction. Il insiste sur la nécessité de limiter son usage à des cas exceptionnels pour préserver son efficacité. Ce guide s’adresse aux équipes éditoriales et techniques souhaitant alerter efficacement les usagers dans un cadre cohérent et accessible.
mesh:
  - component/header
  - component/navigation
---

## Bandeau d'information importante

Le bandeau d’information importante est un élément éditorial permettant d’attirer l’attention des usagers sur une information importante et temporaire.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Bandeau d'information importante** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

- Pour le lien «&nbsp;Bandeau d’information&nbsp;», cibler un identifiant unique du bandeau et ajouter `tabindex="-1"` sur la cible si elle n’est pas focalisable. Vérifier que l’activation du lien déplace effectivement le focus sur cette cible.
- Le rôle `region` permet de retrouver le bandeau avec la navigation par régions des lecteurs d’écran. Il ne déclenche pas d’annonce automatique de son contenu.
- Les **bandeaux refermables** doivent inclure un bouton clairement identifiable pour fermer le bandeau.
- Le bouton de fermeture doit avoir un label explicite via un texte caché et un attribut `title`.
- À la fermeture, repositionner le focus à un endroit pertinent pour l’utilisateur.
- Si le bandeau d’information importante est ajouté dynamiquement après le chargement de la page, utiliser un attribut role sur le composant en fonction du niveau d'alerte, comme sur le [composant alerte](../../../../alert/_part/doc/index.md)
- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h2>`.
- **Expliciter la nature du message** porté par le composant (information, avertissement, alerte etc.) dans le titre du bandeau d'information importante. L’icône et la couleur ne garantissent pas à elles seules la bonne compréhension du message pour la totalité des usagers.
- Si le bandeau précède un contenu répété, comme un menu latéral, privilégier son placement en dehors du `<main>`, dans une région nommée, et ajouter un lien d’accès rapide «&nbsp;Bandeau d’information&nbsp;».
  - Identifier la région du bandeau avec un élément `<section>` nommé ou un conteneur portant `role="region"`.
  - Donner un nom accessible à la région avec `aria-labelledby` référençant l’identifiant du titre du bandeau ou, à défaut, avec `aria-label`, par exemple `<section aria-label="Information">`.

### Contrastes de couleurs

Le composant Bandeau d’information importante est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Bandeau d’information importante.

---

### Critères RGAA applicables
- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.
- **Éléments obligatoires&nbsp;** 8.9
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.11, 10.12
- **Consultation&nbsp;:** 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [WAI-ARIA Authoring Practices — Région nommée](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/region.html)
- [WCAG — Lien d’accès direct au contenu principal (technique G1)](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)
