---
title: Accessibilité de la citation
---

## Citation

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

### Accessibilité

Le composant **Citation** est conçu pour être accessible et suit les critères du RGAA. Voici les points clés d’accessibilité à prendre en compte :

#### Interactions clavier

Aucune interaction clavier n'est liée au composant.
Lorsque qu'un composant interactif est utilisé à l'intérieur, comme un bouton ou un lien, les interactions clavier correspondent à celles de cet élément.

#### Règles d'accessibilité

- Le texte de la citation est contenu dans un élément `<blockquote>` inséré dans un bloc `<figure>` et les informations complémentaires (image, auteur, ouvrage... ) dans l'élément `<figcaption>`.
- Lorsque la citation reprend un text d’un autre site, ajouter l’url de celui-ci en attribut `cite` de l'élément `<blockquote>` afin d’indiquer au moteur de recherche la liaison. Ne pas ajouter l’attribut si aucune url de ressource n’est disponible.
- L’ouvrage cité doit être placé dans une balise `<cite>` et ainsi apparaitre en italique.
- L'icône est illustrative et n'a pas nécessité à être retranscrite sur lecteur d'écran.

#### Références

- [https://www.w3.org/WAI/WCAG22/quickref/](https://www.w3.org/WAI/WCAG22/quickref/)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
