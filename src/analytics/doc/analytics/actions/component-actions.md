## Actions sur les composants DSFR {#dsfr-actions}

Les composants du DSFR envoient automatiquement des actions prédéfinies, aucune action supplémentaire n’est
nécessaire pour ces actions.

Ce tableau regroupe les différentes actions remontées à Eulérian pour chaque composant du DSFR :

|**Composant**|**Elément**|**Type** [BREAKPOINT]|**Valeur**|**Label**|**Taux** **de click**|
|:----|:----|:----|:----|:----|:----|
|accordion|fr-collapse|DISCLOSE|label<sup>3</sup>|Titre de l’accordéon ou intitulé du bouton|✅|
||fr-accordion__btn|CLICK|label<sup>3</sup>|Libellé du bouton| |
|alert|fr-alert|IMPRESSION|label<sup>3</sup>|Titre de l’alerte| |
|badge|fr-badge|IMPRESSION|label<sup>3</sup>|Libellé du badge| |
|breadcrumb|fr-collapse|IMPRESSION [MD] [LG] [XL]|label<sup>3</sup>|fil d’ariane| |
||fr-collapse|DISCLOSE [XS]  [SM]|label<sup>3</sup>|fil d’ariane| |
||fr-breadcrumb__button|CLICK [XS] [SM]|label<sup>3</sup>|Libellé du bouton| |
||fr-breadcrumb__link|CLICK|href<sup>1</sup>|Libellé du lien| |
|button|fr-btn|CLICK|label<sup>3</sup>|Libellé du bouton|✅|
|callout|fr-callout|IMPRESSION|label<sup>3</sup>|Titre de la mise en avant ou `Mise en avant`| |
|card|fr-card|IMPRESSION(sans lien)|label<sup>3</sup>|Titre de la carte| |
||fr-card__title a|CLICK|href<sup>1</sup>|Lien de la carte|✅|
|checkbox|fr-checkbox-group [type="checkbox"]|CHECK|value<sup>2</sup> \|\| label<sup>3</sup>|Libellé du champ sélectionné|✅|
||fr-checkbox-group [type="checkbox"]|UNCHECK|value<sup>2</sup> \|\| label<sup>3</sup>|Libellé du champ désélectionné|✅|
|connect|fr-connect|CLICK|label<sup>3</sup>|“FranceConnect”|✅|
||fr-connect--plus|CLICK|label<sup>3</sup>|“FranceConnect+”|✅|
||fr-connect + * a|CLICK|label<sup>3</sup>|“Qu'est-ce que FranceConnect ?”| |
|consent|fr-consent-banner|IMPRESSION|label<sup>3</sup>|“Gestionnaire de consentement”| |
|content|fr-content-media|IMPRESSION|label<sup>3</sup>|`aria-label` du block fr-content-media ou `alt` ou `aria-label` de l'image ou `title` ou `aria-label` de la video| |
|follow|fr-follow__newsletter fr-input-group fr-input,fr-follow__newsletter fr-input-group fr-btn|SUBSCRIBE|label<sup>3</sup>|“Lettre d'information et Réseaux Sociaux”|✅|
|footer|fr-footer|IMPRESSION|label<sup>3</sup>|Pied de page| |
||fr-footer__content-link,fr-footer__bottom-link,fr-footer__top-link,fr-footer__partners-link|CLICK|href<sup>1</sup>|Libellé du lien| |
|header|fr-header|IMPRESSION|label<sup>3</sup>|En-tête| |
||fr-header__tools-links fr-btns-group fr-btn|CLICK [LG]</span> [XL]</span>|href<sup>1</sup>|Libellé du bouton d’accès rapide|
||fr-header__menu-links fr-btns-group fr-btn|CLICK  [XS]  [SM] [MD]</span>|href<sup>1</sup>|Libellé du bouton d’accès rapide| |
||fr-header__menu fr-modal,fr-header__search fr-modal|DISCLOSE [XS]  [SM] [MD]</span>|label<sup>3</sup>|menu rechercher| |
|highlight|fr-highlight|IMPRESSION|label<sup>3</sup>|Mise en exergue| |
|input|fr-input-group|IMPRESSION|value<sup>2</sup>|Libéllé du label| |
|link|fr-link|CLICK|href<sup>1</sup>|Libellé du lien|✅|
| |fr-link[href]|INTERNAL si lien interne, EXTERNAL si lien externe (déterminé par le href)|href<sup>1</sup>|Libellé du lien|✅|
| |fr-link[download]|DOWNLOAD| |Libellé du lien de téléchargement|✅|
|modal|fr-modal|DISCLOSE|label<sup>3</sup>|Titre de la modale|✅|
|navigation|fr-nav__link|CLICK|href<sup>1</sup>|Libellé du lien| |
|notice|fr-notice|IMPRESSION|label<sup>3</sup>|Titre du bandeau d’information importante `fr-notice__title`| |
|pagination|fr-pagination__link|CLICK|href<sup>1</sup>|Libellé du lien de pagination| |
|quote|fr-quote|IMPRESSION|label<sup>3</sup>|Contenu de la citation (35 premiers caractères)| |
|radio|fr-radio-group [type="radio"]|CHECK|value<sup>2</sup> \|\| label<sup>3</sup>|legende du fieldset > Libellé du champ selectionné|✅|
|search|fr-search-bar fr-input|SEARCH|input value<sup>2</sup>|“barre de recherche”|✅|
||fr-search-bar fr-btn|SEARCH|input value<sup>2</sup>|“barre de recherche”|✅|
|select|fr-select-group|CHANGE|option label<sup>3</sup>|Libellé du `fr_label`|✅|
|share|fr-share|IMPRESSION|label<sup>3</sup>|Libellé du titre `share__title` ou “Boutons de partage”|✅|
|sidemenu|fr-sidemenu__link|CLICK|href<sup>1</sup>|Arborescence du lien| |
|stepper|fr-stepper|IMPRESSION|label<sup>3</sup> |“Indicateur d'étapes”||
|summary|fr-summary__link|CLICK|href<sup>1</sup>|Arborescence du lien| |
|tab|fr-tab|DISCLOSE|label<sup>3</sup>|Libellé du tab button|✅|
||[aria-controls=IdTab]|CLICK|label<sup>3</sup>|Libellé du tab button| |
|table|fr-table|IMPRESSION|label<sup>3</sup>|Caption du tableau| |
|tag|.fr-tag|IMPRESSION|label<sup>3</sup> |Libellé du tag |
||button.fr-tag|CLICK|label<sup>3</sup> |Libellé du tag cliquable|
||a.fr-tag|INTERNAL si lien interne, EXTERNAL si lien externe (déterminé par le href)|href<sup>1</sup>|Libellé du tag cliquable|✅|
||fr-tag--dismiss|DISMISS|label<sup>3</sup>|Libellé du tag supprimable|✅|
||fr-tag[aria-pressed='false']|PRESS|label<sup>3</sup>|Libellé du tag pressable|✅|
||fr-tag[aria-pressed='true']|RELEASE|label<sup>3</sup>|Libellé du tag pressable|✅|
|tile|fr-tile|IMPRESSION|label<sup>3</sup>|Titre de la tuile|
||fr-tile fr-tile__link|CLICK|href<sup>1</sup>|Titre de la tuile `fr-tile__title`|✅|
|toggle|fr-toggle [type="checkbox"]|CHECK|value<sup>2</sup> \|\| label<sup>3</sup>|Libellé du champ sélectionné|✅|
||fr-toggle [type="checkbox"]|UNCHECK|value<sup>2</sup> \|\| label<sup>3</sup>|Libellé du champ désélectionné|✅|
|transcription|fr-transcription fr-collapse|DISCLOSE|label<sup>3</sup>|Titre de la transcription `fr-transcription__title` ou libellé du bouton|✅|
||fr-transcription__btn|CLICK|label<sup>3</sup>|Libellé du bouton| |
|upload|fr-upload|CLICK|label<sup>3</sup>|Libellé du `fr-label` ou "Ajout de fichier"|✅|
||fr-upload|CHANGE|Extension du fichier ajouté|Libellé du `fr-label` ou "Ajout de fichier"|✅|


<sup>1</sup> Attribut "href" de l'élément. Doit avoir une valeur pour être envoyé.
<sup>2</sup> Attribut "value" de l'élément. Doit avoir une valeur pour être envoyé.
<sup>3</sup> Le label correspond au permier contenu texte de l'élément ou, à défaut de texte, à l'attribut `aria-label`, `alt`, ou `title`


Il reste possible d’ajouter plus d’actions à remonter, en utilisant les attributs utilitaires
`data-fr-analytics-{action}` sur un élément HTML d’un composant (voir : [Actions](component-actions.md)).
