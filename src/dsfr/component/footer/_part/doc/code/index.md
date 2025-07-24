---
boost: 0
sitemap:
  noindex: true
title: Code du Pied de page
shortTitle: Code du Pied de page
description: Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.
shortDescription: Informations complémentaires en bas de page
keywords: pied de page, footer, navigation secondaire, DSFR, accessibilité, informations légales, design système
cover: ../_asset/cover/cover.png
excerpt: Le composant Pied de page structure les informations secondaires d’un site, comme les mentions légales, les liens institutionnels et les coordonnées, tout en facilitant la navigation de fin de parcours.
summary: Ce composant permet de clore chaque page avec un ensemble structuré d’informations complémentaires, de liens obligatoires et de repères institutionnels. Il peut inclure des blocs de liens, une description du service, un bloc marque, et une mention légale normalisée. Le pied de page est non personnalisable, s’intègre sur l’ensemble des pages d’un site public, et respecte les exigences d’accessibilité et de cohérence éditoriale.
mesh:
  - component/header
  - component/navigation
  - component/follow
---

## Pied de page

Le pied de page est un élément de navigation secondaire mis à disposition de l’usager pour qu’il poursuive son parcours. Il propose également des éléments d’information complémentaires.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Le composant **Pied de page** est constitué d'un élément `<footer>` de classe `fr-footer`, avec l'attribut `role="contentinfo"`, et un attribut `id` pour le lier au lien d'évitement "pied de page" via une ancre.

- Un premier bloc, optionnel, de navigation permet d'ajouter des liens de navigations. Il s'agit d'un élément `<div>` de classe `fr-footer__top`.
  - Ce bloc doit contenir un élément `<div>` de classe `fr-container` qui permet de centrer le contenu ainsi qu'une [grille](../../../../../core/_part/doc/index.md) pour structurer les liens en colonnes.
  - Utiliser la grille avec espacement entre les colonnes `fr-grid-row--gutters`. Ajouter autant de colonnes que nécessaire pour structurer les liens.
  - Dans chaque colonne ajouter :
    - Une catégorie de liens, optionnelle, avec un titre `<h3>`, ou autre niveau d'entête, de classe `fr-footer__top-cat`. Le libellé de la catégorie peut être un lien `<a>`.
    - Une liste de liens, `<ul>` de classe `fr-footer__top-list`, avec des liens `<a>` de classe `fr-footer__top-link`.
