---
title: Code de la transcription
---

# Transcription

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant

Le composant Transcription permet d'afficher et de masquer du contenu textuel.

Sa structure est la suivante :
- Le **conteneur** de la transcription est un élément HTML `<div>` défini par la classe `fr-transcription`.
- Le **bouton** pour afficher/masquer le contenu est défini par la classe `fr-transcription__btn`, et son libellé constitue le titre.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
  - Le bouton est lié au collapse via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du collapse.
- Le **bloc refermable**, défini par la classe `fr-collapse`, est une `<div>` placée après le bouton. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou l'accordéon.
  - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - Le bloc refermable contient le **pied de page** de la transcription, élément HTML `<div>`, défini par la classe `fr-transcription__footer`.
    - Le pied de page contient un **conteneur**, élément HTML `<div>`, défini par la classe `fr-transcription__actions-group` pour inclure les boutons d'action.
      - Le **bouton** d'ouverture de la modale est un élément HTML `<button>`, défini par les classes `fr-btn` et `fr-btn--fullscreen`, et son titre est "Agrandir".
        - Le bouton doit être de type "button".
        - Le bouton dispose d'un attribut `aria-label`, dont la valeur est "Agrandir la transcription".
        - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
        - Le bouton est lié à la modale via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale.
  - Le bloc refermable contient une **modale**, élément HTML `<dialog>` pour afficher le contenu en plein écran, définie par la classe `fr-modal`.
    - Elle dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - la modale est lié à son titre via l'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre.
    - Le contenu de la modale reprend la structure du composant [Modale](../../../../modal/_part/doc/index.md) et son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

```HTML
<div class="fr-transcription">
    <button type="button" class="fr-transcription__btn" aria-expanded="false" aria-controls="fr-transcription-collapse">Transcription</button>
    <div class="fr-collapse" id="fr-transcription-collapse">
        <div class="fr-transcription__footer">
            <div class="fr-transcription__actions-group">
                <button aria-controls="fr-transcription-modal" aria-label="Agrandir la transcription" data-fr-opened="false" type="button" class="fr-btn--fullscreen fr-btn">Agrandir</button>
            </div>
        </div>
        <dialog id="fr-transcription-modal" class="fr-modal" aria-labelledby="fr-transcription-modal-title">
            <div class="fr-container fr-container--fluid fr-container-md">
                <div class="fr-grid-row fr-grid-row--center">
                    <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
                        <div class="fr-modal__body">
                            <div class="fr-modal__header">
                                <button aria-controls="fr-transcription-modal" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                            </div>
                            <div class="fr-modal__content">
                                <h1 id="fr-transcription-modal-title" class="fr-modal__title">
                                    Titre de la transcription
                                </h1>
                                <!-- Contenu de la transcription -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    </div>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et de la transcription doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/transcription/transcription.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/transcription/transcription.legacy.min.css" rel="stylesheet">
```

---

### JavaScript

#### Installation  du JavaScript

Pour fonctionner le composant transcription nécessite l'utilisation de JavaScript.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :
```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/transcription/transcription.module.min.js"></script>
```
<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :
```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/transcription/transcription.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur la transcription, les éléments suivants sont instanciés :
- La transcription, via la classe : `fr-transcription`
- Le bouton d'ouverture de l'accordéon, via la classe `fr-transcription__btn`
- Le collapse, via la classe `fr-collapse`
- Le bouton d'ouverture de la modale, via l'attribut' `aria-controls`
- La modale, via la classe `fr-modal`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés


#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :
```js
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### transcription

:::dsfr-doc-table[isEnabled]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la transcription est activé ou non |
| **Type** | property |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).transcription.isEnabled = false` |
:::

###### collapseButton

:::dsfr-doc-table[focus]{valign=top scroll=false}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).collapseButton.focus()` |
:::

:::dsfr-doc-table[parent]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente, ici la transcription |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |
:::

:::dsfr-doc-table[node]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapseButton.node` |
:::

###### collapse

:::dsfr-doc-table[conceal]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Ferme le collapse |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.conceal()` |
:::

:::dsfr-doc-table[disclose]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Ouvre le collapse |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.disclose()` |
:::

:::dsfr-doc-table[isDisclosed]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne vrai si le collapse est ouvert |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isDisclosed` |
:::

:::dsfr-doc-table[isEnabled]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'accordéon est activé ou non |
| **Type** | property |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).collapse.isEnabled = false` |
:::

:::dsfr-doc-table[group]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).collapse.group` |
:::

:::dsfr-doc-table[buttons]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne un tableau de boutons d'ouverture du collapse |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).collapse.buttons` |
:::

:::dsfr-doc-table[focus]{valign=top scroll=false}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton du collapse |
| **Type** | function |
| **Arguments** | none |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).collapse.focus()` |
:::

:::dsfr-doc-table[parent]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parent, ici la transcription |
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
| **Exemple** | `dsfr(elem).collapse.node` |
:::

###### modalButton

:::dsfr-doc-table[focus]{valign=top scroll=false}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).modalButton.focus()` |
:::

:::dsfr-doc-table[parent]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente, ici la transcription |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |
:::

:::dsfr-doc-table[node]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).modalButton.node` |
:::

###### modal

:::dsfr-doc-table[conceal]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Ferme la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.conceal()` |
:::

:::dsfr-doc-table[disclose]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Ouvre la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.disclose()` |
:::

:::dsfr-doc-table[isDisclosed]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne vrai si la modale est ouverte |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isDisclosed` |
:::

:::dsfr-doc-table[isEnabled]{valign=top scroll=false}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la modale est activé ou non |
| **Type** | property |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).modal.isEnabled = false` |
:::

:::dsfr-doc-table[group]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).modal.group` |
:::

:::dsfr-doc-table[buttons]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne un tableau de boutons d'ouverture de la modal |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).modal.buttons` |
:::

:::dsfr-doc-table[focus]{valign=top scroll=false}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton de la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.focus()` |
:::

:::dsfr-doc-table[parent]{valign=top scroll=false}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parent, ici la transcription |
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
| **Exemple** | `dsfr(elem).collapse.node` |
:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Aclosed+is%3Amerged+transcription)

::dsfr-doc-changelog
