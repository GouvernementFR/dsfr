---
title: Pictogramme
shortTitle: Pictogramme
description: Comprendre le rôle des pictogrammes dans le DSFR, leur construction, leurs usages et les modalités de contribution à la librairie officielle.
shortDescription: Principes, style, couleurs et intégration des pictogrammes dans le DSFR.
keywords: pictogramme, DSFR, icônes, svg, artwork, contribution, design système, accessibilité, grille, style filaire, fr-artwork
cover: ../_asset/pictogram/cover/cover.png
excerpt: Les pictogrammes du DSFR sont des représentations visuelles explicites et normalisées qui facilitent la compréhension, la navigation et la cohérence graphique dans les services publics numériques.
summary: Cette page présente les principes de conception et d’utilisation des pictogrammes dans le Système de Design de l'État. Elle décrit leur construction selon une grille précise, leur style filaire, les règles d’usage des couleurs et les méthodes d’intégration pour designers et développeurs. Elle détaille également le processus de contribution à la librairie officielle, les formats attendus et les spécifications techniques à respecter pour proposer un pictogramme compatible.
order: 10
---

## Pictogramme

Un pictogramme est une représentation visuelle simple et explicite. On l'utilise pour aider l'usager à se repérer et à comprendre l’action ou le message auquel il est associé.

:::dsfr-doc-tab-navigation

- Documentation
- [Recherche](./search/index.md)

:::

Porteur d’une signification, sa nature représentative même insinue qu’il “donne accès à…”. Un pictogramme est une représentation visuelle bénéficiant d’une reconnaissance immédiate dont il rend explicite un objet ou un message.

Il aide l’utilisateur à se repérer et à comprendre l’action, l’objet ou le message rapporté. La reconnaissance qu’offrent les pictogrammes permet aux utilisateurs de trouver l’information souhaitée sans perte de temps.

![](../_asset/pictogram/exemple-pictogrammes.jpg)

### Les grands principes

Les pictogrammes suivent les principes de design du Système de Design de l'État destinés à encadrer le travail de conception auquel viennent s’ajouter 3 principes additionnels.

Un pictogrammes se doit d'être :

- **Explicite**: le pictogramme doit clairement évoquer un élément du monde réel ou une information. L’association entre le signifiant et le signifié doit être facile et immédiate ; pour cela, l’illustration doit être suffisamment détaillée mais comporter un minimum d'éléments superflus.
- **Cohérent**: le pictogramme doit s’insérer sans effort dans l’univers graphique du Système de Design de l'État, et plus particulièrement la collection existante. Pour cela, il suffit de reprendre les fondamentaux (formes et couleurs) et d’avoir une construction harmonieuse et équilibrée.
- **Rassurant**: un pictogramme se veut avenant, à travers l’utilisation de formes simples et familières ; il inspire doublement confiance : par la simplicité de sa signification, et son aspect agréable à l’œil via des formes arrondies et évocatrices.

### Les détails de construction

#### 📐 La grille

La grille est le support de création des pictogrammes. Elle permet de les équilibrer dans leurs masses et leurs détails, qu’ils aient des formes rondes, carrées, triangulaires ou rectangulaires. Par défaut, le symbole fait 80 x 80 pixels, mais la taille peut s’adapter sur la base des multiples de 8.

![](../_asset/pictogram/grille-construction.jpg)

Sur un site, un pictogramme n’excède rarement 180 × 180 pixels en grande taille. Il doit également rester lisible en petite taille 40 × 40 pixels. Ils ont des formats dont la largeur est égale à la hauteur (ratio 1:1). Celle-ci est construite sur une base de 2 pixels pour un carré.

#### 🧰 Les formes

Les pictogrammes s’appuie sur des formes de bases issues de la géométrie (carré, rectangle, triangle, cercle…) alignées sur la grille. L’aération présente dans les pictogrammes fait partie intégrante de leur identité. Elle permet d’apporter de la lisibilité dans des représentations complexes de sorte à les rendre égales à celles comportants moins de détails.

