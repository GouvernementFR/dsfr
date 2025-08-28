---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Ajout de fichier
shortTitle: Accessibilité de l'Ajout de fichier
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Ajout de fichier.
shortDescription: Sélection et envoi de fichiers
keywords: ajout de fichier, upload, formulaire, interaction, accessibilité, design système, DSFR, sélection, fichier multiple
cover: ../_asset/cover/cover.png
excerpt: Le composant Ajout de fichier permet à l’usager de transmettre un ou plusieurs fichiers à travers une interface, avec des indications claires sur les formats attendus et les erreurs éventuelles.
summary: Ce composant facilite l’envoi de documents par l’usager, en l’intégrant aux formulaires de façon accessible et informative. Il prend en compte les contraintes liées aux fichiers (format, poids, nature), propose des variantes pour l’envoi multiple et signale les erreurs rencontrées lors de l’interaction. Son design est standardisé et non personnalisable pour garantir la cohérence visuelle dans l’ensemble du service.
mesh:
  - component/form
---

## Ajout de fichier

L’ajout de fichier est un élément d’interaction avec l’interface qui permet à l’usager de sélectionner et d’envoyer un ou plusieurs fichiers.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Ajout de fichier** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le champ d’ajout de fichier&nbsp;:

- `Entrée` ou `Espace`&nbsp;: ouvre la boîte de dialogue d’ajout de fichier.
- `Échap`&nbsp;: referme la boîte de dialogue d’ajout de fichier.

### Règles d’accessibilité

- Le champ d’ajout de fichier possède un nom accessible avec un `label` relié au champ avec une liaison entre l’attribut `for` et l’attribut id du champ d'ajout de fichier.
- Un **message** d'erreur, d'information, ou de succès peut être associé au champ d'ajout de fichier. Son attribut `id` doit être associé à l'attribut `aria-describedby` du champ d'ajout de fichier.

#### Contrastes de couleurs

Le composant est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Ajout de fichier.

> [!NOTE]
> Avec les lecteurs d’écran mobiles, le focus est repositionné en haut de page au lieu d’être repositionné sur le composant.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.4, 11.10, 11.11
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Input type file](https://html.spec.whatwg.org/#file-upload-state-(type=file))
