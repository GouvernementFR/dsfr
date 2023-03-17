# Changelog du Système de design de l’État

Toutes les modifications notables apportées à ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
et ce projet respecte [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Pour plus d’informations : [Voir la documentation](https://www.systeme-de-design.gouv.fr/)

## [v1.9.0](https://github.com/GouvernementFR/dsfr/compare/v1.8.5...v1.9.0)

### Merged

- fix(*): correctifs mineurs pa11y et buble + lint (#555)

correction du chemin relatif du layout dans les exemples du package response
spread operator non supporté par buble, remplacé par Object.assign pour la transpilation IE11
correctifs de false positive pa11y [`#555`](https://github.com/GouvernementFR/dsfr/pull/555)

- feat(analytics): ajout de la fonctionnalité Analytics [DS-2981,DS-2982] (#528)

Outil de collecte de données basé sur la solution Eulerian [`#528`](https://github.com/GouvernementFR/dsfr/pull/528)

- fix(*): mise à jour browserlist (#554) [`#554`](https://github.com/GouvernementFR/dsfr/pull/554)

- fix(scheme): correctif du scheme boot pour omission par ie11 (#550)

Le code inline du scheme boot provoque des erreurs interrompant l'exécution du javascript sur IE11
Il faut ajouter l'attribut type="module" sur l'étiquette d'élément script liée au scheme-boot [`#550`](https://github.com/GouvernementFR/dsfr/pull/550)

- fix(header): copie du sélecteur de langue sans accès rapide [DS-2950] (#547)

Les accès rapides sont dupliqués dans le menu mobile par le JS (sauf dans les modes SPA)
En l'absence d'accès rapide, le sélecteur de langue n'était pas dupliqué comme attendu [`#547`](https://github.com/GouvernementFR/dsfr/pull/547)

- fix(artwork): depreciation des xlink dans les artwork [DS-2979] (#545)

xlink-href est déprécié : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href
Il était privilégié jusqu'ici pour le support d'IE11. Un polyfill a été mis en place pour assurer la rétrocompatibilité avec IE11 [`#545`](https://github.com/GouvernementFR/dsfr/pull/545)

- fix(address): Inversion ordre immeuble et batiment [DS-2976] (#544)

inversion de 2 champs dans les modèles formulaire d'adresse [`#544`](https://github.com/GouvernementFR/dsfr/pull/544)

- fix(core): correctif de la taille minimum de l'underline des liens [DS-2987] (#543)

Sur Firefox, la relativité de l'épaisseur du lien (en em) provoque parfois son invisibilité lorsque celui-ci est inférieur à 1px. Ce correctif met en place un minimum de 1px pour l'épaisseur du lien. [`#543`](https://github.com/GouvernementFR/dsfr/pull/543)

- fix(header): alignement à gauche des raccourcis sans icônes [DS-2951] (#542)

L'absence d'icône sur les accès rapides de l'En-tête provoque un alignement centré au lieu d'un alignement gauche attendu. [`#542`](https://github.com/GouvernementFR/dsfr/pull/542)

- fix(checkbox, radio): placement de l'input caché & alignement sm [DS-2941] (#539)

Corrige le mauvais placement du curseur sur les cases à cocher et les boutons radio lors de l'utilisation de VoiceOver (screen reader de MacOs) [`#539`](https://github.com/GouvernementFR/dsfr/pull/539)

- feat(icon): ajout icones system [DS-3188] (#551)

Ajout d'icônes dans system :
fr--arrow-right-up-circle-fill,
fr--arrow-right-down-circle-fill,
fr--equal-circle-fill, [`#551`](https://github.com/GouvernementFR/dsfr/pull/551)

- fix(scheme): ajout du mode sombre de la scrollbar du navigateur (#407) (#535)

Permet de synchroniser le thème de la scrollbar avec celui du DSFR [`#535`](https://github.com/GouvernementFR/dsfr/pull/535)

- feat(color): ajout de token de couleurs artwork (#552)

Ajoute les tokens des familles de couleurs neutral, primary et accent sur artwork dans les usages decorative, background et motif [`#552`](https://github.com/GouvernementFR/dsfr/pull/552)

- feat(pictograms): Ajouts des pictogrammes food, grocery, house (#520) [`#520`](https://github.com/GouvernementFR/dsfr/pull/520)

- feat(deps): mise à jour des dependances npm [DS-2936] (#533) [`#533`](https://github.com/GouvernementFR/dsfr/pull/533)

- fix(response): retrait du fil d'Arianne sur les pages d'erreur [DS-3012] (#507) [`#507`](https://github.com/GouvernementFR/dsfr/pull/507)

- fix(toggle): rend le composant compatible avec vite+svelte (#518) [`#518`](https://github.com/GouvernementFR/dsfr/pull/518)

## [v1.8.5](https://github.com/GouvernementFR/dsfr/compare/v1.8.4...v1.8.5) - 2022-11-28

### Merged

- fix(tag): correction régression lien tag [DS-2975] (#480) [`#480`](https://github.com/GouvernementFR/dsfr/pull/480)

- fix(transcription): correction de la pleine largeur du composant (#483) [`#483`](https://github.com/GouvernementFR/dsfr/pull/483)

## [v1.8.4](https://github.com/GouvernementFR/dsfr/compare/v1.8.3...v1.8.4) - 2022-11-15

### Merged

- fix(footer): correction sur le séparateur bleu du pied de page (#465) [`#465`](https://github.com/GouvernementFR/dsfr/pull/465)

- fix(transcription): correction sur la présence du titre de la modale (#466) [`#466`](https://github.com/GouvernementFR/dsfr/pull/466)

## [v1.8.3](https://github.com/GouvernementFR/dsfr/compare/v1.8.2...v1.8.3) - 2022-11-15

### Merged

- fix(link): correction régression icône à droite sur les éléments interactifs (#461) [`#461`](https://github.com/GouvernementFR/dsfr/pull/461)

## [v1.8.2](https://github.com/GouvernementFR/dsfr/compare/v1.8.1...v1.8.2) - 2022-11-09

### Merged

- fix(global): fix build, lint, clean (#456) [`#456`](https://github.com/GouvernementFR/dsfr/pull/456)

- fix(display): correctif duplication du sélecteur de langue [DS-2908] (#454) [`#454`](https://github.com/GouvernementFR/dsfr/pull/454)

- feat(pagination): border active sur version constrasté [DS-2717] (#436) [`#436`](https://github.com/GouvernementFR/dsfr/pull/436)

- fix(toggle): bug IE label et statut actif [DS-2286] (#443) [`#443`](https://github.com/GouvernementFR/dsfr/pull/443)

- fix(tag): déplacement du focus sur les tags supprimables [DS-2905] (#453) [`#453`](https://github.com/GouvernementFR/dsfr/pull/453)

- fix(transcription): titre du contenu (a11y) [DS-2906] (#452) [`#452`](https://github.com/GouvernementFR/dsfr/pull/452)

- fix(core, download): correction du enlarge link [DS-2777] (#451) [`#451`](https://github.com/GouvernementFR/dsfr/pull/451)

- fix(download): titre des cartes en h3 [DS-2904] (#449) [`#449`](https://github.com/GouvernementFR/dsfr/pull/449)

- fix(scheme): ajout du scheme-boot permettant d'éliminer le flash au load de la page en dark mode [DS-2166] (#455) [`#455`](https://github.com/GouvernementFR/dsfr/pull/455)

- fix(scheme): correctifs de l'API JS de couleur [DS-2907] (#448) [`#448`](https://github.com/GouvernementFR/dsfr/pull/448)

- fix(form): ajout du css deprecated legacy (#439) [`#439`](https://github.com/GouvernementFR/dsfr/pull/439)

- feat(pattern): form autocomplete [DS-2889] (#425) [`#425`](https://github.com/GouvernementFR/dsfr/pull/425)

## [v1.8.1](https://github.com/GouvernementFR/dsfr/compare/v1.8.0...v1.8.1) - 2022-10-27

### Merged

- fix(scheme): correctif thème sombre (fix #440) (#442) [`#442`](https://github.com/GouvernementFR/dsfr/pull/442)

### Fixed

- fix(scheme): correctif thème sombre (fix #440) (#442) [`#440`](https://github.com/GouvernementFR/dsfr/issues/440)
## [v1.8.0](https://github.com/GouvernementFR/dsfr/compare/v1.7.3...v1.8.0) - 2022-10-27

### Merged

- fix(form): correction accessiblité des formulaires (#438) [`#438`](https://github.com/GouvernementFR/dsfr/pull/438)

- feat(nationality): pattern nationalité [DS-2658] (#426) [`#426`](https://github.com/GouvernementFR/dsfr/pull/426)

- fix(quote): couleur du texte quote__sources [DS-2806] (#437) [`#437`](https://github.com/GouvernementFR/dsfr/pull/437)

- fix(form, upload): error & disabled [DS-2746, DS-2700] (#428) [`#428`](https://github.com/GouvernementFR/dsfr/pull/428)

- fix(tag): correction tag selectionnable hover [DS-2724] (#430) [`#430`](https://github.com/GouvernementFR/dsfr/pull/430)

- fix(connect): correction wording "qu'est-ce que france connect" [DS-2700] (#431) [`#431`](https://github.com/GouvernementFR/dsfr/pull/431)

- fix(accordion): correction token de couleur [DS-2700] (#432) [`#432`](https://github.com/GouvernementFR/dsfr/pull/432)

- feat(api): ajout d'événements sur le scheme [DS-2888] (#434) [`#434`](https://github.com/GouvernementFR/dsfr/pull/434)

- feat(api): ajoute la class Colors [DS-2888] (#424) [`#424`](https://github.com/GouvernementFR/dsfr/pull/424)

- fix(tile, summary, sidemenu): niveau de titre des composants [DS-1805] (#420) [`#420`](https://github.com/GouvernementFR/dsfr/pull/420)

- feat(transcription): ajoute le composant transcription [DS-895] (#412) [`#412`](https://github.com/GouvernementFR/dsfr/pull/412)

- fix(doc): met a jour les urls de documentation [DS-2764] (#413) [`#413`](https://github.com/GouvernementFR/dsfr/pull/413)

- fix(tabs): Ouverture de modal à l'intérieur d'un composant onglet [DS-2731] (#405) [`#405`](https://github.com/GouvernementFR/dsfr/pull/405)

- fix(sidemenu): sidemenu disparait à l'ouverture modale FF [DS-2723] (#406) [`#406`](https://github.com/GouvernementFR/dsfr/pull/406)

- fix(page): ajustement des imbrications de container (#417) [`#417`](https://github.com/GouvernementFR/dsfr/pull/417)

- fix(footer): bordure bleu inset & logo toujours aligné en haut (#410) [`#410`](https://github.com/GouvernementFR/dsfr/pull/410)

- fix(response): met a jour les espacements des pages erreur [DS-2762] (#402) [`#402`](https://github.com/GouvernementFR/dsfr/pull/402)

- fix(response): Mise à jour des path des pictogrammes [DS-2762]  (#400) [`#400`](https://github.com/GouvernementFR/dsfr/pull/400)

- fix(password): correction template password [DS-2637] (#399) [`#399`](https://github.com/GouvernementFR/dsfr/pull/399)

- feat(account, register, login): ajout de modèles de page de connexion et création de compte [DS-2625, DS-2666, DS-2670, DS-2628] (#403) [`#403`](https://github.com/GouvernementFR/dsfr/pull/403)

- Feat(pattern): ajoute le modele de date unique [DS-2655] (#396) [`#396`](https://github.com/GouvernementFR/dsfr/pull/396)

- feat(society): Ajout du pattern société [DS-2649] (#415) [`#415`](https://github.com/GouvernementFR/dsfr/pull/415)

- feat(address): Ajout du pattern adresse [DS-2643] (#398) [`#398`](https://github.com/GouvernementFR/dsfr/pull/398)

- refactor(form): Ajout des fr-control et correction des pattern civility & name (#401) [`#401`](https://github.com/GouvernementFR/dsfr/pull/401)

- feat(password): ajout du composant mot de passe [DS-2637] (#391) [`#391`](https://github.com/GouvernementFR/dsfr/pull/391)

- feat(artwork): ajout de pictogrammes à la librairie [DS-2709] (#375) [`#375`](https://github.com/GouvernementFR/dsfr/pull/375)

- feat(pattern): ajoute le modele de civilite [DS-2631] (#355) [`#355`](https://github.com/GouvernementFR/dsfr/pull/355)

- feat(pattern): ajoute le modele de nom et prenom [DS-2634] (#356) [`#356`](https://github.com/GouvernementFR/dsfr/pull/356)

- refactor(input): Séparation en sous composant d'input, ajout de input-email et input-tel [DS-2640] [DS-2646] (#363) [`#363`](https://github.com/GouvernementFR/dsfr/pull/363)

- feat(page-unexpected): ajoute le modele de page erreur inattendue [DS-2762] (#383) [`#383`](https://github.com/GouvernementFR/dsfr/pull/383)

## [v1.7.3](https://github.com/GouvernementFR/dsfr/compare/v1.7.2...v1.7.3) - 2023-02-02

### Merged

- fix(header): retrait du log de la documentation dans la console (#524) [`#524`](https://github.com/GouvernementFR/dsfr/pull/524)

## [v1.7.2](https://github.com/GouvernementFR/dsfr/compare/v1.7.1...v1.7.2) - 2022-07-29

## [v1.7.1](https://github.com/GouvernementFR/dsfr/compare/v1.7.0...v1.7.1) - 2022-07-25

### Merged

- fix(elevation): legacy z-index [DS-2761] (#384) [`#384`](https://github.com/GouvernementFR/dsfr/pull/384)

## [v1.7.0](https://github.com/GouvernementFR/dsfr/compare/v1.6.0...v1.7.0) - 2022-07-21

### Merged

- fix(module): correction lint (#382) [`#382`](https://github.com/GouvernementFR/dsfr/pull/382)

- chore(global): mis à jour des dépendances (#381) [`#381`](https://github.com/GouvernementFR/dsfr/pull/381)

- fix(unavailable): ajout de la page d'exemple [DS-2662] (#380) [`#380`](https://github.com/GouvernementFR/dsfr/pull/380)

- fix(card): correction de l'aspect ratio par défaut des vidéos [DS-2729] (#378) [`#378`](https://github.com/GouvernementFR/dsfr/pull/378)

- fix(not-found): ajuste la template not-found [DS-1941] (#379) [`#379`](https://github.com/GouvernementFR/dsfr/pull/379)

- fix(card): correction aspect ratio par défaut [DS-2729] (#374) [`#374`](https://github.com/GouvernementFR/dsfr/pull/374)

- feat(server): Ajout page erreur serveur [DS-2662] (#330) [`#330`](https://github.com/GouvernementFR/dsfr/pull/330)

- feat(not-found): ajoute les modèles de page erreur 404 [DS-1941] (#371) [`#371`](https://github.com/GouvernementFR/dsfr/pull/371)

- fix(global): correction des erreurs pa11y (#376) [`#376`](https://github.com/GouvernementFR/dsfr/pull/376)

- feat(translate) : Ajout du sélecteur de langue [DS-2017] (#359) [`#359`](https://github.com/GouvernementFR/dsfr/pull/359)

- fix(footer, header): généralisation de l'attribut 'title' du lien retour/accueil du logo [DS-2682] (#353) [`#353`](https://github.com/GouvernementFR/dsfr/pull/353)

- fix(stepper): correction barre d'étape masquée sur Firefox [DS-2760] (#373) [`#373`](https://github.com/GouvernementFR/dsfr/pull/373)

- feat(global): évolution du système d'élévation et des ombres [DS-2128] (#372) [`#372`](https://github.com/GouvernementFR/dsfr/pull/372)

- fix(global): Amendements sur les CGU du DSFR (#370) [`#370`](https://github.com/GouvernementFR/dsfr/pull/370)

- Amendements sur les CGU du DSFR (#368)

* fix: corrections typographiques

Signed-off-by: Bastien Guerry &lt;bastien.guerry@data.gouv.fr&gt;

* fix: levée d'une contradiction entre la licence et les CGU

Personne n'est autorisé à utiliser les ressources du DSFR pour publier
un site ou une application mobile induisant son utilisateur en erreur
sur le caractère officiel du site ou de l'application.

Restreindre les finalités de l'usage de la ressource par l'Utilisateur
de l'État est redondant au regard de l'interdiction ci-dessus et trop
limitant: un agent public peut vouloir tester le DSFR, le modifier sur
sa machine, partager des évolutions qu'il propose, même si celles-ci
ne sont pas appelées à être intégrées au DSFR, et donc à rester
interdites à l'usage sur des sites officiels.

D'où l'inflexion dans la première modification de ce correctif et la
mention de "pour leurs sites et applications mobiles" dans la deuxième
modification, explicitant le fait qu'« utilisation » désigne ici une
utilisation dans le cadre d'une publication de site ou d'application.

Il y a sinon une contradiction entre les libertés octroyées via la
licence MIT et les limitations imposées dans les CGU.

Signed-off-by: Bastien Guerry &lt;bastien.guerry@data.gouv.fr&gt;

* fix: suppression d'une phrase fausse et d'un paragraphe inutile

La licence MIT permet aux utilisateurs d'utiliser le code source (pas
seulement de le consulter) et de vendre la ressource s'ils le veulent.

Le paragraphe interdisant l'usage de la ressource aux fins de tromper
les utilisateurs de sites ou d'applications mobiles est redondant avec
le paragraphe suivant, rappellant que ces tromperies sont punissables.

Signed-off-by: Bastien Guerry &lt;bastien.guerry@data.gouv.fr&gt;

* fix: suppression des espaces en fin de lignes

Signed-off-by: Bastien Guerry &lt;bastien.guerry@data.gouv.fr&gt; [`#368`](https://github.com/GouvernementFR/dsfr/pull/368)

- feat(i18n): système i18n globalisé (#365) [`#365`](https://github.com/GouvernementFR/dsfr/pull/365)

- fix(content, core): bug ratio vidéos ios [DS-2188] (#352) [`#352`](https://github.com/GouvernementFR/dsfr/pull/352)

- fix(pagination): correction couleur des liens de pagination en 'button' [DS-2577] (#354) [`#354`](https://github.com/GouvernementFR/dsfr/pull/354)

- fix(global): correction standalone locale pour i18n (#364) [`#364`](https://github.com/GouvernementFR/dsfr/pull/364)

- fix(core): correction du sens de l'extension du soulignement (#350) [`#350`](https://github.com/GouvernementFR/dsfr/pull/350)

- fix(global): correction pa11y test (#360) [`#360`](https://github.com/GouvernementFR/dsfr/pull/360)

- feat(global): module sass dsfr (#358) [`#358`](https://github.com/GouvernementFR/dsfr/pull/358)

- feat(global): multiplication des pages d'exemple et internationalisation [DS-1381] (#357) [`#357`](https://github.com/GouvernementFR/dsfr/pull/357)

## [v1.6.0](https://github.com/GouvernementFR/dsfr/compare/v1.5.2...v1.6.0) - 2022-06-14

### Merged

- feat(core): mise à disposition de state et stage dans l'api js (#345) [`#345`](https://github.com/GouvernementFR/dsfr/pull/345)

- fix(core): correction du fond du svg - faux positif PA11Y (#343) [`#343`](https://github.com/GouvernementFR/dsfr/pull/343)

- fix(card): correctif des tailles fixes des cartes horizontales [DS-2707] (#338) [`#338`](https://github.com/GouvernementFR/dsfr/pull/338)

- fix(core): suppression de l'icône lien extérieur sur une balise form [DS-2706] (#340) [`#340`](https://github.com/GouvernementFR/dsfr/pull/340)

- fix(global): stylelint (#337) [`#337`](https://github.com/GouvernementFR/dsfr/pull/337)

- fix(follow, share): ajout texte explicatif icones RS disponibles [DS-2598][DS-2597] (#331) [`#331`](https://github.com/GouvernementFR/dsfr/pull/331)

- fix(core,link,button,tag,card): correctif icône lien extérieur [DS-2510] (#333) [`#333`](https://github.com/GouvernementFR/dsfr/pull/333)

- fix(icons): correctif depreciation fr-fi-checkbox-circle-line [DS-2702] (#334) [`#334`](https://github.com/GouvernementFR/dsfr/pull/334)

- fix(navigation): correctif focus au clic sur les liens [DS-2677] (#336) [`#336`](https://github.com/GouvernementFR/dsfr/pull/336)

- fix(header): correctif espacement liens rapides [DS-2680] (#335) [`#335`](https://github.com/GouvernementFR/dsfr/pull/335)

- fix(stepper): cache le détail de la dernière étape en css [DS-2446] (#329) [`#329`](https://github.com/GouvernementFR/dsfr/pull/329)

- fix(table): bug ios bordures qui n'apparaissent pas [DS-2186] (#332) [`#332`](https://github.com/GouvernementFR/dsfr/pull/332)

- fix(share,, follow): ajout icones réseau sociaux (#324) [`#324`](https://github.com/GouvernementFR/dsfr/pull/324)

- fix(follow): correctif de la version legacy deprecated (#326) [`#326`](https://github.com/GouvernementFR/dsfr/pull/326)

- chore(deps): mise à jour des dépendances (#325) [`#325`](https://github.com/GouvernementFR/dsfr/pull/325)

- feat(stepper): ajout du composant indicateur d'étapes [DS-2446] (#319) [`#319`](https://github.com/GouvernementFR/dsfr/pull/319)

- feat(artwork): ajout des pictogrammes illustratifs [DS-2483] (#317) [`#317`](https://github.com/GouvernementFR/dsfr/pull/317)

- refactor(core, card, content): ajout utilitaire fr-ratio et aspect-ratio des content img & vid [DS-2543] [DS-2571] (#316) [`#316`](https://github.com/GouvernementFR/dsfr/pull/316)

- feat(notice): Ajout du composant bandeau d'information [DS-2014] (#302) [`#302`](https://github.com/GouvernementFR/dsfr/pull/302)

- fix(download):  couleur puce groupe de lien de téléchargement [DS-246] (#313) [`#313`](https://github.com/GouvernementFR/dsfr/pull/313)

- chore(global): migration vers sass dart [DS-1859] (#310) [`#310`](https://github.com/GouvernementFR/dsfr/pull/310)

- refactor(global): implémentation du positionnement des icônes en inline [DS-2526] (#320) [`#320`](https://github.com/GouvernementFR/dsfr/pull/320)

- refactor(header, link, button, follow, share, tag, badge): correction espacements des groupes [DS-2559] (#311) [`#311`](https://github.com/GouvernementFR/dsfr/pull/311)

- fix(sidemenu): changement balise du titre [DS-2508] (#290) [`#290`](https://github.com/GouvernementFR/dsfr/pull/290)

- fix(follow): correction link icon déprecié (#306) [`#306`](https://github.com/GouvernementFR/dsfr/pull/306)

- fix(core): correction de l'implémentation de $DIST-PATH (#300) [`#300`](https://github.com/GouvernementFR/dsfr/pull/300)

- chore: suppression de node-sass-magic-importer (#279) [`#279`](https://github.com/GouvernementFR/dsfr/pull/279)

## [v1.5.2](https://github.com/GouvernementFR/dsfr/compare/v1.5.1...v1.5.2) - 2022-06-14

### Merged

- fix(core): correction de l'épaisseur du soulignement des liens (#346) [`#346`](https://github.com/GouvernementFR/dsfr/pull/346)

- fix(core): correction du soulignement des liens (#344) [`#344`](https://github.com/GouvernementFR/dsfr/pull/344)

- fix(core): correction du text-decoration sur les liens pour les version antérieures (#342) [`#342`](https://github.com/GouvernementFR/dsfr/pull/342)

- fix(core): suppression de l'icône lien extérieur sur une balise form [DS-2706] (#339) [`#339`](https://github.com/GouvernementFR/dsfr/pull/339)

- fix(link): correctif lien multiligne [DS-2562] (#322) [`#322`](https://github.com/GouvernementFR/dsfr/pull/322)

- fix(follow): correction link icon déprecié (#301) [`#301`](https://github.com/GouvernementFR/dsfr/pull/301)

## [v1.5.1](https://github.com/GouvernementFR/dsfr/compare/v1.5.0...v1.5.1) - 2022-04-26

### Merged

- docs(utility): description et liens vers la documentation (#299) [`#299`](https://github.com/GouvernementFR/dsfr/pull/299)

- fix(icons-system): correction lint (#298) [`#298`](https://github.com/GouvernementFR/dsfr/pull/298)

- fix(icons): icônes dépréciées de la v1.4.0 [DS-2541] (#297) [`#297`](https://github.com/GouvernementFR/dsfr/pull/297)

- fix(core, utility): icones dépréciées [DS-2541] (#296) [`#296`](https://github.com/GouvernementFR/dsfr/pull/296)

- fix(download): correction erreur js legacy [DS-2540] (#292) [`#292`](https://github.com/GouvernementFR/dsfr/pull/292)

- fix(dsfr-deprecated): correction du nom de fichier sur le js legacy (#295) [`#295`](https://github.com/GouvernementFR/dsfr/pull/295)

## [v1.5.0](https://github.com/GouvernementFR/dsfr/compare/v1.4.3...v1.5.0) - 2022-04-21

### Merged

- fix(download): titre groupe de liens en classe BEM [DS-246] (#289) [`#289`](https://github.com/GouvernementFR/dsfr/pull/289)

- fix: contributing.md et readme.md 1.5.0 (#286) [`#286`](https://github.com/GouvernementFR/dsfr/pull/286)

- fix: correctif icon alert et globale (#287) [`#287`](https://github.com/GouvernementFR/dsfr/pull/287)

- fix(legacy): media query legacy manquante (#285) [`#285`](https://github.com/GouvernementFR/dsfr/pull/285)

- fix(download): retrait exemple groupe sm [DS-246] (#284) [`#284`](https://github.com/GouvernementFR/dsfr/pull/284)

- fix(download,card): transpilation async et commentaire (#283) [`#283`](https://github.com/GouvernementFR/dsfr/pull/283)

- refactor(icon): Ajouts nouvelles icones & séparation en familles [DS-2514] (#280) [`#280`](https://github.com/GouvernementFR/dsfr/pull/280)

- feat(download): Ajout du composant téléchargement de fichier [DS-246] [DS-2507] (#272) [`#272`](https://github.com/GouvernementFR/dsfr/pull/272)

- fix(connect): correction de la variable de build isStandalone [DS-2528] (#281) [`#281`](https://github.com/GouvernementFR/dsfr/pull/281)

- fix(input): correction icone date [DS-2280] (#276) [`#276`](https://github.com/GouvernementFR/dsfr/pull/276)

- feat(header): bandeau de site en beta [DS-2417] (#269) [`#269`](https://github.com/GouvernementFR/dsfr/pull/269)

- fix(footer): alignement des logos partenaires [DS-2530] (#277) [`#277`](https://github.com/GouvernementFR/dsfr/pull/277)

- chore: suppression de node-sass-json-importer (#278) [`#278`](https://github.com/GouvernementFR/dsfr/pull/278)

- feat(card): ajout de la fonctionnalité card v2 [DS-2023] (#270) [`#270`](https://github.com/GouvernementFR/dsfr/pull/270)

- fix(global): mise à jour des dépendances (#274) [`#274`](https://github.com/GouvernementFR/dsfr/pull/274)

- feat(button): changement de la taille des boutons (padding) [DS-2500] (#266) [`#266`](https://github.com/GouvernementFR/dsfr/pull/266)

- fix(core): correction liste à puce sur android [DS-2287] (#268) [`#268`](https://github.com/GouvernementFR/dsfr/pull/268)

- fix(global): restitution des icones en background + mask [DS-2280] (#256) [`#256`](https://github.com/GouvernementFR/dsfr/pull/256)

- fix(core): bug checkbox NVDA - correction du reset appearance [DS-2442] (#252) [`#252`](https://github.com/GouvernementFR/dsfr/pull/252)

- refactor(connect): généralisation du build du standalone [DS-2434] (#255) [`#255`](https://github.com/GouvernementFR/dsfr/pull/255)

## [v1.4.3](https://github.com/GouvernementFR/dsfr/compare/v1.4.2...v1.4.3) - 2022-06-14

### Merged

- fix(core): correction soulignement des liens (#348) [`#348`](https://github.com/GouvernementFR/dsfr/pull/348)

- chore(global): incrémentation du numéro de version (#347) [`#347`](https://github.com/GouvernementFR/dsfr/pull/347)

## [v1.4.2](https://github.com/GouvernementFR/dsfr/compare/v1.4.1...v1.4.2) - 2022-06-13

### Merged

- fix(core): suppression de l'icône lien extérieur sur une balise form [DS-2706] (#341) [`#341`](https://github.com/GouvernementFR/dsfr/pull/341)

## [v1.4.1](https://github.com/GouvernementFR/dsfr/compare/v1.4.0...v1.4.1) - 2022-03-29

### Merged

- fix(tag): correction tag activable sm et dans un group sm [DS-2491] (#258) [`#258`](https://github.com/GouvernementFR/dsfr/pull/258)

- fix(connect): retrait description & ajout target blank [DS-2490] (#261) [`#261`](https://github.com/GouvernementFR/dsfr/pull/261)

- fix(follow): correction de la dépréciation pour être plus générique [DS-2484] (#257) [`#257`](https://github.com/GouvernementFR/dsfr/pull/257)

- fix(connect): libelle FranceConnect attaché [DS-2479] (#260) [`#260`](https://github.com/GouvernementFR/dsfr/pull/260)

## [v1.4.0](https://github.com/GouvernementFR/dsfr/compare/v1.3.1...v1.4.0) - 2022-03-16

### Merged

- fix(display): correction et support des versions dépréciées (#247) [`#247`](https://github.com/GouvernementFR/dsfr/pull/247)

- fix(header,follow,content): retours dépréciation [DS-2474] (#241) [`#241`](https://github.com/GouvernementFR/dsfr/pull/241)

- fix(sidemenu): correction hauteur & scroll sidemenu sticky [DS-2473] (#243) [`#243`](https://github.com/GouvernementFR/dsfr/pull/243)

- fix(navigation): correction affichage mega-menu [DS-2476] (#242) [`#242`](https://github.com/GouvernementFR/dsfr/pull/242)

- fix(connect): correction taille du lien en sm [DS-2402] (#239) [`#239`](https://github.com/GouvernementFR/dsfr/pull/239)

- feat(global): mise en place de la stratégie de dépréciation des composants [DS-2463] (#237) [`#237`](https://github.com/GouvernementFR/dsfr/pull/237)

- fix: corrections des retours dev 1.4.0 [DS-2467] (#240) [`#240`](https://github.com/GouvernementFR/dsfr/pull/240)

- fix(connect): retrait du hint text [DS-2402] (#238) [`#238`](https://github.com/GouvernementFR/dsfr/pull/238)

- feat(link): Ajout du lien "back to top" [DS-286] (#233) [`#233`](https://github.com/GouvernementFR/dsfr/pull/233)

- fix(megamenu): corrige erreur js en mode no-module [DS-2379] (#226) [`#226`](https://github.com/GouvernementFR/dsfr/pull/226)

- fix(collapse): corrige le collapse multi-navigateurs [DS-2332] (#227) [`#227`](https://github.com/GouvernementFR/dsfr/pull/227)

- fix: templates plus paramétrables [DS-2408][DS-2138] (#221) [`#221`](https://github.com/GouvernementFR/dsfr/pull/221)

- feat(footer): ajout d'un sample de footer paramétrable [DS-2132][DS-2408] (#215) [`#215`](https://github.com/GouvernementFR/dsfr/pull/215)

- fix(sidemenu): correction hauteur sidemenu sticky [DS-2355] (#223) [`#223`](https://github.com/GouvernementFR/dsfr/pull/223)

- fix(modal): &lt;dialog&gt; masqué en no-css [DS-2423] (#230) [`#230`](https://github.com/GouvernementFR/dsfr/pull/230)

- fix(tab): correction z-index des tab-panels [DS-2420] (#232) [`#232`](https://github.com/GouvernementFR/dsfr/pull/232)

- fix: margin bottom des textes et titres en css prop [DS-2013] (#229) [`#229`](https://github.com/GouvernementFR/dsfr/pull/229)

- feat(core): ajout d'icones [DS-2405] (#231) [`#231`](https://github.com/GouvernementFR/dsfr/pull/231)

- refactor(global): soulignement des liens et ajout des boutons tertiaires [DS-2022][DS-2427] (#234) [`#234`](https://github.com/GouvernementFR/dsfr/pull/234)

- feat(connect): ajout description et lien france connect [DS-2402] (#224) [`#224`](https://github.com/GouvernementFR/dsfr/pull/224)

- fix(core, tab, modal, button): injection js de styles en variables css [DS-2409][DS-2373] (#225) [`#225`](https://github.com/GouvernementFR/dsfr/pull/225)

- feat(core): variabilisation du core [DS-2315] (#212) [`#212`](https://github.com/GouvernementFR/dsfr/pull/212)

- feat(dependencies): mise a jour des dépendances node mineures (#228) [`#228`](https://github.com/GouvernementFR/dsfr/pull/228)

- feat(connect): Ajout de la fonctionnalité FranceConnect [DS-551] (#211) [`#211`](https://github.com/GouvernementFR/dsfr/pull/211)

- fix(toggle, modal): correction z-index de toggle [DS-2385] (#213) [`#213`](https://github.com/GouvernementFR/dsfr/pull/213)

- fix(accordion): a11y retrait des ul li du groupe d'accordéon [DS-2348] (#214) [`#214`](https://github.com/GouvernementFR/dsfr/pull/214)

- fix(core): nouvelle fonte Marianne avec correction de l'alignement [DS-1394] (#169) [`#169`](https://github.com/GouvernementFR/dsfr/pull/169)

## [v1.3.1](https://github.com/GouvernementFR/dsfr/compare/v1.3.0...v1.3.1) - 2022-02-07

### Merged

- fix(toggle): correction de l'état précoché de l'interrupteur [DS-2392] (#210) [`#210`](https://github.com/GouvernementFR/dsfr/pull/210)

- fix(navigation, sidemenu): correction focus coupés [DS-2322][DS-2309][DS-2089] (#204) [`#204`](https://github.com/GouvernementFR/dsfr/pull/204)

- chore(deps): mise a jour des dépendances (#209) [`#209`](https://github.com/GouvernementFR/dsfr/pull/209)

- fix(checkbox,form, radio,toggle): correction de la gestion de l'attribut checked et de la page d'exemple de form [DS-2376] (#208) [`#208`](https://github.com/GouvernementFR/dsfr/pull/208)

- fix(core): correction de la mixin has-icon et has-not-icon [DS-2386] (#205) [`#205`](https://github.com/GouvernementFR/dsfr/pull/205)

- fix(core): faute dans le texte alternatif [DS-2153] (#206) [`#206`](https://github.com/GouvernementFR/dsfr/pull/206)

- fix(doc): met a jour la doc des templates ejs [DS-1787] (#171) [`#171`](https://github.com/GouvernementFR/dsfr/pull/171)

- fix(checkbox,radio,toggle): ajout de l'attribut checked [DS-2376] (#198) [`#198`](https://github.com/GouvernementFR/dsfr/pull/198)

- fix: ordre des media query au build css [DS-2381] (#202) [`#202`](https://github.com/GouvernementFR/dsfr/pull/202)

- fix(core): correction font-icon descent [DS-2382] (#201) [`#201`](https://github.com/GouvernementFR/dsfr/pull/201)

- refactor(alert): alerte dynamique refermable (#199) [`#199`](https://github.com/GouvernementFR/dsfr/pull/199)

- feat(alert): ajout exemple dynamique [DS-2368] (#194) [`#194`](https://github.com/GouvernementFR/dsfr/pull/194)

- refactor(core): standardisation des icones [DS-2367] (#196) [`#196`](https://github.com/GouvernementFR/dsfr/pull/196)

- fix(checkbox): exemple checkbox sup et sub [DS-2041] (#197) [`#197`](https://github.com/GouvernementFR/dsfr/pull/197)

- feat(core): ajout du module font-swap [DS-2272] (#195) [`#195`](https://github.com/GouvernementFR/dsfr/pull/195)

- fix(toggle): status width [DS-2272] (#193) [`#193`](https://github.com/GouvernementFR/dsfr/pull/193)

- fix(toggle, modal): patch 1.3.1 - status width & modal icon aria-hidden (#192) [`#192`](https://github.com/GouvernementFR/dsfr/pull/192)

## [v1.3.0](https://github.com/GouvernementFR/dsfr/compare/v1.2.1...v1.3.0) - 2022-01-18

### Merged

- fix(core): icones statut & remix [DS-2371] (#190) [`#190`](https://github.com/GouvernementFR/dsfr/pull/190)

- fix(tag): sélectionnable [DS-2105] (#189) [`#189`](https://github.com/GouvernementFR/dsfr/pull/189)

- fix(toggle): statut activer/desactiver a11y [DS-2272] (#185) [`#185`](https://github.com/GouvernementFR/dsfr/pull/185)

- fix(alert): retrait attribut role='alert' et collapse [DS-2274] (#182) [`#182`](https://github.com/GouvernementFR/dsfr/pull/182)

- fix(radio): sup sub exemple [DS-2041] (#188) [`#188`](https://github.com/GouvernementFR/dsfr/pull/188)

- fix(follow): texte d'erreur email & centrage alignement icône erreur/valid [DS-2261] (#186) [`#186`](https://github.com/GouvernementFR/dsfr/pull/186)

- fix(consent): titre bandeau en h2 [DS-2250] (#187) [`#187`](https://github.com/GouvernementFR/dsfr/pull/187)

- chore(deps): mise a jour des dépendances (#184) [`#184`](https://github.com/GouvernementFR/dsfr/pull/184)

- fix(link, tag, pagination, share): role & aria link disabled [DS-2274] (#181) [`#181`](https://github.com/GouvernementFR/dsfr/pull/181)

- fix(tag): correctif js tag (#180)



* fix(core): correctif js

* fix(tag): correctif js [`#180`](https://github.com/GouvernementFR/dsfr/pull/180)

- fix(core): correctif lint + js (#179) [`#179`](https://github.com/GouvernementFR/dsfr/pull/179)

- feat(tag): Ajout des composants tag activable et tag supprimable [DS-2235] (#166) [`#166`](https://github.com/GouvernementFR/dsfr/pull/166)

- feat(badge): ajout du composant badge [DS-1921] (#59) [`#59`](https://github.com/GouvernementFR/dsfr/pull/59)

- feat(core): Ajout des valeurs d'espacement 0.5v et 1.5v [DS-2246] (#174) [`#174`](https://github.com/GouvernementFR/dsfr/pull/174)

- fix: commentaire des textes alternatif des images [DS-2153] (#175) [`#175`](https://github.com/GouvernementFR/dsfr/pull/175)

- fix: retours d'accessibilité a11y [DS-2253][DS-2255][DS-2256][DS-2260][DS-2261][DS-2262][DS-2263][DS-2267][DS-2273] (#176) [`#176`](https://github.com/GouvernementFR/dsfr/pull/176)

- fix(core): correctif des imports js [DS-2328] (#178) [`#178`](https://github.com/GouvernementFR/dsfr/pull/178)

- fix(scheme): ajoute methode de detection du localstorage [DS-2328] (#170) [`#170`](https://github.com/GouvernementFR/dsfr/pull/170)

- feat(icon): ajoute la nouvelle font-icon [DS-2327] (#168) [`#168`](https://github.com/GouvernementFR/dsfr/pull/168)

- fix(core): correctif du hover des actions (#177) [`#177`](https://github.com/GouvernementFR/dsfr/pull/177)

- fix(radio-checkbox): met a jour le style pour les indices et exposants [DS-2041] (#86) [`#86`](https://github.com/GouvernementFR/dsfr/pull/86)

- feat(logo): modifie l'intitulé par défaut [DS-2249] (#165) [`#165`](https://github.com/GouvernementFR/dsfr/pull/165)

- fix(legacy): retire les polyfills legacy du script module [DS-2304] (#173) [`#173`](https://github.com/GouvernementFR/dsfr/pull/173)

- fix(tab): retrait du smooth scroll [DS-2042] (#172) [`#172`](https://github.com/GouvernementFR/dsfr/pull/172)

- feat(tab): ajout de l'ombre au scroll & recentrage des boutons [DS-2073] [DS-2042] (#159) [`#159`](https://github.com/GouvernementFR/dsfr/pull/159)

- fix(legacy): ie listes et marges [DS-1088] (#154) [`#154`](https://github.com/GouvernementFR/dsfr/pull/154)

- fix(tile): background tile [DS-2329] (#167) [`#167`](https://github.com/GouvernementFR/dsfr/pull/167)

- feat(tab): ajout modifieur viewport-width [DS-2075] (#142) [`#142`](https://github.com/GouvernementFR/dsfr/pull/142)

- fix(tab): corrige le scroll horizontal [DS-2074] (#89) [`#89`](https://github.com/GouvernementFR/dsfr/pull/89)

- fix(card): corrige erreur à la compilation (#164) [`#164`](https://github.com/GouvernementFR/dsfr/pull/164)

- fix(card): bordure extérieure sur les cartes [DS-2295] (#162) [`#162`](https://github.com/GouvernementFR/dsfr/pull/162)

- refactor: nettoyage et simplification du système de couleur [DS-2212] (#160) [`#160`](https://github.com/GouvernementFR/dsfr/pull/160)

## [v1.2.1](https://github.com/GouvernementFR/dsfr/compare/v1.2.0...v1.2.1) - 2021-11-29

### Merged

- feat(modal): ajout d'un attribut pour la fermeture au click [DS-2284] (#158) [`#158`](https://github.com/GouvernementFR/dsfr/pull/158)

- fix(modal): ajout de l'attribut aria-modal [DS-2281] (#157) [`#157`](https://github.com/GouvernementFR/dsfr/pull/157)

- fix(header):  allègement hover bloc marque (#155) [`#155`](https://github.com/GouvernementFR/dsfr/pull/155)

- refactor: passage du noir et du blanc dans l'échelle des gris [DS-2236] (#156) [`#156`](https://github.com/GouvernementFR/dsfr/pull/156)

- fix(modal): accessibilité du focus [DS-2080] (#145) [`#145`](https://github.com/GouvernementFR/dsfr/pull/145)

- fix(card-tile): correction hover enlarge-link [DS-2248] (#153) [`#153`](https://github.com/GouvernementFR/dsfr/pull/153)

- fix: correction de la version minimum node [DS-2196] (#152) [`#152`](https://github.com/GouvernementFR/dsfr/pull/152)

- fix(sidemenu): correction du hover des liens [DS-2230] (#151) [`#151`](https://github.com/GouvernementFR/dsfr/pull/151)

- fix(header): corrections css pour IE, valeur initial [DS-1088] (#144) [`#144`](https://github.com/GouvernementFR/dsfr/pull/144)

- fix(card-tile): met a jour les noms de class d'accentuation [DS-2227]  (#147) [`#147`](https://github.com/GouvernementFR/dsfr/pull/147)

- feat(core): ajout meta theme-color dans favicon [DS-2231] (#148) [`#148`](https://github.com/GouvernementFR/dsfr/pull/148)

- feat(core): ajout icone filter [DS-2228] (#149) [`#149`](https://github.com/GouvernementFR/dsfr/pull/149)

- fix(core): bug js tab conceal [DS-2218] (#150) [`#150`](https://github.com/GouvernementFR/dsfr/pull/150)

- feat(sidemenu): ajoute le chevron sur le aria-expanded [DS-2229] (#146) [`#146`](https://github.com/GouvernementFR/dsfr/pull/146)

- fix(upload): ajout aria described [DS-2213] (#141) [`#141`](https://github.com/GouvernementFR/dsfr/pull/141)

- feat(yarn) : mise à jour des dépendances de développement majeures et mineures [DS-2196] (#143) [`#143`](https://github.com/GouvernementFR/dsfr/pull/143)

- fix: hover ajusté dans navigation, consent et summary [DS-2195] [DS-2199] (#140) [`#140`](https://github.com/GouvernementFR/dsfr/pull/140)

- fix: bug legacy IE [DS-1088] (#139) [`#139`](https://github.com/GouvernementFR/dsfr/pull/139)

## [v1.2.0](https://github.com/GouvernementFR/dsfr/compare/v1.1.0...v1.2.0) - 2021-11-17

### Merged

- fix(table): correction tableau avec bordure gris (#136) [`#136`](https://github.com/GouvernementFR/dsfr/pull/136)

- feat(tile): ajout de l'accentuation en usage contrast [DS-2164] (#134) [`#134`](https://github.com/GouvernementFR/dsfr/pull/134)

- fix(select): ajout temporaire du chevron (#133) [`#133`](https://github.com/GouvernementFR/dsfr/pull/133)

- chore: lint (#132) [`#132`](https://github.com/GouvernementFR/dsfr/pull/132)

- fix(inject-svg): ajoute une methode globale sur l'api pour definir legacy [DS-2103] (#127) [`#127`](https://github.com/GouvernementFR/dsfr/pull/127)

- fix(footer): couleur catégorie menu [DS-1436] (#131) [`#131`](https://github.com/GouvernementFR/dsfr/pull/131)

- fix: correction icon theme-fill (#130) [`#130`](https://github.com/GouvernementFR/dsfr/pull/130)

- fix(footer): correction couleur des liens [DS-1436] (#129) [`#129`](https://github.com/GouvernementFR/dsfr/pull/129)

- fix(callout): accentuation du background [DS-2181] (#125) [`#125`](https://github.com/GouvernementFR/dsfr/pull/125)

- fix(radio): bordure sur la classe radio-rich__img (#122) [`#122`](https://github.com/GouvernementFR/dsfr/pull/122)

- fix: correction hover sur lien fil du texte et card [DS-2146][DS-2179] (#128) [`#128`](https://github.com/GouvernementFR/dsfr/pull/128)

- fix(card): met a jour le modifier d'accent [DS-2164] (#123) [`#123`](https://github.com/GouvernementFR/dsfr/pull/123)

- fix(search): met à jour le reset des boutons et champs de saisie pour Safari [DS-2168] (#115) [`#115`](https://github.com/GouvernementFR/dsfr/pull/115)

- fix(display): corrige bouton d'affichage et bug a la selection du mode [DS-2147] [DS-2176] (#119) [`#119`](https://github.com/GouvernementFR/dsfr/pull/119)

- fix: correctifs ejs form [DS-1854] (#120) [`#120`](https://github.com/GouvernementFR/dsfr/pull/120)

- fix(card): ajoute un modifier d'accentuation [DS-2164] (#121) [`#121`](https://github.com/GouvernementFR/dsfr/pull/121)

- refactor(consent): fonctions pour générer l'objet consent (#103) [`#103`](https://github.com/GouvernementFR/dsfr/pull/103)

- fix(display): ajoute des attributs d'accessibilité sur les svg [DS-2103] (#118) [`#118`](https://github.com/GouvernementFR/dsfr/pull/118)

- fix(summary): correction du token (#117) [`#117`](https://github.com/GouvernementFR/dsfr/pull/117)

- feat(modal): mise en place de l'overlay [DS-2101] (#116) [`#116`](https://github.com/GouvernementFR/dsfr/pull/116)

- fix: hover radio / retour couleur [DS-2104][DS-2158][DS-2157][DS-2159][DS-2163][DS-2170][DS-2171] (#114) [`#114`](https://github.com/GouvernementFR/dsfr/pull/114)

- feat(example): ajoute un bouton fixe pour les parametre d'affichage [DS-2166] (#113) [`#113`](https://github.com/GouvernementFR/dsfr/pull/113)

- fix: ejs corrections multiples [DS-1854] (#112) [`#112`](https://github.com/GouvernementFR/dsfr/pull/112)

- feat: couleurs accentuation [DS-1183] (#111) [`#111`](https://github.com/GouvernementFR/dsfr/pull/111)

- fix: correction ombre table + lint / pa11y (#110) [`#110`](https://github.com/GouvernementFR/dsfr/pull/110)

- feat(display): Ajout icones illustratives & thème systeme [DS-2103] (#109) [`#109`](https://github.com/GouvernementFR/dsfr/pull/109)

- refactor: restructuration custom props / legacy [DS-2107] (#108) [`#108`](https://github.com/GouvernementFR/dsfr/pull/108)

- fix(navigation): espacement catégories mobile (#105) [`#105`](https://github.com/GouvernementFR/dsfr/pull/105)

- fix(toggle): espacement composant (#104) [`#104`](https://github.com/GouvernementFR/dsfr/pull/104)

- refactor(ejs): ajoute des exemples disabled et checked (#94) [`#94`](https://github.com/GouvernementFR/dsfr/pull/94)

- feat(icon): ajout icon logout [DS-2128] (#93) [`#93`](https://github.com/GouvernementFR/dsfr/pull/93)

- fix(navigation): nav-link hover sur a et button uniquement [DS-1982] (#68) [`#68`](https://github.com/GouvernementFR/dsfr/pull/68)

- fix: margin bottom &lt;p&gt; et &lt;hx&gt; des composants [DS-2013] (#73) [`#73`](https://github.com/GouvernementFR/dsfr/pull/73)

- feat(core): ajout du reset de hr [DS-1882] (#60) [`#60`](https://github.com/GouvernementFR/dsfr/pull/60)

- fix(upload): disabled input-upload & curseur pointeur (#102) [`#102`](https://github.com/GouvernementFR/dsfr/pull/102)

- feat(upload): ajout du composant upload [DS-1918] (#43) [`#43`](https://github.com/GouvernementFR/dsfr/pull/43)

- fix(modale): corrige la hauteur de la modale sur desktop [DS-2076] (#80) [`#80`](https://github.com/GouvernementFR/dsfr/pull/80)

- fix(consent): ajout d'id aux services (#101) [`#101`](https://github.com/GouvernementFR/dsfr/pull/101)

- fix(modal): focus trap avec iframe [DS-2127] (#92) [`#92`](https://github.com/GouvernementFR/dsfr/pull/92)

- fix: readme et contributing [DS-2078] (#90) [`#90`](https://github.com/GouvernementFR/dsfr/pull/90)

- refactor: inclusion des composants ejs dans locals.nomComposant [DS-1854] (#76) [`#76`](https://github.com/GouvernementFR/dsfr/pull/76)

- fix: bouton sidemenu display none / scheme package.yml / fr-input code inutile / table refactor et couleurs (#100) [`#100`](https://github.com/GouvernementFR/dsfr/pull/100)

- fix(logo): correction blue-france & mourning (#99) [`#99`](https://github.com/GouvernementFR/dsfr/pull/99)

- fix: correction du token art déprécié (#98) [`#98`](https://github.com/GouvernementFR/dsfr/pull/98)

- fix: correction des hovers (#97) [`#97`](https://github.com/GouvernementFR/dsfr/pull/97)

- Refactor: ajout des tokens artwork (#96) [`#96`](https://github.com/GouvernementFR/dsfr/pull/96)

- fix: corrige le lint en l'absence de fichier sass (#95) [`#95`](https://github.com/GouvernementFR/dsfr/pull/95)

- Fix(pa11y) : met a jour le scope des tests pa11y [DS-2090] (#85) [`#85`](https://github.com/GouvernementFR/dsfr/pull/85)

- refactor(scheme): nouveau système de couleur [DS-1186] (#83) [`#83`](https://github.com/GouvernementFR/dsfr/pull/83)

- fix: dsfr license npm [DS-1777] (#82) [`#82`](https://github.com/GouvernementFR/dsfr/pull/82)

- fix(sidemenu): bordures en desktop [DS-2077] (#77) [`#77`](https://github.com/GouvernementFR/dsfr/pull/77)

- fix(lint): supprime les polyfill du linter eslint [DS-2088] (#84) [`#84`](https://github.com/GouvernementFR/dsfr/pull/84)

- Fix: définition d'une valeur par défaut de l'objet de configuration window.dsfr [DS-2085] (#79) [`#79`](https://github.com/GouvernementFR/dsfr/pull/79)

- fix: licence.md devient license.md  [DS-1777]  (#78) [`#78`](https://github.com/GouvernementFR/dsfr/pull/78)

- fix(legacy-browser): corrige les erreurs JS sous ie11 [DS-1967] (#72) [`#72`](https://github.com/GouvernementFR/dsfr/pull/72)

- fix: correction du package.json [DS-1777] (#74) [`#74`](https://github.com/GouvernementFR/dsfr/pull/74)

- fix(api): Bug Modal JS [DS-1996] (#69) [`#69`](https://github.com/GouvernementFR/dsfr/pull/69)

- fix: page/pattern dossier vide et npm deploy [DS-1777] (#67) [`#67`](https://github.com/GouvernementFR/dsfr/pull/67)

- fix(core): exemple texte taille md [DS-1851] (#71) [`#71`](https://github.com/GouvernementFR/dsfr/pull/71)

- feat(core): ajout d'icones [DS-1973] (#65) [`#65`](https://github.com/GouvernementFR/dsfr/pull/65)

- feat: ajout d'un robots.txt à la racine de public [DS-1837] (#53) [`#53`](https://github.com/GouvernementFR/dsfr/pull/53)

- fix: favicon path (#66)

dsfr-dev devient dsfr [`#66`](https://github.com/GouvernementFR/dsfr/pull/66)

- refactor: modification du gitignore (#62) [`#62`](https://github.com/GouvernementFR/dsfr/pull/62)

- fix(core): fr-text devient fr-text--md (#63) [`#63`](https://github.com/GouvernementFR/dsfr/pull/63)

- fix(search): correction fr-input--error et fr-input--valid [DS-1937] (#57) [`#57`](https://github.com/GouvernementFR/dsfr/pull/57)

- fix(content): Le composant media ne fonctionne pas avec une image svg [DS-1966] (#54) [`#54`](https://github.com/GouvernementFR/dsfr/pull/54)

- fix: correction structure dev, retrait underscore dist exemple [DS-1777] (#55) [`#55`](https://github.com/GouvernementFR/dsfr/pull/55)

- fix(core): marge sous les textes et titres [DS-1870] (#52) [`#52`](https://github.com/GouvernementFR/dsfr/pull/52)

- fix(header): correction semicolon manquant devant last-child (#50) [`#50`](https://github.com/GouvernementFR/dsfr/pull/50)

- fix(input): fr-input--error sur un textarea le passe en rouge [DS-1577] (#47) [`#47`](https://github.com/GouvernementFR/dsfr/pull/47)

- fix(share): correction espacements des boutons de partage [DS-1961] (#49) [`#49`](https://github.com/GouvernementFR/dsfr/pull/49)

- chore: passage au singulier des noms de fichiers et packages [DS-1777] (#45) [`#45`](https://github.com/GouvernementFR/dsfr/pull/45)

- refactor(pattern): évolution de la structure pattern, composant, page et du build [DS-1777] (#44) [`#44`](https://github.com/GouvernementFR/dsfr/pull/44)

- fix: dynamic js instances et minification (#41) [`#41`](https://github.com/GouvernementFR/dsfr/pull/41)

- fix(core): correction font-display (#40) [`#40`](https://github.com/GouvernementFR/dsfr/pull/40)

- refactor: implémentation du js dynamique [DS-1372][DS-1540] (#9) [`#9`](https://github.com/GouvernementFR/dsfr/pull/9)

- fix(core): text-rendering en optimizeLegibility [DS-1834] (#37)

* fix(core): text-rendering en optimizeLegibility

* fix(core): inputs en text rendering optimizeLegibility [`#37`](https://github.com/GouvernementFR/dsfr/pull/37)

- fix(core): font-display swap par défaut [DS-1802] (#38) [`#38`](https://github.com/GouvernementFR/dsfr/pull/38)

## [v1.1.0](https://github.com/GouvernementFR/dsfr/compare/v1.0.0...v1.1.0) - 2021-07-27

### Merged

- fix(quotes): Suppression du alt de l'image [DS-1929] (#35) [`#35`](https://github.com/GouvernementFR/dsfr/pull/35)

- fix(share): correction title désactivé (#34) [`#34`](https://github.com/GouvernementFR/dsfr/pull/34)

- fix(doc): maj contributing.md (#33) [`#33`](https://github.com/GouvernementFR/dsfr/pull/33)

- fix(checkboxes, radios): input en position absolue [DS-1924] (#31) [`#31`](https://github.com/GouvernementFR/dsfr/pull/31)

- fix(share): tailles des popup de partage (#32) [`#32`](https://github.com/GouvernementFR/dsfr/pull/32)

- fix(follow): séparateur en box shadow [DS-1915] (#29) [`#29`](https://github.com/GouvernementFR/dsfr/pull/29)

- fix(share): correction template ejs et nom du composant [DS-510] (#30) [`#30`](https://github.com/GouvernementFR/dsfr/pull/30)

- fix(follow): corrections et nouveau nom composant (#28) [`#28`](https://github.com/GouvernementFR/dsfr/pull/28)

- feat: ajout du composant follow (nous suivre) [DS-801][DS-805] (#10) [`#10`](https://github.com/GouvernementFR/dsfr/pull/10)

- feat: ajout du composant quotes (citation) [DS-424] (#23) [`#23`](https://github.com/GouvernementFR/dsfr/pull/23)

- feat: ajout du composant share (boutons de partage) [DS-510] (#21) [`#21`](https://github.com/GouvernementFR/dsfr/pull/21)

- refactor(table): fonctionnement sans js [DS-1687] (#16) [`#16`](https://github.com/GouvernementFR/dsfr/pull/16)

## [v1.0.0](https://github.com/GouvernementFR/dsfr/compare/v0.6.0...v1.0.0) - 2021-06-24

### Merged

- fix(buttons, modal, tabs): correction nouveau nom d'icône (#19) [`#19`](https://github.com/GouvernementFR/dsfr/pull/19)

- fix(alerts): Correction texte explicatif (#17) [`#17`](https://github.com/GouvernementFR/dsfr/pull/17)

- fix(modal): ajustements et correctifs [DS-1430][DS-1431][DS-1432] (#11) [`#11`](https://github.com/GouvernementFR/dsfr/pull/11)

- feat(consent): Ajout du composant gestionnaire de consentement [DS-378] (#12) [`#12`](https://github.com/GouvernementFR/dsfr/pull/12)

- feat(alerts): ajout du composant alerts [DS-495] (#7)

* feat(alerts): style alertes

* feat(alerts): ajout d'exemples

* fix(alerts): examples

* fix(alerts): attributs bouton close

* fix(alerts): correction snippet

* fix(alerts): title bem style h6

* fix(alerts): margin p, hx et lien documentation [`#7`](https://github.com/GouvernementFR/dsfr/pull/7)

- fix(summary): Ajustement de summary avec les nouvelles listes [DS-1813] (#6)

* fix(summary): Ajustement de summary avec les nouvelles listes

* doc(summary): Commentaire d'explication sur les nombres utilisés pour créer le décalage de l'hover

* fix(summary): remplacement du marker par un before sur le lien (support safari + hover) [`#6`](https://github.com/GouvernementFR/dsfr/pull/6)

- fix(cards): ordre détail dans le snippet (#8) [`#8`](https://github.com/GouvernementFR/dsfr/pull/8)

- fix(core): correction des listes à puces [DS-1461] (#4)

* fix(core): correction des listes pour un retour à un fonctionnement proche de celui par défaut

* fix(core): correction espacement des listes

* fix(core): nettoyage code commenté [`#4`](https://github.com/GouvernementFR/dsfr/pull/4)

- fix(radios checkboxes): correction bug windows inversion des nombres [DS-1639] (#5)

* fix(radios, checkboxes): correction display des labels

* feat: label checkbox & radios

* fix: case insensitive flag retiré des sélecteurs d'attribut (non supporté par IE edge)

Co-authored-by: lab9 &lt;lab9.fr@gmail.com&gt; [`#5`](https://github.com/GouvernementFR/dsfr/pull/5)

- fix: contributing (#2) [`#2`](https://github.com/GouvernementFR/dsfr/pull/2)

## [v0.6.0](https://github.com/GouvernementFR/dsfr/compare/v0.5.3...v0.6.0) - 2021-04-07

## [v0.5.3](https://github.com/GouvernementFR/dsfr/compare/v0.5.0...v0.5.3) - 2021-04-07

## [v0.5.0](https://github.com/GouvernementFR/dsfr/compare/v0.4.0...v0.5.0) - 2021-02-10

## [v0.4.0](https://github.com/GouvernementFR/dsfr/compare/v0.3.1...v0.4.0) - 2021-02-03

## [v0.3.1](https://github.com/GouvernementFR/dsfr/compare/v0.3.0...v0.3.1) - 2020-11-18

## [v0.3.0](https://github.com/GouvernementFR/dsfr/compare/v0.2.0...v0.3.0) - 2020-11-17

## [v0.2.0](https://github.com/GouvernementFR/dsfr/compare/v0.1.0...v0.2.0) - 2020-10-19

## v0.1.0 - 2020-10-19
