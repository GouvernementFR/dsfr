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

Le composant **Citation** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

#### Interactions clavier

Aucune interaction au clavier spécifique au composant.

#### Règles d’accessibilité

- Le texte cité est contenu dans un élément `<blockquote>` inséré dans un bloc `<figure>` et les informations complémentaires (image, auteur, ouvrage… ) dans l'élément `<figcaption>`.
- L’ouvrage cité doit être placé dans une balise `<cite>` et ainsi apparaitre en italique.
- L’icône et l’image sont décoratives et ne doivent pas être restituées aux technologies d’assistance.

> [!NOTE]
> Ne pas confondre l’attribut `cite` qui permet d’ajouter l’URL de la source de la citation si celle-ci provient d’un autre site et l’élément `<cite>` à utiliser pour le titre de l’œuvre citée.
> L’attribut ou l’élément n’ont pas d’importance pour l’accessibilité.

#### Contrastes de couleur

Le composant Citation est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

NVDA et JAWS sont les seuls lecteurs d’écran à restituer correctement la sémantique de l’élément blockquote.

---

### Critères RGAA applicables

- Couleurs&nbsp;: 3.2
- Liens&nbsp;: 6.1, 6.2
- Éléments obligatoires&nbsp;: 8.9
- Structuration&nbsp;: 9.3, 9.4
- Présentation de l’information&nbsp;: 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- Navigation&nbsp;: 12.8

#### Références

- [Élément blockquote](https://html.spec.whatwg.org/#the-blockquote-element)
- [Élément cite](https://html.spec.whatwg.org/#the-cite-element)
- [https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

