---
title: Société
shortTitle: Société
description: Cette page présente le bloc fonctionnel permettant de recueillir les informations d’une société telles que le numéro SIRET, l’adresse de siège social, le type de société et le représentant moral, avec recommandations d’accessibilité.
shortDescription: Bloc de saisie des données relatives à une société
keywords: société, SIRET, siège social, type de société, représentant moral, formulaire, accessibilité, entreprise, DSFR
cover: ./_asset/cover/cover.png
excerpt: Bloc de formulaire pour la collecte des informations d’une société comme l’identification, l’adresse ou la forme juridique.
summary: Ce modèle de bloc fonctionnel permet de recueillir les informations nécessaires sur une société dans un service en ligne. Il couvre notamment la saisie du numéro de SIRET avec lien vers l’annuaire officiel, l’adresse du siège social, le type de société via un menu déroulant, et les coordonnées du représentant moral. La page fournit aussi des recommandations d’accessibilité pour une intégration conforme aux standards du Design Système de l’État.
---

# Société

La demande de renseignement sur la société permet d’aider un utilisateur à saisir ses renseignements concernant sa société.

Il doit être utilisé votre services nécessite de demander à un utilisateur des informations en lien avec sa société : SIRET, adresse de siège social, type de société, représentant moral.

## Structure

**Demande d’un numéro de SIRET**

Ce bloc se compose de :

- un label “numéro de SIRET” - obligatoire
- d’un champ de saisie - obligatoire
- d’un lien vers l’annuaire des entreprises - obligatoire

<div class="dsfr-doc-preview">
<fieldset class="fr-fieldset" aria-label="SIRET de l'entreprise" id="siret-1632-fieldset" aria-labelledby="siret-1632-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label for="siret-1-input" class="fr-label">
                Numéro de SIRET
            </label>
            <input class="fr-input" aria-describedby="siret-1-messages" name="siret" type="text" id="siret-1-input">
            <div class="fr-messages-group" id="siret-1-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-mt-n1v fr-fieldset__element">
        <a class="fr-link" target="_blank" rel="noopener" title="Annuaire des entreprises - nouvelle fenêtre" href="https://annuaire-entreprises.data.gouv.fr/">
            Annuaire des entreprises
        </a>
    </div>
    <div class="fr-messages-group" id="siret-1632-fieldset-messages" aria-live="assertive">
    </div>
</fieldset>
</div>

:::fr-accordion[Extrait de code]{id=‘accordion-siret’}

```html
<fieldset class="fr-fieldset" aria-label="SIRET de l'entreprise" id="siret-1632-fieldset" aria-labelledby="siret-1632-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label for="siret-1-input" class="fr-label">
                Numéro de SIRET
            </label>
            <input class="fr-input" aria-describedby="siret-1-messages" name="siret" type="text" id="siret-1-input">
            <div class="fr-messages-group" id="siret-1-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-mt-n1v fr-fieldset__element">
        <a class="fr-link" target="_blank" rel="noopener" title="Annuaire des entreprises - nouvelle fenêtre" href="https://annuaire-entreprises.data.gouv.fr/">
            Annuaire des entreprises
        </a>
    </div>
    <div class="fr-messages-group" id="siret-1632-fieldset-messages" aria-live="assertive">
    </div>
</fieldset>
```
:::

**Demande d’une adresse de siège social**

Ce bloc se compose de :

- un champ “Dénomination” - obligatoire
- un champ “Adresse” - obligatoire
- un champ “Complément d’adresse” - optionnel
- un champ “Lieu-dit, commune déléguée ou boîte postale”
- un champ “Code postal” - obligatoire
- un champ “Ville ou commune” - obligatoire
- un champ “Cedex” - optionnel
- une liste déroulante - select “Pays” - recommandé

<div class="dsfr-doc-preview">
<fieldset class="fr-fieldset" id="address-1649-fieldset" aria-labelledby="address-1649-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1642">
                Dénomination
            </label>
            <input class="fr-input" aria-describedby="address-item-1642-messages" name="name" id="address-item-1642" type="text">
            <div class="fr-messages-group" id="address-item-1642-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1643">
                Adresse
                <span class="fr-hint-text">Numéro et voie</span>
            </label>
            <input class="fr-input" aria-describedby="address-item-1643-messages" name="address-line1" id="address-item-1643" type="text">
            <div class="fr-messages-group" id="address-item-1643-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1644">
                Complément d’adresse (optionnel)
                <span class="fr-hint-text">Bâtiment, immeuble, escalier et numéro d’appartement</span>
            </label>
            <input class="fr-input" aria-describedby="address-item-1644-messages" name="address-line2" id="address-item-1644" type="text">
            <div class="fr-messages-group" id="address-item-1644-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1645">
                Lieu-dit, commune déléguée ou boîte postale
            </label>
            <input class="fr-input" aria-describedby="address-item-1645-messages" name="address-level3" id="address-item-1645" type="text">
            <div class="fr-messages-group" id="address-item-1645-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--postal">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1646">
                Code postal
            </label>
            <input class="fr-input" aria-describedby="address-item-1646-messages" name="postal-code" id="address-item-1646" type="text">
            <div class="fr-messages-group" id="address-item-1646-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element fr-fieldset__element--inline@md fr-fieldset__element--inline-grow">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1647">
                Ville ou commune
            </label>
            <input class="fr-input" aria-describedby="address-item-1647-messages" name="address-level2" id="address-item-1647" type="text">
            <div class="fr-messages-group" id="address-item-1647-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1648">
                Cedex
            </label>
            <input class="fr-input" aria-describedby="address-item-1648-messages" name="business-postal-code" id="address-item-1648" type="text">
            <div class="fr-messages-group" id="address-item-1648-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-select-group">
            <label for="country-select-1" class="fr-label">
                Pays
            </label>
            <select class="fr-select" aria-describedby="country-select-1-messages" id="country-select-1" autocomplete="country" name="country">
                <option value="" selected disabled hidden>Sélectionner une option</option>
                <option value="FR">France</option>
                <option value="DE">Allemagne</option>
                <option value="IT">Italie</option>
                <option value="ES">Espagne</option>
                <option value="GB">Royaume-Uni</option>
            </select>
            <div class="fr-messages-group" id="country-select-1-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-messages-group" id="address-1649-fieldset-messages" aria-live="assertive">
    </div>
