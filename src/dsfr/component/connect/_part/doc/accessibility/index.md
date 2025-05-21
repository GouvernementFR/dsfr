---
title: Accessibilité du Bouton FranceConnect
shortTitle: Accessibilité du Bouton FranceConnect
description: Présentation du bouton FranceConnect permettant à l’usager de s’authentifier via un fournisseur d’identité officiel reconnu par l’État.
shortDescription: Authentification avec FranceConnect
keywords: FranceConnect, authentification, identité numérique, connexion, bouton, DSFR, sécurité, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le bouton FranceConnect permet de proposer une méthode de connexion sécurisée en utilisant l’identité numérique d’un fournisseur agréé. Il s’intègre dans les interfaces comme premier choix d’authentification.
summary: Ce composant permet à l’usager de se connecter à un service public en ligne via FranceConnect, solution officielle d’identification. Il garantit la fiabilité de l’identité transmise et s’intègre comme option d’authentification prioritaire. Le bouton suit des règles d’intégration strictes pour assurer sa clarté, éviter toute confusion avec d’autres services et maintenir la confiance dans la marque FranceConnect.
---

## Bouton FranceConnect

Le bouton FranceConnect est un élément d’interaction avec l’interface proposant à l’usager d’utiliser ses identifiants de connexion à l’un des fournisseurs d’identités ([impots.gouv.fr](http://impots.gouv.fr/), [ameli.fr](http://ameli.fr/), [l’Identité Numérique La Poste](https://lidentitenumerique.laposte.fr/), [MobileConnect et moi](https://www.yris.eu/fr/) ou [msa.fr](http://msa.fr/)) pour se connecter à un autre site.

Le fournisseur de service récupère auprès de FranceConnect un identifiant unique et une identité vérifiée par l’INSEE.

Il est primordial dans l’usage du service FranceConnect et garantit sa reconnaissance et la confiance en la marque.

Retrouver le fonctionnement en détail ici : [https://franceconnect.gouv.fr/partenaires](https://franceconnect.gouv.fr/partenaires)

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

## Accessibilité

Le composant **Bouton FranceConnect** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

### Interactions clavier

Lorsque le focus est positionné sur le bouton :

- `Entrée` : Actionne le bouton et initie la connexion via FranceConnect.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift + Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d'accessibilité

- L'intitulé du bouton "Se connecter avec" et le lien "Qu"est-ce que FranceConnect ?" doivent être traduit dans la langue de la page.
- Le bouton doit être **visible au clavier** et avoir un **focus visible**.

### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
