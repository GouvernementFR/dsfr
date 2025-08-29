---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Onglet
shortTitle: Accessibilité de l'Onglet
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Onglet.
shortDescription: Structuration de contenu avec des onglets
keywords: onglets, composant, interface, navigation, accessibilité, design système, UX, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le composant Onglets permet de regrouper plusieurs sections de contenu dans un espace réduit en affichant une seule section à la fois. Il est utile pour simplifier la lecture et améliorer l’expérience utilisateur.
summary: Cette fiche détaille le fonctionnement du composant Onglets du design système de l’État. Elle décrit ses usages recommandés, ses règles d’intégration et d’accessibilité, ainsi que son comportement responsive. Le contenu est destiné aux équipes design et développement souhaitant structurer des interfaces avec plusieurs sections de contenu apparentées tout en maintenant une expérience claire et fluide.
mesh:
  - component/accordion
  - component/modal
---

## Onglet

Le système d’onglets permet de structurer et de présenter plusieurs sections de contenu liées, en affichant une seule section à la fois dans un espace limité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Onglet** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Pour la liste des onglets&nbsp;:

- `Tab` :
  - Lorsque le focus arrive dans la liste des onglets, place le focus sur l'onglet actif.
  - Lorsque le focus est placé sur l'onglet actif, déplace le focus sur le panneau de l'onglet actif.
  - Lorsque le focus est placé sur le panneau de l'onglet actif, déplace le focus sur le prochain élément focalisable.
- `Maj + Tab` :
  - Lorsque le focus est placé sur l'onglet actif, déplace le focus sur l'élément focalisable précédent.
  - Lorsque le focus est placé sur le panneau de l'onglet actif, déplace le focus sur le panneau de l'onglet actif.
- `Flèche gauche` ou `Flèche droite` :
  - Lorsque le focus est placé sur l'onglet actif, navigue entre les onglets.

### Règles d’accessibilité

Le composant **Onglet** s’appuie sur le motif de conception ARIA <span lang="en">Tabs</span> de l’<a href="https://www.w3.org/WAI/ARIA/apg/about/introduction/" rel="noopener external" target="_blank" title="W3C - nouvelle fenêtre" lang="en">Authoring Practices Guide</a> (APG).

#### Structuration

##### Liste d’onglets

- Le conteneur des onglets a un `role="tablist"`.
- Le système d’onglets doit avoir un nom accessible. On peut utiliser un attribut `aria-label` ou une liaison avec un attribut `aria-labelledby`.
- Chaque élement `<li>` de la liste des onglets a un rôle `presentation`.

##### Onglets

- Chaque onglet a un `role="tab"` et est associé à son panneau avec l’attribut `aria-controls`.
- Un attribut `aria-selected`est placé sur chaque onglet. Sa valeur est définie à&nbsp;:
  - `true`&nbsp;: lorsque l’onglet est sélectionné,
  - `false`&nbsp;: lorsque l’onglet n’est pas sélectionné.
- L’onglet sélectionné est également signalé par la couleur et la forme.
- Les onglets non sélectionnés ont un attribut `tabindex="-1"` pour ne pas prendre le focus.

##### Panneaux de contenu

- Chaque élément contenant le panneau de contenu d’un onglet a le rôle `tabpanel` et un attribut `tabindex="0"` pour aider les technologies d’assistance à naviguer vers le contenu.
- Le panneau est associé à l’onglet avec l’attribut `aria-labelledby`.

#### Scroll horizontal

Le composant utilise le scroll horizontal natif du navigateur lorsque le nombre d’onglets dépasse la largeur du conteneur.

Le critère 13.10 du RGAA ne s’applique donc pas (cas particulier).

#### Contrastes de couleurs

Le composant Onglet est suffisamment contrasté en thème clair et en thème sombre.

---
### Restitution par les lecteurs d’écran

La restitution du système d’onglets est restitué différemment selon les lecteurs d’écran.

- Lorsque le lecteur d’écran est sur la liste d’onglets (`role="tablist"`)&nbsp;: le nom et le rôle sont restitués, sauf sur VoiceOver iOS qui ne restitue rien.
- Lorsque le lecteur d’écran est sur un onglet (`role="tab"`, `aria-selected`)&nbsp;: le nom, le rôle et l’état sont restitués par tous les lecteurs d’écran.
- Lorsque le lecteur d’écran est positionné sur le panneau (`role="tabpanel"`)&nbsp;: le nom, le rôle sont restitués, sauf sur VoiceOver iOS qui ne restitue rien.

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

- **Couleurs&nbsp;:** 3.1, 3.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Motif de conception WAI-ARIA Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
