## Actions

Les actions correspondent aux impressions, aux évènements, ou aux interaction que l’on souhaite traquer. Le suivi de conversion couvre les besoins suivants :

* Suivi d'action immédiate comme un clic sur un bouton, un téléchargement de fichier, …

* Suivi d'action avec une entrée (début=in) et une sortie (validation=out).

* Captation de paramètres associés à cette action comme des textes renseignés ou des cases cochées.

* Possibilité de gérer des séquences de conversion - création d'un funnel étape par étape.
#### ActionName

Lorsqu’une action est émise, un actionName est envoyé à Eulérian.
Ce nom d’action est constitué du type d’action, de l’intitulé de l'élément à remonté, de sa hiérarchie, et de son id.

> **Note**
> ⚠️ **Un id est obligatoire sur tous les éléments traqués** (retrouvez les éléments du dsfr nécéssitant un id dans la colonne “element” du [tableau d'actions des composants du dsfr](actions/component-actions.md)).
>Il est nécessaire que l’id soit :
>  * unique : L’id doit être unique au site, ex:
>  * Deux boutons différents ne doivent pas avoir le même id, même sur des pages différentes
>  * Le header peut avoir le même id sur toute les pages s’il est identique
>  * pérenne : L’id doit être le même pour tous les utilisateurs et figé dans le temps.

exemple d’actionName : `(click)_titre_niveau_2_›_titre_niveau_3_›_label_de_l_element_[button-id-1]`

> **Note**
> Les espaces sont remplacé par des `_` [_ | low line (U+005F) @ Graphemica](https://graphemica.com/_)
> Les niveaux de hiérarchie sont séparé par des `›` [› | single right-pointing angle quotation mark (U+203A) @ Graphemica](https://graphemica.com/%E2%80%BA)
> Les caractères suivants `"'<>*$&~`|\?^~` étant restreints par Eulerian, ils sont remplacés par une équivalence en caractère fullwidth : [Graphemica | Halfwidth and Fullwidth Forms](https://graphemica.com/blocks/halfwidth-and-fullwidth-forms)


#### Taux de click

L’API analytics utilise des actions pour suivre les interactions de l’utilisateurs dans et en dehors des composants.

Cette fonctionnalité peut permettre de connaître le taux d’interaction d’un élément, à savoir le rapport entre le nombre de fois où il a été affiché et le nombre de fois où une interaction a eu lieu.

L’activation de cette fonctionnalité se fait d’abord dans le fichier de [configuration](installation/configuration.md) par la propriété `enableRating`

Après avoir été activée, elle sera automatiquement en place sur les composants qui supportent la fonctionnalité (voir dernière colonne dans le [tableau](actions/component-actions.md)).

> ***Note**
> Cette fonctionnalité est désactivée par défaut car elle peut entraîner un envoi de données très important (puisque chaque composant permettant de suivre le taux de click enverra la donnée d’affichage). Il est important de s’assurer de la pertinence de cette fonctionnalité.


- Analytics/Actions
  - [Actions d’interaction hors composant](actions/custom-actions.md)
  - [Actions sur les composants DSFR](actions/component-actions.md)