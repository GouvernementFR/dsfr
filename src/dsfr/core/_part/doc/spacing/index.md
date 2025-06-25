---
title: Espacement
description: Cette page détaille le système d’espacement du DSFR fondé sur la grille en multiples de 8 pixels et son usage pour assurer la cohérence des interfaces.
shortDescription: Système d’espacement fondé sur la grille 8 points
keywords: espacement, marge, padding, 8px, design system, DSFR, grille, rem, classes utilitaires, cohérence UI
cover: ../_asset/spacing/cover/cover.png
excerpt: Comprendre les règles d’espacement du DSFR et leur application dans la conception d’interfaces cohérentes.
summary: Le DSFR repose sur un système d’espacement en multiples de 8 pixels afin d’uniformiser les marges et paddings dans les interfaces. Cette page présente les règles de base, les exceptions prévues (4px, 12px, 20px), la nomenclature utilisée, et les classes CSS associées. Elle aborde également les bonnes pratiques pour concevoir des interfaces lisibles et hiérarchisées.
order: 5
---

# Espacement

Le DSFR propose un système de dimension d'espacement et de marge qui s’appuie sur les multiples de 8 (le système “8 point grid”).

## Règles d’espacement

Ce système d’espacement permet de garantir une homogénéité, cohérence et consistance des interfaces conçues. Cela dans le but d'améliorer l’UX et de faciliter la conception et le développement.

Nous utilisons des multiples de 4px pour définir les marges, auxquels s’ajoutent les espacements de -6px, -2px, 2px, et 6px afin de gérer tous les cas de figure les plus courants.

## Espacement horizontaux

![Modélisation des espacements horizontaux](../_asset/spacing/spacing-horizontal-example.png)

## Espacement verticaux

![modélisation des espacements verticaux](../_asset/spacing/spacing-vertical-example.png)

Dans le code, les espacements sont exprimés en Rem. Voici la correspondance des pixels en Rem.

La nomenclature “v” indique un multiple de 4 et “w” un multiple de 8 (la nomenclature en "w" est dépréciée).

La nomenclature “n” indique un espacement négatif, et la valeur “0” ne requiert pas d'unité.

:::fr-table[Correspondance des espacements]{valign=top scroll=false vheaders=vertical caption=false}

| Nom (token) | Espace en rem | Espace en pixel  |
|-------------|---------------|------------------|
| **n8v**     | -2            | -32              |
| **n7v**     | -1.75         | -28              |
| **n6v**     | -1.5          | -24              |
| **n5v**     | -1.25         | -20              |
| **n4v**     | -1            | -16              |
| **n3v**     | -0.75         | -12              |
| **n2v**     | -0.5          | -8               |
| **n1-5v**   | -0.375        | -6               |
| **n1v**     | -0.25         | -4               |
| **n0-5v**   | -0.125        | -2               |
| **0**       | 0             | 0                |
| **0-5v**    | 0.125         | 2                |
| **1v**      | 0.25          | 4                |
| **1-5v**    | 0.375         | 6                |
| **2v**      | 0.5           | 8                |
| **3v**      | 0.75          | 12               |
| **4v**      | 1             | 16               |
| **5v**      | 1.25          | 20               |
| **6v**      | 1.5           | 24               |
| **7v**      | 1.75          | 28               |
| **8v**      | 2             | 32               |
| **9v**      | 2.25          | 36               |
| **10v**     | 2.5           | 40               |
| **11v**     | 2.75          | 44               |
| **12v**     | 3             | 48               |
| **13v**     | 3.25          | 52               |
| **14v**     | 3.5           | 56               |
| **15v**     | 3.75          | 60               |
| **16v**     | 4             | 64               |
| **17v**     | 4.25          | 68               |
| **18v**     | 4.5           | 72               |
| **19v**     | 4.75          | 76               |
| **20v**     | 5             | 80               |
| **21v**     | 5.25          | 84               |
| **22v**     | 5.5           | 88               |
| **23v**     | 5.75          | 92               |
| **24v**     | 6             | 96               |
| **25v**     | 6.25          | 100              |
| **26v**     | 6.5           | 104              |
| **27v**     | 6.75          | 108              |
| **28v**     | 7             | 112              |
| **29v**     | 7.25          | 116              |
| **30v**     | 7.5           | 120              |
| **31v**     | 7.75          | 124              |
| **32v**     | 8             | 128              |

