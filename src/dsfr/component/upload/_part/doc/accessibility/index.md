---
title: Accessibilité de l'Ajout de fichier
shortTitle: Accessibilité de l'Ajout de fichier
description: Présentation du composant Ajout de fichier permettant à l’usager de sélectionner et envoyer un ou plusieurs fichiers via une interface.
shortDescription: Sélection et envoi de fichiers
keywords: ajout de fichier, upload, formulaire, interaction, accessibilité, design système, DSFR, sélection, fichier multiple
cover: ../_asset/cover/cover.png
excerpt: Le composant Ajout de fichier permet à l’usager de transmettre un ou plusieurs fichiers à travers une interface, avec des indications claires sur les formats attendus et les erreurs éventuelles.
summary: Ce composant facilite l’envoi de documents par l’usager, en l’intégrant aux formulaires de façon accessible et informative. Il prend en compte les contraintes liées aux fichiers (format, poids, nature), propose des variantes pour l’envoi multiple et signale les erreurs rencontrées lors de l’interaction. Son design est standardisé et non personnalisable pour garantir la cohérence visuelle dans l’ensemble du service.
---

# Ajout de fichier

L’ajout de fichier est un élément d’interaction avec l’interface qui permet à l’usager de sélectionner et d’envoyer un ou plusieurs fichiers.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Ajout de fichier** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le champ d'ajout de fichier :

- `Entrée` : Ouvre la boîte de dialogue pour sélectionner un fichier.
- `Esc` : Referme la boîte de dialogue pour sélectionner un fichier.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Le **libellé** doit être associé au champ d'ajout de fichier via l'attribut `for` et l'id du champ d'ajout de fichier.
- Un **message** d'erreur, d'information, ou de succès peut être associé au champ d'ajout de fichier. Son attribut `id` doit être associé à l'attribut `aria-describedby` du champ d'ajout de fichier. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé au technologies d'assistance en utilisant l'attribut `aria-live="polite"`.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
