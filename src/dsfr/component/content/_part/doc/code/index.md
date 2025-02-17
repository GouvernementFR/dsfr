---
title: Code du Contenu médias
---

## Contenu médias

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant Contenu médias permet d'intégrer des images ou des vidéos de manière accessible et responsive. Sa structure est la suivante :

- Un élément `<figure>` de classe `fr-content-media` contient le média et ses informations associées.
  - Dans le cas d'une image :
    - Un élément `<div>` de classe `fr-content-media__img` contient l'image.
    - L'image est un élément `<img>` avec la classe `fr-responsive-img`, ou un `<svg>`.
    - L’**alternative de l’image**, attribut `alt`, doit toujours être présente, sa valeur peut-être vide (image n’apportant pas de sens supplémentaire au contexte) ou non (porteuse de texte ou apportant du sens) selon votre contexte.
  - Dans le cas d'une vidéo :
    - Un élément `<video>` avec l'attribut `controls`, ou une `<iframe>`, et la classe `fr-responsive-vid`.
    - L'**alternative de la vidéo** doit être présente dans un paragraphe <p> au sein de la balise `<video>` ou au niveau de l'attribut `title` de l'`<iframe>`.
  - Un élément `<figcaption>` de classe `fr-content-media__caption` contenant :
    - La **description** et/ou la **source** du média.
    - Un lien `<a class="fr-link">` vers la source du média.

Les informations visuelles ou auditives doivent être accessibles pour les utilisateurs qui ne peuvent pas voir ou entendre le contenu multimédia. Pour cela, il est recommandé d'ajouter une **description** ou une **transcription** du contenu multimédia.

**Structure HTML d'une image**

Image :

```HTML
<figure role="group" class="fr-content-media" aria-label="Description / Source">
    <div class="fr-content-media__img">
        <img class="fr-responsive-img" src="example/img/placeholder.16x9.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]" />
    </div>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

SVG :

```HTML
<figure role="group" class="fr-content-media" aria-label="Description / Source">
    <!-- Les SVG illustratifs (non porteur de sens) doivent avoir l'attribut aria-hidden="true" -->
    <!-- Les SVG porteurs de sens doivent avoir l'attribut role="img" et un attribut aria-label -->
    <svg role="img" aria-label="[A modifier - titre ou texte contenu dans l’image]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">(...)</svg>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

**Structure HTML d'une vidéo**

Iframe :

```HTML
<figure role="group" class="fr-content-media">
    <iframe title="Vidéo de présentation du Service National Universel - voir transcription ci-dessous" class="fr-responsive-vid" src="https://www.youtube.com/embed/HyirpmPL43I" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a id="link-1983" href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

Vidéo :

```HTML
<figure role="group" class="fr-content-media">
    <video src="video.mp4" class="fr-responsive-vid" controls>
        <p>Alternative de la vidéo - voir transcription ci-dessous</p>
    </video>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a id="link-1983" href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

Dans le cas d'un fichier audio, la structure est similaire à celle d'une vidéo, mais avec un élément `<audio>` à la place de la vidéo.

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et du contenu médias doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/content/content.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/content/content.legacy.min.css" rel="stylesheet">
```

#### Variantes de tailles

Le composant Contenu médias est prévu pour être utilisé au sein d'une page de contenu. Les pages de contenus ne doivent pas prendre la totalité de la largeur de la page en desktop, il est conseillé de placer le contenu dans une grille de 6 à 10 colonnes en desktop.

Par défaut, un contenu média prendra la largeur du conteneur. Il existe des variantes de tailles permettant de le render plus large ou moins large que le conteneur :

- Par défaut : 100% de la largeur du conteneur.
- La classe `.fr-content-media--sm` : 75% de la largeur du conteneur (centré).
- La classe `.fr-content-media--lg` : 125% de la largeur du conteneur.

La description et la source du média restent alignés sur la gauche du conteneur.

**Exemples de variantes de tailles**

SM :

```HTML
<figure role="group" class="fr-content-media fr-content-media--sm">
    (...)
</figure>
```

LG :

```HTML
<figure role="group" class="fr-content-media fr-content-media--lg">
    (...)
</figure>
```

#### Variantes de ratios

Les classes utilitaires de ratios, disponibles dans le core, permettent de définir le ratio de l'image ou de la vidéo.

Pour les images, les classes suivantes sont disponibles :

- Le format par défaut et conseillé des images est le 16:9.
- `fr-ratio-32x9` : ratio 16:9/2
- `fr-ratio-16x9` : par défaut, pour forcer le ratio 16:9
- `fr-ratio-3x2` : ratio 3:2
- `fr-ratio-4x3` : ratio 4:3
- `fr-ratio-1x1` : ratio 1:1
- `fr-ratio-3x4` : ratio 3:4
- `fr-ratio-2x3` : ratio 2:3

Pour les vidéos, les classes suivantes sont disponibles :

- `fr-ratio-16x9` : par défaut, pour forcer le ratio 16:9
- `fr-ratio-4x3` : ratio 4:3
- `fr-ratio-1x1` : ratio 1:1

Voir la section [Ratios dans les fondamentaux](../../../../../core/_part/doc/index.md) pour plus d'informations.

---

### JavaScript

Aucun JavaScript spécifique n'est requis pour le composant Contenu médias.

Un fallback JS est prévu pour la **gestion des ratios** sur les navigateurs ne supportant pas la propriété CSS `aspect-ratio`. Il est inclus dans le fichier JS du core.

#### Installation du JavaScript

Pour fonctionner correctement, le fichier JS du core doit être importé.
L'import doit se faire en fin de page, avant la fermeture du body, et de préférence avec le fichier minifié, car plus léger.

```HTML
<script type="module" src="dist/core/core.min.js"></script>
```

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/core/core.legacy.min.js"></script>
```

Une fois le fichier JS importé, la gestion des ratios est automatiquement prise en charge par le navigateur.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+content+)

::dsfr-doc-changelog
