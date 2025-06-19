---
boost: 0
sitemap:
  noindex: true
title: Code des paramètres d'affichage
shortTitle: Code des paramètres d'affichage
description: Le composant Paramètres d’affichage permet à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.
shortDescription: Choisir le thème clair ou sombre d’un site.
keywords: paramètres d’affichage, thème clair, thème sombre, accessibilité, modale, interface, design system, expérience utilisateur, header, footer
cover: ../_asset/cover/cover.png
excerpt: Le composant Paramètres d’affichage permet de basculer entre un thème clair ou sombre. Il s’intègre dans l’en-tête ou le pied de page et s’utilise via une modale dédiée.
summary: Ce document décrit les usages du composant Paramètres d’affichage, qui offre à l’usager le choix entre un thème clair ou sombre pour améliorer son confort de navigation. Il précise où et comment intégrer ce composant, les comportements attendus lors de l’ouverture de la modale et la gestion de l’arrière-plan. Le changement de thème s’opère instantanément, sans validation supplémentaire. Ce guide s’adresse aux concepteurs souhaitant offrir une personnalisation simple et accessible de l’interface.
---

## Paramètres d'affichage

Les paramètres d’affichage représentent un parcours simple permettant à l’usager d’interagir avec l’interface afin de modifier le thème d’un site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Le composant **Paramètre d'affichage** est composé d'un **bouton** qui ouvre une **modale** contenant des boutons radios pour choisir le thème du site.

- Le bouton d'ouverture de la modale doit avoir l'attribut `aria-controls` avec la valeur de l'id de la modale et l'attribut `data-fr-opened="false"`.
- La modale en taille SM doit contenir un bouton de fermeture, un titre "Paramètres d’affichage" lié au `aria-labelledby` de la dialog, et un élément `fr-display` contenant un groupe de boutons radios pour choisir le thème. Chaque bouton radio doit avoir un `id` unique, un attribut `name="fr-radios-theme"`, et un attribut `value` correspondant à la valeur du thème.

Voici un exemple de code pour utiliser le composant **Paramètre d'affichage** :

**Exemple de bouton d'ouverture**

```HTML
<button aria-controls="fr-theme-modal" data-fr-opened="false" title="Paramètres d'affichage" type="button" class="fr-btn--display fr-btn">
    Paramètres d'affichage
</button>
```

**Exemple de modale de paramètre d'affichage**

:::fr-accordion[Déplier pour voir le code]{id=display-structure}

```html
<dialog id="fr-theme-modal" class="fr-modal" aria-labelledby="fr-theme-modal-title">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="fr-theme-modal" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h1 id="fr-theme-modal-title" class="fr-modal__title">
                            Paramètres d’affichage
                        </h1>
                        <div id="fr-display" class="fr-display">
                            <fieldset class="fr-fieldset" id="display-fieldset">
                                <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="display-fieldset-legend">
                                    Choisissez un thème pour personnaliser l’apparence du site.
                                </legend>
                                <div class="fr-fieldset__element">
                                    <div class="fr-radio-group fr-radio-rich">
                                        <input value="light" type="radio" id="fr-radios-theme-light" name="fr-radios-theme">
                                        <label class="fr-label" for="fr-radios-theme-light">
                                            Thème clair
                                        </label>
                                        <div class="fr-radio-rich__pictogram">
                                            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                                                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-decorative"></use>
                                                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-minor"></use>
                                                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-major"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="fr-fieldset__element">
                                    <div class="fr-radio-group fr-radio-rich">
                                        <input value="dark" type="radio" id="fr-radios-theme-dark" name="fr-radios-theme">
                                        <label class="fr-label" for="fr-radios-theme-dark">
                                            Thème sombre
                                        </label>
                                        <div class="fr-radio-rich__pictogram">
                                            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                                                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-decorative"></use>
                                                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-minor"></use>
                                                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-major"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="fr-fieldset__element">
                                    <div class="fr-radio-group fr-radio-rich">
                                        <input value="system" type="radio" id="fr-radios-theme-system" name="fr-radios-theme">
                                        <label class="fr-label" for="fr-radios-theme-system">
                                            Système
                                            <span class="fr-hint-text">Utilise les paramètres système</span>
                                        </label>
                                        <div class="fr-radio-rich__pictogram">
                                            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                                                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/system/system.svg#artwork-decorative"></use>
                                                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/system/system.svg#artwork-minor"></use>
                                                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/system/system.svg#artwork-major"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
```

