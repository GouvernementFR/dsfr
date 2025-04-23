---
title: Accessibilité des Liens d'évitement
---

## Liens d'évitement

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Liens d'évitement** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Aucune interaction au clavier spécifique au composant.

#### Règles d’accessibilité

> [!NOTE]
> Le RGAA demande qu’**au moins un lien d’accès au contenu principal** soit présent et fonctionnel sur chaque page web sauf cas particulier (site constitué d’une seule page ou accès direct au contenu principal).
>
>Cela permet aux personnes handicapées motrices d’éviter les blocs répétés (ex. menu, fil d’Ariane). Les liens d’évitement ou d’accès rapide sont également utilisés dans une moindre mesure par les personnes aveugles.

##### Structuration

- Les liens d’évitement / accès rapide doivent être à l’intérieur d’un élément `<nav role="navigation>`.
- L’attribut `aria-label="Accès rapide"` est utilisé pour nommer et donner un contexte explicite à la navigation.
- S’il y a plusieurs liens&nbsp;:
  - les liens doivent être structurés avec une liste `<ul><li>`,
  - le lien d’accès «&nbsp;Contenu&nbsp;» est le premier de la liste.

##### Présentation

Les liens d’évitement sont positionnés hors écran et apparaissent à la navigation au clavier lors de la prise de focus.

#### Contrastes de couleur
Le composant **Liens d'évitement** est suffisamment contrasté en thème clair (ratio de 12,8:1) et en thème sombre (ratio de 4,9:1).

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant.

---

### Critères RGAA applicables
- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Structuration** : 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.9

---

#### Références

- [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
