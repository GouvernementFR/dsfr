---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Lien
shortTitle: Accessibilité du Lien
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Lien.
shortDescription: Navigation secondaire vers d’autres contenus
keywords: lien, navigation, ancre, haut de page, téléchargement, retour, DSFR, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le composant Lien facilite la navigation de l’usager dans une même page, vers une autre page du site ou vers un site tiers, en complément de la navigation principale.
summary: Le lien est un composant essentiel pour structurer la navigation au sein des interfaces numériques. Il se décline en différentes formes selon son usage - dans un texte, hors contenu, vers une page externe ou pour un téléchargement. Non personnalisable, il suit des règles d’usage strictes afin de préserver la lisibilité, l’accessibilité et l’uniformité graphique. Son usage s’inscrit dans une hiérarchie d’interaction bien définie, distincte de celle du bouton.
mesh:
  - component/breadcrumb
  - component/sidemenu
  - component/summary
---

## Lien

Le lien est un système de navigation secondaire qui permet à l’usager de se déplacer au sein d’une même page, entre deux pages d’un même site ou vers un site externe.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Lien** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le Lien :

- `Entrée` :
  - actionne le lien,
  - redirige vers la destination définie par l’attribut `href`,
  - déplace le focus vers la page de destination,
  - si le lien est en `target="_blank"` ouvre la destination dans un nouvel onglet.
- `Tab`&nbsp;: place le focus sur le prochain élément focalisable.
- `Maj + Tab`&nbsp;: place le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Structuration

- Le lien doit avoir un attribut `href`.
- Le lien doit avoir un **intitulé accessible**.
- Si une information complémentaire au lien est présente, la lier au lien avec un `aria-describedby` défini sur l'ID de l'élément contenant l’information.

#### Intitulé du lien

- L’intitulé doit être explicite, l’utilisateur doit comprendre la destination ou la fonction du lien.
- Un lien peut être rendu explicite grâce à son contexte : [RGAA 4 : contexte du lien](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/glossaire/#contexte-du-lien).

##### Lien-icône

- Un lien avec icône seule doivent avoir un nom accessible pertinent.
- Un attribut `title` identique à l’intitulé du lien peut être ajouté pour expliciter l’icône.

##### Lien externe

Les **liens externes** qui s’ouvrent dans un nouvel onglet / fenêtre (attribut `target="_blank"`) et qui sont suivis d’une icône doivent également avoir la mention "nouvelle fenêtre" dans un attribut `title` (ex&nbsp;: `title="intitulé du lien - nouvelle fenêtre"`).

##### Lien de téléchargement

- Le **lien de téléchargement** doit contenir la mention "Télécharger".
- Indiquer des informations sur le fichier dans la partie détail avec notamment le type ou l'extension du fichier, son poids, et sa langue si différente de la page est une bonne pratique et un critère d’accessibilité de niveau AAA.

##### Groupe de liens

Une succession de liens doit être structuré dans une liste `ul` `li`.

##### Lien désactivé

Pour **désactiver** un lien&nbsp;:

- retirer l’attribut `href`,
- ajouter les attributs `role="link"` et `aria-disabled="true"` pour indiquer aux technologies d'assistance qu’il s'agit d'un lien désactivé.

#### Bouton ou lien&nbsp;?

>[!NOTE]
>Il est nécessaire de distinguer un bouton d’un lien.
>
>Un bouton permet de **déclencher une action ou un événement**&nbsp;:
>- **nativement** en fonction du type du bouton&nbsp;: envoi d’un formulaire (`submit`), suppression de contenu de champs de formulaire (`reset`)&nbsp;;
>- **en JavaScript**&nbsp;: ouverture d’une fenêtre modale, fermeture d’un contenu, modification de la page…
>
>Un lien `<a href>` permet de rediriger vers une autre page ou à un autre endroit dans la page (ancre).

**Éviter d’utiliser le style du composant Bouton sur les liens et inversement**.

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [L’élément a](https://html.spec.whatwg.org/#the-a-element)

##### Ressources

- <a href="https://www.scottohara.me/blog/2021/05/28/disabled-links.html" rel="noopener external" target="_blank" title="article désactiver un lien - Nouvelle fenêtre" rel="noopener external" lang="en">Disabling a link</a>
