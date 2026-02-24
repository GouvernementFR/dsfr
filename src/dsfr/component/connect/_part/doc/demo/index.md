---
boost: 0
sitemap:
  noindex: true
title: Démonstration du Bouton FranceConnect
shortTitle: Démonstration du Bouton FranceConnect
description: Illustration du fonctionnement à travers différents cas d’usage et exemples interactifs des composants Bouton FranceConnect et ProConnect.
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

- [Présentation](../index.md)
- Démo
- [Design](../design/index.md)
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=connect--docs}
