---
title: Choisir votre solution de mesure d’audience (provider)
shortTitle: Choisir votre solution
segment: choisir votre solution
description: Le guide pratique de l’API Analytics s’adresse aux chefs de projet, pour comprendre les enjeux, les bonnes pratiques et guider les échanges avec l’équipe technique.
shortDescription: Guide pratique pour les chefs de projet sur l’API Analytics du DSFR.
keywords: mesure d’audience, guide pratique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Ce guide pratique explique comment utiliser l’API Analytics du DSFR pour mesurer l’audience des sites publics.
summary: Ce guide pratique fournit aux chefs de projet les informations nécessaires pour comprendre et utiliser l’API Analytics du DSFR, en abordant les enjeux, les bonnes pratiques et les échanges avec l’équipe technique.
sort: order
order: 2
---

## Choisir votre solution de mesure d’audience (provider)

### Quelles sont les solutions compatibles avec l’API Analytics ?

Depuis l’API Analytics V2 du DSFR (disponible depuis la version 1.16 du DSFR) , il est possible de choisir parmi deux solutions de mesure d’audience : le titulaire du marché interministériel (Eulerian), ou Matomo. Ce choix est structurant : il détermine **quelle solution collecte et traite les données du site.**

Ce choix a des implications contractuelles, budgétaires et techniques. Il doit être pris en concertation avec l’équipe juridique, la DSI/Direction numérique et l’équipe technique et produit.

Pour les sites publics, deux solutions sont recommandées :

- **Eulerian** : solution titulaire du marché interministériel porté par le SIG. Recommandée par défaut : un contrat cadre est déjà en place, avec des engagements en matière de cybersécurité, d’hébergement, de support et de fonctionnalités. Chaque ministère est autonome dans l’ouverture et la gestion de son compte et de ses sites. [En savoir plus sur le marché public](https://app.notion.com/p/8e1a7476646b4e8ebe524a3edbc43078?pvs=21).
- **Matomo** : solution open source hébergeable en propre (”on-premise” ou “auto-hébergé”). Pertinente pour les structures souhaitant maîtriser intégralement l’hébergement de leurs données.

**Si votre administration est bénéficiaire** du marché public interministériel de mesure d’audience, il n’est pas possible d’acheter une autre solution qu’Eulerian, sauf si la solution est gratuite et on-premise comme Matomo.

**Si votre administration n’est pas bénéficiaire** du marché public interministériel de mesure d’audience, vous êtes libres de choisir la solution de mesure d’audience, en respectant les enjeux de souveraineté et de cybersécurité. Cependant, l’API Analytics du DSFR n’est pas compatible avec d’autres solutions qu’Eulerian et Matomo : il conviendra de marquer chaque composant manuellement.

### Nos conseils pour choisir votre solution de mesure d’audience

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

- Vérifier si un contrat ou marché est déjà en cours avant tout choix.
- Associer l’équipe juridique et la DSI à la décision (aspects RGPD et hébergement).
- Prendre la décision au cas par cas : en fonction de vos besoins (campagnes médias sur le site ou actions clés) et de la sensibilité du site.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

- Ne pas choisir une solution sans avoir vérifié si un contrat ou marché est déjà en cours.
- Ne pas déployer les deux solutions simultanément sans coordination technique.

:::

::::

>[!WARNING]
> Ne pas confondre la version du DSFR (exemple : version 1.16) et la version de l’API Analytics (v1 ou v2).
> - L’API Analytics v1 est disponible depuis la version DSFR 1.9
> - L’API Analytics v2 est disponible depuis la version DSFR 1.16
