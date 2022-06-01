# core

Le package core est utilisé comme fondation du Design System, il contient plusieurs éléments fondamentaux.

### Typographie

Les typographies Marianne® et Spectral sont les typographies officielles de la charte de l'État. Leur usage crée une cohérence entre les interfaces et offre une expérience positive à l’utilisateur. Leur respect renforce également la reconnaissance de la parole de l’État.

### Icônes

Les icônes fonctionnelles sont des symboles visuels qui accompagnent l’utilisateur dans ses actions et qui aident à sa compréhension de l’interface.

### Icônes de favoris - Favicon

L’icône de favoris est un petit icône associé à un site web. Il permet à l’utilisateur de repérer qu’il se trouve sur un site de l'état.

### Medias

Les médias désignent vos contenus photos et vidéos. Lorsqu’ils sont intégré à une page de contenu, il est recommandé de suivre les règles décrites ci-dessous.

### Grille

La grille proposée par le design system vous permet de structurer vos pages et vos contenus simplement.


## Dépendances
```shell
core
└─ legacy
```

## Utilisation
Afin d’utiliser le composant `core`, il est nécessaire d’ajouter les fichiers de styles et de scripts présents dans le dossier dist dans l'ordre suivant :
```html
<html>
  <head>
    <link href="css/core/core.min.css" rel="stylesheet">
  </head>
  <body>
    <script type="text/javascript" nomodule href="js/legacy/legacy.nomodule.min.js" ></script>
    <script type="module" href="js/core/core.module.min.js" ></script>
    <script type="text/javascript" nomodule href="js/core/core.nomodule.min.js" ></script>
  </body>
</html>
```

## Documentation

Consulter [la documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019527/Typographie+-+Typography) sur le module Typographie

Consulter [la documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222331396/Ic+nes+-+Icons) sur le module Icônes

Consulter [la documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/577930274/Ic+nes+de+favoris+-+Favicons) sur le module Icônes de favoris - Favicon

Consulter [la documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/223019554/M+dias+int+gr+s+au+contenu+-+Responsive+medias) sur le module Médias fondamentaux

Consulter [la documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222331372/Grille+et+points+de+rupture+-+Grid+and+breakpoints) sur le module Grille