# Changelog du Système de design de l’État

Toutes les modifications notables apportées à ce projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
et ce projet respecte [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Pour plus d’informations : [Voir la documentation](https://www.systeme-de-design.gouv.fr/)


> ## DSFR v1

## v1.9

### [1.9.4](https://github.com/GouvernementFR/dsfr/compare/v1.10.2...1.9.4) - 23 Octobre 2023

#### 🐛 fix(analytics): réduction d&#39;envoi des données [(#807)](https://github.com/GouvernementFR/dsfr/pull/807)
- suppression du taux d&#39;interaction global
- ajout de l&#39;attribut data-fr-analytics-rating qui permet de mesurer le taux d&#39;interaction sur un élément particulier
- suppression de l&#39;impression des composants sans interactions
- limitation de l&#39;envoi de donnée à la première interaction
- bouton associé à l&#39;accordéon, l&#39;onglet et la transcription rendu muet
- recensement des composants de la page dans une nouvelle donnée de page `page_components`


#### 🐛 fix(analytics): réduction d&#39;envoi des données [(#806)](https://github.com/GouvernementFR/dsfr/pull/806)
- suppression du taux d&#39;interaction global
- ajout de l&#39;attribut data-fr-analytics-rating qui permet de mesurer le taux d&#39;interaction sur un élément particulier
- suppression de l&#39;impression des composants sans interactions
- limitation de l&#39;envoi de donnée à la première interaction
- bouton associé à l&#39;accordéon, l&#39;onglet et la transcription rendu muet
- recensement des composants de la page dans une nouvelle donnée de page `page_components`


#### 🐛 fix(radio): correctif couleur manquante [(#757)](https://github.com/GouvernementFR/dsfr/pull/757)
- Erreur dans le build du CSS suite au manque d&#39;une couleur


#### 🐛 fix(link): correction des liens de téléchargement sur firefox et des groupes de liens sur safari [(#755)](https://github.com/GouvernementFR/dsfr/pull/755)


#### ✨ feat(share, follow, utility): icone personalisée, et ajout twitter-x et threads [(#752)](https://github.com/GouvernementFR/dsfr/pull/752)
- ajoute la possibilité de mettre une icone de réseau social personalisée dans &#34;follow&#34;
- ajouts d&#39;exemples d&#39;icone personalisée dans &#34;share&#34; et &#34;follow&#34;
- ajouts des icones dans utility : 
  - twitter-x-fill
  - twitter-x-line
  - threads-fill
  - threads-line


#### 🐛 fix(tile): correction de l&#39;icone des tuiles avec lien externe [(#753)](https://github.com/GouvernementFR/dsfr/pull/753)


#### 🐛 fix(form): correctif barre état iOS [(#712)](https://github.com/GouvernementFR/dsfr/pull/712)
- Sur iOS, la barre d&#39;état d&#39;erreur ou validation est discontinue
- corrige le problème de manière générique


#### 🐛 fix(modal): retour de focus fermeture clavier [(#716)](https://github.com/GouvernementFR/dsfr/pull/716)
- Mise en place du retour du focus à la fermeture en pressant la touche ESC


#### 🐛 fix(form): correctif focus des radios riches dépréciés [(#715)](https://github.com/GouvernementFR/dsfr/pull/715)
- corrige le décalage du focus sur les boutons radio en version dépréciée


#### 🐛 fix(follow): orthographe message de confirmation [(#714)](https://github.com/GouvernementFR/dsfr/pull/714)


#### ✨ feat(core, password): boutons spéciaux input Safari [(#711)](https://github.com/GouvernementFR/dsfr/pull/711)
- Dans les champs de type password, sur safari Mac, il y a une icône apportant des outils supplémentaire qui se superpose à l’icône des signalant la hauteur de casse
- Déplacement des icônes natives pour qu&#39;elles ne se superposent pas
- Retrait de l&#39;icône capslock native, privilégiant la nôtre


#### 🐛 fix(core): stabilisation disclosure [(#713)](https://github.com/GouvernementFR/dsfr/pull/713)
- L&#39;ouverture des paramètres d&#39;affichage est par moment non réactive
- L&#39;élément est fermé avant même d&#39;être ouvert à cause de boucle de déclenchement
- Ajout de condition permettant de limiter les boucles


#### 📝 doc(tooltip): retrait exemple texte [(#710)](https://github.com/GouvernementFR/dsfr/pull/710)
- l&#39;utilisation d&#39;un tooltip sur un texte pose des problèmes de restitution
- cet usage est déconseillé
- retrait de l&#39;exemple


#### 🐛 fix(tile): correctif espacements version dépreciée [(#704)](https://github.com/GouvernementFR/dsfr/pull/704)
- L&#39;icône et le contenu se retrouvent superposés dans la version dépréciée, ce correctif rétablit l&#39;espacement nécessaire


#### 🐛 fix(tile, card): A11Y liens désactivés [(#709)](https://github.com/GouvernementFR/dsfr/pull/709)
- Ajout des attributs `role=&#34;link&#34;` et `aria-disabled=true` sur les version désactivées


#### 🐛 fix(transcription, content): correctif title et label bouton Agrandir [(#708)](https://github.com/GouvernementFR/dsfr/pull/708)
- Retrait du title sur le bouton agrandir
- Ajout label agrandir dans les exemples de content


#### ✨ feat(*): Ajout d&#39;un meta tag iOS [(#707)](https://github.com/GouvernementFR/dsfr/pull/707)
- Sur iOS, les numéros de téléphone sont automatiquement transformés en lien
- Entraîne un mauvais rendu dans le bloc fonctionnel de numéro de téléphone
- Correction par l&#39;ajout général du meta tag `&lt;meta name=&#34;format-detection&#34; content=&#34;telephone=no&#34;&gt;`


#### 🐛 fix(card, tile): correctif IE 11 [(#705)](https://github.com/GouvernementFR/dsfr/pull/705)
- correctif sur les tuiles et card sur la version legacy pour éviter les bugs de dépassement de texte et placement des icônes


#### 🐛  fix(toggle): retrait tap-highlight-color iOS [(#703)](https://github.com/GouvernementFR/dsfr/pull/703)
- Au clic sur le toggle sur iOS, l&#39;effet de highlight est présent
- Retrait de cet effet avec la propriété [-webkit-tap-highlight-color](https://developer.mozilla.org/fr/docs/Web/CSS/-webkit-tap-highlight-color)


#### 🐛 fix(link): correctif téléchargement multiligne [(#702)](https://github.com/GouvernementFR/dsfr/pull/702)
- les liens de téléchargement étaient limités à une seul ligne avec une ellipse sur le text dépassant
- correctif prenant en compte le retour à la ligne


#### 🐛 fix(download): graisse du titre des liens [(#701)](https://github.com/GouvernementFR/dsfr/pull/701)
- Passage des liens dépréciés en graisse regular


#### 🐛 fix(*): mise à jour des liens du readme [(#700)](https://github.com/GouvernementFR/dsfr/pull/700)
- Mise à jour des liens vers [https://www.systeme-de-design.gouv.fr](https://www.systeme-de-design.gouv.fr) dans le readme


#### 🐛 fix(modal): préviens décalage mobile [(#699)](https://github.com/GouvernementFR/dsfr/pull/699)
- l&#39;ajout d&#39;un padding à l&#39;ouverture permet de se substituer au décalage créé potentiellement par la disparition de la scrollbar en desktop
- En mobile, la modale occupe 100% de la largeur, ce padding créé un espacement incorrect
- ajout d&#39;une media query sur le breakpoint MD pour corriger le problème


#### 🐛 fix(header): correctif régression scroll horizontal [(#697)](https://github.com/GouvernementFR/dsfr/pull/697)
- La navigation du header créée un scroll horizontal dans la page
- l&#39;ajout d&#39;un max-width prévient le problème


#### 🐛 fix(password): correctif accessibilité des messages [(#694)](https://github.com/GouvernementFR/dsfr/pull/694)
- ajout sur les messages de validation et d&#39;erreur de la composition du mot de passe d&#39;un statut en after uniquement pour les lecteurs d&#39;écrans
- BREAKING CHANGE : il est nécessaire d&#39;ajouter les attributs `data-fr-valid`et `data-fr-error` avec les textes correspondants à l&#39;état (respectivement, en français, &#34;validé&#34; et &#34;en erreur&#34;


#### 🐛 fix(sidemenu): correction de la couleur des liens du sidemenu [(#698)](https://github.com/GouvernementFR/dsfr/pull/698)
- Effet de bord du passage du bouton mobile en bleu, l&#39;ensemble des boutons du sidemenu est passé en bleu.
- Ce correctif amène la spécificité nécessaire pour avoir les boutons et lien en `text default grey`


#### 🐛 fix(core): correctif sur KeyAction [(#696)](https://github.com/GouvernementFR/dsfr/pull/696)
- Corrige la régression sur l&#39;écoute des interactions avec le clavier dû à l&#39;évolution de la structure de la constante KeyCodes, non répercutée dans KeyAction


#### ✨ feat(colors): ajout des utilitaires de couleur flat [(#693)](https://github.com/GouvernementFR/dsfr/pull/693)
- Ajout des classes utilitaires pour le token background flat avec les variations de couleur d&#39;accent


#### 🐛 fix(tooltip,modal): interaction globale et focus iOS [(#691)](https://github.com/GouvernementFR/dsfr/pull/691)
- Correctif à la pression de la touche Escape sur la modale : si l&#39;élément actif (focus) est un élément de formulaire ou un média, la modale n&#39;est pas refermée pas pour permettre l&#39;interaction native de l&#39;élément actif
- Correctif iOS de la prise de focus au clic
- Fermeture des tooltips dés au clic sur n&#39;importe quel endroit
- Fermeture des tooltip à la pression sur la touche escape, où que soit le focus


#### 🐛 fix(tooltip) : a11y tooltip hover [(#686)](https://github.com/GouvernementFR/dsfr/pull/686)
- autorise le survol sur l&#39;information contextuelle
- ajoute un `tabindex=&#34;0&#34;` sur l&#39;example dans un texte
- arrondi la valeur de placements de la flèche verticale à 2 décimales
- retire le `aria-hidden=&#34;true&#34;` et ajoute `display=&#34;none&#34;`


#### 🐛 fix(transcription): a11y retour audit [(#684)](https://github.com/GouvernementFR/dsfr/pull/684)
- place le bouton d’agrandissement avant la modale et inverse les élements via css
- ajoute `aria-label=”Agrandir la transcription”` sur le bouton d’agrandissement
- remplace la balise dialog par une balise div
- système d&#39;activation / désactivation de la modale avec ajout / retrait dynamique de `role=&#34;dialog&#34;` à l&#39;ouverture / fermeture de la modale
- système de vérification et de correction pour l&#39;**accessible name** de la modale, avec warning explicatifs


#### ✨ feat(tile): ajouts de variations de tuiles [(#685)](https://github.com/GouvernementFR/dsfr/pull/685)
Ajouts des mêmes variations que la carte : 
- `.fr-tile--no-border` sans le bordure encadrant la tuile (mais la barre épaisse basse reste)
- `.fr-tile--shadow` avec élévation
- `.fr-tile--grey` en gris contrast
- `.fr-tile--no-background` couleur de fond transparente


#### 🐛 fix(card,tile): corrige erreur de syntaxe ejs + lint [(#687)](https://github.com/GouvernementFR/dsfr/pull/687)


#### 🐛 fix(card, tile): correctif lien externe et désactivé [(#683)](https://github.com/GouvernementFR/dsfr/pull/683)
- sur les exemples avec lien externe, ajout de title=&#34;[Intitulé] - nouvelle fenêtre&#34;
- sur les exemples avec liens désactivés, ajout de role=&#34;link&#34; et aria-disabled=&#34;true&#34;


#### 🐛 fix(card, tile): correctif token title [(#682)](https://github.com/GouvernementFR/dsfr/pull/682)
- le titre des cartes et tuiles doivent utiliser le token de couleur text-title-grey


#### ✨ feat(navigation, header, sidemenu): homogénéisation des espacements et indentation [(#678)](https://github.com/GouvernementFR/dsfr/pull/678)
- Uniformisation du menu latéral, navigation, et accordéon
  - ajout d&#39;un fond open-blue-france et du texte en blue-france sur les boutons d&#39;ouverture en état ouvert
  - ajout de marge pour indenter les sous menus
  - ajustement des espacements
- Ajustement de la navigation du header en mobile
- Ajustement de la taille max de la navigation dans le header en desktop


#### 🐛 fix(input): ajustement champs particuliers [(#679)](https://github.com/GouvernementFR/dsfr/pull/679)
- Ajuste la largeur des champs de code postal, année et nombre à des multiples de 8v


#### 🐛 fix(civility): correctif taille des boutons radio [(#676)](https://github.com/GouvernementFR/dsfr/pull/676)
- Corrige la taille des boutons radio du titre d&#39;appel en sm au lieu de md


#### 🐛 fix(follow): ajoute d&#39;exemple [(#675)](https://github.com/GouvernementFR/dsfr/pull/675)
- Ajout de l&#39;exemple de succès à l&#39;abonnement à la lettre d&#39;information


#### 🐛 fix(analytics): correctif page.date [(#681)](https://github.com/GouvernementFR/dsfr/pull/681)
- la collecte de donnée page.date génére une erreur -&gt; correctif
- mise en conformité avec le standard de date calendaire ISO 8601 [YYYY-MM-DD]


#### 🐛 fix(transcription): déplacement bouton modale [(#680)](https://github.com/GouvernementFR/dsfr/pull/680)
- Pour déterminer le bouton primaire qui sert à l’ouverture, un disclosure filtre parmi les boutons qui lui sont reliés et retire ceux qui se trouve à l’intérieur du contenu du disclosure (ce sont les boutons de fermeture)
- Actuellement, la transcription a le bouton d&#39;ouverture de modale à l&#39;intérieur de son contenu, ce qui bloque le fonctionnement, le bouton n&#39;étant pas reconnu comme primaire.
- Le correctif déplace le bouton après la dialog de la modal et restitue le fonctionnement de la transcription


#### 🐛 fix(form): met a jour les libelles des indications [(#674)](https://github.com/GouvernementFR/dsfr/pull/674)
- retrait de la capitalisation des mentions d&#39;indication


#### 🐛 fix(date): ajustement exemples [(#671)](https://github.com/GouvernementFR/dsfr/pull/671)
- mise en place de date cohérentes avec les erreurs affichées dans les exemples


#### 🐛 fix(form): correctif alignement icône des messages [(#670)](https://github.com/GouvernementFR/dsfr/pull/670)
- l&#39;icône à gauche des messages d&#39;erreur/succès sur plusieurs lignes doit être accrochée en haut et non pas centrée


#### 🐛 fix(password): retrait du bouton natif sur edge [(#669)](https://github.com/GouvernementFR/dsfr/pull/669)
- Sur edge une icône oeil apparaît au focus d&#39;un champ de type &#34;password&#34;
- Retrait de l&#39;icone native


#### 🐛 fix(name): a11y - gestion du focus [(#664)](https://github.com/GouvernementFR/dsfr/pull/664)
Ajoute dans la page d’exemple le déplacement du focus : 
- au click sur la checkbox de désactivation pour activer, le premier champ ou bouton prend le focus
- au click sur l’ajout d’un prénom, le champs ajouté prend le focus
- au click sur la suppression, le champ ou bouton suivant prend le focus


#### 🐛 fix(footer): retrait de CSS obsolète [(#668)](https://github.com/GouvernementFR/dsfr/pull/668)
- retrait de CSS résiduel de précédentes versions dans le footer-bottom__list


#### 🐛 fix(password): correctif états de la case à cocher [(#667)](https://github.com/GouvernementFR/dsfr/pull/667)
- force l&#39;état de la checkbox à l&#39;état par défaut, pour éviter qu&#39;elle ne passe en erreur/succès si elle hérite de cet état sur le composant.


#### 🐛 fix(tooltip): mise a jour exemple [(#666)](https://github.com/GouvernementFR/dsfr/pull/666)
- Dans l&#39;exemple &#34;Information contextuelle dans un tableau&#34;, remplacement de l&#39;information contextuelle par une infobulle (interaction au clic plutôt qu&#39;au survol)


#### 🐛 fix(input): fix groupe attributes &amp; multiple hint text [(#665)](https://github.com/GouvernementFR/dsfr/pull/665)
- Correction attribut en trop sur les input-group
- multiple texte additionnel sur le modèle de champs d&#39;adresse électronique
- Correction des textes additionnels


#### 🐛 fix(modal): suppression exemple des liens dans la zone d&#39;action [(#663)](https://github.com/GouvernementFR/dsfr/pull/663)
- Ce cas n&#39;est pas recommandé, la zone d&#39;action étant plutôt prévue pour des boutons


#### 🐛 fix(consent): correctif espacement et couleur [(#662)](https://github.com/GouvernementFR/dsfr/pull/662)
- Corrige description d&#39;une finalité de 3v à 2v en margin-bottom
- Homogénéité avec accordion, nav et sidemenu sur le bouton de la modale de consentement “voir plus de détails” :
   - enlever le soulignement
   - mettre en bleu le lien “voir plus de détail”


#### 🐛 fix(card, tile): ajout version sans liens, target blank, et mise à jour des exemples [(#657)](https://github.com/GouvernementFR/dsfr/pull/657)
- Ajout de version carte et tuile sans lien (en noir)
- Ajout de l&#39;icone target blank sur les cartes avec lien non élargi en target=&#34;_blank&#34;
- Ajout d&#39;exemples de carte et tuile de téléchargement avec remplissage automatique des détails (en Octet ou en Bytes)
- Ajout d&#39;exemple de carte et tuile de téléchargement avec fichier en langue étrangère
- Séparation des exemples de tuile de téléchargement
- Changement des pictogrammes des tuiles de téléchargement
- Ajustement de la grille dans les exemples de tuiles


#### 🐛 fix(pagination): correctif régression href des exemples [(#661)](https://github.com/GouvernementFR/dsfr/pull/661)
- Corrige la régression qui a supprimé les liens des éléments de pagination


#### 🐛 fix(sidemenu):  suppression variante et correctif style bouton mobile [(#660)](https://github.com/GouvernementFR/dsfr/pull/660)
- Suppression de la variante avec bordure
- Corrige le style du bouton mobile en action-high-blue-france (cohérence navigation/accordion)


#### 🐛 fix(company): retrait des pluriels [(#659)](https://github.com/GouvernementFR/dsfr/pull/659)
- Correction du langage dans la demande d&#39;un représentant moral, suppression des pluriels optionnels


#### 🐛 fix(link): corrige graisse lien de téléchargement [(#658)](https://github.com/GouvernementFR/dsfr/pull/658)
- retire le font-weight bold sur le lien de téléchargement


#### 🐛 fix(password): bug icône [(#648)](https://github.com/GouvernementFR/dsfr/pull/648)
- conditionne l&#39;ajout de la classe utile `fr-icon` à l&#39;utilisation d&#39;une string en paramètre `icon`


#### 🐛 feat(company): accessibilité lien externe [(#656)](https://github.com/GouvernementFR/dsfr/pull/656)
- corrige l&#39;accessibilité du lien en `target=&#34;_blank&#34;` par l&#39;ajout d&#39;un attribut `title`  :  &#34;Annuaire des entreprises – nouvelle fenêtre&#34;


#### 🐛 fix(unexpected): corrige groupe de bouton vide [(#655)](https://github.com/GouvernementFR/dsfr/pull/655)
- ajoute une condition sur l&#39;ajout du wrapper `.fr-btns-group` dans la template `ejs`


#### 🐛 fix(*): accessibilité aria-live [(#654)](https://github.com/GouvernementFR/dsfr/pull/654)
- remplace la valeur aria-live `assertive` par `polite`


#### 🐛 fix(account): accessibilité champs obligatoires [(#652)](https://github.com/GouvernementFR/dsfr/pull/652)
-  La mention de &#34;champs obligatoires&#34; doit être mise dans un élément `&lt;p&gt;` sur les pages de connexion et création de compte


#### 🐛 fix(pattern): dénomination des blocs fonctionnels [(#649)](https://github.com/GouvernementFR/dsfr/pull/649)
- Mise à jour et harmonisation de la dénomination des blocs fonctionnels


#### 🐛 fix(core): correctif padding négatif [(#650)](https://github.com/GouvernementFR/dsfr/pull/650)
- ajoute une condition pour éviter le padding négatif actuellement présent dans les classes utiles


#### ⬆️ chore(*): montée de version NodeJS 18 [(#644)](https://github.com/GouvernementFR/dsfr/pull/644)
- Monte la version minimale de NodeJS en 18.16.1


#### 🐛 fix(core): correctif bug proxy Toggle [(#646)](https://github.com/GouvernementFR/dsfr/pull/646)
- Dans la class Toggle, le proxy appelle la fonction toggle qui a été remplacée par la fonction générique handleClick : 
- Ce correctif restaure la fonction toggle et implémente son appel dans handleClick


#### 📝 docs(analytics): correction doc analytics &amp; readme [(#643)](https://github.com/GouvernementFR/dsfr/pull/643)
- mise à jour du readme
- corrections diverses documentation analytics


#### 🐛 fix(analytics): correctif hiérarchie [(#647)](https://github.com/GouvernementFR/dsfr/pull/647)
- l&#39;analyse de hiérarchie ignorait les headings présents dans un composant. 
- ce correctif permet de les inclure dans l&#39;analyse.


#### 🐛 fix(changelog): correctif inclusion des html [(#642)](https://github.com/GouvernementFR/dsfr/pull/642)
- inclusion des caractères spéciaux html pour que les snippets soient affichés correctement


#### ⬆️ chore(dependencies): met a jour les dépendances Node [(#638)](https://github.com/GouvernementFR/dsfr/pull/638)
- Mise à jour de sécurité


#### 🐛 fix(core): apparence du champ de recherche iOS [(#639)](https://github.com/GouvernementFR/dsfr/pull/639)
- En utilisant des librairies tierces (telles que normalize.css), le champ de recherche reprend son aspect natif arrondi en mobile IOS.
- Spécificité renforcée sur le sélecteur afin de conserver le appearance: none


#### 🐛 fix(header): duplication des id généralisée pour les quick access [(#637)](https://github.com/GouvernementFR/dsfr/pull/637)
- L&#39;ensemble des id présents dans les accès rapides du header doivent être suffixés par -mobile à la duplication


#### 🐛 fix(analytics): correctifs divers et ajouts de propriétés de page [(#612)](https://github.com/GouvernementFR/dsfr/pull/612)
- liens cassés de la documentation
- retrait du patch js des pages d&#39;exemple
- correctif du collect manuel au changement d&#39;url
- correctif du taux de clic désactivé sur certains composants
- ajustements pages d&#39;exemple
-  retrait des limitation de valeurs sur la propriété`user.profile` 
- ajouts de propriétés dans la configuration de page 
  - page_id
  - page_author
  - page_tags
  - page_date


#### 🐛 fix(search): hauteur du champ trop grande de 1px sur ios [(#632)](https://github.com/GouvernementFR/dsfr/pull/632)
Sur ios le champ dépasse de 1px par rapport au bouton.

-&gt; Correction du max-height


#### ✨ feat(select, input): ajout de la bordure en état erreur / succés / info [(#635)](https://github.com/GouvernementFR/dsfr/pull/635)
Actuellement la bordure gauche montrant l&#39;état d&#39;erreur/succès/info n&#39;est appliqué que dans le cas d&#39;un groupe de champ en erreur via les modificateur .fr-fieldset--error, .fr-fieldset--valid, .fr-fieldset--info

Afin d&#39;être ISO avec l&#39;UI nous rajoutons cet élément visuel sur : 
- les champs seuls (.fr-input-group) : 
  - `.fr-input-group--error`
  - `.fr-input-group--valid`
  - `.fr-input-group--info`
- les selects (.fr-select-group)
  - `.fr-select-group--error`
  - `.fr-select-group--valid`
  - `.fr-select-group--info`


#### 🐛 fix(tab): correction onglets imbriqués en legacy [(#628)](https://github.com/GouvernementFR/dsfr/pull/628)
- correction des marges sur les tabs imbriqués sur IE
- correction disclosure et disclosureGroup IE
- correction syntax error selecteur Collapse


#### 🐛 fix(example): retire les attributs file des &lt;link&gt; [(#631)](https://github.com/GouvernementFR/dsfr/pull/631)
- l&#39;attribut file n&#39;est pas un attribut possible pour les éléments &lt;link&gt;


#### 🐛 fix(link, button, tag, badge): retrait du z-index [(#630)](https://github.com/GouvernementFR/dsfr/pull/630)
- retrait du z-index: 1 qui pose problème dans une modale avec footer.


#### 🎉 feat(tooltip): ajout de la fonctionnalité Tooltip [(#486)](https://github.com/GouvernementFR/dsfr/pull/486)
Le composant `Infobulle` (ou `bulle d’aide`, `aide contextuelle`) permet d’afficher du contenu dans le contexte de navigation (non modal), à propos et lors de l’interaction avec un élément précis de l’interface. Il est caché par défaut, et s’affiche au survol ou au clic de l’élément associé, par-dessus le reste de la page.


#### 🐛 fix(share): correction copie url dans presse papier [(#629)](https://github.com/GouvernementFR/dsfr/pull/629)
- Gestion de la Promise retournée par `navigator.clipboard.writeText()`


#### ✨ feat(address): met a jour les message d&#39;aide des champs de formulaire [(#624)](https://github.com/GouvernementFR/dsfr/pull/624)
- ajout d&#39;indication et de description du format attendu


#### 🐛 fix(account): met a jour la hiérarchie html des modèles de page [(#618)](https://github.com/GouvernementFR/dsfr/pull/618)
- Mise en place d&#39;une hiérarchie sans saut de niveau de titre, plus cohérente
- Correctif typo sur la classe `fr-grid-row--gutters`


#### 🐛 fix(accordion, transcription, translate, sidemenu): Ajustement sur l&#39;état défaut et actif [(#564)](https://github.com/GouvernementFR/dsfr/pull/564)
Harmonisation avec la navigation sur Accordion, Sidemenu, Translate et Transcription :
- Passage icône et intitulé en action-high-blue-france
- Ajout background-open-blue-france sur le bouton lorsque l&#39;élément est ouvert
- Icône “arrow-down-s-ligne” (la même que sur navigation)
- Accordion, Translate : Retrait changement de graisse (normal -&gt; bold) à l&#39;ouverture et graisse constante en medium


#### 🐛 fix(tab, core): correctif tab legacy &amp; margin top des headings [(#621)](https://github.com/GouvernementFR/dsfr/pull/621)
- Corrige la taille de l&#39;icône
- Corrige l&#39;alignement du contenu du tab_panel
- Ajustement du padding de la tab__list
- Retire les margin-top des headings (h1 -&gt; h6)


#### 📝 doc(core): ajoute des exemples liens bruts et resets [(#613)](https://github.com/GouvernementFR/dsfr/pull/613)
Par défaut, le dsfr stylise les liens natifs, ce qui peut poser problème dans l&#39;utilisation de librairie tierce.
2 classes utilitaires sont mise à disposition pour contrecarrer le style fort du lien : 
- `.fr-raw-link` retire toute stylisation sur les liens natifs
- `.fr-reset-link` remet le soulignement natif du navigateur (`text-decoration: underline;`)
Des pages d&#39;exemples en illustrant l&#39;utilisation ont été ajoutées dans les pages d&#39;exemples des fondamentaux.


#### ✨ feat(radio): radio rich sans images &amp; pictogram à la place d&#39;img [(#540)](https://github.com/GouvernementFR/dsfr/pull/540)
Les radios riches doivent utiliser des pictogrammes et non des images :
- Retrait des images
- Ajout de pictogramme

Le snippet :
```html
&lt;div class=&#34;fr-radio-group fr-radio-rich&#34;&gt;
  &lt;input value=&#34;1&#34; type=&#34;radio&#34; id=&#34;radio-rich-1&#34; name=&#34;radio-rich&#34;&gt;
  &lt;label class=&#34;fr-label&#34; for=&#34;radio-rich-1&#34;&gt;
      Libellé bouton radio
  &lt;/label&gt;
  &lt;div class=&#34;fr-radio-rich__img&#34;&gt;
      &lt;img src=&#34;../../../example/img/placeholder.1x1.png&#34; alt=&#34;[À MODIFIER - vide ou texte alternatif de l’image]&#34; /&gt;
  &lt;/div&gt;
&lt;/div&gt;
```
DEVIENT : 
```html
&lt;div class=&#34;fr-radio-group fr-radio-rich&#34;&gt;
  &lt;input value=&#34;1&#34; type=&#34;radio&#34; id=&#34;radio-rich-1&#34; name=&#34;radio-rich&#34;&gt;
  &lt;label class=&#34;fr-label&#34; for=&#34;radio-rich-1&#34;&gt;
      Libellé bouton radio
  &lt;/label&gt;
  &lt;div class=&#34;fr-radio-rich__pictogram&#34;&gt;
      &lt;svg aria-hidden=&#34;true&#34; class=&#34;fr-artwork&#34; viewBox=&#34;0 0 80 80&#34; width=&#34;80px&#34; height=&#34;80px&#34;&gt;
          &lt;use class=&#34;fr-artwork-decorative&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative&#34;&gt;&lt;/use&gt;
          &lt;use class=&#34;fr-artwork-minor&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor&#34;&gt;&lt;/use&gt;
          &lt;use class=&#34;fr-artwork-major&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major&#34;&gt;&lt;/use&gt;
      &lt;/svg&gt;
  &lt;/div&gt;
&lt;/div&gt;
```
Remplacer buildings/city-hall par la catégorie et le nom du pictogramme désiré

BREAKING CHANGE : `fr-radio-rich__img` devient `fr-radio-rich__pictogram`


#### 📝 doc(core): corrige les liens vers les pages de documentation des fondamentaux [(#623)](https://github.com/GouvernementFR/dsfr/pull/623)
- Mise à jour des liens vers les fondamentaux sur le site de documentation


#### ⬆️ chore(dependencies): met a jour les dépendances Node [(#622)](https://github.com/GouvernementFR/dsfr/pull/622)
- Mise à jour de sécurité


#### ✨ feat(card): image des cartes de téléchargement format a4 [(#620)](https://github.com/GouvernementFR/dsfr/pull/620)
- Ajout d&#39;une image de placeholder au format a4 (21x29.7)


#### 🐛 fix(core): corrige liens pour retro-compat sur firefox [(#615)](https://github.com/GouvernementFR/dsfr/pull/615)
- La fonction css max(), mise en place pour corriger le bug d&#39;affichage d&#39;un soulignement d&#39;une épaisseur inférieure à 1px, est supportée à partir de la version 78 de firefox, ce qui est insuffisant.
- Le précédent bug est maintenant corrigé avec un léger épaississement du trait sur firefox (0.25px)


#### 🐛 fix(header, navigation): focus des nav-items mobile &amp; ajustements [(#609)](https://github.com/GouvernementFR/dsfr/pull/609)
- L&#39;outline de focus est maintenant entièrement visible sur les liens des sous menu en mobile
- Ajustement de l&#39;alignement du bouton fermé en desktop
- Retrait du mega-menu__leader vide dans les examples


#### ✨ feat(pagination): évolution taille et écart des boutons [(#549)](https://github.com/GouvernementFR/dsfr/pull/549)
Harmonisation de l&#39;espacement entre les boutons de pagination :
- L&#39;espacement passe à 16px entre tous les boutons
- Les boutons passent en taille SM


#### 🐛 fix(core, modal): décalage scrollbar à l&#39;ouverture/fermeture modale &amp; fix scroll behavior [(#519)](https://github.com/GouvernementFR/dsfr/pull/519)
Lorsque la page est scrollable, un décalage se produit à l&#39;ouverture d&#39;une modal (la page étant figé elle n&#39;est plus scrollable).

Une marge est donc appliquée à l&#39;ouverture de la modale pour simuler la barre de scroll et ainsi éviter le mouvement du contenu en arrière plan.


#### ♻️ refactor(radio,checkbox,toggle): passage input en bleu et refactorisation [(#502)](https://github.com/GouvernementFR/dsfr/pull/502)
Uniformisation des champs à cocher toggle/radio/checkbox

toggle:
- Ajout des variants toggle error/valid
- Retrait du css sur input `appearance:none` 
- bordure en background svg
- le toggle est maintenant placé dans un fieldset

radio:
- Le contour devient bleu
- retrait du fond blanc du radio bouton (transparence)
- input déssiné en background image

radio-rich: 
- L&#39;outline au focus englobe tout le radio-riche, plus l&#39;input

checkbox:
- Le contour devient bleu
- correction changement d&#39;état au mouse-down (:active), maintenant au mouse up

Form: 
- les hint-text des champs désactivés passent en couleur `--text-disabled-grey`


#### ✨ feat(core): ouverture des disclosures à partir des ancres, état disabled désactive disclosure [(#532)](https://github.com/GouvernementFR/dsfr/pull/532)
- Correctif de l&#39;état disabled sur les boutons associés à une modale, un onglet ou un accordéon. La fonctionnalité d&#39;ouverture est désactivée si les boutons primaires sont désactivés.
- Ajout de la fonctionnalité d&#39;ouverture d&#39;une modale, d&#39;un onglet ou d&#39;un accordéon si la partie ancre de l&#39;url correspond à l&#39;id de l&#39;élément -&gt; les liens d&#39;évitements peuvent ouvrir le menu et la recherche en mobile.


#### 🐛 fix(tab): écoute des événements de clavier déplacé sur la liste d&#39;onglets [(#531)](https://github.com/GouvernementFR/dsfr/pull/531)
L&#39;écoute des événements de clavier se faisant sur le composant, il est impossible d&#39;interagir avec des éléments de formulaire dans le contenu de l&#39;onglet -&gt; l&#39;écoute est déplacée au niveau de la liste des onglets, ce qui en exclut le contenu


#### ✨ feat(name): ajout bouton de suppression de prénom [(#493)](https://github.com/GouvernementFR/dsfr/pull/493)
Dans le modèle de de bloc nom/prénom, un bouton permet d&#39;ajouter des champs de saisie pour les prénoms secondaires -&gt; ajout d&#39;un bouton permettant de supprimer ces champs ajoutés


#### ✨ feat(tile): Ajout icône flèche, état désactivé, icone lien externe, tuile de téléchargement [(#602)](https://github.com/GouvernementFR/dsfr/pull/602)
Les tuiles peuvent maintenant être de type téléchargement (comme les cartes)
  - Les tuiles de téléchargement sont par défaut horizontales
  - Le détail de la tuile de téléchargement est obligatoire et il peut être rempli automatiquement en fonction du fichier à télécharger en plaçant à l&#39;attribut &#34;data-fr-assess-file&#34; sur le lien (comme pour carte)

Les tuiles ont maintenant par défaut une icone.
  - arrow-right (par défaut)
  - external-link (en target=&#34;_blank&#34;)
  - download (avec la classe fr-tile--download)

Les tuiles désactivées (a sans href) ont à présent:
  - la bordure bottom en grise
  - l&#39;icone et le titre en gris
  
Ajout des classes &#34;fr-tile--vertical@md&#34; et  &#34;fr-tile--vertical@lg&#34; pour passer une tuile horizontale, ou download, en vertical à partir des breakpoints md et lg


#### 🎉 feat(tile): évolution des tuiles [(#534)](https://github.com/GouvernementFR/dsfr/pull/534)
**Evolution majeur du composant Tuile :**
Nous souhaitons revoir la structure html de la tuile pour étendre les variations de contenu (avec détails, badge, etc), et uniformiser avec les comportements de la Carte (card).

Changements apportés :
- Ajout d&#39;un niveau d&#39;encapsulation dans la structure html
  - Ajout d&#39;un wrapper &#34;fr-tile__content&#34; pour englober le contenu
  - Ajout d&#39;un wrapper &#34;fr-tile__header&#34; pour englober l&#39;image
- L&#39;image des tuiles est remplacée par un pictogramme
  - La classe &#34;fr-tile__img&#34; devient &#34;fr-tile__pictogram&#34; 
  - Son contenu est maintenant un svg &#34;fr-artwork&#34;
- Ajout de la possibilité de placer un badge, un tag, un texte de détail, dans le contenu de la tuile
- Ajout d&#39;une taille de tuile SM : &#34;fr-tile--sm&#34;

**⚠️ Breaking Change**
Le snippet de code d&#39;une tuile : 
```html
&lt;div class=&#34;fr-tile fr-enlarge-link&#34;&gt;
    &lt;div class=&#34;fr-tile__body&#34;&gt;
        &lt;h4 class=&#34;fr-tile__title&#34;&gt;
            &lt;a class=&#34;fr-tile__link&#34; href&gt;Titre M bold&lt;/a&gt;
        &lt;/h4&gt;
        &lt;p class=&#34;fr-tile__desc&#34;&gt;Texte M regular 2 lignes max&lt;/p&gt;
   &lt;/div&gt;
   &lt;div class=&#34;fr-tile__img&#34;&gt;
       &lt;img class=&#34;fr-responsive-img&#34; src=&#34;../../../example/img/placeholder.1x1.png&#34; alt=&#34;&#34; /&gt;
       &lt;!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance --&gt;
    &lt;/div&gt;
&lt;/div&gt;
```

Devient : 
```html
&lt;div class=&#34;fr-tile fr-enlarge-link&#34; id=&#34;tile-6584&#34;&gt;
    &lt;div class=&#34;fr-tile__body&#34;&gt;
        &lt;div class=&#34;fr-tile__content&#34;&gt;
            &lt;h3 class=&#34;fr-tile__title&#34;&gt;
                &lt;a href=&#34;#&#34;&gt;Intitulé de la tuile&lt;/a&gt;
            &lt;/h3&gt;
            &lt;p class=&#34;fr-tile__desc&#34;&gt;Lorem [...] elit ut.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&#34;fr-tile__header&#34;&gt;
        &lt;div class=&#34;fr-tile__pictogram&#34;&gt;
            &lt;svg aria-hidden=&#34;true&#34; class=&#34;fr-artwork&#34; viewBox=&#34;0 0 80 80&#34; width=&#34;80px&#34; height=&#34;80px&#34;&gt;
                &lt;use class=&#34;fr-artwork-decorative&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative&#34;&gt;&lt;/use&gt;
                &lt;use class=&#34;fr-artwork-minor&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor&#34;&gt;&lt;/use&gt;
                &lt;use class=&#34;fr-artwork-major&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major&#34;&gt;&lt;/use&gt;
            &lt;/svg&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
```


#### 🚚 refactor(download): séparation du download en carte et lien [(#487)](https://github.com/GouvernementFR/dsfr/pull/487)
Pour mutualiser les comportements de la carte et du lien au composant download, celui-ci doit devenir une variante de ces composants et non pas l&#39;inverse.

Retrait du composant : téléchargement de fichier - Download -&gt; déprécié
Ajout de la variante de carte : fr-card--download 
Ajout de la variante de lien : fr-link--download 

Le lien de téléchargement : 
```html
&lt;div class=&#34;fr-download&#34;&gt;
    &lt;h3&gt;
        &lt;a href=&#34;[À MODIFIER - /example/img/image.jpg]&#34; download class=&#34;fr-download__link&#34;&gt;Télécharger le document lorem ipsum sit dolores amet
            &lt;span class=&#34;fr-download__detail&#34;&gt;
                JPG – 61,88 ko
            &lt;/span&gt;
        &lt;/a&gt;
    &lt;/h3&gt;
&lt;/div&gt;
```
DEVIENT : 
```html
&lt;a class=&#34;fr-link fr-link--download&#34; download href=&#34;[À MODIFIER - example/img/image.jpg]&#34;&gt;
    Télécharger le document lorem ipsum sit dolores amet &lt;span class=&#34;fr-link__detail&#34;&gt;JPG – 61,88 ko&lt;/span&gt;
&lt;/a&gt;
```

et la carte de téléchargement : 
```html
&lt;div class=&#34;fr-download fr-enlarge-link fr-download--card&#34;&gt;
    &lt;h3&gt;
        &lt;a href=&#34;[À MODIFIER - example/img/image.jpg]&#34; download class=&#34;fr-download__link&#34;&gt;Télécharger le document lorem ipsum sit dolores amet
            &lt;span class=&#34;fr-download__detail&#34;&gt;
                JPG – 61,88 ko
            &lt;/span&gt;
        &lt;/a&gt;
    &lt;/h3&gt;
    &lt;p class=&#34;fr-download__desc&#34;&gt;Texte de description&lt;&lt;/p&gt;
&lt;/div&gt;
```
DEVIENT : 
```html
&lt;div class=&#34;fr-card fr-enlarge-link fr-card--download&#34;&gt;
    &lt;div class=&#34;fr-card__body&#34;&gt;
        &lt;div class=&#34;fr-card__content&#34;&gt;
            &lt;h3 class=&#34;fr-card__title&#34;&gt;
                &lt;a download href=&#34;[À MODIFIER - example/img/image.jpg]&#34;&gt;
                    Télécharger le document lorem ipsum sit dolores amet
                &lt;/a&gt;
            &lt;/h3&gt;
            &lt;p class=&#34;fr-card__desc&#34;&gt;Texte de description&lt;/p&gt;
            &lt;div class=&#34;fr-card__end&#34;&gt;
                &lt;p class=&#34;fr-card__detail&#34;&gt;JPG – 61,88 ko&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
```

BREAKING CHANGE : Remplacer le composant fr-download par la variante de link fr-link--download et remplacer le composant fr-download--card par une carte fr-card--download



### [v1.9.3](https://github.com/GouvernementFR/dsfr/compare/v1.9.2...v1.9.3) - 17 Mai 2023

#### 🐛 fix(breadcrumb): ajoute une page exemple alternative [(#600)](https://github.com/GouvernementFR/dsfr/pull/600)
- étiquette d&#39;élément span rendue possible sur l&#39;élément courant du fil d&#39;ariane
- ajout d&#39;une page d&#39;exemple avec boutons


#### 📝 doc(analytics): doc analytics en markdown [(#599)](https://github.com/GouvernementFR/dsfr/pull/599)
Transformation du pdf de la doc analytics en fichiers markdown


#### 🐛 fix(analytics): correctifs divers [(#596)](https://github.com/GouvernementFR/dsfr/pull/596)
- Ajout de la récupération automatique de la pagination (voir [page.md](https://github.com/GouvernementFR/dsfr/blob/main/src/analytics/doc/analytics/collector/page.md))
- Correction action dynamique vide
- Correction envoi data
- Correction erreur querySelector dans la hiérarchie
- Revue de la profondeur de la hiérarchie
- Correction de la version standalone
- Collection désynchronisée pour attendre l’initialisation
- Correction du cycle de vie des instances et garbage collection
- Ajout d’une fonctionnalité d’Opt-in/out (voir [opt.md](https://github.com/GouvernementFR/dsfr/blob/main/src/analytics/doc/analytics/cmp/opt.md))
- Ajout de la valeur dans le label au submit (button, input)
- Ajustements component_value sur chaque composant


#### 🐛 fix(core): La valeur no-wrap n’existe pas dans la spécification CSS [(#594)](https://github.com/GouvernementFR/dsfr/pull/594)
Il y a un `-` en trop.

Voir https://www.w3.org/TR/css-flexbox-1/#flex-wrap-property

partial-fix de #593


#### 🐛 fix(button, theme): retrait propriété css :where [(#597)](https://github.com/GouvernementFR/dsfr/pull/597)
La propriété CSS :where est encore trop récente (chrome 88).

-&gt; retrait de cette propriété


#### 🐛 fix(modal): correction ombre modal footer [(#572)](https://github.com/GouvernementFR/dsfr/pull/572)
L&#39;ombre du footer de la modal scrollable est mal placée et trop forte.

- Remplacement de l&#39;ombre par une bordure d&#39;1px en defaut-grey en haut du footer
- remplacement du token de background-color du footer par background-lifted-grey
- ajout d&#39;un texte plus long dans l&#39;exemple modal + footer pour faire apparaître le scroll


#### 🐛 fix(password, account): correction capslock safari [(#503)](https://github.com/GouvernementFR/dsfr/pull/503)
- Correction erreur js sur le champ password au clic sur le trousseau (safari)
- Retrait icone native capslock safari
- Ajout attribut `autocapitalize=&#39;off&#39;` sur les champs password et email pour désactiver la majuscule au début (mobile)
- Ajout attribut `autocorrect` sur les champs password et email pour désactiver la correction orthographique


#### ✨ feat(*): nouvelle version interne changelog [(#590)](https://github.com/GouvernementFR/dsfr/pull/590)
Outil en ligne de commande pour générer un journal des modifications CHANGELOG.md à partir des balises git et de l&#39;historique des commits.

Commande à exécuter à la racine du projet, git log est exécuté en arrière-plan afin d&#39;analyser l&#39;historique des commits, en lançant :
```
yarn changelog
```

Pour ajouter les commits d&#39;une nouvelle version en préparation, renseigner le futur tag : 
```
yarn changelog -t X.X.X
```

La gestion de l&#39;affichage du changelog est présente dans le template EJS `tools/classes/changelog/changelog.ejs`



### [v1.9.2](https://github.com/GouvernementFR/dsfr/compare/v1.9.1...v1.9.2) - 18 Avril 2023

#### 🐛 fix(analytics): correctifs analytics &amp; page test spa [(#587)](https://github.com/GouvernementFR/dsfr/pull/587)
* Amélioration de la qualité des labels envoyés à Eulerian
  * Maximum 50 caractères, couper avec […] au delà
  * Récupère uniquement le premier texte
  * Retrait des espaces en trop
* Ajout de la propriété `isDebugging` dans `dsfr.analytics` permettant d&#39;activer/désactiver le debug Eulerian
* Mise en conformité avec les SPA (Single-page application - Angular, React, Vue)
* Ajout d’exemples de SPA (Vue &amp; React)


#### ✨ feat(analytics): polyfill legacy [(#588)](https://github.com/GouvernementFR/dsfr/pull/588)
Ajout des polyfills et correctifs nécessaires au support d&#39;IE11


#### ✨ feat(changelog): ajoute changelog auto-généré [(#561)](https://github.com/GouvernementFR/dsfr/pull/561)
Outil en ligne de commande pour générer un journal des modifications `CHANGELOG.md` à partir des balises git et de l&#39;historique des commits, nous utilisons [Auto-changelog](https://github.com/cookpete/auto-changelog).

Commande à executer à la racine du projet, `git log` est exécuté en arrière-plan afin d&#39;analyser l&#39;historique des commits, en lançant :

```
yarn version
```

Il faut ensuite renseigner le numéro de version de la prochaine release :
```
info Current version: x.x.x
question New version: [X.X.X]
```

La configuration est présente dans le fichier `.auto-changelog`.

La gestion de l&#39;affichage du changelog est présente dans le template [Handlebars](https://handlebarsjs.com/) `changelog-template.hbs`.



### [v1.9.1](https://github.com/GouvernementFR/dsfr/compare/v1.9.0...v1.9.1) - 11 Avril 2023

#### fix(input): correction bug icone date-picker firefox version 109+ [(#585)](https://github.com/GouvernementFR/dsfr/pull/585)
Depuis la version 109 de Firefox, l&#39;icone date-picker est en double sur les champs type date
- Ajout de l&#39;icone date-picker si le navigateur le supporte uniquement


#### ✨ feat(analytics): évolution et ajout de nouveaux composants [(#560)](https://github.com/GouvernementFR/dsfr/pull/560)
- Ajout d’un attribut id sur tous les éléments marqués. Les éléments où l&#39;id manque sont recensés en warning dans la console.
- ⚠ Modification de la configuration analytics : 
  ⋅ dsfr.analytics.mode devient dsfr.analytics.collection et peut maintenant prendre les valeurs MANUAL, LOAD, FULL, HASH (voir doc). 
  ⋅ Ajout du support des SPA activé automatiquement si en mode ANGULAR, REACT ou VUE
  ⋅ Ajout de la variable `enableRating` dans dsfr.analytics.enableRating, permettant d’activer le taux de clic (désactivé par défaut).
- Ajout du support analytics sur les composants restants : 
  - [x] Ajout de fichier - File upload
  - [x] Alertes - Alert
  - [x] Badge
  - [x] Bandeau d&#39;information importante
  - [x] Bouton FranceConnect
  - [x] Champ de saisie - Input
  - [x] Citation - Quote
  - [x] Contenu médias - Responsive médias
  - [x] Gestionnaire de consentement - Consent banner
  - [x] Indicateur d&#39;étape
  - [x] Lettre d&#39;information et réseaux sociaux - Newsletter &amp; Follow us
  - [x] Liens d&#39;évitement - Skiplink
  - [x] Liste déroulante - Select
  - [x] Pagination
  - [x] Sélecteur de langue
  - [x] Tableau - Table
  - [x] Tag
  - [x] Téléchargement de fichier
  - [x] Tuile - Tile
  - [x] Transcription


#### ✨ feat(header,navigation): fermeture de la navigation au clic sur lien ou bouton [(#583)](https://github.com/GouvernementFR/dsfr/pull/583)
Actuellement, la navigation reste présente en mobile et en desktop lorsque l&#39;on clique sur un lien ou un bouton qu&#39;elle contient, ce qui pose problème dans le cas des Single-page application.
La fonctionnalité est maintenant modifiée pour que tout clic sur un élément `&lt;button&gt;` ou `&lt;a&gt;` entraîne la fermeture de la navigation (modale et/ou menu).
L&#39;ajout de l&#39;attribut `data-fr-prevent-conceal` permet de préserver un lien ou un bouton particulier de ce nouveau comportement.


#### 🐛 fix(build): changement des path pour compiler sur windows [(#580)](https://github.com/GouvernementFR/dsfr/pull/580)
Sur windows il n&#39;est pas possible de recompiler le projet avec yarn build
Correction des path dans les tools (windows utilise &#34;&#34; et linux et mac &#34;/&#34;)


#### ✨ feat(github): ajout de templates d&#39;issue github [(#569)](https://github.com/GouvernementFR/dsfr/pull/569)
Création de template d&#39;issue Github pour indiquer les informations demandées lors d&#39;un report de 
- bug
- évolution
- documentation


#### 🐛 fix(core): correction icone lien externe IE [(#548)](https://github.com/GouvernementFR/dsfr/pull/548)
Sur Internet Explorer, les icônes des liens externes ne s&#39;affichent plus.
Correction css sur core.


#### ⬆️ feat(deps): mise à jour des dépendances [(#553)](https://github.com/GouvernementFR/dsfr/pull/553)


#### 🐛 fix(transcription): corrige largeur du bouton a l&#39;ouverture de la modale [(#565)](https://github.com/GouvernementFR/dsfr/pull/565)
à l&#39;ouverture de la modale de la transcription, le déplacement des éléments en position fixed change la taille du bouton de la transcription à sa taille minimum. 
La largeur étendue à 100% permet de la conserver constante.


#### 🐛 fix(notice): ajoute &#39;importante&#39; au bandeau d&#39;information importante [(#563)](https://github.com/GouvernementFR/dsfr/pull/563)
Le nom du composant devient &#34;Bandeau information importante&#34;


#### ✨ feat(footer): évolution des mentions légales [(#568)](https://github.com/GouvernementFR/dsfr/pull/568)
Nouveau texte : ”Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous”


#### 🐛 fix(consent): consent placeholder video mal centré [(#573)](https://github.com/GouvernementFR/dsfr/pull/573)
Dans le cas d&#39;une vidéo le placeholder est en display block
Retrait de la propriété non désirée


#### 🐛 fix(password): correctif erreur getModifierState [(#574)](https://github.com/GouvernementFR/dsfr/pull/574)
Lorsque le navigateur fait l&#39;autocompletion du champ password, il lance un événement qui n&#39;est pas forcément un évènement de clavier et provoque une erreur indiquant que la fonction getModifierState n&#39;existe pas.


#### 🐛 fix(modal): correctif prise de focus au focus-trap [(#566)](https://github.com/GouvernementFR/dsfr/pull/566)
à l&#39;ouverture de la modale, le focus est automatiquement déplacé sur le premier des éléments interactifs de la modale.
Ce comportement pose problème lorsque le focus est déjà sur un des éléments contenus dans la modale.

Ajout d&#39;une condition qui vérifie que le focus n&#39;est pas déjà sur un des éléments interactifs de la modale avant de déplacer le focus.


#### ✨ feat(readme): Mise à jour du readme [(#559)](https://github.com/GouvernementFR/dsfr/pull/559)
Fine tuning, ajout de licence et droit d&#39;utilisation et corrections.


#### ✨ feat(artwork): ajout picto document-add [(#571)](https://github.com/GouvernementFR/dsfr/pull/571)
Ajout pictogramme : 
- document/document-add



### [v1.9.0](https://github.com/GouvernementFR/dsfr/compare/v1.8.5...v1.9.0) - 1er Mars 2023

#### fix(*): correctifs mineurs pa11y et buble + lint [(#555)](https://github.com/GouvernementFR/dsfr/pull/555)
correction du chemin relatif du layout dans les exemples du package response
spread operator non supporté par buble, remplacé par Object.assign pour la transpilation IE11
correctifs de false positive pa11y


#### feat(analytics): ajout de la fonctionnalité Analytics [(#528)](https://github.com/GouvernementFR/dsfr/pull/528)
Outil de collecte de données basé sur la solution Eulerian


#### fix(*): mise à jour browserlist [(#554)](https://github.com/GouvernementFR/dsfr/pull/554)


#### fix(scheme): correctif du scheme boot pour omission par ie11 [(#550)](https://github.com/GouvernementFR/dsfr/pull/550)
Le code inline du scheme boot provoque des erreurs interrompant l&#39;exécution du javascript sur IE11
Il faut ajouter l&#39;attribut type=&#34;module&#34; sur l&#39;étiquette d&#39;élément script liée au scheme-boot


#### fix(header): copie du sélecteur de langue sans accès rapide [(#547)](https://github.com/GouvernementFR/dsfr/pull/547)
Les accès rapides sont dupliqués dans le menu mobile par le JS (sauf dans les modes SPA)
En l&#39;absence d&#39;accès rapide, le sélecteur de langue n&#39;était pas dupliqué comme attendu


#### fix(artwork): depreciation des xlink dans les artwork [(#545)](https://github.com/GouvernementFR/dsfr/pull/545)
xlink-href est déprécié : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href
Il était privilégié jusqu&#39;ici pour le support d&#39;IE11. Un polyfill a été mis en place pour assurer la rétrocompatibilité avec IE11


#### fix(address): Inversion ordre immeuble et batiment [(#544)](https://github.com/GouvernementFR/dsfr/pull/544)
inversion de 2 champs dans les modèles formulaire d&#39;adresse


#### fix(core): correctif de la taille minimum de l&#39;underline des liens [(#543)](https://github.com/GouvernementFR/dsfr/pull/543)
Sur Firefox, la relativité de l&#39;épaisseur du lien (en em) provoque parfois son invisibilité lorsque celui-ci est inférieur à 1px. Ce correctif met en place un minimum de 1px pour l&#39;épaisseur du lien.


#### fix(header): alignement à gauche des raccourcis sans icônes [(#542)](https://github.com/GouvernementFR/dsfr/pull/542)
L&#39;absence d&#39;icône sur les accès rapides de l&#39;En-tête provoque un alignement centré au lieu d&#39;un alignement gauche attendu.


#### fix(checkbox, radio): placement de l&#39;input caché &amp; alignement sm [(#539)](https://github.com/GouvernementFR/dsfr/pull/539)
Corrige le mauvais placement du curseur sur les cases à cocher et les boutons radio lors de l&#39;utilisation de VoiceOver (screen reader de MacOs)


#### fix(core): correction du curseur des textarea [(#537)](https://github.com/GouvernementFR/dsfr/pull/537)


#### fix(input): correction placement icone calendrier sur input type=&#34;date&#34; [(#536)](https://github.com/GouvernementFR/dsfr/pull/536)
corrige le problème de double icône remonté dans #530


#### feat(icon): ajout icones system [(#551)](https://github.com/GouvernementFR/dsfr/pull/551)
Ajout d&#39;icônes dans system :
fr--arrow-right-up-circle-fill,
fr--arrow-right-down-circle-fill,
fr--equal-circle-fill,


#### fix(scheme): ajout du mode sombre de la scrollbar du navigateur  (#535) [(#407)](https://github.com/GouvernementFR/dsfr/pull/407)
Permet de synchroniser le thème de la scrollbar avec celui du DSFR


#### feat(color): ajout de token de couleurs artwork [(#552)](https://github.com/GouvernementFR/dsfr/pull/552)
Ajoute les tokens des familles de couleurs neutral, primary et accent sur artwork dans les usages decorative, background et motif


#### feat(pictograms): Ajouts des pictogrammes food, grocery, house [(#520)](https://github.com/GouvernementFR/dsfr/pull/520)


#### feat(deps): mise à jour des dependances npm [(#533)](https://github.com/GouvernementFR/dsfr/pull/533)


#### fix(response): retrait du fil d&#39;Arianne sur les pages d&#39;erreur [(#507)](https://github.com/GouvernementFR/dsfr/pull/507)


#### fix(toggle): rend le composant compatible avec vite+svelte [(#518)](https://github.com/GouvernementFR/dsfr/pull/518)




## v1.10

### [v1.10.2](https://github.com/GouvernementFR/dsfr/compare/v1.10.1...v1.10.2) - 19 Octobre 2023

#### 🐛 fix(analytics): réduction d&#39;envoi des données [(#806)](https://github.com/GouvernementFR/dsfr/pull/806)
- suppression du taux d&#39;interaction global
- ajout de l&#39;attribut data-fr-analytics-rating qui permet de mesurer le taux d&#39;interaction sur un élément particulier
- suppression de l&#39;impression des composants sans interactions
- limitation de l&#39;envoi de donnée à la première interaction
- bouton associé à l&#39;accordéon, l&#39;onglet et la transcription rendu muet
- recensement des composants de la page dans une nouvelle donnée de page `page_components`



### [v1.10.1](https://github.com/GouvernementFR/dsfr/compare/v1.10.0...v1.10.1) - 4 Septembre 2023

#### 🐛 fix(radio): correctif couleur manquante [(#757)](https://github.com/GouvernementFR/dsfr/pull/757)
- Erreur dans le build du CSS suite au manque d&#39;une couleur


#### 🐛 fix(link): correction des liens de téléchargement sur firefox et des groupes de liens sur safari [(#755)](https://github.com/GouvernementFR/dsfr/pull/755)


#### ✨ feat(share, follow, utility): icone personalisée, et ajout twitter-x et threads [(#752)](https://github.com/GouvernementFR/dsfr/pull/752)
- ajoute la possibilité de mettre une icone de réseau social personalisée dans &#34;follow&#34;
- ajouts d&#39;exemples d&#39;icone personalisée dans &#34;share&#34; et &#34;follow&#34;
- ajouts des icones dans utility : 
  - twitter-x-fill
  - twitter-x-line
  - threads-fill
  - threads-line


#### 🐛 fix(tile): correction de l&#39;icone des tuiles avec lien externe [(#753)](https://github.com/GouvernementFR/dsfr/pull/753)



### [v1.10.0](https://github.com/GouvernementFR/dsfr/compare/v1.9.3...v1.10.0) - 19 Juillet 2023

#### 🐛 fix(form): correctif barre état iOS [(#712)](https://github.com/GouvernementFR/dsfr/pull/712)
- Sur iOS, la barre d&#39;état d&#39;erreur ou validation est discontinue
- corrige le problème de manière générique


#### 🐛 fix(modal): retour de focus fermeture clavier [(#716)](https://github.com/GouvernementFR/dsfr/pull/716)
- Mise en place du retour du focus à la fermeture en pressant la touche ESC


#### 🐛 fix(form): correctif focus des radios riches dépréciés [(#715)](https://github.com/GouvernementFR/dsfr/pull/715)
- corrige le décalage du focus sur les boutons radio en version dépréciée


#### 🐛 fix(follow): orthographe message de confirmation [(#714)](https://github.com/GouvernementFR/dsfr/pull/714)


#### ✨ feat(core, password): boutons spéciaux input Safari [(#711)](https://github.com/GouvernementFR/dsfr/pull/711)
- Dans les champs de type password, sur safari Mac, il y a une icône apportant des outils supplémentaire qui se superpose à l’icône des signalant la hauteur de casse
- Déplacement des icônes natives pour qu&#39;elles ne se superposent pas
- Retrait de l&#39;icône capslock native, privilégiant la nôtre


#### 🐛 fix(core): stabilisation disclosure [(#713)](https://github.com/GouvernementFR/dsfr/pull/713)
- L&#39;ouverture des paramètres d&#39;affichage est par moment non réactive
- L&#39;élément est fermé avant même d&#39;être ouvert à cause de boucle de déclenchement
- Ajout de condition permettant de limiter les boucles


#### 📝 doc(tooltip): retrait exemple texte [(#710)](https://github.com/GouvernementFR/dsfr/pull/710)
- l&#39;utilisation d&#39;un tooltip sur un texte pose des problèmes de restitution
- cet usage est déconseillé
- retrait de l&#39;exemple


#### 🐛 fix(tile): correctif espacements version dépreciée [(#704)](https://github.com/GouvernementFR/dsfr/pull/704)
- L&#39;icône et le contenu se retrouvent superposés dans la version dépréciée, ce correctif rétablit l&#39;espacement nécessaire


#### 🐛 fix(tile, card): A11Y liens désactivés [(#709)](https://github.com/GouvernementFR/dsfr/pull/709)
- Ajout des attributs `role=&#34;link&#34;` et `aria-disabled=true` sur les version désactivées


#### 🐛 fix(transcription, content): correctif title et label bouton Agrandir [(#708)](https://github.com/GouvernementFR/dsfr/pull/708)
- Retrait du title sur le bouton agrandir
- Ajout label agrandir dans les exemples de content


#### ✨ feat(*): Ajout d&#39;un meta tag iOS [(#707)](https://github.com/GouvernementFR/dsfr/pull/707)
- Sur iOS, les numéros de téléphone sont automatiquement transformés en lien
- Entraîne un mauvais rendu dans le bloc fonctionnel de numéro de téléphone
- Correction par l&#39;ajout général du meta tag `&lt;meta name=&#34;format-detection&#34; content=&#34;telephone=no&#34;&gt;`


#### 🐛 fix(card, tile): correctif IE 11 [(#705)](https://github.com/GouvernementFR/dsfr/pull/705)
- correctif sur les tuiles et card sur la version legacy pour éviter les bugs de dépassement de texte et placement des icônes


#### 🐛  fix(toggle): retrait tap-highlight-color iOS [(#703)](https://github.com/GouvernementFR/dsfr/pull/703)
- Au clic sur le toggle sur iOS, l&#39;effet de highlight est présent
- Retrait de cet effet avec la propriété [-webkit-tap-highlight-color](https://developer.mozilla.org/fr/docs/Web/CSS/-webkit-tap-highlight-color)


#### 🐛 fix(link): correctif téléchargement multiligne [(#702)](https://github.com/GouvernementFR/dsfr/pull/702)
- les liens de téléchargement étaient limités à une seul ligne avec une ellipse sur le text dépassant
- correctif prenant en compte le retour à la ligne


#### 🐛 fix(download): graisse du titre des liens [(#701)](https://github.com/GouvernementFR/dsfr/pull/701)
- Passage des liens dépréciés en graisse regular


#### 🐛 fix(*): mise à jour des liens du readme [(#700)](https://github.com/GouvernementFR/dsfr/pull/700)
- Mise à jour des liens vers [https://www.systeme-de-design.gouv.fr](https://www.systeme-de-design.gouv.fr) dans le readme


#### 🐛 fix(modal): préviens décalage mobile [(#699)](https://github.com/GouvernementFR/dsfr/pull/699)
- l&#39;ajout d&#39;un padding à l&#39;ouverture permet de se substituer au décalage créé potentiellement par la disparition de la scrollbar en desktop
- En mobile, la modale occupe 100% de la largeur, ce padding créé un espacement incorrect
- ajout d&#39;une media query sur le breakpoint MD pour corriger le problème


#### 🐛 fix(header): correctif régression scroll horizontal [(#697)](https://github.com/GouvernementFR/dsfr/pull/697)
- La navigation du header créée un scroll horizontal dans la page
- l&#39;ajout d&#39;un max-width prévient le problème


#### 🐛 fix(password): correctif accessibilité des messages [(#694)](https://github.com/GouvernementFR/dsfr/pull/694)
- ajout sur les messages de validation et d&#39;erreur de la composition du mot de passe d&#39;un statut en after uniquement pour les lecteurs d&#39;écrans
- BREAKING CHANGE : il est nécessaire d&#39;ajouter les attributs `data-fr-valid`et `data-fr-error` avec les textes correspondants à l&#39;état (respectivement, en français, &#34;validé&#34; et &#34;en erreur&#34;


#### 🐛 fix(sidemenu): correction de la couleur des liens du sidemenu [(#698)](https://github.com/GouvernementFR/dsfr/pull/698)
- Effet de bord du passage du bouton mobile en bleu, l&#39;ensemble des boutons du sidemenu est passé en bleu.
- Ce correctif amène la spécificité nécessaire pour avoir les boutons et lien en `text default grey`


#### 🐛 fix(core): correctif sur KeyAction [(#696)](https://github.com/GouvernementFR/dsfr/pull/696)
- Corrige la régression sur l&#39;écoute des interactions avec le clavier dû à l&#39;évolution de la structure de la constante KeyCodes, non répercutée dans KeyAction


#### ✨ feat(colors): ajout des utilitaires de couleur flat [(#693)](https://github.com/GouvernementFR/dsfr/pull/693)
- Ajout des classes utilitaires pour le token background flat avec les variations de couleur d&#39;accent


#### 🐛 fix(tooltip,modal): interaction globale et focus iOS [(#691)](https://github.com/GouvernementFR/dsfr/pull/691)
- Correctif à la pression de la touche Escape sur la modale : si l&#39;élément actif (focus) est un élément de formulaire ou un média, la modale n&#39;est pas refermée pas pour permettre l&#39;interaction native de l&#39;élément actif
- Correctif iOS de la prise de focus au clic
- Fermeture des tooltips dés au clic sur n&#39;importe quel endroit
- Fermeture des tooltip à la pression sur la touche escape, où que soit le focus


#### 🐛 fix(tooltip) : a11y tooltip hover [(#686)](https://github.com/GouvernementFR/dsfr/pull/686)
- autorise le survol sur l&#39;information contextuelle
- ajoute un `tabindex=&#34;0&#34;` sur l&#39;example dans un texte
- arrondi la valeur de placements de la flèche verticale à 2 décimales
- retire le `aria-hidden=&#34;true&#34;` et ajoute `display=&#34;none&#34;`


#### 🐛 fix(transcription): a11y retour audit [(#684)](https://github.com/GouvernementFR/dsfr/pull/684)
- place le bouton d’agrandissement avant la modale et inverse les élements via css
- ajoute `aria-label=”Agrandir la transcription”` sur le bouton d’agrandissement
- remplace la balise dialog par une balise div
- système d&#39;activation / désactivation de la modale avec ajout / retrait dynamique de `role=&#34;dialog&#34;` à l&#39;ouverture / fermeture de la modale
- système de vérification et de correction pour l&#39;**accessible name** de la modale, avec warning explicatifs


#### ✨ feat(tile): ajouts de variations de tuiles [(#685)](https://github.com/GouvernementFR/dsfr/pull/685)
Ajouts des mêmes variations que la carte : 
- `.fr-tile--no-border` sans le bordure encadrant la tuile (mais la barre épaisse basse reste)
- `.fr-tile--shadow` avec élévation
- `.fr-tile--grey` en gris contrast
- `.fr-tile--no-background` couleur de fond transparente


#### 🐛 fix(card,tile): corrige erreur de syntaxe ejs + lint [(#687)](https://github.com/GouvernementFR/dsfr/pull/687)


#### 🐛 fix(card, tile): correctif lien externe et désactivé [(#683)](https://github.com/GouvernementFR/dsfr/pull/683)
- sur les exemples avec lien externe, ajout de title=&#34;[Intitulé] - nouvelle fenêtre&#34;
- sur les exemples avec liens désactivés, ajout de role=&#34;link&#34; et aria-disabled=&#34;true&#34;


#### 🐛 fix(card, tile): correctif token title [(#682)](https://github.com/GouvernementFR/dsfr/pull/682)
- le titre des cartes et tuiles doivent utiliser le token de couleur text-title-grey


#### ✨ feat(navigation, header, sidemenu): homogénéisation des espacements et indentation [(#678)](https://github.com/GouvernementFR/dsfr/pull/678)
- Uniformisation du menu latéral, navigation, et accordéon
  - ajout d&#39;un fond open-blue-france et du texte en blue-france sur les boutons d&#39;ouverture en état ouvert
  - ajout de marge pour indenter les sous menus
  - ajustement des espacements
- Ajustement de la navigation du header en mobile
- Ajustement de la taille max de la navigation dans le header en desktop


#### 🐛 fix(input): ajustement champs particuliers [(#679)](https://github.com/GouvernementFR/dsfr/pull/679)
- Ajuste la largeur des champs de code postal, année et nombre à des multiples de 8v


#### 🐛 fix(civility): correctif taille des boutons radio [(#676)](https://github.com/GouvernementFR/dsfr/pull/676)
- Corrige la taille des boutons radio du titre d&#39;appel en sm au lieu de md


#### 🐛 fix(follow): ajoute d&#39;exemple [(#675)](https://github.com/GouvernementFR/dsfr/pull/675)
- Ajout de l&#39;exemple de succès à l&#39;abonnement à la lettre d&#39;information


#### 🐛 fix(analytics): correctif page.date [(#681)](https://github.com/GouvernementFR/dsfr/pull/681)
- la collecte de donnée page.date génére une erreur -&gt; correctif
- mise en conformité avec le standard de date calendaire ISO 8601 [YYYY-MM-DD]


#### 🐛 fix(transcription): déplacement bouton modale [(#680)](https://github.com/GouvernementFR/dsfr/pull/680)
- Pour déterminer le bouton primaire qui sert à l’ouverture, un disclosure filtre parmi les boutons qui lui sont reliés et retire ceux qui se trouve à l’intérieur du contenu du disclosure (ce sont les boutons de fermeture)
- Actuellement, la transcription a le bouton d&#39;ouverture de modale à l&#39;intérieur de son contenu, ce qui bloque le fonctionnement, le bouton n&#39;étant pas reconnu comme primaire.
- Le correctif déplace le bouton après la dialog de la modal et restitue le fonctionnement de la transcription


#### 🐛 fix(form): met a jour les libelles des indications [(#674)](https://github.com/GouvernementFR/dsfr/pull/674)
- retrait de la capitalisation des mentions d&#39;indication


#### 🐛 fix(date): ajustement exemples [(#671)](https://github.com/GouvernementFR/dsfr/pull/671)
- mise en place de date cohérentes avec les erreurs affichées dans les exemples


#### 🐛 fix(form): correctif alignement icône des messages [(#670)](https://github.com/GouvernementFR/dsfr/pull/670)
- l&#39;icône à gauche des messages d&#39;erreur/succès sur plusieurs lignes doit être accrochée en haut et non pas centrée


#### 🐛 fix(password): retrait du bouton natif sur edge [(#669)](https://github.com/GouvernementFR/dsfr/pull/669)
- Sur edge une icône oeil apparaît au focus d&#39;un champ de type &#34;password&#34;
- Retrait de l&#39;icone native


#### 🐛 fix(name): a11y - gestion du focus [(#664)](https://github.com/GouvernementFR/dsfr/pull/664)
Ajoute dans la page d’exemple le déplacement du focus : 
- au click sur la checkbox de désactivation pour activer, le premier champ ou bouton prend le focus
- au click sur l’ajout d’un prénom, le champs ajouté prend le focus
- au click sur la suppression, le champ ou bouton suivant prend le focus


#### 🐛 fix(footer): retrait de CSS obsolète [(#668)](https://github.com/GouvernementFR/dsfr/pull/668)
- retrait de CSS résiduel de précédentes versions dans le footer-bottom__list


#### 🐛 fix(password): correctif états de la case à cocher [(#667)](https://github.com/GouvernementFR/dsfr/pull/667)
- force l&#39;état de la checkbox à l&#39;état par défaut, pour éviter qu&#39;elle ne passe en erreur/succès si elle hérite de cet état sur le composant.


#### 🐛 fix(tooltip): mise a jour exemple [(#666)](https://github.com/GouvernementFR/dsfr/pull/666)
- Dans l&#39;exemple &#34;Information contextuelle dans un tableau&#34;, remplacement de l&#39;information contextuelle par une infobulle (interaction au clic plutôt qu&#39;au survol)


#### 🐛 fix(input): fix groupe attributes &amp; multiple hint text [(#665)](https://github.com/GouvernementFR/dsfr/pull/665)
- Correction attribut en trop sur les input-group
- multiple texte additionnel sur le modèle de champs d&#39;adresse électronique
- Correction des textes additionnels


#### 🐛 fix(modal): suppression exemple des liens dans la zone d&#39;action [(#663)](https://github.com/GouvernementFR/dsfr/pull/663)
- Ce cas n&#39;est pas recommandé, la zone d&#39;action étant plutôt prévue pour des boutons


#### 🐛 fix(consent): correctif espacement et couleur [(#662)](https://github.com/GouvernementFR/dsfr/pull/662)
- Corrige description d&#39;une finalité de 3v à 2v en margin-bottom
- Homogénéité avec accordion, nav et sidemenu sur le bouton de la modale de consentement “voir plus de détails” :
   - enlever le soulignement
   - mettre en bleu le lien “voir plus de détail”


#### 🐛 fix(card, tile): ajout version sans liens, target blank, et mise à jour des exemples [(#657)](https://github.com/GouvernementFR/dsfr/pull/657)
- Ajout de version carte et tuile sans lien (en noir)
- Ajout de l&#39;icone target blank sur les cartes avec lien non élargi en target=&#34;_blank&#34;
- Ajout d&#39;exemples de carte et tuile de téléchargement avec remplissage automatique des détails (en Octet ou en Bytes)
- Ajout d&#39;exemple de carte et tuile de téléchargement avec fichier en langue étrangère
- Séparation des exemples de tuile de téléchargement
- Changement des pictogrammes des tuiles de téléchargement
- Ajustement de la grille dans les exemples de tuiles


#### 🐛 fix(pagination): correctif régression href des exemples [(#661)](https://github.com/GouvernementFR/dsfr/pull/661)
- Corrige la régression qui a supprimé les liens des éléments de pagination


#### 🐛 fix(sidemenu):  suppression variante et correctif style bouton mobile [(#660)](https://github.com/GouvernementFR/dsfr/pull/660)
- Suppression de la variante avec bordure
- Corrige le style du bouton mobile en action-high-blue-france (cohérence navigation/accordion)


#### 🐛 fix(company): retrait des pluriels [(#659)](https://github.com/GouvernementFR/dsfr/pull/659)
- Correction du langage dans la demande d&#39;un représentant moral, suppression des pluriels optionnels


#### 🐛 fix(link): corrige graisse lien de téléchargement [(#658)](https://github.com/GouvernementFR/dsfr/pull/658)
- retire le font-weight bold sur le lien de téléchargement


#### 🐛 fix(password): bug icône [(#648)](https://github.com/GouvernementFR/dsfr/pull/648)
- conditionne l&#39;ajout de la classe utile `fr-icon` à l&#39;utilisation d&#39;une string en paramètre `icon`


#### 🐛 feat(company): accessibilité lien externe [(#656)](https://github.com/GouvernementFR/dsfr/pull/656)
- corrige l&#39;accessibilité du lien en `target=&#34;_blank&#34;` par l&#39;ajout d&#39;un attribut `title`  :  &#34;Annuaire des entreprises – nouvelle fenêtre&#34;


#### 🐛 fix(unexpected): corrige groupe de bouton vide [(#655)](https://github.com/GouvernementFR/dsfr/pull/655)
- ajoute une condition sur l&#39;ajout du wrapper `.fr-btns-group` dans la template `ejs`


#### 🐛 fix(*): accessibilité aria-live [(#654)](https://github.com/GouvernementFR/dsfr/pull/654)
- remplace la valeur aria-live `assertive` par `polite`


#### 🐛 fix(account): accessibilité champs obligatoires [(#652)](https://github.com/GouvernementFR/dsfr/pull/652)
-  La mention de &#34;champs obligatoires&#34; doit être mise dans un élément `&lt;p&gt;` sur les pages de connexion et création de compte


#### 🐛 fix(pattern): dénomination des blocs fonctionnels [(#649)](https://github.com/GouvernementFR/dsfr/pull/649)
- Mise à jour et harmonisation de la dénomination des blocs fonctionnels


#### 🐛 fix(core): correctif padding négatif [(#650)](https://github.com/GouvernementFR/dsfr/pull/650)
- ajoute une condition pour éviter le padding négatif actuellement présent dans les classes utiles


#### ⬆️ chore(*): montée de version NodeJS 18 [(#644)](https://github.com/GouvernementFR/dsfr/pull/644)
- Monte la version minimale de NodeJS en 18.16.1


#### 🐛 fix(core): correctif bug proxy Toggle [(#646)](https://github.com/GouvernementFR/dsfr/pull/646)
- Dans la class Toggle, le proxy appelle la fonction toggle qui a été remplacée par la fonction générique handleClick : 
- Ce correctif restaure la fonction toggle et implémente son appel dans handleClick


#### 📝 docs(analytics): correction doc analytics &amp; readme [(#643)](https://github.com/GouvernementFR/dsfr/pull/643)
- mise à jour du readme
- corrections diverses documentation analytics


#### 🐛 fix(analytics): correctif hiérarchie [(#647)](https://github.com/GouvernementFR/dsfr/pull/647)
- l&#39;analyse de hiérarchie ignorait les headings présents dans un composant. 
- ce correctif permet de les inclure dans l&#39;analyse.


#### 🐛 fix(changelog): correctif inclusion des html [(#642)](https://github.com/GouvernementFR/dsfr/pull/642)
- inclusion des caractères spéciaux html pour que les snippets soient affichés correctement


#### ⬆️ chore(dependencies): met a jour les dépendances Node [(#638)](https://github.com/GouvernementFR/dsfr/pull/638)
- Mise à jour de sécurité


#### 🐛 fix(core): apparence du champ de recherche iOS [(#639)](https://github.com/GouvernementFR/dsfr/pull/639)
- En utilisant des librairies tierces (telles que normalize.css), le champ de recherche reprend son aspect natif arrondi en mobile IOS.
- Spécificité renforcée sur le sélecteur afin de conserver le appearance: none


#### 🐛 fix(header): duplication des id généralisée pour les quick access [(#637)](https://github.com/GouvernementFR/dsfr/pull/637)
- L&#39;ensemble des id présents dans les accès rapides du header doivent être suffixés par -mobile à la duplication


#### 🐛 fix(analytics): correctifs divers et ajouts de propriétés de page [(#612)](https://github.com/GouvernementFR/dsfr/pull/612)
- liens cassés de la documentation
- retrait du patch js des pages d&#39;exemple
- correctif du collect manuel au changement d&#39;url
- correctif du taux de clic désactivé sur certains composants
- ajustements pages d&#39;exemple
-  retrait des limitation de valeurs sur la propriété`user.profile` 
- ajouts de propriétés dans la configuration de page 
  - page_id
  - page_author
  - page_tags
  - page_date


#### 🐛 fix(search): hauteur du champ trop grande de 1px sur ios [(#632)](https://github.com/GouvernementFR/dsfr/pull/632)
Sur ios le champ dépasse de 1px par rapport au bouton.

-&gt; Correction du max-height


#### ✨ feat(select, input): ajout de la bordure en état erreur / succés / info [(#635)](https://github.com/GouvernementFR/dsfr/pull/635)
Actuellement la bordure gauche montrant l&#39;état d&#39;erreur/succès/info n&#39;est appliqué que dans le cas d&#39;un groupe de champ en erreur via les modificateur .fr-fieldset--error, .fr-fieldset--valid, .fr-fieldset--info

Afin d&#39;être ISO avec l&#39;UI nous rajoutons cet élément visuel sur : 
- les champs seuls (.fr-input-group) : 
  - `.fr-input-group--error`
  - `.fr-input-group--valid`
  - `.fr-input-group--info`
- les selects (.fr-select-group)
  - `.fr-select-group--error`
  - `.fr-select-group--valid`
  - `.fr-select-group--info`


#### 🐛 fix(tab): correction onglets imbriqués en legacy [(#628)](https://github.com/GouvernementFR/dsfr/pull/628)
- correction des marges sur les tabs imbriqués sur IE
- correction disclosure et disclosureGroup IE
- correction syntax error selecteur Collapse


#### 🐛 fix(example): retire les attributs file des &lt;link&gt; [(#631)](https://github.com/GouvernementFR/dsfr/pull/631)
- l&#39;attribut file n&#39;est pas un attribut possible pour les éléments &lt;link&gt;


#### 🐛 fix(link, button, tag, badge): retrait du z-index [(#630)](https://github.com/GouvernementFR/dsfr/pull/630)
- retrait du z-index: 1 qui pose problème dans une modale avec footer.


#### 🎉 feat(tooltip): ajout de la fonctionnalité Tooltip [(#486)](https://github.com/GouvernementFR/dsfr/pull/486)
Le composant `Infobulle` (ou `bulle d’aide`, `aide contextuelle`) permet d’afficher du contenu dans le contexte de navigation (non modal), à propos et lors de l’interaction avec un élément précis de l’interface. Il est caché par défaut, et s’affiche au survol ou au clic de l’élément associé, par-dessus le reste de la page.


#### 🐛 fix(share): correction copie url dans presse papier [(#629)](https://github.com/GouvernementFR/dsfr/pull/629)
- Gestion de la Promise retournée par `navigator.clipboard.writeText()`


#### ✨ feat(address): met a jour les message d&#39;aide des champs de formulaire [(#624)](https://github.com/GouvernementFR/dsfr/pull/624)
- ajout d&#39;indication et de description du format attendu


#### 🐛 fix(account): met a jour la hiérarchie html des modèles de page [(#618)](https://github.com/GouvernementFR/dsfr/pull/618)
- Mise en place d&#39;une hiérarchie sans saut de niveau de titre, plus cohérente
- Correctif typo sur la classe `fr-grid-row--gutters`


#### 🐛 fix(accordion, transcription, translate, sidemenu): Ajustement sur l&#39;état défaut et actif [(#564)](https://github.com/GouvernementFR/dsfr/pull/564)
Harmonisation avec la navigation sur Accordion, Sidemenu, Translate et Transcription :
- Passage icône et intitulé en action-high-blue-france
- Ajout background-open-blue-france sur le bouton lorsque l&#39;élément est ouvert
- Icône “arrow-down-s-ligne” (la même que sur navigation)
- Accordion, Translate : Retrait changement de graisse (normal -&gt; bold) à l&#39;ouverture et graisse constante en medium


#### 🐛 fix(tab, core): correctif tab legacy &amp; margin top des headings [(#621)](https://github.com/GouvernementFR/dsfr/pull/621)
- Corrige la taille de l&#39;icône
- Corrige l&#39;alignement du contenu du tab_panel
- Ajustement du padding de la tab__list
- Retire les margin-top des headings (h1 -&gt; h6)


#### 📝 doc(core): ajoute des exemples liens bruts et resets [(#613)](https://github.com/GouvernementFR/dsfr/pull/613)
Par défaut, le dsfr stylise les liens natifs, ce qui peut poser problème dans l&#39;utilisation de librairie tierce.
2 classes utilitaires sont mise à disposition pour contrecarrer le style fort du lien : 
- `.fr-raw-link` retire toute stylisation sur les liens natifs
- `.fr-reset-link` remet le soulignement natif du navigateur (`text-decoration: underline;`)
Des pages d&#39;exemples en illustrant l&#39;utilisation ont été ajoutées dans les pages d&#39;exemples des fondamentaux.


#### ✨ feat(radio): radio rich sans images &amp; pictogram à la place d&#39;img [(#540)](https://github.com/GouvernementFR/dsfr/pull/540)
Les radios riches doivent utiliser des pictogrammes et non des images :
- Retrait des images
- Ajout de pictogramme

Le snippet :
```html
&lt;div class=&#34;fr-radio-group fr-radio-rich&#34;&gt;
  &lt;input value=&#34;1&#34; type=&#34;radio&#34; id=&#34;radio-rich-1&#34; name=&#34;radio-rich&#34;&gt;
  &lt;label class=&#34;fr-label&#34; for=&#34;radio-rich-1&#34;&gt;
      Libellé bouton radio
  &lt;/label&gt;
  &lt;div class=&#34;fr-radio-rich__img&#34;&gt;
      &lt;img src=&#34;../../../example/img/placeholder.1x1.png&#34; alt=&#34;[À MODIFIER - vide ou texte alternatif de l’image]&#34; /&gt;
  &lt;/div&gt;
&lt;/div&gt;
```
DEVIENT : 
```html
&lt;div class=&#34;fr-radio-group fr-radio-rich&#34;&gt;
  &lt;input value=&#34;1&#34; type=&#34;radio&#34; id=&#34;radio-rich-1&#34; name=&#34;radio-rich&#34;&gt;
  &lt;label class=&#34;fr-label&#34; for=&#34;radio-rich-1&#34;&gt;
      Libellé bouton radio
  &lt;/label&gt;
  &lt;div class=&#34;fr-radio-rich__pictogram&#34;&gt;
      &lt;svg aria-hidden=&#34;true&#34; class=&#34;fr-artwork&#34; viewBox=&#34;0 0 80 80&#34; width=&#34;80px&#34; height=&#34;80px&#34;&gt;
          &lt;use class=&#34;fr-artwork-decorative&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative&#34;&gt;&lt;/use&gt;
          &lt;use class=&#34;fr-artwork-minor&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor&#34;&gt;&lt;/use&gt;
          &lt;use class=&#34;fr-artwork-major&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major&#34;&gt;&lt;/use&gt;
      &lt;/svg&gt;
  &lt;/div&gt;
&lt;/div&gt;
```
Remplacer buildings/city-hall par la catégorie et le nom du pictogramme désiré

BREAKING CHANGE : `fr-radio-rich__img` devient `fr-radio-rich__pictogram`


#### 📝 doc(core): corrige les liens vers les pages de documentation des fondamentaux [(#623)](https://github.com/GouvernementFR/dsfr/pull/623)
- Mise à jour des liens vers les fondamentaux sur le site de documentation


#### ⬆️ chore(dependencies): met a jour les dépendances Node [(#622)](https://github.com/GouvernementFR/dsfr/pull/622)
- Mise à jour de sécurité


#### ✨ feat(card): image des cartes de téléchargement format a4 [(#620)](https://github.com/GouvernementFR/dsfr/pull/620)
- Ajout d&#39;une image de placeholder au format a4 (21x29.7)


#### 🐛 fix(core): corrige liens pour retro-compat sur firefox [(#615)](https://github.com/GouvernementFR/dsfr/pull/615)
- La fonction css max(), mise en place pour corriger le bug d&#39;affichage d&#39;un soulignement d&#39;une épaisseur inférieure à 1px, est supportée à partir de la version 78 de firefox, ce qui est insuffisant.
- Le précédent bug est maintenant corrigé avec un léger épaississement du trait sur firefox (0.25px)


#### 🐛 fix(header, navigation): focus des nav-items mobile &amp; ajustements [(#609)](https://github.com/GouvernementFR/dsfr/pull/609)
- L&#39;outline de focus est maintenant entièrement visible sur les liens des sous menu en mobile
- Ajustement de l&#39;alignement du bouton fermé en desktop
- Retrait du mega-menu__leader vide dans les examples


#### ✨ feat(pagination): évolution taille et écart des boutons [(#549)](https://github.com/GouvernementFR/dsfr/pull/549)
Harmonisation de l&#39;espacement entre les boutons de pagination :
- L&#39;espacement passe à 16px entre tous les boutons
- Les boutons passent en taille SM


#### 🐛 fix(core, modal): décalage scrollbar à l&#39;ouverture/fermeture modale &amp; fix scroll behavior [(#519)](https://github.com/GouvernementFR/dsfr/pull/519)
Lorsque la page est scrollable, un décalage se produit à l&#39;ouverture d&#39;une modal (la page étant figé elle n&#39;est plus scrollable).

Une marge est donc appliquée à l&#39;ouverture de la modale pour simuler la barre de scroll et ainsi éviter le mouvement du contenu en arrière plan.


#### ♻️ refactor(radio,checkbox,toggle): passage input en bleu et refactorisation [(#502)](https://github.com/GouvernementFR/dsfr/pull/502)
Uniformisation des champs à cocher toggle/radio/checkbox

toggle:
- Ajout des variants toggle error/valid
- Retrait du css sur input `appearance:none` 
- bordure en background svg
- le toggle est maintenant placé dans un fieldset

radio:
- Le contour devient bleu
- retrait du fond blanc du radio bouton (transparence)
- input déssiné en background image

radio-rich: 
- L&#39;outline au focus englobe tout le radio-riche, plus l&#39;input

checkbox:
- Le contour devient bleu
- correction changement d&#39;état au mouse-down (:active), maintenant au mouse up

Form: 
- les hint-text des champs désactivés passent en couleur `--text-disabled-grey`


#### ✨ feat(core): ouverture des disclosures à partir des ancres, état disabled désactive disclosure [(#532)](https://github.com/GouvernementFR/dsfr/pull/532)
- Correctif de l&#39;état disabled sur les boutons associés à une modale, un onglet ou un accordéon. La fonctionnalité d&#39;ouverture est désactivée si les boutons primaires sont désactivés.
- Ajout de la fonctionnalité d&#39;ouverture d&#39;une modale, d&#39;un onglet ou d&#39;un accordéon si la partie ancre de l&#39;url correspond à l&#39;id de l&#39;élément -&gt; les liens d&#39;évitements peuvent ouvrir le menu et la recherche en mobile.


#### 🐛 fix(tab): écoute des événements de clavier déplacé sur la liste d&#39;onglets [(#531)](https://github.com/GouvernementFR/dsfr/pull/531)
L&#39;écoute des événements de clavier se faisant sur le composant, il est impossible d&#39;interagir avec des éléments de formulaire dans le contenu de l&#39;onglet -&gt; l&#39;écoute est déplacée au niveau de la liste des onglets, ce qui en exclut le contenu


#### ✨ feat(name): ajout bouton de suppression de prénom [(#493)](https://github.com/GouvernementFR/dsfr/pull/493)
Dans le modèle de de bloc nom/prénom, un bouton permet d&#39;ajouter des champs de saisie pour les prénoms secondaires -&gt; ajout d&#39;un bouton permettant de supprimer ces champs ajoutés


#### ✨ feat(tile): Ajout icône flèche, état désactivé, icone lien externe, tuile de téléchargement [(#602)](https://github.com/GouvernementFR/dsfr/pull/602)
Les tuiles peuvent maintenant être de type téléchargement (comme les cartes)
  - Les tuiles de téléchargement sont par défaut horizontales
  - Le détail de la tuile de téléchargement est obligatoire et il peut être rempli automatiquement en fonction du fichier à télécharger en plaçant à l&#39;attribut &#34;data-fr-assess-file&#34; sur le lien (comme pour carte)

Les tuiles ont maintenant par défaut une icone.
  - arrow-right (par défaut)
  - external-link (en target=&#34;_blank&#34;)
  - download (avec la classe fr-tile--download)

Les tuiles désactivées (a sans href) ont à présent:
  - la bordure bottom en grise
  - l&#39;icone et le titre en gris
  
Ajout des classes &#34;fr-tile--vertical@md&#34; et  &#34;fr-tile--vertical@lg&#34; pour passer une tuile horizontale, ou download, en vertical à partir des breakpoints md et lg


#### 🎉 feat(tile): évolution des tuiles [(#534)](https://github.com/GouvernementFR/dsfr/pull/534)
**Evolution majeur du composant Tuile :**
Nous souhaitons revoir la structure html de la tuile pour étendre les variations de contenu (avec détails, badge, etc), et uniformiser avec les comportements de la Carte (card).

Changements apportés :
- Ajout d&#39;un niveau d&#39;encapsulation dans la structure html
  - Ajout d&#39;un wrapper &#34;fr-tile__content&#34; pour englober le contenu
  - Ajout d&#39;un wrapper &#34;fr-tile__header&#34; pour englober l&#39;image
- L&#39;image des tuiles est remplacée par un pictogramme
  - La classe &#34;fr-tile__img&#34; devient &#34;fr-tile__pictogram&#34; 
  - Son contenu est maintenant un svg &#34;fr-artwork&#34;
- Ajout de la possibilité de placer un badge, un tag, un texte de détail, dans le contenu de la tuile
- Ajout d&#39;une taille de tuile SM : &#34;fr-tile--sm&#34;

**⚠️ Breaking Change**
Le snippet de code d&#39;une tuile : 
```html
&lt;div class=&#34;fr-tile fr-enlarge-link&#34;&gt;
    &lt;div class=&#34;fr-tile__body&#34;&gt;
        &lt;h4 class=&#34;fr-tile__title&#34;&gt;
            &lt;a class=&#34;fr-tile__link&#34; href&gt;Titre M bold&lt;/a&gt;
        &lt;/h4&gt;
        &lt;p class=&#34;fr-tile__desc&#34;&gt;Texte M regular 2 lignes max&lt;/p&gt;
   &lt;/div&gt;
   &lt;div class=&#34;fr-tile__img&#34;&gt;
       &lt;img class=&#34;fr-responsive-img&#34; src=&#34;../../../example/img/placeholder.1x1.png&#34; alt=&#34;&#34; /&gt;
       &lt;!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance --&gt;
    &lt;/div&gt;
&lt;/div&gt;
```

Devient : 
```html
&lt;div class=&#34;fr-tile fr-enlarge-link&#34; id=&#34;tile-6584&#34;&gt;
    &lt;div class=&#34;fr-tile__body&#34;&gt;
        &lt;div class=&#34;fr-tile__content&#34;&gt;
            &lt;h3 class=&#34;fr-tile__title&#34;&gt;
                &lt;a href=&#34;#&#34;&gt;Intitulé de la tuile&lt;/a&gt;
            &lt;/h3&gt;
            &lt;p class=&#34;fr-tile__desc&#34;&gt;Lorem [...] elit ut.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&#34;fr-tile__header&#34;&gt;
        &lt;div class=&#34;fr-tile__pictogram&#34;&gt;
            &lt;svg aria-hidden=&#34;true&#34; class=&#34;fr-artwork&#34; viewBox=&#34;0 0 80 80&#34; width=&#34;80px&#34; height=&#34;80px&#34;&gt;
                &lt;use class=&#34;fr-artwork-decorative&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative&#34;&gt;&lt;/use&gt;
                &lt;use class=&#34;fr-artwork-minor&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor&#34;&gt;&lt;/use&gt;
                &lt;use class=&#34;fr-artwork-major&#34; href=&#34;../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major&#34;&gt;&lt;/use&gt;
            &lt;/svg&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
```


#### 🚚 refactor(download): séparation du download en carte et lien [(#487)](https://github.com/GouvernementFR/dsfr/pull/487)
Pour mutualiser les comportements de la carte et du lien au composant download, celui-ci doit devenir une variante de ces composants et non pas l&#39;inverse.

Retrait du composant : téléchargement de fichier - Download -&gt; déprécié
Ajout de la variante de carte : fr-card--download 
Ajout de la variante de lien : fr-link--download 

Le lien de téléchargement : 
```html
&lt;div class=&#34;fr-download&#34;&gt;
    &lt;h3&gt;
        &lt;a href=&#34;[À MODIFIER - /example/img/image.jpg]&#34; download class=&#34;fr-download__link&#34;&gt;Télécharger le document lorem ipsum sit dolores amet
            &lt;span class=&#34;fr-download__detail&#34;&gt;
                JPG – 61,88 ko
            &lt;/span&gt;
        &lt;/a&gt;
    &lt;/h3&gt;
&lt;/div&gt;
```
DEVIENT : 
```html
&lt;a class=&#34;fr-link fr-link--download&#34; download href=&#34;[À MODIFIER - example/img/image.jpg]&#34;&gt;
    Télécharger le document lorem ipsum sit dolores amet &lt;span class=&#34;fr-link__detail&#34;&gt;JPG – 61,88 ko&lt;/span&gt;
&lt;/a&gt;
```

et la carte de téléchargement : 
```html
&lt;div class=&#34;fr-download fr-enlarge-link fr-download--card&#34;&gt;
    &lt;h3&gt;
        &lt;a href=&#34;[À MODIFIER - example/img/image.jpg]&#34; download class=&#34;fr-download__link&#34;&gt;Télécharger le document lorem ipsum sit dolores amet
            &lt;span class=&#34;fr-download__detail&#34;&gt;
                JPG – 61,88 ko
            &lt;/span&gt;
        &lt;/a&gt;
    &lt;/h3&gt;
    &lt;p class=&#34;fr-download__desc&#34;&gt;Texte de description&lt;&lt;/p&gt;
&lt;/div&gt;
```
DEVIENT : 
```html
&lt;div class=&#34;fr-card fr-enlarge-link fr-card--download&#34;&gt;
    &lt;div class=&#34;fr-card__body&#34;&gt;
        &lt;div class=&#34;fr-card__content&#34;&gt;
            &lt;h3 class=&#34;fr-card__title&#34;&gt;
                &lt;a download href=&#34;[À MODIFIER - example/img/image.jpg]&#34;&gt;
                    Télécharger le document lorem ipsum sit dolores amet
                &lt;/a&gt;
            &lt;/h3&gt;
            &lt;p class=&#34;fr-card__desc&#34;&gt;Texte de description&lt;/p&gt;
            &lt;div class=&#34;fr-card__end&#34;&gt;
                &lt;p class=&#34;fr-card__detail&#34;&gt;JPG – 61,88 ko&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
```

BREAKING CHANGE : Remplacer le composant fr-download par la variante de link fr-link--download et remplacer le composant fr-download--card par une carte fr-card--download




## v1.8

### [v1.8.5](https://github.com/GouvernementFR/dsfr/compare/v1.8.4...v1.8.5) - 28 Novembre 2022

#### fix(tag): correction régression lien tag [(#480)](https://github.com/GouvernementFR/dsfr/pull/480)


#### fix(transcription): correction de la pleine largeur du composant [(#483)](https://github.com/GouvernementFR/dsfr/pull/483)



### [v1.8.4](https://github.com/GouvernementFR/dsfr/compare/v1.8.3...v1.8.4) - 15 Novembre 2022

#### fix(footer): correction sur le séparateur bleu du pied de page [(#465)](https://github.com/GouvernementFR/dsfr/pull/465)


#### fix(transcription): correction sur la présence du titre de la modale [(#466)](https://github.com/GouvernementFR/dsfr/pull/466)



### [v1.8.3](https://github.com/GouvernementFR/dsfr/compare/v1.8.2...v1.8.3) - 15 Novembre 2022

#### fix(link): correction régression icône à droite sur les éléments interactifs [(#461)](https://github.com/GouvernementFR/dsfr/pull/461)



### [v1.8.2](https://github.com/GouvernementFR/dsfr/compare/v1.8.1...v1.8.2) - 9 Novembre 2022

#### fix(global): fix build, lint, clean [(#456)](https://github.com/GouvernementFR/dsfr/pull/456)


#### fix(display): correctif duplication du sélecteur de langue [(#454)](https://github.com/GouvernementFR/dsfr/pull/454)


#### feat(pagination): border active sur version constrasté [(#436)](https://github.com/GouvernementFR/dsfr/pull/436)


#### fix(toggle): bug IE label et statut actif [(#443)](https://github.com/GouvernementFR/dsfr/pull/443)


#### fix(tag): déplacement du focus sur les tags supprimables [(#453)](https://github.com/GouvernementFR/dsfr/pull/453)


#### fix(transcription): titre du contenu (a11y) [(#452)](https://github.com/GouvernementFR/dsfr/pull/452)


#### fix(core, download): correction du enlarge link [(#451)](https://github.com/GouvernementFR/dsfr/pull/451)


#### fix(download): titre des cartes en h3 [(#449)](https://github.com/GouvernementFR/dsfr/pull/449)


#### fix(scheme): ajout du scheme-boot permettant d&#39;éliminer le flash au load de la page en dark mode [(#455)](https://github.com/GouvernementFR/dsfr/pull/455)


#### fix(scheme): correctifs de l&#39;API JS de couleur [(#448)](https://github.com/GouvernementFR/dsfr/pull/448)


#### fix(form): ajout du css deprecated legacy [(#439)](https://github.com/GouvernementFR/dsfr/pull/439)


#### feat(pattern): form autocomplete [(#425)](https://github.com/GouvernementFR/dsfr/pull/425)


#### chore: incrementation du numéro de version



### [v1.8.1](https://github.com/GouvernementFR/dsfr/compare/v1.8.0...v1.8.1) - 27 Octobre 2022

#### fix(scheme): correctif thème sombre (fix #440) [(#442)](https://github.com/GouvernementFR/dsfr/pull/442)



### [v1.8.0](https://github.com/GouvernementFR/dsfr/compare/v1.7.3...v1.8.0) - 27 Octobre 2022

#### fix(header): retrait du log de la documentation dans la console [(#524)](https://github.com/GouvernementFR/dsfr/pull/524)


#### fix(form): correction accessiblité des formulaires [(#438)](https://github.com/GouvernementFR/dsfr/pull/438)


#### feat(nationality): pattern nationalité [(#426)](https://github.com/GouvernementFR/dsfr/pull/426)


#### fix(quote): couleur du texte quote__sources [(#437)](https://github.com/GouvernementFR/dsfr/pull/437)


#### fix(form, upload): error &amp; disabled [(#428)](https://github.com/GouvernementFR/dsfr/pull/428)


#### fix(tag): correction tag selectionnable hover [(#430)](https://github.com/GouvernementFR/dsfr/pull/430)


#### fix(connect): correction wording &#34;qu&#39;est-ce que france connect&#34; [(#431)](https://github.com/GouvernementFR/dsfr/pull/431)


#### fix(accordion): correction token de couleur [(#432)](https://github.com/GouvernementFR/dsfr/pull/432)


#### feat(api): ajout d&#39;événements sur le scheme [(#434)](https://github.com/GouvernementFR/dsfr/pull/434)


#### feat(api): ajoute la class Colors [(#424)](https://github.com/GouvernementFR/dsfr/pull/424)


#### refactor(pattern,page): réagencement des modèles de bloc et de page [2625,2628,2631,2634,2643,2649,2655,2666,2670] #423


#### fix(tile, summary, sidemenu): niveau de titre des composants [(#420)](https://github.com/GouvernementFR/dsfr/pull/420)


#### feat(transcription): ajoute le composant transcription [(#412)](https://github.com/GouvernementFR/dsfr/pull/412)


#### fix(doc): met a jour les urls de documentation [(#413)](https://github.com/GouvernementFR/dsfr/pull/413)


#### fix(tabs): Ouverture de modal à l&#39;intérieur d&#39;un composant onglet [(#405)](https://github.com/GouvernementFR/dsfr/pull/405)


#### fix(sidemenu): sidemenu disparait à l&#39;ouverture modale FF [(#406)](https://github.com/GouvernementFR/dsfr/pull/406)


#### fix(page): ajustement des imbrications de container [(#417)](https://github.com/GouvernementFR/dsfr/pull/417)


#### fix(footer): bordure bleu inset &amp; logo toujours aligné en haut [(#410)](https://github.com/GouvernementFR/dsfr/pull/410)


#### fix(response): met a jour les espacements des pages erreur [(#402)](https://github.com/GouvernementFR/dsfr/pull/402)


#### fix(response): Mise à jour des path des pictogrammes [(#400)](https://github.com/GouvernementFR/dsfr/pull/400)


#### fix(password): correction template password [(#399)](https://github.com/GouvernementFR/dsfr/pull/399)


#### feat(account, register, login): ajout de modèles de page de connexion et création de compte [(#403)](https://github.com/GouvernementFR/dsfr/pull/403)


#### Feat(pattern): ajoute le modele de date unique [(#396)](https://github.com/GouvernementFR/dsfr/pull/396)


#### feat(society): Ajout du pattern société [(#415)](https://github.com/GouvernementFR/dsfr/pull/415)


#### feat(address): Ajout du pattern adresse [(#398)](https://github.com/GouvernementFR/dsfr/pull/398)


#### refactor(form): Ajout des fr-control et correction des pattern civility &amp; name [(#401)](https://github.com/GouvernementFR/dsfr/pull/401)


#### feat(password): ajout du composant mot de passe [(#391)](https://github.com/GouvernementFR/dsfr/pull/391)


#### feat(artwork): ajout de pictogrammes à la librairie [(#375)](https://github.com/GouvernementFR/dsfr/pull/375)


#### feat(pattern): ajoute le modele de civilite [(#355)](https://github.com/GouvernementFR/dsfr/pull/355)


#### feat(pattern): ajoute le modele de nom et prenom [(#356)](https://github.com/GouvernementFR/dsfr/pull/356)


#### refactor(input): Séparation en sous composant d&#39;input, ajout de input-email et input-tel [(#363)](https://github.com/GouvernementFR/dsfr/pull/363)


#### feat(global): évolution global pour les modèles de bloc et de page


#### feat(page-unexpected): ajoute le modele de page erreur inattendue [(#383)](https://github.com/GouvernementFR/dsfr/pull/383)




## v1.7

### [v1.7.3](https://github.com/GouvernementFR/dsfr/compare/v1.7.2...v1.7.3) - 2 Février 2023

#### fix(header): retrait du log de la documentation dans la console [(#524)](https://github.com/GouvernementFR/dsfr/pull/524)



### [v1.7.2](https://github.com/GouvernementFR/dsfr/compare/v1.7.1...v1.7.2) - 29 Juillet 2022

#### fix(global): ajout des dossiers &#34;standalone&#34; et &#34;i18n&#34; au package.json


#### fix(global): Ajout du dossier &#34;module&#34;



### [v1.7.1](https://github.com/GouvernementFR/dsfr/compare/v1.7.0...v1.7.1) - 25 Juillet 2022

#### fix(elevation): legacy z-index [(#384)](https://github.com/GouvernementFR/dsfr/pull/384)



### [v1.7.0](https://github.com/GouvernementFR/dsfr/compare/v1.6.0...v1.7.0) - 21 Juillet 2022

#### fix(module): correction lint [(#382)](https://github.com/GouvernementFR/dsfr/pull/382)


#### chore(global): mis à jour des dépendances [(#381)](https://github.com/GouvernementFR/dsfr/pull/381)


#### fix(unavailable): ajout de la page d&#39;exemple [(#380)](https://github.com/GouvernementFR/dsfr/pull/380)


#### fix(card): correction de l&#39;aspect ratio par défaut des vidéos [(#378)](https://github.com/GouvernementFR/dsfr/pull/378)


#### fix(not-found): ajuste la template not-found [(#379)](https://github.com/GouvernementFR/dsfr/pull/379)


#### fix(card): correction aspect ratio par défaut [(#374)](https://github.com/GouvernementFR/dsfr/pull/374)


#### feat(server): Ajout page erreur serveur [(#330)](https://github.com/GouvernementFR/dsfr/pull/330)


#### feat(not-found): ajoute les modèles de page erreur 404 [(#371)](https://github.com/GouvernementFR/dsfr/pull/371)


#### fix(global): correction des erreurs pa11y [(#376)](https://github.com/GouvernementFR/dsfr/pull/376)


#### feat(translate) : Ajout du sélecteur de langue [(#359)](https://github.com/GouvernementFR/dsfr/pull/359)


#### fix(footer, header): généralisation de l&#39;attribut &#39;title&#39; du lien retour/accueil du logo [(#353)](https://github.com/GouvernementFR/dsfr/pull/353)


#### fix(stepper): correction barre d&#39;étape masquée sur Firefox [(#373)](https://github.com/GouvernementFR/dsfr/pull/373)


#### feat(global): évolution du système d&#39;élévation et des ombres [(#372)](https://github.com/GouvernementFR/dsfr/pull/372)


#### fix(global): Amendements sur les CGU du DSFR [(#370)](https://github.com/GouvernementFR/dsfr/pull/370)


#### feat(i18n): système i18n globalisé [(#365)](https://github.com/GouvernementFR/dsfr/pull/365)


#### fix(content, core): bug ratio vidéos ios [(#352)](https://github.com/GouvernementFR/dsfr/pull/352)


#### fix(pagination): correction couleur des liens de pagination en &#39;button&#39; [(#354)](https://github.com/GouvernementFR/dsfr/pull/354)


#### fix(global): correction standalone locale pour i18n [(#364)](https://github.com/GouvernementFR/dsfr/pull/364)


#### fix(core): correction du sens de l&#39;extension du soulignement [(#350)](https://github.com/GouvernementFR/dsfr/pull/350)


#### fix(global): correction pa11y test [(#360)](https://github.com/GouvernementFR/dsfr/pull/360)


#### feat(global): module sass dsfr [(#358)](https://github.com/GouvernementFR/dsfr/pull/358)


#### feat(global): multiplication des pages d&#39;exemple et internationalisation [(#357)](https://github.com/GouvernementFR/dsfr/pull/357)




## v1.6

### [v1.6.0](https://github.com/GouvernementFR/dsfr/compare/v1.5.2...v1.6.0) - 14 Juin 2022

#### fix(core): correction de l&#39;épaisseur du soulignement des liens [(#346)](https://github.com/GouvernementFR/dsfr/pull/346)


#### feat(core): mise à disposition de state et stage dans l&#39;api js [(#345)](https://github.com/GouvernementFR/dsfr/pull/345)


#### fix(core): correction du fond du svg - faux positif PA11Y [(#343)](https://github.com/GouvernementFR/dsfr/pull/343)


#### fix(core): correction du soulignement des liens [(#344)](https://github.com/GouvernementFR/dsfr/pull/344)


#### fix(core): correction du text-decoration sur les liens pour les version antérieures [(#342)](https://github.com/GouvernementFR/dsfr/pull/342)


#### fix(card): correctif des tailles fixes des cartes horizontales [(#338)](https://github.com/GouvernementFR/dsfr/pull/338)


#### fix(core): suppression de l&#39;icône lien extérieur sur une balise form [(#340)](https://github.com/GouvernementFR/dsfr/pull/340)


#### fix(core): suppression de l&#39;icône lien extérieur sur une balise form [(#339)](https://github.com/GouvernementFR/dsfr/pull/339)


#### fix(global): stylelint [(#337)](https://github.com/GouvernementFR/dsfr/pull/337)


#### fix(follow, share): ajout texte explicatif icones RS disponibles [(#331)](https://github.com/GouvernementFR/dsfr/pull/331)


#### fix(core,link,button,tag,card): correctif icône lien extérieur [(#333)](https://github.com/GouvernementFR/dsfr/pull/333)


#### fix(icons): correctif depreciation fr-fi-checkbox-circle-line [(#334)](https://github.com/GouvernementFR/dsfr/pull/334)


#### fix(navigation): correctif focus au clic sur les liens [(#336)](https://github.com/GouvernementFR/dsfr/pull/336)


#### fix(header): correctif espacement liens rapides [(#335)](https://github.com/GouvernementFR/dsfr/pull/335)


#### fix(stepper): cache le détail de la dernière étape en css [(#329)](https://github.com/GouvernementFR/dsfr/pull/329)


#### fix(table): bug ios bordures qui n&#39;apparaissent pas [(#332)](https://github.com/GouvernementFR/dsfr/pull/332)


#### feat(global): mise en place de l&#39;injection du code dans le html [(#327)](https://github.com/GouvernementFR/dsfr/pull/327)


#### fix(link): correctif lien multiligne [(#322)](https://github.com/GouvernementFR/dsfr/pull/322)


#### fix(share,, follow): ajout icones réseau sociaux [(#324)](https://github.com/GouvernementFR/dsfr/pull/324)


#### fix(follow): correctif de la version legacy deprecated [(#326)](https://github.com/GouvernementFR/dsfr/pull/326)


#### chore(deps): mise à jour des dépendances [(#325)](https://github.com/GouvernementFR/dsfr/pull/325)


#### feat(stepper): ajout du composant indicateur d&#39;étapes [(#319)](https://github.com/GouvernementFR/dsfr/pull/319)


#### feat(artwork): ajout des pictogrammes illustratifs [(#317)](https://github.com/GouvernementFR/dsfr/pull/317)


#### refactor(core, card, content): ajout utilitaire fr-ratio et aspect-ratio des content img &amp; vid [(#316)](https://github.com/GouvernementFR/dsfr/pull/316)


#### feat(notice): Ajout du composant bandeau d&#39;information [(#302)](https://github.com/GouvernementFR/dsfr/pull/302)


#### fix(download):  couleur puce groupe de lien de téléchargement [(#313)](https://github.com/GouvernementFR/dsfr/pull/313)


#### chore(global): migration vers sass dart [(#310)](https://github.com/GouvernementFR/dsfr/pull/310)


#### refactor(global): implémentation du positionnement des icônes en inline [(#320)](https://github.com/GouvernementFR/dsfr/pull/320)


#### refactor(header, link, button, follow, share, tag, badge): correction espacements des groupes [(#311)](https://github.com/GouvernementFR/dsfr/pull/311)


#### fix(sidemenu): changement balise du titre [(#290)](https://github.com/GouvernementFR/dsfr/pull/290)


#### fix(follow): correction link icon déprecié [(#306)](https://github.com/GouvernementFR/dsfr/pull/306)


#### fix(follow): correction link icon déprecié [(#301)](https://github.com/GouvernementFR/dsfr/pull/301)


#### fix(core): correction de l&#39;implémentation de $DIST-PATH [(#300)](https://github.com/GouvernementFR/dsfr/pull/300)


#### chore: suppression de node-sass-magic-importer [(#279)](https://github.com/GouvernementFR/dsfr/pull/279)




## v1.5

### [v1.5.2](https://github.com/GouvernementFR/dsfr/compare/v1.5.1...v1.5.2) - 14 Juin 2022

#### fix(core): correction de l&#39;épaisseur du soulignement des liens [(#346)](https://github.com/GouvernementFR/dsfr/pull/346)


#### fix(core): correction du soulignement des liens [(#344)](https://github.com/GouvernementFR/dsfr/pull/344)


#### fix(core): correction du text-decoration sur les liens pour les version antérieures [(#342)](https://github.com/GouvernementFR/dsfr/pull/342)


#### fix(core): suppression de l&#39;icône lien extérieur sur une balise form [(#339)](https://github.com/GouvernementFR/dsfr/pull/339)


#### fix(link): correctif lien multiligne [(#322)](https://github.com/GouvernementFR/dsfr/pull/322)


#### fix(follow): correction link icon déprecié [(#301)](https://github.com/GouvernementFR/dsfr/pull/301)



### [v1.5.1](https://github.com/GouvernementFR/dsfr/compare/v1.5.0...v1.5.1) - 26 Avril 2022

#### docs(utility): description et liens vers la documentation [(#299)](https://github.com/GouvernementFR/dsfr/pull/299)


#### fix(icons-system): correction lint [(#298)](https://github.com/GouvernementFR/dsfr/pull/298)


#### fix(icons): icônes dépréciées de la v1.4.0 [(#297)](https://github.com/GouvernementFR/dsfr/pull/297)


#### fix(core, utility): icones dépréciées [(#296)](https://github.com/GouvernementFR/dsfr/pull/296)


#### fix(download): correction erreur js legacy [(#292)](https://github.com/GouvernementFR/dsfr/pull/292)


#### fix(dsfr-deprecated): correction du nom de fichier sur le js legacy [(#295)](https://github.com/GouvernementFR/dsfr/pull/295)



### [v1.5.0](https://github.com/GouvernementFR/dsfr/compare/v1.4.3...v1.5.0) - 21 Avril 2022

#### fix(core): correction soulignement des liens [(#348)](https://github.com/GouvernementFR/dsfr/pull/348)


#### fix(core): suppression de l&#39;icône lien extérieur sur une balise form [(#341)](https://github.com/GouvernementFR/dsfr/pull/341)


#### fix(link): retrait du soulignement des icônes


#### fix(global): retour au soulignement natif pour les liens


#### fix(download): titre groupe de liens en classe BEM [(#289)](https://github.com/GouvernementFR/dsfr/pull/289)


#### fix: contributing.md et readme.md 1.5.0 [(#286)](https://github.com/GouvernementFR/dsfr/pull/286)


#### fix: correctif icon alert et globale [(#287)](https://github.com/GouvernementFR/dsfr/pull/287)


#### fix(legacy): media query legacy manquante [(#285)](https://github.com/GouvernementFR/dsfr/pull/285)


#### fix(download): retrait exemple groupe sm [(#284)](https://github.com/GouvernementFR/dsfr/pull/284)


#### fix(download,card): transpilation async et commentaire [(#283)](https://github.com/GouvernementFR/dsfr/pull/283)


#### refactor(icon): Ajouts nouvelles icones &amp; séparation en familles [(#280)](https://github.com/GouvernementFR/dsfr/pull/280)


#### feat(download): Ajout du composant téléchargement de fichier [(#272)](https://github.com/GouvernementFR/dsfr/pull/272)


#### fix(connect): correction de la variable de build isStandalone [(#281)](https://github.com/GouvernementFR/dsfr/pull/281)


#### fix(card): typo dans l&#39;exemple grille [(#282)](https://github.com/GouvernementFR/dsfr/pull/282)


#### fix(input): correction icone date [(#276)](https://github.com/GouvernementFR/dsfr/pull/276)


#### feat(header): bandeau de site en beta [(#269)](https://github.com/GouvernementFR/dsfr/pull/269)


#### fix(footer): alignement des logos partenaires [(#277)](https://github.com/GouvernementFR/dsfr/pull/277)


#### chore: suppression de node-sass-json-importer [(#278)](https://github.com/GouvernementFR/dsfr/pull/278)


#### fix(accordion) icone moins n&#39;apparait plus [(#275)](https://github.com/GouvernementFR/dsfr/pull/275)


#### feat(card): ajout de la fonctionnalité card v2 [(#270)](https://github.com/GouvernementFR/dsfr/pull/270)


#### fix(connect): retrait import json &amp; ajout rel noopener [(#273)](https://github.com/GouvernementFR/dsfr/pull/273)


#### fix(global): mise à jour des dépendances [(#274)](https://github.com/GouvernementFR/dsfr/pull/274)


#### feat(button): changement de la taille des boutons (padding) [(#266)](https://github.com/GouvernementFR/dsfr/pull/266)


#### fix(core): correction liste à puce sur android [(#268)](https://github.com/GouvernementFR/dsfr/pull/268)


#### fix(global): restitution des icones en background + mask [(#256)](https://github.com/GouvernementFR/dsfr/pull/256)


#### fix(core): bug checkbox NVDA - correction du reset appearance [(#252)](https://github.com/GouvernementFR/dsfr/pull/252)


#### refactor(connect): généralisation du build du standalone [(#255)](https://github.com/GouvernementFR/dsfr/pull/255)




## v1.4

### [v1.4.3](https://github.com/GouvernementFR/dsfr/compare/v1.4.2...v1.4.3) - 14 Juin 2022

#### fix(core): correction soulignement des liens [(#348)](https://github.com/GouvernementFR/dsfr/pull/348)



### [v1.4.2](https://github.com/GouvernementFR/dsfr/compare/v1.4.1...v1.4.2) - 13 Juin 2022

#### fix(core): suppression de l&#39;icône lien extérieur sur une balise form [(#341)](https://github.com/GouvernementFR/dsfr/pull/341)


#### fix(link): retrait du soulignement des icônes


#### fix(global): retour au soulignement natif pour les liens



### [v1.4.1](https://github.com/GouvernementFR/dsfr/compare/v1.4.0...v1.4.1) - 29 Mars 2022

#### fix(connect): correction du titre du lien


#### fix(tag): correction tag activable sm et dans un group sm [(#258)](https://github.com/GouvernementFR/dsfr/pull/258)


#### fix(connect): retrait description &amp; ajout target blank [(#261)](https://github.com/GouvernementFR/dsfr/pull/261)


#### fix(follow): correction de la dépréciation pour être plus générique [(#257)](https://github.com/GouvernementFR/dsfr/pull/257)


#### fix(connect): libelle FranceConnect attaché [(#260)](https://github.com/GouvernementFR/dsfr/pull/260)



### [v1.4.0](https://github.com/GouvernementFR/dsfr/compare/v1.3.1...v1.4.0) - 16 Mars 2022

#### fix(display): correction et support des versions dépréciées [(#247)](https://github.com/GouvernementFR/dsfr/pull/247)


#### fix(header,follow,content): retours dépréciation [(#241)](https://github.com/GouvernementFR/dsfr/pull/241)


#### fix(sidemenu): correction hauteur &amp; scroll sidemenu sticky [(#243)](https://github.com/GouvernementFR/dsfr/pull/243)


#### fix(navigation): correction affichage mega-menu [(#242)](https://github.com/GouvernementFR/dsfr/pull/242)


#### fix(connect): correction taille du lien en sm [(#239)](https://github.com/GouvernementFR/dsfr/pull/239)


#### feat(global): mise en place de la stratégie de dépréciation des composants [(#237)](https://github.com/GouvernementFR/dsfr/pull/237)


#### fix: corrections des retours dev 1.4.0 [(#240)](https://github.com/GouvernementFR/dsfr/pull/240)


#### fix(connect): retrait du hint text [(#238)](https://github.com/GouvernementFR/dsfr/pull/238)


#### feat(link): Ajout du lien &#34;back to top&#34; [(#233)](https://github.com/GouvernementFR/dsfr/pull/233)


#### fix(megamenu): corrige erreur js en mode no-module [(#226)](https://github.com/GouvernementFR/dsfr/pull/226)


#### fix(collapse): corrige le collapse multi-navigateurs [(#227)](https://github.com/GouvernementFR/dsfr/pull/227)


#### fix: templates plus paramétrables [(#221)](https://github.com/GouvernementFR/dsfr/pull/221)


#### feat(footer): ajout d&#39;un sample de footer paramétrable [(#215)](https://github.com/GouvernementFR/dsfr/pull/215)


#### fix(sidemenu): correction hauteur sidemenu sticky [(#223)](https://github.com/GouvernementFR/dsfr/pull/223)


#### fix(modal): &lt;dialog&gt; masqué en no-css [(#230)](https://github.com/GouvernementFR/dsfr/pull/230)


#### fix(tab): correction z-index des tab-panels [(#232)](https://github.com/GouvernementFR/dsfr/pull/232)


#### fix: margin bottom des textes et titres en css prop [(#229)](https://github.com/GouvernementFR/dsfr/pull/229)


#### feat(core): ajout d&#39;icones [(#231)](https://github.com/GouvernementFR/dsfr/pull/231)


#### refactor(global): soulignement des liens et ajout des boutons tertiaires [(#234)](https://github.com/GouvernementFR/dsfr/pull/234)


#### feat(connect): ajout description et lien france connect [(#224)](https://github.com/GouvernementFR/dsfr/pull/224)


#### fix(core, tab, modal, button): injection js de styles en variables css [(#225)](https://github.com/GouvernementFR/dsfr/pull/225)


#### feat(core): variabilisation du core [(#212)](https://github.com/GouvernementFR/dsfr/pull/212)


#### feat(dependencies): mise a jour des dépendances node mineures [(#228)](https://github.com/GouvernementFR/dsfr/pull/228)


#### feat(connect): Ajout de la fonctionnalité FranceConnect [(#211)](https://github.com/GouvernementFR/dsfr/pull/211)


#### fix(toggle, modal): correction z-index de toggle [(#213)](https://github.com/GouvernementFR/dsfr/pull/213)


#### fix(accordion): a11y retrait des ul li du groupe d&#39;accordéon [(#214)](https://github.com/GouvernementFR/dsfr/pull/214)


#### fix(core): nouvelle fonte Marianne avec correction de l&#39;alignement [(#169)](https://github.com/GouvernementFR/dsfr/pull/169)




## v1.3

### [v1.3.1](https://github.com/GouvernementFR/dsfr/compare/v1.3.0...v1.3.1) - 7 Février 2022

#### fix(toggle): correction de l&#39;état précoché de l&#39;interrupteur [(#210)](https://github.com/GouvernementFR/dsfr/pull/210)


#### fix(navigation, sidemenu): correction focus coupés [(#204)](https://github.com/GouvernementFR/dsfr/pull/204)


#### chore(deps): mise a jour des dépendances [(#209)](https://github.com/GouvernementFR/dsfr/pull/209)


#### fix(checkbox,form, radio,toggle): correction de la gestion de l&#39;attribut checked et de la page d&#39;exemple de form [(#208)](https://github.com/GouvernementFR/dsfr/pull/208)


#### fix(core): correction de la mixin has-icon et has-not-icon [(#205)](https://github.com/GouvernementFR/dsfr/pull/205)


#### fix(core): faute dans le texte alternatif [(#206)](https://github.com/GouvernementFR/dsfr/pull/206)


#### fix(core): ordre media query


#### fix(doc): met a jour la doc des templates ejs [(#171)](https://github.com/GouvernementFR/dsfr/pull/171)


#### fix(checkbox,radio,toggle): ajout de l&#39;attribut checked [(#198)](https://github.com/GouvernementFR/dsfr/pull/198)


#### fix: ordre des media query au build css [(#202)](https://github.com/GouvernementFR/dsfr/pull/202)


#### fix(core): correction font-icon descent [(#201)](https://github.com/GouvernementFR/dsfr/pull/201)


#### refactor(alert): alerte dynamique refermable [(#199)](https://github.com/GouvernementFR/dsfr/pull/199)


#### feat(alert): ajout exemple dynamique [(#194)](https://github.com/GouvernementFR/dsfr/pull/194)


#### refactor(core): standardisation des icones [(#196)](https://github.com/GouvernementFR/dsfr/pull/196)


#### fix(checkbox): exemple checkbox sup et sub [(#197)](https://github.com/GouvernementFR/dsfr/pull/197)


#### feat(core): ajout du module font-swap [(#195)](https://github.com/GouvernementFR/dsfr/pull/195)


#### fix(toggle): status width [(#193)](https://github.com/GouvernementFR/dsfr/pull/193)


#### fix(toggle, modal): patch 1.3.1 - status width &amp; modal icon aria-hidden [(#192)](https://github.com/GouvernementFR/dsfr/pull/192)



### [v1.3.0](https://github.com/GouvernementFR/dsfr/compare/v1.2.1...v1.3.0) - 18 Janvier 2022

#### fix(core): icones statut &amp; remix [(#190)](https://github.com/GouvernementFR/dsfr/pull/190)


#### fix(tag): sélectionnable [(#189)](https://github.com/GouvernementFR/dsfr/pull/189)


#### fix(toggle): statut activer/desactiver a11y [(#185)](https://github.com/GouvernementFR/dsfr/pull/185)


#### fix(alert): retrait attribut role=&#39;alert&#39; et collapse [(#182)](https://github.com/GouvernementFR/dsfr/pull/182)


#### fix(radio): sup sub exemple [(#188)](https://github.com/GouvernementFR/dsfr/pull/188)


#### fix(follow): texte d&#39;erreur email &amp; centrage alignement icône erreur/valid [(#186)](https://github.com/GouvernementFR/dsfr/pull/186)


#### fix(consent): titre bandeau en h2 [(#187)](https://github.com/GouvernementFR/dsfr/pull/187)


#### chore(deps): mise a jour des dépendances [(#184)](https://github.com/GouvernementFR/dsfr/pull/184)


#### fix(link, tag, pagination, share): role &amp; aria link disabled [(#181)](https://github.com/GouvernementFR/dsfr/pull/181)


#### fix(tag): correctif js tag [(#180)](https://github.com/GouvernementFR/dsfr/pull/180)
* fix(core): correctif js

* fix(tag): correctif js


#### fix(core): correctif lint + js [(#179)](https://github.com/GouvernementFR/dsfr/pull/179)


#### feat(tag): Ajout des composants tag activable et tag supprimable [(#166)](https://github.com/GouvernementFR/dsfr/pull/166)


#### feat(badge): ajout du composant badge [(#59)](https://github.com/GouvernementFR/dsfr/pull/59)


#### feat(core): Ajout des valeurs d&#39;espacement 0.5v et 1.5v [(#174)](https://github.com/GouvernementFR/dsfr/pull/174)


#### fix: commentaire des textes alternatif des images [(#175)](https://github.com/GouvernementFR/dsfr/pull/175)


#### fix: retours d&#39;accessibilité a11y [(#176)](https://github.com/GouvernementFR/dsfr/pull/176)


#### fix(core): correctif des imports js [(#178)](https://github.com/GouvernementFR/dsfr/pull/178)


#### fix(scheme): ajoute methode de detection du localstorage [(#170)](https://github.com/GouvernementFR/dsfr/pull/170)


#### feat(icon): ajoute la nouvelle font-icon [(#168)](https://github.com/GouvernementFR/dsfr/pull/168)


#### fix(core): correctif du hover des actions [(#177)](https://github.com/GouvernementFR/dsfr/pull/177)


#### fix(radio-checkbox): met a jour le style pour les indices et exposants [(#86)](https://github.com/GouvernementFR/dsfr/pull/86)


#### feat(logo): modifie l&#39;intitulé par défaut [(#165)](https://github.com/GouvernementFR/dsfr/pull/165)


#### fix(legacy): retire les polyfills legacy du script module [(#173)](https://github.com/GouvernementFR/dsfr/pull/173)


#### fix(tab): retrait du smooth scroll [(#172)](https://github.com/GouvernementFR/dsfr/pull/172)


#### feat(tab): ajout de l&#39;ombre au scroll &amp; recentrage des boutons [(#159)](https://github.com/GouvernementFR/dsfr/pull/159)


#### fix(legacy): ie listes et marges [(#154)](https://github.com/GouvernementFR/dsfr/pull/154)


#### fix(tile): background tile [(#167)](https://github.com/GouvernementFR/dsfr/pull/167)


#### feat(tab): ajout modifieur viewport-width [(#142)](https://github.com/GouvernementFR/dsfr/pull/142)


#### fix(tab): corrige le scroll horizontal [(#89)](https://github.com/GouvernementFR/dsfr/pull/89)


#### fix(card): corrige erreur à la compilation [(#164)](https://github.com/GouvernementFR/dsfr/pull/164)


#### fix(card): bordure extérieure sur les cartes [(#162)](https://github.com/GouvernementFR/dsfr/pull/162)


#### refactor: nettoyage et simplification du système de couleur [(#160)](https://github.com/GouvernementFR/dsfr/pull/160)




## v1.2

### [v1.2.1](https://github.com/GouvernementFR/dsfr/compare/v1.2.0...v1.2.1) - 29 Novembre 2021

#### feat(modal): ajout d&#39;un attribut pour la fermeture au click [(#158)](https://github.com/GouvernementFR/dsfr/pull/158)


#### fix(modal): ajout de l&#39;attribut aria-modal [(#157)](https://github.com/GouvernementFR/dsfr/pull/157)


#### fix(header):  allègement hover bloc marque [(#155)](https://github.com/GouvernementFR/dsfr/pull/155)


#### refactor: passage du noir et du blanc dans l&#39;échelle des gris [(#156)](https://github.com/GouvernementFR/dsfr/pull/156)


#### fix(modal): accessibilité du focus [(#145)](https://github.com/GouvernementFR/dsfr/pull/145)


#### fix(card-tile): correction hover enlarge-link [(#153)](https://github.com/GouvernementFR/dsfr/pull/153)


#### fix: correction de la version minimum node [(#152)](https://github.com/GouvernementFR/dsfr/pull/152)


#### fix(sidemenu): correction du hover des liens [(#151)](https://github.com/GouvernementFR/dsfr/pull/151)


#### fix(header): corrections css pour IE, valeur initial [(#144)](https://github.com/GouvernementFR/dsfr/pull/144)


#### fix(card-tile): met a jour les noms de class d&#39;accentuation [(#147)](https://github.com/GouvernementFR/dsfr/pull/147)


#### feat(core): ajout meta theme-color dans favicon [(#148)](https://github.com/GouvernementFR/dsfr/pull/148)


#### feat(core): ajout icone filter [(#149)](https://github.com/GouvernementFR/dsfr/pull/149)


#### fix(core): bug js tab conceal [(#150)](https://github.com/GouvernementFR/dsfr/pull/150)


#### feat(sidemenu): ajoute le chevron sur le aria-expanded [(#146)](https://github.com/GouvernementFR/dsfr/pull/146)


#### fix(upload): ajout aria described [(#141)](https://github.com/GouvernementFR/dsfr/pull/141)


#### feat(yarn) : mise à jour des dépendances de développement majeures et mineures [(#143)](https://github.com/GouvernementFR/dsfr/pull/143)


#### fix: hover ajusté dans navigation, consent et summary [(#140)](https://github.com/GouvernementFR/dsfr/pull/140)


#### fix: bug legacy IE [(#139)](https://github.com/GouvernementFR/dsfr/pull/139)



### [v1.2.0](https://github.com/GouvernementFR/dsfr/compare/v1.1.0...v1.2.0) - 17 Novembre 2021

#### fix(table): correction tableau avec bordure gris [(#136)](https://github.com/GouvernementFR/dsfr/pull/136)


#### feat(tile): ajout de l&#39;accentuation en usage contrast [(#134)](https://github.com/GouvernementFR/dsfr/pull/134)


#### fix(select): ajout temporaire du chevron [(#133)](https://github.com/GouvernementFR/dsfr/pull/133)


#### chore: lint [(#132)](https://github.com/GouvernementFR/dsfr/pull/132)


#### fix(inject-svg): ajoute une methode globale sur l&#39;api pour definir legacy [(#127)](https://github.com/GouvernementFR/dsfr/pull/127)


#### fix(footer): couleur catégorie menu [(#131)](https://github.com/GouvernementFR/dsfr/pull/131)


#### fix: correction icon theme-fill [(#130)](https://github.com/GouvernementFR/dsfr/pull/130)


#### fix(footer): correction couleur des liens [(#129)](https://github.com/GouvernementFR/dsfr/pull/129)


#### fix(callout): accentuation du background [(#125)](https://github.com/GouvernementFR/dsfr/pull/125)


#### fix(radio): bordure sur la classe radio-rich__img [(#122)](https://github.com/GouvernementFR/dsfr/pull/122)


#### fix: correction hover sur lien fil du texte et card [(#128)](https://github.com/GouvernementFR/dsfr/pull/128)


#### fix(card): met a jour le modifier d&#39;accent [(#123)](https://github.com/GouvernementFR/dsfr/pull/123)


#### fix: pa11y hide disable elements &amp; fix lint dependance


#### fix(search): met à jour le reset des boutons et champs de saisie pour Safari [(#115)](https://github.com/GouvernementFR/dsfr/pull/115)


#### fix(display): corrige bouton d&#39;affichage et bug a la selection du mode [(#119)](https://github.com/GouvernementFR/dsfr/pull/119)


#### fix: correctifs ejs form [(#120)](https://github.com/GouvernementFR/dsfr/pull/120)


#### fix(card): ajoute un modifier d&#39;accentuation [(#121)](https://github.com/GouvernementFR/dsfr/pull/121)


#### refactor(consent): fonctions pour générer l&#39;objet consent [(#103)](https://github.com/GouvernementFR/dsfr/pull/103)


#### fix(display): ajoute des attributs d&#39;accessibilité sur les svg [(#118)](https://github.com/GouvernementFR/dsfr/pull/118)


#### fix(summary): correction du token [(#117)](https://github.com/GouvernementFR/dsfr/pull/117)


#### feat(modal): mise en place de l&#39;overlay [(#116)](https://github.com/GouvernementFR/dsfr/pull/116)


#### fix: hover radio / retour couleur [(#114)](https://github.com/GouvernementFR/dsfr/pull/114)


#### feat(example): ajoute un bouton fixe pour les parametre d&#39;affichage [(#113)](https://github.com/GouvernementFR/dsfr/pull/113)


#### fix: ejs corrections multiples [(#112)](https://github.com/GouvernementFR/dsfr/pull/112)


#### feat: couleurs accentuation [(#111)](https://github.com/GouvernementFR/dsfr/pull/111)


#### fix: correction ombre table + lint / pa11y [(#110)](https://github.com/GouvernementFR/dsfr/pull/110)


#### feat(display): Ajout icones illustratives &amp; thème systeme [(#109)](https://github.com/GouvernementFR/dsfr/pull/109)


#### refactor: restructuration custom props / legacy [(#108)](https://github.com/GouvernementFR/dsfr/pull/108)


#### fix(cards): corrige taille image mode horizontal [(#88)](https://github.com/GouvernementFR/dsfr/pull/88)


#### fix(navigation): espacement catégories mobile [(#105)](https://github.com/GouvernementFR/dsfr/pull/105)


#### fix(toggle): espacement composant [(#104)](https://github.com/GouvernementFR/dsfr/pull/104)


#### refactor(ejs): ajoute des exemples disabled et checked [(#94)](https://github.com/GouvernementFR/dsfr/pull/94)


#### feat(icon): ajout icon logout [(#93)](https://github.com/GouvernementFR/dsfr/pull/93)


#### fix(navigation): nav-link hover sur a et button uniquement [(#68)](https://github.com/GouvernementFR/dsfr/pull/68)


#### fix: margin bottom &lt;p&gt; et &lt;hx&gt; des composants [(#73)](https://github.com/GouvernementFR/dsfr/pull/73)


#### feat(core): ajout du reset de hr [(#60)](https://github.com/GouvernementFR/dsfr/pull/60)


#### fix(upload): disabled input-upload &amp; curseur pointeur [(#102)](https://github.com/GouvernementFR/dsfr/pull/102)


#### feat(upload): ajout du composant upload [(#43)](https://github.com/GouvernementFR/dsfr/pull/43)


#### fix(modale): corrige la hauteur de la modale sur desktop [(#80)](https://github.com/GouvernementFR/dsfr/pull/80)


#### fix(consent): ajout d&#39;id aux services [(#101)](https://github.com/GouvernementFR/dsfr/pull/101)


#### fix(footer): met a jour le wording du copyright [(#87)](https://github.com/GouvernementFR/dsfr/pull/87)


#### fix(modal): focus trap avec iframe [(#92)](https://github.com/GouvernementFR/dsfr/pull/92)


#### fix: readme et contributing [(#90)](https://github.com/GouvernementFR/dsfr/pull/90)


#### refactor: inclusion des composants ejs dans locals.nomComposant [(#76)](https://github.com/GouvernementFR/dsfr/pull/76)


#### fix: bouton sidemenu display none / scheme package.yml / fr-input code inutile / table refactor et couleurs [(#100)](https://github.com/GouvernementFR/dsfr/pull/100)


#### fix(logo): correction blue-france &amp; mourning [(#99)](https://github.com/GouvernementFR/dsfr/pull/99)


#### fix: correction du token art déprécié [(#98)](https://github.com/GouvernementFR/dsfr/pull/98)


#### fix: correction des hovers [(#97)](https://github.com/GouvernementFR/dsfr/pull/97)


#### Refactor: ajout des tokens artwork [(#96)](https://github.com/GouvernementFR/dsfr/pull/96)


#### fix: corrige le lint en l&#39;absence de fichier sass [(#95)](https://github.com/GouvernementFR/dsfr/pull/95)


#### Fix(pa11y) : met a jour le scope des tests pa11y [(#85)](https://github.com/GouvernementFR/dsfr/pull/85)


#### refactor(scheme): nouveau système de couleur [(#83)](https://github.com/GouvernementFR/dsfr/pull/83)


#### fix: dsfr license npm [(#82)](https://github.com/GouvernementFR/dsfr/pull/82)


#### fix(sidemenu): bordures en desktop [(#77)](https://github.com/GouvernementFR/dsfr/pull/77)


#### fix(lint): supprime les polyfill du linter eslint [(#84)](https://github.com/GouvernementFR/dsfr/pull/84)


#### Fix: définition d&#39;une valeur par défaut de l&#39;objet de configuration window.dsfr [(#79)](https://github.com/GouvernementFR/dsfr/pull/79)


#### fix: licence.md devient license.md [(#78)](https://github.com/GouvernementFR/dsfr/pull/78)


#### fix(legacy-browser): corrige les erreurs JS sous ie11 [(#72)](https://github.com/GouvernementFR/dsfr/pull/72)


#### fix: correction du package.json [(#74)](https://github.com/GouvernementFR/dsfr/pull/74)


#### fix(api): Bug Modal JS [(#69)](https://github.com/GouvernementFR/dsfr/pull/69)


#### fix: page/pattern dossier vide et npm deploy [(#67)](https://github.com/GouvernementFR/dsfr/pull/67)


#### fix(core): exemple texte taille md [(#71)](https://github.com/GouvernementFR/dsfr/pull/71)


#### fix: input type submit désactivé [(#70)](https://github.com/GouvernementFR/dsfr/pull/70)


#### feat(core): ajout d&#39;icones [(#65)](https://github.com/GouvernementFR/dsfr/pull/65)


#### feat: ajout d&#39;un robots.txt à la racine de public [(#53)](https://github.com/GouvernementFR/dsfr/pull/53)


#### fix: favicon path [(#66)](https://github.com/GouvernementFR/dsfr/pull/66)
dsfr-dev devient dsfr


#### fix(navigation): mega menu category bold [(#61)](https://github.com/GouvernementFR/dsfr/pull/61)


#### refactor: modification du gitignore [(#62)](https://github.com/GouvernementFR/dsfr/pull/62)


#### fix(core): fr-text devient fr-text--md [(#63)](https://github.com/GouvernementFR/dsfr/pull/63)


#### fix(core): reset bordure des inputs (ios) [(#58)](https://github.com/GouvernementFR/dsfr/pull/58)


#### fix(search): correction fr-input--error et fr-input--valid [(#57)](https://github.com/GouvernementFR/dsfr/pull/57)


#### fix(content): Le composant media ne fonctionne pas avec une image svg [(#54)](https://github.com/GouvernementFR/dsfr/pull/54)


#### fix: correction structure dev, retrait underscore dist exemple [(#55)](https://github.com/GouvernementFR/dsfr/pull/55)


#### fix(core): marge sous les textes et titres [(#52)](https://github.com/GouvernementFR/dsfr/pull/52)


#### fix(header): correction semicolon manquant devant last-child [(#50)](https://github.com/GouvernementFR/dsfr/pull/50)


#### fix(input): fr-input--error sur un textarea le passe en rouge [(#47)](https://github.com/GouvernementFR/dsfr/pull/47)


#### fix(share): correction espacements des boutons de partage [(#49)](https://github.com/GouvernementFR/dsfr/pull/49)


#### fix(table): couleur lignes odd des tableaux  #48


#### fix: correction href des listes d&#39;exemple &amp; maj dependance caniuse-lite


#### chore: passage au singulier des noms de fichiers et packages [(#45)](https://github.com/GouvernementFR/dsfr/pull/45)


#### refactor(pattern): évolution de la structure pattern, composant, page et du build [(#44)](https://github.com/GouvernementFR/dsfr/pull/44)


#### fix: dynamic js instances et minification [(#41)](https://github.com/GouvernementFR/dsfr/pull/41)


#### fix(core): correction font-display [(#40)](https://github.com/GouvernementFR/dsfr/pull/40)


#### refactor: implémentation du js dynamique [(#9)](https://github.com/GouvernementFR/dsfr/pull/9)


#### fix(core): text-rendering en optimizeLegibility [(#37)](https://github.com/GouvernementFR/dsfr/pull/37)
* fix(core): text-rendering en optimizeLegibility

* fix(core): inputs en text rendering optimizeLegibility


#### fix(core): font-display swap par défaut [(#38)](https://github.com/GouvernementFR/dsfr/pull/38)




## v1.1

### [v1.1.0](https://github.com/GouvernementFR/dsfr/compare/v1.0.0...v1.1.0) - 27 Juillet 2021

#### fix: problème de visibilité avec visibility: visible


#### fix(quotes): Suppression du alt de l&#39;image [(#35)](https://github.com/GouvernementFR/dsfr/pull/35)


#### fix(share): correction title désactivé [(#34)](https://github.com/GouvernementFR/dsfr/pull/34)


#### fix(doc): maj contributing.md [(#33)](https://github.com/GouvernementFR/dsfr/pull/33)


#### fix(checkboxes, radios): input en position absolue [(#31)](https://github.com/GouvernementFR/dsfr/pull/31)


#### fix(share): tailles des popup de partage [(#32)](https://github.com/GouvernementFR/dsfr/pull/32)


#### fix(follow): séparateur en box shadow [(#29)](https://github.com/GouvernementFR/dsfr/pull/29)


#### fix(share): correction template ejs et nom du composant [(#30)](https://github.com/GouvernementFR/dsfr/pull/30)


#### fix(follow): corrections et nouveau nom composant [(#28)](https://github.com/GouvernementFR/dsfr/pull/28)


#### feat: ajout du composant follow (nous suivre) [(#10)](https://github.com/GouvernementFR/dsfr/pull/10)


#### feat: ajout du composant quotes (citation) [(#23)](https://github.com/GouvernementFR/dsfr/pull/23)


#### feat: ajout du composant share (boutons de partage) [(#21)](https://github.com/GouvernementFR/dsfr/pull/21)


#### refactor(table): fonctionnement sans js [(#16)](https://github.com/GouvernementFR/dsfr/pull/16)


#### fix(buttons, modal, tabs): correction nouveau nom d&#39;icône [(#19)](https://github.com/GouvernementFR/dsfr/pull/19)


#### fix(alerts): Correction texte explicatif [(#17)](https://github.com/GouvernementFR/dsfr/pull/17)


#### fix(modal): ajustements et correctifs [(#11)](https://github.com/GouvernementFR/dsfr/pull/11)


#### feat(consent): Ajout du composant gestionnaire de consentement [(#12)](https://github.com/GouvernementFR/dsfr/pull/12)


#### feat(alerts): ajout du composant alerts [(#7)](https://github.com/GouvernementFR/dsfr/pull/7)
* feat(alerts): style alertes

* feat(alerts): ajout d&#39;exemples

* fix(alerts): examples

* fix(alerts): attributs bouton close

* fix(alerts): correction snippet

* fix(alerts): title bem style h6

* fix(alerts): margin p, hx et lien documentation


#### fix(summary): Ajustement de summary avec les nouvelles listes [(#6)](https://github.com/GouvernementFR/dsfr/pull/6)
* fix(summary): Ajustement de summary avec les nouvelles listes

* doc(summary): Commentaire d&#39;explication sur les nombres utilisés pour créer le décalage de l&#39;hover

* fix(summary): remplacement du marker par un before sur le lien (support safari + hover)


#### fix(cards): ordre détail dans le snippet [(#8)](https://github.com/GouvernementFR/dsfr/pull/8)


#### fix(core): correction des listes à puces [(#4)](https://github.com/GouvernementFR/dsfr/pull/4)
* fix(core): correction des listes pour un retour à un fonctionnement proche de celui par défaut

* fix(core): correction espacement des listes

* fix(core): nettoyage code commenté


#### fix(radios checkboxes): correction bug windows inversion des nombres [(#5)](https://github.com/GouvernementFR/dsfr/pull/5)
* fix(radios, checkboxes): correction display des labels

* feat: label checkbox &amp; radios

* fix: case insensitive flag retiré des sélecteurs d&#39;attribut (non supporté par IE edge)

Co-authored-by: lab9 &lt;lab9.fr@gmail.com&gt;


#### feat(utilities): ajout page de présentation


#### fix: Mise à jour des dépendances dans les packages accordions, pagination, tabs et tags


#### fix(modal): modal aligné en bas en mobile


#### fix: contributing [(#2)](https://github.com/GouvernementFR/dsfr/pull/2)


#### fix(core): fonte Marianne dans le reset inputs


#### fix(core): correction utilitaire taille d&#39;icone fr-fi--size
ajout taille fr-fi--md
ajout !important pour forcer le modifieur


#### fix(inputs,selects): ajout fonte marianne


#### fix(buttons): correction fichier scss buttons-group


#### fix(skiplinks): correction snippet skiplinks


#### fix(pagination): correction snippet pagination


#### feat(utilities): espacements jusqu&#39;a 32v


#### fix(core): Listes simplifiées, disques pleins avec taille réduites à partir du second niveau.


#### fix(checkboxes): correction inversion des labels


#### fix(global): génération dans public des fichiers sass et js globaux


#### fix(core): correction loop de compilation


#### fix(global): correction mise en forme scss lint


#### refactor(all): nouveau système de liste et link (sans le toggle custom property) / placeholders remplacés par des mixins


#### fix(navigation): correction bug pivotation du chevron


#### fix(modal): correctif keylistener au niveau global au lieu de la modale


#### fix(tabs): correctif bug de transition


#### fix(header): Correction modale a11y, arial-labelledby ajouté dynamiquement et id du bouton rétablie [https://gouvfr.atlassian.net/browse/DS-1445?focusedCommentId=14946]


#### feat(build): génération de la font icon incluse dans le build


#### chore(global): changement de la banière fichiers pour &#39;restricted use&#39;


#### chore(global): Complément d&#39;information JS et EJS du CONTRIBUTING.md


#### chore(global): changement de la banière des fichiers scripts et styles générés


#### feat: contributing.md


#### fix(schemes/skiplinks): correction implémentation accés direct


#### fix(sassdoc): correction config sassdoc




## v1.0

### [v1.0.0](https://github.com/GouvernementFR/dsfr/compare/v0.6.0...v1.0.0) - 7 Avril 2021

#### feat(readme): édition et publication du readme global et public


#### fix(toggle): correction couleur focus toggle


#### fix(links): correction problème placeholder links


#### feat(utilities, legacy): &#34;en cours de développement&#34;


#### refactor(toggles): bem toggle__list


#### chore(global): changement de package name et de n° de version


#### fix: radios rich images


#### fix: changement images d&#39;examples


#### chore(global): suppression des package.json dans le src (obsolète)


#### feat(global): ajout des images placeholder


#### feat(icons): ajout des icones réseaux sociaux


#### fix(navigation): correction bug d&#39;affichage de la page d&#39;exemple


#### fix: contributing.md


#### fix(header/navigation): Révision générale de header et navigation / ajouts d&#39;utilitaires grid et links


#### fix(schemes): changement de bf300 pour être accessible sur du g700


#### feature(schemes): nouvelles couleurs bleu france


#### fix(schemes): dynamisation du prefix


#### fix(img): correction des textes alternatifs des images


#### fix(sidemenu): marge des niveaux 2 et 3


#### fix(sidemenu): erreur de lint


#### fix(sidemenu): padding et etat actif


#### fix(forms): pas besoin d&#39;id sur le hint text


#### chore(global): changement du prefix


#### fix(forms): role groupe que quand plusieurs infos


#### fix(footer): hauteur max des logos


#### fix(schemes): changement nom icon theme


#### feat(core): ajout icones manquantes dans l&#39;example


#### fix(schemes): legende en texte regular


#### fix(summary): padding


#### feat(core): ajout icones


#### fix(toggles): css inutile


#### fix(toggles): marge entre bouton et label 4W


#### fix(pagination): taille icone page précédente


#### fix(examples): image responive dans le randomContent


#### fix(schemes): correction de la définition des hovers sur le body


#### feature(schemes): variable des couleurs sur les icones


#### fix(schemes): correction bug js schemes


#### fix(navigation): correction z-index item active


#### fix(navigation): correction position mega-menu


#### fix(core): correction readme


#### fix(global): correction génération core


#### chore(global): changement de structure, packages devient src


#### fix(summary): correction des marges


#### fix(footer): texte lien accessibilité




---

> ## DSFR v0

## v0.6

### [v0.6.0](https://github.com/GouvernementFR/dsfr/compare/v0.5.3...v0.6.0) - 7 Avril 2021

#### fix(footer): marge mention légale


#### fix(logo): title retiré sur le logo


#### chore(global): changement de numéro de version


#### fix(build): copy des favicons à la racine de public seulement en deploy


#### fix(search): correction padding break-point


#### fix(radios, checkboxes): problèmes de marges


#### fix(navigation): correction séparateur visible au hover


#### fix(radio/checkboxes): correction curseur désactivé


#### fix(radios, checkboxes): texte additionnel


#### fix(selects): couleur picto select désactivé


#### fix(inputs): textarea picto coupé


#### fix(radio/checkboxes): correction legend fieldset bold par défaut, weight modifier pour cases à cocher et radios


#### feature(core): ajout des fonctionnalités raw-link et reset-link


#### fix(callouts): simplification callouts


#### fix(navigation): couleur de l&#39;item active corrigée


#### fix(checkboxes): snippet avec erreur


#### fix(callouts): correction des marges internes


#### fix(search): padding LG


#### fix(core): correction du pointer sur les radio et checkbox


#### fix(header): tabindex retiré des modales


#### fix(accordions): lint


#### fix(accordion): bordure accordions


#### fix(header): correction récupération des modales conditionnelles


#### fix(core): correction lien


#### fix(breadcrumb): simplification de la css, correction des espacements


#### chore(all): ajout des noms de packages, de la documentation et ordre similaire à la documentation


#### fix(modal): snippet


#### fix(schemes): snippet &amp; corrections merge


#### fix: bug couleur de fond des interrupteurs


#### fix(all): alt générique et fix inputs
input type number &amp; fix ios
img texte alternatif


#### fix(header): Titre du service remplacé par un p


#### fix(breadcrumb): ajout d&#39;une limite à la boucle de vérification


#### fix(breadcrumb): boucle de vérification de la prise de focus


#### fix(header): transition éliminées en lg pour éviter le flash


#### fix(schemes): maj footer


#### fix(table): correction erreur dans les constantes


#### fix(search): title inutile sur le search LG


#### feat(footer): ajout licence etalab dans le copyright


#### fix(forms): input type submit et styles buttons, links


#### fix(pagination): ajout du role=&#34;navigation&#34; pour l&#39;a11y


#### refactor(js): séparation des classes core et publiques / focus breadcrumb / focus-trap désactivé au changement de breakpoint sur le header


#### fix(core): suppression des console.log


#### fix(search): correction marge sur safari


#### fix(cards/tiles): correction hover associé au enlarge-link / corrections tuiles horizontales suite à inversion de l&#39;ordre body / img


#### fix(grid): correction des imbrications et refactoring de la page d&#39;exemple


#### fix(all): préparation au changement de préfix


#### fix(navigation, sidemenu): snippet encodage


#### refactor(tabs, tags): accessibility


#### fix(navigation): suppression bouton close hors du header


#### feat(core): ajout des favicons


#### feature(core): ajout des examples d&#39;utilitaires


#### refactor(pagination): ajout des utilitaires d&#39;affichage hidden et displayed / pagination finalisé


#### refactor(pagination): pagination implémentée via les mixins de links


#### feature(build): test lint et pa11y imbriqué dans la routine de compilation


#### fix(cards/tiles): corrections tuiles et cards (z-index sur le hover, absence de hover, tile__img-wrap devient tile__img


#### fix(schemes): mis à jour attribut data-rf-opened


#### fix(schemes): mis à jour attribut data-rf-opened


#### fix(header): mis à jour attribut data-rf-opened


#### fix(modal): focus-trap, filtrage des radiobuttons par name


#### fix(forms): bold retirée des legend des fieldsets


#### fix(sidemenu, navigation): guillemet en trop sur aria-curent=&#34;page&#34;


#### fix(header): brand 100% de la largeur


#### refactor(core): optimisation focus


#### fix(navigation): stucture BEM nav__link


#### fix(schemes): simplification du hover avec :disabled


#### fix(schemes): correction @at-root dans le shemes hover


#### fix(schemes): correction selector-associate


#### fix(schemes): correction du hover avec remplacement de selector-unify par selector-associate


#### refactor: wip navigation refacto


#### fix(schemes): description du switch dark mode dans legend au lieu de p, pour suivre les normes d&#39;accessibilité


#### fix(build): import manquant


#### feature(pa11y): ajustement pa11y à la nouvelle architecture et correctifs


#### fix: suppression du alt dans lien test d&#39;exemple


#### fix(examples): attributs inutiles retirés sur le :root


#### fix(core): correction focus navigateurs ne supportant pas focus-visible


#### fix(build): correction exemple de la commande de build


#### fix(core): correction typo commentaire collapse


#### feature(build): création d&#39;un page dsfr contenant toutes les autres pages / finalisation des commandes de build


#### fix(selects): bordure g600


#### fix(core): medias frameborder


#### fix(footer): bloc marque + logo en 1 seul lien


#### fix(modal): correction focus-trap push remplacé par concat pour stylint


#### fix(modal): correction focus-trap groupe de radio-button


#### fix(core): correction svg encoding


#### fix(inputs): bordure enn g600


#### fix(navigation): catégorie mega menu en h5


#### fix(schemes): titre et description d&#39;example


#### fix: schemes example &amp; merge dev


#### feat(core): ajout du composant favicons


#### fix(content): médias image figure aria label &amp; role group


#### feature(collapse): reprise du focus à la fermeture d&#39;un collapse / correction bug collapse


#### fix(radios): correction safari, alignement du séparateur d&#39;image


#### feature(modal): mise en place de l&#39;attribut data-rf-opened à la place de aria-expanded pour en éviter la restitution


#### fix(radios): correction label chiffres inversés &amp; ajout d&#39;exemples


#### refactor(cards/tiles): lien étendu des tuiles et des cards par la classe rf-enlarge-link / inversion de l&#39;image et du body pour l&#39;accessiblité


#### refactor(header): gestion du lien d&#39;accueil étendu / bouton mobile déplacés en haut du header


#### refactor(logo): optimisation et retravail de la sémantique


#### fix(footer): ajout &lt;p&gt; &amp; ul li + fix bug css partner


#### feat(schemes): ajout du switch theme


#### feat(icons): aria-hidden sur les icones illustratives


#### refactor(build): déplacement des imgs dans examples, déplacement des fonts dans assets, copie générale des assets dans dist


#### fix(inputs): bug ios, desactivation de l&#39;apparance des inputs


#### fix(navigation, sidemenu): aria-current=&#39;true&#39; &amp; aria-current=&#39;page&#39;


#### fix(reset): hover lien corrigé / lien souligné en border-bottom au lieu de box-shadow (le tricks du toggle css variable ne fonctionne pas sur un box-shadow)


#### fix(toggles): ajout aria-describedby sur input lié au hint text


#### fix(buttons, links): retrait de l&#39;exemple avec une div


#### fix(search): ejs search label et role search


#### fix(highlights): bem, &lt;p&gt; dans le composant


#### fix(medias): iframe video exemple attribute


#### fix: sass build


#### fix(various): correction curseur du breadcrumb, nav / chemin des styles et des scripts de la liste d&#39;examples / lint


#### fix(core): Simplification du déplacement du focus sur Cards et Tiles


#### fix(tags, links, buttons): href, disabled, target ejs


#### fix(tabs): lorem ipsum text


#### fix(form, select, checkbox): fieldset aria-described legend &amp; message


#### refactor(core): Reset par attribut enlevé et remplacé par un reset global / Nouvelle gestion du focus transverse et plus générique / z-index du focus mis en conformité


#### fix: forms, radios, checkboxes hint text in legend


#### fix: summary


#### fix: skiplinks, tabs, beadcrumb


#### feat: switch theme
refactor shortcut ejs
refactor link ejs
refactor radios
Déplacement svg-encode dans core


#### fix(header): menu burger tronqué


#### fix(breadcrumb): correction margin négative du collapse au breakpoint LG


#### refactor(imports): Nouvelle architecture et nouveau système de compilation




## v0.5

### [v0.5.3](https://github.com/GouvernementFR/dsfr/compare/v0.4.0...v0.5.3) - 7 Avril 2021

#### fix(all): Design System de l&#39;Etat v0.5.3
fix: retrait du scritp post-install


#### feat: Design System de l&#39;Etat v0.5.0


#### fix(links): links font-size à 0 retiré


#### fix(all): correction du test, th des tableaux en col / correction du test, liens externes en https / attribut aria-modal ajouté / aria-expanded et aria-controls pour la modale.


#### fix(all) correction package.json all + build


#### fix(all): corrections de bug divers
Fixes
BUG - Modale =&gt; scroll body / font zone action  / btn fermer
BUG - Menu lateral =&gt; niveau de titre
BUG - Radios inline =&gt; alignement radio bouton riche en ligne (le dernier)
BUG - inputs invalid
BUG - inputs =&gt; Ajout du comportement natif des types (number/date/calendar)


#### fix(header): correction des liens de raccourcis


#### refactor(buttons): groupe de boutons, nouvelle gestion des icones


#### feat(modal): ajout package modal
fix
Tabs animation
collapse et disclosure
Page de test (controls butons &amp; snippet)


#### fix(all): ajout commentaires, fix buton LG test
features
Ajout de commentaires de code SASS
fixes
BUG - bouton LG a sauté
BUG - Toggle cursor &amp; size


#### feat(buttons): ajout des groupes de boutons


#### fix(accordions): suppression de la navigation clavier


#### refactor(all): refactorisation, evolutions et corrections (détails dans le corps de commit)
refactor
consolidation du core, rappatriement des scripts d&#39;utilitaire et de la grille
Nouveau token v et w systématisé, N supprimé
Nouvelles mixins
Nouvelle largeur maximum pour le container : 1200px
Ajout de rf-link--close
Nouvelle version des fontes
disclosure[v2] et mise en place sur accordions, navigation, header, sidemenu
utilities: ajout des classe de margin auto
nomenclature des icons ajustées :  sm 4v / md 6v / lg 8v / xl supprimé
nouveau système de font-size, line-height et spacing
features
Ajout de h5 et h6
Responsive container
fixes
BUG - Image LG a sauté sur la v0.4.0
BUG - Checkboxes small a sauté
BUG - tabs focus panel caché
BUG - tabs focus avant interaction
BUG - list dans un tabpanel
BREAKING
navigation:
- Classe rf-collapse à ajouter au même niveau que les classes rf-menu et rf-mega-menu :
&lt;div class=&#34;rf-collapse rf-menu&#34; id=&#34;rf-nav-item-3&#34; &gt;
accordions:
- noeud rf-accordion__inner supprimé
- rf-accordion__body est remplacé par rf-collapse
- rf-accordion-group__item retiré, un li sans classe est suffisant
sidemenu:
- rf-sidemenu__btn--sidemenu-toggle est remplacé par rf-sidemenu__btn (plus générique)
- rf-sidemenu__wrapper devient rf-collapse
- rf-sidemenu__content devient rf-collapse


#### fix(all): corrections taille checkboxes et content / corrections multiligne toggle




## v0.4

### [v0.4.0](https://github.com/GouvernementFR/dsfr/compare/v0.3.4...v0.4.0) - 17 Décembre 2020

#### fix(all): Mise à jour des liens de documentations


#### fix(core): Ajout du line-height par défaut sur body par le biais de l&#39;attribut de reset


#### fix(skiplinks): correction espacement des skiplinks


#### feature(tiles): Evolution tiles v2 - version responsive et changement de style


#### chore(tabs): publication des fichiers dist


#### fix(tabs): import du script dans les tests


#### feat(radios): ajout des boutons radios riches


#### feat(toggle): ajout du package toggle


#### feature(tabs): ajout du package tabs


#### refactor(all) : isolation du reset, réduction des dépendances et fix divers
[ALL] passage partiel aux unités v et w[ALL] nouvelles couleurs pour les éléments désactivés[ALL] ajout de commentaires[CORE] séparation du reset en 2 parties
  - attribut optionnel data-rf-reset, stylise body, headings et liens
  - mini reset sur toutes classes commençant par le prefix du dse)[CORE] typography est rappatrié dans le core et est divisé en 2 parties
  - rf-prose : conteneur qui stylise les tags headings, liens et listes qu&#39;il contient
  - typography : classes qui permettent d&#39;appliquer directement des styles[CORE] rappatriement des packages icons et medias dans le core[CORE] refactor gestion du z-index [CARDS] rf-cards__lead devient rf-cards__title pour homogénéisation avec les tuiles[UTILITIES] passage des valeurs des classes de spacing en important (retour betas)[HEADER] correction burger menu en cas de présences de raccourcis[BUTTONS] correction contour bouton secondaire lien[LINKS, BUTTONS, TAGS] icon-only devient l&#39;état d&#39;icon par défaut (suppression du modificateur et de l&#39;icon par défaut)


#### chore(packages): v0.3.1


#### fix(all): correctif package.json et dist.scss sur le package all


#### chore(packages): Design System de l&#39;Etat v0.3.0


#### docs: maj du README.md


#### docs: ajout des docs finales NPM v2


#### feat: ajout de la configuration globale NPM v2


#### fix: packages dependencies


#### docs: ajout de la documentation NPM V2


#### fix: pa11y tests


#### fix(sidemenu): ajout taille typo dans le bouton


#### fix(dists): regénération des dists


#### feat(tags): ajout package tags


#### fix(core): correction du module


#### fix(buttons): corrections dans le package.json


#### feat(webpack): ajout genération des dists pour npm V2


#### fix(icônes): regénération des icônes


#### feat(accordéon): ajout du package accordéon


#### fix(all): hofix du mixin &#34;after&#34;


#### fix(icônes): ajout de nouvelles icônes


#### feat(sass-comments): ajout de commentaires/refactir sur packages sidemenu/summary/skiplinks


#### feat(spacing-system): ajout classes utilitaires mode Tailwind


#### fix(header): ajout du cas header sans menu (plus de burger)


#### feat: ajout package table &amp; correction pseudo mixin pour build


#### fix(radios-group): merge de fix/radios-group dans dev


#### refactor(icons): merge de refactor/icons dans dev


#### fix: changement de la commande de build pour les tests


#### fix(logo): svg cleanning, test fix, et logo berne


#### fix(logo): couleur du titre du logo en g800


#### fix: import fonts path in local


#### fix: scheme Color Btn disabled &amp; couleurs fonctionnelles


#### chore(packages): release


#### test: restricted package


#### fix: merge


#### refactor(core): ajout d&#39;un prefix pour sr-only / ajout d&#39;options scheme focus


#### fix: merge


#### chore(packages): release


#### fix: test


#### fix: test


#### test: x


#### chore(packages): release


#### fix: version


#### fix: change scope


#### fix(webpack): ajout dossier tests


#### feat(webpack): génération des dist par package + package all


#### feat(webpack): mise en place provisoire dist packages




## v0.3

### [v0.3.4](https://github.com/GouvernementFR/dsfr/compare/v0.3.1...v0.3.4) - 9 Novembre 2020

#### chore(packages): release


#### test: restricted package


#### fix: merge


#### fix: merge


#### fix(webpack): ajout dossier tests


#### feat(webpack): génération des dist par package + package all


#### feat(webpack): mise en place provisoire dist packages



### [v0.3.1](https://github.com/GouvernementFR/dsfr/compare/v0.3.0...v0.3.1) - 3 Novembre 2020

#### chore(packages): release


#### fix: test


#### fix: test


#### test: x



### [v0.3.0](https://github.com/GouvernementFR/dsfr/compare/v0.2.0...v0.3.0) - 3 Novembre 2020

#### chore(packages): release


#### fix: version


#### fix: change scope


#### fix(search): reduce placeholder to &#34;rechercher&#34;


#### fix(links): correctif de la taille maximum de l&#39;icon en fonction des icons présentes dans les settings


#### feat(all): correction des hover sur les boutons transparents / Nouvelle version des hover sans utilisation de pseudo elements / Documentation schemes + industrialisation links et buttons + structure core / répercussion de la nouvelle version des links et btns / ajout des dépendances dans les dist / correction de l&#39;ordre des modificateurs / fix sidemenu + refactor links pour tag


#### fix: yarn workspaces




## v0.2

### [v0.2.0](https://github.com/GouvernementFR/dsfr/compare/v0.1.0...v0.2.0) - 19 Octobre 2020

#### chore: pre-release configuration


#### feat: ajout du package sidemenu


#### feat: ajout package liens d&#39;évitement


#### feat: ajout du composant sommaire


#### docs: ajout documentation NPM v2


#### doc: mise à jour PUBLISHING &amp; CONTRIBUTING


#### fix(footer): liens bottom en inline




## v0.1

### [v0.1.0]() - 19 Octobre 2020

#### feat: Design System de l&#39;Etat, commit initial
Design System de l&#39;Etat v0.1.0

Fondamentaux
-Couleur
-Espacement
-Grille
-Icônes
-Médias
-Typographie.

Composants
-Barre de recherche
-Boutons
-Boutons radios
-Case à cocher
-Carte
-Champ de saisie
-En-tête (Header)
-Fil d’ariane
-Liens
-Lien d&#39;évitement
-Liste déroulante
-Médias
-Mise en avant
-Mise en exergue
-Navigation principale
-Pagination
-Pied de page (Footer)
-Tuiles




---