</fieldset>
</div>

:::fr-accordion[Extrait de code]{id=‘accordion-office’}
```html
<fieldset class="fr-fieldset" id="address-1649-fieldset" aria-labelledby="address-1649-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1642">
                Dénomination
            </label>
            <input class="fr-input" aria-describedby="address-item-1642-messages" name="name" id="address-item-1642" type="text">
            <div class="fr-messages-group" id="address-item-1642-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1643">
                Adresse
                <span class="fr-hint-text">Numéro et voie</span>
            </label>
            <input class="fr-input" aria-describedby="address-item-1643-messages" name="address-line1" id="address-item-1643" type="text">
            <div class="fr-messages-group" id="address-item-1643-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1644">
                Complément d’adresse (optionnel)
                <span class="fr-hint-text">Bâtiment, immeuble, escalier et numéro d’appartement</span>
            </label>
            <input class="fr-input" aria-describedby="address-item-1644-messages" name="address-line2" id="address-item-1644" type="text">
            <div class="fr-messages-group" id="address-item-1644-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1645">
                Lieu-dit, commune déléguée ou boîte postale
            </label>
            <input class="fr-input" aria-describedby="address-item-1645-messages" name="address-level3" id="address-item-1645" type="text">
            <div class="fr-messages-group" id="address-item-1645-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--postal">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1646">
                Code postal
            </label>
            <input class="fr-input" aria-describedby="address-item-1646-messages" name="postal-code" id="address-item-1646" type="text">
            <div class="fr-messages-group" id="address-item-1646-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element fr-fieldset__element--inline@md fr-fieldset__element--inline-grow">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1647">
                Ville ou commune
            </label>
            <input class="fr-input" aria-describedby="address-item-1647-messages" name="address-level2" id="address-item-1647" type="text">
            <div class="fr-messages-group" id="address-item-1647-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="address-item-1648">
                Cedex
            </label>
            <input class="fr-input" aria-describedby="address-item-1648-messages" name="business-postal-code" id="address-item-1648" type="text">
            <div class="fr-messages-group" id="address-item-1648-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-select-group">
            <label for="country-select-1" class="fr-label">
                Pays
            </label>
            <select class="fr-select" aria-describedby="country-select-1-messages" id="country-select-1" autocomplete="country" name="country">
                <option value="" selected disabled hidden>Sélectionner une option</option>
                <option value="FR">France</option>
                <option value="DE">Allemagne</option>
                <option value="IT">Italie</option>
                <option value="ES">Espagne</option>
                <option value="GB">Royaume-Uni</option>
            </select>
            <div class="fr-messages-group" id="country-select-1-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-messages-group" id="address-1649-fieldset-messages" aria-live="assertive">
    </div>
</fieldset>
```
:::

**Demande d’un type de société**

Ce bloc se compose de :

- une liste déroulante - select “Type de société”

<div class="dsfr-doc-preview">
<fieldset class="fr-fieldset" aria-label="Type de société" id="company-structure-1652-fieldset" aria-labelledby="company-structure-1652-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-select-group">
            <label for="company-structure-select" class="fr-label">
                Type de société
            </label>
            <select class="fr-select" aria-describedby="company-structure-select-messages" id="company-structure-select" name="structure">
                <option value="" selected disabled hidden>Sélectionner une option</option>
                <option value="EI">Entrepreneur individuel (EI)</option>
                <option value="EURL">Entreprise unipersonnelle à responsabilité limitée (EURL)</option>
                <option value="SARL">Société à responsabilité limitée (SARL)</option>
                <option value="SASU">Société par actions simplifiée unipersonnelle (SASU)</option>
                <option value="SAS">Société par actions simplifiée (SAS)</option>
                <option value="SA">Société anonyme (SA)</option>
                <option value="SNC">Société en nom collectif (SNC)</option>
                <option value="SCS">Société en commandite simple (SCS)</option>
                <option value="SCA">Société en commandite par actions (SCA)</option>
            </select>
            <div class="fr-messages-group" id="company-structure-select-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-messages-group" id="company-structure-1652-fieldset-messages" aria-live="assertive">
    </div>
