---
title: Migrer de l’API Analytics v1 vers l’API Analytics v2
shortTitle: Migration vers l’API v2
segment: migration vers l’API v2
description: Le guide pratique de l’API Analytics s’adresse aux chefs de projet, pour comprendre les enjeux, les bonnes pratiques et guider les échanges avec l’équipe technique.
shortDescription: Guide pratique pour les chefs de projet sur l’API Analytics du DSFR.
keywords: mesure d’audience, guide pratique, analytics, Eulerian, Matomo, statistiques, API DSFR, trafic, navigation, performance, usagers, SIG
excerpt: Ce guide pratique explique comment utiliser l’API Analytics du DSFR pour mesurer l’audience des sites publics.
summary: Ce guide pratique fournit aux chefs de projet les informations nécessaires pour comprendre et utiliser l’API Analytics du DSFR, en abordant les enjeux, les bonnes pratiques et les échanges avec l’équipe technique.
sort: order
order: 5
---

## Migrer de l’API Analytics v1 vers l’API Analytics v2

**Si vous migrez d’Eulerian vers Matomo :**

- Il s’agit de deux configurations distinctes.
- Veuillez vous d’assurer d’avoir bien lu toute la documentation technique et le guide pratique.
- Pour gagner du temps, vous pouvez récupérer l’exemple de la configuration sur l’onglet “Matomo” de la documentation technique, et configurer vos dimensions personnalisées

**Si vous migrez d’Eulerian vers Eulerian :**

- La migration de l’API Analytics v1 vers l’API Analytics v2 n’est pas obligatoire.
- La configuration actuelle en API Analytics v1 continuera de fonctionner.
- Si vous décidez de migrer vers l’API Analytics v2 en écrasant votre configuration actuelle dans le ficher “config_analytics”, il conviendra de vous assurer de continuer d’utiliser [la liste des dimensions utilisées par l’API Analytics v1](./index.md#liste-des-dimensions-disponibles-dans-lapi-analytics-v1-a-utiliser-en-cas-de-migration-vers-lapi-analytics-v2) pour conserver l’historique de vos statistiques dans la durée.
- Si vous ne souhaitez pas conserver l’historique, vous pouvez configurer vos propres dimensions personnalisées.

Exemple de config analytics, si vous souhaitez conserver l’historique :

```js
<script>
  window.dsfr = {
    analytics: {
      providers: {
        eulerian: {
          domain: 'mon.domainedetracking.com',
        },
      },
      context: {
        page: {
          template: 'article',
          page_template: 'home'
        },
        funnel: {
          amount: '[montant]'
        }
      },
    },
  };
</script>
```

### Liste des dimensions disponibles dans l’API Analytics v1 à utiliser en cas de migration vers l’API Analytics v2

| Information | Description | Collecte | Portée | Rapport Eulerian spécifique disponible | Disponible pour la création de tableaux de bord |
| --- | --- | --- | --- | --- | --- |
| **page** | Nom de la page | Capture native, surcharge possible | Action | Oui | Oui si déclaré dans la plateforme |
| **title** | Titre de la page | Capture native, surcharge possible | Action | Oui | Oui si déclaré dans la plateforme |
| **error** | Page d’erreur | Manuellement | Action | Oui | Oui si déclaré dans la plateforme |
| **pagelabel** | Intègre 5 niveaux de qualification de la page | Manuellement | Action | Oui | Oui si déclaré dans la plateforme |
| **pagegroup** | groupe de page | Manuellement | Action | Oui | Oui si déclaré dans la plateforme |
| **profile** | profil utilisateur | Manuellement | Visite | Oui | Oui si déclaré dans la plateforme |
| **uid** | Identifiant de connexion du compte | Manuellement | Visite | Oui | Oui si déclaré dans la plateforme |
| **email** | email de connexion du compte | Manuellement | Visite | Oui | Oui si déclaré dans la plateforme |
| **page_author** | auteur du contenu | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_category1** | catégorie de page niveau 1 | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_category2** | catégorie de page niveau 2 | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_category3** | catégorie de page niveau 3 | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_date** | date de publication de la page | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_depth** | Profondeur de la page | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_filters** | Filtres appliqués sur la page | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_id** | identifiant de la page | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_related** | Page liées par un élément commun | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **pagetag** | Tags de la page | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_theme** | thème de la page | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_subtheme** | sous-thème de la page | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_template** | gabarit de la page | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **page_subtemplate** | sous-gabarit de la page | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **site_type** | type de site | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **site_environment** | environnement du site (production, préproduction, qualification) | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **site_entity** | entité responsable du site | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **site_language** | langue du site | Manuellement | Visite | Non | Oui si déclaré dans la plateforme |
| **site_department** | Pour les sites départementaux, définit le département du site | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **site_region** | Pour les sites régionaux, définit la région du site | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **site-segment** | sous-gabarit de la page | Manuellement | Action | Non | Oui si déclaré dans la plateforme |
| **site_version** | Définit la version du site | Manuellement | Action | Non | Oui si déclaré dans la plateforme |