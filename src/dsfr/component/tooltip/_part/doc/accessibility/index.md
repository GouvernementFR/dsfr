---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'infobulle
shortTitle: Démonstration de l'infobulle
description: L’infobulle est un composant d’aide contextuelle permettant d’afficher une information complémentaire lors du survol ou du clic sur un élément de l’interface.
shortDescription: Afficher une aide contextuelle discrète.
keywords: infobulle, aide contextuelle, tooltip, accessibilité, survol, interface, UX, design system, indication, contenu complémentaire
cover: ../_asset/cover/cover.png
excerpt: L’infobulle permet de fournir une information non essentielle de manière discrète et temporaire. Elle s’affiche au survol ou au clic et reste limitée en contenu.
summary: Ce contenu décrit les usages du composant Infobulle, conçu pour afficher une information complémentaire lorsqu’elle ne peut être intégrée directement dans la page. Il en précise les cas d’usage, les limites d’affichage sur mobile, et les bonnes pratiques d’écriture et de comportement. L’infobulle doit être concise, sans mise en forme ni interaction, et n’être utilisée que pour des précisions non essentielles. Ce guide s’adresse aux concepteurs d’interfaces souhaitant améliorer la compréhension utilisateur sans alourdir la structure de la page.
mesh:
  - component/modal
  - component/display
---

## Infobulle

L’infobulle (ou bulle d’aide, aide contextuelle) est un élément d’indication permettant d’afficher un contenu complémentaire lié à un élément précis de l’interface.

Elle est cachée par défaut et s’affiche par-dessus le reste de la page lors du survol ou au clic de l’élément associé.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Infobulle** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

L’infobulle doit être accessible au clavier, lorsque le focus est placé sur l'élément déclencheur de l'infobulle, celle-ci devient visible.

`Échap` ferme l’infobulle que le focus soit placé sur l’élément déclencheur ou non.

### Règles d’accessibilité

- L’élément qui déclenche l’infobulle a l'attribut `aria-describedby` défini sur l’`id` de l'infobulle.
- L’élément qui sert de conteneur d’infobulle a l'attribut `role="tooltip"`.
- Assurez-vous que le texte de l'infobulle est clair et concis.

>[!WARNING]
>L’utilisation d’une infobulle déclenchée au survol n'est pas une bonne pratique en soi. L’information ne sera pas visible pour les personnes handicapées qui utilisent le contrôle vocal. Il est impossible de garantir l’accessibilité de cette variante du composant.
>Évitez tant que possible son utilisation. Préférez des libellés clairs ou un texte descriptif visible.

#### Contrastes des textes

Le composant Infobulle est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Les lecteurs d’écran restituent différemment le composant Infobulle.

#### Infobulle déclenchée au survol

Seul le Narrateur ne restitue pas l’infobulle déclenchée au survol.

> [!NOTE]
> Avec NVDA et JAWS, en navigation en mode revue (curseur virtuel), la liaison aria-describedby n’est pas restituée sur l’infobulle déclenchée au survol. Il est nécessaire de naviguer sur le lien à la tabulation.

#### Infobulle déclenchée au clic

Tous les lecteurs d’écran restituent le contenu de l’infobulle déclenchée au clic.

> [!NOTE]
> Avec NVDA, en mode revue, la liaison aria-describedby n’est pas restituée sur l’infobulle déclenchée au clic. Il est nécessaire de naviguer sur le lien à la tabulation.
> Il s’agit d’un comportement référencé par NVDA. Voir [commentaire Github](https://github.com/nvaccess/nvda/issues/9153#issuecomment-578381262).

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
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12, 10.13, 10.14
- **Consultation&nbsp;:** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Rôle tooltip](https://www.w3.org/TR/wai-aria/#tooltip)
