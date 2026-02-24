---
title: Civilité
shortTitle: Civilité
description: Cette page présente le bloc fonctionnel permettant de recueillir des informations liées à la civilité comme le sexe, la situation familiale ou le titre d’appel tout en respectant les bonnes pratiques d’inclusivité et d’accessibilité.
shortDescription: Bloc de demande de civilité avec options de personnalisation
keywords: civilité, sexe, titre d’appel, situation familiale, formulaire, accessibilité, boutons radio, select, DSFR, bonnes pratiques
cover: ./_asset/cover/cover.png
excerpt: Bloc de formulaire pour recueillir des informations sur la civilité avec recommandations d’usage et d’accessibilité.
summary: Ce bloc fonctionnel permet de recueillir des données relatives à la civilité de l’utilisateur comme le sexe, la situation familiale ou un titre d’appel, via boutons radio ou listes déroulantes. Il intègre des consignes claires sur le choix du bon composant selon le contexte, ainsi que des recommandations pour un usage respectueux et non intrusif. Des bonnes pratiques d’accessibilité sont précisées afin d’assurer une expérience inclusive et conforme aux standards.
---

# Civilité

Le bloc fonctionnel “Demande de civilité” permet à un utilisateur de renseigner sa civilité ou la façon dont il souhaite être appelé.

Il doit être utilisé lorsque votre service nécessite de demander une détermination du sexe, un titre d’appel ou une situation familiale.

## Les différents informations que l’on peut récolter avec ce bloc

### Demande du sexe

Ce bloc se compose de :

- Un fieldset contenant
    - Une légende
    - 2 éléments de fieldset contant un bouton radio
    - Un bloc de messages (facultatif)

<div class="dsfr-doc-preview">
    <fieldset class="fr-fieldset" role="group" aria-describedby="sex-1427-fieldset-legend sex-1427-fieldset-messages" id="sex-1427-fieldset">
        <legend class="fr-fieldset__legend" id="sex-1427-fieldset-legend">
            Sexe
        </legend>
        <div class="fr-fieldset__element">
            <div class="fr-radio-group">
                <input type="radio" id="sex-female-1428" name="sex">
                <label class="fr-label" for="sex-female-1428">
                    Feminin
                </label>
            </div>
        </div>
        <div class="fr-fieldset__element">
            <div class="fr-radio-group">
                <input type="radio" id="sex-male-1429" name="sex">
                <label class="fr-label" for="sex-male-1429">
                    Masculin
                </label>
            </div>
        </div>
        <div class="fr-messages-group" assert-live="assertive" id="sex-1427-fieldset-messages">
        </div>
    </fieldset>
</div>

:::fr-accordion[Extrait de code]{id='accordion-sex-request'}
```html
<fieldset class="fr-fieldset" role="group" aria-describedby="sex-1427-fieldset-legend sex-1427-fieldset-messages" id="sex-1427-fieldset">
    <legend class="fr-fieldset__legend" id="sex-1427-fieldset-legend">
        Sexe
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input type="radio" id="sex-female-1428" name="sex">
            <label class="fr-label" for="sex-female-1428">
                Feminin
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input type="radio" id="sex-male-1429" name="sex">
            <label class="fr-label" for="sex-male-1429">
                Masculin
            </label>
        </div>
    </div>
    <div class="fr-messages-group" assert-live="assertive" id="sex-1427-fieldset-messages">
    </div>
</fieldset>
```
:::

### Demande d'une situation familiale

Ce bloc se compose de :

- Un fieldset contenant
    - Un élément de fieldset contenant un select
    - Un bloc de messages (facultatif)

<div class="dsfr-doc-preview">
    <fieldset class="fr-fieldset" aria-label="Demande de situation familiale" aria-describedby="civility-family-1432-fieldset-messages">
        <div class="fr-fieldset__element">
            <div class="fr-select-group">
                <label for="family-select-1" class="fr-label">
                    Situation familiale
                </label>
                <select class="fr-select" id="family-select-1" name="family">
                    <option value="" selected disabled hidden>Sélectionner une option</option>
                    <option value="1">Célibataire</option>
                    <option value="2">Concubinage</option>
                    <option value="3">Pacsé</option>
                    <option value="4">Marié</option>
                    <option value="5">Veuf</option>
                    <option value="6">Divorcé</option>
                    <option value="7">Sans réponse</option>
                </select>
            </div>
        </div>
        <div class="fr-messages-group" assert-live="assertive" id="civility-family-1432-fieldset-messages">
        </div>
    </fieldset>
</div>

:::fr-accordion[Extrait de code]{id='accordion-situation'}
```html
<fieldset class="fr-fieldset" aria-label="Demande de situation familiale" aria-describedby="civility-family-1432-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-select-group">
            <label for="family-select-1" class="fr-label">
                Situation familiale
            </label>
            <select class="fr-select" id="family-select-1" name="family">
                <option value="" selected disabled hidden>Sélectionner une option</option>
                <option value="1">Célibataire</option>
                <option value="2">Concubinage</option>
                <option value="3">Pacsé</option>
                <option value="4">Marié</option>
                <option value="5">Veuf</option>
                <option value="6">Divorcé</option>
                <option value="7">Sans réponse</option>
            </select>
        </div>
    </div>
    <div class="fr-messages-group" assert-live="assertive" id="civility-family-1432-fieldset-messages">
    </div>
</fieldset>
```
:::

