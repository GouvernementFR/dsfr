---
title: Documentation technique de la mesure d’audience
shortTitle: Documentation technique
description: Intégration et configuration de l’outil de mesure d’audience du DSFR basé sur Eulerian, incluant les options de tracking des actions et compatibilité avec les différentes versions du DSFR.
shortDescription: Guide d’intégration technique de l’outil analytics DSFR.
keywords: analytics, documentation technique, DSFR, Eulerian, configuration, tracking, compatibilité, isActionEnabled, data-fr-analytics, patch, standalone
excerpt: Découvrez comment intégrer et configurer l’outil de mesure d’audience fourni avec le DSFR, incluant les options avancées de tracking et les recommandations de compatibilité.
summary: Cette documentation détaille l’intégration technique de la solution de mesure d’audience embarquée dans le Système de Design de l’État. Basée sur Eulerian, elle permet un suivi des interactions utilisateurs via des attributs `data-fr-analytics`. Elle présente également les évolutions de configuration, comme la dépréciation de `enableRating`, la nouvelle propriété `isActionEnabled`, et les fichiers patch à utiliser pour garantir une compatibilité avec les versions antérieures du DSFR.
order: 2
---

## Documentation technique

> [!NOTE]
> Ajout de la propriété `isActionEnabled` dans la configuration et sur l'objet `window.dsfr.analytics` permettant d'activer l'envoi de l'ensemble des données d'actions des composants. Pour activer l'envoi d'action sur des éléments spécifiques au cas par cas, il est possible d'ajouter l'attribut `data-fr-analytics-action` sur l'élément. À l'inverse, lorsque l'envoi d'action est activé au global, l'attribut avec la valeur `data-fr-analytics-action="false"` permet de désactiver l'envoi sur un élément.

> [!IMPORTANT]
> La propriété de configuration `enableRating` a été retirée, celle-ci entraînant des envois de données trop importants. En remplacement, un attribut `data-fr-analytics-rating` peut être ajouté sur un élément dont on veut mesurer spécifiquement le taux de click.

> [!WARNING]
> Ce package est prévu pour fonctionner de manière optimale avec la version dsfr-1.9.0 ou suppérieure.
> L'ajout d'un patch, présent dans `dist/patch/`, permet le support des versions précédentes (à partir de la version dsfr-1.3.0).
> Pour ce faire, importer `dist/patch/patch.module.min.js` et `dist/patch/patch.nomodule.min.js` après l'élément de configuration window.dsfr.analytics et avant le JS du DSFR.
> Les différents tests effectués semblent montrer un fonctionnement global sans que nous puissions garantir une compatibilité optimale sur ces versions. N'hésitez pas à nous remonter tous problèmes rencontrés.

Le système de design apporte avec lui un outil de collecte de données analytics basé sur la solution Eulérian. Ce package, bien que fourni par le DSFR, peut être utilisé indépendamment de celui-ci via une [version standalone](installation/index.md#Version-standalone).
