---
boost: 0
sitemap:
  noindex: true
title: Code du Gestionnaire de consentement
shortTitle: Code du Gestionnaire de consentement
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Gestionnaire de consentement.
shortDescription: Gérer le consentement des usagers sur les cookies et données personnelles.
keywords: consentement, cookies, données personnelles, CNIL, confidentialité, bandeau, modale, finalités, RGPD, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le gestionnaire de consentement permet d’informer les usagers et de recueillir leur accord sur l’utilisation de cookies non essentiels via un bandeau et une modale accessible à tout moment.
summary: Ce composant propose une interface conforme aux recommandations de la CNIL pour recueillir le consentement des usagers concernant l’utilisation de cookies non fonctionnels. Il affiche un bandeau au chargement du site, permet une gestion fine des finalités et sous-finalités via une modale dédiée, et garantit l’accessibilité permanente au réglage des préférences depuis le pied de page. Le gestionnaire de consentement n’est pas personnalisable, sauf pour les textes affichés.
mesh:
  - component/modal
  - component/display
  - component/footer
---

## Gestionnaire de consentement

Le gestionnaire de consentement permet à l'usager de définir ses préférences sur l'utilisation de ses données personnelles, notamment le dépôt de cookies non fonctionnels dans son navigateur.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Le composant **Gestionnaire de consentement** est composé de trois éléments principaux :

- Un bandeau de cookies.
- Une modale de gestion des cookies.
- Un placeholder pour les contenus masqués.

#### Structure du bandeau de cookies

Le bandeau de cookies est composé des éléments suivants :

- Un élément `<div>` avec la classe `fr-consent-banner` pour le conteneur du bandeau.
- Un titre contenu dans un élément `<h2>`, ou autre en fonction du contexte, avec la classe `.fr-h6`.
- Un bloc de contenu `fr-consent-banner__content`. Le texte doit être contenu dans un élément `<p>`. L'utilisation de la classe utilitaire `.fr-text--sm` permet de réduire la taille du texte.
- Un groupe de boutons `fr-consent-banner__buttons`.
  - Nous préconisons l'utilisation d'un groupe de bouton "inline" à partir du breakpoint SM, aligné à droite, et inversé à partir du breakpoint SM. Voir la documentation sur les [boutons](../../../../button/_part/doc/code/index.md) pour plus d'informations.
  - Utilisez des boutons primaires pour accepter et refuser les cookies, et un bouton secondaire pour personnaliser les cookies.
  - Le bouton de personnalisation doit être associé à une modale de gestion des cookies.

**Exemple de structure de bandeau**

```HTML
<div class="fr-consent-banner">
    <h2 class="fr-h6">À propos des cookies sur nomdusite.gouv.fr</h2>
    <div class="fr-consent-banner__content">
        <p class="fr-text--sm">Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience et les services disponibles sur ce site. Pour en savoir plus, visitez la page <a href="">Données personnelles et cookies</a>. Vous pouvez, à tout moment, avoir le contrôle sur les cookies que vous souhaitez activer.</p>
    </div>
    <ul class="fr-consent-banner__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-sm">
        <li>
            <button class="fr-btn" title="Autoriser tous les cookies">
                Tout accepter
            </button>
        </li>
        <li>
            <button class="fr-btn" title="Refuser tous les cookies">
                Tout refuser
            </button>
        </li>
        <li>
            <button class="fr-btn fr-btn--secondary" data-fr-opened="false" aria-controls="consent-modal" title="Personnaliser les cookies">
                Personnaliser
            </button>
        </li>
    </ul>
</div>
```

#### Structure de la modale de gestion des cookies

La modale de gestion des cookies est composée des éléments suivants :

