---
title: Consentement
shortTitle: Consentement
description: La documentation technique de l’API Analytics s’adresse aux développeurs qui souhaitent intégrer et configurer le suivi analytique sur les sites publics.
shortDescription: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
keywords: mesure d’audience, documentation technique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
summary: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
sort: order
order: 3
---

## Configuration générale

:::dsfr-doc-tab-navigation

- [Configuration](../index.md)
- [Collector](../collector/index.md)
- Consentement
- [Suivi des actions sur les composants DSFR](../actions/index.md)

:::

### Consentement

#### ConsentManagerPlatform

Permet d’associer une CMP. Seul tarteaucitron est disponible actuellement : https://tarteaucitron.io/

```html
<script>
  window.dsfr = {
    analytics: {
      cmp: {
        id: 'tarteaucitron'
      },
    }
  };
</script>
```

#### Opt

`window.dsfr.analytics.opt`

Elle permet de gérer l’Opt-out lorsque l’utilisateur ne consent pas à la collecte de données.

Le Opt-out complet empêche le chargement de la librairie JS du provider.

##### Propriété :

`isDisabled` | `Boolean`

`window.dsfr.analytics.opt.isDisabled`

Retourne une valeur booléenne “true” pour un Opt-out et “false” pour un Opt-in (par défaut).

##### Méthodes :

- **enable**<br>
`window.dsfr.analytics.opt.enable()`<br>
Opt-in, la collecte de données est activée.

- **disable**<br>
`window.dsfr.analytics.opt.disable()`<br>
Opt-out, la collecte de données est désactivée.

- **toggle**<br>
`window.dsfr.analytics.opt.toggle()`<br>
Inverse le statut Opt-in / Opt-out
