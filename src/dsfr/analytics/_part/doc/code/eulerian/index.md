---
title: Eulerian
shortTitle: Eulerian
description: La documentation technique de l’API Analytics s’adresse aux développeurs qui souhaitent intégrer et configurer le suivi analytique sur les sites publics.
shortDescription: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
keywords: mesure d’audience, documentation technique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
summary: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
sort: order
order: 2
---

## Eulerian

Avant de configurer Eulerian, veuillez vous assurer d’avoir correctement configurer l’API Analytics du DSFR en lisant la section [Configuration générale](../general/index.md).

:::dsfr-doc-tab-navigation

- Paramétrages
- [Sections](./sections/index.md)
- [Collect](./collect/index.md)
- [Set / Get](./getters/index.md)
- [Push sur les actions](./push/index.md)

:::

> **Pour Eulerian, un `id` est obligatoire sur tous les composants traqués.**
>
> Il faut un `id` pour [tous les composants du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants) présents sur votre site, pour que Eulerian les différencie. L’`id` doit être :
>
> - **unique** à l’échelle du site, par exemple :
>   - Deux boutons ne doivent pas avoir le même `id`, même sur des pages différentes.
>   - L’entête de page (`<header>`) peut conserver le même `id` sur toutes les pages s’il est identique.
> - **pérenne**, l’`id` doit rester identique pour tous les utilisateurs et stable dans le temps.

### Paramétrage

`eulerian` | Object

- `domain` | String | Obligatoire<br>
À récupérer auprès d’Eulerian

```html
<script>
  window.dsfr = {
    analytics: {
      providers: {
        eulerian: {
          domain: 'mon.domainedetracking.com',
        }
      },
    }
  };
</script>
```

- `context` | Object | Optionnel<br>
5 sections qui permettent de classer vos envois. Ce découpage est à titre indicatif, seuls les attributs contenus dans les [sections](./sections/index.md) de `context` sont envoyés.

Exemple :

```html
<script>
  window.dsfr = {
    analytics: {
      providers: {
        eulerian: {
          domain: 'mon.domainedetracking.com',
        },
      },
      context: {
        page: {
          template: 'article',
        },
        user: {
          // ...
        },
        site: {
          // ...
        },
        funnel: {
          // ...
        },
        // À renseigner uniquement sur la page de résultats de recherche :
        // search: {
        //   engine: 'moteur_interne',
        //   ...
        // },
      },
    },
  };
</script>
```

> #### Dimensions personnalisées
>
> Pour Eulerian, toute dimension personnalisée dans le script est envoyée à la plateforme, mais n’est pas forcément exploitable dans l’interface de la solution de mesure d’audience.
>
> Pour que les dimensions personnalisées soient utilisables dans la plateforme, **il faut les déclarer préalablement dans Eulerian.**
>
> **Nous vous recommandons de consulter [la section dédiée aux dimensions personnalisées sur le guide pratique,](../../guide/collect/index.md#étape-5---personnaliser-le-suivi-des-pages-vues-avec-les-dimensions-personnalisées) pour savoir comment créer des dimensions personnalisées dans Eulerian.**

Sur l’exemple ci-dessous, les attributs `template`, `type`, `newUser`, `login`, `name`, `ecommerce`, `step`, `paiement` doivent être créés à l’identique dans Eulerian en tant que dimensions personnalisées :

```html
<script>
  window.dsfr = {
    analytics: {
      // ...
      context: {
        page: {
          template: 'article',
          type: 'SPA'
        },
        user: {
          newUser: 'yes',
          login: 'false',
          // ...
        },
        site: {
          name: 'Gouvernement',
          ecommerce: 'no',
          // ...
        },
        funnel: {
          step: 'order',
          paiement: 'false',
          // ...
        },
      },
    },
  };
</script>
```

> [!NOTE]
> Les valeurs (’article’, ‘SPA’, ‘Gouvernement’ etc.) de chaque attribut sont envoyées en minuscules, avec les espaces remplacés par `_` et les caractères spéciaux remplacés par un équivalent typographique.

> #### Dimensions natives
>
> Les dimensions natives, indiquées dans les [sections](./sections/index.md), peuvent être utilisées immédiatement. Elles n’ont pas à être déclarées manuellement dans Eulerian, à part `engine` et `isearchkey` qui doivent être déclarées même s’il s’agit de dimensions natives.
>
>Certaines sections envoient des informations natives à Eulerian, ce qui évite de consommer les dimensions personnalisées.
>
> Les sections utilisent des attributs qui peuvent être surchargés si besoin.
>
> Les attributs natifs sont indiqués par `natif` : ils n'ont donc pas besoin d'être déclarés dans Eulerian.