- Une modale de taille LG (voir la documentation sur les [modales](../../../../modal/_part/doc/code/index.md)) contenant un bouton de fermeture, un titre et un bloc de contenu `fr-consent-manager`. Ce bloc contient :
  - Une liste de services de cookies, chaque service étant représenté par un élément `<div>` avec la classe `fr-consent-service`.
    - Le premier bloc service permet d'activer ou désactiver tous les services. Nous ajouterons ici une classe `fr-consent-manager__header` pour le style de la légende. Les libellés des boutons radios seront "Tout accepter" et "Tout refuser".
    - Le second élément correspond aux services essentiels, qui ne peuvent pas être désactivés. Le bloc contient fieldset avec une légende, une description et deux boutons radio. Le bouton radio "Accepter" est coché par défaut, et le bouton "Refuser" est désactivé.
    - Pour chaque services non essentiels, un fieldset `fr-fieldset` avec une légende `fr-consent-service__title`, deux boutons radio dans un conteneur `fr-consent-service__radios`, une description `fr-consent-service__desc` et un dépliant "Voir plus de détails" permettant d'ouvrir un collapse.
      - A l'intérieur de ce collapse, on retrouve une liste de sous finalités du service, avec pour chacune un bouton "Accepter" et un bouton "Refuser", et optionnellement une description.
  - Un groupe de boutons `fr-consent-manager__buttons` alignés à droite et en ligne à partir du breakpoint SM :
    - Ce groupe ne contient qu'un seul bouton, primaire, pour enregistrer les préférences. On utilise le groupe pour ces fonctionnalités de positionnement.

**Exemple de structure de modale de gestion des cookies**

:::fr-accordion[Déplier pour voir le code]{id=modale-consent-structure}

