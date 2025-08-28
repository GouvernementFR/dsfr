---
boost: 0
sitemap:
  noindex: true
title: Code du Bandeau d'information importante
shortTitle: Code du Bandeau d'information importante
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Bandeau d'information importante.
shortDescription: Afficher une alerte temporaire prioritaire.
keywords: bandeau, alerte, information importante, vigilance météo, composant éditorial, interface, UX, design system, accessibilité, urgence
cover: ../_asset/cover/cover.png
excerpt: Le bandeau d’information importante sert à attirer l’attention sur une information temporaire prioritaire comme une alerte météo. Il s’affiche sous la navigation principale sur l’ensemble des pages.
summary: Ce document présente les bonnes pratiques d’usage du bandeau d’information importante. Il décrit son rôle dans la diffusion d’informations urgentes ou prioritaires, précise les cas d’usage recommandés, notamment pour les alertes météo, et définit les règles de positionnement et de rédaction. Il insiste sur la nécessité de limiter son usage à des cas exceptionnels pour préserver son efficacité. Ce guide s’adresse aux équipes éditoriales et techniques souhaitant alerter efficacement les usagers dans un cadre cohérent et accessible.
mesh:
  - component/header
  - component/navigation
---

## Bandeau d'information importante

Le bandeau d’information importante est un élément éditorial permettant d’attirer l’attention des usagers sur une information importante et temporaire.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le **bandeau d’information importante** permet aux utilisateurs de voir ou d’accéder à une information importante et temporaire.

Sa structure comprend les éléments suivants :

- Un conteneur principal est un élément HTML `<div>` défini par les classe `fr-notice` et `fr-notice--info`, représentant le bandeau lui-même.
- Un conteneur est un élément HTML `<div>` défini par la classe `fr-container`.
- Le corps du bandeau est un élément HTML `<div>` défini par la classe `fr-notice__body`.
- Un paragraphe `<p>` qui contient le texte du message dont :
  - Le titre du bandeau d’information importante, obligatoire, dans un élément HTML `<span>` défini par la classe `fr-notice__title`.
  - Le texte du bandeau, optionnel, dans un élément HTML `<span>` défini par la classe `fr-notice__desc`.
  - Un lien, optionnel, dans un élément HTML `<a>` défini par la classe `fr-notice__link`.
- Un bouton de fermeture, optionnel, dans un élément HTML `<button>` de type `button` et défini par les classes `fr-btn--close` et `fr-btn` pour permettre à l'utilisateur de fermer le bandeau.
  - Il doit être lié à une fonction JavaScript pour supprimer le bandeau du DOM lorsque celui-ci est cliqué.

**Exemple de structure HTML**

```HTML
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau assez long</span>
                <span class="fr-notice__desc">Texte de description plutot long lorem ipsum sit consectetur adipiscing elit. Sed</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| notice     | Oui         |          |
| Button     | Non         | Uniquement sur la variation refermable |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/notice/notice.min.css" rel="stylesheet">
```

#### Variante avec bouton de fermeture

Le composant Bandeau d'information importante peut comporter un bouton de fermeture pour permettre à l'utilisateur de fermer le bandeau.

**Exemple de variante avec bouton de fermeture**

```HTML
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau</span>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

#### Variante avec avec icône personnalisée

Le composant Bandeau d'information importante comporte une icone par defaut qui peut être personnalisée avec l'utilisation d'une classe utilitaire d'icône `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/_part/doc/icon/index.md)) sur le conteneur du titre du bandeau.

**Exemple de variante avec icône personnalisée**

```HTML
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title fr-icon-virus-fill">Titre du bandeau</span>
            </p>
        </div>
    </div>
</div>
```

#### Déclinaisons de bandeaux génériques

Le composant Bandeau d'information importante propose 3 variations de bandeaux génériques utilisables en fonction du niveau de gravité de l'information.

L'icône peut être modifiée et seul le titre est obligatoire :

- **Bandeau d'information importante** (par défaut)
- **Bandeau d'avertissement**
- **Bandeau d'alerte**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--info`
- `fr-notice--warning`
- `fr-notice--alert`

**Exemple de structure HTML du bandeau d'information**

```HTML
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau d'information</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau d'avertissement**

```HTML
<div class="fr-notice fr-notice--warning">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau d'avertissement</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau d'alerte**

```HTML
<div class="fr-notice fr-notice--alert">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau d'alerte</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

#### Déclinaisons de bandeaux vigilance météo

Le composant Bandeau d'information importante propose 3 variations de bandeaux météo utilisables en fonction du niveau d'alerte météo.

L'icône peut être modifiée et seul le titre est obligatoire :

- **Vigilance météo orange**
- **Vigilance météo rouge**
- **Vigilance météo violette**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--weather-orange`
- `fr-notice--weather-red`
- `fr-notice--weather-purple`

**Exemple de structure HTML du bandeau Vigilance météo orange**

```HTML
<div class="fr-notice fr-notice--weather-orange">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Vigilance météo orange</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Vigilance météo rouge**

```HTML
<div class="fr-notice fr-notice--weather-red">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Vigilance météo rouge</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Vigilance météo violette**

```HTML
<div class="fr-notice fr-notice--weather-purple">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Vigilance météo violette</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

#### Déclinaisons de bandeaux d'alertes

Le composant Bandeau d'information importante propose 3 variations de bandeaux d'alertes utilisables en fonction du type d'alerte.

L'icône ne peut pas être modifiée et les intitulés officiels doivent être utilisés :

- **Alerte attentat**
- **Appel à témoins**
- **Alerte technologique**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--attack`
- `fr-notice--witness`
- `fr-notice--cyberattack`

**Exemple de structure HTML du bandeau Alerte attentat**

```HTML
<div class="fr-notice fr-notice--attack">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Attentat en cours</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Appel à témoins**

```HTML
<div class="fr-notice fr-notice--witness">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Appel à témoins</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Alerte technologique**

```HTML
<div class="fr-notice fr-notice--cyberattack">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Cyber-attaque</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

---

### JavaScript

Le composant **Bandeau d'information importante** nécessite un JavaScript minimal pour la gestion de la fermeture du bandeau. En cliquant sur le bouton de fermeture, le bandeau est retiré du DOM grâce à un événement JavaScript. Le DSFR ne gère pas cette fonctionnalité car trop dépendant de la technologie utilisée.

#### Fermeture du bandeau

Le bouton de fermeture doit être lié à une fonction JavaScript pour supprimer le bandeau du DOM. Voici un exemple de code en javascript vanilla pour gérer la suppression du bandeau :

```javascript
document.querySelector('.fr-notice__close').addEventListener('click', function() {
  this.closest('.fr-notice').remove();
});
```

Dans l'exemple HTML fourni, cette fonction est déjà intégrée directement dans l'attribut `onclick` du bouton de fermeture.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+notice+)

::dsfr-doc-changelog
