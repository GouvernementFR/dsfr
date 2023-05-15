## Installation

Pour installer le système d’analytics, il suffit d’importer le fichier javascript :
`/dist/analytics/analytics.module.js` **après** `dsfr.module.js`

Le script d’Eulerian est automatiquement chargé au sein du package, attention à ne pas l’insérer dans la page afin
d'éviter les doublons.

⚠️ Pour les versions du dsfr inférieures à dsfr-1.9.0 (minimum 1.3.0), il est nécessaire d’ajouter le fichier : `/dist/patch/patch.module.js` **avant** `dsfr.module.js`

Analytics est un package à part, il n’est pas compris dans le fichier js global du dsfr.
Le package dispose tout de même d’une dépendance au DSFR, notamment au core.
Une version standalone des analytics permet d’utiliser ce package en dehors de toutes dépendances au DSFR.


- Analytics/Installation
  - [Configuration](installation/configuration.md)
  - [ConsentManagementPlatform](installation/cmp.md)
  - [Opt](installation/opt.md)