:::

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et des paramètres d'affichage doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/display/display.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```html
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/display/display.legacy.min.css" rel="stylesheet">
```

#### Variantes de bouton d'ouverture

- Lorsque le lien paramètres d’affichage est mis en avant dans l’en-tête de la page, il prend la forme d’un lien accès rapide, dans le bloc `fr-header__tools-links`.
- Lorsque le lien paramètres d’affichage est mis en avant dans le pied de page, il est intégré au niveau des mentions légales, il prend la forme d'un lien du pied de page, dans un `<li>` de classe `fr-footer__bottom-item`.

---

### JavaScript

Pour fonctionner le composant paramètre d'affichage nécessite l'utilisation de JavaScript.
Ce composant est aussi dépendant du **core** et de la **modale**.

#### Installation du JavaScript

Pour fonctionner correctement, les scripts JavaScript du paramètre d'affichage, du core, et de la modale doivent être importés.
L'import doit se faire avant la fermeture du body, et de préférence avec le fichier minifié, car plus léger.

```html
<script type="module" src="dist/core/core.min.js"></script>
<script type="module" src="dist/component/modal/modal.min.js"></script>
<script type="module" src="dist/component/display/display.min.js"></script>
```

<small>NB : Il est aussi possible d'importer le JavaScript global du DSFR `dsfr.min.js`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/core/core.legacy.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.legacy.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/display/display.legacy.min.js"></script>
```

#### Instances

Sur le paramètre d'affichage, les éléments suivants sont instanciés :

- Le bloc de paramètres, via la classe : `fr-display`.
- La modale, via la classe : `fr-modal`.
- Les boutons d'ouvertures et de fermeture de la modale, via l'attribut : `aria-controls` lié à l'id de la modale.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Afin d’**activer la gestion du thème**, il est nécessaire d’ajouter l’attribut `data-fr-scheme` sur la balise `<html>`. Si l’attribut n’est pas présent, le site s’affichera en mode clair (thème par défaut) et le composant paramètre d'affichage ne fonctionnera pas.

Si l’attribut est présent, la valeur par défaut est `system` : les préférences par défaut du navigateur/OS sont prises en compte (en se basant sur la média query `prefers-color-scheme`). Les valeurs possibles sont `light`, `dark` et `system`.

Le **changement de thème** au clic sur les boutons radios du composant paramètre d'affichage n'est pas disponible via l'API JS, il se fait automatiquement via l'ajout de l'attribut `name="fr-radios-theme"` sur l'élément `<input>` du radio et de la valeur `light`, `dark` ou `system` au niveau de l'attribut `value`.

Il est possible de **changer la valeur du thème dynamiquement**, sans passer par le composant paramètre d'affichage, via l'API `dsfr(document.documentElement).scheme.scheme` :

- `dsfr(document.documentElement).scheme.scheme = 'light'` : pour le thème clair.
- `dsfr(document.documentElement).scheme.scheme = 'dark'` : pour le thème sombre.
- `dsfr(document.documentElement).scheme.scheme = 'system'` : pour le thème système.

>[!WARNING]
>La propriété `data-fr-theme` est injectée sur l'élément `<html>` à partir de la valeur du scheme, elle ne doit pas être modifiée directement. Elle prendra automatiquement la valeur `light` ou `dark` en fonction de la valeur du scheme, ou des préférences système de l'utilisateur.

#### Script de chargement du thème

Pour éviter un effet de flash lors du chargement de la page, il est possible d'ajouter un script qui va détecter le thème préféré de l'utilisateur et appliquer le thème correspondant.

Ce script doit **s'exécuter le plus tôt possible dans le `<head>` de la page**, avant le chargement du reste de la page.

```html
<script type="module">
    const e="system",t="dark",c="dark",o="data-fr-theme",a="data-fr-scheme",r=`:root[${o}], :root[${a}]`,m=()=>{document.documentElement.setAttribute(o,c),document.documentElement.style.colorScheme="dark"},n=()=>{window.matchMedia("(prefers-color-scheme: dark)").matches&&m()};(()=>{if(document.documentElement.matches(r)){const c=(()=>{try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}})()?localStorage.getItem("scheme"):"",o=document.documentElement.getAttribute(a);switch(!0){case c===t:m();break;case c===e:n();break;case o===t:m();break;case o===e:n()}}})();
</script>
```

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur la modale du paramètre d'affichage, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top scroll=false caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.disclose` | Ouverture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.click` | Click sur le bouton d'ouverture | ModalButton | `data-fr-js-modal-button` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+display+)

::dsfr-doc-changelog