- Puis les blocs suivant, contenu dans un élément `<div>` de classe `fr-container` pour centrer le contenu.
  - Le corps du pied de page, un élément `<div>` de classe `fr-footer__body` contenant :
    - Un bloc marque (voir [Marque de l'état](https://www.info.gouv.fr/marque-de-letat)), un élément `<div>` de classes `fr-footer__brand` et `fr-enlarge-link`.
      - Il contient à minima le bloc-marque, il s'agit du composant [bloc-marque de l'état](../../../../logo/_part/doc/code/index.md) de classe `fr-logo`. Celui-ci doit être inséré dans un lien `<a>` pointant vers la page d'accueil et avec un attribut `title="Retour à l’accueil du site - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)"`.
      - Il peut aussi contenir un logo opérateur de l'État, une image (ou SVG) de classe `fr-footer__logo`.
        - Utiliser un attribut `style="max-width:10rem;"`, avec comme valeur la largeur max du logo en fonction de son format (10rem pour du 16:9).
        - L'attribut `alt` doit être renseigné avec le nom de l'opérateur.
        - Le lien pointant vers l'accueil est alors positionné au niveau du logo de l'opérateur, il est automatiquement étendu à toute la zone du bloc marque.
        - L'attribut `title` du lien doit être renseigné sous la forme "Retour à l’accueil du site - [texte alternatif de l’image (nom de l'opérateur ou du site serviciel)] - République Française".
    - Un bloc de contenu, un élément `<div>` de classe `fr-footer__content` contenant :
      - Une description du site, optionnelle, un élément `<p>` de classe `fr-footer__content-desc`. La description doit être concise et informative, ne pas dépasser 3 lignes.
      - Une liste de liens, **obligatoire et non modifiable**, `<ul>` de classe `fr-footer__content-list`, avec des `<li>` de classe `fr-footer__content-item`, et des liens `<a>` de classe `fr-footer__content-link`.
        - Les liens doivent être ordonnés dans cet ordre : info.gouv.fr, service-public.fr, legifrance.gouv.fr, data.gouv.fr
        - Les liens doivent pointer vers les sites respectifs en s'ouvrant dans une nouvelle fenêtre.
  - Le bloc logos partenaires, optionnel, une `<div>`de classe `fr-footer__partners`. Ce bloc contient :
    - Un titre `<h2>`, ou autre niveau d'entête, de classe `fr-footer__partners-title`.
    - Un conteneur `fr-footer__partners-logos` permettant de positionner un bloc de logo principal `<div>` de classe `fr-footer__partners-main` et/ou un bloc de logos secondaires `<div>` de classe `fr-footer__partners-sub` (utiliser une liste `<ul><li>` s'il y en a plusieurs).
      - Chaque logo est formé d'une image (ou SVG) de classe `fr-footer__logo`.
        - Utiliser un attribut `style="height: 5.625rem"`, avec comme valeur la hauteur max désirée. Uniformiser la hauteur des logos pour une meilleure lisibilité.
        - L'attribut `alt` doit être renseigné avec le nom du partenaire.
        - Un lien pointant vers le site du partenaire peut englober l'image du logo partenaire.
  - Le bas du pied de page, obligatoire, un élément `<div>` de classe `fr-footer__bottom` contenant :
    - Une liste de liens liés aux obligations légales, `<ul>` de classe `fr-footer__bottom-list`, `<li>` de classe `fr-footer__bottom-item`, et des liens `<a>` de classe `fr-footer__bottom-link`. Cette liste doit être définie en fonction du site, toutefois les liens & contenus suivants sont obligatoires : “accessibilité : non/partiellement/totalement conforme”, mentions légales, données personnelles et gestion des cookies.
    - Une mention de la licence, contenu dans une `<div>` de classe `fr-footer__bottom-copy`, sous forme d'un paragraphe avec l'intitulé : “Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous licence etalab-2.0” (ajouter un lien vers la licence)

**Exemple de structure minimale**

:::fr-accordion[Déplier pour voir le code]{id=footer-structure-minimale}

```html
<footer class="fr-footer" role="contentinfo">
    <div class="fr-container">
        <div class="fr-footer__body">
            <div class="fr-footer__brand fr-enlarge-link">
                <a id="footer-brand-link-6954" title="Retour à l’accueil du site - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)" href="/">
                    <p class="fr-logo">
                        Intitulé
                        <br>officiel
                    </p>
                </a>
            </div>
            <div class="fr-footer__content">
                <p class="fr-footer__content-desc">Lorem [...] elit ut.</p>
                <ul class="fr-footer__content-list">
                    <li class="fr-footer__content-item">
                        <a title="info.gouv.fr - nouvelle fenêtre" href="https://info.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">info.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="service-public.fr - nouvelle fenêtre" href="https://service-public.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">service-public.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="legifrance.gouv.fr - nouvelle fenêtre" href="https://legifrance.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">legifrance.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="data.gouv.fr - nouvelle fenêtre" href="https://data.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">data.gouv.fr</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Plan du site</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Accessibilité : non/partiellement/totalement conforme</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Mentions légales</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Données personnelles</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Gestion des cookies</a>
                </li>
            </ul>
            <div class="fr-footer__bottom-copy">
                <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a>
                </p>
            </div>
        </div>
    </div>
</footer>
```

:::

**Exemple de structure complète**
Cet exemple inclut un bloc de navigation, un bloc-marque avec logo opérateur, et un bloc de logos partenaires, en plus du contenu minimal.

:::fr-accordion[Déplier pour voir le code]{id=footer-structure-complete}

```html
<footer class="fr-footer" role="contentinfo">
    <div class="fr-footer__top">
        <div class="fr-container">
            <div class="fr-grid-row fr-grid-row--start fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-container">
        <div class="fr-footer__body">
            <div class="fr-footer__brand fr-enlarge-link">
                <p class="fr-logo">
                    République
                    <br>Française
                </p>
                <a title="Retour à l’accueil du site - [À MODIFIER - texte alternatif de l’image : nom de l'opérateur ou du site serviciel] - République Française" href="/" class="fr-footer__brand-link">
                    <img class="fr-footer__logo" style="max-width:10rem;" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                </a>
            </div>
            <div class="fr-footer__content">
                <p class="fr-footer__content-desc">Lorem [...] elit ut.</p>
                <ul class="fr-footer__content-list">
                    <li class="fr-footer__content-item">
                        <a title="info.gouv.fr - nouvelle fenêtre" href="https://info.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">info.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="service-public.fr - nouvelle fenêtre" href="https://service-public.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">service-public.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="legifrance.gouv.fr - nouvelle fenêtre" href="https://legifrance.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">legifrance.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="data.gouv.fr - nouvelle fenêtre" href="https://data.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">data.gouv.fr</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fr-footer__partners">
            <h2 class="fr-footer__partners-title">Nos partenaires</h2>
            <div class="fr-footer__partners-logos">
                <div class="fr-footer__partners-main">
                    <a class="fr-footer__partners-link" href="">
                        <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                    </a>
                </div>
                <div class="fr-footer__partners-sub">
                    <ul>
                        <li>
                            <a class="fr-footer__partners-link" href="">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            </a>
                        </li>
                        <li>
                            <a class="fr-footer__partners-link" href="">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.1x1.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            </a>
                        </li>
                        <li>
                            <a class="fr-footer__partners-link" href="">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.9x16.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Plan du site</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Accessibilité : non/partiellement/totalement conforme</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Mentions légales</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Données personnelles</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Gestion des cookies</a>
                </li>
            </ul>
            <div class="fr-footer__bottom-copy">
                <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a>
                </p>
            </div>
        </div>
    </div>
</footer>
```

:::

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Logo       | Oui         |
| Footer     | Oui         |

:::

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/logo/logo.min.css" rel="stylesheet">
<link href="dist/component/footer/footer.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Pied de page **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+footer+)

::dsfr-doc-changelog
