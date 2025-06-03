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

Le composant **Pied de page** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Pied de page**.

Les interactions clavier sont celles des [liens](../../../../link/_part/doc/accessibility/index.md) contenus dans le pied de page.

#### Règles d’accessibilité

Les règles d’accessibilité du composant "Pied de page" découlent de celles des composants qui la compose.

L'élément `<footer>` doit posséder un `role="contentinfo"`.

##### Mention obligatoire

Une mention obligatoire de conformité au RGAA doit apparaître sur toutes les pages.

Cette mention peut être cliquable et conduire vers la page Accessibilité ou vers la déclaration d’accessibilité.

La mention se décline en :
  - «&nbsp;Accessibilité : non conforme&nbsp;» si le taux de conformité est inférieur à 50% (ou qu’aucun audit n’a été effectué)
  - «&nbsp;Accessibilité : partiellement conforme&nbsp;» si le taux de conformité est supérieur à 50%.
  - «&nbsp;Accessibilité : totalement conforme&nbsp;» si le taux de conformité est égal à 100%.

Voir plus d'information sur les obligations légales sur l’[accessibilité des sites publics](https://design.numerique.gouv.fr/accessibilite-numerique/cadre-legal/).

#### Contrastes de couleurs

Le pied de page est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant En-tête.

---

### Critères RGAA applicables
- **Images&nbsp;:** 1.1, 1.2, 1.3
- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1, 9.2, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation&nbsp;:** 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément footer](https://html.spec.whatwg.org/#the-footer-element)