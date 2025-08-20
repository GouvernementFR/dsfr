---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Alerte
shortTitle: Accessibilité de l'Alerte
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Alerte.
shortDescription: Relayer une information importante
keywords: alerte, message, erreur, succès, information, attention, DSFR, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Alerte informe l’usager d’un événement ou d’un état du système, comme une erreur, une confirmation ou une information complémentaire, de manière non bloquante.
summary: Ce composant permet de transmettre à l’usager un message important en lien avec une action ou un état du système, sans interrompre sa tâche. Il est utilisé dans des contextes variés, comme un formulaire ou un événement technique. Il propose plusieurs variations (succès, erreur, information, attention), deux tailles, et des règles éditoriales strictes pour garantir une communication claire, courtoise et accessible.
mesh:
  - component/form
---

## Alerte

L’alerte est un élément d’indication poussé par l’interface pour relayer une information à l’usager.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Alerte** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Contenu de l’alerte

- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h3>`.
- Le type d’alerte (info, error, success, warning) doit être indiqué textuellement dans le contenu de l'alerte par les termes : «&nbsp;information&nbsp;», «&nbsp;erreur&nbsp;», «&nbsp;succès&nbsp;», ou «&nbsp;attention&nbsp;».

#### Alertes avec bouton de fermeture

- Les alertes refermables ont un bouton de fermeture avec un intitulé explicite («&nbsp;Masquer le message&nbsp;»).
- À la fermeture de l’alerte, le focus doit être repositionné à un endroit pertinent pour l’utilisateur

#### Alertes ajoutées dynamiquement

Une alerte ajoutée après le chargement de la page doit être perçue par tous les utilisateurs.

Pour les alertes simples, ajouter sur le conteneur de l’alerte&nbsp;:
- un `role="alert"` pour les messages d’erreur ou les avertissements
- un `role="status"` pour les messages de succès ou d’information.

> [!WARNING]
> Ne pas faire disparaître l’alerte sans action de l’utilisateur. Les alertes temporaires (<span lang="en">toast</span>) posent d’importants problèmes d’accessibilité et d’utilisabilité.

### Restitution par les lecteurs d’écran

La restitution des rôles `alert` et `status` par les lecteurs d’écran varie selon les implémentations.

Le `role="alert"` est toujours correctement restitué par tous les lecteurs d’écran, peu importe la méthode d’implémentation, contrairement au `role="status"`.

En cas de problème de restitution avec le `role="status"`, il peut également être utilisé sur les messages d’information ou de succès.

### Critères RGAA applicables

- **Couleurs**&nbsp;: 3.2, 3.3
- **Scripts&nbsp;:** 7.1, 7.3, 7.5
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9,1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- <a href="https://www.w3.org/TR/wai-aria-1.1/#live_region_roles"  target="_blank" rel="noopener external" title="W3C - nouvelle fenêtre">Spécification ARIA - <span lang="en">Live regions</span></a>
- [Rôle alert](https://www.w3.org/TR/wai-aria-1.1/#alert)
- [Rôle status](https://www.w3.org/TR/wai-aria-1.1/#status)

#### Ressources

- <a href="https://access42.net/live-regions-aria-live-analogues-alert-log-status/" title="access42 - nouvelle fenêtre" target="_blank" rel="noopener external"><span lang="en">Live regions</span> ARIA : aria-live et ses analogues alert, log, status</a>
- <a href="https://access42.net/live-regions-aria-restitution-lecteurs-ecran/" title="access42 - nouvelle fenêtre" target="_blank" rel="noopener external"><span lang="en">Live regions</span> ARIA : comment garantir leur restitution par les lecteurs d’écran</a>
- <a href="https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-1/" title="sarasoueidan - nouvelle fenêtre" target="_blank" rel="noopener external" lang="en">Accessible notifications with ARIA Live Regions (Part 1)</a>
- <a href="https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-2/" title="sarasoueidan - nouvelle fenêtre" target="_blank" rel="noopener external" lang="en">Accessible notifications with ARIA Live Regions (Part 2)</a>
