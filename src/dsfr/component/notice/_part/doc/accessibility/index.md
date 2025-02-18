---
title: Accessibilité du Bandeau d'information importante
---

## Bandeau d'information importante

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
