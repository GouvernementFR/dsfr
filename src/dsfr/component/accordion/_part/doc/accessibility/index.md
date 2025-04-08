---
title: Accessibilité de l’Accordéon
---

## Accordéon

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant Accordéon est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est sur le bouton d’ouverture de l’accordéon&nbsp;:
- `Entrée`&nbsp;: ouvre ou ferme la zone de contenu associée.
- `Espace`&nbsp;: ouvre ou ferme la zone de contenu associée.

Navigation entre les accordéons&nbsp;: 
- `Tab`&nbsp;: déplace le focus sur le bouton suivant. 
- `Maj` + `Tab`&nbsp;: déplace le focus sur le bouton précédent.

Si une zone de contenu de l’accordéon est ouverte, tous les éléments interactifs à l’intérieur sont inclus dans le parcours de navigation au clavier.

### Règles d’accessibilité

Le composant **Accordéon** s’appuie sur le motif de conception ARIA <span lang="en">Accordion</span> de l’<a href="https://www.w3.org/WAI/ARIA/apg/about/introduction/" lang="en">Authoring Practices Guide</a> (APG).

#### Titre de l’accordéon

- Le titre de l’accordéon doit être explicite et permettre de comprendre le contenu proposé.
- Le niveau titre de l’accordéon doit être cohérent avec le reste de la page.

#### Bouton de l’accordéon

- Il est placé à l’intérieur de la balise `hx`, autour du texte.
- Il possède deux attributs ARIA&nbsp;:
  - `aria-expanded` défini à :
    - `true` lorsque la zone de contenu contrôlée est affichée,
    - `false` lorsque la zone de contenu contrôlée est masquée.
  - `aria-controls` qui relie le bouton à la zone contrôlée et dont la valeur doit correspondre à l’attribut `id` de la zone de contenu.

#### Groupe d’accordéons 

Le comportement par défaut du «&nbsp;Groupe d’accordéons&nbsp;» (ouverture d’un accordéon à la fois seulement) peut poser des problèmes d’utilisabilité pour certaines personnes handicapées.

L’option «&nbsp;Groupe d’accordéons dissociés&nbsp;» est à privilégier.

#### Contrastes de couleur

Le composant Accordéon est suffisamment contrasté en thème clair.

:::dsfr-doc-table[Contraste du texte et du chevron de l’accordéon]{valign=top scroll=false caption=true}
| État du bouton |  Thème clair | Thème sombre |
|------|-----|-----|
|**fermé - par défaut**| 14,9:1 | 5,76:1 |
|**fermé - au survol**| 13,79:1| 4:1 |
|**ouvert - par défaut**| 11,83:1| 4,55:1 |
|**ouvert - au survol**| 13,79:1| 2,6:1 |
:::

Au survol du bouton en thème sombre, le ratio de contraste entre le texte et le fond du bouton est insuffisant.

Le chevron est insuffisamment contrasté au survol uniquement lorsque l’accordéon est ouvert.

### Restitution par les lecteurs d’écran

#### Lecteurs d’écran — ordinateur

Les tests ont été effectués avec les navigateurs web suivant&nbsp;:
- Firefox 137
- Chrome 135
- Safari 18.4 (sur macOS uniquement)
- Microsoft Edge 135 (sur Windows 11 uniquement)

##### NVDA (version 2024.4.2)

- Lorsque l’accordéon est fermé&nbsp;: «&nbsp;réduit&nbsp;».
- Lorsque l’accordéon est ouvert&nbsp;: «&nbsp;développé&nbsp;».

##### JAWS (2024)

- Lorsque l’accordéon est fermé&nbsp;: «&nbsp;réduit&nbsp;».
- Lorsque l’accordéon est ouvert&nbsp;: «&nbsp;étendu&nbsp;».

##### VoiceOver (macOS 15.4)

- Lorsque l’accordéon est fermé&nbsp;: «&nbsp;condensé&nbsp;».
- Lorsque l’accordéon est ouvert&nbsp;: «&nbsp;étendu&nbsp;».

Selon la version de macOS, un [bug de VoiceOver](https://bugs.webkit.org/show_bug.cgi?id=284804) fait qu’il ne restitue pas le changement d’état lorsque le bouton est actionné.

##### Narrateur (Windows 11)

- Lorsque l’accordéon est fermé&nbsp;: «&nbsp;réduit&nbsp;».
- Lorsque l’accordéon est ouvert&nbsp;: «&nbsp;développé&nbsp;».

Le lecteur d’écran vocalise le changement d’état lorsque le bouton est actionné uniquement avec Microsoft Edge.

Sur Chrome et Firefox, le changement d’état n’est pas vocalisé lorsque le bouton est actionné. 

#### Lecteurs d’écran mobile

##### VoiceOver iOS et Safari

- Lorsque l’accordéon est fermé&nbsp;: «&nbsp;condensé&nbsp;».
- Lorsque l’accordéon est ouvert&nbsp;: «&nbsp;étiré&nbsp;».

##### Talkback (Android) et Chrome

- Lorsque l’accordéon est fermé&nbsp;: «&nbsp;regroupé&nbsp;».
- Lorsque l’accordéon est ouvert&nbsp;: «&nbsp;développé&nbsp;».

### Critères RGAA applicables

- Couleurs&nbsp;: 3.2, 3.3
- Scripts&nbsp;: 7.1, 7.3
- Éléments obligatoires&nbsp;: 8.9,
- Structuration&nbsp;: 9.1,
- Présentation de l’information&nbsp;: 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- Navigation&nbsp;: 12.8

### Références
- [Attribut aria-expanded — spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#aria-expanded)
- [Attribut aria-controls — spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#aria-controls)
- [Motif de conception WAI-ARIA Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
