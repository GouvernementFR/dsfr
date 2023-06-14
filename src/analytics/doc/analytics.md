
# Analytics

> **Warnning**
> Ce package est compatible à partir de la version dsfr-1.9.0, pour les versions précédentes l’ajout d'un patch permet un support jusqu’à dsfr-1.3.0. Pour ce faire, importer `dist/patch/patch.module.min.js` et `dist/patch/patch.nomodule.min.js` après l'élément de configuration window.dsfr.analytics et avant le JS du DSFR.


> **Note**
>  * Support du DSFR 1.3.0 et suppérieur
>  * Support des SPA (Angular, React et Vue)
>  * Support de IE11
>  * Tous les composants implémentés
>  * Taux de click désactivé par défaut (économie de donnée) et activable via la configuration
>  * Opt out complet supporté
>  * L'attribut **id** est requis sur les éléments traqués, l’API remonte les id manquants dans la console

Le système de design apporte avec lui un outil de collecte de données analytics basé sur la solution Eulérian. Ce package, bien que fourni par le DSFR, peut être utilisé indépendamment de celui-ci via une version standalone.


- Analytics
  - [Installation](analytics/installation.md)
    - [Configuration](analytics/installation/configuration.md)
    - [class ConsentManagerPlatform](analytics/installation/cmp.md)
    - [class Opt](analytics/installation/opt.md)
  - [Collector](analytics/collector.md)
    - [class Analytics](analytics/collector/analytics.md)
    - [class Page](analytics/collector/page.md)
    - [class User](analytics/collector/user.md)
    - [class Site](analytics/collector/site.md)
    - [class Search](analytics/collector/search.md)
    - [class Funnel](analytics/collector/funnel.md)
  - [Actions](analytics/actions.md)
    - [Actions d’interaction hors composant](analytics/actions/custom-actions.md)
    - [Actions sur les composants DSFR](analytics/actions/component-actions.md)
