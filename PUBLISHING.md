# Publishing

## Publication globale
La version du Design System est à préciser dans le fichier `package.json`, et la publication de l'ensemble du repo se fait via la commande :

```
npm publish -timeout=9999999 --access public
```

## Publication des packages
La publication du Design System sur NPM sous forme de packages se fait via l'outil [Lerna.js](https://lerna.js.org/), qui va s'occuper automatiquement du versionning de ceux-ci en fonction des différents commits effectués depuis la dernière publication (cf [Git](#git))

La commande utilisée pour publier une nouvelle version des packages impactés est la suivante :

```
yarn run publish
```

Cette commande permet de lancer des tests automatisés (Sur les fichiers scss et l'accessibilité), et de publier les nouvelles versions des packages si les précédents tests sont passés.
