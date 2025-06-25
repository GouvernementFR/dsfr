---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Gestionnaire de consentement
shortTitle: Accessibilité du Gestionnaire de consentement
description: Le gestionnaire de consentement permet de recueillir et gérer les préférences des usagers concernant le dépôt de cookies non essentiels, en conformité avec les exigences de la CNIL.
shortDescription: Gérer le consentement des usagers sur les cookies et données personnelles.
keywords: consentement, cookies, données personnelles, CNIL, confidentialité, bandeau, modale, finalités, RGPD, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le gestionnaire de consentement permet d’informer les usagers et de recueillir leur accord sur l’utilisation de cookies non essentiels via un bandeau et une modale accessible à tout moment.
summary: Ce composant propose une interface conforme aux recommandations de la CNIL pour recueillir le consentement des usagers concernant l’utilisation de cookies non fonctionnels. Il affiche un bandeau au chargement du site, permet une gestion fine des finalités et sous-finalités via une modale dédiée, et garantit l’accessibilité permanente au réglage des préférences depuis le pied de page. Le gestionnaire de consentement n’est pas personnalisable, sauf pour les textes affichés.
---

## Gestionnaire de consentement

Le gestionnaire de consentement permet à l'usager de définir ses préférences sur l'utilisation de ses données personnelles, notamment le dépôt de cookies non fonctionnels dans son navigateur.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Gestionnaire de consentement** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant.

### Règles d’accessibilité

- Le bandeau de consentement doit être le premier élément du DOM.

Voir les règles d’accessibilité pour&nbsp;:

- les [boutons](../../../../button/_part/doc/accessibility/index.md),
- la [modale](../../../../modal/_part/doc/accessibility/index.md),
- les [boutons radio](../../../../radio/_part/doc/accessibility/index.md).

### Restitution par les lecteurs d’écran

Aucun test de restitution supplémentaire n’est nécessaire pour le composant Gestionnaire de consentement.

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7, 11.9, 11.10, 11.11
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:**  13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)