---
boost: 0
sitemap:
  noindex: true
title: Démonstration du Gestionnaire de consentement
shortTitle: Démonstration du Gestionnaire de consentement
description: Illustration du fonctionnement à travers différents cas d’usage et exemples interactifs du composant Gestionnaire de consentement.
shortDescription: Gérer le consentement des usagers sur les cookies et données personnelles.
keywords: consentement, cookies, données personnelles, CNIL, confidentialité, bandeau, modale, finalités, RGPD, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le gestionnaire de consentement permet d’informer les usagers et de recueillir leur accord sur l’utilisation de cookies non essentiels via un bandeau et une modale accessible à tout moment.
summary: Ce composant propose une interface conforme aux recommandations de la CNIL pour recueillir le consentement des usagers concernant l’utilisation de cookies non fonctionnels. Il affiche un bandeau au chargement du site, permet une gestion fine des finalités et sous-finalités via une modale dédiée, et garantit l’accessibilité permanente au réglage des préférences depuis le pied de page. Le gestionnaire de consentement n’est pas personnalisable, sauf pour les textes affichés.
mesh:
  - component/modal
  - component/display
  - component/footer
---

## Gestionnaire de consentement

Le gestionnaire de consentement permet à l'usager de définir ses préférences sur l'utilisation de ses données personnelles, notamment le dépôt de cookies non fonctionnels dans son navigateur.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- Démo
- [Design](../design/index.md)
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=consent--docs}

::dsfr-doc-storybook{storyId=consent-modal--docs}

::dsfr-doc-storybook{storyId=placeholder--docs}
