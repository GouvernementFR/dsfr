---
title: Boutons FranceConnect et ProConnect
shortTitle: Boutons FranceConnect et ProConnect
titleId: Connect
description: Présentation des Boutons FranceConnect et ProConnect permettant à l’usager de s’authentifier via un fournisseur d’identité officiel reconnu par l’État.
shortDescription: Authentification avec FranceConnect et/ou ProConnect
keywords: FranceConnect, ProConnect, authentification, identité numérique, connexion, bouton, DSFR, sécurité, accessibilité
cover: ./_asset/cover/cover.png
excerpt: Les boutons FranceConnect et ProConnect permettent de proposer une méthode de connexion sécurisée en utilisant l’identité numérique d’un fournisseur agréé. Ils s’intègrent dans les interfaces comme premier choix d’authentification.
summary: Ces composants permettent à l’usager de se connecter à un service public en ligne via FranceConnect et/ou ProConnect, solutions officielles d’identification. Ils garantissent la fiabilité de l’identité transmise et s’intègrent comme option d’authentification prioritaire. Ces boutons suivent des règles d’intégration strictes pour assurer leur clarté, éviter toute confusion avec d’autres services et maintenir la confiance dans la marque FranceConnect et/ou ProConnect.
mesh:
  - component/button
  - layout/page/register
  - layout/page/login
---

## Boutons FranceConnect et ProConnect

Les boutons FranceConnect et ProConnect sont des éléments d’interaction avec l’interface proposant à l’usager de se connecter à un service via un compte appelé  fournisseur d’identité (type [impots.gouv.fr](http://impots.gouv.fr/), [ameli.fr](http://ameli.fr/), [l’Identité Numérique La Poste](https://lidentitenumerique.laposte.fr/), [France Identité](https://france-identite.gouv.fr/), etc.).

Le service sur lequel l’usager se connecte récupère auprès de FranceConnect et/ou ProConnect un identifiant technique unique ainsi que des données d’identité vérifiées par l’INSEE qui permettent de garantir l’authentification de l’usager.

Retrouver le détail de leurs fonctionnements et conditions d’éligibilité ici : [https://franceconnect.gouv.fr](https://franceconnect.gouv.fr/partenaires) et [https://www.proconnect.gouv.fr/](https://www.proconnect.gouv.fr/)

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=connect--connect}

::dsfr-doc-storybook{storyId=connect--pro-connect}

### Quand utiliser ce composant ?

Utiliser le bouton FranceConnect ou ProConnect pour proposer une connexion ou une création de compte simplifiée à l’usager.

> [!WARNING]
> Le service FranceConnect est uniquement utilisable par des administrations etu fournisseurs de logiciel agissant pour le compte d’une administration ou d’un organisme  privé, qui justi d’une obligation légale de  vérifier l’identité des utilisateurs de vos propres services en ligne.
> ProConnect adresse également les professionnels du privé.

### Comment utiliser ce composant ?

- **Proposer l’un des boutons de connexion en premier mode d’authentification.** Il est positionner au-dessus des autres moyens de connexion proposés.
- **Accompagner le bouton du lien « Qu’est-ce que [nom du service] ? »**, positionné en-dessous, redirigeant vers l’URL [www.franceconnect.gouv.fr](http://www.franceconnect.gouv.fr) ou [www.proconnect.gouv.fr](https://www.proconnect.gouv.fr/) (cf. rubrique “Design”).
- **Dissocier visuellement vos moyens de connexion natifs** du bouton de connexion. Une séparation visible doit être mise en place.
- **Présenter les bouton de connexion comme une alternative** à un autre mode d’identification. La notion de "ou" doit figurer clairement (FranceConnect/ProConnect ou un autre mode d’identification).
- **Éviter toute confusion sur la nature du service proposé** en évitant de le positionner près de liens, d’icônes ou de services d'identification liés à des réseaux sociaux ou autres services similaires. FranceConnect et ProConnect ne sont pas des réseaux sociaux et ne doivent pas être présentés ou susceptibles d’être perçus comme tels par l’usager.
- **Ouvrir la page de choix du fournisseur d’identité dans l’onglet actif de l’usager**. Elle ne doit pas être proposée dans une modale ou une pop-up au-dessus du site.

### Règles éditoriales

- **Garantir la compréhension de l’utilisateur** en accompagnant le bouton FranceConnect de la phrase : « FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion à vos services en ligne ».
- **Faire attention à l’écriture des termes « FranceConnect » et « ProConnect »** en accolant les deux mots partout où les services sont mentionnés.
