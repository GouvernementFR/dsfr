---
title: Sections
shortTitle: Sections
description: La documentation technique de l’API Analytics s’adresse aux développeurs qui souhaitent intégrer et configurer le suivi analytique sur les sites publics.
shortDescription: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
keywords: mesure d’audience, documentation technique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
summary: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
sort: order
order: 2
---

## Matomo

Avant de configurer Matomo, veuillez vous assurer d’avoir correctement configurer l’API Analytics du DSFR en lisant la section [Configuration générale](../../general/index.md).

Cette documentation technique est valable pour les solutions de Matomo auto-hébergé (Matomo On-Premise) ou Cloud. Les snippets de code JS et méthodes étant identiques.

:::dsfr-doc-tab-navigation

- [Paramétrages](../index.md)
- Sections
- [Collect](../collect/index.md)
- [Set / Get](../getters/index.md)
- [Push sur les actions](../push/index.md)

:::

### Sections

Une section est un groupement d’attributs.
Les valeurs peuvent aussi être définies à l'exécution, [voir `set`](../getters/index.md)

#### Page

- `page` | Object | Optionnel
  - `path` | `natif` | String | Optionnel<br>
  Par défaut URL courante (`pathname` + `search`) <br>
  Correspond à l’appel natif Matomo `setCustomUrl`
    - `title` | `natif` | String | Optionnel<br>
    Par défaut titre de la page (`document.title`)<br>
    Correspond à l’appel natif Matomo `setDocumentTitle`. Envoyé si non vide.
    - `referrer` | `natif` | String | Optionnel<br>
    Par défaut page de provenance (`document.referrer`)<br>
    Correspond à l’appel natif Matomo `setReferrerUrl`

  Exemple :

  ```js
  page: {
    path: '/chemin/page',
    referrer: 'https://www.site.fr/page/provenance',
    title: 'Mon titre de page',
    // ...
  },
  ```

---

#### Utilisateur (user)

- `user` | Object | Optionnel
  - `uid` | `natif` | String | Optionnel<br>
    Identifiant unique et stable de l'utilisateur.<br>
    Correspond à l'appel natif Matomo `setUserId`. Envoyé si non vide.
  - `email` | String | Optionnel<br>
    `email` n'a pas d'appel natif : pour l'envoyer, il faut le mapper et le déclarer dans les dimensions personnalisées de Matomo<br>
    > [!WARNING]
    > La valeur de l’email doit être chiffrée pour des raisons de sécurité / RGPD et non envoyée en clair

  Exemple :

  ```jsx
  user: {
    uid: 'a1b2c3d4',
    email: '5f4dcc3b5aa765d61d8327deb882cf99',
    // ...
  },
  ```

---

#### Recherche (search)

- `search` | Object | Optionnel
  - `keyword` | `natif` | String | Obligatoire pour qu'une recherche soit envoyée.<br>
  Terme recherché.<br>
  Correspond à l'appel natif Matomo `trackSiteSearch`<br>
  >[!WARNING]
  > Si `keyword` est renseigné, l'appel `trackSiteSearch` remplace `trackPageView`.
  - `category` | `natif` | String | Optionnel
  Catégorie de la recherche.
  Transmis à `trackSiteSearch`. Envoyé si non vide.
  - `results` | `natif` | Number | Optionnel
  Nombre de résultats.
  Transmis à `trackSiteSearch`. Envoyé si supérieur ou égal à 0.

  Exemple :

  ```js
  search: {
    keyword: 'carte grise',
    category: 'démarches',
    results: 12,
    // ...
  },
  ```

---

#### Site

- `site` | Object | Optionnel
  - `environment` | String | Optionnel<br>
    Environnement du site (`development`, `stage` ou `production`), par défaut `development` <br>
    Non envoyé, visible dans le log (`dev`, `stage` ou `prod`). Pour faire remonter l'environnement, il faut une autre clé (exemple `env`) dans `context.site`, mappée dans `dimensions`.
    - `api_version` | String | Automatique (version du DSFR), non surchargeable<br>
    Non envoyé à Matomo, visible uniquement dans le log.

  Exemple :

  ```js
  site: {
    environment: 'development', // Affichera "dev" dans le log
    // ...
  },
  ```

---

#### Tunnel (funnel)

- `funnel` | Object | Optionnel
  - `*` (toute autre clé) | String | Optionnel<br>
  Aucun appel natif Matomo : pour l'envoyer, il faut le mapper et le déclarer dans les dimensions personnalisées de Matomo.

  Exemple :

  ```js
  funnel: {
    id: 'demande-aide', // mappé via { $ref: '#/context/funnel/id', id: 5 }
    step: 'etape-2',
    // ...
  },
  ```
