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

Les composants de formulaire sont conçus pour être accessibles et suivent les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Aucune interaction spécifique n'est associée au formulaire.
Les interactions clavier du formulaire sont celles liées aux éléments de formulaire qu'il contient : [champs de saisie](../../../../input/_part/doc/accessibility/index.md), [boutons](../../../../button/_part/doc/accessibility/index.md), [liste déroulante](../../../../select/_part/doc/accessibility/index.md), [cases à cocher](../../../../checkbox/_part/doc/accessibility/index.md), [boutons radio](../../../../radio/_part/doc/accessibility/index.md), [Ajout de fichier](../../../../upload/_part/doc/accessibility/index.md), etc.

#### Règles d'accessibilité

- Utiliser la balise sémantique `<fieldset>` pour structurer un ensemble d'élément de formulaire.
- Utiliser la balise sémantique `<legend>` pour décrire le groupe d'éléments de formulaire.
- Lorsque qu'un message d'information/erreur/avertissement/succès est ajouté à la fin du formulaire, utiliser l'attribut `role="group"` et l'attribut `aria-labelledby` pour associer la légende **et** le message au `<fieldset>`.

#### Références

- [https://www.w3.org/WAI/tutorials/forms/](https://www.w3.org/WAI/tutorials/forms/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
