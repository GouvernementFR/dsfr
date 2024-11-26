
# Analytics

> **Note**
> Ajout de la propriété `isActionEnabled` dans la configuration et sur l'objet `window.dsfr.analytics` permettant d'activer l'envoi de l'ensemble des données d'actions des composants. Pour activer l'envoi d'action sur des éléments spécifiques au cas par cas, il est possible d'ajouter l'attribut `data-fr-analytics-action` sur l'élément. À l'inverse, lorsque l'envoi d'action est activé au global, l'attribut avec la valeur `data-fr-analytics-action="false"` permet de désaciver l'envoi sur un élément.

> **Important**
> La propriété de configuration `enableRating` a été retirée, celle-ci entraînant des envois de données trop importants. En remplacement, un attribut `data-fr-analytics-rating` peut être ajouté sur un élément dont on veut mesurer spécifiquement le taux de click. 

> **Warning**
> Ce package est prévu pour fonctionner de manière optimale avec la version dsfr-1.9.0 ou suppérieure.
> L'ajout d'un patch, présent dans `dist/patch/`, permet le support des versions précédentes (à partir de la version dsfr-1.3.0).
> Pour ce faire, importer `dist/patch/patch.module.min.js` et `dist/patch/patch.nomodule.min.js` après l'élément de configuration window.dsfr.analytics et avant le JS du DSFR.
> Les différents tests effectués semblent montrer un fonctionnement global sans que nous puissions garantir une compatibilité optimale sur ces versions. N'hésitez pas à nous remonter tous problèmes rencontrés.


Le système de design apporte avec lui un outil de collecte de données analytics basé sur la solution Eulérian. Ce package, bien que fourni par le DSFR, peut être utilisé indépendamment de celui-ci via une [version standalone](analytics/installation.md#Version standalone).



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
