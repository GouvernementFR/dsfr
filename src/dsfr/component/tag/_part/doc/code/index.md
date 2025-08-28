---
boost: 0
sitemap:
  noindex: true
title: Code du Tag
shortTitle: Code du Tag
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Tag.
shortDescription: Le tag sert à classer ou filtrer les contenus.
keywords: tag, composant, design system, catégorisation, filtre, accessibilité, UI, UX, badge, interface, contenu
cover: ../_asset/cover/cover.png
excerpt: Le tag est un composant utilisé pour classer ou filtrer des contenus à l'aide de mots clés. Il s'adapte selon le contexte d'utilisation et respecte des règles éditoriales précises.
summary: Ce contenu présente le composant Tag dans un design system. Il explique ses usages principaux, notamment pour la catégorisation de contenus ou comme filtre interactif dans les interfaces. Des conseils pratiques et règles éditoriales y sont fournis pour garantir une intégration cohérente et accessible. Ce guide s’adresse aux designers et développeurs travaillant sur des interfaces nécessitant une organisation claire et intuitive de l’information.
mesh:
  - component/badge
  - component/card
---

## Tag

Le tag est un élément d’indication ou d’interaction (selon les contextes) permettant de catégoriser, classer, organiser les contenus d’un site à l’aide de mots clés. Il aide les usagers à rechercher et à trouver facilement une information.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Tag** est un élément permettant de marquer ou de catégoriser des éléments et peut être utilisé dans deux contextes :

- Dans le contenu (carte, en-tête, liste) : il catégorise le contenu auquel il est apposé. Il peut être cliquable ou non cliquable.
- En tant que filtre (dans une page de résultats de recherche par exemple). Dans ce cas il peut-être :
  - activable comme filtre en place à sélectionner/désélectionner,
  - supprimable, il sert de rappel à un filtre qui a été coché dans une sidebar ou une liste déroulante.

##### Tag non cliquable

Sa structure est la suivante :

- Le **Tag** est un élément HTML `<p>` défini par la classe `fr-tag`.

**Exemple de Tag non cliquable**

```HTML
<p class="fr-tag">Libellé tag non cliquable</p>
```

##### Tag cliquable

Sa structure est la suivante :

- Le **Tag cliquable** est un élément HTML `<a>` ou `<button>` avec la classe `fr-tag`.

**Exemple de Tag cliquable**

```HTML
<a href="#" class="fr-tag">Tag cliquable lien</a>
<button type="button" class="fr-tag">Libellé tag cliquable bouton</button>
```

##### Tag activable

Sa structure est la suivante :

- Le **Tag activable** est un élément HTML `<button>` avec la classe `fr-tag` et l'attribut `aria-pressed`, sa valeur [true|false] défini si le tag est activé.

**Exemple de Tag activable**

```HTML
<button type="button" class="fr-tag" aria-pressed="false">Libellé tag activable</button>
```

##### Tag supprimable

Sa structure est la suivante :

- Le **Tag activable** est un élément HTML `<button>` avec les classes `fr-tag` et `fr-tag--dismiss`.

**Exemple de Tag supprimable**

```HTML
<button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable]">Libellé tag supprimable</button>
```

##### Groupe de tags

Les tags peuvent être utilisés à plusieurs dans des groupes de tags `fr-tags-group`. Dans ce cas-là ils appliquent des espacement préalablement définis par le DSFR.

**Exemple de groupe de tags**

```HTML
<ul class="fr-tags-group">
    <li>
        <p class="fr-tag">Libellé tag 1</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag 2</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag 3</p>
    </li>
</ul>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Tag        | Oui         |          |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tag/tag.min.css" rel="stylesheet">
```

#### Variantes de tailles

