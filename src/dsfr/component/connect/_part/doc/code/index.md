---
title: Code du Bouton FranceConnect
shortTitle: Code du Bouton FranceConnect
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
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant Bouton FranceConnect permet de proposer une connexion via le service FranceConnect. Sa structure est la suivante :

- Un élément `<div>` de classe `fr-connect-group` contient le bouton FranceConnect et un lien d'information.
  - Le **Bouton FranceConnect** est un élément HTML `<button>` défini par la classe `fr-connect`. Il doit contenir deux éléments `<span>` :
    - Un texte de connexion "S'identifier avec", un `<span>` avec la classe `fr-connect__login`. Ce texte peut être traduit mais ne doit pas être modifié.
    - L'intitulé du service "FranceConnect", un `<span>` avec la classe `fr-connect__brand`.
  - Le bouton doit être accompagné d'un lien d'information sur FranceConnect. Il s'agit d'un élément `<p>` contenant un lien `<a>` vers la page d'information de FranceConnect.
    - Le lien doit être ouvert dans une nouvelle fenêtre.
    - L'intitulé du lien peut être traduit mais ne doit pas être modifié.

Pour plus de clarté, le bouton est peut être accompagné de la phrase :
« FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion à vos services en ligne ».

**Structure HTML du bouton FranceConnect**

```HTML
<div class="fr-connect-group">
    <button class="fr-connect" type="button">
        <span class="fr-connect__login">S’identifier avec</span>
        <span class="fr-connect__brand">FranceConnect</span>
    </button>
    <p>
        <a href="https://franceconnect.gouv.fr/" target="_blank" rel="noopener" title="Qu’est-ce que FranceConnect ? - nouvelle fenêtre">Qu’est-ce que FranceConnect ?</a>
    </p>
</div>
```

**Structure HTML du bouton FranceConnect+**

```HTML
<div class="fr-connect-group">
    <button class="fr-connect fr-connect--plus" type="button">
        <span class="fr-connect__login">S’identifier avec</span>
        <span class="fr-connect__brand">FranceConnect</span>
    </button>
    <p>
        <a href="https://franceconnect.gouv.fr/france-connect-plus" target="_blank" rel="noopener" title="Qu’est-ce que FranceConnect+ ? - nouvelle fenêtre">Qu’est-ce que FranceConnect+ ?</a>
    </p>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, les styles CSS du core et du bouton FranceConnect doivent être importés.
L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec le fichier minifié, car plus léger.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/connect/connect.min.css" rel="stylesheet">
```

<small>NB : Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/connect/connect.legacy.min.css" rel="stylesheet">
```

#### Styles du composant

Le composant Bouton FranceConnect est stylisé par les classes CSS suivantes :

- `.fr-connect-group` : Conteneur du bouton FranceConnect et du lien d'information.
- `.fr-connect` : Bouton FranceConnect.
- `.fr-connect__login` : Texte "S'identifier avec".
- `.fr-connect__brand` : Intitulé du service
- `.fr-connect-group p` : Conteneur du lien d'information.
- `.fr-connect-group a` : Lien d'information.

Une classe supplémentaire `.fr-connect--plus` peut être ajoutée au bouton FranceConnect pour proposer une connexion via FranceConnect+.

---

### JavaScript

La documentation technique pour la mise en place de FranceConnect en tant que fournisseur de service peut être consulter sur le [site de FranceConnect](https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service)

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+connect+)

::dsfr-doc-changelog
