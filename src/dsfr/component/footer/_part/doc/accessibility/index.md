---
title: Accessibilité du Pied de page
shortTitle: Accessibilité du Pied de page
description: Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.
shortDescription: Informations complémentaires en bas de page
keywords: pied de page, footer, navigation secondaire, DSFR, accessibilité, informations légales, design système
cover: ../_asset/cover/cover.png
excerpt: Le composant Pied de page structure les informations secondaires d’un site, comme les mentions légales, les liens institutionnels et les coordonnées, tout en facilitant la navigation de fin de parcours.
summary: Ce composant permet de clore chaque page avec un ensemble structuré d’informations complémentaires, de liens obligatoires et de repères institutionnels. Il peut inclure des blocs de liens, une description du service, un bloc marque, et une mention légale normalisée. Le pied de page est non personnalisable, s’intègre sur l’ensemble des pages d’un site public, et respecte les exigences d’accessibilité et de cohérence éditoriale.
---

## Pied de page

Le pied de page est un élément de navigation secondaire mis à disposition de l’usager pour qu’il poursuive son parcours. Il propose également des éléments d’information complémentaires.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Pied de page** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Pied de page**.
Les interactions clavier sont celles des [liens](../../../../link/_part/doc/accessibility/index.md) contenus dans le pied de page.
Le footer doit être accessible via un [lien d'évitement](../../../../skiplink/_part/doc/accessibility/index.md) pour y accéder rapidement au clavier.

#### Règles d'accessibilité

- L'élément `<footer>` doit posséder le role aria `contentinfo`.
- Pour les libellés des liens, utiliser des formulations claires et concises.
- Fournir des alternatives textuelles pour les éléments visuels.
- La mention de conformité (ou non) au RGAA doit apparaître sur toutes les pages. Cette mention peut être cliquable et conduire vers la page Accessibilité ou vers la déclaration d’accessibilité. La déclaration d’accessibilité du site doit être libellé de la façon suivante :
  - “Accessibilité : non conforme” si le taux de conformité est inférieur à 50% (ou qu’aucun audit n’a été effectué)
  - “Accessibilité : partiellement conforme” si le taux de conformité est supérieur à 50%.
  - “Accessibilité : totalement conforme” si le taux de conformité est égal à 100%.
- Voir plus d'information sur les obligations légales sur l'[accessibilité des sites publics](https://design.numerique.gouv.fr/accessibilite-numerique/cadre-legal/).

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
