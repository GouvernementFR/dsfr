---
boost: 0
sitemap:
  noindex: true
title: Code de la Navigation principale
shortTitle: Code de la Navigation principale
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Navigation principale.
shortDescription: Orienter l’usager dans les sections du site.
keywords: navigation principale, menu, rubriques, arborescence, design system, UX, interface, usager, header, mega menu
cover: ../_asset/cover/cover.png
excerpt: La navigation principale guide l’usager dans les sections clés d’un site et structure les niveaux d’accès à l’information. Elle se place sous l’en-tête et peut inclure des menus déroulants ou mega menus.
summary: Ce document décrit la navigation principale comme un composant central d’un site web, servant à organiser et hiérarchiser les principales rubriques. Il présente les cas d’usage, les variantes possibles, les limites en matière de profondeur et de densité, ainsi que les bonnes pratiques éditoriales. Il donne aussi des recommandations sur l’association avec d’autres composants comme la barre de recherche ou le menu latéral, afin de renforcer l’expérience utilisateur dans la navigation globale du site.
mesh:
  - component/header
  - component/footer
---

## Navigation principale

La navigation principale est le système central de navigation au sein d’un site. Elle permet d’orienter l’usager à travers les rubriques principales et secondaires du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Navigation principale** est l'élément central de la navigation au sein du site, il oriente l’utilisateur à travers les grandes sections du site et sur éventuellement plusieurs niveaux de profondeur.

Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

- Le conteneur principal, obligatoire, de la navigation est un élément HTML `<nav>` avec le rôle `navigation` défini par la classe `fr-nav`.
  - Il dispose d'attribut `aria-label`, dont la valeur doit décrit la fonction de la navigation (ex: "Menu principal").
- La liste de liens ou de sous-sections, obligatoire, de la navigation est un élément HTML `<ul>` défini par la classe `fr-nav__list`.
  - Chaque élément `<li>` défini par la classe `fr-nav__item` de la liste peut contenir un lien direct, un menu déroulant ou un mega-menu.
- Un Lien direct est un élément HTML `<a>` de type `link` défini par la classe `fr-nav__link`.
  - Le lien actif dispose d'un attribut `aria-current="page"`.
- Un Menu déroulant est composé :
  - D'un Bouton d'ouverture, obligatoire, du menu déroulant, un élément HTML `<button>` de type `button` défini par la classe `fr-nav__btn`.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable de la navigation est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
    - Le bouton actif dispose d'un attribut `aria-current="true"`.
  - D'un bloc refermable, obligatoire, défini par les classes `fr-collapse` et `fr-menu`, est un élément HTML `<div>` placé après le bouton d'ouverture. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que le menu latéral  ou l'accordéon.
    - Le bloc refermable contient une liste de liens directs, un élément HTML `<ul>` défini par la classe `fr-menu__list`.
      - Chaque élément `<li>` de la liste contient un lien direct défini par la classe `fr-nav__link`.
- Un Mega-menu est composé :
  - D'un bouton d'ouverture, obligatoire, est un élément HTML `<button>` de type `button` défini par la classe `fr-nav__btn`.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable de la navigation est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
    - Le bouton actif dispose d'un attribut `aria-current="true"`.
  - D'un bloc refermable, obligatoire, défini par les classes `fr-collapse` et `fr-mega-menu`, est un élément HTML `<div>` placé après le bouton d'ouverture. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que le menu latéral  ou l'accordéon.
    - Le bloc refermable contient le conteneur du mega-menu, un élément HTML `<div>` défini par les classes `fr-container`, `fr-container--fluid` et `fr-container-lg` et contenant :
      - Le bouton de fermeture du mega-menu, obligatoire, est un élément HTML `<button>` de type `button` défini par les classes `fr-btn` et `fr-btn--close`.
        - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
        - Le bouton dispose d'un attribut `title` et un texte explicite pour indiquer son action.
      - La grille du mega-menu, dont la documentation est disponible dans les fondamentaux (voir [grille](../../../../../core/_part/doc/grid/index.md)) composée d'une ou plusieurs colonnes comprenant :
        - Des éléments de contexte (nom de la rubrique, texte de présentation, lien vers la home de rubrique), optionnels, définis par la classe `fr-mega-menu__leader`.
        - Des noms des sous catégories, optionnels, pouvant être cliquables, dans un niveau de titre hx et définis par la classe `fr-mega-menu__category`.
        - Une liste de liens directs, obligatoire, dans un élément HTML `<ul>` défini par la classe `fr-mega-menu__list`.
          - Chaque élément `<li>` de la liste contient un lien direct défini par la classe `fr-nav__link`.
          - Le lien actif dispose d'un attribut `aria-current="page"`.

**Exemple de structure HTML complet**

:::fr-accordion[Déplier pour voir le code]{id=navigation-complex-structure}

```HTML
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
    <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <button aria-expanded="false" aria-controls="collapse-menu-01" type="menu" class="fr-nav__btn">Entrée menu</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-01">
                <ul class="fr-menu__list">
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="fr-nav__item">
            <button aria-expanded="false" aria-controls="collapse-mega-menu" type="mega-menu" class="fr-nav__btn">Entrée mega menu</button>
            <div class="fr-collapse fr-mega-menu" id="collapse-mega-menu">
                <div class="fr-container fr-container--fluid fr-container-lg">
                    <div class="fr-grid-row fr-grid-row-lg--gutters">
                        <div class="fr-col-12 fr-mb-n3v">
                            <button aria-controls="collapse-mega-menu" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="fr-nav__item">
            <a type="link" href="#" class="fr-nav__link">Lien accès direct</a>
        </li>
        <li class="fr-nav__item">
            <button aria-expanded="false" aria-controls="collapse-menu-01-active" aria-current="true" type="menu" class="fr-nav__btn">Entrée menu</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-01-active">
                <ul class="fr-menu__list">
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a aria-current="page" href="#" class="fr-nav__link">Lien de navigation actif</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```

