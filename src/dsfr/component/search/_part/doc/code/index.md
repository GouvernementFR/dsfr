---
boost: 0
sitemap:
  noindex: true
title: Code de la barre de recherche
shortTitle: Code de la Barre de recherche
description: Présentation du composant Barre de recherche permettant d’accéder rapidement à un contenu via un mot clé ou une phrase.
shortDescription: Accès rapide à un contenu par mot clé
keywords: recherche, barre de recherche, navigation, formulaire, interface, DSFR, accessibilité, moteur de recherche
cover: ../_asset/cover/cover.png
excerpt: La barre de recherche permet à l’usager d’accéder à un contenu ciblé en saisissant un mot clé ou une phrase. Elle peut être globale ou contextuelle selon l’usage.
summary: Ce composant propose un champ de saisie avec bouton pour rechercher un contenu spécifique au sein d’un site ou d’un bloc fonctionnel. Elle s’intègre idéalement à l’en-tête pour un usage global ou dans une section précise pour des recherches contextuelles. Le composant suit des recommandations strictes en matière d’accessibilité, de largeur minimale, de rédaction des libellés et ne permet pas de personnalisation graphique.
---

## Barre de recherche

La barre de recherche est un système de navigation permettant à l'usager d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une phrase.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Barre de recherche** est un système de navigation qui permet à l'utilisateur d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une expression.
Sa structure est la suivante :

- Le conteneur de la barre de recherche doit être un élément HTML `<div>` avec le rôle `search` défini par la classe `fr-search-bar`.
- Le champ de recherche est un élément HTML `<input>` de type `search` défini par la classe `fr-input`.
- Le champ de recherche doit être associée à un libellé `<label>` avec la classe `fr-label`.
- Le bouton de recherche est un élément HTML `<button>` de type `button` défini par la classe `fr-btn` et dispose d'un attribut `title` indiquant son action.
- Un message d'erreur ou de succès peut être associé au champ de recherche en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut`id` doit être associé à l'attribut `aria-describedby` du champ de recherche.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML**

```HTML
<div class="fr-search-bar" role="search">
    <label class="fr-label" for="search-input">
        Rechercher
    </label>
    <input class="fr-input" aria-describedby="search-input-messages" placeholder="Rechercher" id="search-input" type="search">
    <div class="fr-messages-group" id="search-input-messages" aria-live="polite">
    </div>
    <button title="Rechercher" type="button" class="fr-btn">Rechercher</button>
</div>
```

#### Variante de taille

La barre de recherche est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation.
Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<div class="fr-search-bar">` :

- En taille MD : par défaut.
- En taille LG : définie par la classe `fr-search-bar--lg`.

**Exemple de variante de taille**

```HTML
<div class="fr-search-bar fr-search-bar--lg" role="search">
  <!-- Contenu de la barre de recherche -->
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et de la barre de recherche doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/search/search.min.css" rel="stylesheet">
```

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/search/search.legacy.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Barre de recherche **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+search+)
