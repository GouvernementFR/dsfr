---
title: Accessibilité de l'ajout de fichier
---

# Ajout de fichier

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Ajout de fichier** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le champ de fichier :

- `Entrée` : Ouvre la boîte de dialogue pour sélectionner un fichier.
- `Esc` : Referme la boîte de dialogue pour sélectionner un fichier.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Le **libellé** doit être associé au champ de fichier via l'attribut `for` et l'id du champ de fichier.
- Le **groupe de messages** doit être associé au champ de fichier via l'attribut `aria-describedby` et doit disposer de l'attribut `aria-live="polite"` pour permettre la restitution des mises à jour de contenu en attendant la fin d’une éventuelle restitution en cours ([aria-live](https://access42.net/live-regions-aria-live-analogues-alert-log-status/)).

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
