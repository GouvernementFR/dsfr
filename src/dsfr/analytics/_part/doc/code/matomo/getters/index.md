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

## Matomo

Avant de configurer Matomo, veuillez vous assurer d’avoir correctement configurer l’API Analytics du DSFR en lisant la section [Configuration générale](../../general/index.md).

Cette documentation technique est valable pour les solutions de Matomo auto-hébergé (Matomo On-Premise) ou Cloud. Les snippets de code JS et méthodes étant identiques.

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

`<section>` : `page`, `user`, `site`, `funnel` ou `search`

- `key` | String | Obligatoire : nom de l'attribut
- `value` | String | Obligatoire : valeur

`set` peut fournir, page par page, la valeur d'une clé. Une clé non native n'est envoyée que si elle est déjà mappée dans `dimensions` (`$ref` et `id`) dans la configuration globale. La section correspondante doit également exister dans `context`, même vide.

Pour envoyer les données après `set`, utiliser `collection: 'manual'`.

**Exemple dans la configuration globale :**

```html
<script>
  window.dsfr = {
    analytics: {
      collection: 'manual',
      providers: {
        matomo: {
          // ...
          dimensions: [
            { $ref: '#/context/page/template', id: 1 },
            { $ref: '#/context/site/name', id: 12 },
          ],
        },
      },
      context: {
        page: {},
        site: {
          name: 'nomDeSite',
        }
        // ..
      },
    },
  };
</script>
```

Sur une page de contenu, par exemple :

```js
window.dsfr.analytics.readiness.then(() => {
  window.dsfr.analytics.page.set('template', 'article 2');
  window.dsfr.analytics.site.set('name', 'Gouvernement');
  window.dsfr.analytics.collect();
});
```

À l’appel de `collect()`,  les valeurs finales envoyées pour ces 2 dimensions :

```js
dimension 1 (template) ⇒ "article 2" // Attribut ajouté (n'existait pas)
dimension 12 (name) ⇒ "Gouvernement" // Valeur modifiée (nomDeSite en Gouvernement)
```

---

#### Get

`window.dsfr.analytics.<section>.get(key)` | Méthode<br>
Retourne la valeur courante d'une clé.

Exemple :

```js
window.dsfr.analytics.page.get('template'); // "article 2"
```
