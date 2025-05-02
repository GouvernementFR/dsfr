---
title: Accessibilité du contenu médias
---

## Contenu médias

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Contenu médias** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Contenu médias**.

#### Règles d’accessibilité

- Utiliser des balises sémantiques pour structurer le contenu multimédia.
  - Utiliser la balise `<figure>` pour encapsuler les contenus multimédias.
  - Indiquer la **description** et/ou la **source** du média dans un élément `<figcaption>`.
- Les contenus multimédias doivent être **accessibles** aux technologies d'assistance.
  - Si la `figure` possède une légende dans une balise `figcaption`, elle doit également avoir un attribut `aria-label` reprenant le texte du figcaption.
  - Utiliser l'attribut `alt` pour les images, laisser vide si l'image n'apporte pas de sens supplémentaire au contexte. Si l'image est porteuse de texte ou apporte du sens, l'attribut `alt` doit renseigner cette information.
  - Si l'image est un SVG, les SVG illustratifs (non porteur de sens) doivent avoir l'attribut `aria-hidden="true"`. Les SVG porteurs de sens doivent avoir l'attribut `role="img"` et un attribut `aria-label`.
  - Pour les `<video>`, l'alternative doit être présente dans un paragraphe `<p>` au sein de la balise `<video>`.
  - Utiliser l'attribut `title` pour les `iframe` pour indiquer le titre de la vidéo.
  - Lorsque le contenu à renseigner dans l'alternative est trop long, utiliser le composant [Transcription](../../../../transcription/_part/doc/code/index.md) sous le média pour afficher le contenu complet.
- Les contenus multimédias doivent être **responsive**.
  - Utiliser la classe `fr-responsive-img` pour les images.
  - Utiliser la classe `fr-responsive-vid` pour les vidéos.
- Pour les vidéos :
  - Les contrôles de lecture sont présents. Utiliser l'attribut `controls` pour les balises `<video>`.
  - La lecture ne commence pas sans le contrôle de l’utilisateur.
  - Le lecteur est utilisable au clavier selon un ordre logique.
  - Les vidéos (hors direct) sont sous-titrées.

#### Contrastes de couleurs

Le composant Contenu médias est suffisamment contrasté en thème clair.

### Critères RGAA applicables

- **Images&nbsp;:** 1.1, 1.2, 1.3, 1.6, 1.7, 1.8, 1.9
- **Couleurs&nbsp;:** 3.1, 3.2, 3.3
- **Multimédia&nbsp;:** 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 4.11, 4.12, 4.13
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Consultation&nbsp;:** 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Arbre de décision - alternative d’image (WAI)](https://www.w3.org/WAI/tutorials/images/decision-tree/)

