---
title: Code de l'en-tête
---

## En-tête

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant

Le composant **En-tête** permet aux utilisateurs d’identifier sur quel site ils se trouvent. Il peut donner accès à la recherche et à certaines pages ou fonctionnalités clés.

Il est constitué d'un élément HTML `<header>` de classe `fr-header`, avec l'attribut `role="banner"` contenant :

- Un premier conteneur du **Corps de l'en-tête**, est un élément HTML `<div>` défini par la classe `fr-header__body`.
    - Ce bloc doit contenir un élément HTML `<div>` de classe `fr-container` qui permet de centrer le contenu.
    - Un bloc de **Ligne de corps de l'en-tête**, un élément HTML `<div>` défini par la classe `fr-header__body-row`, contenant :
        - Un conteneur du **bloc marque** (voir [Marque de l'état](https://www.info.gouv.fr/marque-de-letat)), un élément HTML `<div>` de classes `fr-header__brand` et `fr-enlarge-link` pour étendre le lien à l’ensemble du bloc-marque et pouvant comporter deux sous-conteneurs :
            - Un **Conteneur de la partie supérieure**, obligatoire, un élément HTML `<div>` de classes `fr-header__brand-top` contenant :
                - À minima le **Bloc marque** dans un élément HTML `<div>` de classes `fr-header__logo`, il s'agit du composant [Bloc-marque de l'état](../../../../logo/_part/doc/code/index.md) de classe `fr-logo`.
                - Il peut aussi contenir un **Logo opérateur de l'État**, une image (ou SVG) contenue dans un élément HTML `<div>` de classe `fr-header__operator`.
                    - Utiliser un attribut `style="max-width:10rem;"`, avec comme valeur la largeur max du logo en fonction de son format (10rem pour du 16:9).
                    - L'attribut `alt` doit être renseigné avec le nom de l'opérateur.
                    - Le lien pointant vers l'accueil est alors positionné au niveau du logo de l'opérateur, il est automatiquement étendu à toute la zone du bloc marque.
                    - L'attribut `title` du lien doit être renseigné sous la forme "Retour à l’accueil du site - [texte alternatif de l’image (nom de l'opérateur ou du site serviciel)] - République Française".
            - Et un bloc **Nom de service et description**, optionnel, dans un élément HTML `<div>` de classe `fr-header__service`.
                - Le lien `<a>` dont l'attribut `title` doit être renseigné sous la forme "Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)" est alors placé sur le paragraphe `<p>` defini par la classe `fr-header__service-title` contenant le "nom de service".
                - Une description, optionnelle, dans un paragraphe `<p>` défini par la classe `fr-header__service-tagline`.
        - Un bloc d'**Accès rapides**, optionnel, dans un élément HTML `<div>` de classes `fr-header__tools` et pouvant contenir :
            - La **liste de liens d'accès rapides**, optionnelle, est placée dans un élément HTML `<div>` de classes `fr-header__tools-links`, il s'agit d'un élément HTML `<ul>` de classes `fr-btns-group` (voir [Groupes de boutons](../../../../button/_part/doc/code/index.md#groupes-de-boutons)) contenant des liens, comme par exemple la connexion à un espace sécurisé et limité à 3 accès rapides maximum.
            - La **Barre de recherche**, optionnelle, est placée dans un élément HTML `<div>` de classes `fr-header__search` (voir [Barre de recherche](../../../../search/_part/doc/code/index.md)) et `fr-modal` pour s'afficher dans une modale en mobile (voir [Modale](../../../../modal/_part/doc/code/index.md)).
            - Le **Sélecteur de langue**, optionnel, est placé à la suite des liens d'accès rapides (voir [Sélecteur de langue](../../../../translate/_part/doc/code/index.md)).
            - Le bouton des **Paramètres d'affichage**, optionnels, est placé à la suite des liens d'accès rapides et avant le sélecteur de langue (voir [Paramètre d'affichage](../../../../display/_part/doc/code/index.md)).
        - Le conteneur de la **Navigation principale mobile**, dans un élément HTML `<div>` de classes `fr-header__navbar` pouvant contenir :
            - Le **Bouton d'ouverture**, obligatoire, du menu principale en mobile, un élément HTML `<button>` de type `button` défini par les classes `fr-btn` et `fr-btn--menu`.
                - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si le bloc refermable de la navigation est ouvert ou fermé.
                - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
            - Le **Bouton d'ouverture du menu principale en mobile**, optionnel, un élément HTML `<button>` de type `button` défini par les classes `fr-btn` et `fr-btn--menu`.
                - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si le bloc refermable de la navigation est ouvert ou fermé.
                - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
            - Le **Bouton d'ouverture de la modale de recherche en mobile**, optionnel, un élément HTML `<button>` de type `button` défini par les classes `fr-btn` et `fr-btn--search`.
                - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si la modale de recherche est ouverte ou fermée.
                - Le bouton est lié à la modale de recherche via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale de recherche.
- Un second conteneur, de la **Navigation principale de l'en-tête** dans un élément HTML `<div>` défini par les classes `fr-header__menu` et `fr-modal`, pour s'afficher dans une modale en mobile (voir [Modale](../../../../modal/_part/doc/code/index.md)).
    - La modale de la navigation principale de l'en-tête contient un premier **Conteneur des liens d'accès rapides**, un élément HTML `<div>` défini par la classe `fr-header__menu-links`, laissée vide et servant à dupliquer en Javascript pour le mobile les liens contenus dans la balise définie par la classe `fr-header__tools-links`.
    - La **Navigation principale de l'en-tête** est contenue dans un élément HTML `<nav>` défini par la classe `fr-nav` (voir [Navigation principale](../../../../navigation/_part/doc/code/index.md)).

**Exemple de structure minimale**

:::fr-accordion[Déplier pour voir le code]{id=header-structure-minimale}

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <a href="/" title="Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                                <p class="fr-logo">
                                    Intitulé
                                    <br>officiel
                                </p>
                            </a>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-header" title="Menu" type="button" id="button-header" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-header" aria-labelledby="button-header">
        <div class="fr-container">
            <button aria-controls="modal-header" title="Fermer" type="button" id="button-2168" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
            <nav class="fr-nav" role="navigation" aria-label="Menu principal">
                <ul class="fr-nav__list">
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
```

:::

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core de l'en-tête doivent être importés.

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/header/header.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```html
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/header/header.legacy.min.css" rel="stylesheet">
```

#### Variante sans navigation

Le composant en-tête peut être utilisé sans navigation.

**Exemple de variante sans navigation**

:::fr-accordion[Déplier pour voir le code]{id=header-sans-navigation}

```HTML
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                Intitulé
                                <br>officiel
                            </p>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                            <p class="fr-header__service-title">
                                Nom du site / service
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
```

:::

#### Variante avec une liste de raccourcis

Le composant en-tête peut être utilisé avec une liste de raccourcis.

**Exemple de variante avec une liste de raccourcis**

:::fr-accordion[Déplier pour voir le code]{id=header-avec-raccourcis}

```HTML
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                Intitulé
                                <br>officiel
                            </p>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-nav" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                            <p class="fr-header__service-title">
                                Nom du site / service
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <ul class="fr-btns-group">
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--team fr-btn">Contact</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--briefcase fr-btn">Espace recruteur</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--account fr-btn">Espace particulier</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-nav" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-nav" title="Fermer" type="button" id="button-2188" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
        </div>
    </div>
</header>
```

:::

#### Variante avec selecteur de langues

Le composant en-tête peut être utilisé avec le selecteur de langues.

**Exemple de variante avec selecteur de langues**

:::fr-accordion[Déplier pour voir le code]{id=header-avec-selecteur-de-langues}

```HTML
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                Intitulé
                                <br>officiel
                            </p>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-nav" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                            <p class="fr-header__service-title">
                                Nom du site / service
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <nav role="navigation" class="fr-translate fr-nav">
                            <div class="fr-nav__item">
                                <button aria-controls="translate" aria-expanded="false" type="button" class="fr-translate__btn fr-btn">FR<span class="fr-hidden-lg">&nbsp;- Français</span>
                                </button>
                                <div class="fr-collapse fr-translate__menu fr-menu" id="translate">
                                    <ul class="fr-menu__list">
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="fr" lang="fr" href="/fr/" aria-current="true">FR - Français</a>
                                        </li>
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="en" lang="en" href="/en/">EN - English</a>
                                        </li>
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="es" lang="es" href="/es/">ES - Español</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-nav" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-nav" title="Fermer" type="button" id="button-2188" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
        </div>
    </div>
</header>
```

:::

#### Variante avec selecteur de langues et paramètre d'affichage

Le composant en-tête peut être utilisé avec le selecteur de langues et paramètre d'affichage.

**Exemple de variante avec selecteur de langues et paramètre d'affichage**

:::fr-accordion[Déplier pour voir le code]{id=header-avec-selecteur-de-langues-et-parametre-affichage}

```HTML
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                Intitulé
                                <br>officiel
                            </p>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-nav" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                            <p class="fr-header__service-title">
                                Nom du site / service
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <button aria-controls="fr-theme-modal" data-fr-opened="false" type="button" class="fr-icon-theme-fill fr-btn--icon-left fr-btn fr-btn">Paramètres d'affichage</button>
                        <nav role="navigation" class="fr-translate fr-nav">
                            <div class="fr-nav__item">
                                <button aria-controls="translate" aria-expanded="false" type="button" class="fr-translate__btn fr-btn">FR<span class="fr-hidden-lg">&nbsp;- Français</span>
                                </button>
                                <div class="fr-collapse fr-translate__menu fr-menu" id="translate">
                                    <ul class="fr-menu__list">
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="fr" lang="fr" href="/fr/" aria-current="true">FR - Français</a>
                                        </li>
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="en" lang="en" href="/en/">EN - English</a>
                                        </li>
                                        <li>
                                            <a class="fr-translate__language fr-nav__link" hreflang="es" lang="es" href="/es/">ES - Español</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-nav" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-nav" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
        </div>
    </div>
</header>
```

:::

#### Variante avec logo opérateur vertical, recherche

Le composant en-tête peut être utilisé avec un logo opérateur vertical et la barre de recherche.

**Exemple de variante avec logo opérateur vertical, recherche**

:::fr-accordion[Déplier pour voir le code]{id=header-avec-logo-operateur-et-recherche}

```HTML
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                République
                                <br>Française
                            </p>
                        </div>
                        <div class="fr-header__operator">
                            <a href="/" title="Accueil - [À MODIFIER - texte alternatif de l’image : nom de l'opérateur ou du site serviciel] - République Française">
                                <img class="fr-responsive-img" style="max-width:3.5rem;" src="../../../example/img/placeholder.3x4.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                                <!-- L’alternative de l’image (attribut alt) doit impérativement être renseignée et reprendre le texte visible dans l’image -->
                            </a>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-search" title="Rechercher" type="button" id="button-search" class="fr-btn--search fr-btn">Rechercher</button>
                            <button data-fr-opened="false" aria-controls="modal-nav" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__search fr-modal" id="modal-search" aria-labelledby="button-search">
                        <div class="fr-container fr-container-lg--fluid">
                            <button aria-controls="modal-search" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                            <div class="fr-search-bar" role="search">
                                <label class="fr-label" for="search-input">
                                    Rechercher
                                </label>
                                <input class="fr-input" aria-describedby="search-input-messages" placeholder="Rechercher" id="search-input" type="search">
                                <div class="fr-messages-group" id="search-input-messages" aria-live="polite">
                                </div>
                                <button title="Rechercher" type="button" class="fr-btn">Rechercher</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-nav" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-nav" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
            <nav class="fr-nav" role="navigation" aria-label="Menu principal">
                <ul class="fr-nav__list">
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
```

:::

#### Variante avec logo opérateur horizontal, nom de service, lien d’accès, recherche

Le composant en-tête peut être utilisé avec un logo opérateur horizontal, nom de service, lien d’accès et la barre de recherche.

**Exemple de variante avec logo opérateur horizontal, nom de service, lien d’accès, recherche**

:::fr-accordion[Déplier pour voir le code]{id=header-avec-logo-operateur-horizontal-et-service-et-acces-rapide-et-recherche}

```HTML
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                République
                                <br>Française
                            </p>
                        </div>
                        <div class="fr-header__operator">
                            <img class="fr-responsive-img" style="max-width:8rem;" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            <!-- L’alternative de l’image (attribut alt) doit impérativement être renseignée et reprendre le texte visible dans l’image -->
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-search" title="Rechercher" type="button" id="button-search" class="fr-btn--search fr-btn">Rechercher</button>
                            <button data-fr-opened="false" aria-controls="modal-nav" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - [À MODIFIER - texte alternatif de l’image : nom de l'opérateur ou du site serviciel] - République Française">
                            <p class="fr-header__service-title">
                                Nom du site / service
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <ul class="fr-btns-group">
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--team fr-btn">Contact</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--briefcase fr-btn">Espace recruteur</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--account fr-btn">Espace particulier</a>
                            </li>
                        </ul>
                    </div>
                    <div class="fr-header__search fr-modal" id="modal-search" aria-labelledby="button-search">
                        <div class="fr-container fr-container-lg--fluid">
                            <button aria-controls="modal-search" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                            <div class="fr-search-bar" role="search">
                                <label class="fr-label" for="search-input">
                                    Rechercher
                                </label>
                                <input class="fr-input" aria-describedby="search-input-messages" placeholder="Rechercher" id="search-input" type="search">
                                <div class="fr-messages-group" id="search-input-messages" aria-live="polite">
                                </div>
                                <button title="Rechercher" type="button" class="fr-btn">Rechercher</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-nav" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-nav" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
            <nav class="fr-nav" role="navigation" aria-label="Menu principal">
                <ul class="fr-nav__list">
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
```

:::

#### Variante avec badge BETA

Le composant en-tête peut être utilisé avec un badge "BETA" accolé au nom du site / service.

**Exemple de variante avec badge BETA**

:::fr-accordion[Déplier pour voir le code]{id=header-avec-badge-beta}

```HTML
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                Intitulé
                                <br>officiel
                            </p>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                            <p class="fr-header__service-title">
                                Nom du site / service
                                <span class="fr-badge fr-badge--sm fr-badge--green-emeraude">BETA</span>
                            </p>
                        </a>
                        <p class="fr-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
```

:::

#### Variante avec raccourcis dupliqués, pour Angular, React et Vue

Dans le cadre de l'utilisation du DSFR dans un contexte de Single-page application ([SPA](https://developer.mozilla.org/fr/docs/Glossary/SPA)) l'API du DSFR permet de désactiver la recopie Javascript des raccourcis dans la modale de navigation principale en mobile avec l'utilisation des modes mis à disposition à l'instanciation de l'API JS du DSFR (voir [API Javascript du DSFR](lien-à-modifier)).

> [!WARNING]
> Il faudra dupliquer manuellement les liens et boutons présents dans le bloc d'accès rapide défini par la classe `fr-header__tools-links` dans le conteneur prévu à cet effet dans la modale mobile de la navigation principale défini par la classe `fr-header__menu-links`. Pensez à modifier les `id`.

**Exemple de variante avec raccourcis dupliqués, pour Angular, React et Vue**

:::fr-accordion[Déplier pour voir le code]{id=header-spa}

```HTML
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <a href="/" title="Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                                <p class="fr-logo">
                                    Intitulé
                                    <br>officiel
                                </p>
                            </a>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-menu" title="Menu" type="button" id="button-menu" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <ul class="fr-btns-group">
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--team fr-btn">Contact</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--briefcase fr-btn">Espace recruteur</a>
                            </li>
                            <li>
                                <a href="[url - à modifier]" class="fr-btn--account fr-btn">Espace particulier</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-menu" aria-labelledby="button-menu">
        <div class="fr-container">
            <button aria-controls="modal-menu" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
                <ul class="fr-btns-group">
                    <li>
                        <a href="[url - à modifier]" class="fr-btn--team fr-btn fr-btn">Contact</a>
                    </li>
                    <li>
                        <a href="[url - à modifier]" class="fr-btn--briefcase fr-btn fr-btn">Espace recruteur</a>
                    </li>
                    <li>
                        <a href="[url - à modifier]" class="fr-btn--account fr-btn fr-btn">Espace particulier</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>
```

:::

#### Variante deuil national

Lors des périodes de deuil national, il est possible d’utiliser la version en berne de l'en-tête, en ajoutant à la balise `<html>` l’attribut `data-fr-mourning`. La Marianne s’affichera alors dans sa version en berne.

**Exemple de variante deuil national**

```HTML
<html lang="fr" data-fr-mourning>
```

---

### JavaScript

Pour fonctionner le composant en-tête nécessite l'utilisation de JavaScript.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/header/header.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/header/header.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur l'en-tête', les éléments suivants sont instanciés :

- Le conteneur principal, via la classe : `fr-header`.
- Le conteneur des liens d'accès direct, via la classe : `fr-header__tools-links`.
- Le conteneur des liens d'accès direct dans la modale de la navigation principale en mobile, via la classe : `fr-header__menu-links`.
- Les boutons et liens d'accès direct, via les classes `fr-header__tools-links` et `fr-btns-group` ou `fr-links-group`.
- Les modales de la barre de recherche et de la navigation principale en mobile, via les classes `fr-header__search` plus `fr-modal` et `fr-header__menu` plus `fr-modal`.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_SOUS_SECTION');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### headerModal

:::dsfr-doc-table[isEnabled]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la modale de navigation principale mobile est activé ou non |
| **Type** | property |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).headerModal.isEnabled = false` |
:::

:::dsfr-doc-table[node]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).headerModal.node` |
:::

###### modal & modalButton

voir [Modale](../../../../modal/_part/doc/code/index.md#javascript)

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+header+)

::dsfr-doc-changelog
