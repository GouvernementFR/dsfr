---
title: Accessibilité de la barre de recherche
---

# Barre de recherche

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Barre de recherche** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

L’ensemble des règles d’accessibilité du [champs de saisie](../../../../input/_part/doc/accessibility/index.md) doivent être respectées.

- Le conteneur de la barre de recherche possède un `role="search"`.
- Le champ de recherche est de type `search`.
- Le champ de recherche a une étiquette positionnée hors écran. Le bouton de recherche adjacent permet de comprendre la nature et fonction du champ.
- Le bouton de recherche a un intitulé et un attribut title explicite.

### Contrastes de couleurs

Le composant Barre de recherche est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Barre de recherche.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.9
- **Navigation&nbsp;:** 12.1, 12.5, 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- <a href="https://www.w3.org/TR/wai-aria/#search">Rôle <span lang="en">search</span></a>
- [Technique G167 WCAG](https://www.w3.org/WAI/WCAG21/Techniques/general/G167)&nbsp;: labelliser un champ avec un bouton adjacent explicite.
