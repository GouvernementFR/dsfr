---
boost: 0
sitemap:
  noindex: true
title: Code du Mot de passe
shortTitle: Code du Mot de passe
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Mot de passe.
shortDescription: Saisie ou création de mot de passe, avec affichage masqué et recommandations de sécurité.
keywords: mot de passe, sécurité, connexion, création de compte, champ, saisie, formulaire, visibilité, ANSSI, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le champ mot de passe permet d’accompagner l’usager lors de la création ou la saisie d’un mot de passe, avec affichage masqué, retour d’erreur et règles de sécurité.
summary: Le composant mot de passe est conçu pour les cas d’usage de création de compte ou de connexion. Il propose une saisie masquée par défaut avec la possibilité d’afficher le contenu saisi, une gestion des erreurs en cas de non-conformité aux règles de sécurité, ainsi que des textes d’accompagnement dynamiques. Ce composant respecte les recommandations de l’ANSSI et s’intègre au sein des pages d’authentification du DSFR.
mesh:
  - component/alert
  - component/input
---

## Mot de passe

Le mot de passe est un élément d’interaction avec l’interface permettant d’aider l’usager à créer ou saisir un mot de passe.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Mot de passe** permet à l'utilisateur de masquer ou révéler le texte du mot de passe.
Sa structure est la suivante :

- Le Conteneur du mot de passe, obligatoire, est un élément HTML `<div>` défini par la classe `fr-password`.
- Le libellé du mot de passe, obligatoire, doit être un élément HTML `<label>` avec les classe `fr-label` et `fr-password__label`, associé au mot de passe par son attribut `for` dont la valeur est égale à l'attribut `id` du mot de passe.
- Une description additionnelle du mot de passe, optionnelle, peut être ajoutée dans le libellé, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Le champ de mot de passe est contenu dans un élément HTML `<div>` défini par la classe `fr-input-wrap`.
- Le mot de passe est un élément HTML `<input>` de type `password`, obligatoire, défini par la classe `fr-password__input`.
  - Il dispose d'un attribut `autocomplete` dont la valeur varie selon l'usage du mot de passe entre `new-password` pour la création et `current-password` pour la connexion.
  - Les attributs `autocapitalize` et `autocorrect` ont pour valeur `false` par défaut.
- Un message d'information, d'erreur ou de succès peut être associé au mot de passe en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut `id` doit être associé à l'attribut `aria-describedby` du mot de passe.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.
- Une Fonctionnalité d’affichage du mot de passe, obligatoire, est contenue dans un élément `<div>` défini par les classes `fr-password__checkbox`, `fr-checkbox-group`, et `fr-checkbox-group--sm`, contenant :
  - La case à cocher pour révéler ou masquer le mot de passe est un élément `<input>` de type `checkbox`.
  - Le libellé de la case à cocher, obligatoire, doit être un élément HTML `<label>` avec la classe `fr-label` associé à la case à cocher par son attribut `for` dont la valeur est égale à l'attribut `id` de la case à cocher.

**Exemple de structure HTML**

```HTML
<div class="fr-password">
    <label class="fr-password__label fr-label" for="password-input">
        Mot de passe
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <div class="fr-input-wrap">
        <input id="password-input" class="fr-password__input fr-input" autocapitalize="off" autocorrect="off" aria-describedby="password-input-messages" aria-required="true" name="password" autocomplete="new-password" type="password">
    </div>
    <div class="fr-messages-group" id="password-input-messages" aria-live="polite">
        <p class="fr-message">Votre mot de passe doit contenir :</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">12 caractères minimum</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">1 caractère spécial minimum</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">1 chiffre minimum</p>
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
        <input aria-label="Afficher le mot de passe" id="password-show" type="checkbox">
        <label class="fr-label" for="password-show">
            Afficher
        </label>
    </div>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Form       | Oui         |          |
| Input      | Oui         |          |
| checkbox   | Oui         |          |
| Password   | Oui         |          |
| Link       | Non         | Uniquement pour le lien de récupération du mot de passe |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/input/input.min.css" rel="stylesheet">
<link href="dist/component/checkbox/checkbox.min.css" rel="stylesheet">
<link href="dist/component/password/password.min.css" rel="stylesheet">
```

