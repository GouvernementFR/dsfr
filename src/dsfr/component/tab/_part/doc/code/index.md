---
boost: 0
sitemap:
  noindex: true
title: Code de l'Onglet
shortTitle: Code de l'Onglet
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Onglet.
shortDescription: Structuration de contenu avec des onglets
keywords: onglets, composant, interface, navigation, accessibilité, design système, UX, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le composant Onglets permet de regrouper plusieurs sections de contenu dans un espace réduit en affichant une seule section à la fois. Il est utile pour simplifier la lecture et améliorer l’expérience utilisateur.
summary: Cette fiche détaille le fonctionnement du composant Onglets du design système de l’État. Elle décrit ses usages recommandés, ses règles d’intégration et d’accessibilité, ainsi que son comportement responsive. Le contenu est destiné aux équipes design et développement souhaitant structurer des interfaces avec plusieurs sections de contenu apparentées tout en maintenant une expérience claire et fluide.
mesh:
  - component/accordion
  - component/modal
---

## Onglet

Le système d’onglets permet de structurer et de présenter plusieurs sections de contenu liées, en affichant une seule section à la fois dans un espace limité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Onglet** est un élément interactif permettant de basculer entre plusieurs sections de contenu.

Sa structure est la suivante :

- Le conteneur des onglets est une balise `<div>` avec la classe `fr-tabs`.
- Les onglets sont contenus dans une liste `<ul>` avec la classe `fr-tabs__list`.
  - La liste possède un rôle `tablist` et attribut `aria-label` précisant le nom du système d'onglets.
- Chaque onglet est un élément `<li>` avec le rôle `presentation` contenant :
  - Un élément `<button>` avec la classe `fr-tabs__tab` et le rôle `tab`.
    - Le bouton doit être de type "button".
    - Le bouton dispose d'un attribut `aria-selected`, sa valeur [true|false] défini si l'onglet est actif.
    - Le bouton dispose d'un attribut `tabindex`, sa valeur [0|-1] défini si l'onglet est actif [0] ou inactif [-1].
    - Le bouton est lié au panneau de contenu via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du panneau.
- Chaque contenu d'onglet est un élément `<div>` avec la classe `fr-tabs__panel` et le rôle `tabpanel`.
  - Le panneau actif possède la classe `fr-tabs__panel--selected`.
  - Le panneau est lié au bouton de l'onglet via l'attribut `aria-labelledby`, sa valeur doit correspondre à l'attribut `id` du bouton.
  - Son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

```HTML
<div class="fr-tabs">
    <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
        <li role="presentation">
            <button type="button" id="tab-1" class="fr-tabs__tab" tabindex="0" role="tab" aria-selected="true" aria-controls="tab-1-panel">Libellé onglet 1</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-2" class="fr-tabs__tab" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-2-panel">Libellé onglet 2</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-3" class="fr-tabs__tab" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-3-panel">Libellé onglet 3</button>
        </li>
    </ul>
    <div id="tab-1-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
        <!-- Contenu du panneau 1 -->
    </div>
    <div id="tab-2-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-2" tabindex="0">
        <!-- Contenu du panneau 2 -->
    </div>
    <div id="tab-3-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-3" tabindex="0">
        <!-- Contenu du panneau 3 -->
    </div>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| Tab        | Oui         |          |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tab/tab.min.css" rel="stylesheet">
```

#### Variante avec icônes

Les onglets peuvent avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/_part/doc/icon/index.md)), associée à une **classe de positionnement** de l'icône `fr-tag--icon-left`.

**Exemple de variante avec icônes**

:::fr-accordion[Déplier pour voir le code]{id=code-tabs-icons}

```HTML
<div class="fr-tabs">
    <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
        <li role="presentation">
            <button type="button" id="tab-1" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="0" role="tab" aria-selected="true" aria-controls="tab-1-panel">Libellé onglet 1</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-2" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-2-panel">Libellé onglet 2</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-3" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-3-panel">Libellé onglet 3</button>
        </li>
    </ul>
    <div id="tab-1-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
        <!-- Contenu du panneau 1 -->
    </div>
    <div id="tab-2-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-2" tabindex="0">
        <!-- Contenu du panneau 2 -->
    </div>
    <div id="tab-3-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-3" tabindex="0">
        <!-- Contenu du panneau 3 -->
    </div>
</div>
```

:::

#### Variantes 100% largeur du viewport en mobile

Les onglets peuvent s'afficher em mobile sur la totalité de la largeur du viewport avec l'utilisation de la classe `fr-tabs--viewport-width`.

**Exemple de variante 100% largeur du viewport en mobile**

```HTML
<div class="fr-tabs fr-tabs--viewport-width">
    <!-- Contenu des onglets -->
</div>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant onglet nécessite l'utilisation de JavaScript.
Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/tab/tab.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/tab/tab.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur l'Onglet, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-tabs`
- La liste des onglets, via la classe : `fr-tabs__list`
- L'onglet, via la classe : `fr-tabs__tab`
- Le panneau d'onglet, via la classe `fr-tabs__panel`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TAB');
dsfr(elem).tabsGroup.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### tabsGroup

:::fr-table[current]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne l'API de l'onglet ouvert. |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).tabsGroup.current` |

:::

:::fr-table[hasFocus]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsGroup.hasFocus` |

:::

:::fr-table[index]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne ou modifie l'index de l'onglet courant. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).tabsGroup.index` <br> `dsfr(elem).tabsGroup.index = 2` |

:::

:::fr-table[isGrouped]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si les onglets du groupe sont liés entre eux ou non. |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsGroup.isGrouped` <br> `dsfr(elem).tabsGroup.isGrouped = true` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement des onglets est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsGroup.isEnabled = false` |

:::

:::fr-table[length]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne le nombre d'onglets dans le groupe. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).tabsGroup.length` |

:::

:::fr-table[members]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie un tableau d'objets correspondant aux discloses des onglets du groupe. |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).tabsGroup.members` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabsGroup.node` |

:::

###### tabsList

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'onglet est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsList.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabsList.node` |

:::

###### tabButton

:::fr-table[focus]{valign=top multiline=true}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabButton.focus()` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'onglet est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabButton.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabButton.node` |

:::

###### tabPanel

:::fr-table[disclose]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Ouvre le panneau |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tabPanel.disclose()` |

:::

:::fr-table[isDisclosed]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne vrai si le panneau est ouvert |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabPanel.isDisclosed` |

:::

:::fr-table[group]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).tabPanel.group` |

:::

:::fr-table[buttons]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne un tableau de boutons d'ouverture du panneau |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).tabPanel.buttons` |

:::

:::fr-table[focus]{valign=top multiline=true}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton du panneau |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabPanel.focus()` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'onglet est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabPanel.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabPanel.node` |

:::

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur les onglets, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de l'onglet | tab panel | `data-fr-js-tab-panel` |
| `dsfr.disclose` | Ouverture de l'onglet | tab panel | `data-fr-js-tab-panel` |
| `dsfr.click` | Click sur le bouton d'ouverture | TabButton | `data-fr-js-tab-button` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tab+)

::dsfr-doc-changelog
