## Actions sur les composants DSFR

Les composants du DSFR envoient automatiquement des actions prédéfinies, aucune action supplémentaire n’est nécessaire pour ces actions.

Le tableau, ci-dessous, regroupe les différentes actions remontées à Eulérian pour chaque composant du DSFR.
Vous trouverez pour chaque composant une colonne :

  * **Composant** : Nom du composant
  * **Element** : Selecteur CSS de l'élement HTML traqué
  * **Type** : Type d'action envoyé à Eulérian
  * **Breakpoints** : Si renseigné, l'action est définie uniquement sur ces [breakpoints] de largeur de page. Si vide, sur tous les [breakpoints].
  * **Valeur** : Valeur de l'action envoyée à Eulérian
  * **Label** : Label de l'action envoyée à Eulérian


|**Composant**|**Elément**|**Type**|**Breakpoints**|**Valeur**|**Label**|**Taux** **de click**|
|:----|:----|:----|:----|:----|:----|:----|
|accordion|.fr-collapse|DISCLOSE|||label<sup>1</sup>|Titre de l’accordéon ou libellé du bouton|✅|
||.fr-accordion__btn|CLICK||label<sup>1</sup>|Libellé du bouton| |
|alert|.fr-alert|IMPRESSION||label<sup>1</sup>|Titre de l’alerte| |
|badge|.fr-badge|IMPRESSION||label<sup>1</sup>|Libellé du badge| |
|breadcrumb|.fr-collapse|IMPRESSION| [MD] [LG] [XL]|label<sup>1</sup>|"fil d’ariane"| |
||.fr-collapse|DISCLOSE|| [XS]  [SM]|label<sup>1</sup>|"fil d’ariane"| |
||.fr-breadcrumb__button|CLICK| [XS] [SM]|label<sup>1</sup>|Libellé du bouton| |
||.fr-breadcrumb__link[href]|INTERNAL<sup>4</sup>||href<sup>3</sup>|Libellé du lien| |
|button|.fr-btn|CLICK||label<sup>1</sup>|Libellé du bouton|✅|
||a.fr-btn[href]|INTERNAL / EXTERNAL<sup>4</sup>||label<sup>1</sup>|Libellé du bouton|✅|
||a.fr-btn[download]|DOWNLOAD||label<sup>1</sup>|Libellé du bouton|✅|
|callout|.fr-callout|IMPRESSION||label<sup>1</sup>|Titre de la mise en avant ou `Mise en avant`| |
|card|.fr-card|IMPRESSION <br>(sans lien)||label<sup>1</sup>|Titre de la carte| |
||.fr-card__title a[href]|INTERNAL / EXTERNAL<sup>4</sup>||Lien de la carte|✅|
||.fr-card__title a[download]|DOWNLOAD||href<sup>3</sup>|Lien de la carte de téléchargement|✅|
|checkbox|.fr-checkbox-group [type="checkbox"]|CHECK||value<sup>2</sup>|Libellé du champ sélectionné|✅|
||.fr-checkbox-group [type="checkbox"]|UNCHECK||value<sup>2</sup>|Libellé du champ désélectionné|✅|
|connect|.fr-connect|CLICK||label<sup>1</sup>|“FranceConnect”|✅|
||.fr-connect--plus|CLICK||label<sup>1</sup>|“FranceConnect+”|✅|
||.fr-connect + * a|CLICK||label<sup>1</sup>|“Qu'est-ce que FranceConnect ?”| |
|consent|.fr-consent-banner|IMPRESSION||label<sup>1</sup>|“Gestionnaire de consentement”| |
|content|.fr-content-media|IMPRESSION||label<sup>1</sup>|`aria-label` du block .fr-content-media ou `alt` ou `aria-label` de l'image ou `title` ou `aria-label` de la video| |
|follow|.fr-follow__newsletter .fr-btn|SUBSCRIBE||label<sup>1</sup>|“Lettre d'information et Réseaux Sociaux”|✅|
|footer|.fr-footer|IMPRESSION||label<sup>1</sup>|Pied de page| |
||.fr-footer__content-link, <br>fr-footer__bottom-link, <br>fr-footer__top-link, <br>fr-footer__partners-link|INTERNAL / EXTERNAL<sup>4</sup>||href<sup>3</sup>|Libellé du lien| |
|header|.fr-header|IMPRESSION||label<sup>1</sup>|En-tête| |
||.fr-header__tools-links .fr-btn|CLICK| [LG]</span> [XL]</span>|href<sup>3</sup>|Libellé du bouton d’accès rapide|
||.fr-header__menu-links .fr-btn|CLICK|  [XS]  [SM] [MD]</span>|href<sup>3</sup>|Libellé du bouton d’accès rapide| |
||.fr-header__menu .fr-modal, <br>.fr-header__search .fr-modal|DISCLOSE|| [XS]  [SM] [MD]</span>|label<sup>1</sup>|menu rechercher| |
|highlight|.fr-highlight|IMPRESSION||label<sup>1</sup>|Mise en exergue| |
|input|.fr-input-group|IMPRESSION||label<sup>1</sup>|Libéllé du label| |
|link|.fr-link|CLICK||href<sup>3</sup>|Libellé du lien|✅|
| |.fr-link[href]|INTERNAL / EXTERNAL<sup>4</sup>||Libellé du lien|✅|
| |.fr-link[download]|DOWNLOAD||href<sup>3</sup>|Libellé du lien de téléchargement|✅|
|modal|.fr-modal|DISCLOSE|||label<sup>1</sup>|Titre de la modale|✅|
|navigation|.fr-nav__link|INTERNAL / EXTERNAL<sup>4</sup>||href<sup>3</sup>|Libellé du lien| |
|notice|.fr-notice|IMPRESSION||label<sup>1</sup>|Titre du bandeau d’information importante `.fr-notice__title`| |
|pagination|.fr-pagination__link|INTERNAL<sup>4</sup>||href<sup>3</sup>|Libellé du lien de pagination| |
|quote|.fr-quote|IMPRESSION||label<sup>1</sup>|Contenu de la citation (35 premiers caractères)| |
|radio|.fr-radio-group [type="radio"]|CHECK||value<sup>2</sup>|legende du fieldset > Libellé du champ selectionné|✅|
|search|.fr-search-bar .fr-btn|SEARCH||input value<sup>2</sup>|“barre de recherche”|✅|
|select|.fr-select-group|CHANGE||option label<sup>1</sup>|Libellé du `fr-label`|✅|
|share|.fr-share|IMPRESSION||label<sup>1</sup>|Libellé du titre `.fr-share__title` ou “Boutons de partage”|✅|
|sidemenu|.fr-sidemenu__link|INTERNAL / EXTERNAL<sup>4</sup>||href<sup>3</sup>|Arborescence du lien| |
|stepper|.fr-stepper|IMPRESSION||label<sup>1</sup> |"Indicateur d'étapes"||
|summary|.fr-summary__link|INTERNAL<sup>4</sup>||href<sup>3</sup>|Arborescence du lien| |
|tab|.fr-tabs|DISCLOSE|||label<sup>1</sup>|Libellé du tab button|✅|
||.fr-tabs__tab|CLICK||label<sup>1</sup>|Libellé du tab button| |
|table|.fr-table|IMPRESSION||label<sup>1</sup>|Caption du tableau| |
|tag|.fr-tag|IMPRESSION||label<sup>1</sup> |Libellé du tag |
||button.fr-tag|CLICK||label<sup>1</sup> |Libellé du tag cliquable|✅|
||a.fr-tag|INTERNAL / EXTERNAL<sup>4</sup>||Libellé du tag cliquable|✅|
||.fr-tag--dismiss|DISMISS||label<sup>1</sup>|Libellé du tag supprimable|✅|
||.fr-tag[aria-pressed='false']|PRESS||label<sup>1</sup>|Libellé du tag pressable|✅|
||.fr-tag[aria-pressed='true']|RELEASE||label<sup>1</sup>|Libellé du tag pressable|✅|
|tile|.fr-tile|IMPRESSION||label<sup>1</sup>|Titre de la tuile `fr-tile__title`|
||.fr-tile .fr-tile__link|INTERNAL / EXTERNAL<sup>4</sup>||Titre de la tuile|✅|
||.fr-tile .fr-tile__link[download]|DOWNLOAD||href<sup>3</sup>|Titre de la tuile|✅|
|toggle|.fr-toggle [type="checkbox"]|CHECK||value<sup>2</sup>|Libellé du champ sélectionné|✅|
||.fr-toggle [type="checkbox"]|UNCHECK||value<sup>2</sup>|Libellé du champ désélectionné|✅|
|transcription|.fr-transcription .fr-collapse|DISCLOSE|||label<sup>1</sup>|Titre de la transcription `fr-transcription__title` ou libellé du bouton|✅|
||.fr-transcription__btn|CLICK||label<sup>1</sup>|Libellé du bouton| |
|upload|.fr-upload|CHANGE||Extension du fichier ajouté|Libellé du `fr-label` ou "Ajout de fichier"|✅|


<sup>1</sup> Voir le label associé dans la colonne "label" du tableau

<sup>2</sup> Attribut `value` de l'élément. A défaut de valeur, renvoi le label<sup>1</sup>.

<sup>3</sup> Attribut `href` de l'élément. Doit avoir une valeur pour être envoyé.

<sup>4</sup> Type INTERNAL si lien interne (meme domaine), ou EXTERNAL si lien externe, déterminé par le `href`. (CLICK si pas de href)

* * *

> **Note**
> Il reste possible d’ajouter plus d’actions à remonter, en utilisant les attributs utilitaires `data-fr-analytics-{action}` sur un élément HTML d’un composant (voir : [Actions](component-actions.md)).
