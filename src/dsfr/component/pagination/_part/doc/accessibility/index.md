---
title: Accessibilité de la pagination
---

## Pagination

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Pagination** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Aucune interaction au clavier spécifique au composant.

#### Règles d’accessibilité

##### Structuration

- La pagination est un système de navigation secondaire. Elle doit être structurée dans un élément `nav role="navigation"`.
- L’attribut `aria-label="pagination"` est utilisé pour donner un contexte explicite à la navigation.

Liens de la pagination&nbsp;: 
- Les liens de la pagination sont structurés dans une liste `<ul><li>`.
- La page en cours dans la pagination est identifiée avec l’attribut `aria-current="page"` et n’est pas cliquable.
- Les liens (numéro de page) disposent d’un attribut `title` pour expliciter leur fonction.
- Les liens désactivés n’ont pas d’attribut `href` et possèdent les attributs `aria-disabled="true"` et `role="link"`.

#### Contrastes de couleurs

Le composant Pagination est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

#### Attribut `disabled`

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran&nbsp;:
- VoiceOver macOS et iOS&nbsp;: «&nbsp;estompé&nbsp;»
- NVDA et JAWS&nbsp;: «&nbsp;non disponible&nbsp;»
- Narrateur et Talkback &nbsp;: «&nbsp;désactivé&nbsp;» 

#### Attribut `aria-current`
L’attribut `aria-current="page"` est restitué différemment selon les lecteurs d’écran.

- VoiceOver macOS, Narrateur&nbsp;: «&nbsp;page actuelle&nbsp;»
- NVDA, JAWS&nbsp;: «&nbsp;page courante&nbsp;»
- Talkback, VoiceOver iOS&nbsp;: «&nbsp;page active&nbsp;» 

À noter&nbsp;: VoiceOver iOS et Narrateur ne restituent pas `aria-current` sur un élément `a` sans attribut `href`. 

La page courante est alors indiquée implicitement aux personnes aveugles car celle-ci n’est pas structurée dans un lien, contrairement aux autres pages.

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Structuration&nbsp;:** 9,2, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation&nbsp;:** 12.2, 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)