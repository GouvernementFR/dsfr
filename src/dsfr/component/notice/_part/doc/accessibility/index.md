---
title: Accessibilité du Bandeau d’information importante
---

## Bandeau d'information importante

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Bandeau d'information importante** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Aucune interaction au clavier spécifique au composant.

#### Règles d’accessibilité

- Ne pas sauter ce composant avec les liens d'évitement, le bandeau doit être lu quand l’utilisateur choisit d’aller directement au contenu.
- Les **bandeaux refermables** doivent inclure un bouton clairement identifiable pour fermer le bandeau.
- Le bouton de fermeture doit avoir un label explicite via un texte caché et un attribut `title`.
- À la fermeture, repositionner le focus à un endroit pertinent pour l’utilisateur.

#### Contrastes de couleurs

Le composant Bandeau d’information importante est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Bandeau d’information importante.

---

### Critères RGAA applicables
- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.
- **Éléments obligatoires&nbsp;** 8.9
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.11, 10.12
- **Consultation&nbsp;:** 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)