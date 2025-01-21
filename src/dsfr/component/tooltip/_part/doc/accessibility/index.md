---
title: Accessibilité de l'Infobulle
---
# Infobulle

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Infobulle** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

L'infobulle doit être accessible via le clavier. Assurez-vous que les éléments déclencheurs de l'infobulle sont accessibles avec la touche Tab et que l'infobulle est visible lors de la prise de focus.

### Règles d'accessibilité

- L'élément qui déclenche l'infobulle fait référence à l'élément conteneur avec l'attribut `aria-describeby`.
- L'élément qui sert de conteneur d'infobulle a l'attribut `role="tooltip"` ([tooltip](https://w3c.github.io/aria/#tooltip)) et `aria-hidden="true"` lorsqu'il est masqué.
- Assurez-vous que le texte de l'infobulle est clair et concis.
- Le contraste entre le texte de l'infobulle et son arrière-plan doit être suffisant pour être lisible.
- L'infobulle doit disparaître lorsque l'utilisateur passe à un autre élément pour éviter toute confusion.

### Bonnes pratiques
Au lieu d'utiliser des infobulles et de masquer des informations importantes, pensez à rédiger des descriptions claires, succinctes et toujours visibles. Si vous avez de l'espace, n'utilisez pas d'infobulles. Fournissez simplement des libellés clairs et un corps de texte suffisant.

### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
