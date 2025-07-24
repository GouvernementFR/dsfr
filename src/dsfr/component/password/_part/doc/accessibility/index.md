---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Mot de passe
shortTitle: Accessibilité du Mot de passe
description: Le champ mot de passe permet à l’usager de créer ou saisir un mot de passe lors d’une connexion ou d’une création de compte, avec des règles de sécurité adaptées à chaque usage.
shortDescription: Saisie ou création de mot de passe, avec affichage masqué et recommandations de sécurité.
keywords: mot de passe, sécurité, connexion, création de compte, champ, saisie, formulaire, visibilité, ANSSI, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le champ mot de passe permet d’accompagner l’usager lors de la création ou la saisie d’un mot de passe, avec affichage masqué, retour d’erreur et règles de sécurité.
summary: Le composant mot de passe est conçu pour les cas d’usage de création de compte ou de connexion. Il propose une saisie masquée par défaut avec la possibilité d’afficher le contenu saisi, une gestion des erreurs en cas de non-conformité aux règles de sécurité, ainsi que des textes d’accompagnement dynamiques. Ce composant respecte les recommandations de l’ANSSI et s’intègre au sein des pages d’authentification du DSFR.
mesh:
  - component/alert
  - component/input
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

Le composant **Mot de passe** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

Reprendre les éléments d'accessibilité liés au composant [champ de saisie](../../../../input/_part/doc/accessibility/index.md)

#### Structuration

- Le champ de mot de passe doit avoir :
  - un type `password`.
  - un attribut `autocomplete="new-password"` pour la création ou `autocomplete="current-password"` pour la connexion.
- La **case à cocher** pour révéler ou masquer le mot de passe a un intitulé explicite donné par l’attribut `aria-label` qui reprend l'intitulé visible.

#### Contrastes de couleurs

La navigation principale est suffisamment contrastée en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Mot de passe.

---

### Critères RGAA applicables
- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.9, 11.10, 11.11, 11.13
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