![](../_asset/pictogram/formes-geometriques.jpg)

L’espacement minimal à mettre en place est de 2 pixels, soit un carré. Dans la mesure du possible, il est recommandé de rester sur des multiples de 4 ou 8.

![](../_asset/pictogram/espacement-pictogrammes.jpg)

#### ✏️ Le style

Les pictogrammes du Système de Design de l'État est filaire et aérien. Ceux-ci sont dessinés sur une ligne de 2 pixels centrée.

![](../_asset/pictogram/style-filaire.png)

Aussi, l’utilisation de radius est restreint. Néanmoins la fin des lignes et les jonctions sont rondes. Les éléments de détails peuvent avoir une forme remplie avec une taille définie en multiples de 4px. D’un pictogrammes à l’autre, il est fortement recommandé de garantir un niveau de détails identiques.

#### 🎨 Les couleurs

##### La cohabitation

Sur les trois couleurs présentes dans les pictogrammes, seule une demeure personnalisable avec la palette de couleurs d’illustration :

- **Couleur dominante (major)** : couleur primaire marquant l’identité de l'État. Elle véhicule l’image de marque et attire l’attention de l’utilisateur sur un élément particulier. Occupant environ 60% de la surface du pictogramme, la personnalisation de cette couleur n’est pas autorisée.<br>
Token de décision : `$artwork-major-blue-france`<br>
Thème clair : `$blue-france-113` / Thème sombre : `$blue-france-625`
- **Couleur subsidiaire (minor)** : couleur primaire marquant l’identité de l'État. À l’image du `$blue-france-113`, elle véhicule l’image de marque et attire l’attention de l’utilisateur sur un élément particulier. Toutefois, en raison de sa ressemblance à une des couleurs systèmes (`$error-main-525`), son utilisation notamment dans les composants doit demeurer discrète. Occupant quand à elle 30% de la surface, la personnalisation de cette couleur est autorisée en conservant l’indice -main utilisé.<br>
Token de décision : `$artwork-minor-red-marianne`<br>
Thème clair et sombre : `$red-marianne-main-472`
- **Couleur décorative** : couleur primaire marquant l’identité de l'État. À l’image du `$blue-france-113`, elle véhicule l’image de marque. Occupant quand à elle 10% de la surface, cette couleur est optionnelle et non personnalisable.<br>
Token de décision : `$artwork-decorative-blue-france`<br>
Thème clair : `$blue-france-950` / Thème sombre : `$blue-france-100`

::::fr-table[La personnalisation]{valign=top vheaders=vertical caption=false}

| Description de l’usage | Token | Valeur(s) autorisée(s) |
|-----------------------|-------|-----------------------|
| Couleur dominante (60%) | `$artwork-major-blue-france` | 🚫 Non personnalisable |
| Couleur subsidiaire (30%) | `$artwork-minor-red-marianne` | `$[couleur]-main` (thèmes clair / sombre).<br>Exemples : `$green-emeraude-main-632 `<br>`$brown-caramel-main-648` |
| Couleur décorative (10%) | `$artwork-decorative-blue-france` | 🚫 Non personnalisable,<br>Optionnelle |

::::

### Les usages définis

Les pictogrammes s’utilisent :

- dans les composants “Tuiles” et “Paramètre d’affichage”,

![](../_asset/pictogram/usage-theme-clair-tuiles.jpg)

- dans un environnement illustratif (ex. Modèles de pages d’erreurs, Carte…).

![](../_asset/pictogram/usage-page-erreur-theme-sombre.jpg)

### La prise en main

#### Les designers

##### ➡️  La librairie Sketch

Dans la librairie Sketch, les pictogrammes sont disponibles dans la libraire « Système de Design de l’État · Pictogrammes », sous forme de symboles. Ceux-ci ont trois overrides activés :

