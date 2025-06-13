---
title: Formulaires
shortTitle: Formulaires
description: Cette page présente les règles de conception des formulaires et met à disposition des blocs fonctionnels réutilisables pour structurer efficacement les démarches en ligne tout en assurant accessibilité et conformité réglementaire.
shortDescription: Règles et modèles pour la création de formulaires
keywords: formulaires, champs, blocs fonctionnels, accessibilité, RGPD, DSFR, ergonomie, bonnes pratiques, validation, structure
cover: ./_asset/cover/cover.png
excerpt: Règles de conception et modèles prêts à l’emploi pour structurer des formulaires accessibles et conformes au Design Système de l’État.
summary: Cette page fournit des recommandations pour concevoir des formulaires clairs, efficaces et accessibles. Elle décrit la structure idéale, les principes d’alignement, d’espacement, de gestion des erreurs et d’utilisation des champs. Elle présente également les bonnes pratiques RGPD et les exigences d’accessibilité. Des blocs fonctionnels et modèles de pages sont mis à disposition pour guider la mise en œuvre dans les démarches numériques.
---

# Formulaires

Des “blocs fonctionnels” sont mis à votre disposition afin de vous aider et inspirer dans la création de vos formulaires ou démarches, en mettant à disposition des demandes courantes “pré-packagées” .

Les formulaires permettent de demander des informations à l’utilisateur de la manière la plus claire possible.

Ils peuvent être simples ou complexes, et se présenter en une ou plusieurs étapes.

La conception d’un formulaire nécessitent une réflexion sur sa structure, les champs utilisés, le séquençage des informations demandées ainsi que l’aide pour accompagner les utilisateurs dans leurs réponses.

Les modèles de formulaires présentés dans cette section et les règles de conception associées vous permettront de créer facilement vos formulaires tout en vous assurant du respect de bonnes pratiques.

La section formulaire présente donc :

- Des règles de conception à respecter dans la création de vos formulaires
- La liste des blocs fonctionnels de formulaire à réutiliser
- La liste modèles de pages prêts à l’emploi intégrant des blocs fonctionnels de formulaire

## Règles de création d’un formulaire

Les formulaires sont des interfaces souvent utilisés par les citoyens, mais pour s’assurer de leur bonne utilisation et réduire au maximum les contraintes, des règles et des bonnes pratiques de conception doivent être respectées lors de la conception de vos formulaires.

### Structure du formulaire

#### Structure type

Un formulaire doit généralement respecter la structure suivante :

- Titre, Chapeau, mention champs obligatoire,
- N Titres de groupes,
- N Champs,
- Boutons

#### Regroupement

Pour guider les utilisateurs dans la compréhension du formulaire et les informations demandées, il faut grouper les champs en lien avec un titre de groupe.

Pour les formulaires très longs (démarches...), séquencer en plusieurs étapes en utilisant le stepper (modèle à venir). Éviter les accordéons pour regrouper les sections.

#### Alignement des champs et labels

Les labels doivent être placés en haut des champs et alignés à gauche, cela facilite le plus la lecture et assure un bon taux de complétion. De plus, cette disposition, ne prenant pas beaucoup de place, fonctionne bien en mobile.

#### Colonage

Utiliser un layout d’une colonne pour favoriser la lecture de l’utilisateur.

**Espacement :**

Un champ unique comme par exemple un champ “Identifiant” permettant à l’utilisateur de rentrer son adresse électronique afin de s’authentifier.

Un groupe de champ regroupe plusieurs champ unique, comme par exemple un champ “Identifiant” et “Mot de passe”.

L’espacement entre deux champs est de 16px tandis qu’entre deux groupes de champs, il est de 24px.

De ce fait, entre deux champs du même groupe (“Identifiant” et “Mot de passe”), on aura 16px tandis qu’entre deux groupes (“Bloc d’authentification” et le bouton “Se connecter”), on aura 24px.

#### Champ obligatoire

Etant donnée qu’il faut limiter le nombre d’information à demander aux utilisateurs, les informations optionnelles doivent être limitées au maximum. Ainsi, les champs sont obligatoires par défaut, et les champs optionnels apparaissent avec une information “(optionnel)” dans le label.

