---
title: Code de la modale
---

# Modale

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant

Le composant Modale permet d'afficher du contenu en plein écran.

Sa structure est la suivante :
- Le **bouton d'ouverture** de la modale est défini par la classe `fr-btn` et l'attribut `aria-controls` lié à l'ID de la modale.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si la modale est ouverte ou fermée.
- La **modale**, définie par la classe `fr-modal`, est un élément HTML `<dialog>`.
  - Elle dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - La modale est liée à son titre via l'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre.
- Son contenu est structuré :
  - D'un premier **conteneur** défini par la classe `fr-container`.
  - D'une **grille** définie par les classes `fr-grid-row` et `fr-grid-row--center`.
  - D'un **bloc de colonne** définie par les classes `fr-col-12 fr-col-md-8 fr-col-lg-6` pouvant varier en fonction de la taille de la modale désirée.
  - Le **corps** de la modale défini par la classe `fr-modal__body`, contenant :
    - **L'entête** de la modale, obligatoire, défini par la classe `fr-modal__header`, contenant :
       - Le **bouton de fermeture** de la modale, obligatoire, est un élément HTML `<button>`, défini par les classes `fr-btn` et `fr-btn--close`, dont le titre est "Fermer".
        - Le bouton doit être de type "button".
        - Le bouton est lié à la modale via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale.
    - D'un **bloc de contenu**, obligatoire, défini par la classe `fr-modal__content`, contenant :
      - Le **titre** de la modale, obligatoire, dans un niveau d'entête `<h1>` et défini par la classe `fr-modal__title`.
      - Le **contenu** de la modale, obligatoire et libre, mais nécessitant l'utilisation de balises adéquates, il n'est pas correcte par exemple de placer du texte directement dans une `<div>`.
    - **Le pied de page** de la modale, optionnel défini par la classe `fr-modal__footer`, contenant :
      - Un **groupe de boutons d'action** défini par les classes `fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left` pouvant varier en fonction de l'affichage désiré des boutons, contenant :
        - Soit un bouton primaire ([Bouton](../../../../button/_part/doc/code/index.md)).
        - Soit un groupe de boutons hiérarchisé.

> [!NOTE]
> La balise `<dialog>` peut être placée n'importe où sur la page, toutefois nous vous conseillons, si vous en avez la possibilité, d'en faire un enfant direct de la balise `<body>`.

**Exemple de structure HTML**

```HTML
<button data-fr-opened="false" aria-controls="modal" type="button" class="fr-btn">Modale simple</button>
<dialog id="modal" class="fr-modal" aria-labelledby="modal-title" aria-modal="true">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="modal" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h1 id="modal-title" class="fr-modal__title">
                            <span class="fr-icon-arrow-right-line fr-icon--lg" aria-hidden="true"></span>
                            Titre de la modale
                        </h1>
                        <p>
                          <!-- contenu de la modale -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et de la modale doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/modal/modal.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/modal/modal.legacy.min.css" rel="stylesheet">
```

#### Variantes de taille

La modale peut avoir différentes tailles en fonction du nombre de colonnes de la grille qui la compose (Voir [grille](../../../../../core/_part/doc/index.md)), sur mobile la modale sera toujours sur 12 colonnes :

- 4 colonnes en LG et 6 colonnes en MD pour une modale SM.
- Par défaut : 6 colonnes en LG et 8 colonnes en MD pour une modale MD.
- 8 colonnes en LG et 10 colonnes en MD pour une modale LG.

**Exemples de variantes de taille**

```HTML
<div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
    <!-- Contenu de la grille de la modale SM -->
</div>
<div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
    <!-- Contenu de la grille de la modale MD -->
</div>
<div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
    <!-- Contenu de la grille de la modale LG -->
</div>
```

#### Variantes avec zone d'action et boutons

La modale avec une **zone d’action** permet de guider l’utilisateur vers des actions attendues. Par défaut elle reprend les éléments de la modale simple auxquels s’ajoute une zone d’action obligatoire, composée soit d’**un bouton primaire**, soit d’**un groupe de boutons hiérarchisé**.

> [!NOTE]
> Pour les contenus trop longs pour s’afficher dans la surface prévue par la modale, un scroll permet de faire défiler l’intégralité de l'information.

