---
title: Accessibilité du bandeau d'information importante
shortTitle: Accessibilité du bandeau d'information importante
description: Le bandeau d’information importante permet de signaler temporairement une information urgente ou prioritaire en tête de page.
shortDescription: Afficher une alerte temporaire prioritaire.
keywords: bandeau, alerte, information importante, vigilance météo, composant éditorial, interface, UX, design system, accessibilité, urgence
cover: ../_asset/cover/cover.png
excerpt: Le bandeau d’information importante sert à attirer l’attention sur une information temporaire prioritaire comme une alerte météo. Il s’affiche sous la navigation principale sur l’ensemble des pages.
summary: Ce document présente les bonnes pratiques d’usage du bandeau d’information importante. Il décrit son rôle dans la diffusion d’informations urgentes ou prioritaires, précise les cas d’usage recommandés, notamment pour les alertes météo, et définit les règles de positionnement et de rédaction. Il insiste sur la nécessité de limiter son usage à des cas exceptionnels pour préserver son efficacité. Ce guide s’adresse aux équipes éditoriales et techniques souhaitant alerter efficacement les usagers dans un cadre cohérent et accessible.
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

### Accessibilité

Le composant **Bandeau d'information importante** est conçu pour être accessible et suit les critères du RGAA.

Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

- `Tab` : Permet de naviguer vers le bandeau si elle contient des éléments interactifs (comme un bouton pour fermer ou un lien).
- `Entrer` ou `Espace` : Active l’élément focalisé à l’intérieur du bandeau (par exemple, un bouton ou un lien).

#### Règles d'accessibilités

- Les **bandeaux refermables** doivent inclure un bouton clairement identifiable pour fermer le bandeau.
  - Le bouton de fermeture doit avoir un label explicite via un texte caché et un attribut `title`.

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
