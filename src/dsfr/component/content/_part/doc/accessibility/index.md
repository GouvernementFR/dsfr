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

Le composant **Contenu médias**, est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Contenu médias**.

#### Règles d'accessibilité

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
  - Les contrôle de lecture sont présents. Utiliser l'attribut `controls` pour les balises `<video>`.
  - La lecture ne commence pas sans le contrôle de l’utilisateur.
  - Le lecteur est utilisable au clavier selon un ordre logique.
  - Les vidéos (hors direct) sont sous-titrées.

#### Références

- [https://www.w3.org/WAI/tutorials/images/decision-tree/](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [https://www.w3.org/Translations/WCAG22-fr/#perceivable](https://www.w3.org/Translations/WCAG22-fr/#perceivable)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
