---
title: Set / Get
shortTitle: Set / Get
description: La documentation technique de l’API Analytics s’adresse aux développeurs qui souhaitent intégrer et configurer le suivi analytique sur les sites publics.
shortDescription: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
keywords: mesure d’audience, documentation technique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
summary: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
sort: order
order: 4
---

## Eulerian

Avant de configurer Eulerian, veuillez vous assurer d’avoir correctement configurer l’API Analytics du DSFR en lisant la section [Configuration générale](../../general/index.md).

:::dsfr-doc-tab-navigation

- [Paramétrages](../index.md)
- [Sections](../sections/index.md)
- [Collect](../collect/index.md)
- Set / Get
- [Push sur les actions](../push/index.md)

:::

### Setter & Getter

#### Set

`window.dsfr.analytics.<section>.set(key, value)` | Méthode<br>
Définit ou modifie la valeur d'une clé.

- `<section>` : `page`, `user`, `site`, `funnel` ou `search`
- `key` | String | Obligatoire : nom de l'attribut
- `value` | String | Obligatoire : valeur

`set` peut fournir, page par page, la valeur d'une clé. Toute clé ajoutée est envoyée telle quelle.

> Rappel : Pour être exploitable dans Eulerian, une clé non native doit être déclarée dans les dimensions personnalisées d'Eulerian.

Pour envoyer les données après `set`, utiliser `collection: 'manual'`.

Exemple dans la configuration globale :

```html
<script>
  window.dsfr = {
    analytics: {
      collection: 'manual',
      providers: {
        eulerian: {
          domain: 'mon.domainedetracking.com',
        },
      },
      context: {
        page: {
          template: 'article',
        },
        site: {
          name: 'nomDeSite',
        },
      },
    },
  };
</script>
```

Sur une page de contenu, par exemple :

```js
window.dsfr.analytics.readiness.then(() => {
  window.dsfr.analytics.page.set('template', 'article2');
  window.dsfr.analytics.page.set('type', 'spa');
  window.dsfr.analytics.site.set('name', 'gouvernement');
  window.dsfr.analytics.collect();
});
```

À l'appel de `collect()`, les valeurs finales envoyées :

```js
template ⇒ "article2"   // valeur modifiée (article en article2)
type ⇒ "spa"             // clé ajoutée (n'existait pas)
name ⇒ "gouvernement"    // valeur modifiée (nomDeSite en gouvernement)
```

---

#### Get

`window.dsfr.analytics.<section>.get(key)` | Méthode<br>
Retourne la valeur courante d'une clé.

Exemple :

```js
window.dsfr.analytics.page.get('template') // article2
```
