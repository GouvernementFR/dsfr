---
title: Configuration générale
shortTitle: Configuration générale
description: La documentation technique de l’API Analytics s’adresse aux développeurs qui souhaitent intégrer et configurer le suivi analytique sur les sites publics.
shortDescription: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
keywords: mesure d’audience, documentation technique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
summary: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
sort: order
order: 1
---

## Configuration générale

:::dsfr-doc-tab-navigation

- Configuration
- [Collector](./collector/index.md)
- [Consentement](./consent/index.md)
- [Suivi des actions sur les composants DSFR](./actions/index.md)

:::

Cette documentation décrit la configuration de l’API Analytics v2, disponible depuis la version [1.16.0] du DSFR. Les intégrations Eulérian v1 utilisant analytics.domain restent prises en charge.

Cette configuration doit se placer avant les fichiers :
- `dsfr.module.js`
- `analytics.module.js`

Cette intégration se découpe de la manière suivante :

### analytics | Object (obligatoire)

Permet d’activer la mesure d’audience embarquée dans le DSFR.

```html
<script>
  window.dsfr = {
    analytics: {
    // ...
    }
  };
</script>
```

---

### providers | Object (obligatoire)

Définit la solution de tracking active. Il n’est possible d’avoir qu’un seul provider à la fois.
Il existe deux <span lang="en">providers</span> (solution de mesure d’audience) disponibles. Vous pouvez retrouver la documentation spécifique sur la section [Eulerian](../eulerian/index.md) & [Matomo](../matomo/index.md).

`Providers` est obligatoire pour la configuration analytics v2 et doit contenir exactement une entrée : eulerian ou matomo. Ne pas combiner cette configuration avec le champ historique analytics.domain.

---

### Exemple d’intégration

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Titre de la page</title>
    <link rel="stylesheet" href="/dsfr/dsfr.min.css">

    <!--
      Définir la configuration AVANT de charger les scripts du DSFR.
    -->
    <script>
      window.dsfr = {
        analytics: {
          // Collecter la page lors de son chargement.
          collection: 'load',

          // Désactiver la mesure automatique des interactions.
          // Utiliser true ou reduce pour l'activer.
          isActionEnabled: false,

          // Configurer une seule solution de mesure.
          providers: {
            eulerian: {
              // Remplacer par le domaine de collecte fourni pour votre site.
              // Ne pas ajouter de protocole https:// ni de chemin.
              domain: 'collecte.mon-service.example'
            }
          },

          context: {
            page: {
              title: 'Titre du site'
            }
          }

          // Ajouter ici les réglages CMP adaptés à votre intégration,
          // selon la section consacrée au consentement.
        }
      };
    </script>
  </head>

  <body>
    <main>
      <!-- contenu de la page -->
    </main>

    <!-- Charger le DSFR avant son extension Analytics. -->
    <script type="module" src="/dsfr/dsfr.module.min.js"></script>
    <script type="module" src="/dsfr/analytics/analytics.module.min.js"></script>

    <!-- Navigateurs ne prenant pas en charge les modules JavaScript. -->
    <!-- defer conserve l'ordre d'exécution : DSFR, puis Analytics. -->
    <script nomodule defer src="/dsfr/dsfr.nomodule.min.js"></script>
    <script nomodule defer src="/dsfr/analytics/analytics.nomodule.min.js"></script>
  </body>
</html>
```

Pour **utiliser Matomo**, les imports restent identiques. Remplacer uniquement le bloc `providers` de cet exemple minimal par :

```jsx
providers: {
  matomo: {
    // URL du répertoire contenant matomo.js et matomo.php.
    // Le slash final est nécessaire avec l'implémentation actuelle.
    setTrackerUrl: 'https://statistiques.mon-service.example/',
    setSiteId: '1'
  }
},
```

- **Conserver l’ordre configuration → DSFR → Analytics**, et ne pas ajouter `async` sur ces scripts.
- **Utiliser les fichiers DSFR et Analytics issus de la même version.** Les variantes non minifiées portent les mêmes noms sans `.min`.
- **Le fournisseur est chargé par Analytics** : ne pas ajouter un second chargement du traceur Eulerian ou de `matomo.js`.
- **Sur les versions antérieures à DSFR v1.9.0, ajouter le fichier `patch.module.js` avant les autres fichiers.**
- Cet exemple présente la **configuration Analytics v2** ; un site conservant Eulerian avec sa configuration v1 (antérieur à DSFR v1.16.0) ne doit pas nécessairement migrer vers `providers` et `context`.
