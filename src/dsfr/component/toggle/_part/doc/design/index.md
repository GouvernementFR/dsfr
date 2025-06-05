---
title: Design de l'interrupteur
shortTitle: Design de l'Interrupteur
description: Présentation du composant Interrupteur permettant de basculer entre deux états opposés sans validation supplémentaire.
shortDescription: Basculer entre deux états opposés
keywords: interrupteur, switch, interface, interaction, accessibilité, design système, DSFR, état activé, état désactivé
cover: ../_asset/cover/cover.png
excerpt: Le composant Interrupteur permet à l’usager de choisir entre deux états opposés, comme activer ou désactiver une fonctionnalité, avec effet immédiat.
summary: Ce composant est conçu pour gérer rapidement des actions binaires dans une interface, notamment pour paramétrer des fonctionnalités comme les notifications. Il permet un usage fluide grâce à un affichage clair, des libellés explicites et une structure accessible. Il peut être utilisé seul ou en groupe et s’adapte visuellement aux contraintes d’affichage sans nécessiter de validation supplémentaire.
---

## Interrupteur

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)
:::


:::dsfr-doc-anatomy{col=12}

![Anatomie de l'interrupteur](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un titre]{required=true add="qui peut être positionné en haut (par défaut), en bas ou hors écran (balise caption)"}

::dsfr-doc-pin[Un bouton de tri par colonne]

::dsfr-doc-pin[Une case à cocher de sélection de colonne]

::dsfr-doc-pin[Une ou plusieurs données]{add="par cellule"}

::dsfr-doc-pin[Une barre d’actions haute]{add="pouvant contenir (uniquement et dans cet ordre) &#58; le nombre de lignes sélectionnées, une barre de recherche, des boutons d’actions liés à la sélection de lignes et un contrôle segmenté"}

::dsfr-doc-pin[Une ligne d’en-tête de colonne]{required=true}

::dsfr-doc-pin[Plusieurs lignes de corps]{required=true}

::dsfr-doc-pin[Des bordures horizontales entre les lignes]{required=true}

::dsfr-doc-pin[Une barre d’actions basse]{add="pouvant contenir (uniquement et dans cet ordre) &#58; le nombre total de lignes du tableau, une liste déroulante, une pagination et des boutons d’actions agissants sur tout le tableau"}

::dsfr-doc-pin[Une colonne de sélection de ligne]{add="toujours ferrée à gauche"}

::dsfr-doc-pin[Des bordure verticales entre les colonnes]{add="uniquement obligatoire dans le cas d’un tableau complexe"}

:::


### Variations

**Interrupteur avec libellé à droite**

::dsfr-doc-storybook{id=toggle--toggle}

**Groupe d’interrupteurs**

Utiliser l’interrupteur en groupe pour constituer une liste d’actions de même nature.

::dsfr-doc-storybook{id=toggle-group--toggle-group}

Lorsqu’il est utilisé en groupe, l’interrupteur doit toujours respecter le même format. Si le premier interrupteur affiche le label à gauche, l'état ou le séparateur optionnel, alors l’ensemble des interrupteurs du groupe devront également afficher ces éléments.

### Tailles

La largeur de l’interrupteur s’adapte à la taille de son conteneur. Si l’interrupteur se trouve dans un conteneur large avec le bouton à droite du libellé, attention à ce qu’il ne s’en détache pas visuellement.

### États

**État d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs système : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

::dsfr-doc-storybook{id=toggle--toggle args="status:error"}

**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs système : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

::dsfr-doc-storybook{id=toggle--toggle args="status:valid"}

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le bouton.

::dsfr-doc-storybook{id=toggle--toggle args="disabled:true"}

Dans le cas d’un interrupteur, il permet d’afficher un choix déjà effectué et/ou ne pouvant être modifié par l’usager.

### Personnalisation

Les interrupteurs ne sont pas personnalisables.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](../../../../toggle/_part/doc/index.md).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![À faire](../_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les interrupteurs.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![À ne pas faire](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des interrupteurs.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![À faire](../_asset/custom/do-1.png)

Conserver la coche lorsque l’interrupteur est activé.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![À ne pas faire](../_asset/custom/dont-1.png)

Ne pas supprimer ou personnaliser l’icône de l’interrupteur.

:::

::::


### Maillage

- [Bouton radio](../../../../radio/_part/doc/index.md)
- [Case à cocher](../../../../checkbox/_part/doc/index.md)
- [Contrôle segmenté](../../../../segmented/_part/doc/index.md)
