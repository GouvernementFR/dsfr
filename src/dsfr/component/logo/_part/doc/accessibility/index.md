---
title: Accessibilité du bloc marque
---

## Bloc marque

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

#### Interactions clavier

Aucune interaction spécifique n'est associée au bloc marque.

#### Règles d'accessibilité

Les logos doivent être accessibles pour tous les utilisateurs, y compris ceux utilisant des technologies d'assistance. Voici quelques recommandations :

- Utiliser l'élément HTML `<p>` ou un niveau de titre `<h1>` à `<h6>` pour décrire l'intitulé officiel.
- Un lien est généralement ajouté autour du bloc marque pour permettre à l'utilisateur de naviguer vers la page d'accueil du site.
  - Dans ce cas, l'attribut `title` doit être utilisé pour décrire la destination du lien.
  - Lorsqu'un logo opérateur est présent à coté du bloc marque, le lien doit être placé autour du logo opérateur et étendu, avec la classe `fr-enlarge-link`, à toute la zone contenant le logo opérateur et le bloc marque.

#### Références

- [https://www.info.gouv.fr/marque-de-letat/le-bloc-marque](https://www.info.gouv.fr/marque-de-letat/le-bloc-marque)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
