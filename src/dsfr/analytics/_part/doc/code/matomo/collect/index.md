---
title: Collect
shortTitle: Collect
description: La documentation technique de l’API Analytics s’adresse aux développeurs qui souhaitent intégrer et configurer le suivi analytique sur les sites publics.
shortDescription: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
keywords: mesure d’audience, documentation technique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
summary: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
sort: order
order: 3
---

## Matomo

Avant de configurer Matomo, veuillez vous assurer d’avoir correctement configurer l’API Analytics du DSFR en lisant la section [Configuration générale](../../general/index.md).

Cette documentation technique est valable pour les solutions de Matomo auto-hébergé (Matomo On-Premise) ou Cloud. Les snippets de code JS et méthodes étant identiques.

:::dsfr-doc-tab-navigation

- [Paramétrages](../index.md)
- [Sections](../sections/index.md)
- Collect
- [Set / Get](../getters/index.md)
- [Push sur les actions](../push/index.md)

:::

### Collect

`window.dsfr.analytics.collect()` | Méthode

Envoi de l'objet constitué par les attributs natifs et par les dimensions personnalisées mappées dans la configuration.

En mode `manual`, les données ne partent qu'après l'appel de `collect()`.

> [!TIP]
> Avant d'appeler `collect()`, il est possible de définir ou modifier les valeurs des sections à l'[exécution avec `set`](../getters/index.md).
