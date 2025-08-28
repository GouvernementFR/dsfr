---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du badge
shortTitle: Accessibilité du Badge
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Badge.
shortDescription: Affichage d’un statut informatif
keywords: badge, statut, état, information, design système, DSFR, accessibilité, non cliquable, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Badge permet de mettre en avant une information courte liée à un élément précis de l’interface, comme un statut ou un état, sans interaction de la part de l’usager.
summary: Utilisé pour signaler un état ou un statut dans une interface, le composant Badge apporte une information rapide à lire, positionnée au plus près de l’élément concerné. Il peut apparaître dans des menus, des tuiles, des tableaux ou des pages. Les badges système suivent des règles strictes de design et d’accessibilité, tandis que les badges standards autorisent une personnalisation encadrée.
mesh:
  - component/tag
---

# Badge

Le badge est un élément d’indication permettant de valoriser une information liée à un élément précis du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Anatomie](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Badge** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Le composant Badge n’est pas interactif. Il n’y a donc pas d'interaction au clavier associée.

### Règles d’accessibilité

#### Structuration

- Par défaut, utiliser un élément `<p>` lorsque le badge est utilisé seul.
- Si le badge est utilisé à l’intérieur d’un élément qui possède une sémantique (`<p>`, `li`…), utiliser un élément `<span>`.
- En cas d’utilisation de plusieurs badges à la suite, les structurer dans une liste.

#### Badge système avec icône

L’information doit être donnée par le texte du badge. L’icône est purement décorative.

#### Contrastes de couleurs

Le composant Badge est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

>[!CAUTION]
>En cas de personnalisation, la couleur du texte et la couleur du fond doivent être suffisamment contrastées (ratio minimum de 4.5:1).

##### Badge par défaut

En thème clair et en thème sombre, le ratio de contraste du composant Badge par défaut est de 9,8:1.

##### Accentuations

:::fr-table[Contrastes des accentuations]{valign=top multiline=true caption=false}
| Accentuation |  Thème clair | Thème sombre |
|------|-----|-----|
|**green-tilleul-verveine**| 5:1 | 8,91:1|
|**green-bourgeon**| 4,9:1 | 7,42:1|
|**green-emeraude**| 4,95:1 |7,33:1 |
|**green-menthe**| 5,78:1 | 5,41:1|
|**green-archipel** |5,47:1 | 6,54:1|
|**blue-ecume** | 8,49:1 | 5,73:1|
|**blue-cumulus** | 5,87:1 |6,88:1 |
|**purple-glycine** | 6,84:1 | 5,05:1|
|**pink-macaron** | 5,24:1 | 9,34:1|
|**pink-tuile** | 4,94:1 | 7,22:1|
|**yellow-tournesol** | 5,21:1 | 12,21:1|
|**yellow-moutarde** | 6,25:1 | 10,13:1|
|**orange-terre-battue** | 5,83:1 |5,72:1 |
|**brown-cafe-creme** | 5,59:1 |10,89:1 |
|**brown-caramel** | 4,94:1 |11,47:1 |
|**brown-opera** | 5,43:1 |9,01:1|
|**beige-gris-galet** | 5,22:1 | 9,01:1|
:::

##### Badge système

:::fr-table[Contrastes des badges système]{valign=top multiline=true caption=false}
| Statut |  Thème clair | Thème sombre |
|------|-----|-----|
|**Succès**| 4,95:1 | 4,95:1 |
|**Avertissement**| 4,95:1| 4,94:1 |
|**Erreur**| 4,96:1|4,95:1 |
|**Information**| 4,93:1| 4,94:1 |
|**Nouveauté**| 6,25:1| 10,13:1 |
:::

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Badge.

---

### Critères RGAA applicables
- **Couleurs&nbsp;:** 3.2
- **Éléments obligatoires&nbsp;** 8.9
- **Structuration&nbsp;:** 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.4, 10.5, 10.11, 10.12
- **Consultation&nbsp;:** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
