---
title: Code du Partage
---

## Partage

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant

Les boutons de partage permettent aux utilisateurs de partager facilement un contenu qu’il consulte à d’autres utilisateur.
Sa structure est la suivante :

- Le **conteneur principal**, obligatoire, du menu latéral est un élément HTML `<div>` défini par la classe `fr-share` et contenant :
    - Le **titre**, obligatoire, des boutons de partage est un élément HTML `<p>` défini par la classe `fr-share__title` dont le libellé est "Partager la page".
    - La **liste de liens ou boutons de partage**, obligatoire, est un élément HTML `<ul>` placé après le titre et défini par la classe `fr-btns-group`.
        - Chaque élément `<li>` de la liste contient :
            - Un **lien ou bouton** de partage, un élément HTML `<a>` ou `<button>` défini par la classe `fr-btn` associée à la classe utilitaire du reseau social ou de l'action de partage correspondante (ex: `fr-btn--facebook`).

**Exemple de structure HTML**

:::fr-accordion[Déplier pour voir le code]{id=share-structure}

```HTML
<div class="fr-share">
    <p class="fr-share__title">Partager la page</p>
    <ul class="fr-btns-group">
        <li>
            <a onclick="window.open(this.href,'Partager sur Facebook','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=450'); event.preventDefault();" href="https://www.facebook.com/sharer.php?u=[À MODIFIER - url de la page]" target="_blank" rel="noopener external" class="fr-btn--facebook fr-btn">Partager sur Facebook</a>
        </li>
        <li>
            <!-- Les paramètres de la reqûete doivent être URI-encodés (ex: encodeURIComponent() en js) -->
            <a onclick="window.open(this.href,'Partager sur X (anciennement Twitter)','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=420'); event.preventDefault();" href="https://twitter.com/intent/tweet?url=[À MODIFIER - url de la page]&text=[À MODIFIER - titre ou texte descriptif de la page]&via=[À MODIFIER - via]&hashtags=[À MODIFIER - hashtags]" target="_blank" rel="noopener external" class="fr-btn--twitter-x fr-btn">Partager sur X (anciennement Twitter)</a>
        </li>
        <li>
            <a onclick="window.open(this.href,'Partager sur LinkedIn','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=550,height=550'); event.preventDefault();" href="https://www.linkedin.com/shareArticle?url=[À MODIFIER - url de la page]&title=[À MODIFIER - titre ou texte descriptif de la page]" target="_blank" rel="noopener external" class="fr-btn--linkedin fr-btn">Partager sur LinkedIn</a>
        </li>
        <li>
            <a href="mailto:?subject=[À MODIFIER - objet du mail]&body=[À MODIFIER - titre ou texte descriptif de la page] [À MODIFIER - url de la page]" target="_blank" rel="noopener external" class="fr-btn--mail fr-btn">Partager par email</a>
        </li>
        <li>
            <button onclick="[navigator.clipboard.writeText(window.location).then(function() {alert('Adresse copiée dans le presse papier.')});]" type="button" class="fr-btn--copy fr-btn">Copier dans le presse-papier</button>
        </li>
    </ul>
</div>
```

:::

#### Méta données

Les meta données à placer dans la balise `<head>` de la page, pour gérer les informations de partage sur les réseaux sociaux.

**Exemple de méta données**

```HTML
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="[À MODIFIER - @usernameTwitter]">
<meta property="og:title" content="[À MODIFIER - Système de Design de l&#39;État]">
<meta property="og:description" content="[À MODIFIER - Développer vos sites et applications en utilisant des composants prêts à l&#39;emploi, accessibles et ergonomiques]">
<meta property="og:image" content="[À MODIFIER - https://systeme-de-design.gouv.fr/src/img/systeme-de-design.gouv.fr.jpg]">
<meta property="og:type" content="website">
<meta property="og:url" content="[À MODIFIER - https://systeme-de-design.gouv.fr/]">
<meta property="og:site_name" content="[À MODIFIER - Site officiel du Système de Design de l&#39;État]">
<meta property="og:image:alt" content="[À MODIFIER - République Française - Système de Design de l&#39;État]">
<meta name="twitter:image:alt" content="[À MODIFIER - République Française - Système de Design de l&#39;État]">
```

### CSS

#### Installation

Pour fonctionner correctement, le style CSS du composant de partage doit être importé.  L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/share/share.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/share/share.legacy.min.css" rel="stylesheet">
```

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/sidemenu/sidemenu.min.css" rel="stylesheet">
```

#### Variante de boutons et liens de partage en version inactive

Le code d’intégration des boutons et liens de partage proposé ici sont de simples liens externes vers les services de partage.

Si vous souhaitez utiliser les différentes intégrations (javascript) proposées par les différents réseaux sociaux, vous devrez très probablement les intégrer à votre gestionnaire de consentement afin de que l’utilisateur puisse accepter ou non les cookies déposés.
Par défaut, les services doivent être désactivés, les boutons sont donc passés en inactifs et une mention d’information s’affiche pour rediriger vers la modale de consentement.

**Exemples de variante de boutons et liens de partage en version inactive**

```HTML
<div class="fr-share">
    <p class="fr-share__title">Partager la page</p>
    <p class="fr-share__text">Veuillez <a href=[À MODIFIER - url page autorisation cookies]>autoriser le dépôt de cookies</a> pour partager sur Facebook, Twitter et LinkedIn.</p>
    <ul class="fr-btns-group">
        <li>
            <a target="_blank" rel="noopener external" aria-disabled="true" role="link" class="fr-btn--facebook fr-btn">Partager sur Facebook</a>
        </li>
        <li>
            <a target="_blank" rel="noopener external" aria-disabled="true" role="link" class="fr-btn--twitter-x fr-btn">Partager sur X (anciennement Twitter)</a>
        </li>
        <li>
            <a target="_blank" rel="noopener external" aria-disabled="true" role="link" class="fr-btn--linkedin fr-btn">Partager sur LinkedIn</a>
        </li>
        <li>
            <a href="mailto:?subject=[À MODIFIER - objet du mail]&body=[À MODIFIER - titre ou texte descriptif de la page] [À MODIFIER - url de la page]" target="_blank" rel="noopener external" class="fr-btn--mail fr-btn">Partager par email</a>
        </li>
        <li>
            <button onclick="navigator.clipboard.writeText(window.location).then(function() {alert('Adresse copiée dans le presse papier.')});" type="button" class="fr-btn--copy fr-btn">Copier dans le presse-papier</button>
        </li>
    </ul>
</div>
```

### JavaScript

Le composant **Partage** ne nécessite pas d'import de JavaScript spécifique pour fonctionner.

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+share+)

::dsfr-doc-changelog