Le tag est disponible en deux variantes de tailles :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-tag--sm`.

**Exemples de variantes de taille**

```HTML
<p class="fr-tag fr-tag--sm">Libellé tag non cliquable taille SM</p>
<a class="fr-tag fr-tag--sm" href="#">Libellé tag cliquable taille SM</a>
<button class="fr-tag fr-tag--sm" aria-pressed="false" type="button">Libellé tag activable taille SM</button>
<button class="fr-tag fr-tag--sm fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag taille SM]">Libellé tag supprimable taille SM</button>
```

#### Variante avec icône

Le tag peut avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/_part/doc/icon/index.md)), associée à une **classe de positionnement** de l'icône `fr-tag--icon-left`.

**Exemples de variantes avec icône**

```HTML
<p class="fr-tag fr-icon-arrow-left-line fr-tag--icon-left">Libellé tag non cliquable avec icône</p>
<a class="fr-tag fr-icon-arrow-left-line fr-tag--icon-left" href="#">Libellé tag cliquable avec icône</a>
<button class="fr-tag fr-icon-information-line fr-tag--icon-left" aria-pressed="false" type="button">Libellé tag activable avec icône</button>
```

#### Variante désactivée

Le style désactivé du tag cliquable est appliqué par le retrait de l'attribut `href` sur l'élément `<a>` ou par l'ajout de l'attribut `disabled` sur l'élément `<button>`. Le tag est alors grisé et les effets au survol et au clic sont retirés. Le pointeur de la souris prend la valeur "not-allowed" au survol du bouton ce qui change son style.
Sur le tag cliquable désactivé avec l'élément `<a>`, l'attribut `role="link"` et `aria-disabled` seront nécessaires pour les technologies d'assistance.

**Exemples de variantes désactivées**

```HTML
<a class="fr-tag" aria-disabled="true" role="link">Libellé tag cliquable désactivé</a>
<button class="fr-tag" type="button" disabled>Libellé tag cliquable désactivé</button>
<button class="fr-tag" aria-pressed="false" type="button" disabled>Libellé tag activable désactivé</button>
<button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable désactivé]" disabled>Libellé tag supprimable désactivé</button>
```

#### Accentuation

Le tag cliquable est accentuable, permettant le changement de la couleur de fond. Pour cela, ajouter la classe `fr-tag--NOM-COULEUR` au même niveau que la classe `fr-tag`.

**Exemple de variante accentuée**

```HTML
<a class="fr-tag fr-tag--green-emeraude" href="#">Libellé tag cliquable accentué</a>
```

#### Variantes de taille du groupe de tag

Le groupe de tag est disponible en deux variantes de tailles :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-tags-group--sm`.

**Exemples de variantes de taille**

:::fr-accordion[Déplier pour voir le code]{id=tags-sizes}

**Groupe de tags non cliquables SM**

```HTML
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <p class="fr-tag">Libellé tag non cliquable SM 1</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag non cliquable SM 2</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag non cliquable SM 3</p>
    </li>
</ul>
```

**Groupe de tags cliquables SM**

```HTML
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <a class="fr-tag" href="#">Libellé tag cliquable SM 1</a>
    </li>
    <li>
        <a class="fr-tag" href="#">Libellé tag cliquable SM 2</a>
    </li>
    <li>
        <a class="fr-tag" href="#">Libellé tag cliquable SM 3</a>
    </li>
</ul>
```

**Groupe de tags sélectionnables SM**

```HTML
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <button class="fr-tag" type="button" aria-pressed="false">Libellé tag sélectionnable SM 1</button>
    </li>
    <li>
        <button class="fr-tag" type="button" aria-pressed="false">Libellé tag sélectionnable SM 2</button>
    </li>
    <li>
        <button class="fr-tag" type="button" aria-pressed="false">Libellé tag sélectionnable SM 3</button>
    </li>
</ul>
```

**Groupe de tags supprimables SM**

```HTML
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable SM 1]">Libellé tag supprimable SM 1</button>
    </li>
    <li>
        <button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable SM 2]">Libellé tag supprimable SM 2</button>
    </li>
    <li>
        <button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable SM 3]">Libellé tag supprimable SM 3</button>
    </li>
</ul>
```

:::

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant Tag nécessite l'utilisation de JavaScript pour les tags activables supprimables.
Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/tag/tag.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/tag/tag.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le Tag, les éléments suivants sont instanciés :

- Le Tag activable, via la classe : `fr-tag` et l'attribut `aria-pressed`.
- Le Tag supprimable, via la classe `fr-tag--dismiss`.

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TAG');
dsfr(elem).tagDismissible.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### toggle

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du tag activable est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggle.isEnabled = false` |

:::

:::fr-table[pressed]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoi l'état du tag activable |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggle.pressed = false` |

:::

:::fr-table[toggle]{valign=top multiline=true}

| | |
|:------|:-----|
| **Description** | Fait varier l'état checked/unchecked et la valeur de l'attribut `aria-pressed` du tag activable |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).toggle.toggle()` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggle.node` |

:::

###### tagDismissible

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du tag supprimable est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tagDismissible.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tagDismissible.node` |

:::

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur le tag, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.dismiss` | Suppression du tag supprimable | TagDismissible | `data-fr-js-tag-dismissible` |
| `dsfr.click` | Click sur le tag supprimable | TagDismissible | `data-fr-js-tag-dismissible` |
| `dsfr.click` | Click sur le tag sélectionnable | Toggle | `data-fr-js-toggle` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tag+)

::dsfr-doc-changelog
