---
title: Design du bouton
---

## Bouton

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

### Design

:::dsfr-doc-anatomy{col=12}

![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé]{required=true}

::dsfr-doc-pin[Une icône, pouvant être modifiée (voir [les icônes disponibles](../../../../../core/icon/_part/doc/index.md))]

:::

#### **Variations**

**Bouton primaire**

[Image d’illustration]

**Bouton secondaire**

[Image d’illustration]

**Bouton tertiaire**

[Image d’illustration]

Le bouton tertiaire est caractérisé par un fond transparent.

Il peut également comporter un contour $border-default-grey, non obligatoire.

**Bouton avec icône**

Pour permettre une meilleure compréhension de l’action engendrée par votre bouton, il est possible d'y ajouter une icône. Pour cela, il suffit d’utiliser la classe CSS de l’icône ([voir la documentation des icônes](../../../../../core/icon/_part/doc/index.md)).

Trois déclinaisons sont possibles :

- Bouton avec icône à droite du libellé

[Image d’illustration]

- Bouton avec icône à gauche du libellé

[Image d’illustration]

- Bouton sans libellé avec icône seule

[Image d’illustration]

>[!WARNING]
>Limiter l’usage de ces boutons sans libellé. Ils doivent uniquement être utilisés pour les actions récurrentes, facilement identifiables de l’usager (exemple : engrenage pour les paramètres ou loupe pour la recherche).

#### **Tailles**

Les boutons sont disponibles en 3 tailles :

- SM pour small

[Image d’illustration]

- MD pour medium - taille par défaut

[Image d’illustration]

- LG pour large

[Image d’illustration]

- **Utiliser en priorité les formats MD et LG**. Le format SM pourra quant à lui être utilisé à l’intérieur d'autres composants.
- **Conserver une unité** dans la taille des boutons au sein d’une même page.

#### **États**

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le bouton.

[Image d’illustration]

**Attention !** N’utiliser cet état que très ponctuellement, pour indiquer à l’usager qu’il doit procéder à une action en amont par exemple.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le bouton avec sa souris.

[Image d’illustration]

**État au clic**

L’état au clic correspond au comportement constaté par l’usager lorsqu’il clique sur le bouton.

[Image d’illustration]

#### **Personnalisation**

Les boutons ne sont pas personnalisables.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées - voir [la structure du composant](#design).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![À faire](../_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les boutons primaires.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![À ne pas faire](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des boutons primaires.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![À faire](../_asset/custom/do-2.png)

Utiliser uniquement une typographie bleue pour les boutons secondaires.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![À ne pas faire](../_asset/custom/dont-2.png)

Ne pas personnaliser la couleur du libellé des boutons secondaires.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![À faire](../_asset/custom/do-3.png)

Conserver un fond transparent pour les boutons tertiaires.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![À ne pas faire](../_asset/custom/dont-3.png)

Ne pas appliquer un fond aux boutons tertiaires.

:::

::::

#### Maillage

- [Bouton France Connect](../../../../connect/_part/doc/index.md)
- [Icône](../../../../../core/icon/_part/doc/index.md)
