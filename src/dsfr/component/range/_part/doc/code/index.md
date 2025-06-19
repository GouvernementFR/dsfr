---
boost: 0
sitemap:
  noindex: true
title: Code du Curseur
shortTitle: Code du Curseur
description: Présentation du composant Curseur permettant à l’usager de sélectionner une valeur entre un minimum et un maximum de manière intuitive.
shortDescription: Sélection d’une valeur sur une échelle
keywords: curseur, range, sélection, valeur, interface, DSFR, accessibilité, filtre, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Curseur permet à l’usager de définir une valeur dans une plage donnée, souvent utilisée pour ajuster un paramètre de façon dynamique et visuelle.
summary: Le curseur est utile lorsque la saisie d’une valeur approximative est suffisante, comme pour filtrer des contenus ou ajuster des préférences. Il propose différentes variantes - simple, double ou cranté, avec ou sans affichage des bornes. Non personnalisable, il est conçu pour un usage fluide et accessible, avec retour visuel en temps réel sur les valeurs sélectionnées.
---

## Curseur

Le curseur est un élément d’interaction avec l’interface permettant à l’usager de délimiter manuellement une sélection par rapport à une valeur minimale et maximale.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Curseur** permet à l'utilisateur de sélectionner une valeur dans une plage définie.
Sa structure est la suivante :

- Le conteneur global du composant curseur doit être un élément HTML `<div>` défini par la classe `fr-range-group`.
- Le libellé du curseur, obligatoire, doit être un élément HTML `<label>` avec la classe `fr-label`.
  - Son attribut `id` doit être associé à l'attribut `aria-labelledby` du curseur.
- Une description additionnelle du curseur, optionnelle, peut être ajoutée dans le libellé, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- L'élément curseur est contenu dans un élément HTML `<div>` défini par la classe `fr-range`.
- La valeur courante affichée du curseur est un élément HTML `<span>` défini par la classe `fr-range__output`.
- Le curseur est un élément HTML `<input>` de type `range` défini par la classe `fr-range__input`.
  - La valeur par défaut du curseur est définie par l'attribut `value`.
  - Les valeurs minimales et maximale du curseur autorisées sont définies par les attribut `min` et `max` du curseur.
  - Le pas du curseur est défini par l'attribut `step`.
- Les valeurs minimales et maximales affichées, optionnelles, sont des éléments HTML `<span>` définis par les classes `fr-range__min` et `fr-range__max` et disposant d'un attribut `aria-hidden="true"`.
- Un message d'erreur ou de succès peut être associé au curseur en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut `id` doit être associé à l'attribut `aria-describedby` du curseur.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML**

```HTML
<div class="fr-range-group">
    <label id="range-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range">
        <span class="fr-range__output">50</span>
        <input name="range" type="range" aria-labelledby="range-label" max="100" value="50" aria-describedby="range-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-messages" aria-live="polite">
    </div>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et du curseur doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/range/range.min.css" rel="stylesheet">
```

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/range/range.legacy.min.css" rel="stylesheet">
```

#### Variante de taille

Le curseur est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation.
Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<div class="fr-range">` :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-range--sm`.

**Exemple de variante de taille**

```HTML
<div class="fr-range-group">
    <label id="range-sm-label" class="fr-label">Libellé</label>
    <div class="fr-range fr-range--sm">
      <!-- Contenu du curseur -->
    </div>
</div>
```

#### Variante de curseur cranté

Le curseur peut afficher des crans avec l'utilisation de la classe `fr-range--step`.

**Exemple de curseur cranté**

```HTML
<div class="fr-range-group">
    <label id="range-step-label" class="fr-label">Libellé</label>
    <div class="fr-range fr-range--step">
      <!-- Contenu du curseur -->
    </div>
</div>
```

#### Variante de curseur avec préfixe et suffixe

Le curseur peut afficher des préfixe et suffixe autour des valeurs courante, minimale et maximale avec l'utilisation des attributs `data-fr-prefix` et `data-fr-suffix` sur l'élément `<div class="fr-range">`.

**Exemple de curseur avec préfixe et suffixe**

```HTML
<div class="fr-range-group">
    <label id="range-prefix-suffix-label" class="fr-label">Libellé</label>
    <div class="fr-range" data-fr-prefix="~" data-fr-suffix="%">
      <!-- Contenu du curseur -->
    </div>