- Couleur majeure (Non personnalisable)
- Couleur mineure [Indice -main] (Personnalisable en utilisant l’indice -main des couleurs d’illustrations)
- Couleur décorative (Non personnalisable mais optionnelle)

Pour passer les pictogrammes en thème sombre, il vous suffit d’utiliser les tokens portant le même nom dans la palette dédiée (Chemin d’accès : <span lang="en">Dark > Decisions > Artwork</span>).

##### ➡️  La librairie Figma

Sur Figma, les pictogrammes sont disponibles [dans un fichier à part du Community](https://www.figma.com/community/file/1098654384051611363).

Pour les utiliser, dupliquez le fichier puis publiez-le dans votre espace de travail. Vous pouvez ensuite insérer directement les pictogrammes dans vos designs. Leur personnalisation est possible via les <span lang="en">“Selection colors”</span> :

- Passage en thème sombre : remplacez les tokens par leur version <span lang="en">“dark”</span>
- Accentuation : remplacez la couleur du calque “🎨 Mineure (indice -main)” par une couleur illustrative d’indice main (par exemple : `$purple-glycine-main-494`)

> [!NOTE]
> De manière optionnelle, vous pouvez une fois le fichier “Pictogrammes” publié dans votre espace restaurer les liens existant entre les Composants et celui-ci (des pictogrammes sont utilisés par exemple pour le composant “Paramètres d’affichage”). Pour cela, la marche à suivre et la même que lors d’une mise à jour du DSFR 🔗.
>
> De même que les fondamentaux et les composants, le fichier des pictogrammes est mis à jour régulièrement. Il vous faudra alors procéder à sa mise à jour dans votre espace de travail de la même manière que pour les autres fichiers susnommés.

#### Les développeurs

Les pictogrammes sont des fichiers .svg structurés de façon à permettre l’utilisation des couleurs du dsfr et du mode sombre. Ils sont notamment divisés en 3 groupes de <span lang="en">"path"</span> (decorative, minor, major) permettant d’insérer indépendamment chaque couleur.

La librairie de SVG se trouve dans **dist/artwork/pictograms**.

> [!NOTE]
> Le chemin des pictogrammes light.svg, dark.svg et system.svg utilisés dans le composant paramètre d’affichage (display) est déprécié. Ces pictogrammes ont été déplacé dans leurs dossiers respectifs et renommés.
>
> - artwork/light.svg → artwork/pictograms/environment/sun.svg
> - artwork/dark.svg → artwork/pictograms/environment/moon.svg
> - artwork/system.svg → artwork/pictograms/system/system.svg

##### Utilisation des pictogrammes

Pour intégrer ces pictogrammes, il convient d’utiliser une balise `<svg>` et d’importer à l’intérieur les 3 parties du svg. Chaque partie doit être insérée, à la manière des <span lang="en">spritesheet</span>, via une balise `<use>` et l’attribut href :

```HTML
<svg class="fr-artwork" aria-hidden="true" viewBox="0 0 80 80" width="80px" height="80px">
  <use class="fr-artwork-decorative" href="/dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use>
  <use class="fr-artwork-minor" href="/dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use>
  <use class="fr-artwork-major" href="/dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use>
</svg>
```

- Le `<svg>` doit porter la classe `fr-artwork` et l’attribut `aria-hidden="true"`.
- La taille du pictogramme est défini par les attributs `width`, `height`, et `viewBox` (viewBox = 0 0 width height).
- Chaque `<use>` correspond à un calque (major, minor, ou decorative)
  - Utiliser la classe du calque (ex: `fr-artwork-major`) pour gérer la couleur
  - Insérer le chemin vers le pictogramme dans l'attribut `href` suffixé d'une ancre vers l'id du calque dans le svg (ex: `#artwork-major`) pour importer le calque spécifique.
- La couleur mineure (par défaut en red-marianne) peut être modifiée par une couleur d’accentuation en ajoutant un modificateur au niveau de `fr-artwork` (ex: `fr-artwork fr-artwork--green-emeraude`).

##### Ajout de pictogrammes

Pour ajouter un pictogramme, il est nécessaire de créer un fichier SVG respectant certaines conventions. Reportez-vous à la section [détails de construction](#les-details-de-construction) pour plus de détails.

Il est ensuite nécessaire de retoucher le code des svg afin de les formater :

- Le `svg` doit posséder les attributs : `width="80px" height="80px" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"`
- Utiliser 3 éléments `<symbol>`, avec si possible un seul `<path>` dedans, avec les id : "artwork-decorative", "artwork-minor", et "artwork-major" pour définir les 3 calques.
- Les `path` ne doivent pas contenir de remplissage de couleur “fill” ou “stroke”
- Pour rendre le svg utilisable de façon autonome, hors dsfr, il est nécessaire de :
  - Ajouter une balise `<style></style>` au début du `<svg>` pour définir les classes des 3 couleurs par défaut.
  - Ajouter des éléments `<use>` avec les classes définies dans la balise `style` et un attribut `href` pointant vers les id des symboles. Cela permet de rendre le svg indépendant du dsfr et d'avoir un aperçu dans son gestionnaire de fichiers.
- Nous recommandons de réduire le poids du fichier SVG en optimisant les `path` et en retirant les éléments inutiles. Des outils comme [SVGO](https://svgomg.net/) peuvent être utilisés à cet effet avant la retouche du code.

Ainsi le svg d’un pictogramme doit correspondre à ce gabarit :

```html
<svg width="80px" height="80px" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <style>
    .fr-artwork-decorative {
      fill: #ECECFF;
    }
    .fr-artwork-minor {
      fill: #E1000F;
    }
    .fr-artwork-major {
      fill: #000091;
    }
  </style>

  <symbol id="artwork-decorative">
    <path d="..."/>
  </symbol>
  <symbol id="artwork-minor">
    <path d="..." />
  </symbol>
  <symbol id="artwork-major">
    <path d="..." />
  </symbol>

  <use class="fr-artwork-decorative" href="#artwork-decorative"/>
  <use class="fr-artwork-minor" href="#artwork-minor"/>
  <use class="fr-artwork-major" href="#artwork-major"/>
</svg>
```

### Le cas particulier

#### La couleur de fond

Dans le cas où l’on souhaiterait ajouter un élément en fond (<span lang="en">background</span>) sous un pictogramme. Il existe deux autres token `$artwork-background` et `$artwork-motif` permettant de créer des pictogrammes entièrement gris.

::::fr-table[La personnalisation]{valign=top vheaders=vertical caption=false}

| Description de l’usage | Token | Classe | Valeur(s) autorisée(s) |
|-----------------------|-------|-----------------------|-----------------------|
| Couleur de fond (80%) | `$artwork-background-grey` | `.fr-artwork-background` | 🚫 Non personnalisable,<br> `$grey-975` `$grey-75` |
| Couleur de motif (20%) | `$artwork-motif-grey` | `.fr-artwork-motif` | 🚫 Non personnalisable,<br>Optionnelle,<br> `$grey-925` `$grey-125` |

::::

L’intégration des pictogrammes de fond se fait de la même manière que les pictogrammes. Il est possible de combiner les deux en un seul élément appelant, via des `<use>`, les différents calques de couleurs.

Utiliser les valeurs de `width`, `height`, et `viewbox` du pictogramme le plus grand (généralement le fond).
Il est possible d’ajouter la classe `fr-responsive-img` sur l'élément pour que le pictogramme s'adapte à la taille de son conteneur.

Pour déplacer le pictogramme à l’intérieur de son fond plus grand, ajouter un groupe `<g>` avec l’attribut `transform=”translate(x,y)”`. Par exemple, pour centrer un pictogramme de 80x80 dans un fond de 160x200 :

- x = (largeur conteneur - largeur contenu) / 2 = (160 - 80) / 2 = 40
- y = (hauteur conteneur - hauteur contenu) / 2 = (200 - 80) / 2 = 60

**Exemple d’intégration**

```html
<svg xmlns="http://www.w3.org/2000/svg" class="fr-responsive-img fr-artwork" aria-hidden="true" width="160" height="200" viewBox="0 0 160 200">
  <use class="fr-artwork-motif" href="dist/artwork/background/ovoid.svg#artwork-motif"></use>
  <use class="fr-artwork-background" href="dist/artwork/background/ovoid.svg#artwork-background"></use>
  <g transform="translate(40, 60)">
    <use class="fr-artwork-decorative" href="dist/artwork/pictograms/system/technical-error.svg#artwork-decorative"></use>
    <use class="fr-artwork-minor" href="dist/artwork/pictograms/system/technical-error.svg#artwork-minor"></use>
    <use class="fr-artwork-major" href="dist/artwork/pictograms/system/technical-error.svg#artwork-major"></use>
  </g>
</svg>
```

### La contribution

En tant qu’utilisateur, vous pouvez contribuer à la création de la librairie de pictogrammes illustratifs. Pour cela, rien de plus simple. Il vous suffit d’envoyer à l'équipe du Système de Design de l'État, un export de votre réalisation. Toutefois, l'équipe se réserve le droit de procéder à quelques ajustements en vue de l’intégration du pictogramme à la librairie.

#### Les spécifications du fichier

- **Nom du fichier** : il s’agit du nom de pictogramme en anglais qui désigne l’objet et/ou le message de la représentation visuelle. Le nom doit être en minuscules, sans espace ni caractère spécial, et séparé par des tirets. Par exemple : `city-hall.svg`.
- **Taille de la zone contenant le pictogramme** : 80 x 80 pixels
- **Format de l’export** : .svg

#### Les spécifications du pictogramme

- Conserver les traits de conception de sorte à ne pas vectoriser le pictogramme (par exemple sur Sketch, la fonctionnalité se nomme “Convert to Outlines”)

![](../_asset/pictogram/specifications-export.jpg)

- Utiliser les tokens de décisions adaptés issus du Système de Design de l'État (`$artwork-major-blue-france`, `$artwork-minor-red-marianne` et `$artwork-decorative-blue-france`)

#### L’envoi du fichier

Un formulaire est disponible pour l’envoi de vos pictogrammes illustratifs ce qui nous permet de les centraliser. Vous pouvez créer une demande selon la procédure suivante en allant sur [Jira Service Desk](path:help/jira).

**Étape 1**<br>
Sélectionnez le type de demande associé : Partager une illustration.

**Étape 2**<br>
Remplissez les champs du formulaire disponibles :

- Objet : résumé de votre demande en quelques mots
- Description : indication des noms potentielles du pictogrammes, en anglais
- Pièce jointe : ajout de votre fichier
- Adresse email : suivi de l’avancement de la prise en charge de votre demande et d'interagir avec nos équipes

**Étape 3**<br>
Après la validation du formulaire, vous recevrez un email vous confirmant que votre demande a bien été créée.

**Étape 4**<br>
Dans les 48h ouvrées, vous recevrez un deuxième message électronique vous informant que votre demande a été prise en compte. Une fois que celle-ci a été prise en compte, le pictogramme peut être ajusté en vue de son intégration dans la librairie Design.

**Étape 5 (facultative)**<br>
Afin d'accélérer le processus d'intégration dans la librairie Dev, vous pouvez nous fournir le SVG formaté tel que décrit précédemment. Pour cela, il vous suffit de proposer une Pull Request sur le [dépôt GitHub](https://github.com/GouvernementFR/dsfr) du Système de Design de l'État. Le SVG doit être placé dans un dossier adéquat de `src/dsfr/utility/pictograms`.
