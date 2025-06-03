---
title: Accessibilité du Mot de passe
shortTitle: Accessibilité du Mot de passe
description: Le champ mot de passe permet à l’usager de créer ou saisir un mot de passe lors d’une connexion ou d’une création de compte, avec des règles de sécurité adaptées à chaque usage.
shortDescription: Saisie ou création de mot de passe, avec affichage masqué et recommandations de sécurité.
keywords: mot de passe, sécurité, connexion, création de compte, champ, saisie, formulaire, visibilité, ANSSI, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le champ mot de passe permet d’accompagner l’usager lors de la création ou la saisie d’un mot de passe, avec affichage masqué, retour d’erreur et règles de sécurité.
summary: Le composant mot de passe est conçu pour les cas d’usage de création de compte ou de connexion. Il propose une saisie masquée par défaut avec la possibilité d’afficher le contenu saisi, une gestion des erreurs en cas de non-conformité aux règles de sécurité, ainsi que des textes d’accompagnement dynamiques. Ce composant respecte les recommandations de l’ANSSI et s’intègre au sein des pages d’authentification du DSFR.
---

## Mot de passe

Le mot de passe est un élément d’interaction avec l’interface permettant d’aider l’usager à créer ou saisir un mot de passe.

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

Le composant **Mot de passe** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le champ de mot de passe :

- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- Le champ de mot de passe doit être associé à un `<label>` pour indiquer son libellé. L'attribut `for` du `<label>` doit correspondre à l'attribut `id` du `<input>`. Ainsi, le clic sur le label place le focus sur le champ de mot de passe.
  - Il doit disposer du type `password`.
  - Utiliser l’attribut `autocomplete="new-password"` pour la création et `autocomplete="current-password"` pour la connexion.
  - Reprendre les éléments d'accessibilité liés au composant [champ de saisie](../../../../input/_part/doc/accessibility/index.md).
- Un **message** d'information, d'erreur ou de succès peut être associé au mot de passe. Son attribut `id` doit être associé à l'attribut `aria-describedby` du champ de mot de passe. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé au technologies d'assistance en utilisant l'attribut `aria-live="polite"`.
- La **case à cocher** pour révéler ou masquer le mot de passe doit être associé à un `<label>` pour indiquer son libellé. L'attribut `for` du `<label>` doit correspondre à l'attribut `id` de l'`<input>` de type `checkbox`.
  - Le libellé de la case à cocher doit être explicite et décrire clairement l'action que le bouton représente.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
