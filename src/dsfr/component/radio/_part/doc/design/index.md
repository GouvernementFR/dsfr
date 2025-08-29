---
boost: 0
sitemap:
  noindex: true
title: Design du Bouton radio
shortTitle: Design du Bouton radio
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Bouton radio.
shortDescription: Sélection d’une option unique
keywords: bouton radio, sélection, interface, formulaire, design système, DSFR, accessibilité, choix unique
cover: ../_asset/cover/cover.png
excerpt: Le composant Bouton radio permet de proposer à l’usager un choix unique parmi plusieurs options. Il est recommandé pour les listes de 2 à 5 éléments maximum.
summary: Ce composant est conçu pour faciliter le choix unique dans une interface, en particulier dans les formulaires. Il offre différentes dispositions et variations, y compris des versions enrichies avec pictogrammes. Il s’utilise en groupe, avec des libellés clairs et une hiérarchie visuelle cohérente. L’intégration respecte des règles d’ergonomie, d’accessibilité et d’uniformité éditoriale.
mesh:
  - component/checkbox
  - component/input
  - component/select
---

## Bouton radio

Le bouton radio est un élément d’interaction avec l’interface permettant à l’usager de réaliser un choix unique parmi plusieurs options.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une légende]{required=true add='décrivant le contexte du groupe de boutons radio'}

::dsfr-doc-pin[Une description additionnelle]{add='pour la légende'}

::dsfr-doc-pin[Un bouton radio]{required=true}

::dsfr-doc-pin[Un libellé]{required=true add='associé à chaque bouton'}

::dsfr-doc-pin[Un texte additionnel]{add='accompagnant chaque bouton / libellé'}

:::

### Variations

**Liste horizontale**

Privilégier les listes verticales aux listes horizontales, plus difficiles à lire pour l’utilisateur.

::dsfr-doc-storybook{storyId=radios-group--inline-group}

Cette variation horizontale est donc à utiliser uniquement lorsqu’il n’y a que 2 options possibles ou que les libellés des entrées sont courts.

**Liste avec texte d’aide**

Il est recommandé d’ajouter un texte d’aide qui accompagne les boutons radio afin de faciliter le choix de l’utilisateur. Ces précisions peuvent être apportées de deux façons :

- Par l’ajout d’un texte sous le titre du groupe de boutons radio, afin d’apporter une précision à l’intitulé du groupe.

::dsfr-doc-storybook{storyId=radios-group--hint}

- Par l’ajout d’un texte sous le libellé de chaque bouton radio, afin d’apporter une précision à chaque élément.

::dsfr-doc-storybook{storyId=radios-group--hint-group}

**Boutons radio riches**

Utiliser les boutons radio riches pour permettre à l’usager de sélectionner une option unique dans une liste d’options illustrées.

À la différence des boutons radio simples, le [pictogramme](../../../../../core/_part/doc/pictogram/index.md) du bouton radio riche permet d’illustrer et d’accompagner l’usager dans son choix.

Celui-ci est personnalisable.

**Liste horizontale**

- Avec description

::dsfr-doc-storybook{storyId=radios-group--radios-rich-inline-hint-group}

- Sans description

::dsfr-doc-storybook{storyId=radios-group--radios-rich-inline-group}

- Sans pictogramme

::dsfr-doc-storybook{storyId=radios-group--radios-rich-no-image-inline-group}

**Liste verticale**

- Avec description

::dsfr-doc-storybook{storyId=radios-group--radios-rich-hint-group}

- Sans description

::dsfr-doc-storybook{storyId=radios-group--radios-rich-group}

- Sans pictogramme

::dsfr-doc-storybook{storyId=radios-group--radios-rich-no-image-group}

### Tailles

Le bouton radio est proposé en taille MD par défaut (24px) afin d’optimiser son ergonomie et son accessibilité en ayant une zone cliquable confortable.

::dsfr-doc-storybook{storyId=radios-group--size-md}

Il existe également une version en taille SM (16 px) correspondant à la taille standard proposée par les navigateurs.

::dsfr-doc-storybook{storyId=radios-group--size-sm}

### États

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

::dsfr-doc-storybook{storyId=radios-group--status-error}

**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

::dsfr-doc-storybook{storyId=radios-group--status-valid}

**Etat désactivé**

L'état désactivé indique que l’utilisateur ne peux pas interagir avec le bouton radio.

::dsfr-doc-storybook{storyId=radios-group--disabled}

### **Personnalisation**

Les boutons radio ne sont pas personnalisables. Toutefois, certains éléments sont optionnels - voir [la structure du composant](#bouton-radio).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les boutons radio.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des boutons radio.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Utiliser uniquement une typographie noire.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas personnaliser la couleur des textes.

:::

::::
