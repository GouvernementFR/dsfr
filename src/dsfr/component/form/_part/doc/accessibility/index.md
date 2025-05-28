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

Aucune interaction spécifique n’est associée au formulaire.

Les interactions clavier du formulaire sont celles liées aux éléments de formulaire qu’il contient&nbsp;: 
- [champs de saisie](../../../../input/_part/doc/accessibility/index.md),
- [boutons](../../../../button/_part/doc/accessibility/index.md),
- [liste déroulante](../../../../select/_part/doc/accessibility/index.md), 
- [cases à cocher](../../../../checkbox/_part/doc/accessibility/index.md),
- [boutons radio](../../../../radio/_part/doc/accessibility/index.md), 
- [ajout de fichier](../../../../upload/_part/doc/accessibility/index.md), etc.

#### Règles d’accessibilité

##### Regroupement de champs

- Utiliser un élément `<fieldset>` accompagné d’un élément `<legend>` pour regrouper un ensemble de champs de formulaire de même nature lorsque les étiquettes des champs ne sont pas suffisamment explicites.
- La légende du regroupement doit être pertinente.

##### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:
- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span> ()`role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

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
- [Live regions ARIA&nbsp;:bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)