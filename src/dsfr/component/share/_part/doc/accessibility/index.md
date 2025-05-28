---
title: Accessibilité du Partage
shortTitle: Accessibilité du Partage
description: Présentation du composant Partage permettant à l’usager de diffuser un contenu via les réseaux sociaux, un email ou un lien direct.
shortDescription: Partager un contenu via différents canaux
keywords: partage, réseaux sociaux, interaction, DSFR, accessibilité, design système, bouton, lien
cover: ../_asset/cover/cover.png
excerpt: Le composant Partage permet à l’usager de diffuser une page ou un contenu en quelques clics à travers plusieurs canaux comme les réseaux sociaux, l’email ou un lien copié.
summary: Ce composant facilite la diffusion de contenus numériques en permettant aux usagers de partager une page via des boutons accessibles et adaptés à chaque canal. Il garantit une intégration cohérente avec les règles d’accessibilité, une présentation compacte et une compatibilité avec les outils de gestion du consentement pour les services tiers.
---

## Partage

Le partage est un groupe d’éléments d’interaction avec l’interface permettant à l’usager de partager le contenu consulté via différents canaux.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Partage** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Lorsque le focus est positionné sur un lien de partage :

- `Entrée` : Actionne le Lien.
  - Redirige vers la destination définie par l'attribut `href`.
  - Déplace le focus vers la page de destination.
  - Si le lien est en `target="_blank"`, ouvre la destination dans un nouvel onglet.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

#### Règles d'accessibilité

- Voir les [règles d'accessibilité du composant Lien](../../../../link/_part/doc/accessibility/index.md#regles-d-accessibilite) pour les liens de partage.

### Références

- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
