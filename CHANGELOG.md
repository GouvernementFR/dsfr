# Changelog du Système de design de l’État

Toutes les modifications notables apportées à ce projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
et ce projet respecte [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Pour plus d’informations : [Voir la documentation](https://www.systeme-de-design.gouv.fr/)


> ## DSFR v1

## v1.13

### [v1.13.1](https://github.com/GouvernementFR/dsfr/compare/v1.13.0...v1.13.1) - 25 Mars 2025

#### ⬆️ chore(dependencies): mise à jour des dépendances npm [(#1116)](https://github.com/GouvernementFR/dsfr/pull/1116)


#### 🐛 fix(storybook): Ajouts et corrections de stories [DSFR-69, DSFR-70] [(#1089)](https://github.com/GouvernementFR/dsfr/pull/1089)
- Ajouts de stories
  - messages de formulaire
  - variantes esthetiques de la carte
  - variantes de taille des champs de saisie et formulaire
  - radio boutons
  - tags mieux séparées
  - tuiles avec tag et badge
  - translate avec bouton sans contour
  - ajout de fichiers
- Remplacement de stories de base par la story "default"
- Correction des duplications d'ids dans les docs storybook
- Correction du bandeau d'information importante de type attack
- Correction CSS des fieldset-inline@md et des tailles year, number, postal
- Correction template upload valid


#### ✨ feat(navigation): ajout de la fermeture des menus au clavier [DSFR-23, DSFR-24] [(#1091)](https://github.com/GouvernementFR/dsfr/pull/1091)
- La touche échap ferme le menu ouvert
- Lorsque le focus sort du menu au TAB, ferme le menu ouvert


#### ✨ feat(core): assess file error detection [DSFR-28] [(#1095)](https://github.com/GouvernementFR/dsfr/pull/1095)
- Ajouts de messages d'erreurs dans la console en fonction du type d'erreurs retourné par le fetch du fichier à télécharger
- Si le fichier est inaccessible (erreur 500), la fonction assess-file retourne au moins l'extension du fichier.


#### 🐛 fix(tag): bug hover tags sélectionnables désactivés [(#1058)](https://github.com/GouvernementFR/dsfr/pull/1058)
- Correction du hover des tags sélectionnables désactivés


#### ✨ feat: évolution du rendu à l'impression des composants [DSFR-78] [(#1106)](https://github.com/GouvernementFR/dsfr/pull/1106)
Amélioration du rendu à l'impression des composants du DSFR :

Accordion: tous ouverts, pas de couleur, encadré gris, pas de page break apres le bouton
bouton : exact
connect: exact
callout : bordure grise sans fond, no page break
card : bordure grise, no page break
follow: caché
footer: caché
header : caché sauf logo / nom service
highlight: bordure gauche grise
input: bordure grise, fond transparent
modal: pleine page, encadrée
notice: bordure top/bottom + couleur texte
pagination: page courante encadrée et en noir
range: sans remplissage bleu
radio: exact, no page break
search: border, fond transparent
select: border, fond transparent
share: caché
sidemenu: caché
navigation: caché
skiplink: caché
summary: caché
tabs: bouton fond blanc, bordure bleu sur l’actif, no page break
table: exact
tag: exact
tile: bordure grise, retrait icone, no page break
toggle exact, no page break
tooltip: caché
transcription : caché
translate caché
utilitaire d’icone : exact


#### 🐛 fix(publicode): corrige l'image du logo dsfr [DSFR-75] [(#1115)](https://github.com/GouvernementFR/dsfr/pull/1115)


#### ✨ feat(table): ajout de breakpoints pour les cellules fixées [DSFR-74] [(#1097)](https://github.com/GouvernementFR/dsfr/pull/1097)
les colonnes fixées peuvent maintenant être fixées à partir d'un breakpoint (sm, md, lg)


#### ✨ feat(publicode): ajoute le DSFR à la liste Awesome code.gouv.fr [DSFR-75] [(#1102)](https://github.com/GouvernementFR/dsfr/pull/1102)
- Ajout d'un fichier publicode.yml


#### 🐛 fix(modal): bouton non requis + correctif [DSFR-17, DSFR-26] [(#1103)](https://github.com/GouvernementFR/dsfr/pull/1103)
- focusManager gère le retour du focus en cas d'absence d'un bouton primaire.
- correction du bug focus bloqué sur les menu du header


#### ✨ feat(icon): ajouts d'icônes d'éditeur et de partage [(#1110)](https://github.com/GouvernementFR/dsfr/pull/1110)
system:
share (line/fill)
share-forward (line/fill)
Design:
eraser (line/fill)
Editor:
strikethrough
code-block
align-center
align-justify
align-left
align-right
format-clear
font-color
indent-decrease
indent-increase
list-check
text-direction-r
underline


#### 🐛 fix(sidemenu, navigation, header): correctif template ejs [DSFR-44] [(#1073)](https://github.com/GouvernementFR/dsfr/pull/1073)
- Correctif des variables des templates sidemenu, navigation, header


#### 🐛 fix(input): focus date-picker [DSFR-54] [(#1076)](https://github.com/GouvernementFR/dsfr/pull/1076)
- corrige le placement du focus du date-picker sur les champs type date


#### 🐛 fix(toggle): Corrige la taille du focus sur le bouton [DSFR-11] [(#1078)](https://github.com/GouvernementFR/dsfr/pull/1078)
- Corrige la taille du focus pour que la hauteur du focus corresponde à la hauteur du bouton.


#### ✨ build(release): retrait de storybook dans la release [DSFR-58] [(#1088)](https://github.com/GouvernementFR/dsfr/pull/1088)
- Pour réduire le poids du package @gouvfr/dsfr, storybook n'est plus exporté


#### 🐛 fix(select): correction option par défaut & navigation clavier [DSFR-63] [(#1090)](https://github.com/GouvernementFR/dsfr/pull/1090)
- Retrait de l'attribut hidden sur la première option du select. Cela rend la navigation au clavier impossible sur firefox.


#### 🐛 fix(core): disclosure evenement dsfr.conceal [DSFR-71] [(#1092)](https://github.com/GouvernementFR/dsfr/pull/1092)


#### ✨ feat(icon, share, follow): ajout icone bluesky [DSFR-72] [(#1096)](https://github.com/GouvernementFR/dsfr/pull/1096)



### [v1.13.0](https://github.com/GouvernementFR/dsfr/compare/v1.12.1...v1.13.0) - 4 Décembre 2024

#### 🐛 fix: corrections diverses 1.13.0 [(#1054)](https://github.com/GouvernementFR/dsfr/pull/1054)
- Corrections mineures : legacy, storybook, analytics, ...


#### ✨ feat(analytics): optimisation des créations d'instances [(#1055)](https://github.com/GouvernementFR/dsfr/pull/1055)
- La propriété `isActionEnabled` peut maintenant prendre la valeur reduce pour limiter la création d'instance de tracking aux éléments comportant l'attribut `data-fr-analytics-action`


#### ⬆️ chore(dependencies): mise à jour des dépendances npm [(#1052)](https://github.com/GouvernementFR/dsfr/pull/1052)
- bump cross-spawn from 7.0.3 to 7.0.6
- bump micromatch from 4.0.5 to 4.0.8
- bump semver from 7.3.5 to 7.6.2
- bump ws from 7.5.9 to 7.5.10


#### ✨ feat(table): supporte le comportement `row-select` via data attribute [(#1053)](https://github.com/GouvernementFR/dsfr/pull/1053)
- la sélection de ligne du tableau est implémentée via l'attribut data-fr-row-select="true" sur la case à cocher, le fonctionnement via l'attribut name="row-select" est déprécié.


#### ✨ feat(colors) : page d'exemple utilitaires de couleurs [(#1013)](https://github.com/GouvernementFR/dsfr/pull/1013)
- Ajoute au build la generation d'un json des colors
- Ajoute des classes utilitaire de bordure (couleur et épaisseur)
- Ajoute des pages d'exemple d'utilisation des classes utilitaires des couleurs de background, texte et bordure
- Ajoute une page d'exemple d'utilisation des classes utilitaires de largeur de bordures


#### 🐛 fix(tile, navigation): retrait des sélecteur css ">" [(#1049)](https://github.com/GouvernementFR/dsfr/pull/1049)
- Retrait des selecteurs d'enfants directs pour éviter les problèmes lors de l'ajout de balises intermediaires (cas de création de sous composants)


#### 🐛 fix(tab): correction de l'ombre au scroll en RTL [(#1051)](https://github.com/GouvernementFR/dsfr/pull/1051)
- Correction de l'ombre au scroll en direction RTL


#### 🐛 fix(analytics): correction syntaxique documentation des actions [(#1043)](https://github.com/GouvernementFR/dsfr/pull/1043)
- Correction d'éléments manquants ou mal écrits dans la documentation analytics


#### 🐛 fix(table): bordure disparait lors d'un rowspan en dernière position [(#1041)](https://github.com/GouvernementFR/dsfr/pull/1041)
- Correction de la bordure lorsqu'un rowspan est en dernière position


#### ✨ feat(radio): radio riche sans pictogramme compact [(#1047)](https://github.com/GouvernementFR/dsfr/pull/1047)
- modification du bouton radio pour une version compacte du radio riche sans pictogramme


#### ✨ feat: ajout de storybook & restructuration [(#945)](https://github.com/GouvernementFR/dsfr/pull/945)
- ajout de storybook
    - ajout d'un package storybook dans `/dsfr-sb`
    - ajout de stories dans le dossier `template` de chaque composant
    - accès au storybook en local dans le dossier `/storybook` généré via la commande `yarn build-storybook`
- changement de structure 
    - tous les dossiers de `/src` sont déplacés dans un sous-dossier `dsfr`
    - les dossiers `module` et `i18n` passent dans `src`
- correction des valeurs en dur dans les templates


#### 🐛 fix(legacy): retrait des références à polyfill-io (faille sécurité) [(#1038)](https://github.com/GouvernementFR/dsfr/pull/1038)
- Toute référence à polyfill-io a été retirée pour éviter une redirection vers ses noms de domaines qui ont été détourné


#### 🐛 fix(range): ajout de la possibilité de changer la value en JS [(#1025)](https://github.com/GouvernementFR/dsfr/pull/1025)
- Le composant est mis à jour graphiquement au changement de value des inputs en js.
- Ajout d'un accesseur "value" dans l'api du range


#### 🐛 fix(accordion): ouverture initiale des accordéons dégroupés [(#1032)](https://github.com/GouvernementFR/dsfr/pull/1032)
- Correction lorsque tous les disclosures d'un groupe avec l'attribut group="false" sont ouverts au chargement


#### 🐛 fix(header): retrait aria-label sur modales désactivées [(#1018)](https://github.com/GouvernementFR/dsfr/pull/1018)
- En desktop, lorsque les modales de menu et recherche sont désactivés, les attributs aria-label et aria-labelledby sont  retirés


#### ✨ feat(api): ajouts d'évènements dans l'api [(#1012)](https://github.com/GouvernementFR/dsfr/pull/1012)
Ajout des événements : 
Sur le éléments root (documentElement) :
- dsfr.ready : lorsque le js est chargé
- dsfr.start : au démarrage du moteur js du dsfr
- dsfr.stop : à l'arrêt du moteur js du dsfr
- dsfr.render : lors du rendu d'une instance
- dsfr.resize : lors du changement de taille du viewport
- dsfr.scroll-lock : au blocage du scroll
- dsfr.scroll-unlock : au déblocage du scroll
- dsfr.scheme : au chargement et changement du scheme (dark, light, auto)
- dsfr.theme : au chargement et changement du theme (light, dark)

Au niveau des instances, et remontées aux parents jusqu'au documentElement :
- dsfr.click : au click sur un bouton
- dsfr.disclose : à l'ouverture d'un disclosure
- dsfr.conceal : à la fermeture d'un disclosure
- dsfr.current : retourne l'élément ouvert d'un groupe de disclosure (accordions, tabs, etc.)
- dsfr.dismiss : a la fermeture d'un tag supprimable
- dsfr.toggle : au cochage d'un tag sélectionnable
- dsfr.show : à l'affichage d'un tooltip
- dsfr.hide : lorsque le tooltip est masqué


#### 🐛 fix(core, tooltip): positionnement du tooltip dans header & modale [(#1010)](https://github.com/GouvernementFR/dsfr/pull/1010)
- Correction du placement du tooltip dans un élément possédant un filter (modal, header)
- Gestion du placement en position absolute plutot que fixed


#### 🐛 fix(modal): correction modal footer z-index [(#1000)](https://github.com/GouvernementFR/dsfr/pull/1000)
- Passage du footer de la modale au niveau de z-index "overlap-above", permettant d'être au dessus du tooltip


#### 🐛 fix(header): duplication aria-describedby & labelledby [(#976)](https://github.com/GouvernementFR/dsfr/pull/976)
- Permet la duplication des attributs aria dans le menu mobile des accès rapides


#### 🐛 fix(core): bug firefox menu passe en arrière plan [(#1023)](https://github.com/GouvernementFR/dsfr/pull/1023)
- Ajout d'un overflow auto sur le collapse pour éviter le passage des menus sous des éléments survolés ou le texte surligné


#### 🐛 fix(notice): padding notice sans close btn [(#1019)](https://github.com/GouvernementFR/dsfr/pull/1019)
- Retrait du padding à droite du bandeau lorsqu'il n'y a pas de bouton de fermeture


#### 🐛 fix(range): amélioration du rendu en mode contrasté [(#1011)](https://github.com/GouvernementFR/dsfr/pull/1011)
- Amélioration du design du curseur en mode couleurs forcées


#### ✨ feat(form): ajout du message d'avertissement 'warning' [(#1015)](https://github.com/GouvernementFR/dsfr/pull/1015)
- Ajout de la classe fr-message--warning
- Ajout d'exemples de messages dans la page d'exemple formulaire


#### 🐛 feat(header, sidemenu): correction focus croppé [(#1008)](https://github.com/GouvernementFR/dsfr/pull/1008)
- Correction du focus croppé sur la navigation latérale
- Correction du focus croppé sur le header en mobile


#### 🐛 fix(link): alignement icône link close déprécié [(#1007)](https://github.com/GouvernementFR/dsfr/pull/1007)
- Correction de l'alignement vertical de l'icône du lien de fermeture déprécié (maintenant btn-close)


#### 🐛 fix(toggle): correction groupe d'interrupteurs dépréciés [(#1006)](https://github.com/GouvernementFR/dsfr/pull/1006)
- Correction des espacements des groupes d'interrupteurs dépréciés


#### 🐛 fix(button): ajoute le type button par défaut [(#1005)](https://github.com/GouvernementFR/dsfr/pull/1005)
- ajoute le type `button` aux boutons par défaut
- met à jour les exemples des modèles de pages analytics et page de connexion
- met à jour les snippets d'exemple des composants : accordéon, alerte, fil d'ariane, bouton, bouton France Connect, carte, gestionnaire de consentement, paramètres d'affichage, champ de saisie, lettre d'information, navigation principale, menu latéral, onglets, tag, tuile et transcription
- remplace l'attribut `type` par `variant` dans le template du Bouton France Connect et ajoute le type `button` par défaut


#### ✨ feat(notice): icone alerte météo rouge [(#1004)](https://github.com/GouvernementFR/dsfr/pull/1004)
- Changement de l'icône par défaut du bandeau d'alerte météo rouge


#### 🐛 fix(notice): correction css markup hx sur le titre du bandeau [(#1003)](https://github.com/GouvernementFR/dsfr/pull/1003)
- Correction du style du titre du bandeau lors de l'utilisation d'un niveau d'entête hx à la place de la balise p


#### 🐛 fix(readme): correction nom fichier utility [(#1002)](https://github.com/GouvernementFR/dsfr/pull/1002)
- Correction du nom du fichier utility.min.css dans le readme


#### ✨ feat(pagination): retrait du lien sur les points de suspension [(#1001)](https://github.com/GouvernementFR/dsfr/pull/1001)
- Remplace le lien par un span sur les points de suspension de la pagination


#### 🐛 fix(anayltics): correction doc page.path [(#998)](https://github.com/GouvernementFR/dsfr/pull/998)
- Correction de la valeur, si non renseignée, du paramètre page.path dans la documentation analytics


#### ✨ fix(dependencies): browsersync dependency >=2.27 [(#997)](https://github.com/GouvernementFR/dsfr/pull/997)
- Modifie la version de la dépendance à BrowserSync dans le package.json, permettant l'utilisation d'une version plus récente.
- Retrait de browserSync des peerDependencies


#### 🐛 fix(core): opacité du texte du select désactivé  #996
- Correction de l'opacité du texte des listes déroulantes (select) désactivées


#### 🐛 fix(analytics): lancement dsfr start dans les pages SPA [(#995)](https://github.com/GouvernementFR/dsfr/pull/995)
- correction des collectes d'actions des pages d'exemples react et vue, le dsfr en manuel n'était pas lancé


#### 🐛 fix(modal): input sans type bug dans le focus trap de la modale [(#992)](https://github.com/GouvernementFR/dsfr/pull/992)
* Correction d'une erreur js liée au focus trap lorsqu'un champ de saisie n'a pas d'attribut "type" dans une modale


#### 🐛 fix(core): Bug de récursivité infinie sur le getter node [(#993)](https://github.com/GouvernementFR/dsfr/pull/993)
- Correction du retour du getter instance.node qui engendrait une boucle infinie


#### fix(core): getter node




## v1.12

### [v1.12.1](https://github.com/GouvernementFR/dsfr/compare/v1.12.0...v1.12.1) - 25 Juin 2024

#### 🐛 fix(artwork): correction pictogrammes firefox et Chrome156 [(#971)](https://github.com/GouvernementFR/dsfr/pull/971)
- changement structurel des svg d'artwork
  - corrige la régression apportée par la nouvelle version de chrome qui ne supporte plus la surchage de colorisation sur le svg si le path ciblé est déja coloré dans le svg
  - le path ciblé est déja coloré dans le svg
- corrige l'accentuation des pictogrammes sur firefox
  - mise en place d'un script permettant de transformer les anciens pictogrammes vers la nouvelle structure
  - `yarn pictogram-converter -p [chemin/picto]`


#### 🐛 fix(table): corrige regressions sur les tableaux déprécies [(#969)](https://github.com/GouvernementFR/dsfr/pull/969)
- déplace bordures des tableaux déprécies sur les thead et tbody
- retire les selecteurs css :has



### [v1.12.0](https://github.com/GouvernementFR/dsfr/compare/v1.11.2...v1.12.0) - 19 Juin 2024

#### ⬆️ chore(dependencies): met a jour les dépendances npm et correction lint [(#961)](https://github.com/GouvernementFR/dsfr/pull/961)
- mise à jour dépendances npm


#### 🐛 fix(*): correctifs pages d'exemple et icone bandeau d'alerte [(#948)](https://github.com/GouvernementFR/dsfr/pull/948)
- correction icone bandeau d'alerte
- corrections de libellés dans les pages d'exemples


#### 🐛 fix(IE): correctifs divers [(#955)](https://github.com/GouvernementFR/dsfr/pull/955)
- corrige la numérotation du sommaire
- corrige les icones chevron du fil d'arianne
- retire le hover sur les bouton désactivés
- corrige l'alignement de la case a cocher du mot de passe
- correction des ombres sur les menus et le tooltip
- rend les liens d'évitement fonctionnels
- correction du style du curseur double désactivé


#### 🐛 fix(preference): correctifs mode contrasté et reduce motion [(#952)](https://github.com/GouvernementFR/dsfr/pull/952)
- corrections diverses sur le mode contrasté


#### ✨ feat(table) : Mise à jour des exemples [(#949)](https://github.com/GouvernementFR/dsfr/pull/949)
- correction legacy
- mise à jour de l'icone twitter


#### 🐛 fix(link): met a jour la variante avec markup bouton [(#951)](https://github.com/GouvernementFR/dsfr/pull/951)
- correction de l'alignement du texte des fr-lien en button


#### 🐛 fix(toggle): ajoute les messages erreur et valide sur interrupteur simple [(#954)](https://github.com/GouvernementFR/dsfr/pull/954)
- retrait des marges avant et après le composant
- ajoute la bordure en état d'erreur/succès


#### ✨ feat(icon): ajout icone weather/sparkling-2 [(#956)](https://github.com/GouvernementFR/dsfr/pull/956)
- ajout de l'icone sparkling-2, utilisée pour indiquer l'utilisation d'IA.


#### ✨ feat(table): ajout du tableau non scrollable [(#947)](https://github.com/GouvernementFR/dsfr/pull/947)
- ajout d'une version de tableau sans scroll, avec réduction automatique des cellules


#### ✨ feat(preference): mode contrasté windows & animation réduite [(#929)](https://github.com/GouvernementFR/dsfr/pull/929)
- Amélioration du rendu des composants en mode haut contraste windows (forced-colors)
- Retrait des animations en mode reduce-motion


#### 🐛 fix(link, card, tile): enlarge button [(#943)](https://github.com/GouvernementFR/dsfr/pull/943)
- ajout d'une classe utilitaire enlarge-button utilisée sur les cartes et les tuiles de téléchargement pour élargir la zone de clique à tout le composant quand l'element cliquable est un bouton


#### 🐛 fix(footer, header): réduction de la zone de clic retour à l'accueil [(#944)](https://github.com/GouvernementFR/dsfr/pull/944)
- sur le header mobile la partie à droite du brand n'est plus cliquable pour éviter les clics manqués sur le burger ou la recherche, et le lien du nom de service n'est plus étendu sur toute la largeur
- sur le footer mobile la zone de clic n'est plus étendu sur toute la largeur


#### ✨ feat(icon): ajout d'icônes [(#946)](https://github.com/GouvernementFR/dsfr/pull/946)
Ajout des icones :
- design/shapes-fill.svg
- design/shapes-line.svg
- logo/whatsapp-fill.svg
- logo/whatsapp-line.svg
- others/fr--accessibility-fill.svg
- others/fr--accessibility-line.svg
- others/fr--ear-off-fill.svg
- others/fr--ear-off-line.svg
- others/fr--mental-disabilities-fill.svg
- others/fr--mental-disabilities-line.svg
- others/fr--sign-language-fill.svg
- others/fr--sign-language-line.svg
- others/wheelchair-fill.svg
- others/wheelchair-line.svg
- system/sort-asc-desc-line.svg
- system/sort-asc-line.svg
- system/sort-desc-line.svg
- weather/fire-fill.svg
- weather/fire-line.svg
- weather/flood-fill.svg
- weather/flood-line.svg
- weather/fr--avalanches-fill.svg
- weather/fr--submersion-fill.svg
- weather/heavy-showers-fill.svg
- weather/heavy-showers-line.svg
- weather/snowy-fill.svg
- weather/snowy-line.svg
- weather/temp-cold-fill.svg
- weather/temp-cold-line.svg
- weather/thunderstorms-fill.svg
- weather/thunderstorms-line.svg
- weather/tornado-fill.svg
- weather/tornado-line.svg
- weather/typhoon-fill.svg
- weather/typhoon-line.svg
- weather/windy-fill.svg
- weather/windy-line.svg


#### ✨ feat(notice): ajout de bandeaux d'information importante [(#917)](https://github.com/GouvernementFR/dsfr/pull/917)
- ajout des bandeaux d'alertes, des bandeaux vigilance météo, et de 2 niveaux génériques (warning et alert)
- mise en situation dans une page
- BC : changement de la structure html pour accueillir une description et un lien en plus du titre


#### ✨ feat(table): tableau v2 [(#911)](https://github.com/GouvernementFR/dsfr/pull/911)
- evolution majeure du tableau


#### ✨ feat(analytics): système de régulation des actions [(#937)](https://github.com/GouvernementFR/dsfr/pull/937)
- ajout de la possibilité de bloquer une action particulière avec l'attribut et la valeur data-fr-analytics-action="false" quand l'envoi des actions est activé au global via la config isActionEnabled: true


#### 🐛 fix(card): fichier télécharger et ratio carte de téléchargement [(#938)](https://github.com/GouvernementFR/dsfr/pull/938)
- met à jour les images des exemples de carte "Image et ratio"
- ajoute un fichier pdf placeholder pour les cartes de téléchargement


#### ✨ feat(card, tile, enlarge-link): ajoute version avec button [(#842)](https://github.com/GouvernementFR/dsfr/pull/842)
- ajout de la possibilité d'utiliser un "button" plutôt qu'un "a" sur la carte et la tuile


#### 🐛 fix(footer): title des liens obligatoires du footer [(#905)](https://github.com/GouvernementFR/dsfr/pull/905)
- remplace l'intitulé par défaut "[A modifier]" de l'attribut title par l'intitulé officiel sur les liens obligatoires du footer.
- change l'ordre des liens, et gouvernement.fr devient info.gouv.fr


#### ✨ feat(build): config au premier build & precision readme [(#908)](https://github.com/GouvernementFR/dsfr/pull/908)
- lors de l'execution de la commande yarn build, crée les fichiers de configuration s'ils n'existent pas
- ajout de browser-sync en tant que peerDependencies dans le package.json
- ajout de précision sur le lancement du serveur des pages d'exemple dans le README


#### ✨ feat(build): ajoute la version dsfr dans les pages d'exemple [(#909)](https://github.com/GouvernementFR/dsfr/pull/909)
- affiche la version du DSFR en haut des pages d'exemple


#### 🐛 fix(quote): ratio de l'image de citation [(#912)](https://github.com/GouvernementFR/dsfr/pull/912)
- ajout de la propriété object-fit: cover sur l'image de citation pour conserver le ratio de l'image lorsqu'elle n'est pas carrée.
- dans la mesure du possible, privilégiez un ratio d'image carré pour un meilleur support navigateur


#### 🐛 fix(core): centrage des container-bp [(#916)](https://github.com/GouvernementFR/dsfr/pull/916)
- les container-sm/md/lg/xl ne sont pas centrés correctement


#### ✨ feat(pictogram): ajout du picto digital/in-progress [(#918)](https://github.com/GouvernementFR/dsfr/pull/918)
- ajout du pictogramme "in-progress" dans la catégorie "digital"


#### 🐛 fix(toggle): retour à la ligne statut activé/désactivé [(#928)](https://github.com/GouvernementFR/dsfr/pull/928)
- corrige le retour à la ligne sur le label "activé/désactivé"


#### 🐛 fix(range): bug js boucle infinie et step désactivé [(#931)](https://github.com/GouvernementFR/dsfr/pull/931)
- corrige la boucle infinie qui fait crash la page lorsque stepwidth = 0
- corrige le style du curseur avec étape désactivé
- ajout d'exemples de curseurs double désactivé et avec étape désactivé
- corrige la modification de valeur du deuxième input lorsque le min dépasse le max ou l'inverse sur le curseur double


#### ✨ refactor(*): uniformise les intitulés des labels [(#930)](https://github.com/GouvernementFR/dsfr/pull/930)
- passe les intitulés "label" en "libellé"


#### 🐛 fix(content): modifie la structure HTML du composant comportant une transcription [(#932)](https://github.com/GouvernementFR/dsfr/pull/932)
- passe la transcription apres la figure
- a11y ajoute texte alternatif sur infographie mentionnant transcription en dessous
- ajout un attribut title sur les videos iframe


#### 🐛 fix(breadcrumb): alignement vertical des icônes de chevron [(#933)](https://github.com/GouvernementFR/dsfr/pull/933)




## v1.11

### [v1.11.2](https://github.com/GouvernementFR/dsfr/compare/v1.11.1...v1.11.2) - 4 Mars 2024

#### 🐛 fix(analytics): Erreur sur IE selecteur translate [(#899)](https://github.com/GouvernementFR/dsfr/pull/899)
- modifie le selecteur du translate pour utiliser 2 :not() à la suite au lieu d'un :not(1, 2)


#### 🐛 fix(analytics): documentation et correctif version standalone [(#895)](https://github.com/GouvernementFR/dsfr/pull/895)
- Apporte des éléments correctifs à l'issue #880
  - correctifs dans la version standalone :
    - configuration appliquée au logging (verbose, production)
    - retrait de dépendances non requises
  - ajout de documentation sur la version standalone
    - installation
    - fonctionnalités disponibles
  - Extraction de Modes du fichier de la class Options pour réduire les dépendances


#### ⬆️ chore(dependencies): met a jour les dépendances Node [(#894)](https://github.com/GouvernementFR/dsfr/pull/894)
- passage à postcss 8.4.32


#### 🐛 fix(header): correctif erreur itérable null [(#893)](https://github.com/GouvernementFR/dsfr/pull/893)
- corrige l'issue #890, la valeur null renvoyée par la fonction match est remplacée par un array vide pour permettre son itération


#### 🐛 fix(range): correctif dispose input [(#891)](https://github.com/GouvernementFR/dsfr/pull/891)
- corrige un bug js sur l'écouteur d'événement


#### ✨ feat(doc): ajout d'infos sur la configuration dans la doc analytics [(#888)](https://github.com/GouvernementFR/dsfr/pull/888)
- ajoute dans la doc de configuration des analytics, la possibilité de surcharger la configuration du mode production via le paramètre dans l'url : ?production=false


#### 🐛 fix(tag): corrige le hover des tags cliquables [(#887)](https://github.com/GouvernementFR/dsfr/pull/887)
- le hover des tags cliquables avait disparu


#### ✨ feat(core): ajout d'un retour à la ligne des mots trop long [(#886)](https://github.com/GouvernementFR/dsfr/pull/886)
- ajout de la propriété `overflow-wrap: world-break` sur body permettant le passage à la ligne des mots plus grands que leur conteneur.


#### 🐛 fix(analytics): correctif héritage listenClick [(#885)](https://github.com/GouvernementFR/dsfr/pull/885)
- corrige un bug js au niveau de l'héritage du listenClick. Renommage de la fonction listenClick en listenActionClick car la fonction existe déja sur la classe héritée "Instance"


#### 🐛 fix(header): correction overflow hidden cache le focus [(#881)](https://github.com/GouvernementFR/dsfr/pull/881)
- correction du focus caché par un overflow hidden, sur le lien du logo du header



### [v1.11.1](https://github.com/GouvernementFR/dsfr/compare/v1.11.0...v1.11.1) - 31 Janvier 2024

#### ⬆️ chore(dependencies): met a jour les dépendances Node [(#877)](https://github.com/GouvernementFR/dsfr/pull/877)
- monté de version des dépendances à follow-redirects et semver


#### 🐛 fix(header): corrige les alignements des liens outils [(#876)](https://github.com/GouvernementFR/dsfr/pull/876)


#### ✨ feat(accordions-group): ajoute un attribut pour dégrouper [(#860)](https://github.com/GouvernementFR/dsfr/pull/860)
- ajout d'un attribut `data-fr-group="false"` pour dissocier le comportement d'ouverture/fermeture des accordéons à l'intérieur d'un groupe d'accordéons
- étend l'utilisation de cet attribut aux composants héritant du collapses-group : la navigation (uniquement en mobile) et le menu latéral


#### 🐛  fix(header): espacement des liens d'accès rapide en mobile [(#859)](https://github.com/GouvernementFR/dsfr/pull/859)
- corrige la taille des boutons d'accès rapide dans le menu mobile


#### 🐛 fix(tooltip): fallback du fond en conic gradiant [3628] [(#863)](https://github.com/GouvernementFR/dsfr/pull/863)
- ajout d'un fallback en linear-gradiant pour les navigateur qui ne supporte pas le conic-gradiant (ex: firefox < 83)


#### 🐛 fix(core): retrait du tap-highlight ios [(#846)](https://github.com/GouvernementFR/dsfr/pull/846)
- retrait du tap highlight des éléments input, button, a, label, select, textarea sur IOS dans le reset du core


#### ✨ feat(content): met a jour les mises en situation [(#866)](https://github.com/GouvernementFR/dsfr/pull/866)
- ajoute une transcription à l'exemple de “Média image en svg, porteur d’information”
- met à jour l'exemple de “Média image avec une transcription” avec une image porteuse de sens et renseigne la transcription correspondante


#### 🐛 fix(pally): corrige les erreurs pally [(#857)](https://github.com/GouvernementFR/dsfr/pull/857)


#### ✨ feat(alert): ajoute un example de taille md avec description seule [(#853)](https://github.com/GouvernementFR/dsfr/pull/853)


#### 🐛 fix(header): corrige le focus sur le champ de recherche [(#864)](https://github.com/GouvernementFR/dsfr/pull/864)


#### ✨ feat(header): retire l'attribut aria-haspopup du bouton burger [(#856)](https://github.com/GouvernementFR/dsfr/pull/856)


#### ✨ feat(login): ajoute la description de france connect [(#855)](https://github.com/GouvernementFR/dsfr/pull/855)


#### ✨ feat(recover): supprime le package recover et le deplace dans login [(#854)](https://github.com/GouvernementFR/dsfr/pull/854)


#### 🐛 fix(accordion): corrige le focus dans un groupe [(#867)](https://github.com/GouvernementFR/dsfr/pull/867)


#### ✨ feat(analytics): ajout de la version du site [(#868)](https://github.com/GouvernementFR/dsfr/pull/868)


#### 🐛 fix(select): corrige l'affichage du optgroup sur firefox windows [(#870)](https://github.com/GouvernementFR/dsfr/pull/870)


#### 🐛 fix(footer, header, connect): retrait de l'icone target blank [(#872)](https://github.com/GouvernementFR/dsfr/pull/872)


#### 🐛 fix(follow): retrait d'un fichier inutile [(#858)](https://github.com/GouvernementFR/dsfr/pull/858)


#### 🐛 fix(header): corrige la duplication des collapses dans le menu mobile [(#873)](https://github.com/GouvernementFR/dsfr/pull/873)


#### 🐛 fix(navigation): corrige bugs de fermeture du composant [(#840)](https://github.com/GouvernementFR/dsfr/pull/840)



### [v1.11.0](https://github.com/GouvernementFR/dsfr/compare/v1.10.2...v1.11.0) - 11 Décembre 2023

#### ✨ feat(range): version optimisée en accessibilité [(#841)](https://github.com/GouvernementFR/dsfr/pull/841)
- redesign du composant en ajoutant une bordure à la track pour être plus visible
- changement de la structure html pour être accessible
- lint


#### 🐛 fix(core): erreur js classname [(#837)](https://github.com/GouvernementFR/dsfr/pull/837)
- régression sur la fonction getClassname du core


#### 🐛 fix(core): classname IE [(#828)](https://github.com/GouvernementFR/dsfr/pull/828)
- correction d'une erreur js sur IE lors de la récupération du classname dans l'instance


#### 🐛 fix(header): augmente le z-index du header [(#830)](https://github.com/GouvernementFR/dsfr/pull/830)
- ajout d'un niveau d'élévation `raised-over`
- le header passe en z-index `raised-over` pour passer par dessus les cartes avec ombre


#### 🐛 fix(examples): met a jour les pages d'exemple [(#831)](https://github.com/GouvernementFR/dsfr/pull/831)
- mise en forme d'exemples


#### 🐛 fix(password): placement checkbox & icon info [(#832)](https://github.com/GouvernementFR/dsfr/pull/832)
- met a jour l'icône de message d'information
- met a jour le placement de la checkbox


#### 🐛 fix(*): corrections diverses [(#833)](https://github.com/GouvernementFR/dsfr/pull/833)
- Ajout de la balise meta `format detection` pour désactiver le style automatique des url, date, email, et tél sur IOS
- Passage des tag/badge en taille md sur les cartes md
- augmentation de la marge au dessus du message d'erreur sur checkbox, input, select (16px)
- correction d'une régression de la couleur de bordure des checkbox en erreur/succès
- augmentation de la marge droite de l'image du composant citation
- alignement de la valeur sur le curseur double quand tout à gauche
- augmentation de l'épaisseur du stepper à 8px
- passage du token de couleur des liens du menu latéral en $text-action-high-grey
- passage en bleu du bouton d'ouverture du sélecteur de langue en mobile
- alignement des chevrons du fil d'arianne
- correction du token des tags cliquables désactivés


#### 🐛 fix(input): fieldset error/valid [(#827)](https://github.com/GouvernementFR/dsfr/pull/827)
- correction de la couleur de la bordure des champs en fieldset-error/valid


#### 🐛 fix(doc): lien page d'exemple [(#826)](https://github.com/GouvernementFR/dsfr/pull/826)
- mise à jour du lien vers le site de documentation dans la page d'exemple icone de favori


#### 🐛 fix(legacy): bugs IE divers [(#825)](https://github.com/GouvernementFR/dsfr/pull/825)
- Retrait du soulignement sur les bouton et tags en `a` sur IE
- Retrait de la marge top des paragraphes `p` sur IE
- Changement du placement du '+' de franceConnect+
- Correction du ratio d'image sur les cartes de téléchargement sur IE
- Réglage de l'alignement de l'icône des liens en target blank sur IE
- Correction de l'alignement de la case des cases à cocher sur IE
- Correction des min/max/valeur du curseur sur IE
- Retrait du focus autour de l'icône des controles segmentés sur IE
- Correction de la hauteur du composant fil d'arianne sur IE
- Ajout des modifiers de bouton pour les accès rapide du header sur IE
- Correction des icones prev/next de la pagination sur IE
- Correction des couleurs du tag désactivé sur IE
- Retrait du soulignement dans le reset des liens `a`


#### 🐛 fix(range): dépendance à scheme [(#823)](https://github.com/GouvernementFR/dsfr/pull/823)
- ajout de la dépendance à scheme dans la configuration du package range


#### ✨ feat(follow,share): icône twitter-x par défaut [(#824)](https://github.com/GouvernementFR/dsfr/pull/824)
- mise en place de l'icône X pour Twitter, avec changement du title pour "X (anciennement Twitter)" sur les composants follow et share


#### 🐛 fix(link, card, tile): espacement entre libellé et icone [(#818)](https://github.com/GouvernementFR/dsfr/pull/818)
- retrait du saut de ligne entre la balise `a` et son libellé pour corriger l'écart entre le libellé du lien et l'icone
- ajout d'un exemple "lien externe" dans les exemples de lien
- correction de la taille de l'icone sur les tuiles sans lien étendu
- retrait de l'icone `arrow-right` sur les tuiles sans lien étendu, pour être iso avec les cartes


#### 🐛 fix(doc): met a jour les liens des pages d'exemple [(#822)](https://github.com/GouvernementFR/dsfr/pull/822)
- mise à jour des liens vers le site de documentation dans les pages d'exemple


#### ✨ feat(segmented): ajout du composant contrôle segmenté [(#805)](https://github.com/GouvernementFR/dsfr/pull/805)
- le composant "contrôle segmenté" incite l'utilisateur à choisir entre plusieurs options d'affichage disponibles (vues), mutuellement exclusives avec une valeur sélectionnée par défaut.


#### 🐛 fix(build): liens doc sur core & utility [(#821)](https://github.com/GouvernementFR/dsfr/pull/821)
- correction des liens de la documentation qui ne s'affichent plus dans les exemples


#### 🐛 fix(toggle): largeur max du label & libellé [(#819)](https://github.com/GouvernementFR/dsfr/pull/819)
- augmentation de la largeur max du libellé du label, la marge de 10v passe à 8v
- changement du libellé du label et du texte additionnel


#### 📈 feat(analytics): gestion des actions [(#812)](https://github.com/GouvernementFR/dsfr/pull/812)
- ajout de la propriété `isActionEnabled` dans la configuration et sur l'objet `window.dsfr.analytics` permettant d'activer l'envoi des données d'actions si nécessaire.
- ajout de l'attribut `data-fr-action` permettant d'activer l'envoi d'action sur un élément particulier et de spécifier la partie title de l'actionName envoyé
- correctif sur les sélecteurs des card, title pour traquer des boutons


#### 📝 doc(contributing): typos et formattage de la doc de contribution [(#810)](https://github.com/GouvernementFR/dsfr/pull/810)
- ajout du formattage shell pour les snippets de code
- correction de fautes d'ortographe


#### 🐛 fix(core): correctif garbage collection hash [(#816)](https://github.com/GouvernementFR/dsfr/pull/816)
- correction de la fonction dispose sur Instance pour enlever les écouteurs sur la modification du hash de l'url


#### ✨ feat(range): ajout du composant curseur [(#817)](https://github.com/GouvernementFR/dsfr/pull/817)
- Les curseurs sont des entrées numériques qui permettent de voir graphiquement la sélection d'une plage entre une valeur minimale et une valeur maximale. Ils servent à montrer en temps réelle les options choisies et éclairer la prise de décision.


#### 🐛 feat(css-print): ajoute la feuille de style impression [(#802)](https://github.com/GouvernementFR/dsfr/pull/802)
- génere une feuille de style "dist/dsfr.print.css" à charger pour appliquer les règles d'impression du DSFR
- ajoute la classe utilitaire `.fr-no-print` pour retirer un élement de l'impression


#### ⬆️ chore(dependencies): met a jour les dependances Node [(#815)](https://github.com/GouvernementFR/dsfr/pull/815)
- mise à jour de :
   - modules babel
   - nanoid
   - postCss
   - word-wrap


#### 🐛 fix(header): ajustements header [(#791)](https://github.com/GouvernementFR/dsfr/pull/791)
- change la couleur du menu burger en $action-high-bleu-france en mobile
- passe l'écart entre bloc marque et logo opérateur à 32px et l'écart entre logo opérateur et nom du site à 32px
- réduit la taille de la barre de recherche à 96v (24rem) au lieu de 25rem
- bloque la taille du logo opérateur à 8rem max (144px)
- passe la taille du texte de la tagline en sm (14px) au lieu de md
- passe le bouton burger en tertiaire avec border


#### 🐛 fix(radio, radio-rich, toggle, checkbox): tokens de couleur [(#760)](https://github.com/GouvernementFR/dsfr/pull/760)
- mise à jour des tokens de couleurs sur checkbox, radio, radio-rich, toggle


#### 📝 doc(readme): mise en forme et précision du README.md [(#774)](https://github.com/GouvernementFR/dsfr/pull/774)
- correction d'espacements et de fautes de frappe
- précise l'interdiction d'utilisation "pour des sites web ou des applications", sans interdire d'utiliser le DSFR pour
créer, par exemple, un système de design entièrement différent (d'où l'intérêt de la licence libre).


#### 🐛 fix(connect): taille de la fonte adapatable [(#813)](https://github.com/GouvernementFR/dsfr/pull/813)
- Le bouton FranceConnect doit répondre aux critères d’accessibilité qui redéfinissent le letter-spacing et la taille de fonte.
  - Passage des valeurs de tailles et d'espacements en 'em' pour les rendre relatives à la taille de fonte du bouton
  - Retrait du '+' de 'FranceConnect+' dans l'intitulé de `fr-connect__brand`. Celui-ci est désormais placé en contenu du pseudo-élément after du bouton


#### 📝 doc(readme): correction du lien de la documentation des icônes [(#804)](https://github.com/GouvernementFR/dsfr/pull/804)
- corrige le lien vers la documentation des icones dans le readme


#### 📝 doc(cgu): correction URL du système de design [(#799)](https://github.com/GouvernementFR/dsfr/pull/799)
- ajout de "www" dans l'url du site de documentation des CGU


#### 🐛 fix(icon): correction de l'icone user-setting-line [(#797)](https://github.com/GouvernementFR/dsfr/pull/797)
- correction du contenu du svg de l'icone `user-setting-line` qui ne correspondait pas à la bonne icone


#### 🐛 fix(card, scheme): alignement du détail carte & erreur js sur safari <14 [(#796)](https://github.com/GouvernementFR/dsfr/pull/796)
- Sur les anciennes version de safari macOS (inférieure à 14.0)
  - corrige l'alignement du détail de la carte dans une grille de carte
  - corrige une erreur de javascript liée au dark mode sur scheme.js


#### 🐛 fix(sidemenu): correction marge interne [(#793)](https://github.com/GouvernementFR/dsfr/pull/793)
- retire 1v de padding gauche et droite sur `fr-sidemenu__inner` en desktop


#### 🐛 fix(footer): ajustements [(#792)](https://github.com/GouvernementFR/dsfr/pull/792)
- corrige le niveau de titre des partenaires
- le texte filler de footer__content-desc doit faire maximum 3 lignes en desktop
- passe les liens .fr-footer__content-link en $text-default-grey
- passe le padding top de .fr-footer__bottom-list à 4v
- correction des espacements autour de fr-footer-body :  en mobile et en desktop (32px en haut et 24px en bas)
- titre “nos partenaire“ → fr-footer__partners-title passe en graisse régular, couleur text-default-grey
- ecart de 12px sous “Nos partenaire” en mobile/desktop
- enleve le padding sur .fr-footer__partners .fr-footer__logo, ajoute une border 1px en $border-default-grey + un background en background-default-grey
- en desktop l’ecart entre logo et bloc mark passe à 32px
- passe le logo opérateur en 16x9
- ajoute un margin bottom négatif de 8px sur le groupe de lien pour garder 24px en dessous
- retire le padding sur les images des logos partenaire
- passe à 16px entre les logos partenaires secondaires
- rend les partenaires secondaires facultatifs
- corrige alignement des liens en bas du footer


#### 🐛 fix(download): icon-size bug compilation [(#788)](https://github.com/GouvernementFR/dsfr/pull/788)
- correctif taille de l'icone du composant download (déprécié)


#### ♻️ refactor(*): selecteur not combiné [(#786)](https://github.com/GouvernementFR/dsfr/pull/786)
- remplacement des selecteurs :not(.selecteurA, .selecteurB) par :not(.selecteurA):not(.selecteurB) dans le js des composants : accordion, navigation, sidemenu, translate, transcription


#### 🐛 fix(highlight): met à jour les espacements [(#777)](https://github.com/GouvernementFR/dsfr/pull/777)
- passe le padding à 5v en mobile et 9v en desktop


#### 🐛 fix(navigation): correctifs de style mega-menu [(#785)](https://github.com/GouvernementFR/dsfr/pull/785)
- ajoute un margin-top: -1.25rem (-20px) sur le fr-mega-menu__leader
- passe le texte de description et le lien du fr-mega-menu__leader en taille sm
- supprime la classe fr-mb-4v de la colonne entourant le fr-mega-menu__leader
- le texte du bouton de navigation passe en $text-action-high-blue-france à l'ouverture


#### 🐛 fix(unavailable): couleur de fond et image décorative [(#787)](https://github.com/GouvernementFR/dsfr/pull/787)
- change la couleur de fond de page pour du $background-alt-blue-france
- remplace l'image décorative par un SVG


#### 🐛 fix(close-btn): retire le `margin-left` négatif [(#784)](https://github.com/GouvernementFR/dsfr/pull/784)
- retire la marge négative sur le modifier .fr-btn--close et corrige l'impact sur les composants 'alert', 'navigation', et 'notice'


#### 🐛 fix(form): token de couleur de la légende [(#783)](https://github.com/GouvernementFR/dsfr/pull/783)
- la légende du fieldset passe en $text-label-grey à la place de $text-title-grey


#### 🐛 fix(skiplink): espacements des liens d'évitement [(#782)](https://github.com/GouvernementFR/dsfr/pull/782)
- l'ecart entre les liens d'évitement passe à 16px (4v)
- en desktop la marge en haut et en bas du composant passe à 12px (3v)


#### 🐛 fix(follow): corrige affichage [(#781)](https://github.com/GouvernementFR/dsfr/pull/781)
- inverse l'ordre des boutons "Instagram" et "LinkedIn"
- supprime les margin left et right du groupe de boutons
- place le bouton d'action dans un groupe de bouton fr-btns-group--inline-md sur les exemples "Lettre d'info seule" et "Réseaux sociaux et Lettre d'info mise en avant" pour que le bouton prenne l’ensemble de la largeur en vue mobile.


#### 🐛 fix(tag): token de couleur du tag selectionnable [(#780)](https://github.com/GouvernementFR/dsfr/pull/780)
- utilisation du token $text-inverted-blue-france sur la couleur du texte des tag selectionnable et supprimable à la place de $text-inverted-grey
- remplacement du token de couleur de fond des tag selectionnable par $background-active-blue-france au lieu de $background-action-high-blue-france


#### 🐛 fix(summary): alignement du titre du sommaire [(#779)](https://github.com/GouvernementFR/dsfr/pull/779)
- ajout d'un padding-left de 8px pour aligner le titre avec le premier élément de la liste


#### 🐛 fix(share): token couleur texte cookies désactivés [(#778)](https://github.com/GouvernementFR/dsfr/pull/778)
- Le token de couleur du texte lorsque les cookies sont désactivés passe en $text-mention-grey


#### 🐛 fix(core): mise à jour lien vers la doc typographie [(#775)](https://github.com/GouvernementFR/dsfr/pull/775)
met à jour le lien vers la page "Typographie" du site de documentation.


#### 🐛 fix(name): bouton ajout et suppression en secondaire [(#773)](https://github.com/GouvernementFR/dsfr/pull/773)
- dans le pattern de nom prénom, les boutons d'ajout et de suppression de prénom passent en secondaire à la place de tertiaire


#### 🐛 fix(input): combo champ + button en erreur [(#772)](https://github.com/GouvernementFR/dsfr/pull/772)
- lorsque le champ newsletter de la lettre d'information est en erreur le champs doit être souligné en rouge et non en bleu


#### 🐛 fix(toggle): couleur label & espacements [(#771)](https://github.com/GouvernementFR/dsfr/pull/771)
- utilisation du token de couleur $text-label-grey sur le label de l'interrupteur
- ajout de 4px de marge entre la coche et le texte activer/desactiver


#### 🐛 fix(consent): correction espacement des radios accepter [(#768)](https://github.com/GouvernementFR/dsfr/pull/768)
- ajustement de la marge droite des radios "accepter"


#### 🐛 fix(consent): token de couleur des titres de finalité [(#767)](https://github.com/GouvernementFR/dsfr/pull/767)
- passe la couleur des titres de finalité en $text-title-grey


#### 🐛 fix(form, input): met a jour les espacements des icônes [(#766)](https://github.com/GouvernementFR/dsfr/pull/766)
- place l’icône à 16px du bord droit des champs de saisie
- ajuste le padding-right à 44px sur les champs de saisie avec icône
- corrige la largeur des class fr-fieldset__content pour la version dépréciée


#### 🐛 fix(checkbox): met a jour le token de la coche [(#762)](https://github.com/GouvernementFR/dsfr/pull/762)
- passe la couleur de la coche en $text-inverted-blue-france


#### 🐛 fix(login): correction espacements [(#759)](https://github.com/GouvernementFR/dsfr/pull/759)
- corrige l'espace en trop entre le lien "Mot de passe oublié ?" et la checkbox "Se souvenir de moi",
- ajoute une marge supplémentaire sous l’alerte d’erreur


#### 🐛 fix(consent): correction lien & cookies obligatoires [(#754)](https://github.com/GouvernementFR/dsfr/pull/754)
- coche les cookies obligatoires par defaut
- étend le lien voir plus de detail


#### 🐛 fix(password): couleur du texte de la checkbox "afficher" [(#750)](https://github.com/GouvernementFR/dsfr/pull/750)
- utilisation du token de couleur : text-label-grey


#### 🐛 fix(skiplink): visible avec elastic scrolling [(#749)](https://github.com/GouvernementFR/dsfr/pull/749)
- cache le skiplink lors du rebond du scroll sur ios


#### ✨ feat(core): description list dl dt dd [(#748)](https://github.com/GouvernementFR/dsfr/pull/748)
- ajout du style par défaut des listes de description dl dt dd


#### 🐛 fix(*): selecteur aria-current [(#747)](https://github.com/GouvernementFR/dsfr/pull/747)
* correction sur breadcrumb, navigation, pagination, sidemenu, et translate de l'attribut [aria-current] lorsqu'il est à "false"


#### ♻️ refactor(highlight, callout): background image à la place de box shadow [(#746)](https://github.com/GouvernementFR/dsfr/pull/746)
- refactorisation de la bordure en background-image à la place de box-shadow


#### 🐛 fix(header): token titre service [(#745)](https://github.com/GouvernementFR/dsfr/pull/745)
- le token de couleur du texte de service passe en text-title-grey à la place de text-default-grey


#### 🐛 fix(alert): remplacement des box-shadow en background-image [(#742)](https://github.com/GouvernementFR/dsfr/pull/742)
- les bordures sont dessinées en background image à la place de box shadow


#### 🐛 fix(link): rel noopener external & title target blank [(#737)](https://github.com/GouvernementFR/dsfr/pull/737)
- ajout d'attribut title et rel noopener external sur les liens en target blank
- modification des exemple de card, tile, link, footer, quote, notice


#### 🐛 fix(search, input, select): color token & cancel button [(#740)](https://github.com/GouvernementFR/dsfr/pull/740)
- corrige le token de couleur de l'intitulé et des icones dans les champs de saisie et du select.
- customisation de l'icone de suppression du champs de recherche : close-circle-fill


#### 🐛 fix(logo): intitulé et motto en noir absolu [(#738)](https://github.com/GouvernementFR/dsfr/pull/738)
- intitulé et moto en noir absolu
- ajout token absolute black


#### 🐛 fix(select): correctifs flèche et intitulé [(#736)](https://github.com/GouvernementFR/dsfr/pull/736)
- réduit la taille de l'icone et ajuste sa position
- corrige l'intitulé du placeholder


#### ✨ feat(select): ajout exemple `<optgroup>` [(#734)](https://github.com/GouvernementFR/dsfr/pull/734)
- ajout d'un example de select avec groupe d'options


#### 🐛 fix(header): mise à jour des exemples [(#727)](https://github.com/GouvernementFR/dsfr/pull/727)
- ajout exemple utilisateur connecté
- ajoute des exemples avec un seul raccourcis (sans liste)
- ajoute les modifier de bouton account briefcase et team


#### 🐛 fix(register): alignement boutons [(#726)](https://github.com/GouvernementFR/dsfr/pull/726)
- corrige l'alignement des boutons : 
  - en mobile, aligné l’un au dessus de l’autre, bouton primaire en premier
  - en desktop, les 2 alignés à droite, bouton primaire à droite


#### 🐛 fix(stepper): mise à jour de la structure [(#724)](https://github.com/GouvernementFR/dsfr/pull/724)
- inverse le stepper step et le title dans la pile html


#### 🐛 fix(page-unexpected): textes [(#723)](https://github.com/GouvernementFR/dsfr/pull/723)
- inverse le texte principal et le texte de description du model de page


#### 🐛 fix(quote): ajoute un exemple avec un seul detail [(#721)](https://github.com/GouvernementFR/dsfr/pull/721)
- il n'est plus obligatoire d'avoir une liste dans le figcaption de la citation


#### 🐛 fix(modal): a11y retire la liste dans la zone d'actions [(#720)](https://github.com/GouvernementFR/dsfr/pull/720)
- le groupe de bouton peut désormais être une `div` à la place d'un `ul``li` 
- retrait de la liste non ordonnée dans le footer de la modale


#### fix(consent): ajoute un niveau de titre sur la banniere de consentement [(#719)](https://github.com/GouvernementFR/dsfr/pull/719)
- le titre de la baniière devient un `<h4>` à la place d'un `<p>` dans la structure HTML du composant


#### ✨ feat(prng): ajoute la librairie js pure-rand [(#718)](https://github.com/GouvernementFR/dsfr/pull/718)
- implémente une lib js de PRNG dans le rendu EJS pour pouvoir mettre une seed sur chaque contenu.


#### 🐛 fix(consent): coche les cookies obligatoires par defaut [(#735)](https://github.com/GouvernementFR/dsfr/pull/735)
- Les cookies obligatoires doivent être systématiquement cochés




## v1.10

### [v1.10.2](https://github.com/GouvernementFR/dsfr/compare/v1.10.1...v1.10.2) - 19 Octobre 2023

#### 🐛 fix(analytics): réduction d'envoi des données [(#806)](https://github.com/GouvernementFR/dsfr/pull/806)
- suppression du taux d'interaction global
- ajout de l'attribut data-fr-analytics-rating qui permet de mesurer le taux d'interaction sur un élément particulier
- suppression de l'impression des composants sans interactions
- limitation de l'envoi de donnée à la première interaction
- bouton associé à l'accordéon, l'onglet et la transcription rendu muet
- recensement des composants de la page dans une nouvelle donnée de page `page_components`



### [v1.10.1](https://github.com/GouvernementFR/dsfr/compare/v1.10.0...v1.10.1) - 4 Septembre 2023

#### 🐛 fix(radio): correctif couleur manquante [(#757)](https://github.com/GouvernementFR/dsfr/pull/757)
- Erreur dans le build du CSS suite au manque d'une couleur


#### 🐛 fix(link): correction des liens de téléchargement sur firefox et des groupes de liens sur safari [(#755)](https://github.com/GouvernementFR/dsfr/pull/755)


#### ✨ feat(share, follow, utility): icone personalisée, et ajout twitter-x et threads [(#752)](https://github.com/GouvernementFR/dsfr/pull/752)
- ajoute la possibilité de mettre une icone de réseau social personalisée dans "follow"
- ajouts d'exemples d'icone personalisée dans "share" et "follow"
- ajouts des icones dans utility : 
  - twitter-x-fill
  - twitter-x-line
  - threads-fill
  - threads-line


#### 🐛 fix(tile): correction de l'icone des tuiles avec lien externe [(#753)](https://github.com/GouvernementFR/dsfr/pull/753)



### [v1.10.0](https://github.com/GouvernementFR/dsfr/compare/v1.9.4...v1.10.0) - 19 Juillet 2023

#### 🐛 fix(analytics): réduction d'envoi des données [(#807)](https://github.com/GouvernementFR/dsfr/pull/807)
- suppression du taux d'interaction global
- ajout de l'attribut data-fr-analytics-rating qui permet de mesurer le taux d'interaction sur un élément particulier
- suppression de l'impression des composants sans interactions
- limitation de l'envoi de donnée à la première interaction
- bouton associé à l'accordéon, l'onglet et la transcription rendu muet
- recensement des composants de la page dans une nouvelle donnée de page `page_components`


#### 🐛 fix(form): correctif barre état iOS [(#712)](https://github.com/GouvernementFR/dsfr/pull/712)
- Sur iOS, la barre d'état d'erreur ou validation est discontinue
- corrige le problème de manière générique


#### 🐛 fix(modal): retour de focus fermeture clavier [(#716)](https://github.com/GouvernementFR/dsfr/pull/716)
- Mise en place du retour du focus à la fermeture en pressant la touche ESC


#### 🐛 fix(form): correctif focus des radios riches dépréciés [(#715)](https://github.com/GouvernementFR/dsfr/pull/715)
- corrige le décalage du focus sur les boutons radio en version dépréciée


#### 🐛 fix(follow): orthographe message de confirmation [(#714)](https://github.com/GouvernementFR/dsfr/pull/714)


#### ✨ feat(core, password): boutons spéciaux input Safari [(#711)](https://github.com/GouvernementFR/dsfr/pull/711)
- Dans les champs de type password, sur safari Mac, il y a une icône apportant des outils supplémentaire qui se superpose à l’icône des signalant la hauteur de casse
- Déplacement des icônes natives pour qu'elles ne se superposent pas
- Retrait de l'icône capslock native, privilégiant la nôtre


#### 🐛 fix(core): stabilisation disclosure [(#713)](https://github.com/GouvernementFR/dsfr/pull/713)
- L'ouverture des paramètres d'affichage est par moment non réactive
- L'élément est fermé avant même d'être ouvert à cause de boucle de déclenchement
- Ajout de condition permettant de limiter les boucles


#### 📝 doc(tooltip): retrait exemple texte [(#710)](https://github.com/GouvernementFR/dsfr/pull/710)
- l'utilisation d'un tooltip sur un texte pose des problèmes de restitution
- cet usage est déconseillé
- retrait de l'exemple


#### 🐛 fix(tile): correctif espacements version dépreciée [(#704)](https://github.com/GouvernementFR/dsfr/pull/704)
- L'icône et le contenu se retrouvent superposés dans la version dépréciée, ce correctif rétablit l'espacement nécessaire


#### 🐛 fix(tile, card): A11Y liens désactivés [(#709)](https://github.com/GouvernementFR/dsfr/pull/709)
- Ajout des attributs `role="link"` et `aria-disabled=true` sur les version désactivées


#### 🐛 fix(transcription, content): correctif title et label bouton Agrandir [(#708)](https://github.com/GouvernementFR/dsfr/pull/708)
- Retrait du title sur le bouton agrandir
- Ajout label agrandir dans les exemples de content


#### ✨ feat(*): Ajout d'un meta tag iOS [(#707)](https://github.com/GouvernementFR/dsfr/pull/707)
- Sur iOS, les numéros de téléphone sont automatiquement transformés en lien
- Entraîne un mauvais rendu dans le bloc fonctionnel de numéro de téléphone
- Correction par l'ajout général du meta tag `<meta name="format-detection" content="telephone=no">`


#### 🐛 fix(card, tile): correctif IE 11 [(#705)](https://github.com/GouvernementFR/dsfr/pull/705)
- correctif sur les tuiles et card sur la version legacy pour éviter les bugs de dépassement de texte et placement des icônes


#### 🐛  fix(toggle): retrait tap-highlight-color iOS [(#703)](https://github.com/GouvernementFR/dsfr/pull/703)
- Au clic sur le toggle sur iOS, l'effet de highlight est présent
- Retrait de cet effet avec la propriété [-webkit-tap-highlight-color](https://developer.mozilla.org/fr/docs/Web/CSS/-webkit-tap-highlight-color)


#### 🐛 fix(link): correctif téléchargement multiligne [(#702)](https://github.com/GouvernementFR/dsfr/pull/702)
- les liens de téléchargement étaient limités à une seul ligne avec une ellipse sur le text dépassant
- correctif prenant en compte le retour à la ligne


#### 🐛 fix(download): graisse du titre des liens [(#701)](https://github.com/GouvernementFR/dsfr/pull/701)
- Passage des liens dépréciés en graisse regular


#### 🐛 fix(*): mise à jour des liens du readme [(#700)](https://github.com/GouvernementFR/dsfr/pull/700)
- Mise à jour des liens vers [https://www.systeme-de-design.gouv.fr](https://www.systeme-de-design.gouv.fr) dans le readme


#### 🐛 fix(modal): préviens décalage mobile [(#699)](https://github.com/GouvernementFR/dsfr/pull/699)
- l'ajout d'un padding à l'ouverture permet de se substituer au décalage créé potentiellement par la disparition de la scrollbar en desktop
- En mobile, la modale occupe 100% de la largeur, ce padding créé un espacement incorrect
- ajout d'une media query sur le breakpoint MD pour corriger le problème


#### 🐛 fix(header): correctif régression scroll horizontal [(#697)](https://github.com/GouvernementFR/dsfr/pull/697)
- La navigation du header créée un scroll horizontal dans la page
- l'ajout d'un max-width prévient le problème


#### 🐛 fix(password): correctif accessibilité des messages [(#694)](https://github.com/GouvernementFR/dsfr/pull/694)
- ajout sur les messages de validation et d'erreur de la composition du mot de passe d'un statut en after uniquement pour les lecteurs d'écrans
- BREAKING CHANGE : il est nécessaire d'ajouter les attributs `data-fr-valid`et `data-fr-error` avec les textes correspondants à l'état (respectivement, en français, "validé" et "en erreur"


#### 🐛 fix(sidemenu): correction de la couleur des liens du sidemenu [(#698)](https://github.com/GouvernementFR/dsfr/pull/698)
- Effet de bord du passage du bouton mobile en bleu, l'ensemble des boutons du sidemenu est passé en bleu.
- Ce correctif amène la spécificité nécessaire pour avoir les boutons et lien en `text default grey`


#### 🐛 fix(core): correctif sur KeyAction [(#696)](https://github.com/GouvernementFR/dsfr/pull/696)
- Corrige la régression sur l'écoute des interactions avec le clavier dû à l'évolution de la structure de la constante KeyCodes, non répercutée dans KeyAction


#### ✨ feat(colors): ajout des utilitaires de couleur flat [(#693)](https://github.com/GouvernementFR/dsfr/pull/693)
- Ajout des classes utilitaires pour le token background flat avec les variations de couleur d'accent


#### 🐛 fix(tooltip,modal): interaction globale et focus iOS [(#691)](https://github.com/GouvernementFR/dsfr/pull/691)
- Correctif à la pression de la touche Escape sur la modale : si l'élément actif (focus) est un élément de formulaire ou un média, la modale n'est pas refermée pas pour permettre l'interaction native de l'élément actif
- Correctif iOS de la prise de focus au clic
- Fermeture des tooltips dés au clic sur n'importe quel endroit
- Fermeture des tooltip à la pression sur la touche escape, où que soit le focus


#### 🐛 fix(tooltip) : a11y tooltip hover [(#686)](https://github.com/GouvernementFR/dsfr/pull/686)
- autorise le survol sur l'information contextuelle
- ajoute un `tabindex="0"` sur l'example dans un texte
- arrondi la valeur de placements de la flèche verticale à 2 décimales
- retire le `aria-hidden="true"` et ajoute `display="none"`


#### 🐛 fix(transcription): a11y retour audit [(#684)](https://github.com/GouvernementFR/dsfr/pull/684)
- place le bouton d’agrandissement avant la modale et inverse les élements via css
- ajoute `aria-label=”Agrandir la transcription”` sur le bouton d’agrandissement
- remplace la balise dialog par une balise div
- système d'activation / désactivation de la modale avec ajout / retrait dynamique de `role="dialog"` à l'ouverture / fermeture de la modale
- système de vérification et de correction pour l'**accessible name** de la modale, avec warning explicatifs


#### ✨ feat(tile): ajouts de variations de tuiles [(#685)](https://github.com/GouvernementFR/dsfr/pull/685)
Ajouts des mêmes variations que la carte : 
- `.fr-tile--no-border` sans le bordure encadrant la tuile (mais la barre épaisse basse reste)
- `.fr-tile--shadow` avec élévation
- `.fr-tile--grey` en gris contrast
- `.fr-tile--no-background` couleur de fond transparente


#### 🐛 fix(card,tile): corrige erreur de syntaxe ejs + lint [(#687)](https://github.com/GouvernementFR/dsfr/pull/687)


#### 🐛 fix(card, tile): correctif lien externe et désactivé [(#683)](https://github.com/GouvernementFR/dsfr/pull/683)
- sur les exemples avec lien externe, ajout de title="[Intitulé] - nouvelle fenêtre"
- sur les exemples avec liens désactivés, ajout de role="link" et aria-disabled="true"


#### 🐛 fix(card, tile): correctif token title [(#682)](https://github.com/GouvernementFR/dsfr/pull/682)
- le titre des cartes et tuiles doivent utiliser le token de couleur text-title-grey


#### ✨ feat(navigation, header, sidemenu): homogénéisation des espacements et indentation [(#678)](https://github.com/GouvernementFR/dsfr/pull/678)
- Uniformisation du menu latéral, navigation, et accordéon
  - ajout d'un fond open-blue-france et du texte en blue-france sur les boutons d'ouverture en état ouvert
  - ajout de marge pour indenter les sous menus
  - ajustement des espacements
- Ajustement de la navigation du header en mobile
- Ajustement de la taille max de la navigation dans le header en desktop


#### 🐛 fix(input): ajustement champs particuliers [(#679)](https://github.com/GouvernementFR/dsfr/pull/679)
- Ajuste la largeur des champs de code postal, année et nombre à des multiples de 8v


#### 🐛 fix(civility): correctif taille des boutons radio [(#676)](https://github.com/GouvernementFR/dsfr/pull/676)
- Corrige la taille des boutons radio du titre d'appel en sm au lieu de md


#### 🐛 fix(follow): ajoute d'exemple [(#675)](https://github.com/GouvernementFR/dsfr/pull/675)
- Ajout de l'exemple de succès à l'abonnement à la lettre d'information


#### 🐛 fix(analytics): correctif page.date [(#681)](https://github.com/GouvernementFR/dsfr/pull/681)
- la collecte de donnée page.date génére une erreur -> correctif
- mise en conformité avec le standard de date calendaire ISO 8601 [YYYY-MM-DD]


#### 🐛 fix(transcription): déplacement bouton modale [(#680)](https://github.com/GouvernementFR/dsfr/pull/680)
- Pour déterminer le bouton primaire qui sert à l’ouverture, un disclosure filtre parmi les boutons qui lui sont reliés et retire ceux qui se trouve à l’intérieur du contenu du disclosure (ce sont les boutons de fermeture)
- Actuellement, la transcription a le bouton d'ouverture de modale à l'intérieur de son contenu, ce qui bloque le fonctionnement, le bouton n'étant pas reconnu comme primaire.
- Le correctif déplace le bouton après la dialog de la modal et restitue le fonctionnement de la transcription


#### 🐛 fix(form): met a jour les libelles des indications [(#674)](https://github.com/GouvernementFR/dsfr/pull/674)
- retrait de la capitalisation des mentions d'indication


#### 🐛 fix(date): ajustement exemples [(#671)](https://github.com/GouvernementFR/dsfr/pull/671)
- mise en place de date cohérentes avec les erreurs affichées dans les exemples


#### 🐛 fix(form): correctif alignement icône des messages [(#670)](https://github.com/GouvernementFR/dsfr/pull/670)
- l'icône à gauche des messages d'erreur/succès sur plusieurs lignes doit être accrochée en haut et non pas centrée


#### 🐛 fix(password): retrait du bouton natif sur edge [(#669)](https://github.com/GouvernementFR/dsfr/pull/669)
- Sur edge une icône oeil apparaît au focus d'un champ de type "password"
- Retrait de l'icone native


#### 🐛 fix(name): a11y - gestion du focus [(#664)](https://github.com/GouvernementFR/dsfr/pull/664)
Ajoute dans la page d’exemple le déplacement du focus : 
- au click sur la checkbox de désactivation pour activer, le premier champ ou bouton prend le focus
- au click sur l’ajout d’un prénom, le champs ajouté prend le focus
- au click sur la suppression, le champ ou bouton suivant prend le focus


#### 🐛 fix(footer): retrait de CSS obsolète [(#668)](https://github.com/GouvernementFR/dsfr/pull/668)
- retrait de CSS résiduel de précédentes versions dans le footer-bottom__list


#### 🐛 fix(password): correctif états de la case à cocher [(#667)](https://github.com/GouvernementFR/dsfr/pull/667)
- force l'état de la checkbox à l'état par défaut, pour éviter qu'elle ne passe en erreur/succès si elle hérite de cet état sur le composant.


#### 🐛 fix(tooltip): mise a jour exemple [(#666)](https://github.com/GouvernementFR/dsfr/pull/666)
- Dans l'exemple "Information contextuelle dans un tableau", remplacement de l'information contextuelle par une infobulle (interaction au clic plutôt qu'au survol)


#### 🐛 fix(input): fix groupe attributes & multiple hint text [(#665)](https://github.com/GouvernementFR/dsfr/pull/665)
- Correction attribut en trop sur les input-group
- multiple texte additionnel sur le modèle de champs d'adresse électronique
- Correction des textes additionnels


#### 🐛 fix(modal): suppression exemple des liens dans la zone d'action [(#663)](https://github.com/GouvernementFR/dsfr/pull/663)
- Ce cas n'est pas recommandé, la zone d'action étant plutôt prévue pour des boutons


#### 🐛 fix(consent): correctif espacement et couleur [(#662)](https://github.com/GouvernementFR/dsfr/pull/662)
- Corrige description d'une finalité de 3v à 2v en margin-bottom
- Homogénéité avec accordion, nav et sidemenu sur le bouton de la modale de consentement “voir plus de détails” :
   - enlever le soulignement
   - mettre en bleu le lien “voir plus de détail”


#### 🐛 fix(card, tile): ajout version sans liens, target blank, et mise à jour des exemples [(#657)](https://github.com/GouvernementFR/dsfr/pull/657)
- Ajout de version carte et tuile sans lien (en noir)
- Ajout de l'icone target blank sur les cartes avec lien non élargi en target="_blank"
- Ajout d'exemples de carte et tuile de téléchargement avec remplissage automatique des détails (en Octet ou en Bytes)
- Ajout d'exemple de carte et tuile de téléchargement avec fichier en langue étrangère
- Séparation des exemples de tuile de téléchargement
- Changement des pictogrammes des tuiles de téléchargement
- Ajustement de la grille dans les exemples de tuiles


#### 🐛 fix(pagination): correctif régression href des exemples [(#661)](https://github.com/GouvernementFR/dsfr/pull/661)
- Corrige la régression qui a supprimé les liens des éléments de pagination


#### 🐛 fix(sidemenu):  suppression variante et correctif style bouton mobile [(#660)](https://github.com/GouvernementFR/dsfr/pull/660)
- Suppression de la variante avec bordure
- Corrige le style du bouton mobile en action-high-blue-france (cohérence navigation/accordion)


#### 🐛 fix(company): retrait des pluriels [(#659)](https://github.com/GouvernementFR/dsfr/pull/659)
- Correction du langage dans la demande d'un représentant moral, suppression des pluriels optionnels


#### 🐛 fix(link): corrige graisse lien de téléchargement [(#658)](https://github.com/GouvernementFR/dsfr/pull/658)
- retire le font-weight bold sur le lien de téléchargement


#### 🐛 fix(password): bug icône [(#648)](https://github.com/GouvernementFR/dsfr/pull/648)
- conditionne l'ajout de la classe utile `fr-icon` à l'utilisation d'une string en paramètre `icon`


#### 🐛 feat(company): accessibilité lien externe [(#656)](https://github.com/GouvernementFR/dsfr/pull/656)
- corrige l'accessibilité du lien en `target="_blank"` par l'ajout d'un attribut `title`  :  "Annuaire des entreprises – nouvelle fenêtre"


#### 🐛 fix(unexpected): corrige groupe de bouton vide [(#655)](https://github.com/GouvernementFR/dsfr/pull/655)
- ajoute une condition sur l'ajout du wrapper `.fr-btns-group` dans la template `ejs`


#### 🐛 fix(*): accessibilité aria-live [(#654)](https://github.com/GouvernementFR/dsfr/pull/654)
- remplace la valeur aria-live `assertive` par `polite`


#### 🐛 fix(account): accessibilité champs obligatoires [(#652)](https://github.com/GouvernementFR/dsfr/pull/652)
-  La mention de "champs obligatoires" doit être mise dans un élément `<p>` sur les pages de connexion et création de compte


#### 🐛 fix(pattern): dénomination des blocs fonctionnels [(#649)](https://github.com/GouvernementFR/dsfr/pull/649)
- Mise à jour et harmonisation de la dénomination des blocs fonctionnels


#### 🐛 fix(core): correctif padding négatif [(#650)](https://github.com/GouvernementFR/dsfr/pull/650)
- ajoute une condition pour éviter le padding négatif actuellement présent dans les classes utiles


#### ⬆️ chore(*): montée de version NodeJS 18 [(#644)](https://github.com/GouvernementFR/dsfr/pull/644)
- Monte la version minimale de NodeJS en 18.16.1


#### 🐛 fix(core): correctif bug proxy Toggle [(#646)](https://github.com/GouvernementFR/dsfr/pull/646)
- Dans la class Toggle, le proxy appelle la fonction toggle qui a été remplacée par la fonction générique handleClick : 
- Ce correctif restaure la fonction toggle et implémente son appel dans handleClick


#### 📝 docs(analytics): correction doc analytics & readme [(#643)](https://github.com/GouvernementFR/dsfr/pull/643)
- mise à jour du readme
- corrections diverses documentation analytics


#### 🐛 fix(analytics): correctif hiérarchie [(#647)](https://github.com/GouvernementFR/dsfr/pull/647)
- l'analyse de hiérarchie ignorait les headings présents dans un composant. 
- ce correctif permet de les inclure dans l'analyse.


#### 🐛 fix(changelog): correctif inclusion des html [(#642)](https://github.com/GouvernementFR/dsfr/pull/642)
- inclusion des caractères spéciaux html pour que les snippets soient affichés correctement


#### ⬆️ chore(dependencies): met a jour les dépendances Node [(#638)](https://github.com/GouvernementFR/dsfr/pull/638)
- Mise à jour de sécurité


#### 🐛 fix(core): apparence du champ de recherche iOS [(#639)](https://github.com/GouvernementFR/dsfr/pull/639)
- En utilisant des librairies tierces (telles que normalize.css), le champ de recherche reprend son aspect natif arrondi en mobile IOS.
- Spécificité renforcée sur le sélecteur afin de conserver le appearance: none


#### 🐛 fix(header): duplication des id généralisée pour les quick access [(#637)](https://github.com/GouvernementFR/dsfr/pull/637)
- L'ensemble des id présents dans les accès rapides du header doivent être suffixés par -mobile à la duplication


#### 🐛 fix(analytics): correctifs divers et ajouts de propriétés de page [(#612)](https://github.com/GouvernementFR/dsfr/pull/612)
- liens cassés de la documentation
- retrait du patch js des pages d'exemple
- correctif du collect manuel au changement d'url
- correctif du taux de clic désactivé sur certains composants
- ajustements pages d'exemple
-  retrait des limitation de valeurs sur la propriété`user.profile` 
- ajouts de propriétés dans la configuration de page 
  - page_id
  - page_author
  - page_tags
  - page_date


#### 🐛 fix(search): hauteur du champ trop grande de 1px sur ios [(#632)](https://github.com/GouvernementFR/dsfr/pull/632)
Sur ios le champ dépasse de 1px par rapport au bouton.

-> Correction du max-height


#### ✨ feat(select, input): ajout de la bordure en état erreur / succés / info [(#635)](https://github.com/GouvernementFR/dsfr/pull/635)
Actuellement la bordure gauche montrant l'état d'erreur/succès/info n'est appliqué que dans le cas d'un groupe de champ en erreur via les modificateur .fr-fieldset--error, .fr-fieldset--valid, .fr-fieldset--info

Afin d'être ISO avec l'UI nous rajoutons cet élément visuel sur : 
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


#### 🐛 fix(example): retire les attributs file des <link> [(#631)](https://github.com/GouvernementFR/dsfr/pull/631)
- l'attribut file n'est pas un attribut possible pour les éléments <link>


#### 🐛 fix(link, button, tag, badge): retrait du z-index [(#630)](https://github.com/GouvernementFR/dsfr/pull/630)
- retrait du z-index: 1 qui pose problème dans une modale avec footer.


#### 🎉 feat(tooltip): ajout de la fonctionnalité Tooltip [(#486)](https://github.com/GouvernementFR/dsfr/pull/486)
Le composant `Infobulle` (ou `bulle d’aide`, `aide contextuelle`) permet d’afficher du contenu dans le contexte de navigation (non modal), à propos et lors de l’interaction avec un élément précis de l’interface. Il est caché par défaut, et s’affiche au survol ou au clic de l’élément associé, par-dessus le reste de la page.


#### 🐛 fix(share): correction copie url dans presse papier [(#629)](https://github.com/GouvernementFR/dsfr/pull/629)
- Gestion de la Promise retournée par `navigator.clipboard.writeText()`


#### ✨ feat(address): met a jour les message d'aide des champs de formulaire [(#624)](https://github.com/GouvernementFR/dsfr/pull/624)
- ajout d'indication et de description du format attendu


#### 🐛 fix(account): met a jour la hiérarchie html des modèles de page [(#618)](https://github.com/GouvernementFR/dsfr/pull/618)
- Mise en place d'une hiérarchie sans saut de niveau de titre, plus cohérente
- Correctif typo sur la classe `fr-grid-row--gutters`


#### 🐛 fix(accordion, transcription, translate, sidemenu): Ajustement sur l'état défaut et actif [(#564)](https://github.com/GouvernementFR/dsfr/pull/564)
Harmonisation avec la navigation sur Accordion, Sidemenu, Translate et Transcription :
- Passage icône et intitulé en action-high-blue-france
- Ajout background-open-blue-france sur le bouton lorsque l'élément est ouvert
- Icône “arrow-down-s-ligne” (la même que sur navigation)
- Accordion, Translate : Retrait changement de graisse (normal -> bold) à l'ouverture et graisse constante en medium


#### 🐛 fix(tab, core): correctif tab legacy & margin top des headings [(#621)](https://github.com/GouvernementFR/dsfr/pull/621)
- Corrige la taille de l'icône
- Corrige l'alignement du contenu du tab_panel
- Ajustement du padding de la tab__list
- Retire les margin-top des headings (h1 -> h6)


#### 📝 doc(core): ajoute des exemples liens bruts et resets [(#613)](https://github.com/GouvernementFR/dsfr/pull/613)
Par défaut, le dsfr stylise les liens natifs, ce qui peut poser problème dans l'utilisation de librairie tierce.
2 classes utilitaires sont mise à disposition pour contrecarrer le style fort du lien : 
- `.fr-raw-link` retire toute stylisation sur les liens natifs
- `.fr-reset-link` remet le soulignement natif du navigateur (`text-decoration: underline;`)
Des pages d'exemples en illustrant l'utilisation ont été ajoutées dans les pages d'exemples des fondamentaux.


#### ✨ feat(radio): radio rich sans images & pictogram à la place d'img [(#540)](https://github.com/GouvernementFR/dsfr/pull/540)
Les radios riches doivent utiliser des pictogrammes et non des images :
- Retrait des images
- Ajout de pictogramme

Le snippet :
```html
<div class="fr-radio-group fr-radio-rich">
  <input value="1" type="radio" id="radio-rich-1" name="radio-rich">
  <label class="fr-label" for="radio-rich-1">
      Libellé bouton radio
  </label>
  <div class="fr-radio-rich__img">
      <img src="../../../example/img/placeholder.1x1.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]" />
  </div>
</div>
```
DEVIENT : 
```html
<div class="fr-radio-group fr-radio-rich">
  <input value="1" type="radio" id="radio-rich-1" name="radio-rich">
  <label class="fr-label" for="radio-rich-1">
      Libellé bouton radio
  </label>
  <div class="fr-radio-rich__pictogram">
      <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
          <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use>
          <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use>
          <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use>
      </svg>
  </div>
</div>
```
Remplacer buildings/city-hall par la catégorie et le nom du pictogramme désiré

BREAKING CHANGE : `fr-radio-rich__img` devient `fr-radio-rich__pictogram`


#### 📝 doc(core): corrige les liens vers les pages de documentation des fondamentaux [(#623)](https://github.com/GouvernementFR/dsfr/pull/623)
- Mise à jour des liens vers les fondamentaux sur le site de documentation


#### ⬆️ chore(dependencies): met a jour les dépendances Node [(#622)](https://github.com/GouvernementFR/dsfr/pull/622)
- Mise à jour de sécurité


#### ✨ feat(card): image des cartes de téléchargement format a4 [(#620)](https://github.com/GouvernementFR/dsfr/pull/620)
- Ajout d'une image de placeholder au format a4 (21x29.7)


#### 🐛 fix(core): corrige liens pour retro-compat sur firefox [(#615)](https://github.com/GouvernementFR/dsfr/pull/615)
- La fonction css max(), mise en place pour corriger le bug d'affichage d'un soulignement d'une épaisseur inférieure à 1px, est supportée à partir de la version 78 de firefox, ce qui est insuffisant.
- Le précédent bug est maintenant corrigé avec un léger épaississement du trait sur firefox (0.25px)


#### 🐛 fix(header, navigation): focus des nav-items mobile & ajustements [(#609)](https://github.com/GouvernementFR/dsfr/pull/609)
- L'outline de focus est maintenant entièrement visible sur les liens des sous menu en mobile
- Ajustement de l'alignement du bouton fermé en desktop
- Retrait du mega-menu__leader vide dans les examples


#### ✨ feat(pagination): évolution taille et écart des boutons [(#549)](https://github.com/GouvernementFR/dsfr/pull/549)
Harmonisation de l'espacement entre les boutons de pagination :
- L'espacement passe à 16px entre tous les boutons
- Les boutons passent en taille SM


#### 🐛 fix(core, modal): décalage scrollbar à l'ouverture/fermeture modale & fix scroll behavior [(#519)](https://github.com/GouvernementFR/dsfr/pull/519)
Lorsque la page est scrollable, un décalage se produit à l'ouverture d'une modal (la page étant figé elle n'est plus scrollable).

Une marge est donc appliquée à l'ouverture de la modale pour simuler la barre de scroll et ainsi éviter le mouvement du contenu en arrière plan.


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
- L'outline au focus englobe tout le radio-riche, plus l'input

checkbox:
- Le contour devient bleu
- correction changement d'état au mouse-down (:active), maintenant au mouse up

Form: 
- les hint-text des champs désactivés passent en couleur `--text-disabled-grey`


#### ✨ feat(core): ouverture des disclosures à partir des ancres, état disabled désactive disclosure [(#532)](https://github.com/GouvernementFR/dsfr/pull/532)
- Correctif de l'état disabled sur les boutons associés à une modale, un onglet ou un accordéon. La fonctionnalité d'ouverture est désactivée si les boutons primaires sont désactivés.
- Ajout de la fonctionnalité d'ouverture d'une modale, d'un onglet ou d'un accordéon si la partie ancre de l'url correspond à l'id de l'élément -> les liens d'évitements peuvent ouvrir le menu et la recherche en mobile.


#### 🐛 fix(tab): écoute des événements de clavier déplacé sur la liste d'onglets [(#531)](https://github.com/GouvernementFR/dsfr/pull/531)
L'écoute des événements de clavier se faisant sur le composant, il est impossible d'interagir avec des éléments de formulaire dans le contenu de l'onglet -> l'écoute est déplacée au niveau de la liste des onglets, ce qui en exclut le contenu


#### ✨ feat(name): ajout bouton de suppression de prénom [(#493)](https://github.com/GouvernementFR/dsfr/pull/493)
Dans le modèle de de bloc nom/prénom, un bouton permet d'ajouter des champs de saisie pour les prénoms secondaires -> ajout d'un bouton permettant de supprimer ces champs ajoutés


#### ✨ feat(tile): Ajout icône flèche, état désactivé, icone lien externe, tuile de téléchargement [(#602)](https://github.com/GouvernementFR/dsfr/pull/602)
Les tuiles peuvent maintenant être de type téléchargement (comme les cartes)
  - Les tuiles de téléchargement sont par défaut horizontales
  - Le détail de la tuile de téléchargement est obligatoire et il peut être rempli automatiquement en fonction du fichier à télécharger en plaçant à l'attribut "data-fr-assess-file" sur le lien (comme pour carte)

Les tuiles ont maintenant par défaut une icone.
  - arrow-right (par défaut)
  - external-link (en target="_blank")
  - download (avec la classe fr-tile--download)

Les tuiles désactivées (a sans href) ont à présent:
  - la bordure bottom en grise
  - l'icone et le titre en gris
  
Ajout des classes "fr-tile--vertical@md" et  "fr-tile--vertical@lg" pour passer une tuile horizontale, ou download, en vertical à partir des breakpoints md et lg


#### 🎉 feat(tile): évolution des tuiles [(#534)](https://github.com/GouvernementFR/dsfr/pull/534)
**Evolution majeur du composant Tuile :**
Nous souhaitons revoir la structure html de la tuile pour étendre les variations de contenu (avec détails, badge, etc), et uniformiser avec les comportements de la Carte (card).

Changements apportés :
- Ajout d'un niveau d'encapsulation dans la structure html
  - Ajout d'un wrapper "fr-tile__content" pour englober le contenu
  - Ajout d'un wrapper "fr-tile__header" pour englober l'image
- L'image des tuiles est remplacée par un pictogramme
  - La classe "fr-tile__img" devient "fr-tile__pictogram" 
  - Son contenu est maintenant un svg "fr-artwork"
- Ajout de la possibilité de placer un badge, un tag, un texte de détail, dans le contenu de la tuile
- Ajout d'une taille de tuile SM : "fr-tile--sm"

**⚠️ Breaking Change**
Le snippet de code d'une tuile : 
```html
<div class="fr-tile fr-enlarge-link">
    <div class="fr-tile__body">
        <h4 class="fr-tile__title">
            <a class="fr-tile__link" href>Titre M bold</a>
        </h4>
        <p class="fr-tile__desc">Texte M regular 2 lignes max</p>
   </div>
   <div class="fr-tile__img">
       <img class="fr-responsive-img" src="../../../example/img/placeholder.1x1.png" alt="" />
       <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
    </div>
</div>
```

Devient : 
```html
<div class="fr-tile fr-enlarge-link" id="tile-6584">
    <div class="fr-tile__body">
        <div class="fr-tile__content">
            <h3 class="fr-tile__title">
                <a href="#">Intitulé de la tuile</a>
            </h3>
            <p class="fr-tile__desc">Lorem [...] elit ut.</p>
        </div>
    </div>
    <div class="fr-tile__header">
        <div class="fr-tile__pictogram">
            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use>
                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use>
                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use>
            </svg>
        </div>
    </div>
</div>
```


#### 🚚 refactor(download): séparation du download en carte et lien [(#487)](https://github.com/GouvernementFR/dsfr/pull/487)
Pour mutualiser les comportements de la carte et du lien au composant download, celui-ci doit devenir une variante de ces composants et non pas l'inverse.

Retrait du composant : téléchargement de fichier - Download -> déprécié
Ajout de la variante de carte : fr-card--download 
Ajout de la variante de lien : fr-link--download 

Le lien de téléchargement : 
```html
<div class="fr-download">
    <h3>
        <a href="[À MODIFIER - /example/img/image.jpg]" download class="fr-download__link">Télécharger le document lorem ipsum sit dolores amet
            <span class="fr-download__detail">
                JPG – 61,88 ko
            </span>
        </a>
    </h3>
</div>
```
DEVIENT : 
```html
<a class="fr-link fr-link--download" download href="[À MODIFIER - example/img/image.jpg]">
    Télécharger le document lorem ipsum sit dolores amet <span class="fr-link__detail">JPG – 61,88 ko</span>
</a>
```

et la carte de téléchargement : 
```html
<div class="fr-download fr-enlarge-link fr-download--card">
    <h3>
        <a href="[À MODIFIER - example/img/image.jpg]" download class="fr-download__link">Télécharger le document lorem ipsum sit dolores amet
            <span class="fr-download__detail">
                JPG – 61,88 ko
            </span>
        </a>
    </h3>
    <p class="fr-download__desc">Texte de description<</p>
</div>
```
DEVIENT : 
```html
<div class="fr-card fr-enlarge-link fr-card--download">
    <div class="fr-card__body">
        <div class="fr-card__content">
            <h3 class="fr-card__title">
                <a download href="[À MODIFIER - example/img/image.jpg]">
                    Télécharger le document lorem ipsum sit dolores amet
                </a>
            </h3>
            <p class="fr-card__desc">Texte de description</p>
            <div class="fr-card__end">
                <p class="fr-card__detail">JPG – 61,88 ko</p>
            </div>
        </div>
    </div>
</div>
```

BREAKING CHANGE : Remplacer le composant fr-download par la variante de link fr-link--download et remplacer le composant fr-download--card par une carte fr-card--download




## v1.9

### [v1.9.4](https://github.com/GouvernementFR/dsfr/compare/v1.9.3...v1.9.4) - 23 Octobre 2023

#### 🐛 fix(analytics): réduction d'envoi des données [(#807)](https://github.com/GouvernementFR/dsfr/pull/807)
- suppression du taux d'interaction global
- ajout de l'attribut data-fr-analytics-rating qui permet de mesurer le taux d'interaction sur un élément particulier
- suppression de l'impression des composants sans interactions
- limitation de l'envoi de donnée à la première interaction
- bouton associé à l'accordéon, l'onglet et la transcription rendu muet
- recensement des composants de la page dans une nouvelle donnée de page `page_components`



### [v1.9.3](https://github.com/GouvernementFR/dsfr/compare/v1.9.2...v1.9.3) - 17 Mai 2023

#### 🐛 fix(breadcrumb): ajoute une page exemple alternative [(#600)](https://github.com/GouvernementFR/dsfr/pull/600)
- étiquette d'élément span rendue possible sur l'élément courant du fil d'ariane
- ajout d'une page d'exemple avec boutons


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

-> retrait de cette propriété


#### 🐛 fix(modal): correction ombre modal footer [(#572)](https://github.com/GouvernementFR/dsfr/pull/572)
L'ombre du footer de la modal scrollable est mal placée et trop forte.

- Remplacement de l'ombre par une bordure d'1px en defaut-grey en haut du footer
- remplacement du token de background-color du footer par background-lifted-grey
- ajout d'un texte plus long dans l'exemple modal + footer pour faire apparaître le scroll


#### 🐛 fix(password, account): correction capslock safari [(#503)](https://github.com/GouvernementFR/dsfr/pull/503)
- Correction erreur js sur le champ password au clic sur le trousseau (safari)
- Retrait icone native capslock safari
- Ajout attribut `autocapitalize='off'` sur les champs password et email pour désactiver la majuscule au début (mobile)
- Ajout attribut `autocorrect` sur les champs password et email pour désactiver la correction orthographique


#### ✨ feat(*): nouvelle version interne changelog [(#590)](https://github.com/GouvernementFR/dsfr/pull/590)
Outil en ligne de commande pour générer un journal des modifications CHANGELOG.md à partir des balises git et de l'historique des commits.

Commande à exécuter à la racine du projet, git log est exécuté en arrière-plan afin d'analyser l'historique des commits, en lançant :
```
yarn changelog
```

Pour ajouter les commits d'une nouvelle version en préparation, renseigner le futur tag : 
```
yarn changelog -t X.X.X
```

La gestion de l'affichage du changelog est présente dans le template EJS `tools/classes/changelog/changelog.ejs`



### [v1.9.2](https://github.com/GouvernementFR/dsfr/compare/v1.9.1...v1.9.2) - 18 Avril 2023

#### 🐛 fix(analytics): correctifs analytics & page test spa [(#587)](https://github.com/GouvernementFR/dsfr/pull/587)
* Amélioration de la qualité des labels envoyés à Eulerian
  * Maximum 50 caractères, couper avec […] au delà
  * Récupère uniquement le premier texte
  * Retrait des espaces en trop
* Ajout de la propriété `isDebugging` dans `dsfr.analytics` permettant d'activer/désactiver le debug Eulerian
* Mise en conformité avec les SPA (Single-page application - Angular, React, Vue)
* Ajout d’exemples de SPA (Vue & React)


#### ✨ feat(analytics): polyfill legacy [(#588)](https://github.com/GouvernementFR/dsfr/pull/588)
Ajout des polyfills et correctifs nécessaires au support d'IE11


#### ✨ feat(changelog): ajoute changelog auto-généré [(#561)](https://github.com/GouvernementFR/dsfr/pull/561)
Outil en ligne de commande pour générer un journal des modifications `CHANGELOG.md` à partir des balises git et de l'historique des commits, nous utilisons [Auto-changelog](https://github.com/cookpete/auto-changelog).

Commande à executer à la racine du projet, `git log` est exécuté en arrière-plan afin d'analyser l'historique des commits, en lançant :

```
yarn version
```

Il faut ensuite renseigner le numéro de version de la prochaine release :
```
info Current version: x.x.x
question New version: [X.X.X]
```

La configuration est présente dans le fichier `.auto-changelog`.

La gestion de l'affichage du changelog est présente dans le template [Handlebars](https://handlebarsjs.com/) `changelog-template.hbs`.



### [v1.9.1](https://github.com/GouvernementFR/dsfr/compare/v1.9.0...v1.9.1) - 11 Avril 2023

#### fix(input): correction bug icone date-picker firefox version 109+ [(#585)](https://github.com/GouvernementFR/dsfr/pull/585)
Depuis la version 109 de Firefox, l'icone date-picker est en double sur les champs type date
- Ajout de l'icone date-picker si le navigateur le supporte uniquement


#### ✨ feat(analytics): évolution et ajout de nouveaux composants [(#560)](https://github.com/GouvernementFR/dsfr/pull/560)
- Ajout d’un attribut id sur tous les éléments marqués. Les éléments où l'id manque sont recensés en warning dans la console.
- ⚠ Modification de la configuration analytics : 
  ⋅ dsfr.analytics.mode devient dsfr.analytics.collection et peut maintenant prendre les valeurs MANUAL, LOAD, FULL, HASH (voir doc). 
  ⋅ Ajout du support des SPA activé automatiquement si en mode ANGULAR, REACT ou VUE
  ⋅ Ajout de la variable `enableRating` dans dsfr.analytics.enableRating, permettant d’activer le taux de clic (désactivé par défaut).
- Ajout du support analytics sur les composants restants : 
  - [x] Ajout de fichier - File upload
  - [x] Alertes - Alert
  - [x] Badge
  - [x] Bandeau d'information importante
  - [x] Bouton FranceConnect
  - [x] Champ de saisie - Input
  - [x] Citation - Quote
  - [x] Contenu médias - Responsive médias
  - [x] Gestionnaire de consentement - Consent banner
  - [x] Indicateur d'étape
  - [x] Lettre d'information et réseaux sociaux - Newsletter & Follow us
  - [x] Liens d'évitement - Skiplink
  - [x] Liste déroulante - Select
  - [x] Pagination
  - [x] Sélecteur de langue
  - [x] Tableau - Table
  - [x] Tag
  - [x] Téléchargement de fichier
  - [x] Tuile - Tile
  - [x] Transcription


#### ✨ feat(header,navigation): fermeture de la navigation au clic sur lien ou bouton [(#583)](https://github.com/GouvernementFR/dsfr/pull/583)
Actuellement, la navigation reste présente en mobile et en desktop lorsque l'on clique sur un lien ou un bouton qu'elle contient, ce qui pose problème dans le cas des Single-page application.
La fonctionnalité est maintenant modifiée pour que tout clic sur un élément `<button>` ou `<a>` entraîne la fermeture de la navigation (modale et/ou menu).
L'ajout de l'attribut `data-fr-prevent-conceal` permet de préserver un lien ou un bouton particulier de ce nouveau comportement.


#### 🐛 fix(build): changement des path pour compiler sur windows [(#580)](https://github.com/GouvernementFR/dsfr/pull/580)
Sur windows il n'est pas possible de recompiler le projet avec yarn build
Correction des path dans les tools (windows utilise "" et linux et mac "/")


#### ✨ feat(github): ajout de templates d'issue github [(#569)](https://github.com/GouvernementFR/dsfr/pull/569)
Création de template d'issue Github pour indiquer les informations demandées lors d'un report de 
- bug
- évolution
- documentation


#### 🐛 fix(core): correction icone lien externe IE [(#548)](https://github.com/GouvernementFR/dsfr/pull/548)
Sur Internet Explorer, les icônes des liens externes ne s'affichent plus.
Correction css sur core.


#### ⬆️ feat(deps): mise à jour des dépendances [(#553)](https://github.com/GouvernementFR/dsfr/pull/553)


#### 🐛 fix(transcription): corrige largeur du bouton a l'ouverture de la modale [(#565)](https://github.com/GouvernementFR/dsfr/pull/565)
à l'ouverture de la modale de la transcription, le déplacement des éléments en position fixed change la taille du bouton de la transcription à sa taille minimum. 
La largeur étendue à 100% permet de la conserver constante.


#### 🐛 fix(notice): ajoute 'importante' au bandeau d'information importante [(#563)](https://github.com/GouvernementFR/dsfr/pull/563)
Le nom du composant devient "Bandeau information importante"


#### ✨ feat(footer): évolution des mentions légales [(#568)](https://github.com/GouvernementFR/dsfr/pull/568)
Nouveau texte : ”Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous”


#### 🐛 fix(consent): consent placeholder video mal centré [(#573)](https://github.com/GouvernementFR/dsfr/pull/573)
Dans le cas d'une vidéo le placeholder est en display block
Retrait de la propriété non désirée


#### 🐛 fix(password): correctif erreur getModifierState [(#574)](https://github.com/GouvernementFR/dsfr/pull/574)
Lorsque le navigateur fait l'autocompletion du champ password, il lance un événement qui n'est pas forcément un évènement de clavier et provoque une erreur indiquant que la fonction getModifierState n'existe pas.


#### 🐛 fix(modal): correctif prise de focus au focus-trap [(#566)](https://github.com/GouvernementFR/dsfr/pull/566)
à l'ouverture de la modale, le focus est automatiquement déplacé sur le premier des éléments interactifs de la modale.
Ce comportement pose problème lorsque le focus est déjà sur un des éléments contenus dans la modale.

Ajout d'une condition qui vérifie que le focus n'est pas déjà sur un des éléments interactifs de la modale avant de déplacer le focus.


#### ✨ feat(readme): Mise à jour du readme [(#559)](https://github.com/GouvernementFR/dsfr/pull/559)
Fine tuning, ajout de licence et droit d'utilisation et corrections.


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
Le code inline du scheme boot provoque des erreurs interrompant l'exécution du javascript sur IE11
Il faut ajouter l'attribut type="module" sur l'étiquette d'élément script liée au scheme-boot


#### fix(header): copie du sélecteur de langue sans accès rapide [(#547)](https://github.com/GouvernementFR/dsfr/pull/547)
Les accès rapides sont dupliqués dans le menu mobile par le JS (sauf dans les modes SPA)
En l'absence d'accès rapide, le sélecteur de langue n'était pas dupliqué comme attendu


#### fix(artwork): depreciation des xlink dans les artwork [(#545)](https://github.com/GouvernementFR/dsfr/pull/545)
xlink-href est déprécié : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href
Il était privilégié jusqu'ici pour le support d'IE11. Un polyfill a été mis en place pour assurer la rétrocompatibilité avec IE11


#### fix(address): Inversion ordre immeuble et batiment [(#544)](https://github.com/GouvernementFR/dsfr/pull/544)
inversion de 2 champs dans les modèles formulaire d'adresse


#### fix(core): correctif de la taille minimum de l'underline des liens [(#543)](https://github.com/GouvernementFR/dsfr/pull/543)
Sur Firefox, la relativité de l'épaisseur du lien (en em) provoque parfois son invisibilité lorsque celui-ci est inférieur à 1px. Ce correctif met en place un minimum de 1px pour l'épaisseur du lien.


#### fix(header): alignement à gauche des raccourcis sans icônes [(#542)](https://github.com/GouvernementFR/dsfr/pull/542)
L'absence d'icône sur les accès rapides de l'En-tête provoque un alignement centré au lieu d'un alignement gauche attendu.


#### fix(checkbox, radio): placement de l'input caché & alignement sm [(#539)](https://github.com/GouvernementFR/dsfr/pull/539)
Corrige le mauvais placement du curseur sur les cases à cocher et les boutons radio lors de l'utilisation de VoiceOver (screen reader de MacOs)


#### fix(core): correction du curseur des textarea [(#537)](https://github.com/GouvernementFR/dsfr/pull/537)


#### fix(input): correction placement icone calendrier sur input type="date" [(#536)](https://github.com/GouvernementFR/dsfr/pull/536)
corrige le problème de double icône remonté dans #530


#### feat(icon): ajout icones system [(#551)](https://github.com/GouvernementFR/dsfr/pull/551)
Ajout d'icônes dans system :
fr--arrow-right-up-circle-fill,
fr--arrow-right-down-circle-fill,
fr--equal-circle-fill,


#### fix(scheme): ajout du mode sombre de la scrollbar du navigateur  (#535) [(#407)](https://github.com/GouvernementFR/dsfr/pull/407)
Permet de synchroniser le thème de la scrollbar avec celui du DSFR


#### feat(color): ajout de token de couleurs artwork [(#552)](https://github.com/GouvernementFR/dsfr/pull/552)
Ajoute les tokens des familles de couleurs neutral, primary et accent sur artwork dans les usages decorative, background et motif


#### feat(pictograms): Ajouts des pictogrammes food, grocery, house [(#520)](https://github.com/GouvernementFR/dsfr/pull/520)


#### feat(deps): mise à jour des dependances npm [(#533)](https://github.com/GouvernementFR/dsfr/pull/533)


#### fix(response): retrait du fil d'Arianne sur les pages d'erreur [(#507)](https://github.com/GouvernementFR/dsfr/pull/507)


#### fix(toggle): rend le composant compatible avec vite+svelte [(#518)](https://github.com/GouvernementFR/dsfr/pull/518)




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


#### fix(scheme): ajout du scheme-boot permettant d'éliminer le flash au load de la page en dark mode [(#455)](https://github.com/GouvernementFR/dsfr/pull/455)


#### fix(scheme): correctifs de l'API JS de couleur [(#448)](https://github.com/GouvernementFR/dsfr/pull/448)


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


#### fix(form, upload): error & disabled [(#428)](https://github.com/GouvernementFR/dsfr/pull/428)


#### fix(tag): correction tag selectionnable hover [(#430)](https://github.com/GouvernementFR/dsfr/pull/430)


#### fix(connect): correction wording "qu'est-ce que france connect" [(#431)](https://github.com/GouvernementFR/dsfr/pull/431)


#### fix(accordion): correction token de couleur [(#432)](https://github.com/GouvernementFR/dsfr/pull/432)


#### feat(api): ajout d'événements sur le scheme [(#434)](https://github.com/GouvernementFR/dsfr/pull/434)


#### feat(api): ajoute la class Colors [(#424)](https://github.com/GouvernementFR/dsfr/pull/424)


#### refactor(pattern,page): réagencement des modèles de bloc et de page [2625,2628,2631,2634,2643,2649,2655,2666,2670] #423


#### fix(tile, summary, sidemenu): niveau de titre des composants [(#420)](https://github.com/GouvernementFR/dsfr/pull/420)


#### feat(transcription): ajoute le composant transcription [(#412)](https://github.com/GouvernementFR/dsfr/pull/412)


#### fix(doc): met a jour les urls de documentation [(#413)](https://github.com/GouvernementFR/dsfr/pull/413)


#### fix(tabs): Ouverture de modal à l'intérieur d'un composant onglet [(#405)](https://github.com/GouvernementFR/dsfr/pull/405)


#### fix(sidemenu): sidemenu disparait à l'ouverture modale FF [(#406)](https://github.com/GouvernementFR/dsfr/pull/406)


#### fix(page): ajustement des imbrications de container [(#417)](https://github.com/GouvernementFR/dsfr/pull/417)


#### fix(footer): bordure bleu inset & logo toujours aligné en haut [(#410)](https://github.com/GouvernementFR/dsfr/pull/410)


#### fix(response): met a jour les espacements des pages erreur [(#402)](https://github.com/GouvernementFR/dsfr/pull/402)


#### fix(response): Mise à jour des path des pictogrammes [(#400)](https://github.com/GouvernementFR/dsfr/pull/400)


#### fix(password): correction template password [(#399)](https://github.com/GouvernementFR/dsfr/pull/399)


#### feat(account, register, login): ajout de modèles de page de connexion et création de compte [(#403)](https://github.com/GouvernementFR/dsfr/pull/403)


#### Feat(pattern): ajoute le modele de date unique [(#396)](https://github.com/GouvernementFR/dsfr/pull/396)


#### feat(society): Ajout du pattern société [(#415)](https://github.com/GouvernementFR/dsfr/pull/415)


#### feat(address): Ajout du pattern adresse [(#398)](https://github.com/GouvernementFR/dsfr/pull/398)


#### refactor(form): Ajout des fr-control et correction des pattern civility & name [(#401)](https://github.com/GouvernementFR/dsfr/pull/401)


#### feat(password): ajout du composant mot de passe [(#391)](https://github.com/GouvernementFR/dsfr/pull/391)


#### feat(artwork): ajout de pictogrammes à la librairie [(#375)](https://github.com/GouvernementFR/dsfr/pull/375)


#### feat(pattern): ajoute le modele de civilite [(#355)](https://github.com/GouvernementFR/dsfr/pull/355)


#### feat(pattern): ajoute le modele de nom et prenom [(#356)](https://github.com/GouvernementFR/dsfr/pull/356)


#### refactor(input): Séparation en sous composant d'input, ajout de input-email et input-tel [(#363)](https://github.com/GouvernementFR/dsfr/pull/363)


#### feat(global): évolution global pour les modèles de bloc et de page


#### feat(page-unexpected): ajoute le modele de page erreur inattendue [(#383)](https://github.com/GouvernementFR/dsfr/pull/383)




## v1.7

### [v1.7.3](https://github.com/GouvernementFR/dsfr/compare/v1.7.2...v1.7.3) - 2 Février 2023

#### fix(header): retrait du log de la documentation dans la console [(#524)](https://github.com/GouvernementFR/dsfr/pull/524)



### [v1.7.2](https://github.com/GouvernementFR/dsfr/compare/v1.7.1...v1.7.2) - 29 Juillet 2022

#### fix(global): ajout des dossiers "standalone" et "i18n" au package.json


#### fix(global): Ajout du dossier "module"



### [v1.7.1](https://github.com/GouvernementFR/dsfr/compare/v1.7.0...v1.7.1) - 25 Juillet 2022

#### fix(elevation): legacy z-index [(#384)](https://github.com/GouvernementFR/dsfr/pull/384)



### [v1.7.0](https://github.com/GouvernementFR/dsfr/compare/v1.6.0...v1.7.0) - 21 Juillet 2022

#### fix(module): correction lint [(#382)](https://github.com/GouvernementFR/dsfr/pull/382)


#### chore(global): mis à jour des dépendances [(#381)](https://github.com/GouvernementFR/dsfr/pull/381)


#### fix(unavailable): ajout de la page d'exemple [(#380)](https://github.com/GouvernementFR/dsfr/pull/380)


#### fix(card): correction de l'aspect ratio par défaut des vidéos [(#378)](https://github.com/GouvernementFR/dsfr/pull/378)


#### fix(not-found): ajuste la template not-found [(#379)](https://github.com/GouvernementFR/dsfr/pull/379)


#### fix(card): correction aspect ratio par défaut [(#374)](https://github.com/GouvernementFR/dsfr/pull/374)


#### feat(server): Ajout page erreur serveur [(#330)](https://github.com/GouvernementFR/dsfr/pull/330)


#### feat(not-found): ajoute les modèles de page erreur 404 [(#371)](https://github.com/GouvernementFR/dsfr/pull/371)


#### fix(global): correction des erreurs pa11y [(#376)](https://github.com/GouvernementFR/dsfr/pull/376)


#### feat(translate) : Ajout du sélecteur de langue [(#359)](https://github.com/GouvernementFR/dsfr/pull/359)


#### fix(footer, header): généralisation de l'attribut 'title' du lien retour/accueil du logo [(#353)](https://github.com/GouvernementFR/dsfr/pull/353)


#### fix(stepper): correction barre d'étape masquée sur Firefox [(#373)](https://github.com/GouvernementFR/dsfr/pull/373)


#### feat(global): évolution du système d'élévation et des ombres [(#372)](https://github.com/GouvernementFR/dsfr/pull/372)


#### fix(global): Amendements sur les CGU du DSFR [(#370)](https://github.com/GouvernementFR/dsfr/pull/370)


#### feat(i18n): système i18n globalisé [(#365)](https://github.com/GouvernementFR/dsfr/pull/365)


#### fix(content, core): bug ratio vidéos ios [(#352)](https://github.com/GouvernementFR/dsfr/pull/352)


#### fix(pagination): correction couleur des liens de pagination en 'button' [(#354)](https://github.com/GouvernementFR/dsfr/pull/354)


#### fix(global): correction standalone locale pour i18n [(#364)](https://github.com/GouvernementFR/dsfr/pull/364)


#### fix(core): correction du sens de l'extension du soulignement [(#350)](https://github.com/GouvernementFR/dsfr/pull/350)


#### fix(global): correction pa11y test [(#360)](https://github.com/GouvernementFR/dsfr/pull/360)


#### feat(global): module sass dsfr [(#358)](https://github.com/GouvernementFR/dsfr/pull/358)


#### feat(global): multiplication des pages d'exemple et internationalisation [(#357)](https://github.com/GouvernementFR/dsfr/pull/357)




## v1.6

### [v1.6.0](https://github.com/GouvernementFR/dsfr/compare/v1.5.2...v1.6.0) - 14 Juin 2022

#### fix(core): correction de l'épaisseur du soulignement des liens [(#346)](https://github.com/GouvernementFR/dsfr/pull/346)


#### feat(core): mise à disposition de state et stage dans l'api js [(#345)](https://github.com/GouvernementFR/dsfr/pull/345)


#### fix(core): correction du fond du svg - faux positif PA11Y [(#343)](https://github.com/GouvernementFR/dsfr/pull/343)


#### fix(core): correction du soulignement des liens [(#344)](https://github.com/GouvernementFR/dsfr/pull/344)


#### fix(core): correction du text-decoration sur les liens pour les version antérieures [(#342)](https://github.com/GouvernementFR/dsfr/pull/342)


#### fix(card): correctif des tailles fixes des cartes horizontales [(#338)](https://github.com/GouvernementFR/dsfr/pull/338)


#### fix(core): suppression de l'icône lien extérieur sur une balise form [(#340)](https://github.com/GouvernementFR/dsfr/pull/340)


#### fix(core): suppression de l'icône lien extérieur sur une balise form [(#339)](https://github.com/GouvernementFR/dsfr/pull/339)


#### fix(global): stylelint [(#337)](https://github.com/GouvernementFR/dsfr/pull/337)


#### fix(follow, share): ajout texte explicatif icones RS disponibles [(#331)](https://github.com/GouvernementFR/dsfr/pull/331)


#### fix(core,link,button,tag,card): correctif icône lien extérieur [(#333)](https://github.com/GouvernementFR/dsfr/pull/333)


#### fix(icons): correctif depreciation fr-fi-checkbox-circle-line [(#334)](https://github.com/GouvernementFR/dsfr/pull/334)


#### fix(navigation): correctif focus au clic sur les liens [(#336)](https://github.com/GouvernementFR/dsfr/pull/336)


#### fix(header): correctif espacement liens rapides [(#335)](https://github.com/GouvernementFR/dsfr/pull/335)


#### fix(stepper): cache le détail de la dernière étape en css [(#329)](https://github.com/GouvernementFR/dsfr/pull/329)


#### fix(table): bug ios bordures qui n'apparaissent pas [(#332)](https://github.com/GouvernementFR/dsfr/pull/332)


#### feat(global): mise en place de l'injection du code dans le html [(#327)](https://github.com/GouvernementFR/dsfr/pull/327)


#### fix(link): correctif lien multiligne [(#322)](https://github.com/GouvernementFR/dsfr/pull/322)


#### fix(share,, follow): ajout icones réseau sociaux [(#324)](https://github.com/GouvernementFR/dsfr/pull/324)


#### fix(follow): correctif de la version legacy deprecated [(#326)](https://github.com/GouvernementFR/dsfr/pull/326)


#### chore(deps): mise à jour des dépendances [(#325)](https://github.com/GouvernementFR/dsfr/pull/325)


#### feat(stepper): ajout du composant indicateur d'étapes [(#319)](https://github.com/GouvernementFR/dsfr/pull/319)


#### feat(artwork): ajout des pictogrammes illustratifs [(#317)](https://github.com/GouvernementFR/dsfr/pull/317)


#### refactor(core, card, content): ajout utilitaire fr-ratio et aspect-ratio des content img & vid [(#316)](https://github.com/GouvernementFR/dsfr/pull/316)


#### feat(notice): Ajout du composant bandeau d'information [(#302)](https://github.com/GouvernementFR/dsfr/pull/302)


#### fix(download):  couleur puce groupe de lien de téléchargement [(#313)](https://github.com/GouvernementFR/dsfr/pull/313)


#### chore(global): migration vers sass dart [(#310)](https://github.com/GouvernementFR/dsfr/pull/310)


#### refactor(global): implémentation du positionnement des icônes en inline [(#320)](https://github.com/GouvernementFR/dsfr/pull/320)


#### refactor(header, link, button, follow, share, tag, badge): correction espacements des groupes [(#311)](https://github.com/GouvernementFR/dsfr/pull/311)


#### fix(sidemenu): changement balise du titre [(#290)](https://github.com/GouvernementFR/dsfr/pull/290)


#### fix(follow): correction link icon déprecié [(#306)](https://github.com/GouvernementFR/dsfr/pull/306)


#### fix(follow): correction link icon déprecié [(#301)](https://github.com/GouvernementFR/dsfr/pull/301)


#### fix(core): correction de l'implémentation de $DIST-PATH [(#300)](https://github.com/GouvernementFR/dsfr/pull/300)


#### chore: suppression de node-sass-magic-importer [(#279)](https://github.com/GouvernementFR/dsfr/pull/279)




## v1.5

### [v1.5.2](https://github.com/GouvernementFR/dsfr/compare/v1.5.1...v1.5.2) - 14 Juin 2022

#### fix(core): correction de l'épaisseur du soulignement des liens [(#346)](https://github.com/GouvernementFR/dsfr/pull/346)


#### fix(core): correction du soulignement des liens [(#344)](https://github.com/GouvernementFR/dsfr/pull/344)


#### fix(core): correction du text-decoration sur les liens pour les version antérieures [(#342)](https://github.com/GouvernementFR/dsfr/pull/342)


#### fix(core): suppression de l'icône lien extérieur sur une balise form [(#339)](https://github.com/GouvernementFR/dsfr/pull/339)


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


#### fix(core): suppression de l'icône lien extérieur sur une balise form [(#341)](https://github.com/GouvernementFR/dsfr/pull/341)


#### fix(link): retrait du soulignement des icônes


#### fix(global): retour au soulignement natif pour les liens


#### fix(download): titre groupe de liens en classe BEM [(#289)](https://github.com/GouvernementFR/dsfr/pull/289)


#### fix: contributing.md et readme.md 1.5.0 [(#286)](https://github.com/GouvernementFR/dsfr/pull/286)


#### fix: correctif icon alert et globale [(#287)](https://github.com/GouvernementFR/dsfr/pull/287)


#### fix(legacy): media query legacy manquante [(#285)](https://github.com/GouvernementFR/dsfr/pull/285)


#### fix(download): retrait exemple groupe sm [(#284)](https://github.com/GouvernementFR/dsfr/pull/284)


#### fix(download,card): transpilation async et commentaire [(#283)](https://github.com/GouvernementFR/dsfr/pull/283)


#### refactor(icon): Ajouts nouvelles icones & séparation en familles [(#280)](https://github.com/GouvernementFR/dsfr/pull/280)


#### feat(download): Ajout du composant téléchargement de fichier [(#272)](https://github.com/GouvernementFR/dsfr/pull/272)


#### fix(connect): correction de la variable de build isStandalone [(#281)](https://github.com/GouvernementFR/dsfr/pull/281)


#### fix(card): typo dans l'exemple grille [(#282)](https://github.com/GouvernementFR/dsfr/pull/282)


#### fix(input): correction icone date [(#276)](https://github.com/GouvernementFR/dsfr/pull/276)


#### feat(header): bandeau de site en beta [(#269)](https://github.com/GouvernementFR/dsfr/pull/269)


#### fix(footer): alignement des logos partenaires [(#277)](https://github.com/GouvernementFR/dsfr/pull/277)


#### chore: suppression de node-sass-json-importer [(#278)](https://github.com/GouvernementFR/dsfr/pull/278)


#### fix(accordion) icone moins n'apparait plus [(#275)](https://github.com/GouvernementFR/dsfr/pull/275)


#### feat(card): ajout de la fonctionnalité card v2 [(#270)](https://github.com/GouvernementFR/dsfr/pull/270)


#### fix(connect): retrait import json & ajout rel noopener [(#273)](https://github.com/GouvernementFR/dsfr/pull/273)


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

#### fix(core): suppression de l'icône lien extérieur sur une balise form [(#341)](https://github.com/GouvernementFR/dsfr/pull/341)


#### fix(link): retrait du soulignement des icônes


#### fix(global): retour au soulignement natif pour les liens



### [v1.4.1](https://github.com/GouvernementFR/dsfr/compare/v1.4.0...v1.4.1) - 29 Mars 2022

#### fix(connect): correction du titre du lien


#### fix(tag): correction tag activable sm et dans un group sm [(#258)](https://github.com/GouvernementFR/dsfr/pull/258)


#### fix(connect): retrait description & ajout target blank [(#261)](https://github.com/GouvernementFR/dsfr/pull/261)


#### fix(follow): correction de la dépréciation pour être plus générique [(#257)](https://github.com/GouvernementFR/dsfr/pull/257)


#### fix(connect): libelle FranceConnect attaché [(#260)](https://github.com/GouvernementFR/dsfr/pull/260)



### [v1.4.0](https://github.com/GouvernementFR/dsfr/compare/v1.3.1...v1.4.0) - 16 Mars 2022

#### fix(display): correction et support des versions dépréciées [(#247)](https://github.com/GouvernementFR/dsfr/pull/247)


#### fix(header,follow,content): retours dépréciation [(#241)](https://github.com/GouvernementFR/dsfr/pull/241)


#### fix(sidemenu): correction hauteur & scroll sidemenu sticky [(#243)](https://github.com/GouvernementFR/dsfr/pull/243)


#### fix(navigation): correction affichage mega-menu [(#242)](https://github.com/GouvernementFR/dsfr/pull/242)


#### fix(connect): correction taille du lien en sm [(#239)](https://github.com/GouvernementFR/dsfr/pull/239)


#### feat(global): mise en place de la stratégie de dépréciation des composants [(#237)](https://github.com/GouvernementFR/dsfr/pull/237)


#### fix: corrections des retours dev 1.4.0 [(#240)](https://github.com/GouvernementFR/dsfr/pull/240)


#### fix(connect): retrait du hint text [(#238)](https://github.com/GouvernementFR/dsfr/pull/238)


#### feat(link): Ajout du lien "back to top" [(#233)](https://github.com/GouvernementFR/dsfr/pull/233)


#### fix(megamenu): corrige erreur js en mode no-module [(#226)](https://github.com/GouvernementFR/dsfr/pull/226)


#### fix(collapse): corrige le collapse multi-navigateurs [(#227)](https://github.com/GouvernementFR/dsfr/pull/227)


#### fix: templates plus paramétrables [(#221)](https://github.com/GouvernementFR/dsfr/pull/221)


#### feat(footer): ajout d'un sample de footer paramétrable [(#215)](https://github.com/GouvernementFR/dsfr/pull/215)


#### fix(sidemenu): correction hauteur sidemenu sticky [(#223)](https://github.com/GouvernementFR/dsfr/pull/223)


#### fix(modal): <dialog> masqué en no-css [(#230)](https://github.com/GouvernementFR/dsfr/pull/230)


#### fix(tab): correction z-index des tab-panels [(#232)](https://github.com/GouvernementFR/dsfr/pull/232)


#### fix: margin bottom des textes et titres en css prop [(#229)](https://github.com/GouvernementFR/dsfr/pull/229)


#### feat(core): ajout d'icones [(#231)](https://github.com/GouvernementFR/dsfr/pull/231)


#### refactor(global): soulignement des liens et ajout des boutons tertiaires [(#234)](https://github.com/GouvernementFR/dsfr/pull/234)


#### feat(connect): ajout description et lien france connect [(#224)](https://github.com/GouvernementFR/dsfr/pull/224)


#### fix(core, tab, modal, button): injection js de styles en variables css [(#225)](https://github.com/GouvernementFR/dsfr/pull/225)


#### feat(core): variabilisation du core [(#212)](https://github.com/GouvernementFR/dsfr/pull/212)


#### feat(dependencies): mise a jour des dépendances node mineures [(#228)](https://github.com/GouvernementFR/dsfr/pull/228)


#### feat(connect): Ajout de la fonctionnalité FranceConnect [(#211)](https://github.com/GouvernementFR/dsfr/pull/211)


#### fix(toggle, modal): correction z-index de toggle [(#213)](https://github.com/GouvernementFR/dsfr/pull/213)


#### fix(accordion): a11y retrait des ul li du groupe d'accordéon [(#214)](https://github.com/GouvernementFR/dsfr/pull/214)


#### fix(core): nouvelle fonte Marianne avec correction de l'alignement [(#169)](https://github.com/GouvernementFR/dsfr/pull/169)




## v1.3

### [v1.3.1](https://github.com/GouvernementFR/dsfr/compare/v1.3.0...v1.3.1) - 7 Février 2022

#### fix(toggle): correction de l'état précoché de l'interrupteur [(#210)](https://github.com/GouvernementFR/dsfr/pull/210)


#### fix(navigation, sidemenu): correction focus coupés [(#204)](https://github.com/GouvernementFR/dsfr/pull/204)


#### chore(deps): mise a jour des dépendances [(#209)](https://github.com/GouvernementFR/dsfr/pull/209)


#### fix(checkbox,form, radio,toggle): correction de la gestion de l'attribut checked et de la page d'exemple de form [(#208)](https://github.com/GouvernementFR/dsfr/pull/208)


#### fix(core): correction de la mixin has-icon et has-not-icon [(#205)](https://github.com/GouvernementFR/dsfr/pull/205)


#### fix(core): faute dans le texte alternatif [(#206)](https://github.com/GouvernementFR/dsfr/pull/206)


#### fix(core): ordre media query


#### fix(doc): met a jour la doc des templates ejs [(#171)](https://github.com/GouvernementFR/dsfr/pull/171)


#### fix(checkbox,radio,toggle): ajout de l'attribut checked [(#198)](https://github.com/GouvernementFR/dsfr/pull/198)


#### fix: ordre des media query au build css [(#202)](https://github.com/GouvernementFR/dsfr/pull/202)


#### fix(core): correction font-icon descent [(#201)](https://github.com/GouvernementFR/dsfr/pull/201)


#### refactor(alert): alerte dynamique refermable [(#199)](https://github.com/GouvernementFR/dsfr/pull/199)


#### feat(alert): ajout exemple dynamique [(#194)](https://github.com/GouvernementFR/dsfr/pull/194)


#### refactor(core): standardisation des icones [(#196)](https://github.com/GouvernementFR/dsfr/pull/196)


#### fix(checkbox): exemple checkbox sup et sub [(#197)](https://github.com/GouvernementFR/dsfr/pull/197)


#### feat(core): ajout du module font-swap [(#195)](https://github.com/GouvernementFR/dsfr/pull/195)


#### fix(toggle): status width [(#193)](https://github.com/GouvernementFR/dsfr/pull/193)


#### fix(toggle, modal): patch 1.3.1 - status width & modal icon aria-hidden [(#192)](https://github.com/GouvernementFR/dsfr/pull/192)



### [v1.3.0](https://github.com/GouvernementFR/dsfr/compare/v1.2.1...v1.3.0) - 18 Janvier 2022

#### fix(core): icones statut & remix [(#190)](https://github.com/GouvernementFR/dsfr/pull/190)


#### fix(tag): sélectionnable [(#189)](https://github.com/GouvernementFR/dsfr/pull/189)


#### fix(toggle): statut activer/desactiver a11y [(#185)](https://github.com/GouvernementFR/dsfr/pull/185)


#### fix(alert): retrait attribut role='alert' et collapse [(#182)](https://github.com/GouvernementFR/dsfr/pull/182)


#### fix(radio): sup sub exemple [(#188)](https://github.com/GouvernementFR/dsfr/pull/188)


#### fix(follow): texte d'erreur email & centrage alignement icône erreur/valid [(#186)](https://github.com/GouvernementFR/dsfr/pull/186)


#### fix(consent): titre bandeau en h2 [(#187)](https://github.com/GouvernementFR/dsfr/pull/187)


#### chore(deps): mise a jour des dépendances [(#184)](https://github.com/GouvernementFR/dsfr/pull/184)


#### fix(link, tag, pagination, share): role & aria link disabled [(#181)](https://github.com/GouvernementFR/dsfr/pull/181)


#### fix(tag): correctif js tag [(#180)](https://github.com/GouvernementFR/dsfr/pull/180)
* fix(core): correctif js

* fix(tag): correctif js


#### fix(core): correctif lint + js [(#179)](https://github.com/GouvernementFR/dsfr/pull/179)


#### feat(tag): Ajout des composants tag activable et tag supprimable [(#166)](https://github.com/GouvernementFR/dsfr/pull/166)


#### feat(badge): ajout du composant badge [(#59)](https://github.com/GouvernementFR/dsfr/pull/59)


#### feat(core): Ajout des valeurs d'espacement 0.5v et 1.5v [(#174)](https://github.com/GouvernementFR/dsfr/pull/174)


#### fix: commentaire des textes alternatif des images [(#175)](https://github.com/GouvernementFR/dsfr/pull/175)


#### fix: retours d'accessibilité a11y [(#176)](https://github.com/GouvernementFR/dsfr/pull/176)


#### fix(core): correctif des imports js [(#178)](https://github.com/GouvernementFR/dsfr/pull/178)


#### fix(scheme): ajoute methode de detection du localstorage [(#170)](https://github.com/GouvernementFR/dsfr/pull/170)


#### feat(icon): ajoute la nouvelle font-icon [(#168)](https://github.com/GouvernementFR/dsfr/pull/168)


#### fix(core): correctif du hover des actions [(#177)](https://github.com/GouvernementFR/dsfr/pull/177)


#### fix(radio-checkbox): met a jour le style pour les indices et exposants [(#86)](https://github.com/GouvernementFR/dsfr/pull/86)


#### feat(logo): modifie l'intitulé par défaut [(#165)](https://github.com/GouvernementFR/dsfr/pull/165)


#### fix(legacy): retire les polyfills legacy du script module [(#173)](https://github.com/GouvernementFR/dsfr/pull/173)


#### fix(tab): retrait du smooth scroll [(#172)](https://github.com/GouvernementFR/dsfr/pull/172)


#### feat(tab): ajout de l'ombre au scroll & recentrage des boutons [(#159)](https://github.com/GouvernementFR/dsfr/pull/159)


#### fix(legacy): ie listes et marges [(#154)](https://github.com/GouvernementFR/dsfr/pull/154)


#### fix(tile): background tile [(#167)](https://github.com/GouvernementFR/dsfr/pull/167)


#### feat(tab): ajout modifieur viewport-width [(#142)](https://github.com/GouvernementFR/dsfr/pull/142)


#### fix(tab): corrige le scroll horizontal [(#89)](https://github.com/GouvernementFR/dsfr/pull/89)


#### fix(card): corrige erreur à la compilation [(#164)](https://github.com/GouvernementFR/dsfr/pull/164)


#### fix(card): bordure extérieure sur les cartes [(#162)](https://github.com/GouvernementFR/dsfr/pull/162)


#### refactor: nettoyage et simplification du système de couleur [(#160)](https://github.com/GouvernementFR/dsfr/pull/160)




## v1.2

### [v1.2.1](https://github.com/GouvernementFR/dsfr/compare/v1.2.0...v1.2.1) - 29 Novembre 2021

#### feat(modal): ajout d'un attribut pour la fermeture au click [(#158)](https://github.com/GouvernementFR/dsfr/pull/158)


#### fix(modal): ajout de l'attribut aria-modal [(#157)](https://github.com/GouvernementFR/dsfr/pull/157)


#### fix(header):  allègement hover bloc marque [(#155)](https://github.com/GouvernementFR/dsfr/pull/155)


#### refactor: passage du noir et du blanc dans l'échelle des gris [(#156)](https://github.com/GouvernementFR/dsfr/pull/156)


#### fix(modal): accessibilité du focus [(#145)](https://github.com/GouvernementFR/dsfr/pull/145)


#### fix(card-tile): correction hover enlarge-link [(#153)](https://github.com/GouvernementFR/dsfr/pull/153)


#### fix: correction de la version minimum node [(#152)](https://github.com/GouvernementFR/dsfr/pull/152)


#### fix(sidemenu): correction du hover des liens [(#151)](https://github.com/GouvernementFR/dsfr/pull/151)


#### fix(header): corrections css pour IE, valeur initial [(#144)](https://github.com/GouvernementFR/dsfr/pull/144)


#### fix(card-tile): met a jour les noms de class d'accentuation [(#147)](https://github.com/GouvernementFR/dsfr/pull/147)


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


#### feat(tile): ajout de l'accentuation en usage contrast [(#134)](https://github.com/GouvernementFR/dsfr/pull/134)


#### fix(select): ajout temporaire du chevron [(#133)](https://github.com/GouvernementFR/dsfr/pull/133)


#### chore: lint [(#132)](https://github.com/GouvernementFR/dsfr/pull/132)


#### fix(inject-svg): ajoute une methode globale sur l'api pour definir legacy [(#127)](https://github.com/GouvernementFR/dsfr/pull/127)


#### fix(footer): couleur catégorie menu [(#131)](https://github.com/GouvernementFR/dsfr/pull/131)


#### fix: correction icon theme-fill [(#130)](https://github.com/GouvernementFR/dsfr/pull/130)


#### fix(footer): correction couleur des liens [(#129)](https://github.com/GouvernementFR/dsfr/pull/129)


#### fix(callout): accentuation du background [(#125)](https://github.com/GouvernementFR/dsfr/pull/125)


#### fix(radio): bordure sur la classe radio-rich__img [(#122)](https://github.com/GouvernementFR/dsfr/pull/122)


#### fix: correction hover sur lien fil du texte et card [(#128)](https://github.com/GouvernementFR/dsfr/pull/128)


#### fix(card): met a jour le modifier d'accent [(#123)](https://github.com/GouvernementFR/dsfr/pull/123)


#### fix: pa11y hide disable elements & fix lint dependance


#### fix(search): met à jour le reset des boutons et champs de saisie pour Safari [(#115)](https://github.com/GouvernementFR/dsfr/pull/115)


#### fix(display): corrige bouton d'affichage et bug a la selection du mode [(#119)](https://github.com/GouvernementFR/dsfr/pull/119)


#### fix: correctifs ejs form [(#120)](https://github.com/GouvernementFR/dsfr/pull/120)


#### fix(card): ajoute un modifier d'accentuation [(#121)](https://github.com/GouvernementFR/dsfr/pull/121)


#### refactor(consent): fonctions pour générer l'objet consent [(#103)](https://github.com/GouvernementFR/dsfr/pull/103)


#### fix(display): ajoute des attributs d'accessibilité sur les svg [(#118)](https://github.com/GouvernementFR/dsfr/pull/118)


#### fix(summary): correction du token [(#117)](https://github.com/GouvernementFR/dsfr/pull/117)


#### feat(modal): mise en place de l'overlay [(#116)](https://github.com/GouvernementFR/dsfr/pull/116)


#### fix: hover radio / retour couleur [(#114)](https://github.com/GouvernementFR/dsfr/pull/114)


#### feat(example): ajoute un bouton fixe pour les parametre d'affichage [(#113)](https://github.com/GouvernementFR/dsfr/pull/113)


#### fix: ejs corrections multiples [(#112)](https://github.com/GouvernementFR/dsfr/pull/112)


#### feat: couleurs accentuation [(#111)](https://github.com/GouvernementFR/dsfr/pull/111)


#### fix: correction ombre table + lint / pa11y [(#110)](https://github.com/GouvernementFR/dsfr/pull/110)


#### feat(display): Ajout icones illustratives & thème systeme [(#109)](https://github.com/GouvernementFR/dsfr/pull/109)


#### refactor: restructuration custom props / legacy [(#108)](https://github.com/GouvernementFR/dsfr/pull/108)


#### fix(cards): corrige taille image mode horizontal [(#88)](https://github.com/GouvernementFR/dsfr/pull/88)


#### fix(navigation): espacement catégories mobile [(#105)](https://github.com/GouvernementFR/dsfr/pull/105)


#### fix(toggle): espacement composant [(#104)](https://github.com/GouvernementFR/dsfr/pull/104)


#### refactor(ejs): ajoute des exemples disabled et checked [(#94)](https://github.com/GouvernementFR/dsfr/pull/94)


#### feat(icon): ajout icon logout [(#93)](https://github.com/GouvernementFR/dsfr/pull/93)


#### fix(navigation): nav-link hover sur a et button uniquement [(#68)](https://github.com/GouvernementFR/dsfr/pull/68)


#### fix: margin bottom <p> et <hx> des composants [(#73)](https://github.com/GouvernementFR/dsfr/pull/73)


#### feat(core): ajout du reset de hr [(#60)](https://github.com/GouvernementFR/dsfr/pull/60)


#### fix(upload): disabled input-upload & curseur pointeur [(#102)](https://github.com/GouvernementFR/dsfr/pull/102)


#### feat(upload): ajout du composant upload [(#43)](https://github.com/GouvernementFR/dsfr/pull/43)


#### fix(modale): corrige la hauteur de la modale sur desktop [(#80)](https://github.com/GouvernementFR/dsfr/pull/80)


#### fix(consent): ajout d'id aux services [(#101)](https://github.com/GouvernementFR/dsfr/pull/101)


#### fix(footer): met a jour le wording du copyright [(#87)](https://github.com/GouvernementFR/dsfr/pull/87)


#### fix(modal): focus trap avec iframe [(#92)](https://github.com/GouvernementFR/dsfr/pull/92)


#### fix: readme et contributing [(#90)](https://github.com/GouvernementFR/dsfr/pull/90)


#### refactor: inclusion des composants ejs dans locals.nomComposant [(#76)](https://github.com/GouvernementFR/dsfr/pull/76)


#### fix: bouton sidemenu display none / scheme package.yml / fr-input code inutile / table refactor et couleurs [(#100)](https://github.com/GouvernementFR/dsfr/pull/100)


#### fix(logo): correction blue-france & mourning [(#99)](https://github.com/GouvernementFR/dsfr/pull/99)


#### fix: correction du token art déprécié [(#98)](https://github.com/GouvernementFR/dsfr/pull/98)


#### fix: correction des hovers [(#97)](https://github.com/GouvernementFR/dsfr/pull/97)


#### Refactor: ajout des tokens artwork [(#96)](https://github.com/GouvernementFR/dsfr/pull/96)


#### fix: corrige le lint en l'absence de fichier sass [(#95)](https://github.com/GouvernementFR/dsfr/pull/95)


#### Fix(pa11y) : met a jour le scope des tests pa11y [(#85)](https://github.com/GouvernementFR/dsfr/pull/85)


#### refactor(scheme): nouveau système de couleur [(#83)](https://github.com/GouvernementFR/dsfr/pull/83)


#### fix: dsfr license npm [(#82)](https://github.com/GouvernementFR/dsfr/pull/82)


#### fix(sidemenu): bordures en desktop [(#77)](https://github.com/GouvernementFR/dsfr/pull/77)


#### fix(lint): supprime les polyfill du linter eslint [(#84)](https://github.com/GouvernementFR/dsfr/pull/84)


#### Fix: définition d'une valeur par défaut de l'objet de configuration window.dsfr [(#79)](https://github.com/GouvernementFR/dsfr/pull/79)


#### fix: licence.md devient license.md [(#78)](https://github.com/GouvernementFR/dsfr/pull/78)


#### fix(legacy-browser): corrige les erreurs JS sous ie11 [(#72)](https://github.com/GouvernementFR/dsfr/pull/72)


#### fix: correction du package.json [(#74)](https://github.com/GouvernementFR/dsfr/pull/74)


#### fix(api): Bug Modal JS [(#69)](https://github.com/GouvernementFR/dsfr/pull/69)


#### fix: page/pattern dossier vide et npm deploy [(#67)](https://github.com/GouvernementFR/dsfr/pull/67)


#### fix(core): exemple texte taille md [(#71)](https://github.com/GouvernementFR/dsfr/pull/71)


#### fix: input type submit désactivé [(#70)](https://github.com/GouvernementFR/dsfr/pull/70)


#### feat(core): ajout d'icones [(#65)](https://github.com/GouvernementFR/dsfr/pull/65)


#### feat: ajout d'un robots.txt à la racine de public [(#53)](https://github.com/GouvernementFR/dsfr/pull/53)


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


#### fix: correction href des listes d'exemple & maj dependance caniuse-lite


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


#### fix(quotes): Suppression du alt de l'image [(#35)](https://github.com/GouvernementFR/dsfr/pull/35)


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




## v1.0

### [v1.0.0](https://github.com/GouvernementFR/dsfr/compare/v0.6.0...v1.0.0) - 24 Juin 2021

#### fix(buttons, modal, tabs): correction nouveau nom d'icône [(#19)](https://github.com/GouvernementFR/dsfr/pull/19)


#### fix(alerts): Correction texte explicatif [(#17)](https://github.com/GouvernementFR/dsfr/pull/17)


#### fix(modal): ajustements et correctifs [(#11)](https://github.com/GouvernementFR/dsfr/pull/11)


#### feat(consent): Ajout du composant gestionnaire de consentement [(#12)](https://github.com/GouvernementFR/dsfr/pull/12)


#### feat(alerts): ajout du composant alerts [(#7)](https://github.com/GouvernementFR/dsfr/pull/7)
* feat(alerts): style alertes

* feat(alerts): ajout d'exemples

* fix(alerts): examples

* fix(alerts): attributs bouton close

* fix(alerts): correction snippet

* fix(alerts): title bem style h6

* fix(alerts): margin p, hx et lien documentation


#### fix(summary): Ajustement de summary avec les nouvelles listes [(#6)](https://github.com/GouvernementFR/dsfr/pull/6)
* fix(summary): Ajustement de summary avec les nouvelles listes

* doc(summary): Commentaire d'explication sur les nombres utilisés pour créer le décalage de l'hover

* fix(summary): remplacement du marker par un before sur le lien (support safari + hover)


#### fix(cards): ordre détail dans le snippet [(#8)](https://github.com/GouvernementFR/dsfr/pull/8)


#### fix(core): correction des listes à puces [(#4)](https://github.com/GouvernementFR/dsfr/pull/4)
* fix(core): correction des listes pour un retour à un fonctionnement proche de celui par défaut

* fix(core): correction espacement des listes

* fix(core): nettoyage code commenté


#### fix(radios checkboxes): correction bug windows inversion des nombres [(#5)](https://github.com/GouvernementFR/dsfr/pull/5)
* fix(radios, checkboxes): correction display des labels

* feat: label checkbox & radios

* fix: case insensitive flag retiré des sélecteurs d'attribut (non supporté par IE edge)

Co-authored-by: lab9 <lab9.fr@gmail.com>


#### feat(utilities): ajout page de présentation


#### fix: Mise à jour des dépendances dans les packages accordions, pagination, tabs et tags


#### fix(modal): modal aligné en bas en mobile


#### fix: contributing [(#2)](https://github.com/GouvernementFR/dsfr/pull/2)


#### fix(core): fonte Marianne dans le reset inputs


#### fix(core): correction utilitaire taille d'icone fr-fi--size
ajout taille fr-fi--md
ajout !important pour forcer le modifieur


#### fix(inputs,selects): ajout fonte marianne


#### fix(buttons): correction fichier scss buttons-group


#### fix(skiplinks): correction snippet skiplinks


#### fix(pagination): correction snippet pagination


#### feat(utilities): espacements jusqu'a 32v


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


#### chore(global): changement de la banière fichiers pour 'restricted use'


#### chore(global): Complément d'information JS et EJS du CONTRIBUTING.md


#### chore(global): changement de la banière des fichiers scripts et styles générés


#### feat: contributing.md


#### fix(schemes/skiplinks): correction implémentation accés direct


#### fix(sassdoc): correction config sassdoc


#### feat(readme): édition et publication du readme global et public


#### fix(toggle): correction couleur focus toggle


#### fix(links): correction problème placeholder links


#### feat(utilities, legacy): "en cours de développement"


#### refactor(toggles): bem toggle__list


#### chore(global): changement de package name et de n° de version


#### fix: radios rich images


#### fix: changement images d'examples


#### chore(global): suppression des package.json dans le src (obsolète)


#### feat(global): ajout des images placeholder


#### feat(icons): ajout des icones réseaux sociaux


#### fix(navigation): correction bug d'affichage de la page d'exemple


#### fix: contributing.md


#### fix(header/navigation): Révision générale de header et navigation / ajouts d'utilitaires grid et links


#### fix(schemes): changement de bf300 pour être accessible sur du g700


#### feature(schemes): nouvelles couleurs bleu france


#### fix(schemes): dynamisation du prefix


#### fix(img): correction des textes alternatifs des images


#### fix(sidemenu): marge des niveaux 2 et 3


#### fix(sidemenu): erreur de lint


#### fix(sidemenu): padding et etat actif


#### fix(forms): pas besoin d'id sur le hint text


#### chore(global): changement du prefix


#### fix(forms): role groupe que quand plusieurs infos


#### fix(footer): hauteur max des logos


#### fix(schemes): changement nom icon theme


#### feat(core): ajout icones manquantes dans l'example


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


#### fix(navigation): couleur de l'item active corrigée


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


#### fix(schemes): snippet & corrections merge


#### fix: bug couleur de fond des interrupteurs


#### fix(all): alt générique et fix inputs
input type number & fix ios
img texte alternatif


#### fix(header): Titre du service remplacé par un p


#### fix(breadcrumb): ajout d'une limite à la boucle de vérification


#### fix(breadcrumb): boucle de vérification de la prise de focus


#### fix(header): transition éliminées en lg pour éviter le flash


#### fix(schemes): maj footer


#### fix(table): correction erreur dans les constantes


#### fix(search): title inutile sur le search LG


#### feat(footer): ajout licence etalab dans le copyright


#### fix(forms): input type submit et styles buttons, links


#### fix(pagination): ajout du role="navigation" pour l'a11y


#### refactor(js): séparation des classes core et publiques / focus breadcrumb / focus-trap désactivé au changement de breakpoint sur le header


#### fix(core): suppression des console.log


#### fix(search): correction marge sur safari


#### fix(cards/tiles): correction hover associé au enlarge-link / corrections tuiles horizontales suite à inversion de l'ordre body / img


#### fix(grid): correction des imbrications et refactoring de la page d'exemple


#### fix(all): préparation au changement de préfix


#### fix(navigation, sidemenu): snippet encodage


#### refactor(tabs, tags): accessibility


#### fix(navigation): suppression bouton close hors du header


#### feat(core): ajout des favicons


#### feature(core): ajout des examples d'utilitaires


#### refactor(pagination): ajout des utilitaires d'affichage hidden et displayed / pagination finalisé


#### refactor(pagination): pagination implémentée via les mixins de links


#### feature(build): test lint et pa11y imbriqué dans la routine de compilation


#### fix(cards/tiles): corrections tuiles et cards (z-index sur le hover, absence de hover, tile__img-wrap devient tile__img


#### fix(schemes): mis à jour attribut data-rf-opened


#### fix(schemes): mis à jour attribut data-rf-opened


#### fix(header): mis à jour attribut data-rf-opened


#### fix(modal): focus-trap, filtrage des radiobuttons par name


#### fix(forms): bold retirée des legend des fieldsets


#### fix(sidemenu, navigation): guillemet en trop sur aria-curent="page"


#### fix(header): brand 100% de la largeur


#### refactor(core): optimisation focus


#### fix(navigation): stucture BEM nav__link


#### fix(schemes): simplification du hover avec :disabled


#### fix(schemes): correction @at-root dans le shemes hover


#### fix(schemes): correction selector-associate


#### fix(schemes): correction du hover avec remplacement de selector-unify par selector-associate


#### refactor: wip navigation refacto


#### fix(schemes): description du switch dark mode dans legend au lieu de p, pour suivre les normes d'accessibilité


#### fix(build): import manquant


#### feature(pa11y): ajustement pa11y à la nouvelle architecture et correctifs


#### fix: suppression du alt dans lien test d'exemple


#### fix(examples): attributs inutiles retirés sur le :root


#### fix(core): correction focus navigateurs ne supportant pas focus-visible


#### fix(build): correction exemple de la commande de build


#### fix(core): correction typo commentaire collapse


#### feature(build): création d'un page dsfr contenant toutes les autres pages / finalisation des commandes de build


#### fix(selects): bordure g600


#### fix(core): medias frameborder


#### fix(footer): bloc marque + logo en 1 seul lien


#### fix(modal): correction focus-trap push remplacé par concat pour stylint


#### fix(modal): correction focus-trap groupe de radio-button


#### fix(core): correction svg encoding


#### fix(inputs): bordure enn g600


#### fix(navigation): catégorie mega menu en h5


#### fix(schemes): titre et description d'example


#### fix: schemes example & merge dev


#### feat(core): ajout du composant favicons


#### fix(content): médias image figure aria label & role group


#### feature(collapse): reprise du focus à la fermeture d'un collapse / correction bug collapse


#### fix(radios): correction safari, alignement du séparateur d'image


#### feature(modal): mise en place de l'attribut data-rf-opened à la place de aria-expanded pour en éviter la restitution


#### fix(radios): correction label chiffres inversés & ajout d'exemples


#### refactor(cards/tiles): lien étendu des tuiles et des cards par la classe rf-enlarge-link / inversion de l'image et du body pour l'accessiblité


#### refactor(header): gestion du lien d'accueil étendu / bouton mobile déplacés en haut du header


#### refactor(logo): optimisation et retravail de la sémantique


#### fix(footer): ajout <p> & ul li + fix bug css partner


#### feat(schemes): ajout du switch theme


#### feat(icons): aria-hidden sur les icones illustratives


#### refactor(build): déplacement des imgs dans examples, déplacement des fonts dans assets, copie générale des assets dans dist


#### fix(inputs): bug ios, desactivation de l'apparance des inputs


#### fix(navigation, sidemenu): aria-current='true' & aria-current='page'


#### fix(reset): hover lien corrigé / lien souligné en border-bottom au lieu de box-shadow (le tricks du toggle css variable ne fonctionne pas sur un box-shadow)


#### fix(toggles): ajout aria-describedby sur input lié au hint text


#### fix(buttons, links): retrait de l'exemple avec une div


#### fix(search): ejs search label et role search


#### fix(highlights): bem, <p> dans le composant


#### fix(medias): iframe video exemple attribute


#### fix: sass build


#### fix(various): correction curseur du breadcrumb, nav / chemin des styles et des scripts de la liste d'examples / lint


#### fix(core): Simplification du déplacement du focus sur Cards et Tiles


#### fix(tags, links, buttons): href, disabled, target ejs


#### fix(tabs): lorem ipsum text


#### fix(form, select, checkbox): fieldset aria-described legend & message


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

### [v0.5.3](https://github.com/GouvernementFR/dsfr/compare/v0.5.0...v0.5.3) - 7 Avril 2021

#### fix(all): Design System de l'Etat v0.5.3
fix: retrait du scritp post-install


#### feat: Design System de l'Etat v0.5.0


#### chore: Design System de l'Etat v0.5.0



### [v0.5.0](https://github.com/GouvernementFR/dsfr/compare/v0.4.0...v0.5.0) - 10 Février 2021

#### chore: Design System de l'Etat v0.5.0


#### fix(links): links font-size à 0 retiré


#### fix(all): correction du test, th des tableaux en col / correction du test, liens externes en https / attribut aria-modal ajouté / aria-expanded et aria-controls pour la modale.


#### fix(all) correction package.json all + build


#### fix(all): corrections de bug divers
Fixes
BUG - Modale => scroll body / font zone action  / btn fermer
BUG - Menu lateral => niveau de titre
BUG - Radios inline => alignement radio bouton riche en ligne (le dernier)
BUG - inputs invalid
BUG - inputs => Ajout du comportement natif des types (number/date/calendar)


#### fix(header): correction des liens de raccourcis


#### refactor(buttons): groupe de boutons, nouvelle gestion des icones


#### feat(modal): ajout package modal
fix
Tabs animation
collapse et disclosure
Page de test (controls butons & snippet)


#### fix(all): ajout commentaires, fix buton LG test
features
Ajout de commentaires de code SASS
fixes
BUG - bouton LG a sauté
BUG - Toggle cursor & size


#### feat(buttons): ajout des groupes de boutons


#### fix(accordions): suppression de la navigation clavier


#### refactor(all): refactorisation, evolutions et corrections (détails dans le corps de commit)
refactor
consolidation du core, rappatriement des scripts d'utilitaire et de la grille
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
<div class="rf-collapse rf-menu" id="rf-nav-item-3" >
accordions:
- noeud rf-accordion__inner supprimé
- rf-accordion__body est remplacé par rf-collapse
- rf-accordion-group__item retiré, un li sans classe est suffisant
sidemenu:
- rf-sidemenu__btn--sidemenu-toggle est remplacé par rf-sidemenu__btn (plus générique)
- rf-sidemenu__wrapper devient rf-collapse
- rf-sidemenu__content devient rf-collapse




## v0.4

### [v0.4.0](https://github.com/GouvernementFR/dsfr/compare/v0.3.1...v0.4.0) - 3 Février 2021

#### fix(all): corrections taille checkboxes et content / corrections multiligne toggle


#### fix(all): Mise à jour des liens de documentations


#### fix(core): Ajout du line-height par défaut sur body par le biais de l'attribut de reset


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
  - rf-prose : conteneur qui stylise les tags headings, liens et listes qu'il contient
  - typography : classes qui permettent d'appliquer directement des styles[CORE] rappatriement des packages icons et medias dans le core[CORE] refactor gestion du z-index [CARDS] rf-cards__lead devient rf-cards__title pour homogénéisation avec les tuiles[UTILITIES] passage des valeurs des classes de spacing en important (retour betas)[HEADER] correction burger menu en cas de présences de raccourcis[BUTTONS] correction contour bouton secondaire lien[LINKS, BUTTONS, TAGS] icon-only devient l'état d'icon par défaut (suppression du modificateur et de l'icon par défaut)


#### chore(packages): v0.3.1


#### chore(packages): release




## v0.3

### [v0.3.1](https://github.com/GouvernementFR/dsfr/compare/v0.3.0...v0.3.1) - 18 Novembre 2020

#### chore(packages): release


#### fix(all): correctif package.json et dist.scss sur le package all



### [v0.3.0](https://github.com/GouvernementFR/dsfr/compare/v0.2.0...v0.3.0) - 17 Novembre 2020

#### chore(packages): Design System de l'Etat v0.3.0


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


#### fix(all): hofix du mixin "after"


#### fix(icônes): ajout de nouvelles icônes


#### feat(sass-comments): ajout de commentaires/refactir sur packages sidemenu/summary/skiplinks


#### feat(spacing-system): ajout classes utilitaires mode Tailwind


#### fix(header): ajout du cas header sans menu (plus de burger)


#### feat: ajout package table & correction pseudo mixin pour build


#### fix(radios-group): merge de fix/radios-group dans dev


#### refactor(icons): merge de refactor/icons dans dev


#### fix: changement de la commande de build pour les tests


#### fix(logo): svg cleanning, test fix, et logo berne


#### fix(logo): couleur du titre du logo en g800


#### fix: import fonts path in local


#### fix: scheme Color Btn disabled & couleurs fonctionnelles


#### refactor(core): ajout d'un prefix pour sr-only / ajout d'options scheme focus


#### fix(search): reduce placeholder to "rechercher"


#### fix(links): correctif de la taille maximum de l'icon en fonction des icons présentes dans les settings


#### feat(all): correction des hover sur les boutons transparents / Nouvelle version des hover sans utilisation de pseudo elements / Documentation schemes + industrialisation links et buttons + structure core / répercussion de la nouvelle version des links et btns / ajout des dépendances dans les dist / correction de l'ordre des modificateurs / fix sidemenu + refactor links pour tag


#### fix: yarn workspaces




## v0.2

### [v0.2.0](https://github.com/GouvernementFR/dsfr/compare/v0.1.0...v0.2.0) - 19 Octobre 2020

#### chore: pre-release configuration


#### feat: ajout du package sidemenu


#### feat: ajout package liens d'évitement


#### feat: ajout du composant sommaire


#### docs: ajout documentation NPM v2


#### doc: mise à jour PUBLISHING & CONTRIBUTING


#### fix(footer): liens bottom en inline




## v0.1

### [v0.1.0]() - 19 Octobre 2020

#### feat: Design System de l'Etat, commit initial
Design System de l'Etat v0.1.0

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
-Lien d'évitement
-Liste déroulante
-Médias
-Mise en avant
-Mise en exergue
-Navigation principale
-Pagination
-Pied de page (Footer)
-Tuiles




---

