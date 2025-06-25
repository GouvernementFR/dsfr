---
id: favicon
title: Icône de favori
shortTitle: Icône de favori
description: Intégration et bonnes pratiques de l’icône de favoris dans le Système de Design de l’État.
shortDescription: Guide d’intégration du favicon dans vos projets.
keywords: favicon, icône, apple-touch-icon, manifest, DSFR, accessibilité, navigateur
cover: ../_asset/favicon/cover/cover.png
excerpt: Intégrer correctement une icône de favoris dans un site DSFR, avec les bonnes tailles, formats et règles d’accessibilité.
summary: Le favicon permet d’identifier un site de l’État dans les onglets et favoris. Retrouvez les formats, balises HTML et bonnes pratiques à respecter.
order: 9
---

# Icône de favoris - Favicon

L’icône de favoris est un petit icône associé à un site web.

## Icone de favoris

Il permet à l’utilisateur de repérer qu’il se trouve sur un site de l'état. Cela dans différents contextes au sein de son navigateur (dans l’onglet, la liste de favoris ou encore l’historique).

![](../_asset/favicon/apple_touch_icon_8ffa1fa80c.png)

### Pour les développeurs

L'icône de favori est disponible sous plusieurs formats/tailles afin de s’afficher sur les différents navigateurs (Google Chrome, Firefox, Safari, IE 11).

En fonction de la structure de votre projet, vous pouvez conserver les chemin relatifs proposés, ou les modifier en intégrant les icônes de favoris directement à la racine du projet.

```html
<link rel="apple-touch-icon" href="[path]/apple-touch-icon.png"><!-- 180×180 -->
<link rel="icon" href="[path]/favicon.svg" type="image/svg+xml"><link rel="shortcut icon" href="[path]/favicon.ico" type="image/x-icon"><!-- 32×32 -->
<link rel="manifest" href="[path]/manifest.webmanifest" crossorigin="use-credentials">
<!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
<!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
```

## Règles d’utilisation

### Contenus

- Le favicon s’accompagne toujours du titre de la page courante et du nom de site
- Ces deux éléments ne doivent pas dépasser 60 caractères
- Le titre de la page courante doit permettre de comprendre la page sur laquelle l’utilisateur se trouve
- Le titre de la page courante doit être unique, simple et concis
- Lorsque la structure du projet le permet, placer les icônes favicon.ico et apple-touch-icon.png à la racine du serveur. L’inclusion du .ico n’est alors plus recommandé, il faut alors retirer le `<link rel="shortcut icon" href="[path]/favicons/favicon.ico" type="image/x-icon"><!-- 32×32 -->`

### Personnalisation

Ce composant n’est pas personnalisable.
