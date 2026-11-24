---
title: Push sur les actions
shortTitle: Push sur les actions
description: La documentation technique de l’API Analytics s’adresse aux développeurs qui souhaitent intégrer et configurer le suivi analytique sur les sites publics.
shortDescription: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
keywords: mesure d’audience, documentation technique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
summary: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
sort: order
order: 5
---

## Eulerian

Avant de configurer Eulerian, veuillez vous assurer d’avoir correctement configurer l’API Analytics du DSFR en lisant la section [Configuration générale](../../general/index.md).

:::dsfr-doc-tab-navigation

- [Paramétrages](../index.md)
- [Sections](../sections/index.md)
- [Collect](../collect/index.md)
- [Set / Get](../getters/index.md)
- Push sur les actions

:::

### Push sur les actions

Les composants DSFR envoient déjà les hits par défaut, à utiliser pour un besoin spécifique.

#### push (type, layer)

`window.dsfr.analytics.push("action", [array])` | Méthode

Alias de la fonction `EA_push` d’Eulerian via le package.
Pour plus de précision, consulter la [documentation officielle](https://eulerian.wiki/doku.php?id=fr:quickonboarding:installation_installation_guide#types_d_appels).

Davantage de précision sur la [récupération des informations](../../general/actions/index.md#suivi-des-actions-sur-les-composants-dsfr).
