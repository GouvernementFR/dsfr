---
title: Icône
shortTitle: Icône
description: Développer vos sites et applications en utilisant des composants prêts à l'emploi, accessibles et ergonomiques.
keywords: 
cover: ./_asset/cover/cover.png
excerpt: 
summary:
---

Les icônes fonctionnelles sont des symboles visuels qui accompagnent l’utilisateur dans ses actions et qui aident à sa compréhension de l’interface. 

## Utilisation des icônes

Nous mettons à votre disposition une sélection d’icônes issue de la librairie Remix Icons (libre de droits). Il s’agit, pour l’essentiel, des icônes utilisées par les composants du DSFR. Si l’icône recherchée est absente de notre sélection, vous pouvez compléter en recherchant d’abord dans [Remix Icons](https://remixicon.com/).

### Pour les designers

Les icônes sont disponibles dans la section Fondamentaux des librairies Sketch et Figma.

### Pour les développeurs

Les icônes placées dans **src/core/icon** sont exportées dans dist/icons. Les icônes sont utilisées directement en CSS via leur chemin relatif. Il est de ce fait possible d’utiliser des icônes en utilisant directement la classe CSS associée, reprenant le nom de l’icône SVG, précédée du préfixe fr-icon ou fr-fi (déprécié).  
Exemple : .fr-icon-error-fill, .fr-fi-account-fill.

> [!IMPORTANT]
> **A noter**
> Avec la version 1.5.0, les icônes ne sont plus chargées via une police d’icônes dans la css. De plus, les classes utilitaires d’icones ne sont plus dans core mais, à part, dans un nouveau dossier dist/utility. Il est donc nécéssaire d’importer le nouveau fichier d’icônes pour conserver leurs fonctionnement.

Les icônes sont maintenant rangées en catégories (system, business, map…), avec un fichier css pour chacune. Il est donc possible d’importer uniquement les catégories d’icônes désirées pour alléger la CSS.

Le chargement des icônes se fait directement via l’ajout du fichier CSS.

Il est possible d'utiliser plusieurs fichiers : dist/utility/icons/icons.css, dist/utility/utility.css ou plus spécifiquement par catégorie, ex: dist/utility/icons/icons-buildings/icon-buildings.css.

> [!IMPORTANT]
> **Pour les développeurs**
> L’utilisation des utility.css et icons.css peuvent remonter des erreurs dans webpack (Maximum call stack size exceeded). Afin de contourner le problème, utilisez les fichiers de catégories.

Il est ensuite possible d’utiliser les classes d’icônes correspondantes,  
**directement sur un composant** qui permet d’ajouter une icône, par exemple un bouton :  

```HTML
<button class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left"> 
  Label bouton MD
</button>
```

ou bien de manière autonome, en utilisant de préférence une balise span.

## Sélection d’icônes

Les icônes doivent être utilisées pour attirer l'attention sur les actions, les ensembles de contenus importants ou les zones clés, il faut éviter d’en utiliser trop sur une même page pour ne pas créer de confusion. Un concept doit être représenté par la même icône sur l'ensemble du site et de l'écosystème numérique de l'État.  
Les icônes ci-dessous sont pour la plupart issues de la librairie Remixicon.  
Les icônes classées dans dsfr sont soit des icônes créées spécialement, soit des icônes issues de Remixicon ayant été renommées afin de plus coller à l’usage. 

L’ancienne nomenclature des classes en fr-fi (remplacée par fr-icon) est dépréciée mais toujours fonctionnelle.

### Building


<div class="dsfr-doc-preview">
      <span class="fr-icon-ancient-gate-fill" aria-hidden="true"></span>
      <span class="fr-icon-ancient-gate-line" aria-hidden="true"></span>
      <span class="fr-icon-ancient-pavilion-fill" aria-hidden="true"></span>
      <span class="fr-icon-ancient-pavilion-line" aria-hidden="true"></span>
      <span class="fr-icon-bank-fill" aria-hidden="true"></span>
      <span class="fr-icon-bank-line" aria-hidden="true"></span>
      <span class="fr-icon-building-fill" aria-hidden="true"></span>
      <span class="fr-icon-building-line" aria-hidden="true"></span>
      <span class="fr-icon-community-fill" aria-hidden="true"></span>
      <span class="fr-icon-community-line" aria-hidden="true"></span>
      <span class="fr-icon-government-fill" aria-hidden="true"></span>
      <span class="fr-icon-government-line" aria-hidden="true"></span>
      <span class="fr-icon-home-4-fill" aria-hidden="true"></span>
      <span class="fr-icon-home-4-line" aria-hidden="true"></span>
      <span class="fr-icon-hospital-fill" aria-hidden="true"></span>
      <span class="fr-icon-hospital-line" aria-hidden="true"></span>
      <span class="fr-icon-hotel-fill" aria-hidden="true"></span>
      <span class="fr-icon-hotel-line" aria-hidden="true"></span>
      <span class="fr-icon-store-fill" aria-hidden="true"></span>
      <span class="fr-icon-store-line" aria-hidden="true"></span>
</div>

:::fr-accordion[### Extrait de code]{id='icons-building-accordien'}

```HTML 
<span class="fr-icon-ancient-gate-fill" aria-hidden="true"></span>
<span class="fr-icon-ancient-gate-line" aria-hidden="true"></span>

<span class="fr-icon-ancient-pavilion-fill" aria-hidden="true"></span>
<span class="fr-icon-ancient-pavilion-line" aria-hidden="true"></span>

<span class="fr-icon-bank-fill" aria-hidden="true"></span>
<span class="fr-icon-bank-line" aria-hidden="true"></span>

<span class="fr-icon-building-fill" aria-hidden="true"></span>
<span class="fr-icon-building-line" aria-hidden="true"></span>

<span class="fr-icon-community-fill" aria-hidden="true"></span>
<span class="fr-icon-community-line" aria-hidden="true"></span>

<span class="fr-icon-government-fill" aria-hidden="true"></span>
<span class="fr-icon-government-line" aria-hidden="true"></span>

<span class="fr-icon-home-4-fill" aria-hidden="true"></span>
<span class="fr-icon-home-4-line" aria-hidden="true"></span>

<span class="fr-icon-hospital-fill" aria-hidden="true"></span>
<span class="fr-icon-hospital-line" aria-hidden="true"></span>

<span class="fr-icon-hotel-fill" aria-hidden="true"></span>
<span class="fr-icon-hotel-line" aria-hidden="true"></span>

<span class="fr-icon-store-fill" aria-hidden="true"></span>
<span class="fr-icon-store-line" aria-hidden="true"></span>
```

:::

### Business

<div class="dsfr-doc-preview">
      <span class="fr-icon-archive-fill" aria-hidden="true"></span>
      <span class="fr-icon-archive-line" aria-hidden="true"></span>
      <span class="fr-icon-attachment-fill" aria-hidden="true"></span>
      <span class="fr-icon-attachment-line" aria-hidden="true"></span>
      <span class="fr-icon-award-fill" aria-hidden="true"></span>
      <span class="fr-icon-award-line" aria-hidden="true"></span>
      <span class="fr-icon-bar-chart-box-fill" aria-hidden="true"></span>
      <span class="fr-icon-bar-chart-box-line" aria-hidden="true"></span>
      <span class="fr-icon-bookmark-fill" aria-hidden="true"></span>
      <span class="fr-icon-bookmark-line" aria-hidden="true"></span>
      <span class="fr-icon-briefcase-fill" aria-hidden="true"></span>
      <span class="fr-icon-briefcase-line" aria-hidden="true"></span>
      <span class="fr-icon-calendar-2-fill" aria-hidden="true"></span>
      <span class="fr-icon-calendar-2-line" aria-hidden="true"></span>
      <span class="fr-icon-calendar-event-fill" aria-hidden="true"></span>
      <span class="fr-icon-calendar-event-line" aria-hidden="true"></span>
      <span class="fr-icon-calendar-fill" aria-hidden="true"></span>
      <span class="fr-icon-calendar-line" aria-hidden="true"></span>
      <span class="fr-icon-cloud-fill" aria-hidden="true"></span>
      <span class="fr-icon-cloud-line" aria-hidden="true"></span>
      <span class="fr-icon-copyright-fill" aria-hidden="true"></span>
      <span class="fr-icon-copyright-line" aria-hidden="true"></span>
      <span class="fr-icon-customer-service-fill" aria-hidden="true"></span>
      <span class="fr-icon-customer-service-line" aria-hidden="true"></span>
      <span class="fr-icon-flag-fill" aria-hidden="true"></span>
      <span class="fr-icon-flag-line" aria-hidden="true"></span>
      <span class="fr-icon-global-fill" aria-hidden="true"></span>
      <span class="fr-icon-global-line" aria-hidden="true"></span>
      <span class="fr-icon-line-chart-fill" aria-hidden="true"></span>
      <span class="fr-icon-line-chart-line" aria-hidden="true"></span>
      <span class="fr-icon-links-fill" aria-hidden="true"></span>
      <span class="fr-icon-links-line" aria-hidden="true"></span>
      <span class="fr-icon-mail-fill" aria-hidden="true"></span>
      <span class="fr-icon-mail-line" aria-hidden="true"></span>
      <span class="fr-icon-mail-open-fill" aria-hidden="true"></span>
      <span class="fr-icon-mail-open-line" aria-hidden="true"></span>
      <span class="fr-icon-medal-fill" aria-hidden="true"></span>
      <span class="fr-icon-medal-line" aria-hidden="true"></span>
      <span class="fr-icon-pie-chart-2-fill" aria-hidden="true"></span>
      <span class="fr-icon-pie-chart-2-line" aria-hidden="true"></span>
      <span class="fr-icon-pie-chart-box-fill" aria-hidden="true"></span>
      <span class="fr-icon-pie-chart-box-line" aria-hidden="true"></span>
      <span class="fr-icon-printer-fill" aria-hidden="true"></span>
      <span class="fr-icon-printer-line" aria-hidden="true"></span>
      <span class="fr-icon-profil-fill" aria-hidden="true"></span>
      <span class="fr-icon-profil-line" aria-hidden="true"></span>
      <span class="fr-icon-projector-2-fill" aria-hidden="true"></span>
      <span class="fr-icon-projector-2-line" aria-hidden="true"></span>
      <span class="fr-icon-send-plane-fill" aria-hidden="true"></span>
      <span class="fr-icon-send-plane-line" aria-hidden="true"></span>
      <span class="fr-icon-slideshow-fill" aria-hidden="true"></span>
      <span class="fr-icon-slideshow-line" aria-hidden="true"></span>
      <span class="fr-icon-window-fill" aria-hidden="true"></span>
      <span class="fr-icon-window-line" aria-hidden="true"></span>
  </div>

:::fr-accordion[### Extrait de code]{id='icons-business-accordion'}

```HTML 
<span class="fr-icon-archive-fill" aria-hidden="true"></span>
<span class="fr-icon-archive-line" aria-hidden="true"></span>

<span class="fr-icon-attachment-fill" aria-hidden="true"></span>
<span class="fr-icon-attachment-line" aria-hidden="true"></span>

<span class="fr-icon-award-fill" aria-hidden="true"></span>
<span class="fr-icon-award-line" aria-hidden="true"></span>

<span class="fr-icon-bar-chart-box-fill" aria-hidden="true"></span>
<span class="fr-icon-bar-chart-box-line" aria-hidden="true"></span>

<span class="fr-icon-bookmark-fill" aria-hidden="true"></span>
<span class="fr-icon-bookmark-line" aria-hidden="true"></span>

<span class="fr-icon-briefcase-fill" aria-hidden="true"></span>
<span class="fr-icon-briefcase-line" aria-hidden="true"></span>

<span class="fr-icon-calendar-2-fill" aria-hidden="true"></span>
<span class="fr-icon-calendar-2-line" aria-hidden="true"></span>

<span class="fr-icon-calendar-event-fill" aria-hidden="true"></span>
<span class="fr-icon-calendar-event-line" aria-hidden="true"></span>

<span class="fr-icon-calendar-fill" aria-hidden="true"></span>
<span class="fr-icon-calendar-line" aria-hidden="true"></span>

<span class="fr-icon-cloud-fill" aria-hidden="true"></span>
<span class="fr-icon-cloud-line" aria-hidden="true"></span>

<span class="fr-icon-copyright-fill" aria-hidden="true"></span>
<span class="fr-icon-copyright-line" aria-hidden="true"></span>

<span class="fr-icon-customer-service-fill" aria-hidden="true"></span>
<span class="fr-icon-customer-service-line" aria-hidden="true"></span>

<span class="fr-icon-flag-fill" aria-hidden="true"></span>
<span class="fr-icon-flag-line" aria-hidden="true"></span>

<span class="fr-icon-global-fill" aria-hidden="true"></span>
<span class="fr-icon-global-line" aria-hidden="true"></span>

<span class="fr-icon-line-chart-fill" aria-hidden="true"></span>
<span class="fr-icon-line-chart-line" aria-hidden="true"></span>

<span class="fr-icon-links-fill" aria-hidden="true"></span>
<span class="fr-icon-links-line" aria-hidden="true"></span>

<span class="fr-icon-mail-fill" aria-hidden="true"></span>
<span class="fr-icon-mail-line" aria-hidden="true"></span>

<span class="fr-icon-mail-open-fill" aria-hidden="true"></span>
<span class="fr-icon-mail-open-line" aria-hidden="true"></span>

<span class="fr-icon-medal-fill" aria-hidden="true"></span>
<span class="fr-icon-medal-line" aria-hidden="true"></span>

<span class="fr-icon-pie-chart-2-fill" aria-hidden="true"></span>
<span class="fr-icon-pie-chart-2-line" aria-hidden="true"></span>

<span class="fr-icon-pie-chart-box-fill" aria-hidden="true"></span>
<span class="fr-icon-pie-chart-box-line" aria-hidden="true"></span>

<span class="fr-icon-printer-fill" aria-hidden="true"></span>
<span class="fr-icon-printer-line" aria-hidden="true"></span>

<span class="fr-icon-profil-fill" aria-hidden="true"></span>
<span class="fr-icon-profil-line" aria-hidden="true"></span>

<span class="fr-icon-projector-2-fill" aria-hidden="true"></span>
<span class="fr-icon-projector-2-line" aria-hidden="true"></span>

<span class="fr-icon-send-plane-fill" aria-hidden="true"></span>
<span class="fr-icon-send-plane-line" aria-hidden="true"></span>

<span class="fr-icon-slideshow-fill" aria-hidden="true"></span>
<span class="fr-icon-slideshow-line" aria-hidden="true"></span>

<span class="fr-icon-window-fill" aria-hidden="true"></span>
<span class="fr-icon-window-line" aria-hidden="true"></span>
```

:::

### Communication

<div class="dsfr-doc-preview">
      <span class="fr-icon-chat-2-fill" aria-hidden="true"></span>
      <span class="fr-icon-chat-2-line" aria-hidden="true"></span>
      <span class="fr-icon-chat-3-fill" aria-hidden="true"></span>
      <span class="fr-icon-chat-3-line" aria-hidden="true"></span>
      <span class="fr-icon-chat-check-fill" aria-hidden="true"></span>
      <span class="fr-icon-chat-check-line" aria-hidden="true"></span>
      <span class="fr-icon-chat-delete-fill" aria-hidden="true"></span>
      <span class="fr-icon-chat-delete-line" aria-hidden="true"></span>
      <span class="fr-icon-chat-poll-fill" aria-hidden="true"></span>
      <span class="fr-icon-chat-poll-line" aria-hidden="true"></span>
      <span class="fr-icon-discuss-fill" aria-hidden="true"></span>
      <span class="fr-icon-discuss-line" aria-hidden="true"></span>
      <span class="fr-icon-feedback-fill" aria-hidden="true"></span>
      <span class="fr-icon-feedback-line" aria-hidden="true"></span>
      <span class="fr-icon-message-2-fill" aria-hidden="true"></span>
      <span class="fr-icon-message-2-line" aria-hidden="true"></span>
      <span class="fr-icon-question-answer-fill" aria-hidden="true"></span>
      <span class="fr-icon-question-answer-line" aria-hidden="true"></span>
      <span class="fr-icon-questionnaire-fill" aria-hidden="true"></span>
      <span class="fr-icon-questionnaire-line" aria-hidden="true"></span>
      <span class="fr-icon-video-chat-fill" aria-hidden="true"></span>
      <span class="fr-icon-video-chat-line" aria-hidden="true"></span>
  </div>


:::fr-accordion[### Extrait de code]{id='icons-communication-accordion'}

```HTML 
<span class="fr-icon-chat-2-fill" aria-hidden="true"></span>
<span class="fr-icon-chat-2-line" aria-hidden="true"></span>

<span class="fr-icon-chat-3-fill" aria-hidden="true"></span>
<span class="fr-icon-chat-3-line" aria-hidden="true"></span>

<span class="fr-icon-chat-check-fill" aria-hidden="true"></span>
<span class="fr-icon-chat-check-line" aria-hidden="true"></span>

<span class="fr-icon-chat-delete-fill" aria-hidden="true"></span>
<span class="fr-icon-chat-delete-line" aria-hidden="true"></span>

<span class="fr-icon-chat-poll-fill" aria-hidden="true"></span>
<span class="fr-icon-chat-poll-line" aria-hidden="true"></span>

<span class="fr-icon-discuss-fill" aria-hidden="true"></span>
<span class="fr-icon-discuss-line" aria-hidden="true"></span>

<span class="fr-icon-feedback-fill" aria-hidden="true"></span>
<span class="fr-icon-feedback-line" aria-hidden="true"></span>

<span class="fr-icon-message-2-fill" aria-hidden="true"></span>
<span class="fr-icon-message-2-line" aria-hidden="true"></span>

<span class="fr-icon-question-answer-fill" aria-hidden="true"></span>
<span class="fr-icon-question-answer-line" aria-hidden="true"></span>

<span class="fr-icon-questionnaire-fill" aria-hidden="true"></span>
<span class="fr-icon-questionnaire-line" aria-hidden="true"></span>

<span class="fr-icon-video-chat-fill" aria-hidden="true"></span>
<span class="fr-icon-video-chat-line" aria-hidden="true"></span>

```

:::



**REPRENDRE ICI**


### Design

<div data-snippet-id="DpGra0UdIp" class="snippet-wrapper fr-mb-3w fr-mt-8w">
  <div class="preview-wrapper fr-py-6v switch-enabled">
    <div class="preview">
      <span class="fr-icon-ball-pen-fill" aria-hidden="true"></span>
      <span class="fr-icon-ball-pen-line" aria-hidden="true"></span>
      <span class="fr-icon-brush-3-fill" aria-hidden="true"></span>
      <span class="fr-icon-brush-3-line" aria-hidden="true"></span>
      <span class="fr-icon-brush-fill" aria-hidden="true"></span>
      <span class="fr-icon-brush-line" aria-hidden="true"></span>
      <span class="fr-icon-contrast-fill" aria-hidden="true"></span>
      <span class="fr-icon-contrast-line" aria-hidden="true"></span>
      <span class="fr-icon-crop-fill" aria-hidden="true"></span>
      <span class="fr-icon-crop-line" aria-hidden="true"></span>
      <span class="fr-icon-drag-move-2-fill" aria-hidden="true"></span>
      <span class="fr-icon-drag-move-2-line" aria-hidden="true"></span>
      <span class="fr-icon-drop-fill" aria-hidden="true"></span>
      <span class="fr-icon-drop-line" aria-hidden="true"></span>
      <span class="fr-icon-edit-box-fill" aria-hidden="true"></span>
      <span class="fr-icon-edit-box-line" aria-hidden="true"></span>
      <span class="fr-icon-edit-fill" aria-hidden="true"></span>
      <span class="fr-icon-edit-line" aria-hidden="true"></span>
      <span class="fr-icon-ink-bottle-fill" aria-hidden="true"></span>
      <span class="fr-icon-ink-bottle-line" aria-hidden="true"></span>
      <span class="fr-icon-layout-grid-fill" aria-hidden="true"></span>
      <span class="fr-icon-layout-grid-line" aria-hidden="true"></span>
      <span class="fr-icon-mark-pen-fill" aria-hidden="true"></span>
      <span class="fr-icon-mark-pen-line" aria-hidden="true"></span>
      <span class="fr-icon-paint-brush-fill" aria-hidden="true"></span>
      <span class="fr-icon-paint-brush-line" aria-hidden="true"></span>
      <span class="fr-icon-paint-fill" aria-hidden="true"></span>
      <span class="fr-icon-paint-line" aria-hidden="true"></span>
      <span class="fr-icon-palette-fill" aria-hidden="true"></span>
      <span class="fr-icon-palette-line" aria-hidden="true"></span>
      <span class="fr-icon-pantone-fill" aria-hidden="true"></span>
      <span class="fr-icon-pantone-line" aria-hidden="true"></span>
      <span class="fr-icon-pen-nib-fill" aria-hidden="true"></span>
      <span class="fr-icon-pen-nib-line" aria-hidden="true"></span>
      <span class="fr-icon-pencil-fill" aria-hidden="true"></span>
      <span class="fr-icon-pencil-line" aria-hidden="true"></span>
      <span class="fr-icon-pencil-ruler-fill" aria-hidden="true"></span>
      <span class="fr-icon-pencil-ruler-line" aria-hidden="true"></span>
      <span class="fr-icon-sip-fill" aria-hidden="true"></span>
      <span class="fr-icon-sip-line" aria-hidden="true"></span>
      <span class="fr-icon-shapes-fill" aria-hidden="true"></span>
      <span class="fr-icon-shapes-line" aria-hidden="true"></span>
      <span class="fr-icon-table-fill" aria-hidden="true"></span>
      <span class="fr-icon-table-line" aria-hidden="true"></span>
      <span class="fr-icon-eraser-fill" aria-hidden="true"></span>
      <span class="fr-icon-eraser-line" aria-hidden="true"></span>
    </div>
  </div>
  <div class="fr-mb-12v">
    <section id="snippet-accordion-DpGra0UdIp" class="fr-accordion">
      <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="snippet-DpGra0UdIp">Extrait de code</button>
      </h3>
      <div class="fr-collapse" id="snippet-DpGra0UdIp">
        <pre>
          <code class="language-html">&lt;span class="fr-icon-ball-pen-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-ball-pen-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-brush-3-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-brush-3-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-brush-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-brush-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-contrast-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-contrast-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-crop-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-crop-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-drag-move-2-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-drag-move-2-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-drop-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-drop-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-edit-box-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-edit-box-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-edit-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-edit-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-ink-bottle-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-ink-bottle-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-layout-grid-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-layout-grid-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-mark-pen-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-mark-pen-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-paint-brush-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-paint-brush-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-paint-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-paint-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-palette-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-palette-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-pantone-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-pantone-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-pen-nib-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-pen-nib-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-pencil-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-pencil-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-pencil-ruler-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-pencil-ruler-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-sip-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-sip-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-shapes-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-shapes-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-table-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-table-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-eraser-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-eraser-line" aria-hidden="true">&lt;/span>
          </code>
        </pre>
      </div>
    </section>
  </div>
</div>

### Development

<div data-snippet-id="-E9kAxYEjA" class="snippet-wrapper fr-mb-3w fr-mt-8w">
  <div class="preview-wrapper fr-py-6v switch-enabled">
    <div class="preview">
      <span class="fr-icon-bug-fill" aria-hidden="true"></span>
      <span class="fr-icon-bug-line" aria-hidden="true"></span>
      <span class="fr-icon-code-box-fill" aria-hidden="true"></span>
      <span class="fr-icon-code-box-line" aria-hidden="true"></span>
      <span class="fr-icon-code-s-slash-line" aria-hidden="true"></span>
      <span class="fr-icon-cursor-fill" aria-hidden="true"></span>
      <span class="fr-icon-cursor-line" aria-hidden="true"></span>
      <span class="fr-icon-git-branch-fill" aria-hidden="true"></span>
      <span class="fr-icon-git-branch-line" aria-hidden="true"></span>
      <span class="fr-icon-git-commit-fill" aria-hidden="true"></span>
      <span class="fr-icon-git-commit-line" aria-hidden="true"></span>
      <span class="fr-icon-git-merge-fill" aria-hidden="true"></span>
      <span class="fr-icon-git-merge-line" aria-hidden="true"></span>
      <span class="fr-icon-git-pull-request-fill" aria-hidden="true"></span>
      <span class="fr-icon-git-pull-request-line" aria-hidden="true"></span>
      <span class="fr-icon-git-repository-commits-fill" aria-hidden="true"></span>
      <span class="fr-icon-git-repository-commits-line" aria-hidden="true"></span>
      <span class="fr-icon-git-repository-fill" aria-hidden="true"></span>
      <span class="fr-icon-git-repository-line" aria-hidden="true"></span>
      <span class="fr-icon-git-repository-private-fill" aria-hidden="true"></span>
      <span class="fr-icon-git-repository-private-line" aria-hidden="true"></span>
      <span class="fr-icon-terminal-box-fill" aria-hidden="true"></span>
      <span class="fr-icon-terminal-box-line" aria-hidden="true"></span>
      <span class="fr-icon-terminal-line" aria-hidden="true"></span>
      <span class="fr-icon-terminal-window-fill" aria-hidden="true"></span>
      <span class="fr-icon-terminal-window-line" aria-hidden="true"></span>
    </div>
  </div>
  <div class="fr-mb-12v">
    <section id="snippet-accordion--E9kAxYEjA" class="fr-accordion">
      <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="snippet--E9kAxYEjA">Extrait de code</button>
      </h3>
      <div class="fr-collapse" id="snippet--E9kAxYEjA">
        <pre>
          <code class="language-html">&lt;span class="fr-icon-bug-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-bug-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-code-box-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-code-box-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-code-s-slash-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-cursor-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-cursor-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-branch-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-branch-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-commit-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-commit-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-merge-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-merge-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-pull-request-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-pull-request-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-repository-commits-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-repository-commits-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-repository-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-repository-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-repository-private-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-git-repository-private-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-terminal-box-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-terminal-box-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-terminal-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-terminal-window-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-terminal-window-line" aria-hidden="true">&lt;/span>
          </code>
        </pre>
      </div>
    </section>
  </div>
</div>

### Device

<div data-snippet-id="SiHOc5Mu_K" class="snippet-wrapper fr-mb-3w fr-mt-8w">
  <div class="preview-wrapper fr-py-6v switch-enabled">
    <div class="preview">
      <span class="fr-icon-bluetooth-fill" aria-hidden="true"></span>
      <span class="fr-icon-bluetooth-line" aria-hidden="true"></span>
      <span class="fr-icon-computer-fill" aria-hidden="true"></span>
      <span class="fr-icon-computer-line" aria-hidden="true"></span>
      <span class="fr-icon-dashboard-3-fill" aria-hidden="true"></span>
      <span class="fr-icon-dashboard-3-line" aria-hidden="true"></span>
      <span class="fr-icon-database-fill" aria-hidden="true"></span>
      <span class="fr-icon-database-line" aria-hidden="true"></span>
      <span class="fr-icon-device-fill" aria-hidden="true"></span>
      <span class="fr-icon-device-line" aria-hidden="true"></span>
      <span class="fr-icon-hard-drive-2-fill" aria-hidden="true"></span>
      <span class="fr-icon-hard-drive-2-line" aria-hidden="true"></span>
      <span class="fr-icon-mac-fill" aria-hidden="true"></span>
      <span class="fr-icon-mac-line" aria-hidden="true"></span>
      <span class="fr-icon-phone-fill" aria-hidden="true"></span>
      <span class="fr-icon-phone-line" aria-hidden="true"></span>
      <span class="fr-icon-qr-code-fill" aria-hidden="true"></span>
      <span class="fr-icon-qr-code-line" aria-hidden="true"></span>
      <span class="fr-icon-rss-fill" aria-hidden="true"></span>
      <span class="fr-icon-rss-line" aria-hidden="true"></span>
      <span class="fr-icon-save-3-fill" aria-hidden="true"></span>
      <span class="fr-icon-save-3-line" aria-hidden="true"></span>
      <span class="fr-icon-save-fill" aria-hidden="true"></span>
      <span class="fr-icon-save-line" aria-hidden="true"></span>
      <span class="fr-icon-server-fill" aria-hidden="true"></span>
      <span class="fr-icon-server-line" aria-hidden="true"></span>
      <span class="fr-icon-smartphone-fill" aria-hidden="true"></span>
      <span class="fr-icon-smartphone-line" aria-hidden="true"></span>
      <span class="fr-icon-tablet-fill" aria-hidden="true"></span>
      <span class="fr-icon-tablet-line" aria-hidden="true"></span>
      <span class="fr-icon-tv-fill" aria-hidden="true"></span>
      <span class="fr-icon-tv-line" aria-hidden="true"></span>
      <span class="fr-icon-wifi-fill" aria-hidden="true"></span>
      <span class="fr-icon-wifi-line" aria-hidden="true"></span>
    </div>
  </div>
  <div class="fr-mb-12v">
    <section id="snippet-accordion-SiHOc5Mu_K" class="fr-accordion">
      <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="snippet-SiHOc5Mu_K">Extrait de code</button>
      </h3>
      <div class="fr-collapse" id="snippet-SiHOc5Mu_K">
        <pre>
          <code class="language-html">&lt;span class="fr-icon-bluetooth-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-bluetooth-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-computer-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-computer-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-dashboard-3-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-dashboard-3-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-database-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-database-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-device-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-device-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-hard-drive-2-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-hard-drive-2-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-mac-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-mac-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-phone-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-phone-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-qr-code-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-qr-code-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-rss-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-rss-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-save-3-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-save-3-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-save-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-save-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-server-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-server-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-smartphone-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-smartphone-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-tablet-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-tablet-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-tv-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-tv-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-wifi-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-wifi-line" aria-hidden="true">&lt;/span>
          </code>
        </pre>
      </div>
    </section>
  </div>
</div>

### Document

<div data-snippet-id="2HD3XRLIy4" class="snippet-wrapper fr-mb-3w fr-mt-8w">
  <div class="preview-wrapper fr-py-6v switch-enabled">
    <div class="preview">
      <span class="fr-icon-article-fill" aria-hidden="true"></span>
      <span class="fr-icon-article-line" aria-hidden="true"></span>
      <span class="fr-icon-book-2-fill" aria-hidden="true"></span>
      <span class="fr-icon-book-2-line" aria-hidden="true"></span>
      <span class="fr-icon-booklet-fill" aria-hidden="true"></span>
      <span class="fr-icon-booklet-line" aria-hidden="true"></span>
      <span class="fr-icon-clipboard-fill" aria-hidden="true"></span>
      <span class="fr-icon-clipboard-line" aria-hidden="true"></span>
      <span class="fr-icon-draft-fill" aria-hidden="true"></span>
      <span class="fr-icon-draft-line" aria-hidden="true"></span>
      <span class="fr-icon-file-add-fill" aria-hidden="true"></span>
      <span class="fr-icon-file-add-line" aria-hidden="true"></span>
      <span class="fr-icon-file-download-fill" aria-hidden="true"></span>
      <span class="fr-icon-file-download-line" aria-hidden="true"></span>
      <span class="fr-icon-file-fill" aria-hidden="true"></span>
      <span class="fr-icon-file-line" aria-hidden="true"></span>
      <span class="fr-icon-file-pdf-fill" aria-hidden="true"></span>
      <span class="fr-icon-file-pdf-line" aria-hidden="true"></span>
      <span class="fr-icon-file-text-fill" aria-hidden="true"></span>
      <span class="fr-icon-file-text-line" aria-hidden="true"></span>
      <span class="fr-icon-folder-2-fill" aria-hidden="true"></span>
      <span class="fr-icon-folder-2-line" aria-hidden="true"></span>
      <span class="fr-icon-newspaper-fill" aria-hidden="true"></span>
      <span class="fr-icon-newspaper-line" aria-hidden="true"></span>
      <span class="fr-icon-survey-fill" aria-hidden="true"></span>
      <span class="fr-icon-survey-line" aria-hidden="true"></span>
      <span class="fr-icon-todo-fill" aria-hidden="true"></span>
      <span class="fr-icon-todo-line" aria-hidden="true"></span>
    </div>
  </div>
  <div class="fr-mb-12v">
    <section id="snippet-accordion-2HD3XRLIy4" class="fr-accordion">
      <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="snippet-2HD3XRLIy4">Extrait de code</button>
      </h3>
      <div class="fr-collapse" id="snippet-2HD3XRLIy4">
        <pre>
          <code class="language-html">&lt;span class="fr-icon-article-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-article-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-book-2-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-book-2-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-booklet-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-booklet-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-clipboard-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-clipboard-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-draft-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-draft-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-file-add-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-file-add-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-file-download-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-file-download-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-file-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-file-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-file-pdf-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-file-pdf-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-file-text-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-file-text-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-folder-2-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-folder-2-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-newspaper-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-newspaper-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-survey-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-survey-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-todo-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-todo-line" aria-hidden="true">&lt;/span>
          </code>
        </pre>
      </div>
    </section>
  </div>
</div>

### Editor

#### Icônes créées par l'équipe DSFR

<div data-snippet-id="mheBUxt1Yt" class="snippet-wrapper fr-mb-3w fr-mt-8w">
  <div class="preview-wrapper fr-py-6v switch-enabled">
    <div class="preview">
      <span class="fr-icon-bold" aria-hidden="true"></span>
      <span class="fr-icon-highlight" aria-hidden="true"></span>
      <span class="fr-icon-quote-fill" aria-hidden="true"></span>
      <span class="fr-icon-quote-line" aria-hidden="true"></span>
    </div>
  </div>
  <div class="fr-mb-12v">
    <section id="snippet-accordion-mheBUxt1Yt" class="fr-accordion">
      <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="snippet-mheBUxt1Yt">Extrait de code</button>
      </h3>
      <div class="fr-collapse" id="snippet-mheBUxt1Yt">
        <pre>
          <code class="language-html">&lt;span class="fr-icon-bold" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-highlight" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-quote-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-quote-line" aria-hidden="true">&lt;/span>
          </code>
        </pre>
      </div>
    </section>
  </div>
</div>

#### Icônes proposées par RemixIcon

<div data-snippet-id="4Qfl40Czgr" class="snippet-wrapper fr-mb-3w fr-mt-8w">
  <div class="preview-wrapper fr-py-6v switch-enabled">
    <div class="preview">
      <span class="fr-icon-code-view" aria-hidden="true"></span>
      <span class="fr-icon-font-size" aria-hidden="true"></span>
      <span class="fr-icon-h-1" aria-hidden="true"></span>
      <span class="fr-icon-h-2" aria-hidden="true"></span>
      <span class="fr-icon-h-3" aria-hidden="true"></span>
      <span class="fr-icon-h-4" aria-hidden="true"></span>
      <span class="fr-icon-h-5" aria-hidden="true"></span>
      <span class="fr-icon-h-6" aria-hidden="true"></span>
      <span class="fr-icon-hashtag" aria-hidden="true"></span>
      <span class="fr-icon-italic" aria-hidden="true"></span>
      <span class="fr-icon-link-unlink" aria-hidden="true"></span>
      <span class="fr-icon-link" aria-hidden="true"></span>
      <span class="fr-icon-list-ordered" aria-hidden="true"></span>
      <span class="fr-icon-list-unordered" aria-hidden="true"></span>
      <span class="fr-icon-question-mark" aria-hidden="true"></span>
      <span class="fr-icon-separator" aria-hidden="true"></span>
      <span class="fr-icon-space" aria-hidden="true"></span>
      <span class="fr-icon-subscript" aria-hidden="true"></span>
      <span class="fr-icon-superscript" aria-hidden="true"></span>
      <span class="fr-icon-table-2" aria-hidden="true"></span>
      <span class="fr-icon-translate-2" aria-hidden="true"></span>
      <span class="fr-icon-strikethrough" aria-hidden="true"></span>
      <span class="fr-icon-code-block" aria-hidden="true"></span>
      <span class="fr-icon-align-center" aria-hidden="true"></span>
      <span class="fr-icon-align-justify" aria-hidden="true"></span>
      <span class="fr-icon-align-left" aria-hidden="true"></span>
      <span class="fr-icon-align-right" aria-hidden="true"></span>
      <span class="fr-icon-format-clear" aria-hidden="true"></span>
      <span class="fr-icon-font-color" aria-hidden="true"></span>
      <span class="fr-icon-indent-decrease" aria-hidden="true"></span>
      <span class="fr-icon-indent-increase" aria-hidden="true"></span>
      <span class="fr-icon-text-direction-r" aria-hidden="true"></span>
      <span class="fr-icon-underline" aria-hidden="true"></span>
    </div>
  </div>
  <div class="fr-mb-12v">
    <section id="snippet-accordion-4Qfl40Czgr" class="fr-accordion">
      <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="snippet-4Qfl40Czgr">Extrait de code</button>
      </h3>
      <div class="fr-collapse" id="snippet-4Qfl40Czgr">
        <pre>
          <code class="language-html">&lt;span class="fr-icon-code-view" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-font-size" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-h-1" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-h-2" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-h-3" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-h-4" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-h-5" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-h-6" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-hashtag" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-italic" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-link-unlink" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-link" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-list-ordered" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-list-unordered" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-question-mark" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-separator" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-space" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-subscript" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-superscript" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-table-2" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-translate-2" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-strikethrough" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-code-block" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-align-center" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-align-justify" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-align-left" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-align-right" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-format-clear" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-font-color" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-indent-decrease" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-indent-increase" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-text-direction-r" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-underline" aria-hidden="true">&lt;/span>
          </code>
        </pre>
      </div>
    </section>
  </div>
</div>

### Finance

<div data-snippet-id="yHpxIZV6JI" class="snippet-wrapper fr-mb-3w fr-mt-8w">
  <div class="preview-wrapper fr-py-6v switch-enabled">
    <div class="preview">
      <span class="fr-icon-bank-card-fill" aria-hidden="true"></span>
      <span class="fr-icon-bank-card-line" aria-hidden="true"></span>
      <span class="fr-icon-coin-fill" aria-hidden="true"></span>
      <span class="fr-icon-gift-fill" aria-hidden="true"></span>
      <span class="fr-icon-gift-line" aria-hidden="true"></span>
      <span class="fr-icon-money-euro-box-fill" aria-hidden="true"></span>
      <span class="fr-icon-money-euro-box-line" aria-hidden="true"></span>
      <span class="fr-icon-money-euro-circle-fill" aria-hidden="true"></span>
      <span class="fr-icon-money-euro-circle-line" aria-hidden="true"></span>
      <span class="fr-icon-secure-payment-fill" aria-hidden="true"></span>
      <span class="fr-icon-secure-payment-line" aria-hidden="true"></span>
      <span class="fr-icon-shopping-bag-fill" aria-hidden="true"></span>
      <span class="fr-icon-shopping-bag-line" aria-hidden="true"></span>
      <span class="fr-icon-shopping-cart-2-fill" aria-hidden="true"></span>
      <span class="fr-icon-shopping-cart-2-line" aria-hidden="true"></span>
      <span class="fr-icon-trophy-fill" aria-hidden="true"></span>
      <span class="fr-icon-trophy-line" aria-hidden="true"></span>
    </div>
  </div>
  <div class="fr-mb-12v">
    <section id="snippet-accordion-yHpxIZV6JI" class="fr-accordion">
      <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="snippet-yHpxIZV6JI">Extrait de code</button>
      </h3>
      <div class="fr-collapse" id="snippet-yHpxIZV6JI">
        <pre>
          <code class="language-html">&lt;span class="fr-icon-bank-card-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-bank-card-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-coin-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-gift-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-gift-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-money-euro-box-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-money-euro-box-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-money-euro-circle-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-money-euro-circle-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-secure-payment-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-secure-payment-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-shopping-bag-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-shopping-bag-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-shopping-cart-2-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-shopping-cart-2-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-trophy-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-trophy-line" aria-hidden="true">&lt;/span>
          </code>
        </pre>
      </div>
    </section>
  </div>
</div>

### Health

<div data-snippet-id="tFcbMuo7K9" class="snippet-wrapper fr-mb-3w fr-mt-8w">
  <div class="preview-wrapper fr-py-6v switch-enabled">
    <div class="preview">
      <span class="fr-icon-capsule-fill" aria-hidden="true"></span>
      <span class="fr-icon-capsule-line" aria-hidden="true"></span>
      <span class="fr-icon-dislike-fill" aria-hidden="true"></span>
      <span class="fr-icon-dislike-line" aria-hidden="true"></span>
      <span class="fr-icon-dossier-fill" aria-hidden="true"></span>
      <span class="fr-icon-dossier-line" aria-hidden="true"></span>
      <span class="fr-icon-first-aid-kit-fill" aria-hidden="true"></span>
      <span class="fr-icon-first-aid-kit-line" aria-hidden="true"></span>
      <span class="fr-icon-hand-sanitizer-fill" aria-hidden="true"></span>
      <span class="fr-icon-hand-sanitizer-line" aria-hidden="true"></span>
      <span class="fr-icon-health-book-fill" aria-hidden="true"></span>
      <span class="fr-icon-health-book-line" aria-hidden="true"></span>
      <span class="fr-icon-heart-fill" aria-hidden="true"></span>
      <span class="fr-icon-heart-line" aria-hidden="true"></span>
      <span class="fr-icon-heart-pulse-fill" aria-hidden="true"></span>
      <span class="fr-icon-heart-pulse-line" aria-hidden="true"></span>
      <span class="fr-icon-lungs-fill" aria-hidden="true"></span>
      <span class="fr-icon-lungs-line" aria-hidden="true"></span>
      <span class="fr-icon-medicine-bottle-fill" aria-hidden="true"></span>
      <span class="fr-icon-medicine-bottle-line" aria-hidden="true"></span>
      <span class="fr-icon-mental-health-fill" aria-hidden="true"></span>
      <span class="fr-icon-mental-health-line" aria-hidden="true"></span>
      <span class="fr-icon-microscope-fill" aria-hidden="true"></span>
      <span class="fr-icon-microscope-line" aria-hidden="true"></span>
      <span class="fr-icon-psychotherapy-fill" aria-hidden="true"></span>
      <span class="fr-icon-psychotherapy-line" aria-hidden="true"></span>
      <span class="fr-icon-pulse-line" aria-hidden="true"></span>
      <span class="fr-icon-stethoscope-fill" aria-hidden="true"></span>
      <span class="fr-icon-stethoscope-line" aria-hidden="true"></span>
      <span class="fr-icon-surgical-mask-fill" aria-hidden="true"></span>
      <span class="fr-icon-surgical-mask-line" aria-hidden="true"></span>
      <span class="fr-icon-syringe-fill" aria-hidden="true"></span>
      <span class="fr-icon-syringe-line" aria-hidden="true"></span>
      <span class="fr-icon-test-tube-fill" aria-hidden="true"></span>
      <span class="fr-icon-test-tube-line" aria-hidden="true"></span>
      <span class="fr-icon-thermometer-fill" aria-hidden="true"></span>
      <span class="fr-icon-thermometer-line" aria-hidden="true"></span>
      <span class="fr-icon-virus-fill" aria-hidden="true"></span>
      <span class="fr-icon-virus-line" aria-hidden="true"></span>
    </div>
  </div>
  <div class="fr-mb-12v">
    <section id="snippet-accordion-tFcbMuo7K9" class="fr-accordion">
      <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="snippet-tFcbMuo7K9">Extrait de code</button>
      </h3>
      <div class="fr-collapse" id="snippet-tFcbMuo7K9">
        <pre>
          <code class="language-html">&lt;span class="fr-icon-capsule-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-capsule-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-dislike-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-dislike-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-dossier-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-dossier-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-first-aid-kit-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-first-aid-kit-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-hand-sanitizer-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-hand-sanitizer-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-health-book-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-health-book-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-heart-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-heart-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-heart-pulse-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-heart-pulse-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-lungs-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-lungs-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-medicine-bottle-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-medicine-bottle-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-mental-health-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-mental-health-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-microscope-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-microscope-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-psychotherapy-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-psychotherapy-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-pulse-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-stethoscope-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-stethoscope-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-surgical-mask-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-surgical-mask-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-syringe-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-syringe-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-test-tube-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-test-tube-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-thermometer-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-thermometer-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-virus-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-virus-line" aria-hidden="true">&lt;/span>
          </code>
        </pre>
      </div>
    </section>
  </div>
</div>

### Logos

#### Logos créés par l'équipe DSFR

<div data-snippet-id="zB98iXnyUV" class="snippet-wrapper fr-mb-3w fr-mt-8w">
  <div class="preview-wrapper fr-py-6v switch-enabled">
    <div class="preview">
      <span class="fr-icon-dailymotion-fill" aria-hidden="true"></span>
      <span class="fr-icon-dailymotion-line" aria-hidden="true"></span>
      <span class="fr-icon-tiktok-fill" aria-hidden="true"></span>
      <span class="fr-icon-tiktok-line" aria-hidden="true"></span>
    </div>
  </div>
  <div class="fr-mb-12v">
    <section id="snippet-accordion-zB98iXnyUV" class="fr-accordion">
      <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="snippet-zB98iXnyUV">Extrait de code</button>
      </h3>
      <div class="fr-collapse" id="snippet-zB98iXnyUV">
        <pre>
          <code class="language-html">&lt;span class="fr-icon-dailymotion-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-dailymotion-line" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-tiktok-fill" aria-hidden="true">&lt;/span>
&lt;span class="fr-icon-tiktok-line" aria-hidden="true">&lt;/span>
          </code>
        </pre>
      </div>
    </section>
  </div>
</div>

#### Logos proposés par RemixIcon

<div data-snippet-id="Gx-0ygCcbN" class="snippet-wrapper fr-mb-3w fr-mt-8w">
  <div class="preview-wrapper fr-py-6v switch-enabled">
    <div class="preview">
      <span class="fr-icon-chrome-fill" aria-hidden="true"></span>
      <span class="fr-icon-chrome-line" aria-hidden="true"></span>
      <span class="fr-icon-edge-fill" aria-hidden="true"></span>
      <span class="fr-icon-edge-line" aria-hidden="true"></span>
      <span class="fr-icon-facebook-circle-fill" aria-hidden="true"></span>
      <span class="fr-icon-facebook-circle-line" aria-hidden="true"></span>
      <span class="fr-icon-firefox-fill" aria-hidden="true"></span>
      <span class="fr-icon-firefox-line" aria-hidden="true"></span>
      <span class="fr-icon-github-fill" aria-hidden="true"></span>
      <span class="fr-icon-github-line" aria-hidden="true"></span>
      <span class="fr-icon-google-fill" aria-hidden="true"></span>
      <span class="fr-icon