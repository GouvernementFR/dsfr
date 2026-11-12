---
title: Matomo
shortTitle: Matomo
description: La documentation technique de l’API Analytics s’adresse aux développeurs qui souhaitent intégrer et configurer le suivi analytique sur les sites publics.
shortDescription: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
keywords: mesure d’audience, documentation technique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
summary: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
sort: order
order: 2
---

## Matomo

Avant de configurer Matomo, veuillez vous assurer d’avoir correctement configurer l’API Analytics du DSFR en lisant la section [Configuration générale](../general/index.md).

Cette documentation technique est valable pour les solutions de Matomo auto-hébergé (Matomo On-Premise) ou Cloud. Les snippets de code JS et méthodes étant identiques.

:::dsfr-doc-tab-navigation

- Paramétrages
- [Sections](./sections/index.md)
- [Collect](./collect/index.md)
- [Set / Get](./getters/index.md)
- [Push sur les actions](./push/index.md)

:::

La solution de mesure d’audience Matomo comporte également un volet [exemption CNIL](https://fr.matomo.org/faq/how-do-i-configure-matomo-without-tracking-consent-for-french-visitors-cnil-exemption/) dont le paramétrage se fait directement dans la plateforme.<br>
A noter que `uid` et `email` ne seront envoyés qu’à l’acceptation du consentement dans Tarte au Citron.
Si une autre solution est utilisée, il faut veiller à envoyer ces 2 informations qu’au consentement de l’utilisateur.<br>
D’ordre général, ne jamais envoyer d’informations personnelles liées à l’internaute sans son accord.

### Paramétrage

`matomo` | Object

- `setTrackerUrl` | String | Obligatoire<br>
Instance (URL de base de l'instance, sans `matomo.php`) - À récupérer auprès de Matomo
- `setSiteId` | String | Obligatoire<br>
Identifiant du site Matomo - À récupérer auprès de Matomo
- `dimensions` | Array | Optionnel<br>
Tableau de mapping vers les [dimensions personnalisées Matomo](https://matomo.org/guide/reporting-tools/custom-dimensions/)<br>
Seul canal pour faire remonter un champ de `context` qui n'a pas d'équivalent natif Matomo (voir plus bas). Un `$ref` vers un attribut `natif` est ignoré.
  - `$ref` | String<br>
Valeur résolue depuis `context`
  - `value` | String<br>
Valeur fixe
  - `id` | Number | Obligatoire<br>
Identifiant unique attribué par Matomo lors de la création des dimensions personnalisées. Entier positif.

**Exemple de configuration :**

```html
<script>
  window.dsfr = {
    analytics: {
      providers: {
        matomo: {
          setTrackerUrl: 'https://mon-instance.matomo.ministere.gouv.fr/',
          setSiteId: 'monIdSiteMatomo',
          dimensions: [
            { $ref: '#/context/page/template', id: 1 },
            { $ref: '#/context/page/thematic', id: 2 },
            { value: 'valeur fixe', id: 8 },
            { $ref: '#/context/site/name', id: 14 },
            { $ref: '#/context/search/scroll', id: 16 },
            // ...
          ],
        },
      },
      context: {
        page: {
          template: 'article',
          thematic: 'economy',
          // ...
        },
        user: {
          // ...
        },
        site: {
          name: 'nomDeSite',
          // ...
        },
        funnel: {
          // ...
        },
        // À renseigner uniquement sur la page de résultats de recherche :
        // search: {
        //   keyword: 'carte grise',
        //   category: 'démarches',
        //   results: 12,
        //   scroll: '5',
        // },
      },
    },
  };
</script>
```

> #### Dimensions personnalisées
>
> Pour Matomo, les dimensions personnalisées doivent être d’abord déclarées sur l’interface de Matomo. Vous devez déclarer l’attribut de la dimension (ex : `template`) et récupérer son `id` (ex : 1) afin de les associer ensemble dans le script, en respectant la casse et le nom de l’attribut.
>
> Il faut ensuite mapper cette dimension personnalisée, sans cela la donnée ne se pas envoyée à Matomo
>
> Exemple :
>
> ```js
> dimensions: [
>   // ici, $ref correspond à la valeur résolue dans context > page (donc template)
>   { $ref: '#/context/page/template', id: 1 }
>   // ...
> ]
> //...
> context: {
>   page: {
>     template: 'article',
>   }
> }
> ```
>
> **Nous vous recommandons de consulter [la section dédiée aux dimensions personnalisées sur le guide pratique](../../guide/collect/index.md#étape-5---personnaliser-le-suivi-des-pages-vues-avec-les-dimensions-personnalisées).**

Dans l’exemple complet ci-dessous, ces attributs `template`, `type`, `newUser`, `login`, `name`, `ecommerce`, `step`, `paiement` doivent être créés dans les dimensions personnalisées de Matomo, il faut ensuite les mapper via `$ref` :

```html
<script>
  window.dsfr = {
    analytics: {
      providers: {
        matomo: {
          // ...
          dimensions: [
            { $ref: '#/context/page/template', id: 1 },
            { $ref: '#/context/page/type', id: 2 },
            { value: 'valeur fixe', id: 8 },
            { $ref: '#/context/user/newUser', id: 14 },
            { $ref: '#/context/user/login', id: 15 },
            { $ref: '#/context/site/name', id: 12 },
            { $ref: '#/context/site/ecommerce', id: 13 },
            { $ref: '#/context/funnel/step', id: 16 },
            { $ref: '#/context/funnel/paiement', id: 17 },
            // ...
          ],
        },
      },
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

> #### Dimensions natives
>
> Les dimensions natives, indiquées dans les [sections](./sections/index.md), peuvent être utilisées immédiatement. Elles n’ont pas à être déclarées manuellement dans Matomo.
>
> Certaines sections envoient des informations natives à Matomo, ce qui évite de consommer les dimensions personnalisées de Matomo.
>
> Les sections utilisent des attributs qui peuvent être surchargés si besoin.
>
> Les attributs natifs sont indiqués par `natif` : ils ne doivent pas être mappés, ni déclarés dans Matomo. Un `$ref` vers un attribut natif dans `dimensions` est ignoré (avertissement en console). Pour modifier leur valeur, renseigner directement l'attribut (configuration ou `set`).
