---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Bouton FranceConnect
shortTitle: Accessibilité du Bouton FranceConnect
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Bouton FranceConnect.
shortDescription: Authentification avec FranceConnect
keywords: FranceConnect, authentification, identité numérique, connexion, bouton, DSFR, sécurité, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le bouton FranceConnect permet de proposer une méthode de connexion sécurisée en utilisant l’identité numérique d’un fournisseur agréé. Il s’intègre dans les interfaces comme premier choix d’authentification.
summary: Ce composant permet à l’usager de se connecter à un service public en ligne via FranceConnect, solution officielle d’identification. Il garantit la fiabilité de l’identité transmise et s’intègre comme option d’authentification prioritaire. Le bouton suit des règles d’intégration strictes pour assurer sa clarté, éviter toute confusion avec d’autres services et maintenir la confiance dans la marque FranceConnect.
mesh:
  - component/button
  - layout/page/register
  - layout/page/login
---

## Bouton FranceConnect

Le bouton FranceConnect est un élément d’interaction avec l’interface proposant à l’usager d’utiliser ses identifiants de connexion à l’un des fournisseurs d’identités ([impots.gouv.fr](http://impots.gouv.fr/), [ameli.fr](http://ameli.fr/), [l’Identité Numérique La Poste](https://lidentitenumerique.laposte.fr/), etc.) pour se connecter à un autre site.

Le fournisseur de service récupère auprès de FranceConnect un identifiant unique et une identité vérifiée par l’INSEE. Il est primordial dans l’usage du service FranceConnect et garantit sa reconnaissance et la confiance en la marque.

Retrouver le fonctionnement en détail ici : [https://docs.partenaires.franceconnect.gouv.fr/](https://docs.partenaires.franceconnect.gouv.fr/)

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Bouton FranceConnect** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

## Interactions clavier

Aucune interaction au clavier spécifique au composant.

## Règles d’accessibilité

### Structure

Le **bouton de connexion** est structuré dans un élément `button`.
Il est possible de le structurer dans un élément `a href` également si besoin.

Le **lien «&nbsp;Qu’est-ce que FranceConnect&nbsp;?&nbsp;»** s’ouvre dans un nouvel onglet ou une nouvelle fenêtre.

Il est nécessaire d’ajouter un attribut `title` qui reprend l’intitulé du lien pour l’indiquer.
Ex. `title="Qu’est-ce que FranceConnect ? - nouvelle fenêtre"`

### Contenu inséré en CSS

Sur la variante FranceConnect+, le + est inséré en CSS avec la propriété `content` et le pseudo-élément `::after` sur le bouton de connexion.

> [!NOTE]
> **La [technique F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87) de WCAG, encore référencée sur le critère 10.2 du RGAA, est désormais obsolète**.
> En effet, les contenus porteurs d’information insérés avec la propriété CSS `content` sont désormais bien restitués par les technologies d’assistance.

**Il est néanmoins plus robuste d’utiliser le HTML pour les contenus porteurs d’information**.

À noter que les contenus porteurs d’information insérés avec CSS peuvent poser des problèmes d’utilisabilité.
Selon les navigateurs, le contenu ne peut pas être recherché, sélectionné, copié, collé. Il n’apparaît pas non plus dans certains modes de lecture des navigateurs.

### Contrastes de couleurs

Le composant est suffisament contrasté en thème clair et en thème sombre.

:::fr-table[Contrastes des textes]{valign=top multiline=true caption=false}
| Texte |  Thème clair | Thème sombre |
|------|-----|-----|
|Bouton|14,9:1|4,7:1|
|Lien|14,9:1|5,8:1|

---

### Restitution par les lecteurs d’écran

Des tests de restitution ont été effectués avec les différents lecteurs d’écran ainsi qu’avec d’autres technologies d’assistance (contrôle vocal, loupe d’écran vocalisée) sur le contenu inséré en CSS.

**L’implémentation est bien supportée et restituée partout.**

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
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Technique F87 - WCAG](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87)