**Exemple de modale avec zone d'action et boutons**

```HTML
<button data-fr-opened="false" aria-controls="modal-action" type="button" class="fr-btn">Modale avec zone d'action</button>
<dialog id="modal-action" class="fr-modal" aria-labelledby="modal-action-title">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="modal-action" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h1 id="modal-action-title" class="fr-modal__title">
                            <span class="fr-icon-arrow-right-line fr-icon--lg" aria-hidden="true"></span>
                            Titre de la modale
                        </h1>
                        <p><!-- contenu de la modale --></p>
                    </div>
                    <!-- Zone d'action de la modale -->
                    <div class="fr-modal__footer">
                        <div class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left">
                            <button type="button" class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left">Libellé bouton</button>
                            <button type="button" class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left fr-btn--secondary">Libellé bouton</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
```

#### Variantes avec zone d'action ancré en haut en mobile

La **zone d’action** de la modale peut être placée en haut de la modale sur mobile avec l'utilisation de la classe `fr-modal--top`.

**Exemple de modale avec zone d'action ancré en haut en mobile**

```HTML
<dialog id="modal-action-top" class="fr-modal fr-modal--top" aria-labelledby="modal-action-top-title" aria-modal="true">
    <!-- Contenu de la modale -->
</dialog>
```

#### Variantes modale simple non refermable au clic sur le fond

Par défaut la modale se referme au clic sur le fond de la page, il est possible de contourner ce comportement avec l'utilisation de l'attribut `data-fr-concealing-backdrop="false"`.

**Exemple de modale simple non refermable au clic sur le fond**

```HTML
<dialog id="modal-backdrop" class="fr-modal" aria-labelledby="modal-backdrop-title" aria-modal="true" data-fr-concealing-backdrop="false">
    <!-- Contenu de la modale -->
</dialog>
```

---

### JavaScript

#### Installation  du JavaScript

Pour fonctionner le composant modale nécessite l'utilisation de JavaScript.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :
```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
```
<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :
```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.


#### Instances

Sur la modale, les éléments suivants sont instanciés :
- La modale, via la classe : `fr-modal`
- Le bouton d'ouverture de la modale, via l'attribut `aria-controls`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés


#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :
```js
const elem = document.getElementById('modal');
dsfr(elem).modal.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### modal

:::dsfr-doc-table{valign=top scroll=false}
| isEnabled | |
|------|-----|
| Description | Défini si le fonctionnement de la modale est activé ou non |
| Type | property |
| Retour | true \| false |
| Exemple | `dsfr(elem).modal.isEnabled = false` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| conceal | |
|:-----|:-----|
| Description | Ferme la modale |
| Type | function |
| Arguments | none |
| Retour | none |
| Exemple | `dsfr(elem).modal.conceal()` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| disclose | |
|:-----|:-----|
| Description | Ouvre la modale |
| Type | function |
| Arguments | none |
| Retour | none |
| Exemple | `dsfr(elem).modal.disclose()` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| isDisclosed | |
|:-----|:-----|
| Description | Retourne vrai si la modale est ouverte |
| Type | property |
| Retour | Boolean |
| Exemple | `dsfr(elem).modal.isDisclosed` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| node | |
|------|-----|
| Description | Renvoie le noeud HTML de l'élément. |
| Type | property |
| Retour | DOMElement |
| Exemple | `dsfr(elem).modal.node` |
:::

###### modalButton

:::dsfr-doc-table{valign=top scroll=false}
| focus | |
|:------|:-----|
| Description | Replace le focus sur le bouton |
| Type | function |
| Arguments | none |
| Retour | true \| false |
| Exemple | `dsfr(elem).modalButton.focus()` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| parent | |
|:-----|:-----|
| Description | Retourne l'instance du dsfr parente, ici la modale |
| Type | property |
| Retour | object \| null |
| Exemple | `dsfr(elem).parent` |
:::

:::dsfr-doc-table{valign=top scroll=false}
| node | |
|------|-----|
| Description | Renvoie le noeud HTML de l'élément. |
| Type | property |
| Retour | DOMElement |
| Exemple | `dsfr(elem).modalButton.node` |
:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+modal)

::dsfr-doc-changelog
