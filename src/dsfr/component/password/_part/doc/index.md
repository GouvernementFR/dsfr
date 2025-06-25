---
title: Mot de passe
shortTitle: Mot de passe
titleId: Password
description: Le champ mot de passe permet à l’usager de créer ou saisir un mot de passe lors d’une connexion ou d’une création de compte, avec des règles de sécurité adaptées à chaque usage.
shortDescription: Saisie ou création de mot de passe, avec affichage masqué et recommandations de sécurité.
keywords: mot de passe, sécurité, connexion, création de compte, champ, saisie, formulaire, visibilité, ANSSI, DSFR
cover: ./_asset/cover/cover.png
excerpt: Le champ mot de passe permet d’accompagner l’usager lors de la création ou la saisie d’un mot de passe, avec affichage masqué, retour d’erreur et règles de sécurité.
summary: Le composant mot de passe est conçu pour les cas d’usage de création de compte ou de connexion. Il propose une saisie masquée par défaut avec la possibilité d’afficher le contenu saisi, une gestion des erreurs en cas de non-conformité aux règles de sécurité, ainsi que des textes d’accompagnement dynamiques. Ce composant respecte les recommandations de l’ANSSI et s’intègre au sein des pages d’authentification du DSFR.
---

## Mot de passe

Le mot de passe est un élément d’interaction avec l’interface permettant d’aider l’usager à créer ou saisir un mot de passe.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=password--password}

### Quand utiliser ce composant ?

Utiliser le mot de passe lorsque votre service nécessite de demander à l’usager de créer ou saisir un mot de passe, notamment dans les cas de création de compte ou de connexion.

Pour ces deux usages, des modèles de pages sont à disposition : [page de création de compte](../../../../layout/page/register/_part/doc/index.md) et [page de connexion](../../../../layout/page/login/_part/doc/index.md).

### Comment utiliser ce composant ?

- **Permettre à l’usager de saisir le mot de passe par copier/coller** dans le champ de saisie afin de simplifier son expérience.
- **Masquer le mot de passe par défaut** mais donner la possibilité à l’usager de l'afficher au besoin. Sur certains navigateurs, le dernier caractère saisi reste visible.
- **Appliquer une contrainte sur le nombre de caractères maximum uniquement si vous le souhaitez**. Le composant ne l’impose pas par défaut et autorise la saisie de long mot de passe.
- **Adapter le niveau de contrainte du mot de passe demandé à l’usager au besoin de sécurité de votre service** afin de ne pas rendre la saisie difficile si cela ne le nécessite pas (cf. [Guide des règles de sécurisation de mot de passe de l’ANSSI](https://www.ssi.gouv.fr/guide/mot-de-passe/))
- **Éviter tant que possible de forcer le changement de mot de passe par l’usager** (tous les mois ou trimestres, par exemple). Cette pratique complexifie la mémorisation pour l’usager et donc l’accès à votre service. Cette recommandation est évidemment à adapter selon les contraintes de sécurité auxquelles votre service est soumis.
- **Veiller à ne jamais envoyer de mot de passe en clair par mail ou autre** si vous proposez un système de récupération de mot de place. Redirigez plutôt l’usager vers un formulaire temporaire lui permettant de mettre à jour son mot de passe.

### Règles éditoriales

Le mot de passe n’est régi par aucune règle éditoriale spécifique.
