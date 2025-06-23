---
title: Couleurs - Palette
shortTitle: Couleurs - Palette
description: Cette page présente la palette de couleurs du DSFR issue de la charte graphique de l’État et décrit son usage selon les thématiques et états des composants.
shortDescription: Palette de couleurs officielle du DSFR
keywords: couleurs, palette, design token, bleu france, rouge marianne, thème clair, thème sombre, accessibilité, accentuation, DSFR
cover: ../_asset/palette/cover/cover.png
excerpt: Découvrez la palette de couleurs du DSFR et ses règles d’usage dans les composants selon le thème clair ou sombre.
summary: La palette de couleurs du DSFR repose sur la charte graphique de l’État et est divisée entre thèmes clair et sombre. Cette page détaille les conventions de nommage des tokens, les différentes catégories de couleurs (primaires, neutres, système, illustratives), leur usage dans les composants ainsi que les règles d’accessibilité à respecter. Elle précise les bonnes pratiques d’accentuation et les cas d’usage hors composant.
order: 2
---

# Couleurs - Palette

La palette de couleurs du système de design de l’État est définie par[la charte graphique de l'État](https://www.info.gouv.fr/marque-de-letat). Elle permet de créer une cohérence entre les interfaces et d’offrir une expérience optimale à l’utilisateur. Leur respect renforce la reconnaissance de la parole de l’État. Chaque couleur est représentée par un “design token”, c’est-à-dire un nom transverse au design (à travers les bibliothèques Sketch et Figma) et au code.

## Convention de nommage des tokens

La nomenclature des tokens d’options est la suivante :

COULEUR- NOM - VARIANTE - INDICE - ÉTAT

- La couleur indique la nuance (sur l’arc en ciel) : bleu, vert, rouge, gris…
- Le nom est celui hérité de la charte de l'État, le cas échéant.
- La variante indique si la couleur est une couleur de référence (“main”), une variante pour thème clair (“sun”) ou thème sombre (“moon”). La plupart des couleurs n’ont pas de variante.
- L’indice est le niveau de luminosité de la couleur, et sert à vérifier l’accessibilité des associations de couleurs. Consultez [l’article de présentation détaillée du système de couleurs](path:/about/posts/post-colors) pour en savoir plus.
- L'état indique, le cas échéant, la variation de la couleur au survol ou en état actif.

À chaque token est rattaché une valeur hexadécimale, une valeur RGB et une valeur HSL. Par exemple, la couleur de référence pour le vert “Tilleul Verveine” :

<div class="array-sample" style="display: flex; flex-wrap: wrap; margin: 0px -10px 2rem -10px;font-family: arial, sans-serif;">
  <div class="box-sample" style="width: 220px; padding: 10px; margin: 10px; box-shadow: 0 0 0 1px lightgray; text-align: center; --color-box:#B7A73F">
    <div class="color-box-sample" style="width: auto; height: 100px; box-shadow: inset 0 0 0 1px lightgray; background-color: var(--color-box); margin: auto;"></div>
    <p style="font-size: 14px;margin: 10px 0 0;line-height: 1.25;"><b>green-tilleul-verveine-main-707</b></p>
    <p style="font-size: 14px;margin: 10px 0 0;line-height: 1.25;">#B7A73F<br>rgb(183,167,63)<br>hsl(52deg 48.8% 48.2%)<br><br></p>
    <div class="box-children-sample" style="display: flex;">
      <div style="width: 100%;">
        <div class="color-box-sample--sm" style="width: 100%; height: 30px; box-shadow: inset 0 0 0 1px lightgray; background-color: var(--color-box); margin: auto; --color-box:#a19237"></div>
        <p style="font-size: 14px;margin: 10px 0 0;line-height: 1.25;"><b>hover</b><br>#a19237<br>rgb(161,146,55)</p>
      </div>
      <div style="width: 100%;">
        <div class="color-box-sample--sm" style="width: 100%; height: 30px; box-shadow: inset 0 0 0 1px lightgray; background-color: var(--color-box); margin: auto; --color-box:#908331"></div>
        <p style="font-size: 14px;margin: 10px 0 0;line-height: 1.25;"><b>active</b><br>#908331<br>rgb(144,131,49)</p>
      </div>
    </div>
  </div>
</div>

L’utilisation de la palette de couleurs est obligatoire pour l’ensemble des sites. Il est en conséquence prohibé d’utiliser d’autres couleurs que celles proposées.

La palette de couleur du Système de Design de l’État comprend deux parties : la palette “thème clair” et la palette “thème sombre”. Chacune de ces parties se décompose en catégories :

- [couleurs primaires](#primaire)
- [couleurs neutres (“neutral”)](#neutre)
- [couleurs fonctionnelles](#systeme)
- [couleurs illustratives](#accent)

### Couleurs primaires

Construites à partir des deux grandes couleurs de la marque de l'État (bleu et rouge, le blanc étant intégrés aux neutres), elles sont utilisées pour marquer l’identité de l’État dans des composants qui véhiculent l’image de la marque (comme le bloc marque), ou sur lesquels il est nécessaire d’attirer l’attention de l’utilisateur, tels que les éléments cliquables ou les états actifs.

<iframe id="primaire-frame" class="fr-mb-3w fr-responsive-img" title="Palette de couleurs primaires" src="/static/html/v1.14/palette/primaire.html" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';" data-fr-js-ratio="true" style="height: 2877px;"></iframe>

### Couleurs neutres

Couleurs de base utilisées dans les typographies, fonds, contours et séparateurs dans la majorité des composants. Elles sont notamment utilisées dans les éléments non cliquables et pour représenter les états inactifs.

<iframe id="neutral-frame" class="fr-mb-3w fr-responsive-img" title="Palette de couleurs neutres" src="/static/html/v1.14/palette/neutre.html" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';" data-fr-js-ratio="true" style="height: 2103px;"> </iframe>

### Couleurs système

Couleurs utilisées exclusivement pour représenter des états et des statuts.

<iframe class="fr-mb-3w fr-responsive-img" id="system-frame" title="Palette de couleurs système" src="/static/html/v1.14/palette/systeme.html" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';" data-fr-js-ratio="true" style="height: 5737px;"> </iframe>

### Couleurs illustratives

Couleurs complémentaires de la charte de l'État, pouvant servir à la composition d’illustration. Dans le contexte du Système de Design de l'État, ces couleurs sont également utilisables pour accentuer des composants, c’est-à-dire varier la couleur de certains éléments (texte, fonds, bordures) pour apporter de la diversité ou une hiérarchie visuelle.

L’utilisation des couleurs illustratives est possible sur certains composants :
Voir la liste des composants accentuables.

<iframe id="accent-frame" class="fr-mb-3w fr-responsive-img" title="Palette de couleurs illustratives" src="/static/html/v1.14/palette/accent.html" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';" data-fr-js-ratio="true" style="height: 24341px;"> </iframe>

Le Système de Design de l'État propose des composants adaptés à deux modes de couleurs :

- Le thème clair : pour être accessible sur fond clair.
- Le thème sombre : pour être accessible sur fond foncé.

L’utilisation du thème sombre est notamment recommandé pour réduire la consommation d'énergie et réduire la fatigue oculaire.

> [!NOTE]
> Il n'est pas autorisé de mélanger les couleurs du thème clair et celles du thème sombre.

Les correspondances suivantes sont intégrées en code, en tant que sous-couche technique. Pour appliquer une couleur à un contexte, préférer l’utilisation des tokens de décision, qui intègrent la correspondance thème clair / thème sombre.

### Couleurs primaires

::::fr-table[Bleu France]{valign=top vheaders=vertical caption=false}

| Correspondance | Thème clair | Thème sombre |
|----------------|-------------|--------------|
| **strong**     | `$blue-france-sun-113` | `$blue-france-625` |
| **softest**    | `$blue-france-850` | `$blue-france-200` |
| **light**      | `$blue-france-925` | `$blue-france-125` |
| **lighter**    | `$blue-france-950` | `$blue-france-100` |
| **lightest**   | `$blue-france-975` | `$blue-france-75` |
| **main**       | `$blue-france-main-525` | `$blue-france-main-525` |
| **inverted**    | `$blue-france-975` | `$blue-france-113` |

::::

::::fr-table[Rouge Marianne]{valign=top vheaders=vertical caption=false}

| Correspondance | Thème clair | Thème sombre |
|----------------|-------------|--------------|
| **strong**     | `$red-marianne-425` | `$red-marianne-625` |
| **softest**    | `$red-marianne-850` | `$red-marianne-200` |
| **light**      | `$red-marianne-925` | `$red-marianne-125` |
| **lighter**    | `$red-marianne-950` | `$red-marianne-100` |
| **lightest**   | `$red-marianne-975` | `$red-marianne-75` |
| **main**       | `$red-marianne-main-472` | `$red-marianne-main-472` |
| **inverted**    | `$blue-france-975` | `$blue-france-113` |

::::

### Couleur neutre

::::fr-table[Gris]{valign=top vheaders=vertical caption=false}

| Correspondance | Thème clair | Thème sombre |
|----------------|-------------|--------------|
| **absolute-black** | `$grey-0` | `$grey-1000` |
| **black**     | `$grey-50` | `$grey-1000` |
| **darkest**   | `$grey-75` | `$grey-975` |
| **darker**    | `$grey-100` | `$grey-950` |
| **dark**      | `$grey-125` | `$grey-925` |
| **strongest**  | `$grey-200` | `$grey-850` |
| **strong**    | `$grey-425` | `$grey-625` |
| **soft**      | `$grey-625` | `$grey-425` |
| **softest**   | `$grey-850` | `$grey-200` |
| **light**     | `$grey-925` | `$grey-125` |
| **lighter**   | `$grey-950` | `$grey-100` |
| **lightest**  | `$grey-975` | `$grey-75` |
| **white**     | `$grey-1000` | `$grey-50` |
| **border**    | `$grey-900` | `$grey-175` |
| **raised**    | `$grey-1000` | `$grey-75` |
| **overlap**   | `$grey-1000` | `$grey-100` |
| **lifted**    | `$grey-1000` | `$grey-75` |
| **alt-raised** | `$grey-975` | `$grey-100` |
| **alt-overlap** | `$grey-975` | `$grey-125` |
| **contrast-raised** | `$grey-950` | `$grey-125` |
| **contrast-overlap** | `$grey-950` | `$grey-150` |

::::

### Couleurs système

Les couleurs systèmes sont : Info, warning, error, success.

::::fr-table[Exemple avec la couleur Info]{valign=top vheaders=vertical caption=false}

| Correspondance | Thème clair | Thème sombre |
|----------------|-------------|--------------|
| **strong**     | `$info-425` | `$info-625` |
| **softest**    | `$info-850` | `$info-200` |
| **light**      | `$info-925` | `$info-125` |
| **lighter**    | `$info-950` | `$info-100` |
| **lightest**   | `$info-975` | `$info-75` |
| **main**       | `$info-main-525` | `$info-main-525` |

::::

### Couleurs illustratives

Les couleurs illustratives sont : green-tilleul-verveine, green-bourgeon, green-emeraude, green-menthe, green-archipel, blue-ecume, blue-cumulus, purple-glycine, pink-macaron, pink-tuile, yellow-tournesol, yellow-moutarde, orange-terre-battue, brown-cafe-creme, brown-caramel, brown-opera, beige-gris-galet.

::::fr-table[Déclinaisons des couleurs illustratives]{valign=top vheaders=vertical caption=false}

| Correspondance | Thème clair | Thème sombre |
|----------------|-------------|--------------|
| **strong**     | /couleur sun/ | /couleur moon/ |
| **softest**    | `$xx-850` | `$xx-200` |
| **light**      | `$xx-925` | `$xx-125` |
| **lighter**    | `$xx-950` | `$xx-100` |
| **lightest**   | `$xx-975` | `$xx-75` |
| **main**       | /couleur main/ | /couleur main/ |

::::

## Règles d’usage

### Dans les composants existants

Au sein de l’existant, des tokens de décision sont systématiquement appliqués, en vue d’optimiser l’affichage des composants mais également la compréhension des interfaces. Pour comprendre le rôle et le fonctionnement des tokens de décisions, [consultez la page dédiée](../color/index.md).

Il n’est pas permis de remplacer un token de décision au sein d’un composant si cela n’est pas indiqué dans la documentation (section “Accentuation” dans les pages de composants).

### Accentuation

L’accentuation des composants est réglementée : un tableau récapitulatif des éléments qu’il est possible d’accentuer sur chaque composant est détaillé dans la page de documentation (paragraphe ‘Personnalisation > Couleurs d’accent’).

À l’heure actuelle, seuls les composants suivants sont ouverts à l’accentuation :

- [Badge](../../../../component/badge/_part/doc/index.md) (Fond, texte)
- [Carte](../../../../component/card/_part/doc/index.md)  (Fond blanc ou gris)
- [Citation](../../../../component/quote/_part/doc/index.md) (Icône)
- [Mise en avant](../../../../component/callout/_part/doc/index.md) (Fond et bordure)
- [Mise en exergue](../../../../component/highlight/_part/doc/index.md) (Bordure)
- [Tableau](../../../../component/table/_part/doc/index.md) (Fond et bordure)
- [Tag](../../../../component/tag/_part/doc/index.md) (Fond , texte et icône)
- [Tuile](../../../../component/tile/_part/doc/index.md) (Fond blanc ou gris)

D’autres composants seront ajoutés à ce périmètre au fur et à mesure des mises à jour du Système de Design de l'État. N’hésitez pas à nous faire des suggestions sur le sujet, sur le Slack ou en ouvrant un ticket.

### Au-delà du Système de Design de l'État

Si vous êtes amenés à créer des pages uniques ou des composants inédits, prenez soin d’utiliser au maximum les [tokens de décisions](../color/index.md). Si ce n’est pas possible, merci de respecter les correspondances clair / sombre indiquées ci-dessus.

### Hors des composants

La couleur est utile en dehors des composants :

- Pour les fonds de page, il existe des tokens de décision dédiés.
- Pour les pictogrammes illustratifs, utiliser les tokens appropriés.
- Pour les illustrations, il est important en premier lieu de sélectionner des couleurs harmonieuses et correspondant à la thématique. Éviter un nombre de teintes trop important (moins de 5) qui compliqueront la conception et la force de l’illustration.

## Accessibilité

Vos interfaces doivent être conformes aux exigences du [Référentiel Général d’Amélioration de l’Accessibilité - RGAA dans sa version 4](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/) :

- Toute information visuelle (exemple couleur ou illustration) doit être accompagnée d’une information textuelle dans le code (exemple classe, titre, description ou modificateur). Ces règles sont détaillées au cas par cas dans la section Accessibilité de chaque composant ;
- Vous devez respecter des ratios de contraste accessibles ;
- L’ensemble des composants proposés respecte les normes exigées par le RGAA, mais lors de vos modifications de couleurs, vous devrez vérifier vos propres contrastes. Vous pouvez utiliser des outils en ligne ou des plugins comme [Stark](https://www.getstark.co/) ou [Cluse](https://cluse.cc/).

Pour connaître la réglementation, vous pouvez vous rendre sur ce site :
[Critères et tests - RGAA](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/#topic3)