</div>
```

#### Variantes d'états

Les états d'erreur/succès/désactivé sont gérés au niveau du groupe.
Pour ajouter un état à un curseur, ajoutez une des classes suivantes :

- La classe `fr-range-group--error` : Indique une erreur.
- La classe `fr-range-group--valid` : Indique un succès.
- L'attribut `fr-range-group--disabled` : Indique un état désactivé.
  - Dans le cas du curseur désactivé l'ajout de l'attribut `disabled` sur le ou les éléments `<input>` est nécessaire.

Un message d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du groupe du curseur et doit être lié au curseur via un attribut `aria-describedby`.

**Exemple de curseur avec erreur**

:::fr-accordion[Déplier pour voir le code]{id=code-range-erreur}

```HTML
<div class="fr-range-group fr-range-group--error">
    <label id="range-error-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range">
        <span class="fr-range__output">50</span>
        <input id="range-error" name="range-error" type="range" aria-labelledby="range-error-label" max="100" value="50" aria-describedby="range-error-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="range-error-message-error">Valeur sélectionnée impossible</p>
    </div>
</div>
```

:::

**Exemple de curseur avec succès**

:::fr-accordion[Déplier pour voir le code]{id=code-range-succes}

```HTML
<div class="fr-range-group fr-range-group--succes">
    <label id="range-error-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range">
        <span class="fr-range__output">50</span>
        <input name="range-error" type="range" aria-labelledby="range-error-label" max="100" value="50" aria-describedby="range-error-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-error-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="select-valid-message-valid">Texte de validation</p>
    </div>
</div>
```

:::

**Exemple de curseur désactivée**

:::fr-accordion[Déplier pour voir le code]{id=code-range-disabled}

```HTML
<div class="fr-range-group fr-range-group--disabled">
    <label id="range-disabled-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range fr-range--double">
        <span class="fr-range__output">20</span>
        <input name="range-disabled" type="range" aria-labelledby="range-disabled-label" max="100" value="20" disabled aria-describedby="range-disabled-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-disabled-messages" aria-live="polite">
    </div>
</div>
```

:::

#### Variante de curseur double

Le curseur double permet de disposer de deux poignées de selection pour les valeurs minimale et maximale par l'ajout d'un second élément HTML `<input>` de type `range`.

**Exemple de curseur double**

```HTML
<div class="fr-range-group">
    <label id="range-double-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range fr-range--double">
        <span class="fr-range__output">25</span>
        <input name="range-double" type="range" aria-labelledby="range-double-label" max="100" value="25" aria-describedby="range-double-messages">
        <input name="range-double-2" type="range" aria-labelledby="range-double-label" max="100" value="75" aria-describedby="range-double-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-double-messages" aria-live="polite">
    </div>
</div>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant curseur nécessite l'utilisation de JavaScript.
Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/range/range.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le JS global du DSFR `dsfr.module.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/range/range.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le curseur, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-range`
- Le ou les curseurs dans leur conteneur, via la classe : `fr-range` et les éléments `<input>` de type `<range>`
- La valeur courante, via la classe : `fr-range__output`
- Les valeurs minimale et maximale, via les classes `fr-range__min` et `fr-range__max`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TAB');
dsfr(elem).range.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### range

:::fr-table[isEnabled]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du curseur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).range.isEnabled = false` |

:::

:::fr-table[node]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).range.node` |

:::

###### rangeInput

:::fr-table[value]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Retourne la valeur courante du curseur. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).rangeInput.value` |

:::

:::fr-table[isEnabled]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du curseur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).rangeInput.isEnabled = false` |

:::

:::fr-table[node]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).rangeInput.node` |

:::

###### rangeOutput

:::fr-table[isEnabled]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du curseur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).rangeOutput.isEnabled = false` |

:::

:::fr-table[node]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).rangeOutput.node` |

:::

###### rangeLimit

:::fr-table[isEnabled]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du curseur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).rangeLimit.isEnabled = false` |

:::

:::fr-table[node]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).rangeLimit.node` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+range+)

::dsfr-doc-changelog
