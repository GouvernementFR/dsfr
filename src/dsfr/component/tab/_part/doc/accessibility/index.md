---
title: Accessibilité de l'Onglet
---

## Onglet

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Onglet** utilise le motif de conception ARIA WAI "Tabs" et suit les critères du RGAA.

#### Interactions clavier

Pour la liste des onglets :

- `Tab` :
    - Lorsque le focus arrive dans la liste des onglets, place le focus sur l'onglet actif.
    - Lorsque le focus est placé sur l'onglet actif, déplace le focus sur le panneau de l'onglet actif.
    - Lorsque le focus est placé sur le panneau de l'onglet actif, déplace le focus sur le prochain élément focalisable.
- `shift + Tab` :
    - Lorsque le focus est placé sur l'onglet actif, déplace le focus sur l'élément focalisable précédent.
    - Lorsque le focus est placé sur le panneau de l'onglet actif, déplace le focus sur le panneau de l'onglet actif.
- `Flèche gauche` ou `Flèche droite` :
    - Lorsque le focus est placé sur l'onglet actif, navigue entre les onglets.

#### Règles d'accessibilité

- L'élément qui sert de conteneur pour l'ensemble des onglets a le rôle `tablist`.
    Il possède un attribut `aria-label` précisant le nom du système d'onglets.
- Chaque element `<li>` de la liste des onglets a le rôle `presentation`.
- Chaque onglet a le rôle `tab` et est contenu dans la liste des éléments le rôle `tablist`.
    - C'est un élément `<button>` de type `button` pour être accessible au clavier.
    - Il est associé à son panneau via l'attribut `aria-controls`.
- Chaque élément contenant le panneau de contenu d'un onglet a le rôle `tabpanel` et un attribut `tabindex="0"`.
    - Il est associé à l'onglet via l'attribut `aria-labelledby`.

#### Références

- [https://www.w3.org/WAI/ARIA/apg/patterns/tabs/](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
