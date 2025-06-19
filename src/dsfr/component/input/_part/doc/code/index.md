---
boost: 0
sitemap:
  noindex: true
title: Code du champ de saisie
shortTitle: Code du champ de saisie
description: Le champ de saisie permet à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.
shortDescription: Saisie de données dans une interface.
keywords: champ de saisie, formulaire, saisie, interface, accessibilité, design system, UX, UI, libellé, texte d’aide
cover: ../_asset/cover/cover.png
excerpt: Ce document présente l’usage du champ de saisie pour permettre à l’usager d’entrer des informations, en précisant les cas d’usage appropriés et les bonnes pratiques d’interface.
summary: Ce contenu décrit le champ de saisie comme un composant d’interface permettant à l’usager de saisir du contenu ou des données. Il indique quand l’utiliser, avec quelles alternatives dans le cas de choix fermés, et fournit des recommandations précises sur son usage, la disposition des éléments, les messages de retour, l’accessibilité et les libellés. Il s’adresse aux concepteurs et développeurs souhaitant garantir une saisie claire, efficace et cohérente dans leurs interfaces.
---

## Champ de saisie

Le champ de saisie est un élément d’interaction avec l’interface permettant à l’usager d’entrer du contenu et/ou des données.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Un **champ de saisie** permet à l'utilisateur de saisir des données. Il existe plusieurs types de champs de saisie en fonction du type de données à saisir.

#### Champ de saisie simple

La structure HTML d'un champ de saisie de base est la suivante :

- Un conteneur `<div>` de classe `fr-input-group`, contenant :
  - Un intitulé, obligatoire, dans un élément `<label>` de classe `fr-label` et lié au champ via un attribut `for` pour décrire le champ de saisie
  - Une description additionnelle, optionnelle, dans un élément `<span>` de classe `fr-hint-text` à placer dans le `<label>`. Cette description peut être utilisée pour donner des indications sur le format attendu.
  - Un champ `<input>` de classe `fr-input` pour saisir les données. Pour une plus grande zone de saisie, il est possible d'utiliser un élément `<textarea>`.
  - Un message d'erreur/information/avertissement/succès, optionnel, dans un bloc `fr-messages-group`, lié au `aria-describedby` du champ de saisie

**Exemple de structure simple**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input">
        Libellé champ de saisie
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <input class="fr-input" aria-describedby="input-messages" id="text-input" type="text">
    <div class="fr-messages-group" id="input-messages" aria-live="polite">
    </div>
</div>
```

#### Champ de saisie avec bouton

Un champ de saisie peut être associé à un bouton pour déclencher une action. La structure HTML est la suivante :

- La structure du champ de saisie avec bouton est identique à celle du champ de saisie simple.
- La différence réside dans l'ajout d'un bouton `<button>` de classe `fr-btn` à la suite du champ de saisie `<input>`. Le champ de saisie et le bouton doivent être enveloppé dans un élément `<div>` de classe `fr-input-wrap` et une des classes suivantes :
  - `fr-input-wrap--addon` : Pour accoler un bouton d'envoi et ajouter une bordure bleue sous le champ de saisie (s'utilise avec un bouton primaire).
  - `fr-input-wrap--action` : Pour placer un bouton d'action à coté (s'utilise avec un bouton secondaire).

**Exemple de structure avec bouton d'envoi**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-button">
        Libellé champ de saisie
    </label>
    <div class="fr-input-wrap fr-input-wrap--addon">
        <input class="fr-input" aria-describedby="text-input-button-messages" id="text-input-button" type="text">
        <button type="button" class="fr-btn">Envoyer</button>
    </div>
    <div class="fr-messages-group" id="text-input-button-messages" aria-live="polite">
    </div>
</div>
```

**Exemple de structure avec bouton d'action**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-action">
        Libellé champ de saisie
    </label>
    <div class="fr-input-wrap fr-input-wrap--action">
        <input class="fr-input" aria-describedby="text-input-action-messages" id="text-input-action" type="text">
        <button type="button" class="fr-btn fr-icon-delete-line fr-btn--secondary">Supprimer le champ</button>
    </div>
    <div class="fr-messages-group" id="text-input-action-messages" aria-live="polite">
    </div>
