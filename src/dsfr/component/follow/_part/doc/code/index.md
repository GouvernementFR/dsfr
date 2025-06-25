---
boost: 0
sitemap:
  noindex: true
title: Code de la lettre d'information et des réseaux sociaux
shortTitle: Démonstration de la lettre d'information et réseaux sociaux
description: Ce composant permet de proposer l’inscription à une lettre d’information et de diriger vers les réseaux sociaux de l’entité.
shortDescription: Inscription à une lettre d’info et accès aux réseaux sociaux.
keywords: lettre d’information, newsletter, réseaux sociaux, footer, interface, composant, design system, RGPD, accessibilité, usager
cover: ./_asset/cover/cover.png
excerpt: Ce document présente le composant Lettre d’information et réseaux sociaux, destiné à favoriser l’abonnement et la consultation des comptes sociaux, avec recommandations d’intégration et règles éditoriales.
summary: Ce contenu décrit le composant Lettre d’information et réseaux sociaux, conçu pour permettre aux usagers de s’abonner à une ou plusieurs lettres d’information et de consulter les réseaux sociaux de l’entité. Il précise les recommandations d’intégration, notamment sa position dans la page, et les consignes éditoriales telles que l’adaptation du message selon le contexte ou les mentions relatives à l’utilisation des données personnelles. Ce guide s’adresse aux équipes chargées de la conception éditoriale et technique des sites web publics.
---

## Lettre d'information et Réseaux Sociaux

La lettre d’information et réseaux sociaux est un ensemble d’éléments d’interaction avec l’interface permettant à l’usager de s’inscrire à (aux) lettre(s) d’information proposée(s), ainsi que des liens vers les réseaux sociaux de l’entité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Le composant **Lettre d'information et Réseaux Sociaux** est composé de :

- Un conteneur `<div` de classe `fr-follow` pour l'ensemble du composant avec à l'intérieur une grille d'une ou deux colonnes.
  - Un bloc `fr-follow__newsletter` pour la newsletter contenant :
    - Un élément `<div>` avec un titre `<h2>`de classe `fr-h5` et une description `<p class="fr-text--sm">`.
    - Un second élément `<div>` contenant :
      - Soit un formulaire `<form>` avec un champ de saisie de type `email`, un bouton, et un texte de description additionnelle.
      - Soit un bouton "S'abonner" qui ouvre une modale ou execute un script.
      - Une fois la souscription effectuée, une alerte de confirmation `fr-alert fr-alert--success` remplace le formulaire ou le bouton.
  - Et/ou un bloc `fr-follow__social` pour les réseaux sociaux contenant :
    - Un titre `<h2>` de classe `fr-h5`.
    - Un groupe de boutons de réseaux sociaux :
      - Les boutons sont des liens `<a>` avec une classe `fr-btn` et une classe `fr-btn--NOM-RESEAU`.

**Exemple de structure HTML complète**

:::fr-accordion[Déplier pour voir le code]{id=follow-structure}

