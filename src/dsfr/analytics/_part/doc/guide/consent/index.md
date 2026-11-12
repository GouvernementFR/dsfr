---
title: Gérer le consentement sur votre site
shortTitle: Gérer le consentement
segment: gérer le consentement
description: Le guide pratique de l’API Analytics s’adresse aux chefs de projet, pour comprendre les enjeux, les bonnes pratiques et guider les échanges avec l’équipe technique.
shortDescription: Guide pratique pour les chefs de projet sur l’API Analytics du DSFR.
keywords: mesure d’audience, guide pratique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Ce guide pratique explique comment utiliser l’API Analytics du DSFR pour mesurer l’audience des sites publics.
summary: Ce guide pratique fournit aux chefs de projet les informations nécessaires pour comprendre et utiliser l’API Analytics du DSFR, en abordant les enjeux, les bonnes pratiques et les échanges avec l’équipe technique.
sort: order
order: 3
---

## Gérer le consentement sur votre site

La gestion du consentement désigne l’ensemble des mécanismes qui permettent à l’utilisateur d’accepter ou de refuser la collecte de ses données de navigation. Elle conditionne le mode d’activation (avec ou sans consentement) de la mesure d’audience et doit être mise en place avant tout déploiement.

### Comment le consentement fonctionne dans le DSFR ?

L’API Analytics s’intègre avec une Consent Manager Platform “CMP”. C’est l’interface qui présente à l’utilisateur ses choix de consentement (la « bannière cookies »). La CMP pilote en conséquence le démarrage ou l’arrêt de la collecte. La CMP recommandée dans l’écosystème des sites publics est TarteAuCitron, mais il est tout à fait possible d’en choisir une autre.

Voir le composant [Gestionnaire de consentement](../../../../../component/consent/_part/doc/index.md)

Lorsqu’un utilisateur refuse la collecte (opt-out), la solution de mesure est appelée en version dégradée afin de ne collecter que les données statistiques strictement nécessaires à la fourniture du service, conformément [aux exigences de la CNIL](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience). L’utilisateur a également la possibilité de s’opposer au déclenchement de la solution même en mode exempté de consentement, à travers un opt-out complet qui bloque le chargement de la solution de mesure d’audience, comme sur [la page “données personnelles” du site info.gouv.fr](https://www.info.gouv.fr/mentions-legales/donnees-personnelles-et-cookies#-cookies-de-mesure-daudience).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

- Configurer la CMP avant le déploiement de la mesure d’audience.
- Tester le comportement de la collecte en opt-in et en opt-out avant la mise en production.
- Vérifier avec l’équipe juridique si la solution retenue est soumise au consentement ou exempté.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

- Ne pas contourner la CMP pour forcer le chargement de la librairie de mesure sans consentement.
- Ne pas confondre le composant DSFR “[Gestionnaire de consentement](../../../../../component/consent/_part/doc/index.md)” (interface graphique) avec la [classe CMP de l’API Analytics](../../code/general/consent/index.md) (intégration technique côté développeur).

:::

::::
