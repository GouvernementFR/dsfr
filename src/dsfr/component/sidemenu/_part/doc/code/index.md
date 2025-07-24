---
boost: 0
sitemap:
  noindex: true
title: Code du Menu latéral
shortTitle: Code du Menu latéral
description: Le menu latéral est un composant de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.
shortDescription: Naviguer entre pages liées avec un menu latéral.
keywords: menu latéral, navigation, composant, design system, interface, UX, accessibilité, hiérarchie, rubrique, sommaire
cover: ./_asset/cover/cover.png
excerpt: Le menu latéral permet de structurer la navigation entre les pages d’une même rubrique ou d’un thème. Il s’utilise en complément de la navigation principale, notamment pour les sites à profondeur élevée.
summary: Ce contenu présente le menu latéral comme un composant de navigation secondaire destiné à faciliter la circulation entre les pages d’une rubrique. Il détaille ses cas d’usage, ses comportements interactifs, ses variations selon la profondeur de navigation, et les règles éditoriales à respecter. Il précise également les contraintes de structure, les bonnes pratiques en responsive, et rappelle les distinctions avec le sommaire. Ce guide est conçu pour les équipes souhaitant implémenter une navigation hiérarchique claire et accessible dans des interfaces complexes.
mesh:
  - component/breadcrumb
  - component/summary
---

## Menu latéral

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Menu latéral** permet aux utilisateurs de naviguer entre les différentes pages d’une rubrique ou d’un même thème.

Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

- Le conteneur principal, obligatoire, du menu latéral est un élément HTML `<nav>` défini par la classe `fr-sidemenu`.
  - Il dispose d'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre du menu latéral.
- Le conteneur intérieur, obligatoire, du menu latéral est un élément HTML `<div>` défini par la classe `fr-sidemenu__inner`, contenant :
  - Le bouton d'ouverture, obligatoire, affiché uniquement en mobile est un élément HTML `<button>` de type `button` défini par la classe `fr-sidemenu__btn`.
    - Le libellé du bouton indique l'action d'ouverture du menu latéral en vue mobile.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable du menu latéral est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
  - Le bloc refermable, obligatoire, défini par la classe `fr-collapse`, est un élément HTML `<div>` placé après le bouton. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou l'accordéon.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - Le bloc refermable contient :
      - Le titre, optionnel, du menu latéral est un élément HTML `<div>` défini par la classe `fr-sidemenu__title`.
      - La liste de liens ou de sous-sections, obligatoire, est un élément HTML `<ul>` placé après le titre et défini par la classe `fr-sidemenu__list`.
        - Chaque élément `<li>` défini par la classe `fr-sidemenu__item` de la liste contient :
          - Un lien, un élément HTML `<a>` défini par la classe `fr-sidemenu__link`.
          - L'élément actif de la liste est défini par la classe `fr-sidemenu__item--active` et le lien contenu dispose d'un attribut `aria-current="page"`.

**Exemple de structure HTML simple**

```HTML
<nav class="fr-sidemenu" aria-labelledby="fr-sidemenu-title">
  <div class="fr-sidemenu__inner">
    <button class="fr-sidemenu__btn" aria-controls="fr-sidemenu-wrapper" aria-expanded="false">Dans cette rubrique</button>
    <div class="fr-collapse" id="fr-sidemenu-wrapper">
      <div class="fr-sidemenu__title" id="fr-sidemenu-title">Titre de rubrique</div>
      <ul class="fr-sidemenu__list">
        <li class="fr-sidemenu__item fr-sidemenu__item--active">
          <a class="fr-sidemenu__link" href="#" target="_self" aria-current="page">Accès direct</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#" target="_self">Accès direct</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#" target="_self">Accès direct</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#" target="_self">Accès direct</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

#### Sous-sections

Le menu latéral peut contenir jusqu'à trois niveaux d’arborescence et permettent d’afficher les niveaux 1, 2 et 3 imbriqués d’une rubrique.

- Le conteneur d'une sous-section est un élément de la liste de liens `<li>` défini par la classe `fr-sidemenu__item` contenant :
  - Le bouton d'ouverture de la sous-section, un élément HTML `<button>` de type `button` défini par la classe `fr-sidemenu__btn`.
    - Le libellé du bouton indique le nom de la sous-section.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable de la sous-section est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
    - Le bouton dispose d'un attribut `aria-current`, sa valeur [true|false] défini si le bouton est actif.
  - Le bloc refermable, défini par la classe `fr-collapse`, est un élément HTML `<div>` placé après le bouton.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - Le bloc refermable contient une liste de liens pouvant contenir un troisième niveau d'imbrication du menu latéral basé sur la même structure de sous-section.

**Exemple de structure HTML**

:::fr-accordion[Déplier pour voir le code]{id=sidemenu-complex-structure}

```HTML
<nav class="fr-sidemenu" role="navigation" aria-labelledby="sidemenu-title">
  <div class="fr-sidemenu__inner">
    <button aria-expanded="false" aria-controls="sidemenu" type="button" class="fr-sidemenu__btn">Dans cette rubrique</button>
    <div class="fr-collapse" id="sidemenu">
      <p class="fr-sidemenu__title" id="sidemenu-title">Titre de rubrique</p>
      <ul class="fr-sidemenu__list">
        <li class="fr-sidemenu__item">
          <button aria-expanded="true" aria-controls="sidemenu-submenu-level-02" aria-current="true" type="button" class="fr-sidemenu__btn">Entrée menu active</button>
          <div class="fr-collapse" id="sidemenu-submenu-level-02">
            <ul class="fr-sidemenu__list">
              <li class="fr-sidemenu__item">
                <a href="#" class="fr-sidemenu__link">Accès direct niveau 2</a>
              </li>
              <li class="fr-sidemenu__item">
                <button aria-expanded="true" aria-controls="sidemenu-submenu-level-03" aria-current="true" type="button" class="fr-sidemenu__btn">Entrée menu active</button>
                <div class="fr-collapse" id="sidemenu-submenu-level-03">
                  <ul class="fr-sidemenu__list">
                    <li class="fr-sidemenu__item">
                      <a href="#" class="fr-sidemenu__link">Accès direct niveau 3</a>
                    </li>
                    <li class="fr-sidemenu__item">
                      <a aria-current="page" href="#" class="fr-sidemenu__link">Accès direct niveau 3</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="fr-sidemenu__item">
          <a href="#" class="fr-sidemenu__link">Accès direct</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
