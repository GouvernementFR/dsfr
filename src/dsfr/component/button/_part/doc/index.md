---
title: Bouton
shortTitle: Bouton
titleId: Button
description: Présentation du composant Bouton permettant à l’usager d’exécuter une action dans une interface numérique.
shortDescription: Déclenchement d’une action dans l’interface
keywords: bouton, interaction, action, DSFR, design système, accessibilité, formulaire, navigation
cover: ./_asset/cover/cover.png
excerpt: Le composant Bouton permet de déclencher une action dans la page, comme soumettre un formulaire ou naviguer vers un contenu. Il se décline en versions primaire, secondaire et tertiaire.
summary: Le bouton est un composant central d’interaction dans les interfaces numériques. Il est utilisé pour initier une action précise selon un niveau de priorité - bouton primaire pour l’action principale, secondaire pour les actions secondaires et tertiaire pour les interactions contextuelles. Il respecte des règles d’écriture éditoriale claires, n’est pas personnalisable graphiquement et s’intègre de manière cohérente dans une interface respectueuse des standards d’accessibilité.
mesh:
  - component/connect
  - core/icon
---

## Bouton

Le bouton est un élément d’interaction avec l’interface permettant à l’usager d’effectuer une action.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=button--button}

### Quand utiliser ce composant ?

**Utiliser le bouton pour déclencher une action dans la page.**

> [!NOTE]
> Bien différencier les boutons des liens.

Le [lien](../../../link/_part/doc/index.md) est utilisé pour naviguer à l’intérieur (ou à l’extérieur) de votre site.

### Comment utiliser ce composant ?

- **Utiliser le bouton primaire pour les actions principales** (soumettre un formulaire, rediriger vers un contenu priorisé, etc.). Il est recommandé de limiter son usage à un bouton primaire par page.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Aligner un bouton primaire avec un bouton secondaire ou un lien.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas utiliser deux boutons primaires côte à côte.

:::

::::

- **Choisir le bouton secondaire pour des actions moins importantes** (réinitialiser les valeurs d’un formulaire, par exemple)
- **Réserver le bouton tertiaire pour des actions contextuelles ou alternatives** (fermeture de modale, annuler, partager, suivre sur un réseau social, copier un lien, etc.)

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas indiquer une hiérarchie entre 2 boutons tertiaires via la présence ou non de contour.

:::

::::

- **Attention à hiérarchiser les actions proposées à l’usager**. Utiliser une combinaison de bouton de styles différents pour maintenir l’attention sur l’action principale (cf. composant “Groupe de boutons”).
- **Utiliser uniquement la couleur bleue**. Cette couleur est utilisée pour signaler une interaction sur les éléments principaux (cf. couleurs).

### Règles éditoriales

- **Rédiger un texte concis et explicite sur l’action** que le bouton va initier.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Rédiger un texte clair, explicite et prévisible. L’usager doit savoir ce qui va se passer.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas tromper l’usager. Fournir le contexte que l’usager sache quelle action va être réalisée.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-2.png)

Ne pas rédiger des libellés trop longs pour éviter le passage du bouton sur 2 lignes.

:::

::::

- **Indiquer ce que l’usager va faire**, sans nommer le bouton ou sa localisation.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-2.png)

Se concentrer sur l’action principale, en restant concis et clair.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-3.png)

Ne pas mentionner le composant bouton, ni sa localisation.

:::

::::

- **Commencer les textes des boutons avec un verbe d’action.**

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-3.png)

Commencer les textes des boutons avec un verbe d’action à l’infinitif.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-4.png)

Ne pas utiliser  “Je” ou ne pas conjuguer le verbe.

:::

::::

- **Conserver une unité** dans le format d’écriture de tous vos libellés de boutons.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-4.png)

Mettre des majuscules en début de phrase.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-5.png)

Ne pas rédiger les libellés de vos boutons en lettres capitales.

:::

::::

- **Éviter les redondances** entre instructions et boutons. Ces éléments sont complémentaires.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-5.png)

Accompagner vos boutons d’instructions pour garantir la bonne compréhension de l’usager, lorsque nécessaire.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-6.png)

Ne pas créer de redondances entre instructions et boutons. Ces éléments sont complémentaires.

:::

::::