```HTML
<div class="fr-follow">
    <div class="fr-container">
        <div class="fr-grid-row">
            <div class="fr-col-12 fr-col-md-8">
                <div class="fr-follow__newsletter">
                    <div>
                        <h2 class="fr-h5">Abonnez-vous à notre lettre d’information</h2>
                        <p class="fr-text--sm">Lorem ipsum (...) finibus et.</p>
                    </div>
                    <div>
                        <form action="">
                            <div class="fr-input-group">
                                <label class="fr-label" for="newsletter-email">
                                    Votre adresse électronique (ex. : nom@domaine.fr)
                                </label>
                                <div class="fr-input-wrap fr-input-wrap--addon">
                                    <input class="fr-input" title="Votre adresse électronique (ex. : nom@domaine.fr)" autocomplete="email" aria-describedby="newsletter-email-hint-text newsletter-email-messages" placeholder="Votre adresse électronique (ex. : nom@domaine.fr)" id="newsletter-email" type="email">
                                    <button title="S‘abonner à notre lettre d’information" type="button" class="fr-btn">S'abonner</button>
                                </div>
                                <div class="fr-messages-group" id="newsletter-email-messages" aria-live="polite">
                                </div>
                            </div>
                            <p id="newsletter-email-hint-text" class="fr-hint-text">En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel. Vous pouvez vous désinscrire à tout moment à l’aide des liens de désinscription ou en nous contactant.</p>
                        </form>
                    </div>
                </div>
            </div>
            <div class="fr-col-12 fr-col-md-4">
                <div class="fr-follow__social">
                    <h2 class="fr-h5">Suivez-nous<br> sur les réseaux sociaux</h2>
                    <ul class="fr-btns-group">
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le facebook de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--facebook fr-btn">Facebook</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le twitter de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--twitter-x fr-btn">X (anciennement Twitter)</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le linkedin de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--linkedin fr-btn">Linkedin</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers l'instagram de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--instagram fr-btn">Instagram</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le youtube de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--youtube fr-btn">Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

:::

**Exemple de bloc newsletter avec bouton**

:::fr-accordion[Déplier pour voir le code]{id=follow-bouton}

```HTML
<div class="fr-follow__newsletter">
    <div>
        <h2 class="fr-h5">Abonnez-vous à notre lettre d’information</h2>
        <p class="fr-text--sm">Lorem ipsum (...) finibus et.</p>
    </div>
    <div>
        <div class="fr-btns-group fr-btns-group--inline-md">
            <button title="S‘abonner à notre lettre d’information" type="button" class="fr-btn">S'abonner</button>
        </div>
    </div>
</div>
```

:::

**Exemple de bloc newsletter avec confirmation**

:::fr-accordion[Déplier pour voir le code]{id=follow-succes}

```HTML
<div class="fr-follow__newsletter">
    <div>
        <h2 class="fr-h5">Abonnez-vous à notre lettre d’information</h2>
        <p class="fr-text--sm">Lorem ipsum (...) finibus et.</p>
    </div>
    <div>
        <div class="fr-alert fr-alert--success">
            <p>Votre inscription a bien été prise en compte.</p>
        </div>
    </div>
</div>
```

:::

>[!NOTE]
> Si vous souhaitez n'utiliser qu'un seul bloc (newsletter ou réseaux sociaux), vous pouvez retirer le bloc inutilisé en retirant la colone de la grille correspondant. La colone restante doit prendre la classe `fr-col-12`.

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et du composant Lettre d'information et Réseaux Sociaux doivent être importés. En fonction de l'utilisation du composant il faudra importer le CSS du composant **bouton (button)**, du **champ de saisie (input)**, de l'**alerte (alert)**, et des messages de **formulaire (form)**.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/input/input.min.css" rel="stylesheet">
<link href="dist/component/alert/alert.min.css" rel="stylesheet">
<link href="dist/component/follow/follow.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/follow/follow.legacy.min.css" rel="stylesheet">
```

#### Icônes des réseaux sociaux

Les variantes d'icônes de réseaux sociaux sont intégrées dans le composant. Les classes suivantes sont disponibles :

- `fr-btn--bluesky` : Bluesky.
- `fr-btn-dailymotion` : Dailymotion.
- `fr-btn--facebook` : Facebook.
- `fr-btn--github` : GitHub.
- `fr-btn--instagram` : Instagram.
- `fr-btn--linkedin` : Linkedin.
- `fr-btn--mastodon` : Mastodon.
- `fr-btn--snapchat` : Snapchat.
- `fr-btn--telegram` : Telegram.
- `fr-btn--threads` : Threads.
- `fr-btn--tiktok` : TikTok.
- `fr-btn--twitch` : Twitch.
- `fr-btn--twitter` : Twitter (déprécié).
- `fr-btn--twitter-x` : X (anciennement Twitter).
- `fr-btn--vimeo` : Viméo.
- `fr-btn--youtube` : Youtube.

La liste des variantes de boutons réseaux-sociaux est définie dans le fichier : `src/component/share/style/_setting.scss`

>[!NOTE]
> Ces classes sont des raccourcis, il est aussi possible d'utiliser les [classes utilitaires d'icônes](../../../../../core/_part/doc/icon/index.md). Préférez l'utilisation des formats "fill" dans les boutons. Par exemple : `fr-icon-rss-fill` pour un flux RSS.

---

### JavaScript

Le composant Lettre d'information et Réseaux Sociaux **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

La souscription à la Lettre d'information doit être gérée par le développeur.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+follow+)

::dsfr-doc-changelog