```HTML
<dialog id="consent-modal" class="fr-modal" aria-labelledby="fr-consent-modal-title">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="fr-consent-modal" title="Fermer" type="button" id="button-4103" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h1 id="fr-consent-modal-title" class="fr-modal__title">
                            Panneau de gestion des cookies
                        </h1>
                        <div class="fr-consent-manager">
                            <!-- Finalités -->
                            <div class="fr-consent-service fr-consent-manager__header">
                                <fieldset class="fr-fieldset">
                                    <legend id="finality-legend" class="fr-consent-service__title">Préférences pour tous les services. <a href="">Données personnelles et cookies</a>
                                    </legend>
                                    <div class="fr-consent-service__radios">
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-all-accept" name="consent-all">
                                            <label class="fr-label" for="consent-all-accept">
                                                Tout accepter
                                            </label>
                                        </div>
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-all-refuse" name="consent-all">
                                            <label class="fr-label" for="consent-all-refuse">
                                                Tout refuser
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="fr-consent-service">
                                <fieldset aria-labelledby="finality-0-legend finality-0-desc" role="group" class="fr-fieldset">
                                    <legend id="finality-0-legend" class="fr-consent-service__title">Cookies obligatoires</legend>
                                    <div class="fr-consent-service__radios">
                                        <div class="fr-radio-group">
                                            <input checked type="radio" id="consent-finality-0-accept" name="consent-finality-0">
                                            <label class="fr-label" for="consent-finality-0-accept">
                                                Accepter
                                            </label>
                                        </div>
                                        <div class="fr-radio-group">
                                            <input disabled type="radio" id="consent-finality-0-refuse" name="consent-finality-0">
                                            <label class="fr-label" for="consent-finality-0-refuse">
                                                Refuser
                                            </label>
                                        </div>
                                    </div>
                                    <p id="finality-0-desc" class="fr-consent-service__desc">Ce site utilise des cookies nécessaires à son bon fonctionnement qui ne peuvent pas être désactivés.</p>
                                </fieldset>
                            </div>
                            <div class="fr-consent-service">
                                <fieldset aria-labelledby="finality-1-legend finality-1-desc" role="group" class="fr-fieldset">
                                    <legend id="finality-1-legend" class="fr-consent-service__title">Nom de la finalité</legend>
                                    <div class="fr-consent-service__radios">
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-finality-1-accept" name="consent-finality-1">
                                            <label class="fr-label" for="consent-finality-1-accept">
                                                Accepter
                                            </label>
                                        </div>
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-finality-1-refuse" name="consent-finality-1">
                                            <label class="fr-label" for="consent-finality-1-refuse">
                                                Refuser
                                            </label>
                                        </div>
                                    </div>
                                    <p id="finality-1-desc" class="fr-consent-service__desc">Description optionnelle de la finalité, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in suscipit nulla, et pulvinar velit.</p>
                                    <div class="fr-consent-service__collapse">
                                        <button type="button" class="fr-consent-service__collapse-btn" aria-expanded="false" aria-describedby="finality-1-legend" aria-controls="finality-1-collapse"> Voir plus de détails</button>
                                    </div>
                                    <div class="fr-consent-services fr-collapse" id="finality-1-collapse">
                                        <!-- Sous finalités -->
                                        <div class="fr-consent-service">
                                            <fieldset class="fr-fieldset fr-fieldset--inline">
                                                <legend id="finality-1-service-1-legend" class="fr-consent-service__title">Sous finalité 1</legend>
                                                <div class="fr-consent-service__radios fr-fieldset--inline">
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-1-service-1-accept" name="consent-finality-1-service-1">
                                                        <label class="fr-label" for="consent-finality-1-service-1-accept">
                                                            Accepter
                                                        </label>
                                                    </div>
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-1-service-1-refuse" name="consent-finality-1-service-1">
                                                        <label class="fr-label" for="consent-finality-1-service-1-refuse">
                                                            Refuser
                                                        </label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="fr-consent-service">
                                            <fieldset aria-labelledby="finality-1-service-2-legend finality-1-service-2-desc" role="group" class="fr-fieldset fr-fieldset--inline">
                                                <legend id="finality-1-service-2-legend" class="fr-consent-service__title" aria-describedby="finality-1-service-2-desc">Sous finalité 2</legend>
                                                <div class="fr-consent-service__radios fr-fieldset--inline">
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-1-service-2-accept" name="consent-finality-1-service-2">
                                                        <label class="fr-label" for="consent-finality-1-service-2-accept">
                                                            Accepter
                                                        </label>
                                                    </div>
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-1-service-2-refuse" name="consent-finality-1-service-2">
                                                        <label class="fr-label" for="consent-finality-1-service-2-refuse">
                                                            Refuser
                                                        </label>
                                                    </div>
                                                </div>
                                                <p id="finality-1-service-2-desc" class="fr-consent-service__desc">Ce service utilise 3 cookies.</p>
                                            </fieldset>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="fr-consent-service">
                                <fieldset aria-labelledby="finality-2-legend finality-2-desc" role="group" class="fr-fieldset">
                                    <legend id="finality-2-legend" class="fr-consent-service__title">Nom de la finalité</legend>
                                    <div class="fr-consent-service__radios">
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-finality-2-accept" name="consent-finality-2">
                                            <label class="fr-label" for="consent-finality-2-accept">
                                                Accepter
                                            </label>
                                        </div>
                                        <div class="fr-radio-group">
                                            <input type="radio" id="consent-finality-2-refuse" name="consent-finality-2">
                                            <label class="fr-label" for="consent-finality-2-refuse">
                                                Refuser
                                            </label>
                                        </div>
                                    </div>
                                    <p id="finality-2-desc" class="fr-consent-service__desc">Description optionnelle de la finalité, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in suscipit nulla, et pulvinar velit.</p>
                                    <div class="fr-consent-service__collapse">
                                        <button type="button" class="fr-consent-service__collapse-btn" aria-expanded="false" aria-describedby="finality-2-legend" aria-controls="finality-2-collapse"> Voir plus de détails</button>
                                    </div>
                                    <div class="fr-consent-services fr-collapse" id="finality-2-collapse">
                                        <!-- Sous finalités -->
                                        <div class="fr-consent-service">
                                            <fieldset class="fr-fieldset fr-fieldset--inline">
                                                <legend id="finality-2-service-1-legend" class="fr-consent-service__title">Sous finalité 1</legend>
                                                <div class="fr-consent-service__radios fr-fieldset--inline">
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-2-service-1-accept" name="consent-finality-2-service-1">
                                                        <label class="fr-label" for="consent-finality-2-service-1-accept">
                                                            Accepter
                                                        </label>
                                                    </div>
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-2-service-1-refuse" name="consent-finality-2-service-1">
                                                        <label class="fr-label" for="consent-finality-2-service-1-refuse">
                                                            Refuser
                                                        </label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="fr-consent-service">
                                            <fieldset aria-labelledby="finality-2-service-2-legend finality-2-service-2-desc" role="group" class="fr-fieldset fr-fieldset--inline">
                                                <legend id="finality-2-service-2-legend" class="fr-consent-service__title" aria-describedby="finality-2-service-2-desc">Sous finalité 2</legend>
                                                <div class="fr-consent-service__radios fr-fieldset--inline">
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-2-service-2-accept" name="consent-finality-2-service-2">
                                                        <label class="fr-label" for="consent-finality-2-service-2-accept">
                                                            Accepter
                                                        </label>
                                                    </div>
                                                    <div class="fr-radio-group">
                                                        <input type="radio" id="consent-finality-2-service-2-refuse" name="consent-finality-2-service-2">
                                                        <label class="fr-label" for="consent-finality-2-service-2-refuse">
                                                            Refuser
                                                        </label>
                                                    </div>
                                                </div>
                                                <p id="finality-2-service-2-desc" class="fr-consent-service__desc">Ce service utilise 3 cookies.</p>
                                            </fieldset>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <!-- Bouton de confirmation/fermeture -->
                            <div class="fr-consent-manager__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-sm">
                                <button type="button" class="fr-btn">Confirmer mes choix</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
```