:::

**Exemple de structure HTML avec Liens directs**

:::fr-accordion[Déplier pour voir le code]{id=navigation-liens-directs}

```HTML
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
      <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self" aria-current="page">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
    </ul>
</nav>
```

:::

**Exemple de structure HTML avec Menu déroulant**

:::fr-accordion[Déplier pour voir le code]{id=navigation-menu-deroulant}

```HTML
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
    <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <button class="fr-nav__btn" aria-expanded="false" aria-controls="collapse-menu-01" aria-current="true">Entrée menu active</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-01">
                <ul class="fr-menu__list">
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                    <li>
                      <a class="fr-nav__link" href="#" target="_self" aria-current="page">Lien de navigation</a>
                    </li>
                      <li>
                          <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                      </li>
                </ul>
            </div>
        </li>
        <li class="fr-nav__item">
            <button class="fr-nav__btn" aria-expanded="false" aria-controls="collapse-menu-02">Entrée menu</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-02">
                <ul class="fr-menu__list">
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
    </ul>
</nav>
```

:::

**Exemple de structure HTML avec Mega menu**

:::fr-accordion[Déplier pour voir le code]{id=navigation-mega-menu}

```HTML
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
    <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <button class="fr-nav__btn" aria-expanded="false" aria-controls="mega-menu-01" aria-current="true">Entrée mega menu</button>
            <div class="fr-collapse fr-mega-menu" id="mega-menu-01" tabindex="-1">
                <div class="fr-container fr-container--fluid fr-container-lg">
                    <button class="fr-btn--close fr-btn" aria-controls="mega-menu-01">Fermer</button>
                    <div class="fr-grid-row fr-grid-row-lg--gutters">
                        <div class="fr-col-12 fr-col-lg-8 fr-col-offset-lg-4--right">
                            <div class="fr-mega-menu__leader">
                                <h4 class="fr-h4 fr-mb-2v">Titre éditorialisé</h4>
                                <p>Lorem [...] elit ut.</p>
                                <a class="fr-link fr-fi-arrow-right-line fr-link--icon-right fr-link--align-on-content" href="#">Voir toute la rubrique</a>
                            </div>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self" aria-current="page">Page active</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self" aria-current="page">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
    </ul>
</nav>
```

:::

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Navigation | Oui         |          |
| Button     | Non         | Uniquement sur le mega-menu (bouton de fermeture) |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/navigation/navigation.min.css" rel="stylesheet">
```

### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant navigation nécessite l'utilisation de JavaScript.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/navigation/navigation.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/navigation/navigation.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur la navigation, les éléments suivants sont instanciés :

- Le conteneur principal, via la classe : `fr-nav`.
- Les éléments de la liste, via la classe : `fr-nav__item`.
- Le bouton d'ouverture, via la classe `fr-nav__btn`.
- La sous-section, via la classe `fr-collapse`.

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

###### navigation

:::fr-table[current]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne l'API de la sous-section ouverte. <br>_Si aucune sous-section n'est ouverte, ou si plusieurs sous-sections sont ouvertes, renvoie `null`._|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).navigation.current` |

:::

:::fr-table[hasFocus]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigation.hasFocus` |

:::

:::fr-table[index]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne ou modifie l'index de la sous-section courante. <br>_Si aucune sous-section n'est ouverte, l'index vaut 0._ |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).navigation.index` <br> `dsfr(elem).navigation.index = 2` |

:::

:::fr-table[isGrouped]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si les sous-sections du groupe sont liées en eux ou non. <br>_Si `true`, lorsqu'une sous-section est ouverte les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les sous-sections sont groupées par défaut._|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigation.isGrouped` <br> `dsfr(elem).navigation.isGrouped = true` |

:::

:::fr-table[length]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne le nombre de sous-sections dans le groupe. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).navigation.length` |

:::

:::fr-table[members]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie un tableau d'objets correspondant aux sous-sections du groupe. |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).navigation.members` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).navigation.node` |

:::

###### navigationItem

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la navigation est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigationItem.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).navigationItem.node` |

:::

###### collapseButton

:::fr-table[focus]{valign=top multiline=true}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.focus()` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du bouton de la navigation est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapseButton.node` |

:::

###### collapse

:::fr-table[conceal]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Ferme la sous-section |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.conceal()` |

:::

:::fr-table[disclose]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Ouvre la sous-section |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.disclose()` |

:::

:::fr-table[isDisclosed]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne vrai si la sous-section est ouverte |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isDisclosed` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la navigation est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isEnabled = false` |

:::

:::fr-table[group]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).collapse.group` |

:::

:::fr-table[buttons]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne un tableau de boutons d'ouverture de la sous-section |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).collapse.buttons` |

:::

:::fr-table[focus]{valign=top multiline=true}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton de la sous-section |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.focus()` |

:::

:::fr-table[parent]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parent, ici la navigation |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

:::

:::fr-table[children]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Renvoie un tableau d'instances enfants |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).children` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapse.node` |

:::

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur chaque menu déroulant de la navigation principale, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.disclose` | Ouverture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.click` | Click sur le bouton d'ouverture | CollapseButton | `data-fr-js-collapse-button` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+navigation+)

::dsfr-doc-changelog
