---
title: Suivi des actions sur les composants DSFR
shortTitle: Actions
segment: actions
description: La documentation technique de l’API Analytics s’adresse aux développeurs qui souhaitent intégrer et configurer le suivi analytique sur les sites publics.
shortDescription: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
keywords: mesure d’audience, documentation technique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
summary: Documentation technique pour l’intégration et la configuration du suivi analytique sur les sites publics.
sort: order
order: 4
---

## Configuration générale

:::dsfr-doc-tab-navigation

- [Configuration](../index.md)
- [Collector](../collector/index.md)
- [Consentement](../consent/index.md)
- Suivi des actions sur les composants DSFR

:::

### Suivi des actions sur les composants DSFR

Les composants du DSFR envoient automatiquement des actions prédéfinies.

Pour activer/désactiver totalement ou partiellement les actions : se reporter à la section : [isActionEnabled](../collector/index.md#isActionEnabled)

La liste ci-dessous regroupe les différentes actions remontées à la solution de mesure d’audience pour chaque composant du DSFR.

- Le composant/la catégorie : nom du composant (`button`, `link`, `accordion`, `card`…)
- L’élément : sélecteur CSS de l'élément HTML traqué (`fr-btn`, `fr-link`, `fr-card`…)
- Le type/l’action : type d'action envoyé (`disclose`, `check`, `click`, `external/internal`…)
- Valeur : Valeur de l'action envoyée dans les attributs. Exemples :
  - Le contenu du `href` d’un lien avec la class `fr-link`
  - Le texte de l'option sélectionnée d'une liste déroulante `fr-select`
  - L’extension des fichiers téléversés d’un bloc `fr-upload`
  - …
- Label : Valeurs possibles du label (titre de l’accordéon, libellé bouton, libellé du lien…)

Les solutions de mesure d’audience ont leur propre système de push sur les composants, si il y a besoin d’envoyer des actions pour un besoin spécifique :

- [Eulerian](../../eulerian/push/index.md)
- [Matomo](../../matomo/push/index.md)