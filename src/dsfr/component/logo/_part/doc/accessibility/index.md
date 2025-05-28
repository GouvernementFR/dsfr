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

Le bloc marque est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Aucune interaction spécifique n’est associée au bloc marque.

#### Règles d’accessibilité

Les logos doivent être accessibles pour tous les utilisateurs, y compris ceux utilisant des technologies d'assistance. Voici quelques recommandations :

- Utiliser l'élément HTML `<p>` ou un niveau de titre `<h1>` à `<h6>` pour décrire l'intitulé officiel.
- Un lien est généralement ajouté autour du bloc marque pour permettre à l'utilisateur de naviguer vers la page d'accueil du site.
  - Dans ce cas, l'attribut `title` doit être utilisé pour décrire la destination du lien.
  - Lorsqu’un logo opérateur est présent à côté du bloc marque, le lien doit être placé autour du logo opérateur et étendu, avec la classe `fr-enlarge-link`, à toute la zone contenant le logo opérateur et le bloc marque.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Bloc marque.

---

### Critères RGAA applicables
- **Couleurs :** 3.2
- **Liens :** 6.1, 6.2
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.1
- **Présentation de l’information :** 10.1, 10.2, 10.4, 10.5, 10.11, 10.12
- **Navigation :** 12.8, 12.9
- **Consultation&nbsp;:** 13.9

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Le bloc-marque](https://www.info.gouv.fr/marque-de-letat/le-bloc-marque)

