---
title: Adresse électronique
shortTitle: Adresse électronique
description: Cette page présente le bloc fonctionnel destiné à la saisie d’une adresse électronique dans un formulaire avec les règles d’utilisation, les bonnes pratiques et les recommandations d’accessibilité associées.
shortDescription: Champ de saisie pour adresse électronique
keywords: adresse électronique, email, champ de saisie, formulaire, DSFR, accessibilité, autocomplete, validation, création de compte, connexion
cover: ./_asset/cover/cover.png
excerpt: Bloc de formulaire pour saisir une adresse électronique avec aide à la saisie, messages d’erreur et recommandations d’usage.
summary: Cette page décrit le modèle de champ destiné à la collecte d’une adresse électronique dans les services en ligne. Elle précise la structure attendue, les attributs HTML à utiliser, les règles d’écriture du label et de la description, ainsi que les messages d’erreur appropriés. Des recommandations sont fournies pour éviter les doublons de saisie et assurer la cohérence du terme utilisé. L’accessibilité est également prise en compte grâce aux bonnes pratiques de configuration technique.
---

# Adresse électronique

Le bloc fonctionnel de “demande d’adresse électronique” permet d’aider un utilisateur à saisir une adresse électronique (=adresse email).

Il doit être utilisé quand votre service nécessite de récupérer une adresse électronique auprès d’un utilisateur, notamment dans les cas de création de compte ou de connexion. Des modèles de page pour ces deux usages sont à disposition : page de création de compte et page de connexion

## Structure

Ce bloc utilise un champ de saisie classique et s’adapte en fonction du contexte de demande d’adresse électronique. Il est composé des éléments suivants:

- Label - obligatoire, avec le titre par défaut “Adresse électronique”
- Description - obligatoire, intégrant un exemple par défaut du format attendu
- Champ input de type “email” - obligatoire

<div class="dsfr-doc-preview">
<div class="fr-input-group">
    <label class="fr-label" for="email-1">
        Adresse électronique
        <span class="fr-hint-text">Format attendu : nom@domaine.fr</span>
    </label>
    <input class="fr-input" name="email" autocomplete="on" id="email-1" type="email">
</div>
</div>

:::fr-accordion[Extrait de code]{id='accordion-email'}

```html
<div class="fr-input-group">
    <label class="fr-label" for="email-1">
        Adresse électronique
        <span class="fr-hint-text">Format attendu : nom@domaine.fr</span>
    </label>
    <input class="fr-input" name="email" autocomplete="on" id="email-1" type="email">
</div>
```
:::

Le bloc de demande d’adresse électronique aide à la saisie de l’adresse électronique pour l’utilisateur car :

- il permet le copier coller
- il est paramétré avec les bons attributs pour aider à la saisie, pour exemple :
    - `type="email"`
    - `spellcheck="off"`
    - `autocomplete="on"` ou `autocomplete="email"` [(plus d’information sur l’autocomplete)](https://developer.mozilla.org/fr/docs/Web/HTML/Attributes/autocomplete)
- il permet la saisie de n’importe quelle adresse électronique avec pour taille maximale 256 caractères.

## Règles d’utilisation

### Textes du label et de la description

- Utiliser les textes du label et de la description pour :
    - présenter le format attendu “Exemple : nom@domaine.fr “
    - préciser, quand c’est nécessaire, pourquoi il nécessaire de récupérer l’adresse électronique et à quoi elle sera utilisée afin de mettre en confiance l’utilisateur et pour qu’il puisse choisir la bonne adresse électronique.

### Erreur

- Dans le cas d’une erreur de saisie, il faut reprendre l’affichage d’erreur [du champ de saisie](../../../../../component/input/_part/doc/index.md)
- Dans le cadre d’une demande d’adresse électronique dans un formulaire de connexion, ne pas reprendre le message d’erreur, mais le bloc alerte et mettre un message spécifiant une erreur pour “le couple mot de passe/identifiant. Voir le modèle de page de connexion .

## Bonne pratiques

### Confirmation d’adresse électronique

- si l’adresse électronique est un élément essentiel de votre service et que vous souhaitez confirmer le fonctionnement de l’adresse électronique, éviter la répétition de champ (“confirmer votre adresse électronique”) et passer par une boucle de validation par courriel.

### Contenu

- Terme à utiliser “adresse électronique”
    - Pour aider l’utilisateur à bien comprendre l’information demandée, il est important de nommer correctement l’information demandée et garder de la consistance en utilisant le même terme.
    - Le terme courriel désigne le message électronique et non l’adresse.

## Accessibilité

Utiliser l’attribut `autocomplete="email"` sur l’`input`