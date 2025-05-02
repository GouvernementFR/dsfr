---
title: Accessibilité du Menu latéral
---

## Menu latéral

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Menu latéral** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

- `Entrée` ou `Espace` :
    - Lorsque le focus est placé sur le bouton d'ouverture du menu latéral, et que sa sous-section associée est fermée, ouvre la sous-section.
    - Lorsque le focus est placé sur le bouton d'ouverture du menu latéral, et que sa sous-section associée est déjà ouverte, referme la sous-section.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift` + `Tab` : Place le focus sur l'élément focalisable précédent.

#### Règles d’accessibilité

##### Structuration

- Le menu latéral est un système de navigation secondaire. Il doit être structuré dans un élément `nav role="navigation"`.
- Le conteneur principal du menu latéral possède un attribut `aria-labelledby` défini sur l’ID du titre du menu latéral afin de nommer et donner un contexte explicite à la navigation.
- Les éléments de la navigation principales sont structurés dans une liste avec les éléments `ul` et `li `.

##### Éléments actifs

- Le lien actif dispose d’un attribut `aria-current="page"`.
- Si une sous-section associée à un bouton d'ouverture de la navigation est active, le bouton a un attribut `aria-current` défini sur "true".

###### Entrée de menu

- Les boutons d’ouverture et de fermeture des menus déroulants et mega-menus possèdent&nbsp;:
  - un attribut `aria-expanded` défini à `true`lorsque le sous-menu est affiché, à `false`lorsque la sous-section est fermée.
  - un attribut `aria-controls` défini sur l'ID du bloc refermable associé.

#### Contrastes de couleurs

Le composant Menu latéral est suffisamment contrasté en thème clair.

En thème sombre, le contraste est insuffisant au survol sur les items de menu actifs.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Menu latéral.

---

### Critères RGAA applicables
- **Couleurs** : 3.1, 3.2
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3 
- **Structuration** : 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

--- 

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément nav](https://html.spec.whatwg.org/#the-nav-element)