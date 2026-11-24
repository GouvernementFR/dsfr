---
title: Collector
shortTitle: Collector
description: La documentation technique de l’API Analytics s’adresse aux développeurs qui souhaitent intégrer et configurer le suivi analytique sur les sites publics.
shortDescription: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
keywords: mesure d’audience, documentation technique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
summary: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
sort: order
order: 2
---

## Configuration générale

:::dsfr-doc-tab-navigation

- [Configuration](../index.md)
- Collector
- [Consentement](../consent/index.md)
- [Suivi des actions sur les composants DSFR](../actions/index.md)

:::

### Collector

Le collector permet la collecte de données de page du site (généralement au chargement de la page). Chacune de ces données est répartie dans différentes catégories qui sont disponibles dans des objets qui sont concaténés au moment de la collecte.

#### collection

`String`

`window.dsfr.analytics.collection`  | Propriété

Getter qui retourne le mode de récolte des données de la page.

- `manual` : Les données de pages ne sont pas envoyées. Attend l’exécution de la fonction `collect()`
- `load` : Les données de page sont envoyées automatiquement au chargement de la page. (par défaut)
- `full` : Les données sont envoyées à chaque changement de path dans l’URL, permettant le support des “Single-page application” (par défaut si dsfr en mode ‘vue’, ‘react’ ou ‘angular’)
- `hash` : Comme `full`, avec prise en compte des changements du segment hash `#…` dans l’URL

Exemple :

```html
<script>
  window.dsfr = {
    analytics: {
      collection: 'manual',
      // ...
    }
  };
</script>
```

---

#### isActionEnabled

`Boolean` ou `String`

`window.dsfr.analytics.isActionEnabled` | Propriété

Permet d’activer / désactiver la mesure d'audience des actions utilisateur au niveau global (clics sur les boutons, clics sur les liens etc.). Tous les composants possédant une class CSS DSFR (`.fr-btn`, `.fr-link`…) sont susceptibles d’envoyer des hits vers le provider.

- Par défaut, la mesure d'audience des actions est désactivée, car elle peut générer des frais de consommation importants
- Si la valeur est `true` : la mesure d'audience des actions est activée

> Dans le cas spécifique où la présence de nombreux éléments dans le DOM pourrait générer de la latence et qu'une optimisation des instances de tracking est nécessaire, il est possible de passer la valeur `reduce`

- Si la valeur est `false` : la mesure d'audience des actions est désactivée
- Si la valeur est `reduce` : la mesure d'audience des actions est activée uniquement sur les éléments ayant l'attribut `data-fr-analytics-action` (voir ci-dessous)

Exemple :

```html
<script>
  window.dsfr = {
    analytics: {
      isActionEnabled: 'true',
      // ...
    }
  };
</script>
```

**Activation des actions spécifiques sur un composant**

`data-fr-analytics-action` | `String` | attribut HTML

Suivant sa valeur `(true/false/reduce)`, l’ajout de cet attribut permet de surcharger la configuration globale sur des composants prédéfinis.

- `data-fr-analytics-action="false"` permet de désactiver l'envoi d'actions sur l'élément, tout en laissant l'instance de tracking associée à cet élément initialisée. L'élément est traqué, mais aucune action n'est envoyée au provider lors de l'interaction. Ce qui peut permettre de l'activer plus tard, de manière conditionnelle.
- `data-fr-analytics-action="reduce"` permet de désactiver l'envoi d'actions sur un élément particulier, en empêchant l'initialisation de l'instance de tracking associée à cet élément. L'élément n'est pas traqué, et aucune action n'est envoyée au provider lors de l'interaction. Cette option est à privilégier lorsque l'élément n'est pas pertinent à tracker, ou que la présence de nombreux éléments dans le DOM pourrait générer de la latence et qu'une optimisation des instances de tracking est nécessaire.
- `data-fr-analytics-action="text"` permet de surcharger le libellé de l'élément avec lequel l'utilisateur interagit.

Exemple :

```html
<button class="fr-btn" id="demande-envoyer" data-fr-analytics-action="envoyer-demande">Envoyer ma demande</button>
```

---

#### isReady

`Boolean`

`window.dsfr.analytics.isReady`

Getter qui retourne l'état de l'API, à savoir `true` quand elle est prête à être utilisée.

---

#### readiness

`Promise`

`window.dsfr.analytics.readiness`

Getter qui retourne une Promise permettant de se synchroniser sur l'API, lorsque celle-ci est prête à être utilisée.

```html
<script>
  window.dsfr.analytics.readiness.then(() => {
    // start
  }, () => {
    // error
  });
</script>
```

---

#### reset (clear = false)

`window.dsfr.analytics.reset(clear)`  | Méthode

Réinitialise les données des sections `page`, `site`, `user`, `search` et `funnel`.
Voir la configuration dans les providers dédiés : Eulerian ou Matomo

• Sans argument, ou avec `false`, elle restaure les valeurs définies à l'initialisation et supprime les modifications effectuées depuis.

• Avec `true`, elle efface les valeurs configurées. Les propriétés disposant d'une valeur par défaut continuent toutefois à la retourner : notamment le chemin de la page, son titre et son référent. `site.environment` repasse à `development`.

Cette méthode ne déclenche pas de collecte, ne désactive pas le suivi et ne supprime pas les données déjà transmises au fournisseur. Elle permet en revanche de collecter à nouveau la page courante.
