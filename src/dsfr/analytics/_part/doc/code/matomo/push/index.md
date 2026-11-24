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

## Matomo

Avant de configurer Matomo, veuillez vous assurer d’avoir correctement configurer l’API Analytics du DSFR en lisant la section [Configuration générale](../../general/index.md).

Cette documentation technique est valable pour les solutions de Matomo auto-hébergé (Matomo On-Premise) ou Cloud. Les snippets de code JS et méthodes étant identiques.

:::dsfr-doc-tab-navigation

- [Paramétrages](../index.md)
- [Sections](../sections/index.md)
- [Collect](../collect/index.md)
- [Set / Get](../getters/index.md)
- Push sur les actions

:::

### Push sur les actions

Les composants DSFR envoient déjà les hits par défaut, à utiliser pour un besoin spécifique.

#### push (type, object)

`window.dsfr.analytics.push('action', {object})` | Méthode

```js
window.dsfr.analytics.push('action', {
  category: 'accordion',
  action: 'disclose',
  name: 'Cliquez ici'
});
```

Les actions correspondent aux interactions utilisateurs.

- `trackEvent` | `natif` | Object<br>
Remontée automatique depuis les composants DSFR
  - `category` | String | Obligatoire<br>
  ex : accordion
  - `action` | String | Obligatoire<br>
  ex : disclose
  - `name` | String | Optionnel<br>
  ex : Cliquez ici
  - `value` | number | Optionnel<br>
  ex : 5 (pour un scroll)

Alias de la fonction `trackEvent` de Matomo via le package.
Pour plus d’information, se référer à la [documentation officielle](https://developer.matomo.org/guides/tracking-javascript-guide).

Davantage de précision sur la [récupération des informations](../../general/actions/index.md#suivi-des-actions-sur-les-composants-dsfr).
