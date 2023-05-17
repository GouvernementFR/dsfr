## Installation

Pour installer le système d’analytics, il suffit d’importer le fichier javascript :
`/dist/analytics/analytics.module.js` **après** `dsfr.module.js`

Le script d’Eulerian est automatiquement chargé au sein du package, attention à ne pas l’insérer dans la page afin
d'éviter les doublons.

⚠️ Pour les versions du dsfr inférieures à dsfr-1.9.0 (minimum 1.3.0), il est nécessaire d’ajouter le fichier : `/dist/patch/patch.module.js` **avant** `dsfr.module.js`

Il est préférable d'effectuer une montée de version en 1.9.3 pour profiter des optimisations optimales.

Analytics est un package à part, il n’est pas compris dans le fichier js global du dsfr.
Le package dispose tout de même d’une dépendance au DSFR, notamment au core.
Une version standalone des analytics permet d’utiliser ce package en dehors de toutes dépendances au DSFR.

Pour le fonctionnement du package Analytics, une configuration particulière du dsfr est nécessaire :
[Configuration](installation/configuration.md)

Le package Analytics doit être lié à une plateforme de consentement et l'API propose des utilitaires à cet effet : [ConsentManagementPlatform](installation/cmp.md)

Afin de respecter la possibilité pour l'utilisateur de refuser la collecte de données, l'API implémente également l'Opt-out mis à disposition par Eulerian : [Opt](installation/opt.md)
