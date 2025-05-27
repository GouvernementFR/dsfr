---
title: Accessibilité de l'infobulle
shortTitle: Démonstration de l'infobulle
description: L’infobulle est un composant d’aide contextuelle permettant d’afficher une information complémentaire lors du survol ou du clic sur un élément de l’interface.
shortDescription: Afficher une aide contextuelle discrète.
keywords: infobulle, aide contextuelle, tooltip, accessibilité, survol, interface, UX, design system, indication, contenu complémentaire
cover: ../_asset/cover/cover.png
excerpt: L’infobulle permet de fournir une information non essentielle de manière discrète et temporaire. Elle s’affiche au survol ou au clic et reste limitée en contenu.
summary: Ce contenu décrit les usages du composant Infobulle, conçu pour afficher une information complémentaire lorsqu’elle ne peut être intégrée directement dans la page. Il en précise les cas d’usage, les limites d’affichage sur mobile, et les bonnes pratiques d’écriture et de comportement. L’infobulle doit être concise, sans mise en forme ni interaction, et n’être utilisée que pour des précisions non essentielles. Ce guide s’adresse aux concepteurs d’interfaces souhaitant améliorer la compréhension utilisateur sans alourdir la structure de la page.
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