| Sidemenu   | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/sidemenu/sidemenu.min.css" rel="stylesheet">
```

#### Variante de menu latéral fixe

Le menu latéral peut s’afficher de manière fixe sur votre page, afin de rester visible tout au long de la navigation de l’utilisateur sur la page ouverte avec l'utilisation de la classe `fr-sidemenu--sticky`.

**Exemples de variante de menu latéral fixe**

```HTML
<nav class="fr-sidemenu fr-sidemenu--sticky" role="navigation" aria-labelledby="sidemenu-sticky-title">
    <!-- Contenu du menu latéral fixe -->
</nav>
```

#### Variante de menu latéral fixe, affiché sur 100% de la hauteur de page

Le menu latéral peut s’afficher de manière fixe sur 100% de la hauteur de votre page avec l'utilisation de la classe `fr-sidemenu--sticky-full-height`.

**Exemples de variante de menu latéral fixe, affiché sur 100% de la hauteur de page**

```HTML
<nav class="fr-sidemenu fr-sidemenu--sticky-full-height" role="navigation" aria-labelledby="sidemenu-sticky-full-height-title">
    <!-- Contenu du menu latéral fixe, affiché sur 100% de la hauteur de page -->
</nav>
```

#### Variante de menu latéral à droite de la page

Le menu latéral peut être placé à droite de la page avec l'utilisation de la classe `fr-sidemenu--right` afin que la bordure se positionne à gauche du menu.
On peut également le rendre fixe avec l'utilisation de la classe `fr-sidemenu--sticky`.

**Exemples de variante de menu latéral à droite de la page**

```HTML
<nav class="fr-sidemenu fr-sidemenu--right" role="navigation" aria-labelledby="sidemenu-right-title">
    <!-- Contenu du menu latéral à droite de la page -->
</nav>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant menu latéral nécessite l'utilisation de JavaScript.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/sidemenu/sidemenu.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/sidemenu/sidemenu.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le menu latéral, les éléments suivants sont instanciés :

- La liste de liens, via la classe : `fr-sidemenu__list`.
- Les éléments de la liste, via la classe : `fr-sidemenu__item`.
- Le bouton d'ouverture, via la classe `fr-sidemenu__btn`.
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

##### sidemenuList

:::fr-table[current]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne l'API de la sous-section ouverte. <br>_Si aucune sous-section n'est ouverte, ou si plusieurs sous-sections sont ouvertes, renvoie `null`._|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).sidemenuList.current` |

:::

:::fr-table[hasFocus]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).sidemenuList.hasFocus` |

:::

:::fr-table[index]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne ou modifie l'index de la sous-section courante. <br>_Si aucune sous-section n'est ouverte, l'index vaut 0._ |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).sidemenuList.index` <br> `dsfr(elem).sidemenuList.index = 2` |

:::

:::fr-table[isGrouped]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si les sous-sections du groupe sont liées en eux ou non. <br>_Si `true`, lorsqu'une sous-section est ouverte les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les sous-sections sont groupées par défaut._|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).sidemenuList.isGrouped` <br> `dsfr(elem).sidemenuList.isGrouped = true` |

:::

:::fr-table[length]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne le nombre de sous-sections dans le groupe. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).sidemenuList.length` |

:::

:::fr-table[members]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie un tableau d'objets correspondant aux sous-sections du groupe. |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).sidemenuList.members` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).sidemenuList.node` |

:::

##### sidemenuItem

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du menu latéral est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).sidemenuItem.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).sidemenuItem.node` |

:::

##### collapseButton

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
| **Description** | Défini si le fonctionnement du bouton du menu latéral est activé ou non |
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

##### collapse

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
| **Description** | Défini si le fonctionnement du menu latéral est activé ou non |
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
| **Description** | Retourne l'instance du dsfr parent, ici le menu latéral |
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

Dans la version mobile du menu latéral et sur chaque menu déroulant du menu latéral, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.disclose` | Ouverture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.click` | Click sur le bouton d'ouverture | CollapseButton | `data-fr-js-collapse-button` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+sidemenu+)

::dsfr-doc-changelog
