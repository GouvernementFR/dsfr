## Actions sur les composants DSFR {#dsfr-actions}

Les composants du DSFR envoient automatiquement des actions prédéfinies, aucune action supplémentaire n’est
nécessaire pour ces actions.

Ce tableau regroupe les différentes actions remontées à Eulérian pour chaque composant du DSFR :

|**Composant**|**Elément**|**Type** [BREAKPOINT]|**Valeur**|**Label**|**Taux** **de click**|
|:----|:----|:----|:----|:----|:----|
|accordion|fr-collapse|DISCLOSE| |Titre de l’accordéon ou intitulé du bouton|✅|
||fr-accordion__btn|CLICK| |Libellé du bouton| |
|alert|fr-alert|IMPRESSION| |Titre de l’alerte| |
|badge|fr-badge|IMPRESSION| |Libellé du badge| |
|breadcrumb|fr-collapse|IMPRESSION [MD] [LG] [XL]| |fil d’ariane| |
||fr-collapse|DISCLOSE [XS]  [SM]| |fil d’ariane| |
||fr-breadcrumb__button|CLICK [XS] [SM]| |Libellé du bouton| |
||fr-breadcrumb__link|CLICK|href<sup>1</sup>|Libellé du lien| |
|button|fr-btn|CLICK| |Libellé du bouton|✅|
|callout|fr-callout|IMPRESSION| |Titre de la mise en avant ou `Mise en avant`| |
|card|fr-card|IMPRESSION(sans lien)| |Titre de la carte| |
||fr-card__title a|CLICK|href<sup>1</sup>|Lien de la carte|✅|
|checkbox|fr-checkbox-group [type="checkbox"]|CHECK|value<sup>2</sup>|Libellé du champ sélectionné|✅|
||fr-checkbox-group [type="checkbox"]|UNCHECK|value<sup>2</sup>|Libellé du champ désélectionné|✅|
|connect|fr-connect|CLICK| |“FranceConnect”|✅|
||fr-connect--plus|CLICK| |“FranceConnect+”|✅|
||fr-connect + * a|CLICK| |“Qu'est-ce que FranceConnect ?”| |
|consent|fr-consent-banner|NULL| |“Gestionnaire de consentement”| |
|content|fr-content-media|IMPRESSION| |`aria-label` du block fr-content-media ou `alt` ou `aria-label` de l'image ou `title` ou `aria-label` de la video| |
|follow|fr-follow__newsletter fr-input-group fr-input,fr-follow__newsletter fr-input-group fr-btn|SUBSCRIBE|Valeur rentrée dans le champ|“Lettre d'information et Réseaux Sociaux”|✅|
|footer|fr-footer|IMPRESSION| |Pied de page| |
||fr-footer__content-link,fr-footer__bottom-link,fr-footer__top-link,fr-footer__partners-link|CLICK|href<sup>1</sup>|Libellé du lien| |
|header|fr-header|IMPRESSION| |En-tête| |
||fr-header__tools-links fr-btns-group fr-btn|CLICK [LG]</span> [XL]</span>|href<sup>1</sup>|Libellé du bouton d’accès rapide|
||fr-header__menu-links fr-btns-group fr-btn|CLICK  [XS]  [SM] [MD]</span>|href<sup>1</sup>|Libellé du bouton d’accès rapide| |
||fr-header__menu fr-modal,fr-header__search fr-modal|DISCLOSE [XS]  [SM] [MD]</span>| |menu rechercher| |
|highlight|fr-highlight|IMPRESSION| |Mise en exergue| |
|input|fr-input-group|IMPRESSION|value|Libéllé du label| |
|link|fr-link|CLICK|href<sup>1</sup>|Libellé du lien|✅|
| |fr-link[href]|INTERNAL si lien interne, EXTERNAL si lien externe (déterminé par le href)|href<sup>1</sup>|Libellé du lien|✅|
| |fr-link[download]|DOWNLOAD| |Libellé du lien de téléchargement|✅|
|modal|fr-modal|DISCLOSE| |Titre de la modale|✅|
|navigation|fr-nav__link|CLICK|href<sup>1</sup>|Libellé du lien| |
|notice|fr-notice|IMPRESSION| |Titre du bandeau d’information importante `fr-notice__title`| |
|pagination|fr-pagination__link|CLICK| |Libellé du lien de pagination| |
|quote|fr-quote|IMPRESSION| |Contenu de la citation (35 premiers caractères)| |
|radio|fr-radio-group [type="radio"]|CHECK| |legende du fieldset > Libellé du champ selectionné|✅|
|search|fr-search-bar fr-input|SEARCH|Valeur rentrée dans le champ|“barre de recherche”|✅|
||fr-search-bar fr-btn|SEARCH|Valeur rentrée dans le champ|“barre de recherche”|✅|
|select|fr-select-group|CHANGE|Libellé de l'option|Libellé du `fr_label`|✅|
|share|fr-share|IMPRESSION| |Libellé du titre `share__title` ou “Boutons de partage”|✅|
|sidemenu|fr-sidemenu__link|CLICK|href<sup>1</sup>|Arborescence du lien| |
|stepper|fr-stepper|IMPRESSION| |“Indicateur d'étapes”| |
|summary|fr-summary__link|CLICK|href<sup>1</sup>|Arborescence du lien| |
|tab|fr-tab|DISCLOSE| |Libellé du tab button|✅|
||[aria-controls=IdTab]|CLICK| |Libellé du tab button| |
|table|fr-table|IMPRESSION| |Caption du tableau| |
|tag|fr-tag|IMPRESSION| |Libellé du tag|
||a.fr-tag, button.fr-tag|CLICK| |Libellé du tag cliquable|✅|
||fr-tag--dismiss|DISMISS| |Libellé du tag supprimable|✅|
||fr-tag[aria-pressed='false']|PRESS| |Libellé du tag pressable|✅|
||fr-tag[aria-pressed='true']|RELEASE| |Libellé du tag pressable|✅|
|tile|fr-tile|IMPRESSION| |Titre de la tuile|
||fr-tile fr-tile__link|CLICK|href<sup>1</sup>|Titre de la tuile `fr-tile__title`|✅|
|toggle|fr-toggle [type="checkbox"]|CHECK| |Libellé du champ sélectionné|✅|
||fr-toggle [type="checkbox"]|UNCHECK| |Libellé du champ désélectionné|✅|
|transcription|fr-transcription fr-collapse|DISCLOSE| |Titre de la transcription `fr-transcription__title` ou libellé du bouton|✅|
|fr-transcription__btn|CLICK| |Libellé du bouton| |
|upload|fr-upload|CLICK||Libellé du `fr-label` ou "Ajout de fichier"|✅|
||fr-upload|CHANGE|Extension du fichier ajouté|Libellé du `fr-label` ou "Ajout de fichier"|✅|


<sup>1</sup> Attribut "href" de l'élément. Doit avoir une valeur pour être envoyé.
<sup>2</sup> Attribut "value" de l'élément. Doit avoir une valeur pour être envoyé.


Il reste possible d’ajouter plus d’actions à remonter, en utilisant les attributs utilitaires
`data-fr-analytics-{action}` sur un élément HTML d’un composant (voir : [Actions](component-actions.md)).
