---
title: Accessibilité du Gestionnaire de consentement
---

## Gestionnaire de consentement

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Gestionnaire de consentement** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Gestionnaire de consentement**. Voir les règles d'accessibilité pour les [boutons](../../../../button/_part/doc/accessibility/index.md) et la [modale](../../../../modal/_part/doc/accessibility/index.md).

#### Règles d'accessibilité

- Le bandeau de consentement doit être le premier élément du DOM.
- Les boutons "Tout accepter" et "Tout refuser" doivent exceptionnellement être tous deux des boutons primaires pour ne pas influencer le choix de l'utilisateur.
- La modale de gestion des cookies doit suivre les règles d'accessibilité des [modales](../../../../modal/_part/doc/accessibility/index.md).

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)