---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Accordéon
shortTitle: Accessibilité de l'Accordéon
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Accordéon.
shortDescription: Masquer ou révéler du contenu textuel
keywords: accordéon, contenu, interaction, affichage, design système, DSFR, accessibilité, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Accordéon permet à l’usager d’ouvrir ou fermer une section de contenu dans une page, pour en faciliter la lecture et alléger la structure globale.
summary: Utilisé pour structurer et hiérarchiser du contenu éditorial, l’accordéon masque par défaut les informations secondaires pour ne révéler que ce que l’usager souhaite consulter. Il est particulièrement utile dans les longues pages de contenu. Il permet des interactions simples, peut être utilisé seul ou en groupe, et respecte des règles strictes de lisibilité et d’accessibilité.
mesh:
  - component/modal
  - component/tab
---

## Accordéon

L’accordéon est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer une section de contenu présentée dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant Accordéon est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est sur le bouton d’ouverture de l’accordéon&nbsp;:

- `Entrée`&nbsp;: ouvre ou ferme la zone de contenu associée.
- `Espace`&nbsp;: ouvre ou ferme la zone de contenu associée.

Navigation entre les accordéons&nbsp;:

- `Tab`&nbsp;: déplace le focus sur le bouton suivant.
- `Maj` + `Tab`&nbsp;: déplace le focus sur le bouton précédent.

Si une zone de contenu de l’accordéon est ouverte, tous les éléments interactifs à l’intérieur sont inclus dans le parcours de navigation au clavier.

### Règles d’accessibilité

Le composant **Accordéon** s’appuie sur le motif de conception ARIA <span lang="en">Accordion</span> de l’<a href="https://www.w3.org/WAI/ARIA/apg/about/introduction/" target="_blank" rel="noopener external" title="Authoring Practices Guide - nouvelle fenêtre" lang="en">Authoring Practices Guide</a> (APG).

#### Titre de l’accordéon

- Le titre de l’accordéon doit être explicite et permettre de comprendre le contenu proposé.
- Le niveau titre de l’accordéon doit être cohérent avec le reste de la page.

#### Bouton de l’accordéon

- Il est placé à l’intérieur de la balise `hx`, autour du texte.
- Il possède deux attributs ARIA&nbsp;:
  - `aria-expanded` défini à :
    - `true` lorsque la zone de contenu contrôlée est affichée,
    - `false` lorsque la zone de contenu contrôlée est masquée.
  - `aria-controls` qui relie le bouton à la zone contrôlée et dont la valeur doit correspondre à l’attribut `id` de la zone de contenu.

#### Groupe d’accordéons

Le comportement par défaut du «&nbsp;Groupe d’accordéons&nbsp;» (ouverture d’un accordéon à la fois seulement) peut poser des problèmes d’utilisabilité pour certaines personnes handicapées.

L’option «&nbsp;Groupe d’accordéons dissociés&nbsp;» est à privilégier par défaut.

#### Contrastes de couleurs

Le composant Accordéon est suffisamment contrasté en thème clair.

Au survol du bouton en thème sombre, le ratio de contraste entre le texte et le fond du bouton est insuffisant.

Le chevron est insuffisamment contrasté au survol uniquement lorsque l’accordéon est ouvert.

:::fr-table[Contraste du texte et du chevron de l’accordéon]{valign=top multiline=true caption=true}
| État du bouton |  Thème clair | Thème sombre |
|------|-----|-----|
|**fermé - par défaut**| 14,9:1 | 5,76:1 |
|**fermé - au survol**| 13,79:1| 4:1 |
|**ouvert - par défaut**| 11,83:1| 4,55:1 |
|**ouvert - au survol**| 13,79:1| 2,6:1 |
:::

### Restitution par les lecteurs d’écran

L’attribut `aria-expanded` est restitué différemment selon les lecteurs d’écran.

- Lorsque l’accordéon est fermé (`aria-expanded="false"`)&nbsp;: «&nbsp;réduit&nbsp;» ou «&nbsp;condensé&nbsp;» (VoiceOver macOS)
- Lorsque l’accordéon est ouvert&nbsp;: «&nbsp;développé&nbsp;» (NVDA, Narrateur, VoiceOver iOS) ou «&nbsp;étendu&nbsp;» (JAWS, VoiceOver macOS, Talkback).

> [!CAUTION]
> - Selon la version de macOS, un [bug de VoiceOver](https://bugs.webkit.org/show_bug.cgi?id=284804) fait qu’il ne restitue pas le changement d’état lorsque le bouton est actionné.
> - Narrateur vocalise le changement d’état lorsque le bouton est actionné **uniquement avec Microsoft Edge**. Sur Chrome et Firefox, le changement d’état n’est pas vocalisé lorsque le bouton est actionné.
>
> Ce sont des bugs des lecteurs d’écran et non un problème avec le composant.

:::fr-accordion[#### Versions navigateurs et lecteurs d’écran]{id=sr-le-desktop}

Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web&nbsp;:

- Firefox 137
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

- **Couleurs&nbsp;:** 3.2, 3.3
- **Scripts&nbsp;:** 7.1, 7.3
- **Structuration&nbsp;:** 9.1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9, 12.11
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Attribut aria-expanded — spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#aria-expanded)
- [Attribut aria-controls — spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#aria-controls)
- [Motif de conception WAI-ARIA Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
