## Configuration {#Configuration}

Il est nécessaire de configurer le package Analytics au sein de [la configuration de l’API DSFR](https://www.systeme-de-design.gouv.fr/comment-utiliser-le-dsfr/developpeurs/api-javascript)

La configuration doit être placée **avant** les fichiers `patch.module.js`, `dsfr.module.js` et `analytics.module.js`.

```javascript
<script>
    window.dsfr = {
        analytics: {
            domain: ' mon.domainedetracking.com',
            // collection: 'manual',
            // isActionEnabled: true,
            page: {
                template: 'article'
            },
            user: {
                // ...
            },
            site: {
                entity: 'Ministère des armées', // Entity responsible for website
            }
        }
    };
</script>
```

Utiliser le DSFR mode verbose permet d’afficher dans la console le résultat de la fonction collect(), montrant les
informations envoyées à Eulerian.
