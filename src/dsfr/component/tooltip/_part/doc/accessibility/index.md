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

L'infobulle doit être accessible via le clavier. Lorsque le focus est placé sur l'élément déclencheur de l'infobulle celle-ci devient visible.
- `Tab` : Place le focus sur le prochain élément focalisable et ferme l'infobulle.
- `shift` + `Tab` : Place le focus sur l'élément focalisable précédent et ferme l'infobulle.

### Règles d'accessibilité

- L'élément qui déclenche l'infobulle a l'attribut `aria-describedby` défini sur l'`id` de l'infobulle.
- L'élément qui sert de conteneur d'infobulle a l'attribut `role="tooltip"` ([tooltip](https://w3c.github.io/aria/#tooltip)).
- Assurez-vous que le texte de l'infobulle est clair et concis.

>[!WARNING]
>L'utilisation d'une infobulle n'est pas une bonne pratique en soit, ses informations sont masquées et son accessibilité ne peut être garantie. Évitez tant que possible son utilisation. Préférez des libellés clairs ou un texte descriptif.

### Références

- [https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
