---
title: Accessibilité de l’Indicateur d’étapes
---

## Indicateur d’étapes

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Indicateur d'étapes** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Indicateur d’étapes**.

#### Règles d’accessibilité

- Le titre de l’étape en cours est contenu dans un élément `<hx>`.
- Le nom de l’étape suivante est dans un élément `<p>`.
- La barre de progression ne nécessite aucune alternative ni attribut ARIA (car purement illustrative).

#### Contrastes de couleurs

Le composant Indicateur d’étapes est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Indicateur d’étapes.

---

### Critères RGAA applicables
- **Couleurs&nbsp;:** 3.2
- **Éléments obligatoires&nbsp;** 8.9
- **Structuration&nbsp;:** 9.1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.4, 10.5, 10.11, 10.12
- **Consultation&nbsp;:** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
