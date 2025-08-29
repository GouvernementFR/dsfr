---
title: Typographie
shortTitle: Typographie
description: Cette page présente les typographies officielles du DSFR et les styles de texte associés pour garantir lisibilité cohérence graphique et accessibilité.
shortDescription: Typographies officielles et styles de texte du DSFR
keywords: typographie, marianne, spectral, police, styles de texte, titres, corps, DSFR, design system, accessibilité
cover: ../_asset/typography/cover/cover.png
excerpt: Présentation des typographies officielles de l’État et des styles de texte proposés dans le DSFR pour garantir lisibilité et cohérence.
summary: Le DSFR repose sur les polices Marianne et Spectral pour assurer la cohérence des interfaces de l’État. Cette page décrit les usages typographiques côté design et développement, les hiérarchies de titres et les styles de texte selon les contextes. Elle précise également les classes disponibles, les tailles en rem, et les bonnes pratiques de hiérarchisation et de lisibilité.
order: 4
---

# Typographie

Les typographies Marianne® et Spectral sont [les typographies officielles de la charte de l'État](https://www.info.gouv.fr/marque-de-letat/la-typographie). Leur usage crée une cohérence entre les interfaces et offre une expérience positive à l’utilisateur. Leur respect renforce également la reconnaissance de la parole de l’État.

## Les typographies Marianne et Spectral

Les typographies à utiliser dans le cadre du DSFR sont :

- la police Marianne® (light, regular et bold), ainsi que les versions italiques (light italic, regular italic et bold italic) ;
- la police Spectral (regular et extra-bold).

Les typographies de substitution sont :

- l’Arial, pour la Marianne ;
- la Georgia, pour la Spectral.

### Utilisation des typographies

Les typographies en format web sont incluses dans le DSFR. Vous retrouverez les différentes versions (desktop et pdf) de la Marianne et la spectral sur : [https://www.info.gouv.fr/marque-de-letat/la-typographie](https://www.info.gouv.fr/marque-de-letat/la-typographie)

Chaque taille de typographie est convertie en rem dans le code à partir d’une valeur fixée à 16px. 1rem est donc égal à 16px.

Les différents styles de police sont proposés en version mobile jusqu’au point de rupture MD, au-delà ils passent en version desktop (en savoir plus sur [les points de ruptures](../grid/index.md)).

#### Pour les designers

- Différents styles de texte et de titres, détaillés ci-dessous, vous sont proposés pour concevoir vos interfaces efficacement et assurer l’homogénéité entre les différents sites ;
- Il faut privilégier l’usage de la typographie Marianne®. L’usage de la Spectral - et des polices serif en général - n’est pas recommandé en typo principale, mais en appoint pour certaines infos secondaires ou mineures.

#### Pour les développeurs

- Un set de base vous est proposé. Vous pouvez le modifier et personnaliser en utilisant le système de classes pour les titres, les styles de texte et les liens.

### Titres et titres alternatifs

Les titres sont utilisés pour créer une hiérarchie visuelle dans la page, et permettent de trouver facilement une information. Cette hiérarchisation est également importante pour le référencement naturel de la page.

::::fr-table[Titres - heading]{valign=top vheaders=vertical multiline=true caption=false}
| Niveau | Usages | Aperçu HTML | Balise associée | Attributs desktop | Attributs mobile |
|--------|--------|-------------|-----------------|------------------|------------------|
| H1 | Titre principal de la page : il ne peut y en avoir qu’un par page. | <p class="fr-h1">Aa</p> | `<h1>` | Taille : 40 px<br>Line-height : 48 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 32 px<br>Line-height : 40 px<br>Margin-bottom : 24px<br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
| H2 | Second niveau de titre de section / paragraphes. Leur nombre n’est pas limité. Ils permettent de hiérarchiser les sections de texte et de paragraphes | <p class="fr-h2">Aa</p> | `<h2>` | Taille : 32 px<br>Line-height : 40 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 28px<br>Line-height : 36 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
| H3 | Troisième niveau sous-titre de section / paragraphes. Leur nombre n’est pas limité. Ils permettent de hiérarchiser les sections de texte et de paragraphes. | <p class="fr-h3">Aa</p> | `<h3>` | Taille : 28px<br>Line-height : 36 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 24 px<br>Line-height : 32 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
| H4 | Quatrième niveau de sous-titre. Leur nombre n’est pas limité. | <p class="fr-h4">Aa</p> | `<h4>` | Taille : 24 px<br>Line-height : 32 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 22 px<br>Line-height : 28 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
| H5 | Cinquième niveau de sous-titre. Leur nombre n’est pas limité. | <p class="fr-h5">Aa</p> | `<h5>` | Taille : 22 px<br>Line-height : 28 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 20 px<br>Line-height : 28 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
| H6 | Sixième et plus petit niveau de sous-titre. Leur nombre n’est pas limité. | <p class="fr-h6">Aa</p> | `<h6>` | Taille : 20 px<br>Line-height : 28 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 18 px<br>Line-height : 24 px<br>Margin-bottom : 24 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
::::

Pour donner une plus grande liberté éditoriale et graphique, sans nuire à la hiérarchie de l’information et au référencement nous vous proposons plusieurs niveaux de titres alternatifs (display). Vous pourrez les utiliser pour les mises en avant, les bannières, etc.

::::fr-table[Titres alternatifs - Display]{valign=top multiline=true vheaders=vertical caption=false}
| Niveau | Aperçu HTML | Classe associée | Attributs desktop | Attributs mobile |
|--------|-------------|-----------------|------------------|------------------|
| Titre alternatif XL | <p class="fr-display--xl"> Aa </p> | fr-display--xl | Taille : 80 px<br>Line-height : 88 px<br>Margin-bottom : 32 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 72 px<br>Line-height : 80 px<br>Margin-bottom : 32 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
| Titre alternatif LG | <p class="fr-display--lg"> Aa </p> | fr-display--lg | Taille : 72 px<br>Line-height : 80 px<br>Margin-bottom : 32 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 64 px<br>Line-height : 72 px<br>Margin-bottom : 32 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
| Titre alternatif MD | <p class="fr-display--md"> Aa </p> | fr-display--md | Taille : 64 px<br>Line-height : 72 px<br>Margin-bottom : 32 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 56 px<br>Line-height : 64 px<br>Margin-bottom : 32 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
| Titre alternatif SM | <p class="fr-display--sm"> Aa </p> | fr-display--sm | Taille : 56 px<br>Line-height : 64 px<br>Margin-bottom : 32 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 48 px<br>Line-height : 56 px<br>Margin-bottom : 32 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
| Titre alternatif XS | <p class="fr-display--xs"> Aa </p> | fr-display--xs | Taille : 48 px<br>Line-height : 56 px<br>Margin-bottom : 32 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White | Taille : 40 px<br>Line-height : 48 px<br>Margin-bottom : 32 px <br><br>Couleur sur fond clair : G800<br>Couleur sur fond foncé : White |
::::

Les titres alternatifs peuvent être associés selon votre besoin à un h1, un h2, un h3 ou un h4.

### Personnalisation des titres

Cette grande modularité permet de répondre aux différents cas de figure que vous pouvez rencontrer. Il faut cependant créer son jeu typographique et la hiérarchisation de l’information en créant des récurrences sur un même site, afin de faciliter le confort de lecture et les repères.

Pour garder une interface claire et lisible, il est préférable de ne pas utiliser plus de 4 niveaux de titres.

Pour les développeurs afin de personnaliser la taille de vos titres vous pouvez également utiliser les classes fr-h1, fr-h2, fr-h3, fr-h4, fr-h5, fr-h6. Par exemple : `<h3 class="fr-h1>` aura pour effet de donner à votre titre h3, les caractéristiques graphiques du h1, tout en préservant votre architecture de l’information.

### Corps de texte - Body

Les styles de texte sont là pour vous aider à concevoir vos interfaces efficacement et assurer l’homogénéité entre les différents sites.

::::fr-table[Style de texte]{valign=top multiline=true vheaders=vertical caption=false}
| Niveau | Usage | Aperçu HTML | Classe associée | Attributs desktop et mobile |
|--------|-------|-------------|-----------------|---------------------------|
| XL - Texte chapô | Chapô à utiliser pour les introductions ou accroches. | <p class="fr-text--lead">Aa </p> | fr-text--lead | Taille : 20 px<br>Line-height: 32 px<br>Margin-bottom : 24 px <br>Couleur sur fond clair : G700<br>Couleur sur fond foncé : G200 |
| LG - Texte article | Corps de texte réservé aux usages éditoriaux (type : actualités, blog) afin d’amener un plus grand confort de lecture. | <p class="fr-text--lg"> Aa </p> | fr-text--lg | Taille : 18 px<br>Line-height : 28 px<br>Margin-bottom : 24 px <br>Couleur sur fond clair : G700<br>Couleur sur fond foncé : G200 |
| MD - Texte standard | Corps de texte par défaut, à utiliser pour le texte courant et dans la majorité des cas. C’est le style de texte utilisé par défaut dans le set développé. | <p class="fr-text--text"> Aa </p> | <p>fr-text | Taille : 16 px<br>Line-height : 24 px<br>Margin-bottom : 24 px <br>Couleur sur fond clair : G700<br>Couleur sur fond foncé : G200 |
| SM - Texte détail | À utiliser en corps de texte uniquement au sein de certains composants. | <p class="fr-text--sm"> Aa </p> | fr-text--sm | Taille : 14 px<br>Line-height : 24 px<br>Margin-bottom : 24 px<br>Couleur sur fond clair : G700<br>Couleur sur fond foncé : G200 |
| XS - Texte mention | À utiliser pour les mentions, légendes ou autres informations mineures, qui ne doivent pas perturber la lecture de l’information. | <p class="fr-text--xs"> Aa </p> | fr-text--xs | Taille : 12 px<br>Line-height : 20 px<br>Margin-bottom : 24 px <br>Couleur sur fond clair : G600<br> Couleur sur fond foncé : G300 |
::::

Dans le set de base pour les développeurs le style de paragraphe (`<p>`) est par défaut le corps de texte MD.

Les styles de textes LG, MD, SM, et XS sont également disponibles avec la typographie Spectral, en ajoutant la classe fr-text--alt. L’usage de la Spectral est limité à des informations secondaires, mineures ou à distinguer.

#### Listes

Les listes vous permettent de traiter différemment une série d’information et de la faire apparaître clairement au lecteur.

::::fr-table[types de listes]{valign=top multiline=true vheaders=vertical caption=false}
| Niveau | Usage | Aperçu HTML |
|--------|-------|-------------|
| Liste ordonnée | Liste d'éléments ordonnée | <ol><li>Item list<ol><li>Item list<ol><li>Item list</li><li>Item list</li><li>Item list</li></ol></li></ol></li></ol> |
| Liste | Liste d'éléments non ordonnée | <ul><li>Item list<ul><li>Item list<ul><li>Item list</li><li>Item list</li><li>Item list</li></ul></li></ul></li></ul> |
::::

#### Liens

Les liens contextualisés héritent du style du texte, ils sont présentés sur la page du [lien](../../../../component/link/_part/doc/index.md).

## Règles d’utilisation

### Usage

#### Hiérarchisation de l’information

- Les titres, graisses et tailles sont fondamentaux pour permettre une hiérarchisation de l’information. Il faut cependant en avoir un usage équilibré et uniforme au sein du site (taille de corps de texte, taille de titre).
- Pour la hiérarchisation de la lecture vous pouvez également utiliser la [mise en exergue](../../../../component/highlight/_part/doc/index.md), la [mise en avant](../../../../component/callout/_part/doc/index.md), le [tableau](../../../../component/table/_part/doc/index.mdu).

#### Longueur du texte courant

- Il est recommandé de veiller à limiter le nombre de caractères par ligne. Nous vous recommandons d’utiliser un conteneur de maximum 8 colonnes pour les contenus.
- Pour les tailles de typographies S et XS, il est recommandé d’utiliser un conteneur moins large : en effet des études montrent qu’entre 45 et 75 caractères la lecture est satisfaisante pour le desktop, 35 à 40 caractères pour le mobile.

#### Personnalisation

- L’utilisation du `$bleu-france` sur un titre n’est pas autorisée en raison de la confusion qu'il peut y avoir entre un élément cliquable (ex. Bouton ou lien) et un élément non cliquable.