Une mention explicative doit se trouver au dessus du formulaire afin d’en informer l’utilisateur : “Sauf mention contraire “(optionnel)” dans le label, tous les champs sont obligatoires“

#### Boutons

Présenter en fin de formulaire, les boutons peuvent être alignés :

- à gauche par rapport aux champs pour les formulaires présentés dans des pages
- à droite par rapport aux champs pour les formulaires présentés en différentes étape avec un indicateur d'étape.

Attention également à bien différencier l'action principale et action secondaire en utilisation les différents types de boutons et liens à votre disposition. La priorisation entre l’action principale et les actions secondaires suivent la même logique que les règles d’alignement.

Formuler clairement le texte du bouton en spécifiant les conséquences de l’action. Exemples :

- à la place de “envoyer” > “envoyer la réclamation”
- éviter “Valider” lorsqu’il ne s’agit de passer à l'étape suivante

Passer le bouton en état “disabled” une fois le formulaire soumis afin d'empêcher de soumettre plusieurs fois le formulaire et pour indiquer que la demande a bien été prise en compte, ou bien utiliser un indicateur de chargement en ligne dans le bouton afin de notifier que l’envoie est en cours.

### Structure des champs

#### Label

- Ne pas placer les labels dans le placeholder, ni l’aide à la saisie.
- Ne pas les écrire en capital et être clair dans l’intitulé,
- Utiliser la description pour faciliter la compréhension pour l’utilisateur, en donnant des informations supplémentaires aidant l’utilisateur dans sa saisie (format attendu, exemples, etc.).

#### Taille

La largeur du champ doit être adapté au contenu attendu.

#### États

Faire varier les différents états du champs en fonction des interactions utilisateurs : inactif, survol, actif/focus, erreur, disabled, validé

#### Erreurs

- Afficher les erreurs champ par champ (in line validation).
- Des alertes globales au dessus du formulaire peuvent être complétées d’un message transverse qui résume les erreurs rencontrée en intégrant le bloc alerte “erreur” en haut du formulaire. Des liens avec ancres vers chaque erreur peuvent être associé au détail dans le cas de formulaire assez long.

### Choix des champs

Ces règles de construction de formulaire doivent être accompagnées d’une réflexion sur le choix des champs à récupérer. Pour cela, il est important de choisir le bon input par rapport au besoin et donc répondre à la question : quelle information a-t-on besoin de récupérer ?

Chaque composant répond à un cas d’usage. Utilisez donc des champs de saisie (input de différents types ou textarea), des boutons radio, cases à cocher, listes déroulantes, interrupteurs.

Pour les champs de saisie, utilisez le type attendu afin de faciliter la saisie sur les claviers virtuels (nombres, téléphone, email, etc.)

### Bonne pratique RGPD

Les formulaires permettent de recueillir des données utilisateur. A ce titre vous devez respecter de manière rigoureuse le RGPD, ainsi que les lignes directrices émises par CNIL, notamment:

- Limiter le nombre de champ au minimum requis par le service.
- Indiquer clairement les informations minimales requises à savoir l’identité du responsable de traitement, la finalité du traitement et l’énoncé des droits de la personne.Plus d’informations sur [le site LINC](https://design.cnil.fr/) et [le site de la CNIL](https://www.cnil.fr/)

## Bonnes pratiques

- Avoir systématiquement une page en amont pour présenter l’objet de la démarche, les documents dont il faut se saisir pour la remplir, le temps nécessaire pour la réaliser, le temps et les étapes de traitement de la demande, les informations importantes à connaître avant de démarrer la démarche, etc.
- avoir une page de résumé, qui rappelle les éléments saisies, propose de corriger ou de valider la demande

## Accessibilité

La structure des contenus de la page doit être cohérente et le code html [conforme aux standards.](https://validator.w3.org/) Chaque composant du DSFR doit respecter les règles qui lui sont propres : contraste, intitulé, cohérence du contexte, pertinence, attributs aria, etc.
