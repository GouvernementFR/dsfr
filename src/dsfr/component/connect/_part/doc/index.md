---
title: Bouton FranceConnect
shortTitle: Bouton FranceConnect
titleId: Connect
description: Présentation du Bouton FranceConnect permettant à l’usager de s’authentifier via un fournisseur d’identité officiel reconnu par l’État.
shortDescription: Authentification avec FranceConnect
keywords: FranceConnect, authentification, identité numérique, connexion, bouton, DSFR, sécurité, accessibilité
cover: ./_asset/cover/cover.png
excerpt: Le bouton FranceConnect permet de proposer une méthode de connexion sécurisée en utilisant l’identité numérique d’un fournisseur agréé. Il s’intègre dans les interfaces comme premier choix d’authentification.
summary: Ce composant permet à l’usager de se connecter à un service public en ligne via FranceConnect, solution officielle d’identification. Il garantit la fiabilité de l’identité transmise et s’intègre comme option d’authentification prioritaire. Le bouton suit des règles d’intégration strictes pour assurer sa clarté, éviter toute confusion avec d’autres services et maintenir la confiance dans la marque FranceConnect.
mesh:
  - component/button
  - layout/page/register
  - layout/page/login
---

## Bouton FranceConnect

Le bouton FranceConnect est un élément d’interaction avec l’interface proposant à l’usager d’utiliser ses identifiants de connexion à l’un des fournisseurs d’identités ([impots.gouv.fr](http://impots.gouv.fr/), [ameli.fr](http://ameli.fr/), [France Identité](https://france-identite.gouv.fr/), etc.) pour se connecter à un autre site.

Le fournisseur de service récupère auprès de FranceConnect un identifiant unique et une identité vérifiée par l’INSEE. Il est primordial dans l’usage du service FranceConnect et garantit sa reconnaissance et la confiance en la marque.

Retrouver le fonctionnement en détail ici : [https://docs.partenaires.franceconnect.gouv.fr/](https://docs.partenaires.franceconnect.gouv.fr/)

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=connect--connect}

### Quand utiliser ce composant ?

Utiliser le bouton FranceConnect pour proposer une connexion ou une création de compte simplifiée à l’usager.

> [!WARNING]
> Ce service est uniquement accessible des administrations ou fournisseurs de logiciel agissant pour le compte d’une administration.

### Comment utiliser ce composant ?

- **Proposer le bouton FranceConnect en premier mode d’authentification.** Il est positionner au-dessus des autres moyens de connexion proposés.
- **Accompagner le bouton FranceConnect du lien « Qu’est-ce que FranceConnect ? »**, positionné en-dessous, redirigeant vers l’URL [www.franceconnect.gouv.fr](http://www.franceconnect.gouv.fr) (cf. rubrique “Design”).
- **Dissocier visuellement vos moyens de connexion natifs** du bouton FranceConnect. Une séparation visible doit être mise en place.
- **Présenter le bouton FranceConnect comme une alternative** à un autre mode d’identification. La notion de "ou" doit figurer clairement (FranceConnect ou un autre mode d’identification).
- **Eviter toute confusion sur la nature du service proposé** en évitant de le positionner près de liens, d’icônes ou de services d'identification liés à des réseaux sociaux ou autres services similaires. FranceConnect n’est pas un réseau social et ne doit pas être présenté ou susceptible d’être perçu comme tel par l’usager.
- **Ouvrir la page de choix du fournisseur d’identité dans l’onglet actif de l’usager**. Elle ne doit pas être proposée dans une modale ou une pop-up au-dessus du site.

### Règles éditoriales

- **Garantir la compréhension de l’utilisateur** en accompagnant le bouton FranceConnect de la phrase : « FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion à vos services en ligne ».
- **Faire attention à l’écriture du terme « FranceConnect »** en accolant les deux mots France et Connect partout où « FranceConnect » est mentionné.
