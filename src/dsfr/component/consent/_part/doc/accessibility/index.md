---
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

Le composant **Gestionnaire de consentement** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Gestionnaire de consentement**. Voir les règles d'accessibilité pour les [boutons](../../../../button/_part/doc/accessibility/index.md) et la [modale](../../../../modal/_part/doc/accessibility/index.md).

#### Règles d'accessibilité

- Le bandeau de consentement doit être le premier élément du DOM.
- Les boutons "Tout accepter" et "Tout refuser" doivent exceptionnellement être tous deux des boutons primaires pour ne pas influencer le choix de l'utilisateur.
- La modale de gestion des cookies doit suivre les règles d'accessibilité des [modales](../../../../modal/_part/doc/accessibility/index.md).

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)