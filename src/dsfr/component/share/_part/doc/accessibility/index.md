---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Partage
shortTitle: Accessibilité du Partage
description: Présentation du composant Partage permettant à l’usager de diffuser un contenu via les réseaux sociaux, un email ou un lien direct.
shortDescription: Partager un contenu via différents canaux
keywords: partage, réseaux sociaux, interaction, DSFR, accessibilité, design système, bouton, lien
cover: ../_asset/cover/cover.png
excerpt: Le composant Partage permet à l’usager de diffuser une page ou un contenu en quelques clics à travers plusieurs canaux comme les réseaux sociaux, l’email ou un lien copié.
summary: Ce composant facilite la diffusion de contenus numériques en permettant aux usagers de partager une page via des boutons accessibles et adaptés à chaque canal. Il garantit une intégration cohérente avec les règles d’accessibilité, une présentation compacte et une compatibilité avec les outils de gestion du consentement pour les services tiers.
---

## Partage

Le partage est un groupe d’éléments d’interaction avec l’interface permettant à l’usager de partager le contenu consulté via différents canaux.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Partage** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

- Les boutons ou liens de partage sont structurés dans une liste.
- Le bouton pour copier le lien de la page doit être un élément `button`.

Voir les [règles d'accessibilité du composant Lien](../../../../link/_part/doc/accessibility/index.md#regles-d-accessibilite) et les [règles d’accessibilité du composant Bouton](../../../../button/_part/doc/accessibility/index.md#regles-d-accessibilite).

#### Version inactive

- La mention d’information est située avant la liste de liens et de boutons de partage dans le code HTML.
- Les liens-icônes ou boutons-icônes désactivés conservent un ratio de contraste minimum de 3.
- Les liens désactivés n’ont pas d’attribut href et possèdent les attributs `aria-disabled="true"` et `role="link"`.

#### Bouton ou lien ?

>[!NOTE]
>Un bouton permet de **déclencher une action ou un événement**&nbsp;:
>
>- **nativement** en fonction du type du bouton&nbsp;: envoi d’un formulaire (`submit`), suppression de contenu de champs de formulaire (`reset`)&nbsp;;
>- **en JavaScript**&nbsp;: ouverture d’une fenêtre modale, fermeture d’un contenu, modification de la page…
>
>Un lien `<a href>` permet de rediriger vers une autre page ou à un autre endroit dans la page (ancre).

#### Contrastes de couleurs

Le composant Partage est suffisamment contrasté en thème clair et en thème sombre.

:::fr-table[Contraste des textes et des icônes]{valign=top scroll=false caption=true}
| Élément |  Thème clair | Thème sombre |
|------|-----|-----|
|**Texte Partager**| 11,4:1| 5,7:1 |
|**Lien-icône inactif**| 3:1 | 3,2:1 |
|**Lien-icône actif**| 14,9:1| 5,7:1 |
|**Mention d’information**| 5,7:1| 5,8:1 |
:::

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type**. L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran&nbsp;:

- VoiceOver macOS et iOS&nbsp;: «&nbsp;estompé&nbsp;»
- NVDA et JAWS&nbsp;: «&nbsp;non disponible&nbsp;»
- Narrateur et Talkback &nbsp;: «&nbsp;désactivé&nbsp;»

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

- **Couleurs** : 3.2, 3.3
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Éléments obligatoires** : 8.9
- **Structuration** : 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation** : 12.9
- **Consultation** : 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Ressources

- [Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)