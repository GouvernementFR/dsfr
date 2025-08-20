---
boost: 0
sitemap:
  noindex: true
title: Code de l'Interrupteur
shortTitle: Code de l'Interrupteur
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Interrupteur.
shortDescription: Basculer entre deux états opposés
keywords: interrupteur, switch, interface, interaction, accessibilité, design système, DSFR, état activé, état désactivé
cover: ../_asset/cover/cover.png
excerpt: Le composant Interrupteur permet à l’usager de choisir entre deux états opposés, comme activer ou désactiver une fonctionnalité, avec effet immédiat.
summary: Ce composant est conçu pour gérer rapidement des actions binaires dans une interface, notamment pour paramétrer des fonctionnalités comme les notifications. Il permet un usage fluide grâce à un affichage clair, des libellés explicites et une structure accessible. Il peut être utilisé seul ou en groupe et s’adapte visuellement aux contraintes d’affichage sans nécessiter de validation supplémentaire.
mesh:
  - component/radio
  - component/checkbox
  - component/segmented
---

## Interrupteur

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Interrupteur**, est un élément interactif permettant de basculer entre deux états.

Sa structure est la suivante :

- L'Interrupteur doit être contenu dans un élément HTML `<div>` défini par la classe `fr-toggle`.
- L'interrupteur est un élément HTML `<input>` de type `checkbox` défini par la classe `fr-toggle__input`.
- L'interrupteur doit être associé à un libellé `<label>` avec la classe `fr-toggle__label`.
  - L'interrupteur peut afficher de manière optionnelle un état par l'utilisation des attributs `data-fr-checked-label` et `data-fr-unchecked-label` dont les valeurs seront affichées si l'interrupteur est coché ou non.
- Une description additionnelle de l'option - optionnelle - peut être ajoutée après le libellé, elle est définie par un élément `<p>` et la classe utilitaire `fr-hint-text`.
- Un message d'erreur ou de succès peut être associé à l'interrupteur en utilisant un élément `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`. Son attribut `id` doit être associé à l'attribut `aria-describedby` de l'interrupteur. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

```HTML
<div class="fr-toggle">
    <input type="checkbox" class="fr-toggle__input" id="toggle" aria-describedby="toggle-messages toggle-hint">
    <label class="fr-toggle__label" for="toggle" data-fr-checked-label="Activé" data-fr-unchecked-label="Désactivé">Libellé de l'interrupteur</label>
    <p class="fr-hint-text" id="toggle-hint">Texte de description additionnel</p>
    <div class="fr-messages-group" id="toggle-messages" aria-live="polite">
    </div>
</div>
```

#### Groupe d'interrupteurs

Pour **regrouper plusieurs interrupteurs liées**, utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regroupé plusieurs champs ayant chacun un label. Dans le cas des interrupteurs la légende est visuellement perçue comme le label du groupe d'interrupteurs. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément interrupteur est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- Comme pour chaque interrupteur, le groupe d'interrupteurs, représenté par un fieldset, peut contenir un message d'erreur/information/succès via un bloc `fr-messages-group`.

**Exemple de groupe d'interrupteurs**

:::fr-accordion[Déplier pour voir le code]{id=toggles-structure}

```HTML
<fieldset class="fr-fieldset" aria-labelledby="toggles-legend toggles-messages">
    <legend class="fr-fieldset__legend" id="toggles-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-01" aria-describedby="toggle-01-messages">
                    <label class="fr-toggle__label" for="toggle-01">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-01-messages" aria-live="polite">
                    </div>
                </div>
            </li>
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-02" aria-describedby="toggle-02-messages">
                    <label class="fr-toggle__label" for="toggle-02">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-02-messages" aria-live="polite">
                    </div>
                </div>
            </li>
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-03" aria-describedby="toggle-03-messages">
                    <label class="fr-toggle__label" for="toggle-03">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-03-messages" aria-live="polite">
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-messages" aria-live="polite">
    </div>
</fieldset>
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
| Form       | Oui         |
| Toggle     | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/toggle/toggle.min.css" rel="stylesheet">
```

#### Variante d’interrupteurs avec statut

Il est conseillé d’afficher un statut sous l'interrupteur pour signifier textuellement l'activation et la désactivation du champ. Des attributs placés sur le `label` permettent d'ajouter ces textes, de cette manière ils peuvent être traduits. Utiliser l'attribut `data-fr-checked-label` pour le status "Activer" et `data-fr-unchecked-label` pour le status "Désactivé".

**Exemple de variante d’interrupteur avec statut**

```HTML
<div class="fr-toggle">
    <input type="checkbox" class="fr-toggle__input" id="toggle-status" aria-describedby="toggle-status-messages">
    <label class="fr-toggle__label" for="toggle-status" data-fr-checked-label="Activé" data-fr-unchecked-label="Désactivé">Libellé de l'interrupteur</label>
    <div class="fr-messages-group" id="toggle-status-messages" aria-live="polite">
    </div>
</div>
```