:::

## Titres et paragraphes

Les espacements sous les titres et les paragraphes de texte - margin-bottom - sont :

:::fr-table[espacements des titres et paragraphes]{valign=top scroll=false vheaders=vertical caption=false}

| éléments                   | Token / px / rem     |
|---------------------------|----------------------|
| **Titres (h1 - h6)**      | 6v / 24px / 1,5rem   |
| **Titres alternatifs**     | 8v / 32 px / 2rem    |
| **paragraphes de texte (xl - xs)** | 6v / 24px / 1,5rem   |

:::

[Voir le détail sur la documentation de la Typographie](../typography/index.md)

## Règles d’utilisation

### Espacement

Chaque partie de l'interface utilisateur doit être intentionnellement conçue, y compris l'espace vide entre les éléments. Les espacements permettent de :

**Créer des relations**

- Utilisez des espacements faibles entre plusieurs composants pour signaler qu’ils sont liés, ou font partie d’un même groupe (exemple : champs de formulaire) ;
- Utilisez des espacements importants pour mettre en évidence un élément indépendant du reste de la page (exemple : call to action).

**Créer des hiérarchies**

- Augmentez les espacements autour d’un composant clé de votre page permet d’améliorer sa visibilité.

### Classes CSS

Des classes utilitaires sont présentes au sein du DSFR afin de mettre en place ces espacements de manière simplifiée. Il est de ce fait possible par exemple, d’ajouter un espacement en bas d’un bloc de 40 pixels par exemple, en utilisant la classe `.fr-mb-10v`.

Ces classes existent pour les propriétés de padding et de margin, pour les directions top, right, bottom et left.

#### Propriété de padding et margin

:::fr-table[nomenclature des marges]{valign=top scroll=false vheaders=vertical caption=false}

| Valeur possible | Diminutif de la valeur | Exemple |
|----------------|------------------------|---------|
| **Margin**     | m                      | `fr-m-1v` correspond a une marge externe (margin) de 1v sur tous les cotés |
| **Padding**    | p                      | `fr-p-1v` correspond a une marge interne (padding) de 1v sur tous les cotés |

:::

#### Propriété de direction : top, bottom, right, left

:::fr-table[nomenclature des directions]{valign=top scroll=false vheaders=vertical caption=false}

| Valeur possible | Diminutif de la valeur | Exemple |
|----------------|------------------------|---------|
| **Top**        | t                      | `fr-mt-1v` correspond a une margin top de 1v |
| **Bottom**     | b                      | `fr-mb-1v` correspond a une margin bottom de 1v |
| **Left**       | l                      | `fr-ml-1v` correspond a une margin left de 1v |
| **Right**      | r                      | `fr-mr-1v` correspond a une margin right de 1v |
| **Top + bottom**| y                     | `fr-my-1v` correspond a une margin top et bottom de 1v |
| **Left+right** | x                      | `fr-mx-1v` correspond a une margin left et right de 1v |
| **Top + Bottom + Left + Right** |  | `fr-m-1v` correspond a une margin de tous les coté de 1v |

:::

#### Propriété de point de rupture : md

:::fr-table[nomenclature du point de rupture]{valign=top scroll=false vheaders=vertical caption=false}

| Valeur possible | Diminutif de la valeur | Exemple |
|----------------|------------------------|---------|
| **md**        | md                     | `fr-mt-md-1v` correspond a une margin top de 1v  à partir du point de rupture md. |

:::

#### Valeurs spéciales

::::fr-table[nomenclature des valeurs spéciales]{valign=top scroll=false vheaders=vertical caption=false}

| Valeur possible | Diminutif de la valeur | Exemple |
|----------------|------------------------|---------|
| **négative**   | n                      | `fr-m-n1v` correspond a une margin négative de tous les cotés de 1v. `fr-mb-n1v` correspond a une margin bottom négatif de - 1v |
| **nulle**      | 0                      | `fr-m-0` correspond à une marge à 0 de tous les cotés. |
| **auto**       | auto                   | `fr-m-auto` correspond à une marge "auto" de tous les cotés. |

::::
