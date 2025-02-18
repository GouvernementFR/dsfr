---
title: Code de la citation
---

# Citation

:::dsfr-doc-tab-navigation
- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)
:::

### HTML

#### Structure du composant

La citation permet de citer un texte dans une page éditoriale. La citation peut provenir d'un extrait d’un discours oral formulé par une tierce personne ou d’un texte écrit.

Sa structure est la suivante :

- Le **conteneur principal**, obligatoire, est un élément HTML `<figure>` défini par la classe `fr-quote` et contenant :
    - Le **Texte de la citation**, obligatoire, est un élément HTML `<blockquote>` disposant d'un attribut `cite` doit la valeur est la source de la citation.
    - Les **Informations complémentaires** de la citation, sont dans un élément HTML `<figcaption>` contenant :
        - Un premier paragraphe `<p>`, optionnel, afin de préciser quand nécessaire l’**Auteur de la citation**, défini par la classe `fr-quote__author`.
        - Une liste `<ul>`, optionnelle, afin de préciser l’**Origine du texte cité**, définie par la classe `fr-quote__source`.
            - Les éléments `<li>` de la liste des informations complémentaires peuvent contenir un élément `<cite>` ou un lien `<a>` afin de préciser l'ouvrage cité ou la source de la citation.
        - Une **Image illustrative** de la citation, optionnelle, dans un élément HTML `<div>` défini par la classe `fr-quote__image` et contenant un élément HTML `<img>` défini par la classe `fr-responsive-img`.

**Exemple de structure HTML**

```HTML
<figure class="fr-quote fr-quote--column">
    <blockquote cite="[À MODIFIER - https://lien-vers-la-source.fr]">
        <p>« Lorem [...] elit ut. »</p>
    </blockquote>
    <figcaption>
        <p class="fr-quote__author">Auteur</p>
        <ul class="fr-quote__source">
            <li>
                <cite>Ouvrage</cite>
            </li>
            <li>Détail 1</li>
            <li>Détail 2</li>
            <li>Détail 3</li>
            <li>
                <a href="">Détail 4</a>
            </li>
        </ul>
        <div class="fr-quote__image">
            <img class="fr-responsive-img" src="../../../example/img/placeholder.1x1.png" alt="" />
            <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
        </div>
    </figcaption>
</figure>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement, le style CSS de la citation et du core doit être importé dans la page. Les fichiers doivent être inclus dans le `<head>` avant le contenu de la page.

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/quote/quote.min.css" rel="stylesheet">
```

<small>NB: Il est aussi possible d'importer le CSS global du DSFR `dsfr.min.css`.</small>

Pour une compatibilité avec Internet Explorer 11, les fichiers legacy peuvent également être ajoutés :

```HTML
<link href="dist/core/core.legacy.min.css" rel="stylesheet">
<link href="dist/component/quote/quote.legacy.min.css" rel="stylesheet">
```

#### Variante de taille

La citation est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation.
Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément paragraphe `<p>` contenant la citation :

- En taille XL : par défaut.
- En taille LG : définie par la classe `fr-text--lg`.

**Exemple de variante de taille**

```HTML
<figure class="fr-quote">
    <blockquote cite="[À MODIFIER - https://lien-vers-la-source.fr]">
        <p class="fr-text--lg">« Lorem [...] elit ut. »</p>
    </blockquote>
    <figcaption>
        <!-- Contenu des détails de la citation -->
    </figcaption>
</figure>
```

#### Accentuation

La citation est accentuable, permettant le changement de la couleur de l'icône illustrative. Pour cela, ajouter la classe `fr-quote--NOM-COULEUR` au même niveau que la classe `fr-quote`.

**Exemple de variante accentuée**

```HTML
<figure class="fr-quote fr-quote--green-emeraude">
    <!-- Contenu de la citation -->
</figure>
```

### JavaScript

Le composant **Citation** ne nécessite pas de JavaScript spécifique pour fonctionner.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+quote+)

::dsfr-doc-changelog
