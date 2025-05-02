---
title: Accessibilité du sélecteur de langue
---

# Sélecteur de langue

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Sélecteur de langue** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

##### Bouton d’ouverture
- Le bouton d’ouverture du sélecteur de langue possède deux attributs ARIA&nbsp;:
  - `aria-expanded` défini à :
    - `true` lorsque la liste déroulante des autres langues est affichée,
    - `false` lorsque la liste déroulante des autres langues est masquée.
  - `aria-controls` qui relie le bouton à la zone contrôlée et dont la valeur doit correspondre à l’attribut `id` de la zone de contenu.

##### Liste de langues
- La liste de langues est structurée dans une liste `ul` `li`.
- Le lien actif de la liste de langues porte un attribut `aria-current=”true”`.
- Chaque lien de la liste de langues disposent d'un attribut `hreflang` et un attribut `lang`, dont les valeurs spécifient la langue cible.
- Une langue est indiquée par son code [ISO 639-1](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1), puis son nom en toute lettres et dans la langue cible. Par exemple, on écrira "EN - English", et pas "EN - Anglais".

#### Contrastes de couleurs

Le composant Sélecteur de langue est suffisamment contrasté en thème clair.

En thème sombre, le bouton d’ouverture est insuffisamment contrasté au survol.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Sélecteur de langue.

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