#### Variante d’interrupteurs avec séparateur

Il est possible d’afficher un séparateur horizontal sous l’interrupteur, avec l'utilisation de la classe `fr-toggle--border-bottom`.

**Exemple de variante d’interrupteur avec séparateur**

```HTML
<div class="fr-toggle fr-toggle--border-bottom">
    <input type="checkbox" class="fr-toggle__input" id="toggle-label-left" aria-describedby="toggle-label-left-messages">
    <label class="fr-toggle__label" for="toggle-label-left">Libellé de l'interrupteur</label>
    <div class="fr-messages-group" id="toggle-label-left-messages" aria-live="polite">
    </div>
</div>
```

#### Variantes d'états

L’interrupteur est disponible en plusieurs variantes d'états :

- L’interrupteur avec **erreur** : défini par la classe `fr-toggle----error`.
- L’interrupteur avec **succès** : défini par la classe `fr-toggle----valid`.
- L’interrupteur **désactivé** : défini par l'attribut `disabled` sur l'élément `<input>`.

Dans le cas d'utilisation d'un groupe d’interrupteurs, ces états sont définis sur le groupe (le fieldset), et non sur chaque interrupteur.

- Groupe en **erreur** : défini par la classe `fr-fieldset--error`.
- Groupe en **succès** : défini par la classe `fr-fieldset--valid`.
- Groupe **désactivé** : défini par l'attribut `disabled`.

**Exemples de variantes d'états**

:::fr-accordion[Déplier pour voir le code]{id=toggle-states}

**Erreur**

```HTML
<div class="fr-toggle fr-toggle--error">
    <input type="checkbox" class="fr-toggle__input" id="toggle-error" aria-describedby="toggle-error-messages">
    <label class="fr-toggle__label" for="toggle-error">Libellé de l'interrupteur avec erreur</label>
    <div class="fr-messages-group" id="toggle-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggle-error-message-error">Texte d’erreur obligatoire</p>
    </div>
</div>
```

**Succès**

```HTML
<div class="fr-toggle fr-toggle--valid">
    <input type="checkbox" class="fr-toggle__input" id="toggle-valid" aria-describedby="toggle-valid-messages">
    <label class="fr-toggle__label" for="toggle-valid">Libellé de l'interrupteur avec succès</label>
    <div class="fr-messages-group" id="toggle-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="toggle-valid-message-valid">Texte de validation</p>
    </div>
</div>
```

**Désactivé**

```HTML
<div class="fr-toggle">
    <input type="checkbox" class="fr-toggle__input" id="toggle-disabled" disabled aria-describedby="toggle-disabled-messages">
    <label class="fr-toggle__label" for="toggle-disabled">Libellé de l'interrupteur désactivé</label>
    <div class="fr-messages-group" id="toggle-disabled-messages" aria-live="polite">
    </div>
</div>
```

:::

**Exemple de variante d'état au niveau du groupe**

:::fr-accordion[Déplier pour voir le code]{id=toggles-states}

**Erreur**

```HTML
<fieldset class="fr-fieldset fr-fieldset--error" aria-labelledby="toggles-error-legend toggles-error-messages">
    <legend class="fr-fieldset__legend" id="toggles-error-legend">
        Légende pour l’ensemble des éléments en erreur
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggles-error-message-error">Texte d’erreur globale</p>
    </div>
</fieldset>
```

**Succès**

```HTML
<fieldset class="fr-fieldset fr-fieldset--valid" aria-labelledby="toggles-valid-legend toggles-valid-messages">
    <legend class="fr-fieldset__legend" id="toggles-valid-legend">
        Légende pour l’ensemble des éléments en succès
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggles-valid-message-error">Texte de succès global</p>
    </div>
</fieldset>
```

**Désactivé**

```HTML
<fieldset class="fr-fieldset" disabled aria-labelledby="toggles-disabled-legend toggles-disabled-messages">
    <legend class="fr-fieldset__legend" id="toggles-disabled-legend">
        Légende pour l’ensemble des éléments désactivés
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-disabled-messages" aria-live="polite">
    </div>
</fieldset>
```

:::

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant interrupteur nécessite l'utilisation de JavaScript uniquement pour la variante avec état affiché.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/toggle/toggle.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/toggle/toggle.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur l'interrupteur, les éléments suivants sont instanciés :

- L'interrupteur, via la classe : `fr-toggle__input`.
- Le libellé, via la classe `fr-toggle__label` et les attributs `checked-label` ou `unchecked-label`.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).toggleInput.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### toggleInput

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'interrupteur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggleInput.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggleInput.node` |

:::

##### toggleStatusLabel

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'interrupteur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggleStatusLabel.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggleStatusLabel.node` |

:::

:::fr-table[update]{valign=top multiline=true}

| | |
|:------|:-----|
| **Description** | Met a jour la taille de l'emplacement de l'état de l'interrupteur |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).toggleStatusLabel.update()` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+toggle+)

::dsfr-doc-changelog