</fieldset>
</div>

:::fr-accordion[Extrait de code]{id=‘accordion-society’}

```html
<fieldset class="fr-fieldset" aria-label="Type de société" id="company-structure-1652-fieldset" aria-labelledby="company-structure-1652-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-select-group">
            <label for="company-structure-select" class="fr-label">
                Type de société
            </label>
            <select class="fr-select" aria-describedby="company-structure-select-messages" id="company-structure-select" name="structure">
                <option value="" selected disabled hidden>Sélectionner une option</option>
                <option value="EI">Entrepreneur individuel (EI)</option>
                <option value="EURL">Entreprise unipersonnelle à responsabilité limitée (EURL)</option>
                <option value="SARL">Société à responsabilité limitée (SARL)</option>
                <option value="SASU">Société par actions simplifiée unipersonnelle (SASU)</option>
                <option value="SAS">Société par actions simplifiée (SAS)</option>
                <option value="SA">Société anonyme (SA)</option>
                <option value="SNC">Société en nom collectif (SNC)</option>
                <option value="SCS">Société en commandite simple (SCS)</option>
                <option value="SCA">Société en commandite par actions (SCA)</option>
            </select>
            <div class="fr-messages-group" id="company-structure-select-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-messages-group" id="company-structure-1652-fieldset-messages" aria-live="assertive">
    </div>
</fieldset>
```
:::

**Demande d’un représentant moral**

Ce bloc se compose de :

- un champ “Nom d’usage” - obligatoire
- un champ “Nom de naissance” - obligatoire
- un champ “Prénom” - obligatoire
- un champ “Fonction(s) dans la société” - obligatoire

*Voir le modèle de bloc de Nom/prénom pour plus d’options*

<div class="dsfr-doc-preview">
<fieldset class="fr-fieldset" aria-label="Représentant moral de l'entreprise" id="representative-1661-fieldset" aria-labelledby="representative-1661-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="input-usual-name-1664">
                Nom d'usage
            </label>
            <input class="fr-input" spellcheck="false" aria-describedby="input-usual-name-1664-messages" name="usual-name" id="input-usual-name-1664" type="text">
            <div class="fr-messages-group" id="input-usual-name-1664-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="input-birth-name-1665">
                Nom de naissance
            </label>
            <input class="fr-input" spellcheck="false" aria-describedby="input-birth-name-1665-messages" name="birth-name" id="input-birth-name-1665" type="text">
            <div class="fr-messages-group" id="input-birth-name-1665-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="input-firstname-1667">
                Prénom
            </label>
            <input class="fr-input" spellcheck="false" autocomplete="given-name" aria-describedby="input-firstname-1667-messages" name="given-name" id="input-firstname-1667" type="text">
            <div class="fr-messages-group" id="input-firstname-1667-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label">
                Fonction(s) dans la société
            </label>
            <input class="fr-input" aria-describedby="input-position-1-messages" name="position" type="text">
            <div class="fr-messages-group" id="input-position-1-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-messages-group" id="representative-1661-fieldset-messages" aria-live="assertive">
    </div>
</fieldset>
</div>

:::fr-accordion[Extrait de code]{id=‘accordion-society’}
```html
<fieldset class="fr-fieldset" aria-label="Représentant moral de l'entreprise" id="representative-1661-fieldset" aria-labelledby="representative-1661-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="input-usual-name-1664">
                Nom d'usage
            </label>
            <input class="fr-input" spellcheck="false" aria-describedby="input-usual-name-1664-messages" name="usual-name" id="input-usual-name-1664" type="text">
            <div class="fr-messages-group" id="input-usual-name-1664-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="input-birth-name-1665">
                Nom de naissance
            </label>
            <input class="fr-input" spellcheck="false" aria-describedby="input-birth-name-1665-messages" name="birth-name" id="input-birth-name-1665" type="text">
            <div class="fr-messages-group" id="input-birth-name-1665-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="input-firstname-1667">
                Prénom
            </label>
            <input class="fr-input" spellcheck="false" autocomplete="given-name" aria-describedby="input-firstname-1667-messages" name="given-name" id="input-firstname-1667" type="text">
            <div class="fr-messages-group" id="input-firstname-1667-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label">
                Fonction(s) dans la société
            </label>
            <input class="fr-input" aria-describedby="input-position-1-messages" name="position" type="text">
            <div class="fr-messages-group" id="input-position-1-messages" aria-live="assertive">
            </div>
        </div>
    </div>
    <div class="fr-messages-group" id="representative-1661-fieldset-messages" aria-live="assertive">
    </div>
</fieldset>
```
:::

### Accessibilité

- [Suivre les recommandations d’accessibilité d’un champ de saisie](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/champ-de-saisie)
- Utiliser l’attribut `aria-required="true"` sur les input des champs obligatoires