</div>
```

#### Groupes de champs de saisie

Voir la documentation sur les [formulaires](../../../../form/_part/doc/code/index.md).

#### Attributs du champs de saisie

Les champs de saisie peuvent être enrichis avec des attributs HTML pour améliorer l'accessibilité et l'expérience utilisateur.

- `aria-describedby` : Permet d'associer un message d'erreur/information/avertissement/succès au champ de saisie. Cet attribut doit contenir l'ID du bloc de message associé.
- `spellcheck` : Permet de définir si le navigateur doit vérifier les fautes orthographiques. A désactiver, notamment, sur les champs de connexion et d'inscription. La valeur par défaut dépend du type d'élément et des navigateurs. Les valeurs possibles sont :
  - `true` pour activer la vérification orthographique.
  - `false` pour désactiver la vérification orthographique.
- `autocapitalize` : Permet de définir si le navigateur doit automatiquement capitaliser les mots saisis dans le champ. A désactivé, notamment, sur les champs d'identifiant et mot de passe. La valeur par défaut dépend de d'élément et des navigateurs. Seuls les navigateurs mobiles, et les données vocales, sont impactés. Les valeurs possibles sont :
  - `off` pour désactiver la capitalisation automatique.
  - `on` pour activer la capitalisation automatique de chaque phrase.
  - `words` pour activer la capitalisation automatique de chaque mot.
  - `characters` pour activer la capitalisation automatique de chaque caractère.
- `autocomplete` : Permet de définir si le navigateur doit proposer des suggestions de saisie pour le champ. Les valeurs possibles sont :
  - `on` (par défaut)
  - `off` pour désactiver l'autocompletion qui pourrait être ajouté automatiquement par le navigateur.
  - Des valeurs en fonction du type de données. [Voir l'ensemble des valeurs disponibles](https://developer.mozilla.org/fr/docs/Web/HTML/Attributes/autocomplete).

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du **core**, du **formulaire**, et du composant **champ de saisie** doivent être importés. Une dépendance au composant **bouton** est aussi nécessaire pour les champs de saisie avec bouton.

L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/input/input.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```html
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/form/form.legacy.min.css" rel="stylesheet">
<link href="dist/component/input/input.legacy.min.css" rel="stylesheet">
```

#### Variantes de types

Le type de champ de saisie est défini par l'attribut `type` de l'élément `<input>`. Les types de champs de saisie disponibles sont les suivants :

- `text` : Champ de saisie de texte simple
- `email` : Champ de saisie d'adresse email
- `password` : Champ de saisie de mot de passe (privilégier l'utilisation du composant [mot de passe](../../../../password/_part/doc/index.md))
- `tel` : Champ de saisie de numéro de téléphone
- `number` : Champ de saisie de nombre
- `date` : Champ de saisie de date
- `time` : Champ de saisie d'heure
- `url` : Champ de saisie d'URL
- `search` : Champ de saisie de recherche

Suivant le type de champ de saisie, des styles spécifiques peuvent être appliqués par le navigateur.

- Le type `date` ajoute un bouton de sélection de date à droite dans champ de saisie. Cette icône est redéfinie par le DSFR pour utiliser les icônes du DSFR.
- Le type `search` ajoute un bouton de réinitialisation à droite dans champ de saisie lorsque du texte a été renseigné.

#### Variante de champ avec icône

Une icône peut être ajoutée dans le champ de saisie pour apporter une information visuelle supplémentaire. La structure HTML est la suivante :

- La structure du champ de saisie avec icône est similaire à celle du champ de saisie avec bouton, avec un le champ `<input>` dans un conteneur `fr-input-wrap`.
- L'icône est ajoutée sur ce conteneur avec la classe utilitaire de l'icône souhaitée `fr-icon-NOM-ICON`.

**Exemple de structure avec icône**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-icon">
        Libellé champ de saisie
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <div class="fr-input-wrap fr-icon-alert-line">
        <input class="fr-input" aria-describedby="text-input-icon-messages" id="text-input-icon" type="text">
    </div>
    <div class="fr-messages-group" id="text-input-icon-messages" aria-live="polite">
    </div>
</div>
```

#### Variantes d'états

Le champ de saisie est disponible en plusieurs variantes d'états :

- Le champ en **erreur** : définie par la classe `fr-input-group--error`.
- Le champ avec **succès** : définie par la classe `fr-input-group--valid`.
- Le champ **désactivée** : définie par la classe `fr-input-group--disabled` **et** l'attribut `disabled` sur l'élément `<input>`.

**Exemple de champ de saisie en erreur**

```html
<div class="fr-input-group fr-input-group--error">
    <label class="fr-label" for="text-input-error">
        Libellé champ de saisie
    </label>
    <input class="fr-input" aria-describedby="text-input-error-messages" id="text-input-error" type="text">
    <div class="fr-messages-group" id="text-input-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="text-input-error-message-error">Texte d’erreur</p>
    </div>
</div>
```

**Exemple de champ de saisie avec succès**

```html
<div class="fr-input-group fr-input-group--valid">
    <label class="fr-label" for="text-input-valid">
        Libellé champ de saisie
    </label>
    <input class="fr-input" aria-describedby="text-input-valid-messages" id="text-input-valid" type="text">
    <div class="fr-messages-group" id="text-input-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="text-input-valid-message-valid">Texte de validation</p>
    </div>
</div>
```

**Exemple de champ de saisie désactivé**

```html
<div class="fr-input-group fr-input-group--disabled">
    <label class="fr-label" for="text-input-disabled">
        Libellé champ de saisie
    </label>
    <input class="fr-input" aria-describedby="text-input-disabled-messages" disabled id="text-input-disabled" type="text">
    <div class="fr-messages-group" id="text-input-disabled-messages" aria-live="polite">
    </div>
</div>
```

---

### JavaScript

Le composant Champ de saisie **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+input+)

::dsfr-doc-changelog