#### Variantes de validation

Un message d'information complémentaire, d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du groupe du mot de passe et doit être lié à la liste déroulante via un attribut `aria-describedby`.

Pour ajouter un état de validation à un message, ajoutez une des classes suivantes sur le paragraphe comportant le message `<p class="fr-message">` :

- Par défaut le message indique une information.
- La classe `fr-message--error` : Indique une erreur.
- La classe `fr-message--valid` : Indique un succès.

**Exemple de mot de passe après validation**

:::fr-accordion[Déplier pour voir le code]{id=code-password-validation}

```HTML
<div class="fr-password">
    <label class="fr-password__label fr-label" for="password-validation-input">
        Mot de passe
    </label>
    <div class="fr-input-wrap">
        <input class="fr-password__input fr-input" autocapitalize="off" autocorrect="off" aria-describedby="password-validation-input-messages" aria-required="true" name="password" value="x8A@" autocomplete="new-password" id="password-validation-input" type="password">
    </div>
    <div class="fr-messages-group" id="password-validation-input-messages" aria-live="polite">
        <p class="fr-message">Votre mot de passe doit contenir :</p>
        <p class="fr-message fr-message--error" data-fr-valid="validé" data-fr-error="en erreur">12 caractères minimum</p>
        <p class="fr-message fr-message--valid" data-fr-valid="validé" data-fr-error="en erreur">1 caractère spécial minimum</p>
        <p class="fr-message fr-message--valid" data-fr-valid="validé" data-fr-error="en erreur">1 chiffre minimum</p>
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
        <input aria-label="Afficher le mot de passe" id="password-validation-show" type="checkbox">
        <label class="fr--password__checkbox fr-label" for="password-validation-show">
            Afficher
        </label>
    </div>
</div>
```

:::

#### Variante de mot de passe de connexion

Le composant mot de passe peut être utilisé dans un contexte de connexion et proposer un lien vers une page de récupération du mot de passe.

**Exemple de mot de passe de connexion**

:::fr-accordion[Déplier pour voir le code]{id=code-password-connexion}

```HTML
<div class="fr-password">
    <label class="fr-password__label fr-label" for="password-connexion-input">
        Mot de passe
    </label>
    <div class="fr-input-wrap">
        <input class="fr-password__input fr-input" autocapitalize="off" autocorrect="off" aria-describedby="password-connexion-input-messages" aria-required="true" name="password" autocomplete="current-password" id="password-connexion-input" type="password">
    </div>
    <div class="fr-messages-group" id="password-connexion-input-messages" aria-live="polite">
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
        <input aria-label="Afficher le mot de passe" id="password-connexion-show" type="checkbox">
        <label class="fr--password__checkbox fr-label" for="password-connexion-show">
            Afficher
        </label>
    </div>
    <p>
        <a href="[À MODIFIER - url de la page de récupération]" class="fr-link">Mot de passe oublié ?</a>
    </p>
</div>
```

:::

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant mot de passe nécessite l'utilisation de JavaScript.
Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :
```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/password/password.module.min.js"></script>
```
<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :
```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/password/password.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le mot de passe, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-password`
- Le champs de mot de passe, via la classe : `password__input`
- Le libellé, via la classe : `fr-password__label`
- La case à cocher pour révéler ou masquer le mot de passe, via la classe : `fr-password__checkbox` et l'élément `<input>` de type `checkbox`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :
```js
const elem = document.getElementById('ID_TAB');
dsfr(elem).passwordInput.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### password

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).password.isEnabled = false` |
:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).password.node` |
:::

##### passwordInput

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordInput.isEnabled = false` |
:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordInput.node` |
:::

##### passwordLabel

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du libellé du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordLabel.isEnabled = false` |
:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordLabel.node` |
:::

##### passwordToggle

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement d'affichage du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordToggle.isEnabled = false` |
:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordToggle.node` |
:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+password+)

::dsfr-doc-changelog
