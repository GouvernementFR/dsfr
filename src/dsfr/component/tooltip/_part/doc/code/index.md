---
title: Code de l'Infobulle
---
# Infobulle

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant
Il existe deux types d’infobulles suivant son déclenchement.

##### Déclenchement au survol
L’infobulle au survol se compose des éléments suivants :

1. Une zone de déclenchement :
    - Doit être un element focusable (`<a>`, `<input>`, `<select>`, `<textarea>`, etc) pour déclencher l'affichage du conteneur à la prise de focus.
    - Elle est liée au conteneur via l'attribut `aria-describedby`, sa valeur doit correspondre à l'attribut `id` du conteneur.
2. Un conteneur pour le texte de l'infobulle :
    - Représenté par un élément `<span>`.
    - Doit avoir un attribut `id` obligatoire, pour être lié à la zone de déclenchement.
    - Doit avoir un attribut `role="tooltip"`.
    - Doit avoir les classes `fr-tooltip` et `fr-placement`.

**Exemple de structure HTML**

```HTML
<a class="fr-link" aria-describedby="tooltip-1" href="[à modifier]">
    Exemple
</a>
<span class="fr-tooltip fr-placement" id="tooltip-1" role="tooltip">
    Lorem [...] elit ut.
</span>
```

##### Déclenchement au clic
L’infobulle au clic se compose des éléments suivants :

1. Une zone de déclenchement :
    - La zone de déclenchement est une balise `<button type="button">`.
    - Elle est liée au conteneur via l'attribut `aria-describedby`, sa valeur doit correspondre à l'attribut `id` du conteneur.
    - Doit avoir les classes `fr-btn--tooltip fr-btn`.

2. Un conteneur pour le texte de l'infobulle :
    - Représenté par un élément `<span>`.
    - Doit avoir un attribut `id` obligatoire, pour être lié à la zone de déclenchement.
    - Doit avoir un attribut `role="tooltip"`.
    - Doit avoir les classes `fr-tooltip` et `fr-placement`.

**Exemple de structure HTML**

```HTML
<button class="fr-btn--tooltip fr-btn" type="button" aria-describedby="tooltip-2">
    Information contextuelle
</button>
<span class="fr-tooltip fr-placement" id="tooltip-2" role="tooltip">
    Lorem [...] elit ut.
</span>
```

---

### CSS

#### Installation

Pour fonctionner correctement, le style CSS de l'infobulle et du core doit être importé dans la page. Les fichiers doivent être inclus dans le `<head>` avant le contenu de la page.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tooltip/tooltip.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/tooltip/tooltip.legacy.min.css" rel="stylesheet">
```

---

### JavaScript

Pour fonctionner le composant infobulle nécessite l'utilisation de JavaScript.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/tooltip/tooltip.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/tooltip/tooltip.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le tooltip, les éléments suivants sont instanciés :
- Le conteneur, via la classe : `fr-tooltip`
- Le déclencheur, via l'attribut : `aria-describedby` lié à l'`id` du conteneur

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :
```js
const elem = document.getElementById('ID_TOOLTIP');
dsfr(elem).tooltip.show();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### tooltip

:::dsfr-doc-table[parent]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |
:::

:::dsfr-doc-table[children]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Renvoie un tableau d'instances enfants |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).children` |
:::

:::dsfr-doc-table[node]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tooltip.node` |
:::

:::dsfr-doc-table[isEnabled]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'infobulle est activé ou non |
| **Type** | property |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).tooltip.isEnabled = false` |
:::

:::dsfr-doc-table[isShown]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Défini si l'infobulle est affichée ou non |
| **Type** | property |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).tooltip.isShown = false` |
:::

:::dsfr-doc-table[show]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Affiche l'infobulle |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tooltip.show()` |
:::

:::dsfr-doc-table[hide]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Cache l'infobulle |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tooltip.hide()` |
:::

:::dsfr-doc-table[mode]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Défini le mode de placement de l'infobulle |
| **Type** | property |
| **Retour** | 'placement_auto' \| 'placement_manual' |
| **Exemple** | `dsfr(elem).tooltip.mode = 'placement_manual'` |
:::

:::dsfr-doc-table[align]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Défini l'alignement vertical de l'infobulle en `mode='placement_manual'` |
| **Type** | property |
| **Retour** | 'align_start' \| 'align_center' \| 'align_end' |
| **Exemple** | `dsfr(elem).tooltip.align = 'align_start'` |
:::

:::dsfr-doc-table[place]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Défini le placement de l'infobulle par rapport au déclencheur en `mode='placement_manual'` |
| **Type** | property |
| **Retour** | 'placement--top' \| 'placement--bottom' \| 'placement--left' \| 'placement--right' |
| **Exemple** | `dsfr(elem).tooltip.place = 'placement--top'` |
:::

###### tooltipReferent

:::dsfr-doc-table[parent]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |
:::

:::dsfr-doc-table[children]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Renvoie un tableau d'instances enfants |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).children` |
:::

:::dsfr-doc-table[node]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tooltipReferent.node` |
:::

:::dsfr-doc-table[isEnabled]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du déclencheur est activé ou non |
| **Type** | property |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).tooltipReferent.isEnabled = false` |
:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tooltip+)

::dsfr-doc-changelog