:::

#### Structure du placeholder de contenu masqué

Lorsqu'un contenu est masqué, un placeholder doit être affiché pour informer l'utilisateur de la nécessité d'accepter les cookies pour accéder à ce contenu.

Le placeholder est composé des éléments suivants :

- Un élément `<div>` avec la classe `fr-consent-placeholder` pour le conteneur du placeholder.
- Un titre "[Nom du service] est désactivé" contenu dans un élément `<hx>`, en fonction du contexte, avec la classe `.fr-h6`. Vous pouvez utiliser une classe utilitaire pour ajouter une marge en bas en fonction du besoin, ex : `.fr-mb-2v`.
- Un bloc de texte `<p>` décrivant pourquoi le contenu est masqué. Vous pouvez utiliser une classe utilitaire pour ajouter une marge en bas en fonction du besoin, ex : `.fr-mb-6v`.
- Un bouton primaire pour autoriser le dépôt de cookies et accéder au contenu.

**Exemple de structure HTML de placeholder**

```HTML
<div class="fr-consent-placeholder">
    <h4 class="fr-h6 fr-mb-2v">**Nom du service** est désactivé</h4>
    <p class="fr-mb-6v">Autorisez le dépôt de cookies pour accéder à cette fonctionnalité.</p>
    <button class="fr-btn" title="Autorisez le dépôt de cookies pour accéder au service **Nom du service**">
        Autoriser
    </button>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Link       | Oui         |
| Button     | Oui         |
| Form       | Oui         |
| Radio      | Oui         |
| Modal      | Oui         |
| Consent    | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/link/link.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/radio/radio.min.css" rel="stylesheet">
<link href="dist/component/modal/modal.min.css" rel="stylesheet">
<link href="dist/component/consent/consent.min.css" rel="stylesheet">
```

#### Style du composant

Aucune variation de style n'est possible pour le composant Gestionnaire de consentement.

---

### JavaScript

Le composant Gestionnaire de consentement utilise le JavaScript du composant [Modale](../../../../modal/_part/doc/code/index.md), et du core pour le collapse des sous finalités dans la modale de gestion des cookies.

#### Installation du JavaScript

Pour fonctionner, la modale de gestion des cookies nécessite l'utilisation de JavaScript.
Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### API

Le composant Gestionnaire de consentement est proposé de manière **statique**. Il convient d'utiliser l'API de la plateforme de gestion du consentement (CMP) de votre choix pour l'intégrer au sein de la structure du composant DSFR.

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur la modale de gestion des cookies, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.disclose` | Ouverture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.click` | Click sur le bouton d'ouverture | ModalButton | `data-fr-js-modal-button` |

:::

---

### Thème DSFR pour Tarteaucitron

Il existe un thème DSFR pour le gestionnaire de consentement Tarteaucitron. Il s'agit d'une surcouche CSS pour adapter le gestionnaire de consentement de Tarteaucitron au design du DSFR.
Vous pouvez trouvez ce projet sur le dépôt GIT [GouvernementFR/dsfr-theme-tarteaucitron](https://github.com/GouvernementFR/dsfr-theme-tarteaucitron)

> [!NOTE]
> Il n’y a aucune dépendance au DSFR - le thème propose sa propre CSS pour simuler le design du composant DSFR. Le code HTML et JS sont ceux de tarteaucitron. Le thème a été testé sur les versions 1.9.1, 1.8.4 et 1.8.3 de tarteaucitron, avec les libellés de boutons présent dans le bandeaux de consentement ci-dessus ('Personnaliser', ‘Tout refuser’, ‘Tout accepter’).

Il est toutefois recommandé, dans la mesure du possible, d'**utiliser la structure HTML du composant DSFR** telle quelle, plutôt que thématiser une CMP, un pour garantir une meilleure intégration et une bonne maintenabilité.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+consent+)

::dsfr-doc-changelog
