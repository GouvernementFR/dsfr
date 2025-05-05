---
title: Accessibilité du pied de page
---

## Pied de page

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
