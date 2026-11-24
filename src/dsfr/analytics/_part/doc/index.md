---
title: Mesure d’audience
shortTitle: Mesure d’audience
description: Comprendre les usages des usagers grâce à la mesure d’audience intégrée au Système de Design de l’État et déployée à l’échelle interministérielle.
shortDescription: Mesure d’audience via Eulerian ou Matomo, API intégrée au DSFR.
keywords: mesure d’audience, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Le DSFR propose un système de mesure d’audience pour comprendre et améliorer l’expérience usager sur les sites publics.
summary: La mesure d’audience permet d’analyser le comportement des usagers sur les sites publics, pour orienter les décisions de design et de contenu. Le DSFR intègre une API de collecte basée sur Eulerian, ou Matomo, facilitant le suivi des performances sans plan de marquage complexe. Ce dispositif, issu du marché interministériel porté par le SIG, vise à standardiser les pratiques, renforcer l’efficacité des services publics et améliorer la lisibilité des données sur l’usage du design de l’État.
sort: order
order: 5
list:
  noCover: true
  horizontal: true
---

## Mesure d’audience

L’API Analytics du DSFR permet aux équipes en charge des sites publics de mesurer l’audience de manière standardisée.

**Il existe deux versions de l’API Analytics :**

- **API Analytics V1** : disponible depuis la version 1.9 du DSFR. Elle simplifie le marquage des sites en .gouv.fr avec la solution Eulerian, titulaire du [marché interministériel de mesure d’audience](https://app.notion.com/p/8e1a7476646b4e8ebe524a3edbc43078?pvs=25).
- **API Analytics V2** : disponible depuis la version 1.16 du DSFR. Elle permet d’ajouter le support Matomo, utilisé par de nombreuses administrations en version on-premise.

La mise à jour du DSFR vers une version 1.16 ou ultérieure n’implique pas la migration obligatoire de l’API Analytics V1 vers la V2. L’API Analytics V1 reste compatible avec les versions DSFR 1.16 et ultérieures, l’API Analytics V2 est facultative pour les sites utilisant Eulerian et indispensable pour les sites utilisant Matomo.

**Le guide s’adresse aux chefs de projet**, pour comprendre les enjeux, les bonnes pratiques et guider les échanges avec l’équipe technique.

**Pour les développeurs**, il existe une documentation technique spécifique, qui détaille l’ensemble des propriétés de l’API Analytics et leur configuration. Le [guide pratique](./guide/index.md) et la [documentation technique](./code/index.md) sont complémentaires.
