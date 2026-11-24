---
title: Présentation générale de la mesure d’audience et de l’API Analytics
shortTitle: Présentation générale
segment: presentation générale
description: Le guide pratique de l’API Analytics s’adresse aux chefs de projet, pour comprendre les enjeux, les bonnes pratiques et guider les échanges avec l’équipe technique.
shortDescription: Guide pratique pour les chefs de projet sur l’API Analytics du DSFR.
keywords: mesure d’audience, guide pratique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Ce guide pratique explique comment utiliser l’API Analytics du DSFR pour mesurer l’audience des sites publics.
summary: Ce guide pratique fournit aux chefs de projet les informations nécessaires pour comprendre et utiliser l’API Analytics du DSFR, en abordant les enjeux, les bonnes pratiques et les échanges avec l’équipe technique.
sort: order
order: 1
---

## Présentation générale de la mesure d’audience et de l’API Analytics

### Qu’est-ce que la mesure d’audience ?

La mesure d’audience consiste à collecter et analyser les données de fréquentation d’un site internet ou d’une application. Elle permet de comprendre, sur la base de données concrètes, comment les usagers naviguent, ce qu’ils viennent chercher et où ils rencontrent des difficultés dans leur parcours.

Les indicateurs fondamentaux suivis sont :

- le nombre de visites et de visiteurs uniques ;
- les pages les plus consultées ;
- le temps passé sur le site ;
- la provenance des visites (moteurs de recherche, réseaux sociaux, accès direct, etc.) ;
- le taux de rebond, c’est-à-dire la part des utilisateurs quittant le site après une seule page.

### Pourquoi y faire attention ?

Ces données permettent d’optimiser le contenu et l’expérience utilisateur : améliorer les pages peu performantes, simplifier la navigation, ajuster la stratégie de communication en ciblant les canaux les plus efficaces.

La mesure d’audience est le premier pas vers une culture de la décision fondée sur la donnée et non sur des suppositions.

### L’API Analytics du DSFR

Le Système de Design de l’État a été enrichi en 2022 de l’API Analytics, pour simplifier la connexion des sites Internet avec la solution de mesure d’audience “Eulerian Technologies”. Cette solution est titulaire du marché interministériel de mesure d’audience, porté par le Service d’information du Gouvernement (SIG), et permet à toutes les administrations de travailler avec une solution de mesure d’audience souveraine.

L’API Analytics du DSFR embarque nativement les marqueurs de suivi de performance, ce qui permet d’éviter la création manuelle d’un plan de marquage sur chaque projet. L’API Analytics est un package à charger séparément, sa présence dans la distribution DSFR ne signifie pas que la collecte est activée par défaut.

>[!WARNING]
> L’API Analytics du DSFR facilite l’implémentation générique de la solution de mesure d’audience sur le site. Cependant, pour répondre à des besoins d’analyse spécifiques, **il reste nécessaire de créer un plan de marquage personnalisé**.

Les objectifs de cette standardisation interministérielle sont multiples :

- développer une culture de la performance de la communication publique ;
- proposer un socle de mesure harmonisée pour toutes les interactions des citoyens avec les composants DSFR, quel que soit le site ;
- faciliter le déploiement et le maintien dans le temps de la mesure d’audience.