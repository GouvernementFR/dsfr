---
title: Système d'ombres et d'élévation
shortTitle: Système d'ombres et d'élévation
description: Description des niveaux d’élévation utilisés dans le DSFR pour mettre en valeur les composants via ombrages et fonds adaptés.
shortDescription: Présentation des niveaux d’élévation et des ombres dans le DSFR.
keywords: élévation, ombres, z-index, fond, thème clair, thème sombre, DSFR, composant, design tokens
cover: ../_asset/elevation/cover/cover.png
excerpt: Le DSFR définit quatre niveaux d’élévation pour structurer visuellement l’interface, améliorer l’accessibilité et la hiérarchie des contenus.
summary: Le Système de Design de l’État définit un système cohérent d’ombres et de fonds selon le niveau d’élévation de chaque composant. Base, Surélevé, Superposé et Détaché guident la construction d’interfaces lisibles et accessibles en thème clair comme en sombre.
order: 10
---

# Système d'ombres et d'élévation

L'élévation représente la superposition d’un élément par rapport à autre sur un axe Z.

Au sein du DSFR, l'élévation est notamment matérialise par une ombre placée sur les éléments mis en avant (élevés) , ainsi que par une couleur de fond, plus claire, en mode sombre.

On distingue 4 niveaux ou étages différents sur l’ensemble des composants du DSFR :

- **Base** (default) : le niveau par défaut, sans manifestation visuelle.
- **Surélevé** (raised) : niveau le plus bas, les éléments concernés sont mis en avant par rapport à la base mais existent dans le même contexte et ne se superposent pas (peut notamment servir à souligner une interaction).
- **Superposé** (overlap) : les éléments concernés passent par-dessus les niveaux précédents (par exemple, lors d’un défilement ou l’ouverture d’un menu) ; pour autant, les niveaux précédents ne sont pas ignorés et partiellement visibles. En code, on trouve `$overlap-over` et `$overlap-above` pour gérer les cas où des éléments $overlap sont affichés en même temps sur l’écran (exemple : bandeau consent et menu déroulant).
- **Détaché** (lifted) : les éléments concernés passent par-dessus les niveaux précédents, et ces derniers sont retirés du champ d’attention de l’utilisateur (par exemple via l’utilisation d’une surcouche assombrissante).

:::fr-table[Élévation]{valign=top scroll=false}
| Niveau | Fond (Bg) | Valeurs thème clair | Valeurs thème sombre | Tokens sketch | Tokens Figma | Composants |
|:-----|:-----|:-----|:-----|:-----|:-----|:-----|
| Base (default) |  | Fond : `$grey-1000` | Fond : `$grey-50` | `$background-default-grey` | Background :`$background/default-grey` |  |
| Surélevé (raised) | défaut | Fond : `$grey-1000`<br>Ombre : 0, 2, 6, 0 rgba(0, 0, 18, 16%) | Fond : `$grey-75`<br>Ombre : 0, 2, 6, 0 rgba(0, 0, 18, 32%) | `$background-raised-grey` | Background : `$background/elevation/raised-grey`<br> Ombre : `$raised` | Carte,Header |
| Surélevé (raised) | alt | Fond : `$grey-975`<br>Ombre : 0, 2, 6, 0 rgba(0, 0, 18, 16%) | Fond : `$grey-100`<br>Ombre : 0, 2, 6, 0 rgba(0, 0, 18, 32%) | `$background-alt-raised-grey` | Background : `$background/elevation/alt-raised-grey`<br>Ombre : `$raised` |  |
| Surélevé (raised) | contrast | Fond : `$grey-950`<br>Ombre : 0, 2, 6, 0 rgba(0, 0, 18, 16%) | Fond : `$grey-125`<br>Ombre : 0, 2, 6, 0 rgba(0, 0, 18, 32%) | `$background-contrast-raised-grey` | Background : `$background/elevation/contrast-raised-grey`<br>Ombre : `$raised` | Carte |
| Superposé  (overlap) | défaut | Fond : `$grey-1000`<br>Ombre : 0, 4, 12, 0 rgba(0, 0, 18, 16%) | Fond : `$grey-100`<br>Ombre : 0, 4, 12, 0 rgba(0, 0, 18, 32%) | `$background-overlap-grey` | Background : `$background/elevation/overlap-grey`<br>Ombre : `$overlap` | Navigation principale,Sélecteur de langue. |
| Superposé  (overlap) | alt | Fond : `$grey-975`<br>Ombre : 0, 4, 12, 0 rgba(0, 0, 18, 16%) | Fond : `$grey-125`<br>Ombre : 0, 4, 12, 0 rgba(0, 0, 18, 32%) | `$background-overlap-grey` | Background : `$background/elevation/alt-overlap-grey`<br>Ombre : `$overlap` | Gestionnaire de consentement |
| Superposé  (overlap) | contrast | Fond : `$grey-950`<br>Ombre : 0, 4, 12, 0 rgba(0, 0, 18, 16%) | Fond : `$grey-150`<br>Ombre : 0, 4, 12, 0 rgba(0, 0, 18, 32%) | `$background-contrast-overlap-grey` | Background : `$background/elevation/contrast-overlap-grey`<br>Ombre : `$overlap` |  |
| Détaché(lifted) |  | Fond : `$grey-1000`<br>Ombre : 0, 6, 18, 0 rgba(0, 0, 18, 16%) | Fond : `$grey-75`<br>Ombre : 0, 6, 18, 0 rgba(0, 0, 18, 32%) | `$background-lifted-grey` | Background : `$background/elevation/lifted-grey`<br>Ombre : `$lifted` | Modale |
::::
