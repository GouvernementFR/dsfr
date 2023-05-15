## class Site

L’instance de Site est accessible depuis

window.dsfr.analytics.site

### CONFIGURATION

```javascript
<script>
    window.dsfr = {
        analytics: {
            site: {
                environment: 'production', // by default development \['development', 'stage', 'production'\]
                entity: 'Ministère des armées', // Entity responsible for website
                language: '', // language of the website (ISO 639-1). default to html lang
                target: 'target', // site target
                type: 'type', // site type
                region: 'FR-IDF', // region of the website (ISO 3166-2:FR)
                department: 'FR-75', // department of the website (ISO 3166-2:FR)
            },
        }
    };
</script>
```

### PROPRIÉTÉS

:::note
Les noms entre parenthèses (EA: …) correspondent au nom des variables restituées dans le datalayer et envoyées à Eulerian.
:::

##### environment

_String_ (EA: site\_environment)

`window.dsfr.analytics.site.environment`

Défini l’environnement du site parmi :

* `development` (dev) (default)

* `production` (prod)

* `stage`

Les différentes valeurs sont énumérées dans l’objet `window.dsfr.analytics.site.constructor.Environment`

* * *

##### entity

_String_ (EA: site\_entity) (required)

`window.dsfr.analytics.site.entity`

Défini l'entité responsable du site **(obligatoire)**

* * *

##### language

_String_ (EA: site\_language)

`window.dsfr.analytics.site.language`

Défini la langue du site en ISO 639-1

Par défaut, reprend l’attribut lang sur la balise `<html>` de la page

* * *

##### target

_String_ (EA: site\_target)

`window.dsfr.analytics.site.target`

Défini l'objectif du site

* * *

##### type

_String_ (EA: site\_type)

`window.dsfr.analytics.site.type`

Défini le type de site

* * *

##### region

_String_ (EA: site\_region)

`window.dsfr.analytics.site.region`

Défini la région du site en ISO 3166-2:FR (pour les sites régionaux)

* * *

##### department

_String_ (EA: site\_department)

`window.dsfr.analytics.site.department`

Défini le département du site (pour les sites départementaux)

* * *

### MÉTHODES

##### reset (clear = false)

`window.dsfr.analytics.site.reset(clear)`

Permet de remettre les données dans l'état d’origine de la configuration.

Si le paramètre `clear = true` => toutes les données sont remises en état indéfini.

* * *
