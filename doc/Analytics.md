
# Analytics

:::note Version Beta

* Les tests sur les données remontées sont toujours en cours.
Merci de nous informer des problématiques que vous pourriez rencontrer.
* Les versions précédentes du DSFR sont en partie supportées.
Le périmètre de ce support sera détaillé dans de prochaines versions.
L’usage avec d’anciennes versions est livré “AS IS”.

:::

:::tip Nouveautés

* Support de IE11
* Support des SPA (Angular, React et Vue)
* Tous les composants implémentés
* Taux de click désactivé par défaut (économie de donnée) et activable via la configuration
* Opt out complet supporté
* id requis sur les éléments tracés, l’API remonte les id manquants dans la console

:::

Le système de design apporte avec lui un outil de collecte de données analytics basé sur la solution Eulérian. Ce package, bien que fourni par le DSFR, peut être utilisé indépendamment de celui-ci via une version standalone.

Ce package est compatible à partir de la version dsfr-1.9.0, pour les versions précédentes l’ajout d'un patch permet unsupport jusqu’à dsfr-1.3.0.


- Analytics
  - [Installation](analytics/installation.md)
  - [Configuration](analytics/configuration.md)
  - [class Analytics](analytics/analytics.md)
  - [class Page](analytics/page.md)
  - [class User](analytics/user.md)
  - [class Site](analytics/site.md)
  - [class Search](analytics/search.md)
  - [class Funnel](analytics/funnel.md)
  - [class ConsentManagerPlatform](analytics/cmp.md)
  - [Actions](analytics/actions.md)
  - [Actions sur les composants DSFR](component-actions.md)
