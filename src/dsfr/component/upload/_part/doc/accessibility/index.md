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

Lorsque le focus est positionné sur le champ d'ajout de fichier :

- `Entrée` : Ouvre la boîte de dialogue pour sélectionner un fichier.
- `Esc` : Referme la boîte de dialogue pour sélectionner un fichier.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Le **libellé** doit être associé au champ d'ajout de fichier via l'attribut `for` et l'id du champ d'ajout de fichier.
- Un **message** d'erreur, d'information, ou de succès peut être associé au champ d'ajout de fichier. Son attribut `id` doit être associé à l'attribut `aria-describedby` du champ d'ajout de fichier. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé au technologies d'assistance en utilisant l'attribut `aria-live="polite"`.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
