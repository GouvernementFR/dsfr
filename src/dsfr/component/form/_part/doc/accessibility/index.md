---
title: Accessibilité des formulaires
---

## Formulaires

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Les composants de formulaire sont conçus pour être accessibles et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Aucune interaction spécifique n'est associée au formulaire.

Les interactions clavier du formulaire sont celles liées aux éléments de formulaire qu'il contient : [champs de saisie](../../../../input/_part/doc/accessibility/index.md), [boutons](../../../../button/_part/doc/accessibility/index.md), [liste déroulante](../../../../select/_part/doc/accessibility/index.md), [cases à cocher](../../../../checkbox/_part/doc/accessibility/index.md), [boutons radio](../../../../radio/_part/doc/accessibility/index.md), [Ajout de fichier](../../../../upload/_part/doc/accessibility/index.md), etc.

#### Règles d’accessibilité

- Utiliser la balise sémantique `<fieldset>` pour structurer un ensemble d'élément de formulaire.
- Utiliser la balise sémantique `<legend>` pour décrire le groupe d'éléments de formulaire.
- Lorsque qu’un message d'information/erreur/avertissement/succès est ajouté à la fin du formulaire, utiliser l'attribut `role="group"` et l'attribut `aria-labelledby` pour associer la légende **et** le message au `<fieldset>`.

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 11.11, 11.12, 11.13
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Tutoriel WAI - Formulaires](https://www.w3.org/WAI/tutorials/forms/)
