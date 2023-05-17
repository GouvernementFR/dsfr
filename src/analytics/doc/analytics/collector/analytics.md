## class Analytics

L’instance d’Analytics est accessible depuis `window.dsfr.analytics`

### PROPRIÉTÉS

##### page

_Page_

`window.dsfr.analytics.page`

Getter qui retourne l’instance de [Page](page.md)

* * *

##### site

_Site_

`window.dsfr.analytics.site`

Getter qui retourne l’instance de [Site](site.md)

* * *

##### user

_User_

`window.dsfr.analytics.user`

Getter qui retourne l’instance de [User](user.md)

* * *


##### search

_Search_

`window.dsfr.analytics.search`

Getter qui retourne l’instance de [Search](search.md)

* * *

##### funnel :

_Funnel_

`window.dsfr.analytics.funnel`

Getter qui retourne l’instance de [Funnel](funnel.md)

* * *

##### cmp

_ConsentManagerPlatform_

`window.dsfr.analytics.cmp`

Getter qui retourne l’instance de [ConsentManagerPlatform](cmp.md)

* * *

##### opt

_Opt_

`window.dsfr.analytics.opt`

Getter qui retourne l’instance de [Opt](opt.md)

##### isReady

_Boolean_

`window.dsfr.analytics.isReady`

Getter qui retourne l'état du package

* * *

##### readiness

_Promise_

`window.dsfr.analytics.readiness`

Getter qui retourne une Promise permettant de se synchroniser sur le package

    window.dsfr.analytics.readiness.then(() => { // start }, () => { // error } );

* * *

##### isDebugging

_Boolean_

`window.dsfr.analytics.isDebugging`

Permet d’activer / désactiver le debug Eulerian.

⚠️ le debug Eulerian reste persistant sur la page par le biais du LocalStorage jusqu'à désactivation.

* * *

### MÉTHODES

##### push (type, layer)

`window.dsfr.analytics.push(type, layer)`

Alias de la fonction EA\_push d’Eulerian via le package. (voir doc Eulerian [https://eulerian.wiki/doku.php?id=fr:quickonboarding:installation:tag\_installation\_guide#types\_d\_appels](https://eulerian.wiki/doku.php?id=fr:quickonboarding:installation:tag_installation_guide#types_d_appels))

* * *

##### reset (clear = false)

`window.dsfr.analytics.reset(clear)`

Permet de remettre les données dans l'état d’origine de la configuration.

Si le paramètre `clear = true` => toutes les données sont remises en état indéfini.

* * *

###### collect {#collect}

`window.dsfr.analytics.collect()`

Envoie au collector le datalayer constitué par l’ensemble des données consolidées depuis :

* Page

* Site

* User

* Search

* Funnel

* * *

### USAGE

> **Note**
> Le package Analytics repose sur 2 principes de fonctionnement pour traquer les pages :
> * Par le biais de la configuration, il est possible de définir toutes les données qui seront envoyées au chargement de la page (via le mode automatique)
> * Par le biais de l’API, on peut définir toutes les données propriété par propriété pour ensuite envoyer l’ensemble grâce à la méthode **collect**


```javascript
dsfr.analytics.readiness.then(() => { // l'API analytics est prête à l'utilisation
    dsfr.analytics.isDebugging = true; // active le debugging eulerian
    dsfr.analytics.reset(); // remet les données à l'état de configuration
    dsfr.analytics.user.connect('USER\_ID', 'ENCRYPTED\_EMAIL', true);
    dsfr.analytics.page.path = 'my/virtual/page';
    dsfr.analytics.page.isError = true;
    dsfr.analytics.page.template = 'page404';
    dsfr.analytics.collect(); // envoie les données
});
```
