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

## Eulerian

Avant de configurer Eulerian, veuillez vous assurer d’avoir correctement configurer l’API Analytics du DSFR en lisant la section [Configuration générale](../../general/index.md).

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
  - `path` | `natif` | String | Optionnel
  Correspond au nom de la page et au mot-clé natif `path`
  Par défaut c’est l'URL courante (`pathname` + `search`) qui est envoyée.
  - `referrer` | String | Optionnel
  Par défaut page de provenance (`document.referrer`). Envoyé sous la clé `referrer`. La provenance native d'Eulerian ne peut pas être surchargée : à déclarer dans les dimensions personnalisées d'Eulerian pour être exploité.
  - `title` | String | Optionnel
  Par défaut titre de la page (`document.title`). Envoyé si non vide, sous la clé `title`. Non natif : à déclarer dans les dimensions personnalisées d'Eulerian pour être exploité.
  - `*` (toute autre clé) | String | Optionnel
  Envoyée telle quelle, à déclarer dans les dimensions personnalisées d'Eulerian.

  Exemple :

  ```js
  page: {
    path: '/masection/mapage',
    // ...
  },
  ```

---

#### Utilisateur (user)

- `user` | Object | Optionnel
  - `uid` | `natif` | String | Optionnel<br>
  Correspond à l'id unique d'un utilisateur et au mot-clé natif `uid`
  > [!NOTE]
  > Sert de **clé de réconciliation** : consolide l'historique de navigation d'un même utilisateur à travers plusieurs appareils/sessions. Règles strictes :
  > - doit identifier un seul utilisateur, jamais partagé entre plusieurs internautes
  > - doit rester identique pour ce même utilisateur dans le temps
  > - ne doit jamais être un identifiant de session ou une valeur temporaire
  > - transmissible dès l'authentification, pas besoin de le renvoyer à chaque page (mais rien n'empêche de le faire)

  - `email` | `natif` | String | Optionnel<br>
  Correspond à l'email d'un utilisateur et au mot-clé natif `email`
  > [!NOTE]
  > Cet email doit être chiffré pour des raisons de sécurité / RGPD et non envoyé en clair.

  - `*` (toute autre clé) | String | Optionnel<br>
  Envoyée telle quelle, à déclarer dans les dimensions personnalisées d'Eulerian.<br>
  Exemple :

  ```js
  user: {
    uid: 'aaaa-xxxx-yyyy-zzzz',
    email: 'monEmailEncode',
    // ...
  }
  ```

---

#### Recherche (search)

- `search` | Object | Optionnel
  - `engine` | `natif` | String | Obligatoire pour qu'une recherche soit envoyée.<br>
  Correspond au nom du moteur et au mot-clé natif `isearchengine`
  > [!NOTE]
  > Le nom du moteur (`engine`) doit être écrit en minuscules, sans espace, sans accent ni caractère spécial (ex. `moteur_interne`), et correspondre exactement au nom déclaré dans Eulerian (*Analytics > Paramètrage > Moteur de recherche interne*).
  - `results` | `natif` | Number | Optionnel
  Correspond au nombre de résultats affichés et au mot-clé natif `isearchresults`
  - `*` (toute autre clé) | `natif` | String | Optionnel
  Envoyée obligatoirement par `attribut:valeur`
  Correspond aux mots-clés natifs `isearchkey`:`isearchdata`
  > [!NOTE]
  > Chaque `isearchkey` doit être déclarée à l’identique comme paramètre de recherche dans ce moteur (option *Nombre d'entrées fini* : *Non*, recommandé)

Exemple :

```js
search: {
  engine: 'moteur_interne', // "moteur_interne" doit être déclaré dans Eulerian comme moteur de recherche interne (en minuscules, sans espace, sans accent ni caractère spécial)
  results: 486,
  theme: 'monThemeData', // "theme" est une isearchkey à déclarer comme paramètre de recherche, "monThemeData" est l'isearchdata
  category: 'maCategorieData', // "category" est une isearchkey à déclarer comme paramètre de recherche, "maCategorieData" est l'isearchdata
  // ...
}
```

---

#### Site

- `site` | Object | Optionnel
  - `environment` | String | Optionnel
  Environnement du site (`development`, `stage` ou `production`), par défaut `development` 
  Non envoyé à Eulerian, visible uniquement dans le log (`dev`, `stage` ou `prod`). La clé `environment` est réservée : pour faire remonter l'environnement dans Eulerian, utiliser une autre clé (ex. `env`).
  - `api_version` | String | Automatique (version du DSFR), non surchargeable
  Non envoyé à Eulerian, visible uniquement dans le log.
  - `*` (toute autre clé) | String | Optionnel
  Envoyée telle quelle, à déclarer dans les dimensions personnalisées d'Eulerian.

  Exemple :

  ```js
  site: {
    environment: 'development', // Affichera "dev" dans le log
  },
  ```

---

#### Tunnel (funnel)

- `funnel` | Object | Optionnel
  - `*` (toute autre clé) | String | Optionnel<br>
  Envoyée telle quelle, à déclarer dans les dimensions personnalisées d'Eulerian.<br>
  Aucun mot-clé natif pour cette section.

  Exemple :

  ```js
  funnel: {
    id: 'demande-aide',
    step: 'etape-2',
    // ...
  },
  ```