### Demande du titre d'appel

Si le nombre de titre d’appel est réduit, utiliser **des boutons radios** :

<div class="dsfr-doc-preview">
    <fieldset class="fr-fieldset" aria-label="Demande du titre d’appel" aria-describedby="civility-honorific-1-messages">
        <div class="fr-fieldset__element">
            <div class="fr-radio-group">
                <input type="radio" id="honorific-1438" name="honorific">
                <label class="fr-label" for="honorific-1438">
                    Docteur
                </label>
            </div>
        </div>
        <div class="fr-fieldset__element">
            <div class="fr-radio-group">
                <input type="radio" id="honorific-1439" name="honorific">
                <label class="fr-label" for="honorific-1439">
                    Inspecteur
                </label>
            </div>
        </div>
        <div class="fr-fieldset__element">
            <div class="fr-radio-group">
                <input type="radio" id="honorific-1440" name="honorific">
                <label class="fr-label" for="honorific-1440">
                    Sans réponse
                </label>
            </div>
        </div>
        <div class="fr-messages-group" aria-live="assertive" id="civility-honorific-1-messages">
        </div>
    </fieldset>
</div>

:::fr-accordion[Extrait de code]{id='accordion-tagline'}
```html
<fieldset class="fr-fieldset" aria-label="Demande du titre d’appel" aria-describedby="civility-honorific-1-messages">
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input type="radio" id="honorific-1438" name="honorific">
            <label class="fr-label" for="honorific-1438">
                Docteur
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input type="radio" id="honorific-1439" name="honorific">
            <label class="fr-label" for="honorific-1439">
                Inspecteur
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input type="radio" id="honorific-1440" name="honorific">
            <label class="fr-label" for="honorific-1440">
                Sans réponse
            </label>
        </div>
    </div>
    <div class="fr-messages-group" aria-live="assertive" id="civility-honorific-1-messages">
    </div>
</fieldset>
```
:::

Si le nombre de titre d’appel est supérieur à 4-5, utiliser **un select** :

<div class="dsfr-doc-preview">
    <fieldset class="fr-fieldset" aria-label="Demande du titre d’appel" aria-describedby="civility-honorific-2-messages">
        <div class="fr-fieldset__element">
            <div class="fr-select-group">
                <label for="honorific-select-1" class="fr-label">
                    Titre d’appel
                </label>
                <select class="fr-select" id="honorific-select-1" name="honorific">
                    <option value="" selected disabled hidden>Sélectionner une option</option>
                    <option value="1">Recteur</option>
                    <option value="2">Inspecteur</option>
                    <option value="3">Proviseur</option>
                    <option value="4">Professeur</option>
                    <option value="5">Docteur</option>
                    <option value="6">Principal</option>
                    <option value="7">Sans réponse</option>
                </select>
            </div>
        </div>
        <div class="fr-messages-group" aria-live="assertive" id="civility-honorific-2-messages">
        </div>
    </fieldset>
</div>

:::fr-accordion[Extrait de code]{id='accordion-tagline-2'}
```html
<fieldset class="fr-fieldset" aria-label="Demande du titre d’appel" aria-describedby="civility-honorific-2-messages">
    <div class="fr-fieldset__element">
        <div class="fr-select-group">
            <label for="honorific-select-1" class="fr-label">
                Titre d’appel
            </label>
            <select class="fr-select" id="honorific-select-1" name="honorific">
                <option value="" selected disabled hidden>Sélectionner une option</option>
                <option value="1">Recteur</option>
                <option value="2">Inspecteur</option>
                <option value="3">Proviseur</option>
                <option value="4">Professeur</option>
                <option value="5">Docteur</option>
                <option value="6">Principal</option>
                <option value="7">Sans réponse</option>
            </select>
        </div>
    </div>
    <div class="fr-messages-group" aria-live="assertive" id="civility-honorific-2-messages">
    </div>
</fieldset>
```
:::

## Bonnes pratiques

La demande de civilité binaire “madame”/”monsieur” est souvent mal utilisée et ne permet pas de récupérer correctement les informations attendues. La civilité n’est ni le sexe, le statut marital, l’état civil ni le titre.

Il est nécessaire d’expliquer pourquoi les informations sont recueillies. Le partage de ces informations peut être stressant pour les utilisateurs, voire perçu comme intrusif.

La demande de civilité peut être un sujet sensible pour les utilisateurs, elle doit donc se faire :

- seulement si cela est nécessaire,
- de manière pédagogique, en expliquant pourquoi le service a besoin de cette information via l’utilisation du texte de description,
- avec de la réassurance sur le caractère sûr, anonyme et sécurisé de la donnée.

## Accessibilité

- Il est obligatoire d’avoir soit une légende, soit un attribut `aria-label` sur le `fieldset`
- Le `fieldset` doit être lié à la légende, si elle existe, et au groupe de messages via l’attribut `aria-describedby` (dans l’ordre : `id-legend` puis `id-messages`), ajouter un `role=”group”` s’il y a plus d’un id dans l'`aria-describedby`
- Les messages d’erreur ou de validation doivent être placés dans le bloc vide `fr-messages-group`. Celui-ci possède l’attribut `aria-live="polite"` pour annoncer les messages ajoutés à la volée aux lecteurs d'écrans.
- Reprendre les éléments liés aux [boutons radios](../../../../../component/radio/_part/doc/index.md)
