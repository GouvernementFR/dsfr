---
title: Accessibilité du Partage
---

## Partage

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité
:::

### Accessibilité

Le composant **Partage** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Aucune interaction au clavier spécifique au composant.

#### Règles d’accessibilité

- Les boutons ou liens de partage sont structurés dans une liste.
- Le bouton pour copier le lien de la page doit être un élément `button`. Attention à bien implémenter le message de confirmation pour qu’il soit restitué aux technologies d’assistance.

Voir les [règles d'accessibilité du composant Lien](../../../../link/_part/doc/accessibility/index.md#regles-d-accessibilite) et les [règles d’accessibilité du composant Bouton](../../../../button/_part/doc/accessibility/index.md#regles-d-accessibilite).

##### Version inactive

- La mention d’information est située avant la liste de liens et de boutons de partage dans le code HTML.
- Les liens-icônes ou boutons-icônes désactivés conservent un ratio de contraste minimum de 3.
- Les liens désactivés n’ont pas d’attribut href et possèdent les attributs `aria-disabled="true"` et `role="link"`.

##### Bouton ou lien&nbsp;?

>[!NOTE]
>Un bouton permet de **déclencher une action ou un événement**&nbsp;:
>- **nativement** en fonction du type du bouton&nbsp;: envoi d’un formulaire (`submit`), suppression de contenu de champs de formulaire (`reset`)&nbsp;;
>- **en JavaScript**&nbsp;: ouverture d’une fenêtre modale, fermeture d’un contenu, modification de la page…
>
>Un lien `<a href>` permet de rediriger vers une autre page ou à un autre endroit dans la page (ancre).

##### Contrastes de couleur

Le composant Partage est suffisamment contrasté en thème clair et en thème sombre.

:::dsfr-doc-table[Contraste des textes et des icônes]{valign=top scroll=false caption=true}
| Élément |  Thème clair | Thème sombre |
|------|-----|-----|
|**Texte Partager**| 11,4:1| 5,7:1 |
|**Lien-icône inactif**| 3:1 | 3,2:1 |
|**Lien-icône actif**| 14,9:1| 5,7:1 |
|**Mention d’information**| 5,7:1| 5,8:1 |
:::

---- 

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type**. L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran&nbsp;:
- VoiceOver macOS et iOS&nbsp;: «&nbsp;estompé&nbsp;»
- NVDA et JAWS&nbsp;: «&nbsp;non disponible&nbsp;»
- Narrateur et Talkback &nbsp;: «&nbsp;désactivé&nbsp;» 

:::fr-accordion[#### Versions navigateurs et lecteurs d’écran]{id=sr-le-desktop}
Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web&nbsp;:
- Firefox 137
- Chrome 135
- Safari 18.4 (sur macOS uniquement)
- Microsoft Edge 135 (sur Windows 11 uniquement)

Version des lecteurs d’écran&nbsp;:
- NVDA 2024.4.2
- JAWS 2024
- VoiceOver macOS 15.4
- Narrateur (Windows 11)
- VoiceOver iOS
:::

----- 

### Références

- [Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
