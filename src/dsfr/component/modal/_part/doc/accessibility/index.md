---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la modale
shortTitle: Accessibilité de la Modale
description: Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.
shortDescription: Affichage focalisé d’un contenu secondaire
keywords: modale, fenêtre, focus, interaction, DSFR, accessibilité, interface, contenu secondaire
cover: ../_asset/cover/cover.png
excerpt: Le composant Modale permet d’afficher un contenu ou une interaction dans une fenêtre superposée à la page, bloquant le fond et recentrant l’attention de l’usager.
summary: La modale s’utilise pour présenter un contenu complémentaire ou une action simple sans sortir de la page en cours. Elle est conçue pour isoler une information importante tout en permettant de revenir au contexte initial en un clic. Non personnalisable, elle existe en plusieurs tailles, avec ou sans zone d’action, et respecte les standards d’accessibilité en figant l’arrière-plan lors de son affichage.
---

## Modale

La modale est un élément de mise en forme de contenu permettant de concentrer l’attention de l’usager exclusivement sur une tâche ou un élément d’information, sans perdre le contexte de la page en cours.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Modale** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

À l’intérieur de la fenêtre modale&nbsp;:

- `Échap`&nbsp;: referme la modale et place le focus sur le bouton d’ouverture de la modale ou à un endroit approprié si le bouton disparaît.
- `Tab`&nbsp;: place le focus sur le prochain élément focalisable de la modale.
- `Maj` + `Tab`&nbsp;: place le focus sur l'élément focalisable précédent.

**Le focus doit rester dans la fenêtre modale tant qu’elle n’est pas fermée.**

### Règles d’accessibilité

Le composant **Modale** s’appuie sur le motif de conception ARIA <span lang="en">Dialog</span> de l’<a href="https://www.w3.org/WAI/ARIA/apg/about/introduction/" lang="en">Authoring Practices Guide</a> (APG).

- L’élément qui déclenche l’ouverture de la fenêtre modale doit être un `button`.
- La modale utilise l’élément HTML `<dialog>`.
- Elle dispose d’un attribut `aria-modal="true"` pour indiquer aux lecteurs d'écran que l’élément est une modale lorsqu'il est affiché.
- La modale doit avoir un **nom accessible**. Elle est nommée avec un attribut `aria-labelledby` défini sur l’ID du titre de la fenêtre modale.
- La modale a un titre de niveau `h2` à `h6`, en fonction de son positionnement dans le DOM, ou sous forme de balise `<p>`.

> [!TIP]
> Le role="dialog" n’est plus nécessaire sur l’élément HTML `<dialog>`.
>
>Pour que le focus soit bien capturé à l’intérieur de la modale, utiliser la méthode `showModal()` avec l’élément `<dialog>`.

### Restitution par les lecteurs d’écran

L’élément `<dialog>` est restitué différemment selon les lecteurs d’écran.

Tous les lecteurs d’écran restituent le nom accessible et le rôle de la modale.

- Talkback, Narrateur et Jaws&nbsp;: nom, boîte de dialogue
- NVDA : nom, dialogue
- VO iOS / VO macOS : nom, boîte de dialogue web

Note&nbsp;: VoiceOver macOS ne restitue pas le nom de la modale avec Firefox et Chrome.

#### Capture du focus

Note : le focus n’est pas capturé avec les lecteurs d’écran mobiles sur la version actuelle du composant Modale.

:::fr-accordion[#### Versions navigateurs et lecteurs d’écran]{id=sr-le-desktop}

Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web&nbsp;:

- Firefox 138
- Chrome 135
- Safari 18.4 (sur macOS uniquement)
- Microsoft Edge 135 (sur Windows 11 uniquement)

Version des lecteurs d’écran&nbsp;:
- NVDA 2024.4.2
- JAWS 2024
- VoiceOver macOS 15.4
- Narrateur (Windows 11)
- VoiceOver iOS
:::

---

### Critères RGAA applicables
- **Couleurs&nbsp;:** 3.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Motif de conception WAI-ARIA Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [L’élément HTML dialog](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)
- [Attribut aria-modal](https://www.w3.org/TR/wai-aria/#aria-modal)
