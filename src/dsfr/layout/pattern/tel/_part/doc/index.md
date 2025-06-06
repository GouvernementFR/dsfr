---
title: Numéro de téléphone
shortTitle: Numéro de téléphone
description: Cette page présente le modèle de champ de saisie d’un numéro de téléphone en précisant la structure attendue, les règles de validation, les bonnes pratiques et les exigences d’accessibilité.
shortDescription: Champ de saisie de numéro de téléphone avec validation
keywords: numéro de téléphone, champ de saisie, format, accessibilité, validation, message d’erreur, input tel, DSFR
cover: ./_asset/cover/cover.png
excerpt: Champ de formulaire dédié à la saisie d’un numéro de téléphone avec format attendu, messages d’erreur et accessibilité.
summary: Ce bloc fonctionnel permet de recueillir un numéro de téléphone à l’aide d’un champ structuré conforme au Design Système de l’État. Il inclut un label avec exemple de format, un champ input de type tel, et des messages d’erreur contextualisés. La page fournit également des recommandations pour améliorer la compréhension du format attendu et garantir l’accessibilité pour tous les utilisateurs.
---

# Numéro de téléphone

Le bloc fonctionnel de “demande d’un numéro de téléphone” permet d’aider un utilisateur à saisir un numéro de téléphone.

## Structure

Le champ téléphone est composé :

- d’un label - obligatoire
- et d’une description précisant le format attendu - obligatoire
- un input de type “tel” - obligatoire
- un bloc de messages d’erreur/succès - optionnel

<div class="dsfr-doc-preview">
<div class="fr-input-group">
    <label class="fr-label" for="tel-1">
        Numéro de téléphone
        <span class="fr-hint-text">Format attendu : (+33) 1 22 33 44 55</span>
    </label>
    <input class="fr-input" autocomplete="tel" aria-describedby="tel-1-message-error" id="tel-1422" type="tel">
    <div class="fr-messages-group" aria-live="assertive" id="tel-1-messages">
    </div>
</div>
</div>

```html
<div class="fr-input-group">
    <label class="fr-label" for="tel-1">
        Numéro de téléphone
        <span class="fr-hint-text">Format attendu : (+33) 1 22 33 44 55</span>
    </label>
    <input class="fr-input" autocomplete="tel" aria-describedby="tel-1-message-error" id="tel-1422" type="tel">
    <div class="fr-messages-group" aria-live="assertive" id="tel-1-messages">
    </div>
</div>
```

**Avec erreur :**

- ajouter la classe `fr-input-group--error` sur l’`input-group`
- insérer le texte d’erreur dans un `<p class="fr-message fr-message--error">` à l’intérieur du `messages-group`

<div class="dsfr-doc-preview">
<div class="fr-input-group fr-input-group--error">
    <label class="fr-label" for="tel-1">
        Numéro de téléphone
        <span class="fr-hint-text">Format attendu : (+33) 1 22 33 44 55</span>
    </label>
    <input class="fr-input" autocomplete="tel" aria-describedby="tel-1-message-error" id="tel-1422" type="tel">
    <div class="fr-messages-group" aria-live="assertive" id="tel-1-messages">
        <p class="fr-message fr-message--error">Le format de numéro de téléphone saisie n’est pas valide. Le format attendu est : (+33) 2 43 55 55 55</p>
    </div>
</div>
</div>

```html
<div class="fr-input-group fr-input-group--error">
    <label class="fr-label" for="tel-1">
        Numéro de téléphone
        <span class="fr-hint-text">Format attendu : (+33) 1 22 33 44 55</span>
    </label>
    <input class="fr-input" autocomplete="tel" aria-describedby="tel-1-message-error" id="tel-1422" type="tel">
    <div class="fr-messages-group" aria-live="assertive" id="tel-1-messages">
        <p class="fr-message fr-message--error">Le format de numéro de téléphone saisie n’est pas valide. Le format attendu est : (+33) 2 43 55 55 55</p>
    </div>
</div>
```

## Bonnes pratiques

- Veillez à préciser le format attendu en donnant un exemple de numéro de téléphone explicite
- Le message d’erreur doit proposer un exemple de format différent de celui dans le label.
- Utiliser l’attribut `autocomplete="tel"` sur l'`input` si la demande concerne un numéro international (avec indicateur).

## Accessibilité

- Le label doit être lié à l’input via l’attribut `“for”`.
- Les messages d’erreur ou de validation doivent être placés dans le bloc vide `fr-messages-group`. Celui-ci possède l’attribut `aria-live="assertive"` pour annoncer les messages ajoutés à la volée aux lecteurs d'écrans.
- L’input doit être lié au groupe de messages via l’attribut `aria-describedby`.