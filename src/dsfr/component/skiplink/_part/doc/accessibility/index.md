---
title: Accessibilité des Liens d'évitement
---

## Liens d'évitement

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Liens d'évitement** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Lorsque le focus n'est pas encore positionné dans la page :

- `Tab` : Affiche les liens d'évitement et place le focus sur le premier lien de la liste.
- `Entrée` : Actionne le lien d'évitement et fait defiler la page jusqu'à l'ancre définie sur le lien.

Lorsque le focus est positionné sur les liens d'évitement :

- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

Lorsque le focus est sur le premier élement focusable de la page hors liens d'évitement :

- `shift + Tab` : Affiche les liens d'évitement et place le focus sur le dernier lien de la liste.
- `Entrée` : Actionne le lien d'évitement et fait defiler la page jusqu'à l'ancre définie sur le lien.

#### Règles d'accessibilité

- Les liens d'évitement doivent être les premiers éléments focusables de la page.
- Les liens d’accès rapide doivent être entourés par une balise `<nav>`.
- Les liens d’accès rapide doivent être structurés avec une liste `<ul><li>`.
- Le lien d’accès au contenu devrait toujours être le premier dans la liste.

#### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
