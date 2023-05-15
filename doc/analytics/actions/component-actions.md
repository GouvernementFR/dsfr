## Actions sur les composants DSFR {#dsfr-actions}

Les composants du DSFR envoient automatiquement des actions prédéfinies, aucune action supplémentaire n’est
nécessaire pour ces actions.

Ce tableau regroupe les différentes actions remontées à Eulérian pour chaque composant du DSFR :

|**Composant**|**Elément**|**Type** [BREAKPOINT]|**Valeur**|**Label**|**Taux** **de click**|
|:----|:----|:----|:----|:----|:----|
|dsfr_accordion|fr-collapse|DISCLOSE| |Titre de l’accordéon ou intitulé du bouton|✅|
|fr-accordion__btn|CLICK| |Libellé du bouton| |
|dsfr_alert|fr-alert|IMPRESSION| |Titre de l’alerte| |
|dsfr_badge|fr-badge|IMPRESSION| |Libellé du badge| |
|dsfr_breadcrumb|fr-collapse|IMPRESSION [MD] [LG] [XL]| |fil d’ariane| |
|fr-collapse|DISCLOSE [XS]  [SM]| |fil d’ariane| |
|fr-breadcrumb__button|CLICK [XS] [SM]| |Libellé du bouton| |
|fr-breadcrumb__link|CLICK|href|Libellé du lien| |
|dsfr_button|fr-btn|CLICK| |Libellé du bouton|✅|
|dsfr_callout|fr-callout|IMPRESSION| |Titre de la mise en avant ou `Mise en avant`| |
|dsfr_card|fr-card|IMPRESSION(sans lien)| |Titre de la carte| |
|fr-card__title a|CLICK|href|Lien de la carte|✅|
|dsfr_checkbox|fr-checkbox-group [type="checkbox"]|CHECK|input_value|Libellé du champ sélectionné|✅|
|fr-checkbox-group [type="checkbox"]|UNCHECK|input_value|Libellé du champ désélectionné|✅|
|dsfr_connect|fr-connect|CLICK| |“FranceConnect”|✅|
|fr-connect--plus|CLICK| |“FranceConnect+”|✅|
|fr-connect + * a|CLICK| |“Qu'est-ce que FranceConnect ?”| |
|dsfr_consent|fr-consent-banner|NULL| |“Gestionnaire de consentement”| |
|dsfr_content|fr-content-media|IMPRESSION| |`aria-label` du block fr-content-media ou `alt` ou `aria-label` de l'image ou `title` ou `aria-label` de la video| |
|dsfr_follow|fr-follow__newsletter fr-input-group fr-input,fr-follow__newsletter fr-input-group fr-btn|SUBSCRIBE|“component_value”: input_value|“Lettre d'information et Réseaux Sociaux”|✅|
|dsfr_footer|fr-footer|IMPRESSION| |Pied de page| |
|fr-footer__content-link,fr-footer__bottom-link,fr-footer__top-link,fr-footer__partners-link|CLICK|href|Libellé du lien| |
|dsfr_header|fr-header|IMPRESSION| |En-tête| |
|fr-header__tools-links fr-btns-group fr-btn|CLICK [LG]</span> [XL]</span>|href|Libellé du bouton d’accès rapide| |
|fr-header__menu-links fr-btns-group fr-btn|CLICK  [XS]  [SM] [MD]</span>|href|Libellé du bouton d’accès rapide| |
|fr-header__menu fr-modal,fr-header__search fr-modal|DISCLOSE [XS]  [SM] [MD]</span>| |menurechercher| |
|dsfr_highlight|fr-highlight|IMPRESSION| |Mise en exergue| |
|dsfr_input|fr-input-group|IMPRESSION|input value|Libéllé du label| |
|dsfr_link|fr-link|CLICK|href|Libellé du lien|✅|
| |fr-link[href]|INTERNAL si lien interne, EXTERNAL si lien externe (déterminé par le href)|href|Libellé du lien|✅|
| |fr-link[download]|DOWNLOAD| |Libellé du lien de téléchargement|✅|
|dsfr_modal|fr-modal|DISCLOSE| |Titre de la modale|✅|
|dsfr_navigation|fr-nav__link|CLICK|href|Libellé du lien| |
|dsfr_notice|fr-notice|IMPRESSION| |Titre du bandeau d’information importante `fr-notice__title`| |
|dsfr_pagination|fr-pagination__link|CLICK| |Libellé du lien de pagination| |
|dsfr_quote|fr-quote|IMPRESSION| |Contenu de la citation (35 premiers caractères)| |
|dsfr_radio|fr-radio-group [type="radio"]|CHECK| |legende du fieldset > Libellé du champ selectionné|✅|
|dsfr_search|fr-search-bar fr-input|SEARCH|“component_value”: input_value|“barre de recherche”|✅|
|fr-search-bar fr-btn|SEARCH|“component_value”: input_value|“barre de recherche”|✅|
|dsfr_select|fr-select-group|CHANGE|“component_value”: select_value|Libellé du `fr_label`|✅|
|dsfr_share|fr-share|IMPRESSION| |Libellé du titre `share__title` ou “Boutons de partage”|✅|
|dsfr_sidemenu|fr-sidemenu__link|CLICK|href|Arborescence du lien| |
|dsfr_stepper|fr-stepper|IMPRESSION| |“Indicateur d'étapes”| |
|dsfr_summary|fr-summary__link|CLICK|href|Arborescence du lien| |
|dsfr_tab|fr-tab|DISCLOSE| |Libellé du tab button|✅|
|[aria-controls=IdTab]|CLICK| |Libellé du tab button| |
|dsfr_table|fr-table|IMPRESSION| |Caption du tableau| |
|dsfr_tag|fr-tag|IMPRESSION| |Libellé du tag| |
|a.fr-tag, button.fr-tag|CLICK| |Libellé du tag cliquable|✅|
|fr-tag--dismiss|DISMISS| |Libellé du tag supprimable|✅|
|fr-tag[aria-pressed='false']|PRESS| |Libellé du tag pressable|✅|
|fr-tag[aria-pressed='true']|RELEASE| |Libellé du tag pressable|✅|
|dsfr_tile|fr-tile|IMPRESSION| |titre de la tuile| |
|fr-tile fr-tile__link|CLICK|href|titre de la tuile `fr-tile__title`|✅|
|dsfr_toggle|fr-toggle [type="checkbox"]|CHECK| |Libellé du champ sélectionné|✅|
|fr-toggle [type="checkbox"]|UNCHECK| |Libellé du champ désélectionné|✅|
|dsfr_transcription|fr-transcription fr-collapse|DISCLOSE| |Titre de la transcription `fr-transcription__title` ou libellé du bouton|✅|
|fr-transcription__btn|CLICK| |Libellé du bouton| |
|dsfr_upload|fr-upload|IMPRESSION|“component_value”: input_value|Libellé du `fr-label` ou "Ajout de fichier"|✅|

Il reste possible d’ajouter plus d’actions à remonter, en utilisant les attributs utilitaires
`data-fr-analytics-{action}` sur un élément HTML d’un composant (voir : [Actions](component-actions.md)).
