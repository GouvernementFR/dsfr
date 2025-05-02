---
title: Accessibilité du Sommaire
---

## Sommaire

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Sommaire** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Lorsque le focus est positionné sur le sommaire&nbsp;:
- `Tab` : place le focus sur le prochain élément focalisable.
- `Maj + Tab` : lace le focus sur l'élément focalisable précédent.

#### Règles d’accessibilité

- Le sommaire est un système de navigation secondaire. Il doit être structuré dans un élément `nav role="navigation"`.
- Le conteneur principal du menu latéral possède un attribut `aria-labelledby` défini sur l’ID du titre du sommaire afin de nommer et donner un contexte explicite à la navigation.
- Les éléments du sommaire sont structurés dans une liste avec les éléments `ul` et `li `.


#### Contrastes de couleurs

Le composant Sommaire est suffisamment contrasté en thème clair et en thème sombre.


### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Menu latéral.

---

### Critères RGAA applicables
- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Structuration** : 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément nav](https://html.spec.whatwg.org/#the-nav-element)