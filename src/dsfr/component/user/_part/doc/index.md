---
title: En-tête connectée
shortTitle: En-tête connectée
titleId: User
description: Déclinaison de l’en-tête standard permettant à l’usager connecté d’accéder à son menu de navigation personnel.
shortDescription: Variante de l’en-tête dédiée aux usagers connectés
keywords: en-tête, menu utilisateur, connexion, compte, connecté, navigation, DSFR, bêta
cover: ./_asset/cover/cover.png
excerpt: Composant en bêta affichant, après connexion, un menu personnel dans l’en-tête avec liens, informations utilisateur et bouton de déconnexion.
summary: L’en-tête connectée est une extension de l’en-tête classique, permettant à un usager connecté d’accéder à un menu déroulant personnalisé. Elle affiche les informations de compte, un ensemble limité de liens de navigation et un bouton de déconnexion. Ce composant est encore en version bêta et n’existe pas en code pour l’instant. Il répond à des cas d’usage d’interface connectée mais ne doit pas remplacer une navigation complète dédiée à l’espace personnel.
badge: beta
---

## En-tête connectée

> [!NOTE]
> **Ce composant est en version bêta.** Il n'existe pas en code et son design ou ses fonctionnalités peuvent encore être amenés à évoluer. N'hésitez pas à nous partager vos cas d'usage ou retours qui le concerne via notre formulaire de contact ou notre Tchap pour que nous puissions les étudier.

Retrouvez ces composants sur Figma [dans un fichier dédié bêta disponible sur Community](https://www.figma.com/community/file/1096003483468520396).

L’en-tête connectée est une déclinaison de l’en-tête et propose un menu déroulant contenant des options parmi lesquelles un usager peut naviguer vers les pages liées à son compte.

Un texte de description est présent dans le conteneur, indiquant les nom, prénom et adresse email de l’usager et est accompagné d’un bouton de déconnexion.

:::dsfr-doc-tab-navigation

- Présentation
- [Design](./design/index.md)

:::

![](./_asset/presentation/presentation-1.png)

### Quand utiliser ce composant ?

Utiliser l’en-tête connectée pour permettre à l’usager d’avoir des informations sur son compte, pour grouper des actions ou des liens de navigation.

Le menu déroulant dans l’en-tête est présent lorsque l’usager s’est connecté sur une page dédiée.

### Comment utiliser ce composant ?

- **Utiliser l’en-tête connectée pour grouper des liens de navigation** vers des pages internes de l’usager.
- **Utiliser l’en-tête connectée uniquement si la place disponible permet d’accueillir le bouton du menu déroulant**. Il est recommandé de ne pas la cumuler avec un grand nombre de liens d’accès rapide ou en présence du bouton des paramètres d’affichage.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Positionner l’en-tête connectée à l’emplacement d’un des accès rapide.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-1.png)

Ne pas proposer l’en-tête connectée en dehors des accès rapides

:::

::::

- **Conserver un fonctionnement simple**. N'imbriquer pas de menus déroulants, par exemple.

### Règles éditoriales

- **Utiliser des libellés courts, concis et faciles à comprendre**.
- **Eviter de proposer des options qui s’étendent sur plusieurs lignes**.