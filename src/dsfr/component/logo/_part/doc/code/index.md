---
boost: 0
sitemap:
  noindex: true
title: Code du Bloc marque
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Bloc marque.
shortDescription: Le bloc marque est un élément de la charte graphique de l'État français. Il est utilisé pour représenter l'identité visuelle de l'État.
cover: ../_asset/cover/cover.png
mesh:
  - component/header
  - component/footer
---

## Bloc marque

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Le **Bloc marque** de l'état est constitué d'un bloc Marianne, d'un intitulé officiel, et de la devise républicaine. Le bloc Marianne et la devise républicaine sont ajouté automatiquement par le composant.
Le composant est composé d'un élément `<p>` avec la classe `.fr-logo`. Seul l'intitulé officiel doit être ajouté dans cet élément.

**Exemple de structure HTML**

```html
<p class="fr-logo">
    Intitulé
    <br>officiel
</p>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Logo       | Oui         |

:::

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/logo/logo.min.css" rel="stylesheet">
```

#### Variantes de taille

Le composant Bloc marque (logo) est disponible en 3 tailles différentes via les classes suivantes :

- Par défaut : Taille `medium`
- `fr-logo--sm` : Taille `small`
- `fr-logo--lg` : Taille `large`

```html
<p class="fr-logo fr-logo--sm">
    Intitulé
    <br>officiel
</p>

<p class="fr-logo fr-logo--lg">
    Intitulé
    <br>officiel
</p>
```

---

### JavaScript

Le composant Bloc marque **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Un Javascript disponible dans le **core** permet de gérer le passage **en berne** des blocs marque lors des périodes de deuil national. Le fond bleu et rouge du bloc Marianne est alors remplacé par un fond noir.

#### Installation du JavaScript

Pour faire fonctionner la fonction de passage des blocs marque en berne, le script JavaScript du core doit être importé. L'import doit se faire en fin de page, avant la fermeture du body, et de préférence avec le fichier minifié, car plus léger.

```html
<script type="module" src="dist/core/core.module.min.js"></script>
```

<small>NB : Il est aussi possible d'importer le JavaScript global du DSFR `dsfr.module.min.js`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
```

#### Utilisation du JavaScript

Le script permet de passer les blocs marque en berne lors des deuils nationaux. Pour cela, il suffit d'ajouter l'attribut `data-fr-mourning` sur l'élément `<html>`.

```html
<html lang="fr" data-fr-mourning>
```

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+logo+)

::dsfr-doc-changelog
