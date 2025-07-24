---
boost: 0
sitemap:
  noindex: true
title: Code de la mise en avant
shortTitle: Code de la mise en avant
description: La mise en avant est un élément éditorial servant à valoriser une information complémentaire dans une page de contenu.
shortDescription: Mettre en valeur une information secondaire.
keywords: mise en avant, contenu, composant éditorial, UX, design system, accessibilité, information, valorisation, page, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Mise en avant permet de valoriser un contenu complémentaire dans une page, en attirant l’attention de l’usager sans perturber la lecture principale.
summary: Ce contenu décrit le composant Mise en avant utilisé pour signaler une information complémentaire au sein d’un contenu éditorial. Il précise ses cas d’usage, le distingue de la mise en exergue et des alertes, et recommande de limiter son usage à une ou deux occurrences par page. Des règles éditoriales simples sont proposées pour garantir lisibilité et efficacité. Ce guide s’adresse aux concepteurs de contenus et interfaces souhaitant structurer l’information de manière claire et hiérarchisée.
mesh:
  - component/quote
  - component/highlight
---

## Mise en avant

La mise en avant est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Mise en avant** permet de mettre en évidence des informations importantes. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<div>` :
    - Doit avoir la classe `fr-callout`.
    - Peut avoir une classe `fr-icon-NOM-ICONE` pour ajouter une icône avant le titre.
2. Un titre pour la mise en avant :
    - Représenté par un élément `<hx>`, suivant le niveau d'entête voulu, avec la classe `fr-callout__title`.
3. Une zone de contenu pour le texte de la mise en avant :
    - Représentée par un élément `<p>` avec la classe `fr-callout__text`.
4. D'autres éléments facultatifs comme un lien ou un bouton.

**Exemple de structure HTML**

```HTML
<div class="fr-callout">
  <h3 class="fr-callout__title">Titre de la mise en avant</h3>
  <p class="fr-callout__text">Contenu de la mise en avant.</p>
  <button type="button" class="fr-btn">Libellé bouton</button>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Callout    | Oui         |          |
| Button     | Non         | Uniquement si ajout d'un bouton à l'intérieur |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/callout/callout.min.css" rel="stylesheet">
```

#### Variantes de style

- **Ajout d'icône** : Le composant Mise en avant peut intégrer une icône, il suffit pour cela d'ajouter la classe `fr-icon-NOM-ICON` au même niveau que la classe `fr-callout`.
- **Accentuation** : Le composant est accentuable, permettant le changement de la couleur de fond et de la bordure latérale. Pour cela, ajouter la classe `fr-callout-NOM-COULEUR` au même niveau que la classe `fr-callout`.

**Exemple de variante de style**

```HTML
<div class="fr-callout fr-callout--green-emeraude">
```

### JavaScript

Le composant Mise en avant **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+callout+)

::dsfr-doc-changelog
