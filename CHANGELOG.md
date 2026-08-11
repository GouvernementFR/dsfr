# Changelog du Système de design de l’État

Toutes les modifications notables apportées à ce projet sont documentées dans ce fichier.

Ce projet respecte [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Pour plus d’informations : [Voir la documentation](https://www.systeme-de-design.gouv.fr/)


## v1.15

### [v1.15.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.2) - 11 août 2026

#### [#1487](https://github.com/GouvernementFR/dsfr/pull/1487) : ♻️ génération de la doc depuis dsfr-doc
`refactor `

- Déplace la dépendance à dsfr-nexus dans un sous projet dsfr-doc

---


### [v1.15.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.1) - 20 juillet 2026

#### [#1486](https://github.com/GouvernementFR/dsfr/pull/1486) : ✨ mise à jour des modalités d'utilisation
`feat `

– Incrémentation de la version de cgu.md

---

#### [#1483](https://github.com/GouvernementFR/dsfr/pull/1483) : ✨ mise à jour de la licence
`feat `

- Passage en licence etalab-2.0

---


### [v1.15.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.15.0) - 17 juillet 2026

#### [#1482](https://github.com/GouvernementFR/dsfr/pull/1482) : 📝 correction terme site-segment
`docs (analytics)`



---

#### [#1480](https://github.com/GouvernementFR/dsfr/pull/1480) : 📝 correction des extraits de code
`docs (modal)`



---

#### [#1476](https://github.com/GouvernementFR/dsfr/pull/1476) : 🐛 amélioration du script preinstall & variable d'environnement
`fix `

- Ajout de la variable d'environnement DSFR_ACCEPT_LICENSE=1 pour considérer la licence comme acceptée sans lecture de .dsfr.yml (pour les CI)

- Amélioration des messages d'erreurs

---

#### [#1479](https://github.com/GouvernementFR/dsfr/pull/1479) : 📝 correction doc accessibilité de la modale
`docs (modal)`



---

#### [#1467](https://github.com/GouvernementFR/dsfr/pull/1467) : 🐛 permet d'utiliser la grille sous forme de liste
`fix (grid)`

* Corrige l'utilisation de ul et ol avec des gouttières

* Corrige la numérotation pour les listes ordonnées

* Retire la partie legacy inutile

---

#### [#1465](https://github.com/GouvernementFR/dsfr/pull/1465) : 🐛 corrige la démo et ajoute le titre de la modale
`fix (transcription)`

- Ajoute la possibilité de paramétrer le titre de la modal de transcription dans le storybook

- Correction de la documentation transcription

---

#### [#1471](https://github.com/GouvernementFR/dsfr/pull/1471) : ✨ modifie la manière d'installer le dsfr
`feat `



---

#### [#1468](https://github.com/GouvernementFR/dsfr/pull/1468) : 🐛 retrait des skiplinks en version print
`fix (skiplinks)`



---

#### [#1463](https://github.com/GouvernementFR/dsfr/pull/1463) : 🐛 correction du script d'acceptation des cgu à l'installation
`fix `



---

#### [#1460](https://github.com/GouvernementFR/dsfr/pull/1460) : 🐛 corrige le format et ajout licence
`fix (publiccode)`



---

#### [#1396](https://github.com/GouvernementFR/dsfr/pull/1396) : ⬆️ mise à jour des dépendances npm
`chore (dependencies)`



---

#### [#1457](https://github.com/GouvernementFR/dsfr/pull/1457) : 🐛 correction du format du fichier publiccode.yml
`fix `



---

#### [#1372](https://github.com/GouvernementFR/dsfr/pull/1372) : ✨ mise à jour des CGU
`feat (cgu)`

- Réécriture des modalités d'utilisation - CGU.md

- Ajoute la nécessité de les accepter pour voir la documentation ou installer le dsfr

---

#### [#1384](https://github.com/GouvernementFR/dsfr/pull/1384) : 📝 ajout de pages de recherche d'icones, couleurs, et pictogrammes
`docs `

- Ajout des pages de recherche d'icônes, de pictogrammes et de couleur

- Corrections de la documentation des pictogrammes

---

#### [#1380](https://github.com/GouvernementFR/dsfr/pull/1380) : 🐛 changement de selecteur des input+label
`fix (checkbox, radio)`

- Rend le sélecteur du label qui suit les inputs de type radio/checkbox moins sensible à la structure du DOM.

  - Utilisation d'un "~" plutot que "+".

  - Impacte les composants radio, checkbox, password, segmented, form

---

#### [#1386](https://github.com/GouvernementFR/dsfr/pull/1386) : ✨ ajout de l'attribut action reduce
`feat (analytics)`

- Ajout de l'attribut `data-fr-analytics-action="reduce"` qui permet de désactiver l'envoi d'actions sur un élément particulier, en empêchant l'initialisation de l'instance de tracking associée à cet élément.

- Mise à jour de la documentation analytics

---

#### [#1447](https://github.com/GouvernementFR/dsfr/pull/1447) : 🐛 correction des ouvertures/fermeture du tooltip
`fix (tooltip)`

- Corrige la fermeture sur IOS et la fermeture au tab

- Une information contextuelle ne reste plus ouverte après un clic

- Cliquer une seconde fois sur une infobulle la referme maintenant

---

#### [#1429](https://github.com/GouvernementFR/dsfr/pull/1429) : 🐛 décale d'une scrollbar uniquement la modale ouverte
`fix (modal)`

- Toutes les modales étaient impactées par le décalage créé pour pallier l'agrandissement de la fenêtre lié au retrait de la scrollbar lors de l'ouverture d'une modal. Cela créait, entre autres, un décalage de la navigation principale à l'ouverture d'une modale

---

#### [#1444](https://github.com/GouvernementFR/dsfr/pull/1444) : 🐛 correction de la fonction sass space()
`fix `

- Corrige les espaces dans le css généré par la fonction sass space(), qui générait des valeurs incorrectes comme `calc(10%- 2rem)` 

- L'erreur était invisible car stylelint le corrige au build

---

#### [#1389](https://github.com/GouvernementFR/dsfr/pull/1389) : 🐛 déplace le focus au press sur les flèches directionnelles
`fix (tab)`

- Lorsque que l'on change d'onglet au clavier, via les touches directionnelles, le focus se positionne sur le bouton actif

---

#### [#1387](https://github.com/GouvernementFR/dsfr/pull/1387) : 🐛 scroll au focus d'un élément caché sous le footer
`fix (modal)`

- Lorsque le focus est placé sur un élément caché sous le footer sticky de la modal, on scroll pour qu'il soit visible

- Ajout de la propriété scroll-padding-bottom

---

#### [#1449](https://github.com/GouvernementFR/dsfr/pull/1449) : 🐛 corrections des tests automatiques Pa11y
`fix (pa11y)`



---

#### [#1452](https://github.com/GouvernementFR/dsfr/pull/1452) : ✨ permet d'utiliser la grille sous forme de liste ul/li
`feat (grid)`

- Retire les puces lorsque l'on utilise une grille avec la balise ul

---

#### [#1455](https://github.com/GouvernementFR/dsfr/pull/1455) : ✨ ajoute la variation lien au fil du texte
`feat (link)`

- Ajoute un paramètre inText permettant de retirer le style du lien

---

#### [#1453](https://github.com/GouvernementFR/dsfr/pull/1453) : 🐛 corrections du build et des dépendances
`fix `

- Corrige les templates de colors généré

- Remplace les if ternaires dépréciés en scss

- Corrige les dépendances et peerDependances

---

#### [#1451](https://github.com/GouvernementFR/dsfr/pull/1451) : 🐛 changement de la media query de détection de IE
`fix (legacy)`

- Retire le support du Windows High Contrast mode sur IE

- Change la media-query de détection de IE ce qui permet d'éviter le crash des linter/compilateur

---

#### [#1390](https://github.com/GouvernementFR/dsfr/pull/1390) : 🐛 niveau de titre du sommaire
`fix (summary)`

- Le titre du sommaire peut être une balise `<p>`

---

#### [#1454](https://github.com/GouvernementFR/dsfr/pull/1454) : 📝 niveau de titre des catégories du menu
`docs (footer)`



---

#### [#1393](https://github.com/GouvernementFR/dsfr/pull/1393) : 🐛 niveau de titre des catégories du menu en h2
`fix (footer)`

- Par défaut, le titre des catégories du menu du footer sont maintenant en h2

---

#### [#1430](https://github.com/GouvernementFR/dsfr/pull/1430) : 📝 améliore la recherche des noms anglais des composants
`docs (*)`

- Ajout de mots-clés en anglais

---

#### [#1431](https://github.com/GouvernementFR/dsfr/pull/1431) : 📝 corrige le snippet de code du sélecteur de langue
`docs (translate)`

- Retrait de la balise et du role "nav"

---

#### [#1434](https://github.com/GouvernementFR/dsfr/pull/1434) : 🐛 désactive le composant quand l'attribut HTML `data-fr-scheme` est absent
`fix (display)`

- Corrige la marge basse dans la modale

- Désactive le composant quand l'attribut data-fr-scheme est absent

---

#### [#1432](https://github.com/GouvernementFR/dsfr/pull/1432) : 🐛 change l'attribut type du bouton à submit
`fix (search)`

- Passe le type du bouton de la recherche à "submit" dans les exemples, la doc, et storybook puisque la barre de recherche doit être intégrée au sein d'un formulaire

---

#### [#1424](https://github.com/GouvernementFR/dsfr/pull/1424) : 📝 retrait du 'hidden' sur les exemples de code
`docs (select)`

- Correction déjà appliquée dans le code, répercutée dans la doc

---

#### [#1440](https://github.com/GouvernementFR/dsfr/pull/1440) : 📝 corrige les liens vers la documentation des composants
`docs (*)`



---

#### [#1422](https://github.com/GouvernementFR/dsfr/pull/1422) : 🐛 correction de sécurité sur le js des pictogrammes
`fix (core)`

- Sur IE11 et sur la fonction dépréciée `inject-svg`, une couche sécurité permet d'éviter les injections.

---

#### [#1419](https://github.com/GouvernementFR/dsfr/pull/1419) : 🐛 correction des éléments désactivés
`fix (sidemenu)`



---

#### [#1407](https://github.com/GouvernementFR/dsfr/pull/1407) : ✨ utilisation de la liaison for/id sur le curseur simple
`feat (range)`

- Corrige le contrôle Storybook "size"

- Utilise la liaison for/id comme préconisé dans la partie accessibilité

- Corrige les exemples du curseur double

- Cache la valeur par défaut du curseur aux APIs d'accessibilité

---

#### [#1382](https://github.com/GouvernementFR/dsfr/pull/1382) : 🐛 empeche fermeture au click sur tooltip
`fix (tooltip)`

- Sur les tooltips ouverts au clic sur le btn, cliquer sur le tooltip ne ferme plus celui-ci. Ce qui permet de sélectionner et copier coller son contenu.

---

#### [#1443](https://github.com/GouvernementFR/dsfr/pull/1443) : 🐛 generation des settings de couleur et lint
`fix `



---

#### [#1385](https://github.com/GouvernementFR/dsfr/pull/1385) : ✨ retrait des utilitaires de couleurs red-marianne
`feat `

- Retrait des utilitaires de couleurs de text, border, et background en red-marianne

---

#### [#1383](https://github.com/GouvernementFR/dsfr/pull/1383) : 🐛 rajoute icônes supprimées en 1.14
`fix (icons)`

Remet en place les icônes :

- fr--arrow-right-up-circle-fill.svg‎

- fr--arrow-right-down-circle-fill.svg

---

#### [#1367](https://github.com/GouvernementFR/dsfr/pull/1367) : 🐛 améliore l'affichage des éléments de l'en-tête et de la navigation en mobile
`fix (header, navigation)`

- Uniformise les marges des raccourcis dans une liste

- Affiche un raccourci de la même façon avec ou sans liste

- Cache le séparateur des raccourcis quand il n'y a pas de navigation

- Identifie comme "actif" les N1 dépliants dans la navigation

- Aligne pas tous les éléments uniformément dans l'en-tête

---

#### [#1366](https://github.com/GouvernementFR/dsfr/pull/1366) : 📝 lien vers les recommandation sur les mots de passe de l'ANSSI
`docs (password)`

- L'ancien document n'est plus disponible.

---

#### [#1364](https://github.com/GouvernementFR/dsfr/pull/1364) : ✨ améliore l'aide à la saisie des champs email et tél
`feat (input)`

- Utilisation du texte d'aide "email@example.com" au lieu de "email@domain.com"

- Utilisation de l'exemple de téléphone "(+33) 5 36 49 68 27" au lieu de "(+33) 1 22 33 44 55"

---

#### [#1363](https://github.com/GouvernementFR/dsfr/pull/1363) : 📝 typo doc design header
`docs (header)`



---

#### [#1361](https://github.com/GouvernementFR/dsfr/pull/1361) : ✨ ajoute l'état indéterminé
`feat (checkbox)`

- Ajoute la case à cocher en état indéterminé

---

#### [#1388](https://github.com/GouvernementFR/dsfr/pull/1388) : ✨ ajout du bouton proConnect
`feat (connect)`

- Ajout de la variante `fr-connect--pro` et mise à jour de la documentation

---

#### [#1403](https://github.com/GouvernementFR/dsfr/pull/1403) : 🐛 corrige l'affichage mobile lors d'une utilisation sans accordéon
`fix (sidemenu)`

Sans accordéon, le composant est rendu avec deux erreurs :

- Les éléments de premier niveau sont séparés par deux bordures

- Quand il n'y a qu'un sous-élément, une bordure est dessinée entre celui-ci et le premier niveau.

---

#### [#1341](https://github.com/GouvernementFR/dsfr/pull/1341) : 🐛 corrige la marge du variant viewport-width
`fix (tab)`

- Retire le calcul de marge en vw, erroné sur firefox qui compte la scrollbar dans le viewport

---

#### [#1438](https://github.com/GouvernementFR/dsfr/pull/1438) : 📝 correction valeur aria-live des messages de formulaire
`docs (pattern, page)`

- Remplace la valeur aria-live `assertive` par `polite`

---



## v1.14

### [v1.14.4](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.4) - 3 mars 2026

#### [#1397](https://github.com/GouvernementFR/dsfr/pull/1397) : 🐛 github action security
`fix `

- Corrige une faille de sécurité potentielle sur les github actions

---

#### [#1398](https://github.com/GouvernementFR/dsfr/pull/1398) : ♻️ nom des fichiers data.yml
`refactor `

- change le nom des fichiers data.yml à la racine de chaque composant en index.yml

---


### [v1.14.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.3) - 15 décembre 2025

#### [#1350](https://github.com/GouvernementFR/dsfr/pull/1350) : ⬆️ mise à jour des dépendances npm
`chore (dependencies)`



---

#### [#1334](https://github.com/GouvernementFR/dsfr/pull/1334) : 📝 titre page accessibilite en h2
`docs (badge)`



---

#### [#1348](https://github.com/GouvernementFR/dsfr/pull/1348) : ✨ documentation bouton non lié
`feat (modal)`

- Ajout de documentation sur la gestion des modales sans bouton associé et avec plusieurs boutons associés

- Ajout d'un exemple de modale avec plusieurs boutons d'ouverture

---

#### [#1347](https://github.com/GouvernementFR/dsfr/pull/1347) : ✨ header du tableau et bouton aria-sort
`feat (table)`

- Alignement du contrôle segmenté à droite dans le header

- Permet une utilisation correcte de aria-sort, ajouts des classe fr-btn--sort-asc et fr-btn--sort-desc

- Ajout d'un exemple avec barre de recherche dans le header du tableau



---

#### [#1345](https://github.com/GouvernementFR/dsfr/pull/1345) : 🐛 espaces insécables avant et après les guillemets
`fix (quote)`

- Utilisation de l'espace insécable avant et après les guillemets pour éviter le retour à la ligne d'un guillemet seul

---

#### [#1344](https://github.com/GouvernementFR/dsfr/pull/1344) : 🐛 fermeture au click sur un sous-élement html d'un nav_link
`fix (navigation)`

- Corrige le clic sur un élément à l'intérieur d'un nav__link 



---

#### [#1343](https://github.com/GouvernementFR/dsfr/pull/1343) : 📝 mise à jour des assets
`docs `

- Corrections mineures sur les images de la documentation

---

#### [#1336](https://github.com/GouvernementFR/dsfr/pull/1336) : 📝 mise à jour de la liste des moyens de connexion de FranceConnect
`docs `



---

#### [#1332](https://github.com/GouvernementFR/dsfr/pull/1332) : 📝 ajout du mot clé haut de page
`docs (link)`

- Ajout du mot clé "haut de page" sur les pages de documentation du lien pour améliorer la recherche de ce terme

---

#### [#1331](https://github.com/GouvernementFR/dsfr/pull/1331) : 📝 met a jour les liens vers la doc de chaque composants
`fix (readme)`

- Correction des liens vers la documentation dans les fichiers package.yml de chaque package

---

#### [#1323](https://github.com/GouvernementFR/dsfr/pull/1323) : 🐛 corrige label nomdusite.fr
`fix (consent)`

- Remplace le label nomdusite.fr par nomdusite.gouv.fr dans le gestion de consentement





---

#### [#1305](https://github.com/GouvernementFR/dsfr/pull/1305) : 📝 supprime un doublon de paragraphe
`docs (notice)`

- Retire un texte en double

---

#### [#1313](https://github.com/GouvernementFR/dsfr/pull/1313) : 🐛 Storybook min/max value steps & ajout markup titre
`fix (stepper)`

- les propriétés stepCount et currentStep sont maintenant limitées entre 2 et 8

- ajout des valeurs 'h6' et 'p' sur la propriété markup

---

#### [#1311](https://github.com/GouvernementFR/dsfr/pull/1311) : 📝 corrige les IDs des accordéons & retrait niveau de titre des extraits de code
`docs (icon)`



---


### [v1.14.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.2) - 17 septembre 2025

#### [#1302](https://github.com/GouvernementFR/dsfr/pull/1302) : 🐛 ajoute un fond blanc au panel des onglets
`fix (tab)`

- Corrige le fond transparent du tab panel

- Corrige la hauteur du panel (4px en trop)

---

#### [#1303](https://github.com/GouvernementFR/dsfr/pull/1303) : 📝 met a jour les visuels suite maj du footer
`docs (assets)`

Met à jour les visuels sur les pages :

- page d’erreurs,

- page de connexion

- page de creation de compte

- composant paramètre d’affichage

- composant Lettre d’information et Réseaux Sociaux

---

#### [#1298](https://github.com/GouvernementFR/dsfr/pull/1298) : ⬆️ storybook dependencies
`chore `



---

#### [#1297](https://github.com/GouvernementFR/dsfr/pull/1297) : 📝 corrections mineures de documentation
`docs `

- Fautes d'orthographe

- Ajout de précision sur l'ajout icônes

---

#### [#1286](https://github.com/GouvernementFR/dsfr/pull/1286) : 🐛 build storybook & ajout input label value
`fix (range)`

- Correction de la page storybook du curseur

- Ajout de la possibilité de modifier les intitulés des aria-label des inputs sur le curseur double

---

#### [#1290](https://github.com/GouvernementFR/dsfr/pull/1290) : 🐛 corrige affichage dans storybook
`fix (display, transcription)`

- corrige l'affichage des modales ouvertes dans storybook

---

#### [#1292](https://github.com/GouvernementFR/dsfr/pull/1292) : 📝 uniformisation du formatage des groupes de boutons
`docs (button, modal)`

- Les groupes de boutons sont maintenant présentés dans les exemples de code avec des ul/li plutôt que des div

---

#### [#1295](https://github.com/GouvernementFR/dsfr/pull/1295) : 🐛 met a jour le lien du footer service-public.gouv.fr
`fix (footer)`

- Remplace le lien "service-public.fr" par "service-public.gouv.fr" dans le composant footer et les exemples utilisant le pied de page

---


### [v1.14.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.1) - 29 août 2025

#### [#1279](https://github.com/GouvernementFR/dsfr/pull/1279) : 🐛 correction du build des exemples
`fix (build)`



---

#### [#1252](https://github.com/GouvernementFR/dsfr/pull/1252) : ⬆️ change la version minimale de Node.js
`chore (Node)`

- Pour permettre plus de souplesse, les versions de Node acceptées pour build le DSFR sont maintenant "^20.19.0 || ^22.12.0 || >=24.0.0"

---

#### [#1254](https://github.com/GouvernementFR/dsfr/pull/1254) : ⬆️ mise à jour des dépendances npm
`chore (dependencies)`



---

#### [#1277](https://github.com/GouvernementFR/dsfr/pull/1277) : 📝 corrections mineures de documentations
`docs `

- Corrections documentations button, link, footer, display, tooltip

---

#### [#1276](https://github.com/GouvernementFR/dsfr/pull/1276) : 🐛 mega menu leader toujours visible
`fix `

- Retrait des classes hidden mobile sur le texte dans le leader des exemples de mega-menu 

---

#### [#1274](https://github.com/GouvernementFR/dsfr/pull/1274) : 🐛 retrait css inutile
`fix (toggle)`

- Retire une propriété CSS non conforme et inutile dans print.scss

---

#### [#1267](https://github.com/GouvernementFR/dsfr/pull/1267) : 🐛 maj des meta-descriptions
`fix (seo)`

- mise à jour des méta-descriptions dans les pages de documentation des composants.

---

#### [#1266](https://github.com/GouvernementFR/dsfr/pull/1266) : 🐛 retire trailing slash
`fix (breadcrumb)`

- Retrait du dernier "/" en fin d'url des liens du fil d'arianne

---

#### [#1210](https://github.com/GouvernementFR/dsfr/pull/1210) : ajout de pictogrammes
`feat (artworks)`

Ajout des pictogrammes :

- building

   - base.svg

   - companie.svg

- digital

   - smartphone.svg

- document

   - archive.svg

   - binders.svg

   - conclusion.svg

   - document-search.svg

   - driving-license-new.svg

   - international-driving-license-new.svg

   - international-driving-license.svg

   - national-identity-card-passport.svg

   - presse-card.svg

   - sign-document.svg

- health

   - doctor

   - medical-research

- institutions

   - army-tank

   - astronaut

   - navy-anchor

   - navy-bachi

- leasure

   - art

   - audio

   - catalog

   - pictures

   - podcast

   - video

   - video-games

- system

   - language

   - flow-settings

   - flow-list

---

#### [#1214](https://github.com/GouvernementFR/dsfr/pull/1214) : 🐛 correction bordure navigation mobile avec 1 seul item
`fix (navigation)`

 - Correction de la bordure de la navigation mobile lorsqu'elle ne contient qu'un seul élément 

---

#### [#1220](https://github.com/GouvernementFR/dsfr/pull/1220) : 📝 Maillage des composants sous forme de carte
`docs `

- Dans la documentation, le maillage des composants est maintenant proposé sous forme de cartes plutôt que des liens

---

#### [#1221](https://github.com/GouvernementFR/dsfr/pull/1221) : 🐛 marges de la modale en pourcentage
`fix (modal)`

- Lorsque la page est insérée dans une iframe plus petite que le viewport les marges en haut et en bas de la modale prennent 10% de la page et non 10% de l'iframe

---

#### [#1225](https://github.com/GouvernementFR/dsfr/pull/1225) : ✨ retrait de l'interrupteur avec libellé à gauche
`fix (toggle)`

- La variation interrupteur avec libellé à droite est problématique en termes d'accessibilité, notamment en navigation avec loupe d'écran. Nous avons décidé de la retirer. Celle-ci reste fonctionnelle mais ne doit plus être utilisée.

- Correction et amélioration de la documentation de l'interrupteur.

---

#### [#1211](https://github.com/GouvernementFR/dsfr/pull/1211) : 📝 correctifs édito & ajout de stories
`docs `

- Ajout de stories sur checkbox et radio

- Corrections mineures sur la documentation

---

#### [#1228](https://github.com/GouvernementFR/dsfr/pull/1228) : 🐛 Gestion du thème dsfr sur les iframes storybook
`fix (storybook)`

- Applique le thème de la page dans les iframes Storybook du site de doc

---

#### [#1229](https://github.com/GouvernementFR/dsfr/pull/1229) : 🐛 modification du markup nav en div
`fix (translate)`

- Le composant sélecteur de langue ne doit plus utiliser une balise `<nav>` avec l'attribut `role=navigation`, mais une simple `<div>` pour alléger la lecture sur les lecteurs d'écrans.

---

#### [#1232](https://github.com/GouvernementFR/dsfr/pull/1232) : 🐛 ajout attribut aria-label curseur double
`fix (range)`

- Ajout d'attributs aria-label "Valeur minimale" et "Valeur maximale" sur les input du curseur double, pour décrire leur usage

- Correction de l'id dans l'exemple du curseur simple

---

#### [#1237](https://github.com/GouvernementFR/dsfr/pull/1237) : 📝 correction du modele nom et prenom
`docs (name)`

- Correction de l'exemple du modèle de nom et prénom avec ajout de prénom

---

#### [#1238](https://github.com/GouvernementFR/dsfr/pull/1238) : 🐛 corrige alignement radio boutons dans modale gestionnaire de consentement
`fix (consent)`

- Corrige les radio boutons "tout accepter / tout refuser" qui passent à la ligne sur le formulaire de consentement dans certaines résolutions.

---

#### [#1239](https://github.com/GouvernementFR/dsfr/pull/1239) : 📝 Correction des parties Installation du CSS et du JS
`docs `

- Ajout des dépendances CSS dans la partie code de chaque composant

- Ajout de documentation sur les parties Javascript de l'en-tête, des cases à cocher, du tableau, et du contrôle segmenté

---

#### [#1242](https://github.com/GouvernementFR/dsfr/pull/1242) : ✨ Ajout de nombreuses icônes, iso figma
`feat (icons)`

- ajout d'un dossier `icons-arrows`



- déplacement des icones de flèche de `icons-system` vers `icons-arrows`



- ajout de nombreuses icones

---

#### [#1243](https://github.com/GouvernementFR/dsfr/pull/1243) : ✨ retrait du patch pour les versions inférieures à 1.9
`feat (analytics)`

- Retrait du "patch" JS pour les analytics, spécifique aux anciennes versions du DSFR

---

#### [#1246](https://github.com/GouvernementFR/dsfr/pull/1246) : 📝 Mise à jour de la doc des fondamentaux, de connect, et upload
`docs (core)`

- Mise à jour des documentations des fondamentaux :

  - grille

  - icone

  - médias

  - pictogramme

  - typographie

- Correction du lien vers la documentation de FranceConnect

- Ajout d'infos sur l'attribut `accept` dans la documentation de l'ajout de fichier 

---

#### [#1212](https://github.com/GouvernementFR/dsfr/pull/1212) : ✨ correction des liens vers la documentation des composants
`fix (*)`

- Corrige le lien vers la documentation dans les fichiers package.yml de chaque composant

---

#### [#1213](https://github.com/GouvernementFR/dsfr/pull/1213) : 🐛 placmeent du focus a la fermeture clavier
`fix (tooltip)`

- Corrige le retour du focus lorsque l'on ferme le tooltip via la touche échap. Problème constaté notamment au sein d'une modale.

---

#### [#1222](https://github.com/GouvernementFR/dsfr/pull/1222) : 🐛 correction exemple lien externe
`fix `

- Correction du titre sur l'exemple de lien externe

---

#### [#1240](https://github.com/GouvernementFR/dsfr/pull/1240) : 📝 Mise à jour du fichier README.md
`docs `

- Correction des liens cassés et mise à jour de documentation du readme

---


### [v1.14.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.14.0) - 25 juin 2025

#### [#1069](https://github.com/GouvernementFR/dsfr/pull/1069) : 📝 ajout de documentation pour le site de doc v2
`docs `

- Ajout de fichiers markdown dans un dossier `_part/doc/` de chaque composant, du core, et des modèles.

- Réorganisation des dossiers :

  - le dossier `src` ne contient maintenant que les dossiers `dsfr`, `i18n`, et `module`, le reste est descendu dans `dsfr`

  - les dossiers `page` et `pattern` sont placés dans un dossier `layout`

  - `input-tel` et `input-email` sont déplacés dans les pattern, et le contenu de `input-base` est remonté dans `input`

---

#### [#1160](https://github.com/GouvernementFR/dsfr/pull/1160) : ✨ ajout nouveaux pictogrammes
`feat (artworks)`

Ajout des pictogrammes :

- digital/ecosystem

- digital/seft-trading

- digital/innovation

- accessibility/accessibility

- leisure/art

---

#### [#1166](https://github.com/GouvernementFR/dsfr/pull/1166) : ✨ ajout de nouvelles stories
`feat (storybook)`

Ajout de stories sur : 

- Alerte

- Bouton radio 

- Case à cocher 

- Champ de saisie 

- En-tête 

- Lien 

- Menu latéral 

- Pagination :

- Paramètre d'affichage

- Pied de page

- Tuile 

---

#### [#1173](https://github.com/GouvernementFR/dsfr/pull/1173) : ✨ ajoute espacement sur la classe de titre
`feat (callout)`



---

#### [#1174](https://github.com/GouvernementFR/dsfr/pull/1174) : ✨ fermeture du tooltip avant la fermeture de la modale
`feat (modal, tooltip)`



---

#### [#1179](https://github.com/GouvernementFR/dsfr/pull/1179) : 👷 publication de test
`feat `



---



## v1.13

### [v1.13.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.2) - 15 mai 2025

#### [#1158](https://github.com/GouvernementFR/dsfr/pull/1158) : ✨ mise en forme doc analytics
`docs `

- correction d'un lien

- amélioration du rendu des mises en avant

---

#### [#1156](https://github.com/GouvernementFR/dsfr/pull/1156) : ⬆️ mise à jour des dépendances npm
`chore (dependencies)`

- github action de notification (#1132)

- Bumps vite from 5.4.15 to 5.4.19.

- Bumps [eazy-logger](https://github.com/shakyshane/easy-logger) from 4.0.1 to 4.1.0.

- Bumps [tar-fs](https://github.com/mafintosh/tar-fs) from 2.1.1 to 2.1.2.

---

#### [#1144](https://github.com/GouvernementFR/dsfr/pull/1144) : ✨ ajout proxy actionee act
`feat (analytics)`

- Ajout de la possibilité d'envoyer l'action d'un élément actionee en js via la méthode act(). Exemple :

`dsfr(element).buttonActionnee.act();`

`dsfr(element).buttonActionnee.act({objet de données supplémentaires});`

---

#### [#1154](https://github.com/GouvernementFR/dsfr/pull/1154) : 🐛 correction warning console header
`fix (modal)`

Lorsque le header est désactivé en desktop, le js de header retire l'aria-label de la modal car inutile. Le message d'avertissement dans la console indique alors que la modal ne contient pas d'attribut aria. Cette vérification ne doit être faite que si la modale est active. #1120

---

#### [#1143](https://github.com/GouvernementFR/dsfr/pull/1143) : 🐛 propriété type du bouton et retrait blocage scroll modal
`fix (storybook)`

- Correction de la propriété "type" sur le composant bouton

- Correction de la hauteur de l'exemple modal avec footer

- Retrait du blocage du scroll à l'ouverture d'une modale

---

#### [#1142](https://github.com/GouvernementFR/dsfr/pull/1142) : 📝 corrige liens en 404
`docs (analytics)`

- Correction url dans la doc analytics

---

#### [#1141](https://github.com/GouvernementFR/dsfr/pull/1141) : 📝 Coquille dans le README utility.scss => utility.css
`docs (readme)`



---

#### [#1140](https://github.com/GouvernementFR/dsfr/pull/1140) : 🐛 collapses ouverts au chargement
`fix (sidemenu, accordion)`

- Ajout de la classe `fr-collapse--expanded` en html, sur les collapse ouverts par défaut, pour éviter l'ouverture après le chargement du js.

- Ajout d'exemples d'accordéon et sidemenu avec collapses ouverts au chargement

---

#### [#1139](https://github.com/GouvernementFR/dsfr/pull/1139) : 🐛 enlarge link background hover
`fix (core)`

- Correction du background d'un élément d'action étendu au hover. Permet de surcharger le background du a ou button.

---

#### [#1129](https://github.com/GouvernementFR/dsfr/pull/1129) : 🐛 ajout bandeau alerte météo rouge dans le storybook
`fix (storybook)`

- Ajout du type de bandeau d’alerte "weather-red" dans storybook

---


### [v1.13.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.1) - 26 mars 2025

#### [#1119](https://github.com/GouvernementFR/dsfr/pull/1119) : lint & es5 export
`fix `



---

#### [#1116](https://github.com/GouvernementFR/dsfr/pull/1116) : ⬆️ mise à jour des dépendances npm
`chore (dependencies)`



---

#### [#1089](https://github.com/GouvernementFR/dsfr/pull/1089) : 🐛 Ajouts et corrections de stories
`fix (storybook)`

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



---

#### [#1091](https://github.com/GouvernementFR/dsfr/pull/1091) : ✨ ajout de la fermeture des menus au clavier
`feat (navigation)`

- La touche échap ferme le menu ouvert

- Lorsque le focus sort du menu au TAB, ferme le menu ouvert

---

#### [#1095](https://github.com/GouvernementFR/dsfr/pull/1095) : ✨ assess file error detection
`feat (core)`

- Ajouts de messages d'erreurs dans la console en fonction du type d'erreurs retourné par le fetch du fichier à télécharger

- Si le fichier est inaccessible (erreur 500), la fonction assess-file retourne au moins l'extension du fichier.

---

#### [#1058](https://github.com/GouvernementFR/dsfr/pull/1058) : 🐛 bug hover tags sélectionnables désactivés
`fix (tag)`

- Correction du hover des tags sélectionnables désactivés

---

#### [#1106](https://github.com/GouvernementFR/dsfr/pull/1106) : ✨ évolution du rendu à l'impression des composants
`feat `

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



---

#### [#1115](https://github.com/GouvernementFR/dsfr/pull/1115) : 🐛 corrige l'image du logo dsfr
`fix (publicode)`



---

#### [#1097](https://github.com/GouvernementFR/dsfr/pull/1097) : ✨ ajout de breakpoints pour les cellules fixées
`feat (table)`

les colonnes fixées peuvent maintenant être fixées à partir d'un breakpoint (sm, md, lg)

---

#### [#1102](https://github.com/GouvernementFR/dsfr/pull/1102) : ✨ ajoute le DSFR à la liste Awesome code.gouv.fr
`feat (publicode)`

- Ajout d'un fichier publicode.yml

---

#### [#1103](https://github.com/GouvernementFR/dsfr/pull/1103) : 🐛 bouton non requis + correctif
`fix (modal)`

- focusManager gère le retour du focus en cas d'absence d'un bouton primaire.

- correction du bug focus bloqué sur les menu du header

---

#### [#1110](https://github.com/GouvernementFR/dsfr/pull/1110) : ✨ ajouts d'icônes d'éditeur et de partage
`feat (icon)`

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

---

#### [#1073](https://github.com/GouvernementFR/dsfr/pull/1073) : 🐛 correctif template ejs
`fix (sidemenu, navigation, header)`

- Correctif des variables des templates sidemenu, navigation, header

---

#### [#1076](https://github.com/GouvernementFR/dsfr/pull/1076) : 🐛 focus date-picker
`fix (input)`

- corrige le placement du focus du date-picker sur les champs type date

---

#### [#1078](https://github.com/GouvernementFR/dsfr/pull/1078) : 🐛 Corrige la taille du focus sur le bouton
`fix (toggle)`

- Corrige la taille du focus pour que la hauteur du focus corresponde à la hauteur du bouton.

---

#### [#1088](https://github.com/GouvernementFR/dsfr/pull/1088) : ✨ retrait de storybook dans la release
`build (release)`

- Pour réduire le poids du package @gouvfr/dsfr, storybook n'est plus exporté

---

#### [#1090](https://github.com/GouvernementFR/dsfr/pull/1090) : 🐛 correction option par défaut & navigation clavier
`fix (select)`

- Retrait de l'attribut hidden sur la première option du select. Cela rend la navigation au clavier impossible sur firefox.

---

#### [#1092](https://github.com/GouvernementFR/dsfr/pull/1092) : 🐛 disclosure evenement dsfr.conceal
`fix (core)`



---

#### [#1096](https://github.com/GouvernementFR/dsfr/pull/1096) : ✨ ajout icone bluesky
`feat (icon, share, follow)`



---


### [v1.13.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.13.0) - 4 décembre 2024

#### [#1054](https://github.com/GouvernementFR/dsfr/pull/1054) : 🐛 corrections diverses 1.13.0
`fix `

- Corrections mineures : legacy, storybook, analytics, ...

---

#### [#1055](https://github.com/GouvernementFR/dsfr/pull/1055) : ✨ optimisation des créations d'instances
`feat (analytics)`

- La propriété `isActionEnabled` peut maintenant prendre la valeur reduce pour limiter la création d'instance de tracking aux éléments comportant l'attribut `data-fr-analytics-action`

---

#### [#1052](https://github.com/GouvernementFR/dsfr/pull/1052) : ⬆️ mise à jour des dépendances npm
`chore (dependencies)`

- bump cross-spawn from 7.0.3 to 7.0.6

- bump micromatch from 4.0.5 to 4.0.8

- bump semver from 7.3.5 to 7.6.2

- bump ws from 7.5.9 to 7.5.10 



---

#### [#1053](https://github.com/GouvernementFR/dsfr/pull/1053) : ✨ supporte le comportement `row-select` via data attribute
`feat (table)`

- la sélection de ligne du tableau est implémentée via l'attribut data-fr-row-select="true" sur la case à cocher, le fonctionnement via l'attribut name="row-select" est déprécié.

---

#### [#1013](https://github.com/GouvernementFR/dsfr/pull/1013) : ✨ page d'exemple utilitaires de couleurs
`feat (colors)`

- Ajoute au build la generation d'un json des colors

- Ajoute des classes utilitaire de bordure (couleur et épaisseur)

- Ajoute des pages d'exemple d'utilisation des classes utilitaires des couleurs de background, texte et bordure

- Ajoute une page d'exemple d'utilisation des classes utilitaires de largeur de bordures

---

#### [#1049](https://github.com/GouvernementFR/dsfr/pull/1049) : 🐛 retrait des sélecteur css ">"
`fix (tile, navigation)`

- Retrait des selecteurs d'enfants directs pour éviter les problèmes lors de l'ajout de balises intermediaires (cas de création de sous composants)

---

#### [#1051](https://github.com/GouvernementFR/dsfr/pull/1051) : 🐛 correction de l'ombre au scroll en RTL
`fix (tab)`

- Correction de l'ombre au scroll en direction RTL

---

#### [#1043](https://github.com/GouvernementFR/dsfr/pull/1043) : 🐛 correction syntaxique documentation des actions
`fix (analytics)`

- Correction d'éléments manquants ou mal écrits dans la documentation analytics

---

#### [#1041](https://github.com/GouvernementFR/dsfr/pull/1041) : 🐛 bordure disparait lors d'un rowspan en dernière position
`fix (table)`

- Correction de la bordure lorsqu'un rowspan est en dernière position

---

#### [#1047](https://github.com/GouvernementFR/dsfr/pull/1047) : ✨ radio riche sans pictogramme compact
`feat (radio)`

- modification du bouton radio pour une version compacte du radio riche sans pictogramme

---

#### [#945](https://github.com/GouvernementFR/dsfr/pull/945) : ✨ ajout de storybook & restructuration
`feat `

- ajout de storybook

    - ajout d'un package storybook dans `/dsfr-sb`

    - ajout de stories dans le dossier `template` de chaque composant

    - accès au storybook en local dans le dossier `/storybook` généré via la commande `yarn build-storybook`

- changement de structure 

    - tous les dossiers de `/src` sont déplacés dans un sous-dossier `dsfr`

    - les dossiers `module` et `i18n` passent dans `src`

- correction des valeurs en dur dans les templates

---

#### [#1038](https://github.com/GouvernementFR/dsfr/pull/1038) : 🐛 retrait des références à polyfill-io (faille sécurité)
`fix (legacy)`

- Toute référence à polyfill-io a été retirée pour éviter une redirection vers ses noms de domaines qui ont été détourné

---

#### [#1025](https://github.com/GouvernementFR/dsfr/pull/1025) : 🐛 ajout de la possibilité de changer la value en JS
`fix (range)`

- Le composant est mis à jour graphiquement au changement de value des inputs en js.

- Ajout d'un accesseur "value" dans l'api du range

---

#### [#1032](https://github.com/GouvernementFR/dsfr/pull/1032) : 🐛 ouverture initiale des accordéons dégroupés
`fix (accordion)`

- Correction lorsque tous les disclosures d'un groupe avec l'attribut group="false" sont ouverts au chargement

---

#### [#1018](https://github.com/GouvernementFR/dsfr/pull/1018) : 🐛 retrait aria-label sur modales désactivées
`fix (header)`

- En desktop, lorsque les modales de menu et recherche sont désactivés, les attributs aria-label et aria-labelledby sont  retirés

---

#### [#1012](https://github.com/GouvernementFR/dsfr/pull/1012) : ✨ ajouts d'évènements dans l'api
`feat (api)`

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



---

#### [#1010](https://github.com/GouvernementFR/dsfr/pull/1010) : 🐛 positionnement du tooltip dans header & modale
`fix (core, tooltip)`

- Correction du placement du tooltip dans un élément possédant un filter (modal, header)

- Gestion du placement en position absolute plutot que fixed

---

#### [#1000](https://github.com/GouvernementFR/dsfr/pull/1000) : 🐛 correction modal footer z-index
`fix (modal)`

- Passage du footer de la modale au niveau de z-index "overlap-above", permettant d'être au dessus du tooltip

---

#### [#976](https://github.com/GouvernementFR/dsfr/pull/976) : 🐛 duplication aria-describedby & labelledby
`fix (header)`

- Permet la duplication des attributs aria dans le menu mobile des accès rapides

---

#### [#1030](https://github.com/GouvernementFR/dsfr/pull/1030) : 🐛💥 correction de l'attribut aria-sort
`fix (table)`

- remplace l'attribut aria-sorting par aria-sort sur les bouton de tri avec comme valeurs descending et ascending

- met à jour la page d'exemple des tableaux

---

#### [#1023](https://github.com/GouvernementFR/dsfr/pull/1023) : 🐛 bug firefox menu passe en arrière plan
`fix (core)`

- Ajout d'un overflow auto sur le collapse pour éviter le passage des menus sous des éléments survolés ou le texte surligné

---

#### [#1019](https://github.com/GouvernementFR/dsfr/pull/1019) : 🐛 padding notice sans close btn
`fix (notice)`

- Retrait du padding à droite du bandeau lorsqu'il n'y a pas de bouton de fermeture

---

#### [#1011](https://github.com/GouvernementFR/dsfr/pull/1011) : 🐛 amélioration du rendu en mode contrasté
`fix (range)`

- Amélioration du design du curseur en mode couleurs forcées

---

#### [#1015](https://github.com/GouvernementFR/dsfr/pull/1015) : ✨ ajout du message d'avertissement 'warning'
`feat (form)`

- Ajout de la classe fr-message--warning

- Ajout d'exemples de messages dans la page d'exemple formulaire

---

#### [#1008](https://github.com/GouvernementFR/dsfr/pull/1008) : 🐛 correction focus croppé
`feat (header, sidemenu)`

- Correction du focus croppé sur la navigation latérale

- Correction du focus croppé sur le header en mobile

---

#### [#1007](https://github.com/GouvernementFR/dsfr/pull/1007) : 🐛 alignement icône link close déprécié
`fix (link)`

- Correction de l'alignement vertical de l'icône du lien de fermeture déprécié (maintenant btn-close)

---

#### [#1006](https://github.com/GouvernementFR/dsfr/pull/1006) : 🐛 correction groupe d'interrupteurs dépréciés
`fix (toggle)`

- Correction des espacements des groupes d'interrupteurs dépréciés

---

#### [#1005](https://github.com/GouvernementFR/dsfr/pull/1005) : 🐛 ajoute le type button par défaut
`fix (button)`

- ajoute le type `button` aux boutons par défaut

- met à jour les exemples des modèles de pages analytics et page de connexion

- met à jour les snippets d'exemple des composants : accordéon, alerte, fil d'ariane, bouton, bouton France Connect, carte, gestionnaire de consentement, paramètres d'affichage, champ de saisie, lettre d'information, navigation principale, menu latéral, onglets, tag, tuile et transcription

- remplace l'attribut `type` par `variant` dans le template du Bouton France Connect et ajoute le type `button` par défaut

---

#### [#1004](https://github.com/GouvernementFR/dsfr/pull/1004) : ✨ icone alerte météo rouge
`feat (notice)`

- Changement de l'icône par défaut du bandeau d'alerte météo rouge

---

#### [#1003](https://github.com/GouvernementFR/dsfr/pull/1003) : 🐛 correction css markup hx sur le titre du bandeau
`fix (notice)`

- Correction du style du titre du bandeau lors de l'utilisation d'un niveau d'entête hx à la place de la balise p

---

#### [#1002](https://github.com/GouvernementFR/dsfr/pull/1002) : 🐛 correction nom fichier utility
`fix (readme)`

- Correction du nom du fichier utility.min.css dans le readme

---

#### [#1001](https://github.com/GouvernementFR/dsfr/pull/1001) : ✨ retrait du lien sur les points de suspension
`feat (pagination)`

- Remplace le lien par un span sur les points de suspension de la pagination 

---

#### [#998](https://github.com/GouvernementFR/dsfr/pull/998) : 🐛 correction doc page.path
`fix (anayltics)`

- Correction de la valeur, si non renseignée, du paramètre page.path dans la documentation analytics

---

#### [#997](https://github.com/GouvernementFR/dsfr/pull/997) : ✨ browsersync dependency >=2.27
`fix (dependencies)`

- Modifie la version de la dépendance à BrowserSync dans le package.json, permettant l'utilisation d'une version plus récente.

- Retrait de browserSync des peerDependencies

---

#### [#996](https://github.com/GouvernementFR/dsfr/pull/996) : 🐛 opacité du texte du select désactivé
`fix (core)`

- Correction de l'opacité du texte des listes déroulantes (select) désactivées

---

#### [#995](https://github.com/GouvernementFR/dsfr/pull/995) : 🐛 lancement dsfr start dans les pages SPA
`fix (analytics)`

- correction des collectes d'actions des pages d'exemples react et vue, le dsfr en manuel n'était pas lancé

---

#### [#992](https://github.com/GouvernementFR/dsfr/pull/992) : 🐛 input sans type bug dans le focus trap de la modale
`fix (modal)`

* Correction d'une erreur js liée au focus trap lorsqu'un champ de saisie n'a pas d'attribut "type" dans une modale

---

#### [#993](https://github.com/GouvernementFR/dsfr/pull/993) : 🐛 Bug de récursivité infinie sur le getter node
`fix (core)`

- Correction du retour du getter instance.node qui engendrait une boucle infinie

---



## v1.12

### [v1.12.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.1) - 25 juin 2024

#### [#971](https://github.com/GouvernementFR/dsfr/pull/971) : 🐛 correction pictogrammes firefox et Chrome156
`fix (artwork)`

- changement structurel des svg d'artwork

  - corrige la régression apportée par la nouvelle version de chrome qui ne supporte plus la surchage de colorisation sur le svg si le path ciblé est déja coloré dans le svg

  - le path ciblé est déja coloré dans le svg

- corrige l'accentuation des pictogrammes sur firefox

  - mise en place d'un script permettant de transformer les anciens pictogrammes vers la nouvelle structure

  - `yarn pictogram-converter -p [chemin/picto]`

---

#### [#969](https://github.com/GouvernementFR/dsfr/pull/969) : 🐛 corrige regressions sur les tableaux déprécies
`fix (table)`

- déplace bordures des tableaux déprécies sur les thead et tbody

- retire les selecteurs css :has

---


### [v1.12.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.12.0) - 19 juin 2024

#### [#961](https://github.com/GouvernementFR/dsfr/pull/961) : ⬆️ met a jour les dépendances npm et correction lint
`chore (dependencies)`

- mise à jour dépendances npm

---

#### [#948](https://github.com/GouvernementFR/dsfr/pull/948) : 🐛 correctifs pages d'exemple et icone bandeau d'alerte
`fix (*)`

- correction icone bandeau d'alerte

- corrections de libellés dans les pages d'exemples

---

#### [#955](https://github.com/GouvernementFR/dsfr/pull/955) : 🐛 correctifs divers
`fix (IE)`

- corrige la numérotation du sommaire

- corrige les icones chevron du fil d'arianne

- retire le hover sur les bouton désactivés

- corrige l'alignement de la case a cocher du mot de passe

- correction des ombres sur les menus et le tooltip

- rend les liens d'évitement fonctionnels

- correction du style du curseur double désactivé

---

#### [#952](https://github.com/GouvernementFR/dsfr/pull/952) : 🐛 correctifs mode contrasté et reduce motion
`fix (preference)`

- corrections diverses sur le mode contrasté

---

#### [#949](https://github.com/GouvernementFR/dsfr/pull/949) : ✨ Mise à jour des exemples
`feat (table)`

- correction legacy

- mise à jour de l'icone twitter

---

#### [#951](https://github.com/GouvernementFR/dsfr/pull/951) : 🐛 met a jour la variante avec markup bouton
`fix (link)`

- correction de l'alignement du texte des fr-lien en button

---

#### [#954](https://github.com/GouvernementFR/dsfr/pull/954) : 🐛 ajoute les messages erreur et valide sur interrupteur simple
`fix (toggle)`

- retrait des marges avant et après le composant

- ajoute la bordure en état d'erreur/succès

---

#### [#956](https://github.com/GouvernementFR/dsfr/pull/956) : ✨ ajout icone weather/sparkling-2
`feat (icon)`

- ajout de l'icone sparkling-2, utilisée pour indiquer l'utilisation d'IA.

---

#### [#947](https://github.com/GouvernementFR/dsfr/pull/947) : ✨ ajout du tableau non scrollable
`feat (table)`

- ajout d'une version de tableau sans scroll, avec réduction automatique des cellules

---

#### [#929](https://github.com/GouvernementFR/dsfr/pull/929) : ✨ mode contrasté windows & animation réduite
`feat (preference)`

- Amélioration du rendu des composants en mode haut contraste windows (forced-colors)

- Retrait des animations en mode reduce-motion

---

#### [#943](https://github.com/GouvernementFR/dsfr/pull/943) : 🐛 enlarge button
`fix (link, card, tile)`

- ajout d'une classe utilitaire enlarge-button utilisée sur les cartes et les tuiles de téléchargement pour élargir la zone de clique à tout le composant quand l'element cliquable est un bouton

---

#### [#944](https://github.com/GouvernementFR/dsfr/pull/944) : 🐛 réduction de la zone de clic retour à l'accueil
`fix (footer, header)`

- sur le header mobile la partie à droite du brand n'est plus cliquable pour éviter les clics manqués sur le burger ou la recherche, et le lien du nom de service n'est plus étendu sur toute la largeur

- sur le footer mobile la zone de clic n'est plus étendu sur toute la largeur

---

#### [#946](https://github.com/GouvernementFR/dsfr/pull/946) : ✨ ajout d'icônes
`feat (icon)`

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

---

#### [#917](https://github.com/GouvernementFR/dsfr/pull/917) : ✨ ajout de bandeaux d'information importante
`feat (notice)`

- ajout des bandeaux d'alertes, des bandeaux vigilance météo, et de 2 niveaux génériques (warning et alert)

- mise en situation dans une page

- BC : changement de la structure html pour accueillir une description et un lien en plus du titre

---

#### [#911](https://github.com/GouvernementFR/dsfr/pull/911) : ✨ tableau v2
`feat (table)`

- evolution majeure du tableau

---

#### [#937](https://github.com/GouvernementFR/dsfr/pull/937) : ✨ système de régulation des actions
`feat (analytics)`

- ajout de la possibilité de bloquer une action particulière avec l'attribut et la valeur data-fr-analytics-action="false" quand l'envoi des actions est activé au global via la config isActionEnabled: true

---

#### [#938](https://github.com/GouvernementFR/dsfr/pull/938) : 🐛 fichier télécharger et ratio carte de téléchargement
`fix (card)`

- met à jour les images des exemples de carte "Image et ratio"

- ajoute un fichier pdf placeholder pour les cartes de téléchargement

---

#### [#842](https://github.com/GouvernementFR/dsfr/pull/842) : ✨ ajoute version avec button
`feat (card, tile, enlarge-link)`

- ajout de la possibilité d'utiliser un "button" plutôt qu'un "a" sur la carte et la tuile

---

#### [#905](https://github.com/GouvernementFR/dsfr/pull/905) : 🐛 title des liens obligatoires du footer
`fix (footer)`

- remplace l'intitulé par défaut "[A modifier]" de l'attribut title par l'intitulé officiel sur les liens obligatoires du footer.

- change l'ordre des liens, et gouvernement.fr devient info.gouv.fr

---

#### [#908](https://github.com/GouvernementFR/dsfr/pull/908) : ✨ config au premier build & precision readme
`feat (build)`

- lors de l'execution de la commande yarn build, crée les fichiers de configuration s'ils n'existent pas

- ajout de browser-sync en tant que peerDependencies dans le package.json

- ajout de précision sur le lancement du serveur des pages d'exemple dans le README

---

#### [#909](https://github.com/GouvernementFR/dsfr/pull/909) : ✨ ajoute la version dsfr dans les pages d'exemple
`feat (build)`

- affiche la version du DSFR en haut des pages d'exemple

---

#### [#912](https://github.com/GouvernementFR/dsfr/pull/912) : 🐛 ratio de l'image de citation
`fix (quote)`

- ajout de la propriété object-fit: cover sur l'image de citation pour conserver le ratio de l'image lorsqu'elle n'est pas carrée.

- dans la mesure du possible, privilégiez un ratio d'image carré pour un meilleur support navigateur

---

#### [#916](https://github.com/GouvernementFR/dsfr/pull/916) : 🐛 centrage des container-bp
`fix (core)`

- les container-sm/md/lg/xl ne sont pas centrés correctement

---

#### [#918](https://github.com/GouvernementFR/dsfr/pull/918) : ✨ ajout du picto digital/in-progress
`feat (pictogram)`

- ajout du pictogramme "in-progress" dans la catégorie "digital"

---

#### [#928](https://github.com/GouvernementFR/dsfr/pull/928) : 🐛 retour à la ligne statut activé/désactivé
`fix (toggle)`

- corrige le retour à la ligne sur le label "activé/désactivé"

---

#### [#931](https://github.com/GouvernementFR/dsfr/pull/931) : 🐛 bug js boucle infinie et step désactivé
`fix (range)`

- corrige la boucle infinie qui fait crash la page lorsque stepwidth = 0

- corrige le style du curseur avec étape désactivé

- ajout d'exemples de curseurs double désactivé et avec étape désactivé

- corrige la modification de valeur du deuxième input lorsque le min dépasse le max ou l'inverse sur le curseur double

---

#### [#930](https://github.com/GouvernementFR/dsfr/pull/930) : ✨ uniformise les intitulés des labels
`refactor (*)`

- passe les intitulés "label" en "libellé"

---

#### [#932](https://github.com/GouvernementFR/dsfr/pull/932) : 🐛 modifie la structure HTML du composant comportant une transcription
`fix (content)`

- passe la transcription apres la figure

- a11y ajoute texte alternatif sur infographie mentionnant transcription en dessous

- ajout un attribut title sur les videos iframe

---

#### [#933](https://github.com/GouvernementFR/dsfr/pull/933) : 🐛 alignement vertical des icônes de chevron
`fix (breadcrumb)`



---



## v1.11

### [v1.11.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.2) - 4 mars 2024

#### [#899](https://github.com/GouvernementFR/dsfr/pull/899) : 🐛 Erreur sur IE selecteur translate
`fix (analytics)`

- modifie le selecteur du translate pour utiliser 2 :not() à la suite au lieu d'un :not(1, 2)

---

#### [#895](https://github.com/GouvernementFR/dsfr/pull/895) : 🐛 documentation et correctif version standalone
`fix (analytics)`

- Apporte des éléments correctifs à l'issue #880

  - correctifs dans la version standalone :

    - configuration appliquée au logging (verbose, production)

    - retrait de dépendances non requises

  - ajout de documentation sur la version standalone

    - installation

    - fonctionnalités disponibles

  - Extraction de Modes du fichier de la class Options pour réduire les dépendances



---

#### [#894](https://github.com/GouvernementFR/dsfr/pull/894) : ⬆️ met a jour les dépendances Node
`chore (dependencies)`

- passage à postcss 8.4.32

---

#### [#893](https://github.com/GouvernementFR/dsfr/pull/893) : 🐛 correctif erreur itérable null
`fix (header)`

- corrige l'issue #890, la valeur null renvoyée par la fonction match est remplacée par un array vide pour permettre son itération

---

#### [#891](https://github.com/GouvernementFR/dsfr/pull/891) : 🐛 correctif dispose input
`fix (range)`

- corrige un bug js sur l'écouteur d'événement

---

#### [#888](https://github.com/GouvernementFR/dsfr/pull/888) : ✨ ajout d'infos sur la configuration dans la doc analytics
`feat (doc)`

- ajoute dans la doc de configuration des analytics, la possibilité de surcharger la configuration du mode production via le paramètre dans l'url : ?production=false

---

#### [#887](https://github.com/GouvernementFR/dsfr/pull/887) : 🐛 corrige le hover des tags cliquables
`fix (tag)`

- le hover des tags cliquables avait disparu

---

#### [#886](https://github.com/GouvernementFR/dsfr/pull/886) : ✨ ajout d'un retour à la ligne des mots trop long
`feat (core)`

- ajout de la propriété `overflow-wrap: world-break` sur body permettant le passage à la ligne des mots plus grands que leur conteneur.

---

#### [#885](https://github.com/GouvernementFR/dsfr/pull/885) : 🐛 correctif héritage listenClick
`fix (analytics)`

- corrige un bug js au niveau de l'héritage du listenClick. Renommage de la fonction listenClick en listenActionClick car la fonction existe déja sur la classe héritée "Instance"

---

#### [#881](https://github.com/GouvernementFR/dsfr/pull/881) : 🐛 correction overflow hidden cache le focus
`fix (header)`

- correction du focus caché par un overflow hidden, sur le lien du logo du header

---


### [v1.11.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.1) - 31 janvier 2024

#### [#877](https://github.com/GouvernementFR/dsfr/pull/877) : ⬆️ met a jour les dépendances Node
`chore (dependencies)`

- monté de version des dépendances à follow-redirects et semver

---

#### [#876](https://github.com/GouvernementFR/dsfr/pull/876) : 🐛 corrige les alignements des liens outils
`fix (header)`



---

#### [#860](https://github.com/GouvernementFR/dsfr/pull/860) : ✨ ajoute un attribut pour dégrouper
`feat (accordions-group)`

- ajout d'un attribut `data-fr-group="false"` pour dissocier le comportement d'ouverture/fermeture des accordéons à l'intérieur d'un groupe d'accordéons

- étend l'utilisation de cet attribut aux composants héritant du collapses-group : la navigation (uniquement en mobile) et le menu latéral

---

#### [#859](https://github.com/GouvernementFR/dsfr/pull/859) : 🐛 espacement des liens d'accès rapide en mobile
`fix (header)`

- corrige la taille des boutons d'accès rapide dans le menu mobile

---

#### [#863](https://github.com/GouvernementFR/dsfr/pull/863) : 🐛 fallback du fond en conic gradiant
`fix (tooltip)`

- ajout d'un fallback en linear-gradiant pour les navigateur qui ne supporte pas le conic-gradiant (ex: firefox < 83)

---

#### [#846](https://github.com/GouvernementFR/dsfr/pull/846) : 🐛 retrait du tap-highlight ios
`fix (core)`

- retrait du tap highlight des éléments input, button, a, label, select, textarea sur IOS dans le reset du core

---

#### [#866](https://github.com/GouvernementFR/dsfr/pull/866) : ✨ met a jour les mises en situation
`feat (content)`

- ajoute une transcription à l'exemple de “Média image en svg, porteur d’information”

- met à jour l'exemple de “Média image avec une transcription” avec une image porteuse de sens et renseigne la transcription correspondante

---

#### [#857](https://github.com/GouvernementFR/dsfr/pull/857) : 🐛 corrige les erreurs pally
`fix (pally)`



---

#### [#853](https://github.com/GouvernementFR/dsfr/pull/853) : ✨ ajoute un example de taille md avec description seule
`feat (alert)`



---

#### [#864](https://github.com/GouvernementFR/dsfr/pull/864) : 🐛 corrige le focus sur le champ de recherche
`fix (header)`



---

#### [#856](https://github.com/GouvernementFR/dsfr/pull/856) : ✨ retire l'attribut aria-haspopup du bouton burger
`feat (header)`



---

#### [#855](https://github.com/GouvernementFR/dsfr/pull/855) : ✨ ajoute la description de france connect
`feat (login)`



---

#### [#854](https://github.com/GouvernementFR/dsfr/pull/854) : ✨ supprime le package recover et le deplace dans login
`feat (recover)`



---

#### [#867](https://github.com/GouvernementFR/dsfr/pull/867) : 🐛 corrige le focus dans un groupe
`fix (accordion)`



---

#### [#868](https://github.com/GouvernementFR/dsfr/pull/868) : ✨ ajout de la version du site
`feat (analytics)`



---

#### [#870](https://github.com/GouvernementFR/dsfr/pull/870) : 🐛 corrige l'affichage du optgroup sur firefox windows
`fix (select)`



---

#### [#872](https://github.com/GouvernementFR/dsfr/pull/872) : 🐛 retrait de l'icone target blank
`fix (footer, header, connect)`



---

#### [#858](https://github.com/GouvernementFR/dsfr/pull/858) : 🐛 retrait d'un fichier inutile
`fix (follow)`



---

#### [#873](https://github.com/GouvernementFR/dsfr/pull/873) : 🐛 corrige la duplication des collapses dans le menu mobile
`fix (header)`



---

#### [#840](https://github.com/GouvernementFR/dsfr/pull/840) : 🐛 corrige bugs de fermeture du composant
`fix (navigation)`



---


### [v1.11.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.11.0) - 11 décembre 2023

#### [#841](https://github.com/GouvernementFR/dsfr/pull/841) : ✨ version optimisée en accessibilité
`feat (range)`

- redesign du composant en ajoutant une bordure à la track pour être plus visible

- changement de la structure html pour être accessible

- lint

---

#### [#837](https://github.com/GouvernementFR/dsfr/pull/837) : 🐛 erreur js classname
`fix (core)`

- régression sur la fonction getClassname du core

---

#### [#828](https://github.com/GouvernementFR/dsfr/pull/828) : 🐛 classname IE
`fix (core)`

- correction d'une erreur js sur IE lors de la récupération du classname dans l'instance

---

#### [#830](https://github.com/GouvernementFR/dsfr/pull/830) : 🐛 augmente le z-index du header
`fix (header)`

- ajout d'un niveau d'élévation `raised-over`

- le header passe en z-index `raised-over` pour passer par dessus les cartes avec ombre

---

#### [#831](https://github.com/GouvernementFR/dsfr/pull/831) : 🐛 met a jour les pages d'exemple
`fix (examples)`

- mise en forme d'exemples

---

#### [#832](https://github.com/GouvernementFR/dsfr/pull/832) : 🐛 placement checkbox & icon info
`fix (password)`

- met a jour l'icône de message d'information

- met a jour le placement de la checkbox

---

#### [#833](https://github.com/GouvernementFR/dsfr/pull/833) : 🐛 corrections diverses
`fix (*)`

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

---

#### [#827](https://github.com/GouvernementFR/dsfr/pull/827) : 🐛 fieldset error/valid
`fix (input)`

- correction de la couleur de la bordure des champs en fieldset-error/valid

---

#### [#826](https://github.com/GouvernementFR/dsfr/pull/826) : 🐛 lien page d'exemple
`fix (doc)`

- mise à jour du lien vers le site de documentation dans la page d'exemple icone de favori

---

#### [#825](https://github.com/GouvernementFR/dsfr/pull/825) : 🐛 bugs IE divers
`fix (legacy)`

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

---

#### [#823](https://github.com/GouvernementFR/dsfr/pull/823) : 🐛 dépendance à scheme
`fix (range)`

- ajout de la dépendance à scheme dans la configuration du package range

---

#### [#824](https://github.com/GouvernementFR/dsfr/pull/824) : ✨ icône twitter-x par défaut
`feat (follow, share)`

- mise en place de l'icône X pour Twitter, avec changement du title pour "X (anciennement Twitter)" sur les composants follow et share

---

#### [#818](https://github.com/GouvernementFR/dsfr/pull/818) : 🐛 espacement entre libellé et icone
`fix (link, card, tile)`

- retrait du saut de ligne entre la balise `a` et son libellé pour corriger l'écart entre le libellé du lien et l'icone

- ajout d'un exemple "lien externe" dans les exemples de lien

- correction de la taille de l'icone sur les tuiles sans lien étendu

- retrait de l'icone `arrow-right` sur les tuiles sans lien étendu, pour être iso avec les cartes

---

#### [#822](https://github.com/GouvernementFR/dsfr/pull/822) : 🐛 met a jour les liens des pages d'exemple
`fix (doc)`

- mise à jour des liens vers le site de documentation dans les pages d'exemple

---

#### [#805](https://github.com/GouvernementFR/dsfr/pull/805) : ✨ ajout du composant contrôle segmenté
`feat (segmented)`

- le composant "contrôle segmenté" incite l'utilisateur à choisir entre plusieurs options d'affichage disponibles (vues), mutuellement exclusives avec une valeur sélectionnée par défaut.

---

#### [#821](https://github.com/GouvernementFR/dsfr/pull/821) : 🐛 liens doc sur core & utility
`fix (build)`

- correction des liens de la documentation qui ne s'affichent plus dans les exemples 

---

#### [#819](https://github.com/GouvernementFR/dsfr/pull/819) : 🐛 largeur max du label & libellé
`fix (toggle)`

- augmentation de la largeur max du libellé du label, la marge de 10v passe à 8v

- changement du libellé du label et du texte additionnel

---

#### [#812](https://github.com/GouvernementFR/dsfr/pull/812) : 📈 gestion des actions
`feat (analytics)`

- ajout de la propriété `isActionEnabled` dans la configuration et sur l'objet `window.dsfr.analytics` permettant d'activer l'envoi des données d'actions si nécessaire.

- ajout de l'attribut `data-fr-action` permettant d'activer l'envoi d'action sur un élément particulier et de spécifier la partie title de l'actionName envoyé

- correctif sur les sélecteurs des card, title pour traquer des boutons

---

#### [#810](https://github.com/GouvernementFR/dsfr/pull/810) : 📝 typos et formattage de la doc de contribution
`doc (contributing)`

- ajout du formattage shell pour les snippets de code

- correction de fautes d'ortographe

---

#### [#816](https://github.com/GouvernementFR/dsfr/pull/816) : 🐛 correctif garbage collection hash
`fix (core)`

- correction de la fonction dispose sur Instance pour enlever les écouteurs sur la modification du hash de l'url

---

#### [#817](https://github.com/GouvernementFR/dsfr/pull/817) : ✨ ajout du composant curseur
`feat (range)`

- Les curseurs sont des entrées numériques qui permettent de voir graphiquement la sélection d'une plage entre une valeur minimale et une valeur maximale. Ils servent à montrer en temps réelle les options choisies et éclairer la prise de décision.

---

#### [#802](https://github.com/GouvernementFR/dsfr/pull/802) : 🐛 ajoute la feuille de style impression
`feat (css-print)`

- génere une feuille de style "dist/dsfr.print.css" à charger pour appliquer les règles d'impression du DSFR

- ajoute la classe utilitaire `.fr-no-print` pour retirer un élement de l'impression

---

#### [#815](https://github.com/GouvernementFR/dsfr/pull/815) : ⬆️ met a jour les dependances Node
`chore (dependencies)`

- mise à jour de :

   - modules babel

   - nanoid

   - postCss

   - word-wrap

---

#### [#791](https://github.com/GouvernementFR/dsfr/pull/791) : 🐛 ajustements header
`fix (header)`

- change la couleur du menu burger en $action-high-bleu-france en mobile

- passe l'écart entre bloc marque et logo opérateur à 32px et l'écart entre logo opérateur et nom du site à 32px

- réduit la taille de la barre de recherche à 96v (24rem) au lieu de 25rem

- bloque la taille du logo opérateur à 8rem max (144px)

- passe la taille du texte de la tagline en sm (14px) au lieu de md

- passe le bouton burger en tertiaire avec border

---

#### [#760](https://github.com/GouvernementFR/dsfr/pull/760) : 🐛 tokens de couleur
`fix (radio, radio-rich, toggle, checkbox)`

- mise à jour des tokens de couleurs sur checkbox, radio, radio-rich, toggle

---

#### [#774](https://github.com/GouvernementFR/dsfr/pull/774) : 📝 mise en forme et précision du README.md
`doc (readme)`

- correction d'espacements et de fautes de frappe

- précise l'interdiction d'utilisation "pour des sites web ou des applications", sans interdire d'utiliser le DSFR pour

créer, par exemple, un système de design entièrement différent (d'où l'intérêt de la licence libre).

---

#### [#813](https://github.com/GouvernementFR/dsfr/pull/813) : 🐛 taille de la fonte adapatable
`fix (connect)`

- Le bouton FranceConnect doit répondre aux critères d’accessibilité qui redéfinissent le letter-spacing et la taille de fonte.

  - Passage des valeurs de tailles et d'espacements en 'em' pour les rendre relatives à la taille de fonte du bouton

  - Retrait du '+' de 'FranceConnect+' dans l'intitulé de `fr-connect__brand`. Celui-ci est désormais placé en contenu du pseudo-élément after du bouton

---

#### [#804](https://github.com/GouvernementFR/dsfr/pull/804) : 📝 correction du lien de la documentation des icônes
`doc (readme)`

- corrige le lien vers la documentation des icones dans le readme

---

#### [#799](https://github.com/GouvernementFR/dsfr/pull/799) : 📝 correction URL du système de design
`doc (cgu)`

- ajout de "www" dans l'url du site de documentation des CGU

---

#### [#797](https://github.com/GouvernementFR/dsfr/pull/797) : 🐛 correction de l'icone user-setting-line
`fix (icon)`

- correction du contenu du svg de l'icone `user-setting-line` qui ne correspondait pas à la bonne icone

---

#### [#796](https://github.com/GouvernementFR/dsfr/pull/796) : 🐛 alignement du détail carte & erreur js sur safari <14
`fix (card, scheme)`

- Sur les anciennes version de safari macOS (inférieure à 14.0)

  - corrige l'alignement du détail de la carte dans une grille de carte

  - corrige une erreur de javascript liée au dark mode sur scheme.js

---

#### [#793](https://github.com/GouvernementFR/dsfr/pull/793) : 🐛 correction marge interne
`fix (sidemenu)`

- retire 1v de padding gauche et droite sur `fr-sidemenu__inner` en desktop

---

#### [#792](https://github.com/GouvernementFR/dsfr/pull/792) : 🐛 ajustements
`fix (footer)`

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



---

#### [#788](https://github.com/GouvernementFR/dsfr/pull/788) : 🐛 icon-size bug compilation
`fix (download)`

- correctif taille de l'icone du composant download (déprécié)

---

#### [#786](https://github.com/GouvernementFR/dsfr/pull/786) : ♻️ selecteur not combiné
`refactor (*)`

- remplacement des selecteurs :not(.selecteurA, .selecteurB) par :not(.selecteurA):not(.selecteurB) dans le js des composants : accordion, navigation, sidemenu, translate, transcription

---

#### [#777](https://github.com/GouvernementFR/dsfr/pull/777) : 🐛 met à jour les espacements
`fix (highlight)`

- passe le padding à 5v en mobile et 9v en desktop

---

#### [#785](https://github.com/GouvernementFR/dsfr/pull/785) : 🐛 correctifs de style mega-menu
`fix (navigation)`

- ajoute un margin-top: -1.25rem (-20px) sur le fr-mega-menu__leader

- passe le texte de description et le lien du fr-mega-menu__leader en taille sm

- supprime la classe fr-mb-4v de la colonne entourant le fr-mega-menu__leader

- le texte du bouton de navigation passe en $text-action-high-blue-france à l'ouverture

---

#### [#787](https://github.com/GouvernementFR/dsfr/pull/787) : 🐛 couleur de fond et image décorative
`fix (unavailable)`

- change la couleur de fond de page pour du $background-alt-blue-france

- remplace l'image décorative par un SVG

---

#### [#784](https://github.com/GouvernementFR/dsfr/pull/784) : 🐛 retire le `margin-left` négatif
`fix (close-btn)`

- retire la marge négative sur le modifier .fr-btn--close et corrige l'impact sur les composants 'alert', 'navigation', et 'notice'

---

#### [#783](https://github.com/GouvernementFR/dsfr/pull/783) : 🐛 token de couleur de la légende
`fix (form)`

- la légende du fieldset passe en $text-label-grey à la place de $text-title-grey

---

#### [#782](https://github.com/GouvernementFR/dsfr/pull/782) : 🐛 espacements des liens d'évitement
`fix (skiplink)`

- l'ecart entre les liens d'évitement passe à 16px (4v)

- en desktop la marge en haut et en bas du composant passe à 12px (3v)

---

#### [#781](https://github.com/GouvernementFR/dsfr/pull/781) : 🐛 corrige affichage
`fix (follow)`

- inverse l'ordre des boutons "Instagram" et "LinkedIn"

- supprime les margin left et right du groupe de boutons

- place le bouton d'action dans un groupe de bouton fr-btns-group--inline-md sur les exemples "Lettre d'info seule" et "Réseaux sociaux et Lettre d'info mise en avant" pour que le bouton prenne l’ensemble de la largeur en vue mobile.

---

#### [#780](https://github.com/GouvernementFR/dsfr/pull/780) : 🐛 token de couleur du tag selectionnable
`fix (tag)`

- utilisation du token $text-inverted-blue-france sur la couleur du texte des tag selectionnable et supprimable à la place de $text-inverted-grey

- remplacement du token de couleur de fond des tag selectionnable par $background-active-blue-france au lieu de $background-action-high-blue-france

---

#### [#779](https://github.com/GouvernementFR/dsfr/pull/779) : 🐛 alignement du titre du sommaire
`fix (summary)`

- ajout d'un padding-left de 8px pour aligner le titre avec le premier élément de la liste

---

#### [#778](https://github.com/GouvernementFR/dsfr/pull/778) : 🐛 token couleur texte cookies désactivés
`fix (share)`

- Le token de couleur du texte lorsque les cookies sont désactivés passe en $text-mention-grey

---

#### [#775](https://github.com/GouvernementFR/dsfr/pull/775) : 🐛 mise à jour lien vers la doc typographie
`fix (core)`

met à jour le lien vers la page "Typographie" du site de documentation.

---

#### [#773](https://github.com/GouvernementFR/dsfr/pull/773) : 🐛 bouton ajout et suppression en secondaire
`fix (name)`

- dans le pattern de nom prénom, les boutons d'ajout et de suppression de prénom passent en secondaire à la place de tertiaire

---

#### [#772](https://github.com/GouvernementFR/dsfr/pull/772) : 🐛 combo champ + button en erreur
`fix (input)`

- lorsque le champ newsletter de la lettre d'information est en erreur le champs doit être souligné en rouge et non en bleu

---

#### [#771](https://github.com/GouvernementFR/dsfr/pull/771) : 🐛 couleur label & espacements
`fix (toggle)`

- utilisation du token de couleur $text-label-grey sur le label de l'interrupteur

- ajout de 4px de marge entre la coche et le texte activer/desactiver

---

#### [#768](https://github.com/GouvernementFR/dsfr/pull/768) : 🐛 correction espacement des radios accepter
`fix (consent)`

- ajustement de la marge droite des radios "accepter"

---

#### [#767](https://github.com/GouvernementFR/dsfr/pull/767) : 🐛 token de couleur des titres de finalité
`fix (consent)`

- passe la couleur des titres de finalité en $text-title-grey

---

#### [#766](https://github.com/GouvernementFR/dsfr/pull/766) : 🐛 met a jour les espacements des icônes
`fix (form, input)`

- place l’icône à 16px du bord droit des champs de saisie

- ajuste le padding-right à 44px sur les champs de saisie avec icône

- corrige la largeur des class fr-fieldset__content pour la version dépréciée

---

#### [#762](https://github.com/GouvernementFR/dsfr/pull/762) : 🐛 met a jour le token de la coche
`fix (checkbox)`

- passe la couleur de la coche en $text-inverted-blue-france

---

#### [#759](https://github.com/GouvernementFR/dsfr/pull/759) : 🐛 correction espacements
`fix (login)`

- corrige l'espace en trop entre le lien "Mot de passe oublié ?" et la checkbox "Se souvenir de moi",

- ajoute une marge supplémentaire sous l’alerte d’erreur

---

#### [#754](https://github.com/GouvernementFR/dsfr/pull/754) : 🐛 correction lien & cookies obligatoires
`fix (consent)`

- coche les cookies obligatoires par defaut

- étend le lien voir plus de detail

---

#### [#750](https://github.com/GouvernementFR/dsfr/pull/750) : 🐛 couleur du texte de la checkbox "afficher"
`fix (password)`

- utilisation du token de couleur : text-label-grey

---

#### [#749](https://github.com/GouvernementFR/dsfr/pull/749) : 🐛 visible avec elastic scrolling
`fix (skiplink)`

- cache le skiplink lors du rebond du scroll sur ios

---

#### [#748](https://github.com/GouvernementFR/dsfr/pull/748) : ✨ description list dl dt dd
`feat (core)`

- ajout du style par défaut des listes de description dl dt dd



---

#### [#747](https://github.com/GouvernementFR/dsfr/pull/747) : 🐛 selecteur aria-current
`fix (*)`

* correction sur breadcrumb, navigation, pagination, sidemenu, et translate de l'attribut [aria-current] lorsqu'il est à "false"



---

#### [#746](https://github.com/GouvernementFR/dsfr/pull/746) : ♻️ background image à la place de box shadow
`refactor (highlight, callout)`

- refactorisation de la bordure en background-image à la place de box-shadow

---

#### [#745](https://github.com/GouvernementFR/dsfr/pull/745) : 🐛 token titre service
`fix (header)`

- le token de couleur du texte de service passe en text-title-grey à la place de text-default-grey

---

#### [#742](https://github.com/GouvernementFR/dsfr/pull/742) : 🐛 remplacement des box-shadow en background-image
`fix (alert)`

- les bordures sont dessinées en background image à la place de box shadow

---

#### [#737](https://github.com/GouvernementFR/dsfr/pull/737) : 🐛 rel noopener external & title target blank
`fix (link)`

- ajout d'attribut title et rel noopener external sur les liens en target blank

- modification des exemple de card, tile, link, footer, quote, notice

---

#### [#740](https://github.com/GouvernementFR/dsfr/pull/740) : 🐛 color token & cancel button
`fix (search, input, select)`

- corrige le token de couleur de l'intitulé et des icones dans les champs de saisie et du select.

- customisation de l'icone de suppression du champs de recherche : close-circle-fill

---

#### [#738](https://github.com/GouvernementFR/dsfr/pull/738) : 🐛 intitulé et motto en noir absolu
`fix (logo)`

- intitulé et moto en noir absolu

- ajout token absolute black

---

#### [#736](https://github.com/GouvernementFR/dsfr/pull/736) : 🐛 correctifs flèche et intitulé
`fix (select)`

- réduit la taille de l'icone et ajuste sa position

- corrige l'intitulé du placeholder

---

#### [#734](https://github.com/GouvernementFR/dsfr/pull/734) : ✨ ajout exemple `<optgroup>`
`feat (select)`

- ajout d'un example de select avec groupe d'options

---

#### [#727](https://github.com/GouvernementFR/dsfr/pull/727) : 🐛 mise à jour des exemples
`fix (header)`

- ajout exemple utilisateur connecté

- ajoute des exemples avec un seul raccourcis (sans liste)

- ajoute les modifier de bouton account briefcase et team

---

#### [#726](https://github.com/GouvernementFR/dsfr/pull/726) : 🐛 alignement boutons
`fix (register)`

- corrige l'alignement des boutons : 

  - en mobile, aligné l’un au dessus de l’autre, bouton primaire en premier

  - en desktop, les 2 alignés à droite, bouton primaire à droite

---

#### [#724](https://github.com/GouvernementFR/dsfr/pull/724) : 🐛 mise à jour de la structure
`fix (stepper)`

- inverse le stepper step et le title dans la pile html

---

#### [#723](https://github.com/GouvernementFR/dsfr/pull/723) : 🐛 textes
`fix (page-unexpected)`

- inverse le texte principal et le texte de description du model de page

---

#### [#721](https://github.com/GouvernementFR/dsfr/pull/721) : 🐛 ajoute un exemple avec un seul detail
`fix (quote)`

- il n'est plus obligatoire d'avoir une liste dans le figcaption de la citation

---

#### [#720](https://github.com/GouvernementFR/dsfr/pull/720) : 🐛 a11y retire la liste dans la zone d'actions
`fix (modal)`

- le groupe de bouton peut désormais être une `div` à la place d'un `ul``li` 

- retrait de la liste non ordonnée dans le footer de la modale

---

#### [#719](https://github.com/GouvernementFR/dsfr/pull/719) : ajoute un niveau de titre sur la banniere de consentement
`fix (consent)`

- le titre de la baniière devient un `<h4>` à la place d'un `<p>` dans la structure HTML du composant

---

#### [#718](https://github.com/GouvernementFR/dsfr/pull/718) : ✨ ajoute la librairie js pure-rand
`feat (prng)`

- implémente une lib js de PRNG dans le rendu EJS pour pouvoir mettre une seed sur chaque contenu.

---

#### [#735](https://github.com/GouvernementFR/dsfr/pull/735) : 🐛 coche les cookies obligatoires par defaut
`fix (consent)`

- Les cookies obligatoires doivent être systématiquement cochés

---



## v1.10

### [v1.10.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.2) - 19 octobre 2023

#### [#806](https://github.com/GouvernementFR/dsfr/pull/806) : 🐛 réduction d'envoi des données
`fix (analytics)`

- suppression du taux d'interaction global

- ajout de l'attribut data-fr-analytics-rating qui permet de mesurer le taux d'interaction sur un élément particulier

- suppression de l'impression des composants sans interactions

- limitation de l'envoi de donnée à la première interaction

- bouton associé à l'accordéon, l'onglet et la transcription rendu muet

- recensement des composants de la page dans une nouvelle donnée de page `page_components`

---


### [v1.10.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.1) - 4 septembre 2023

#### [#757](https://github.com/GouvernementFR/dsfr/pull/757) : 🐛 correctif couleur manquante
`fix (radio)`

- Erreur dans le build du CSS suite au manque d'une couleur

---

#### [#755](https://github.com/GouvernementFR/dsfr/pull/755) : 🐛 correction des liens de téléchargement sur firefox et des groupes de liens sur safari
`fix (link)`



---

#### [#752](https://github.com/GouvernementFR/dsfr/pull/752) : ✨ icone personalisée, et ajout twitter-x et threads
`feat (share, follow, utility)`

- ajoute la possibilité de mettre une icone de réseau social personalisée dans "follow"

- ajouts d'exemples d'icone personalisée dans "share" et "follow"

- ajouts des icones dans utility : 

  - twitter-x-fill

  - twitter-x-line

  - threads-fill

  - threads-line

---

#### [#753](https://github.com/GouvernementFR/dsfr/pull/753) : 🐛 correction de l'icone des tuiles avec lien externe
`fix (tile)`



---


### [v1.10.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.10.0) - 19 juillet 2023

#### [#712](https://github.com/GouvernementFR/dsfr/pull/712) : 🐛 correctif barre état iOS
`fix (form)`

- Sur iOS, la barre d'état d'erreur ou validation est discontinue

- corrige le problème de manière générique

---

#### [#716](https://github.com/GouvernementFR/dsfr/pull/716) : 🐛 retour de focus fermeture clavier
`fix (modal)`

- Mise en place du retour du focus à la fermeture en pressant la touche ESC

---

#### [#715](https://github.com/GouvernementFR/dsfr/pull/715) : 🐛 correctif focus des radios riches dépréciés
`fix (form)`

- corrige le décalage du focus sur les boutons radio en version dépréciée 

---

#### [#714](https://github.com/GouvernementFR/dsfr/pull/714) : 🐛 orthographe message de confirmation
`fix (follow)`



---

#### [#711](https://github.com/GouvernementFR/dsfr/pull/711) : ✨ boutons spéciaux input Safari
`feat (core, password)`

- Dans les champs de type password, sur safari Mac, il y a une icône apportant des outils supplémentaire qui se superpose à l’icône des signalant la hauteur de casse

- Déplacement des icônes natives pour qu'elles ne se superposent pas

- Retrait de l'icône capslock native, privilégiant la nôtre

---

#### [#713](https://github.com/GouvernementFR/dsfr/pull/713) : 🐛 stabilisation disclosure
`fix (core)`

- L'ouverture des paramètres d'affichage est par moment non réactive

- L'élément est fermé avant même d'être ouvert à cause de boucle de déclenchement

- Ajout de condition permettant de limiter les boucles

---

#### [#710](https://github.com/GouvernementFR/dsfr/pull/710) : 📝 retrait exemple texte
`doc (tooltip)`

- l'utilisation d'un tooltip sur un texte pose des problèmes de restitution

- cet usage est déconseillé

- retrait de l'exemple

---

#### [#704](https://github.com/GouvernementFR/dsfr/pull/704) : 🐛 correctif espacements version dépreciée
`fix (tile)`

- L'icône et le contenu se retrouvent superposés dans la version dépréciée, ce correctif rétablit l'espacement nécessaire

---

#### [#709](https://github.com/GouvernementFR/dsfr/pull/709) : 🐛 A11Y liens désactivés
`fix (tile, card)`

- Ajout des attributs `role="link"` et `aria-disabled=true` sur les version désactivées

---

#### [#708](https://github.com/GouvernementFR/dsfr/pull/708) : 🐛 correctif title et label bouton Agrandir
`fix (transcription, content)`

- Retrait du title sur le bouton agrandir

- Ajout label agrandir dans les exemples de content

---

#### [#707](https://github.com/GouvernementFR/dsfr/pull/707) : ✨ Ajout d'un meta tag iOS
`feat (*)`

- Sur iOS, les numéros de téléphone sont automatiquement transformés en lien

- Entraîne un mauvais rendu dans le bloc fonctionnel de numéro de téléphone

- Correction par l'ajout général du meta tag `<meta name="format-detection" content="telephone=no">`

---

#### [#705](https://github.com/GouvernementFR/dsfr/pull/705) : 🐛 correctif IE 11
`fix (card, tile)`

- correctif sur les tuiles et card sur la version legacy pour éviter les bugs de dépassement de texte et placement des icônes

---

#### [#703](https://github.com/GouvernementFR/dsfr/pull/703) : 🐛 retrait tap-highlight-color iOS
`fix (toggle)`

- Au clic sur le toggle sur iOS, l'effet de highlight est présent

- Retrait de cet effet avec la propriété [-webkit-tap-highlight-color](https://developer.mozilla.org/fr/docs/Web/CSS/-webkit-tap-highlight-color)

---

#### [#702](https://github.com/GouvernementFR/dsfr/pull/702) : 🐛 correctif téléchargement multiligne
`fix (link)`

- les liens de téléchargement étaient limités à une seul ligne avec une ellipse sur le text dépassant

- correctif prenant en compte le retour à la ligne

---

#### [#701](https://github.com/GouvernementFR/dsfr/pull/701) : 🐛 graisse du titre des liens
`fix (download)`

- Passage des liens dépréciés en graisse regular

---

#### [#700](https://github.com/GouvernementFR/dsfr/pull/700) : 🐛 mise à jour des liens du readme
`fix (*)`

- Mise à jour des liens vers [https://www.systeme-de-design.gouv.fr](https://www.systeme-de-design.gouv.fr) dans le readme

---

#### [#699](https://github.com/GouvernementFR/dsfr/pull/699) : 🐛 préviens décalage mobile
`fix (modal)`

- l'ajout d'un padding à l'ouverture permet de se substituer au décalage créé potentiellement par la disparition de la scrollbar en desktop

- En mobile, la modale occupe 100% de la largeur, ce padding créé un espacement incorrect

- ajout d'une media query sur le breakpoint MD pour corriger le problème

---

#### [#697](https://github.com/GouvernementFR/dsfr/pull/697) : 🐛 correctif régression scroll horizontal
`fix (header)`

- La navigation du header créée un scroll horizontal dans la page

- l'ajout d'un max-width prévient le problème

---

#### [#694](https://github.com/GouvernementFR/dsfr/pull/694) : 💥🐛 correctif accessibilité des messages
`fix (password)`

- ajout sur les messages de validation et d'erreur de la composition du mot de passe d'un statut en after uniquement pour les lecteurs d'écrans

---

#### [#698](https://github.com/GouvernementFR/dsfr/pull/698) : 🐛 correction de la couleur des liens du sidemenu
`fix (sidemenu)`

- Effet de bord du passage du bouton mobile en bleu, l'ensemble des boutons du sidemenu est passé en bleu.

- Ce correctif amène la spécificité nécessaire pour avoir les boutons et lien en `text default grey`

---

#### [#696](https://github.com/GouvernementFR/dsfr/pull/696) : 🐛 correctif sur KeyAction
`fix (core)`

- Corrige la régression sur l'écoute des interactions avec le clavier dû à l'évolution de la structure de la constante KeyCodes, non répercutée dans KeyAction

---

#### [#693](https://github.com/GouvernementFR/dsfr/pull/693) : ✨ ajout des utilitaires de couleur flat
`feat (colors)`

- Ajout des classes utilitaires pour le token background flat avec les variations de couleur d'accent

---

#### [#691](https://github.com/GouvernementFR/dsfr/pull/691) : 🐛 interaction globale et focus iOS
`fix (tooltip, modal)`

- Correctif à la pression de la touche Escape sur la modale : si l'élément actif (focus) est un élément de formulaire ou un média, la modale n'est pas refermée pas pour permettre l'interaction native de l'élément actif

- Correctif iOS de la prise de focus au clic

- Fermeture des tooltips dés au clic sur n'importe quel endroit

- Fermeture des tooltip à la pression sur la touche escape, où que soit le focus

---

#### [#686](https://github.com/GouvernementFR/dsfr/pull/686) : 🐛 a11y tooltip hover
`fix (tooltip)`

- autorise le survol sur l'information contextuelle

- ajoute un `tabindex="0"` sur l'example dans un texte

- arrondi la valeur de placements de la flèche verticale à 2 décimales

- retire le `aria-hidden="true"` et ajoute `display="none"`

---

#### [#684](https://github.com/GouvernementFR/dsfr/pull/684) : 🐛 a11y retour audit
`fix (transcription)`

- place le bouton d’agrandissement avant la modale et inverse les élements via css

- ajoute `aria-label=”Agrandir la transcription”` sur le bouton d’agrandissement

- remplace la balise dialog par une balise div

- système d'activation / désactivation de la modale avec ajout / retrait dynamique de `role="dialog"` à l'ouverture / fermeture de la modale

- système de vérification et de correction pour l'**accessible name** de la modale, avec warning explicatifs

---

#### [#685](https://github.com/GouvernementFR/dsfr/pull/685) : ✨ ajouts de variations de tuiles
`feat (tile)`

Ajouts des mêmes variations que la carte : 

- `.fr-tile--no-border` sans le bordure encadrant la tuile (mais la barre épaisse basse reste)

- `.fr-tile--shadow` avec élévation

- `.fr-tile--grey` en gris contrast

- `.fr-tile--no-background` couleur de fond transparente

---

#### [#687](https://github.com/GouvernementFR/dsfr/pull/687) : 🐛 corrige erreur de syntaxe ejs + lint
`fix (card, tile)`



---

#### [#683](https://github.com/GouvernementFR/dsfr/pull/683) : 🐛 correctif lien externe et désactivé
`fix (card, tile)`

- sur les exemples avec lien externe, ajout de title="[Intitulé] - nouvelle fenêtre"

- sur les exemples avec liens désactivés, ajout de role="link" et aria-disabled="true"

---

#### [#682](https://github.com/GouvernementFR/dsfr/pull/682) : 🐛 correctif token title
`fix (card, tile)`

- le titre des cartes et tuiles doivent utiliser le token de couleur text-title-grey

---

#### [#678](https://github.com/GouvernementFR/dsfr/pull/678) : ✨ homogénéisation des espacements et indentation
`feat (navigation, header, sidemenu)`

- Uniformisation du menu latéral, navigation, et accordéon

  - ajout d'un fond open-blue-france et du texte en blue-france sur les boutons d'ouverture en état ouvert

  - ajout de marge pour indenter les sous menus

  - ajustement des espacements

- Ajustement de la navigation du header en mobile

- Ajustement de la taille max de la navigation dans le header en desktop

---

#### [#679](https://github.com/GouvernementFR/dsfr/pull/679) : 🐛 ajustement champs particuliers
`fix (input)`

- Ajuste la largeur des champs de code postal, année et nombre à des multiples de 8v

---

#### [#676](https://github.com/GouvernementFR/dsfr/pull/676) : 🐛 correctif taille des boutons radio
`fix (civility)`

- Corrige la taille des boutons radio du titre d'appel en sm au lieu de md

---

#### [#675](https://github.com/GouvernementFR/dsfr/pull/675) : 🐛 ajoute d'exemple
`fix (follow)`

- Ajout de l'exemple de succès à l'abonnement à la lettre d'information 

---

#### [#681](https://github.com/GouvernementFR/dsfr/pull/681) : 🐛 correctif page.date
`fix (analytics)`

- la collecte de donnée page.date génére une erreur -> correctif

- mise en conformité avec le standard de date calendaire ISO 8601 [YYYY-MM-DD] 

---

#### [#680](https://github.com/GouvernementFR/dsfr/pull/680) : 🐛 déplacement bouton modale
`fix (transcription)`

- Pour déterminer le bouton primaire qui sert à l’ouverture, un disclosure filtre parmi les boutons qui lui sont reliés et retire ceux qui se trouve à l’intérieur du contenu du disclosure (ce sont les boutons de fermeture)

- Actuellement, la transcription a le bouton d'ouverture de modale à l'intérieur de son contenu, ce qui bloque le fonctionnement, le bouton n'étant pas reconnu comme primaire.

- Le correctif déplace le bouton après la dialog de la modal et restitue le fonctionnement de la transcription

---

#### [#674](https://github.com/GouvernementFR/dsfr/pull/674) : 🐛 met a jour les libelles des indications
`fix (form)`

- retrait de la capitalisation des mentions d'indication

---

#### [#671](https://github.com/GouvernementFR/dsfr/pull/671) : 🐛 ajustement exemples
`fix (date)`

- mise en place de date cohérentes avec les erreurs affichées dans les exemples

---

#### [#670](https://github.com/GouvernementFR/dsfr/pull/670) : 🐛 correctif alignement icône des messages
`fix (form)`

- l'icône à gauche des messages d'erreur/succès sur plusieurs lignes doit être accrochée en haut et non pas centrée

---

#### [#669](https://github.com/GouvernementFR/dsfr/pull/669) : 🐛 retrait du bouton natif sur edge
`fix (password)`

- Sur edge une icône oeil apparaît au focus d'un champ de type "password"

- Retrait de l'icone native

---

#### [#664](https://github.com/GouvernementFR/dsfr/pull/664) : 🐛 a11y - gestion du focus
`fix (name)`

Ajoute dans la page d’exemple le déplacement du focus : 

- au click sur la checkbox de désactivation pour activer, le premier champ ou bouton prend le focus

- au click sur l’ajout d’un prénom, le champs ajouté prend le focus

- au click sur la suppression, le champ ou bouton suivant prend le focus

---

#### [#668](https://github.com/GouvernementFR/dsfr/pull/668) : 🐛 retrait de CSS obsolète
`fix (footer)`

- retrait de CSS résiduel de précédentes versions dans le footer-bottom__list

---

#### [#667](https://github.com/GouvernementFR/dsfr/pull/667) : 🐛 correctif états de la case à cocher
`fix (password)`

- force l'état de la checkbox à l'état par défaut, pour éviter qu'elle ne passe en erreur/succès si elle hérite de cet état sur le composant.

---

#### [#666](https://github.com/GouvernementFR/dsfr/pull/666) : 🐛 mise a jour exemple
`fix (tooltip)`

- Dans l'exemple "Information contextuelle dans un tableau", remplacement de l'information contextuelle par une infobulle (interaction au clic plutôt qu'au survol)

---

#### [#665](https://github.com/GouvernementFR/dsfr/pull/665) : 🐛 fix groupe attributes & multiple hint text
`fix (input)`

- Correction attribut en trop sur les input-group

- multiple texte additionnel sur le modèle de champs d'adresse électronique

- Correction des textes additionnels

---

#### [#663](https://github.com/GouvernementFR/dsfr/pull/663) : 🐛 suppression exemple des liens dans la zone d'action
`fix (modal)`

- Ce cas n'est pas recommandé, la zone d'action étant plutôt prévue pour des boutons

---

#### [#662](https://github.com/GouvernementFR/dsfr/pull/662) : 🐛 correctif espacement et couleur
`fix (consent)`

- Corrige description d'une finalité de 3v à 2v en margin-bottom

- Homogénéité avec accordion, nav et sidemenu sur le bouton de la modale de consentement “voir plus de détails” :

   - enlever le soulignement

   - mettre en bleu le lien “voir plus de détail”

---

#### [#657](https://github.com/GouvernementFR/dsfr/pull/657) : 🐛 ajout version sans liens, target blank, et mise à jour des exemples
`fix (card, tile)`

- Ajout de version carte et tuile sans lien (en noir)

- Ajout de l'icone target blank sur les cartes avec lien non élargi en target="_blank"

- Ajout d'exemples de carte et tuile de téléchargement avec remplissage automatique des détails (en Octet ou en Bytes)

- Ajout d'exemple de carte et tuile de téléchargement avec fichier en langue étrangère

- Séparation des exemples de tuile de téléchargement

- Changement des pictogrammes des tuiles de téléchargement

- Ajustement de la grille dans les exemples de tuiles 

---

#### [#661](https://github.com/GouvernementFR/dsfr/pull/661) : 🐛 correctif régression href des exemples
`fix (pagination)`

- Corrige la régression qui a supprimé les liens des éléments de pagination

---

#### [#660](https://github.com/GouvernementFR/dsfr/pull/660) : 🐛 suppression variante et correctif style bouton mobile
`fix (sidemenu)`

- Suppression de la variante avec bordure

- Corrige le style du bouton mobile en action-high-blue-france (cohérence navigation/accordion)

---

#### [#659](https://github.com/GouvernementFR/dsfr/pull/659) : 🐛 retrait des pluriels
`fix (company)`

- Correction du langage dans la demande d'un représentant moral, suppression des pluriels optionnels

---

#### [#658](https://github.com/GouvernementFR/dsfr/pull/658) : 🐛 corrige graisse lien de téléchargement
`fix (link)`

- retire le font-weight bold sur le lien de téléchargement

---

#### [#648](https://github.com/GouvernementFR/dsfr/pull/648) : 🐛 bug icône
`fix (password)`

- conditionne l'ajout de la classe utile `fr-icon` à l'utilisation d'une string en paramètre `icon`

---

#### [#656](https://github.com/GouvernementFR/dsfr/pull/656) : 🐛 accessibilité lien externe
`feat (company)`

- corrige l'accessibilité du lien en `target="_blank"` par l'ajout d'un attribut `title`  :  "Annuaire des entreprises – nouvelle fenêtre"

---

#### [#655](https://github.com/GouvernementFR/dsfr/pull/655) : 🐛 corrige groupe de bouton vide
`fix (unexpected)`

- ajoute une condition sur l'ajout du wrapper `.fr-btns-group` dans la template `ejs`

---

#### [#654](https://github.com/GouvernementFR/dsfr/pull/654) : 🐛 accessibilité aria-live
`fix (*)`

- remplace la valeur aria-live `assertive` par `polite`

---

#### [#652](https://github.com/GouvernementFR/dsfr/pull/652) : 🐛 accessibilité champs obligatoires
`fix (account)`

-  La mention de "champs obligatoires" doit être mise dans un élément `<p>` sur les pages de connexion et création de compte

---

#### [#649](https://github.com/GouvernementFR/dsfr/pull/649) : 🐛 dénomination des blocs fonctionnels
`fix (pattern)`

- Mise à jour et harmonisation de la dénomination des blocs fonctionnels

---

#### [#650](https://github.com/GouvernementFR/dsfr/pull/650) : 🐛 correctif padding négatif
`fix (core)`

- ajoute une condition pour éviter le padding négatif actuellement présent dans les classes utiles

---

#### [#644](https://github.com/GouvernementFR/dsfr/pull/644) : ⬆️ montée de version NodeJS 18
`chore (*)`

- Monte la version minimale de NodeJS en 18.16.1

---

#### [#646](https://github.com/GouvernementFR/dsfr/pull/646) : 🐛 correctif bug proxy Toggle
`fix (core)`

- Dans la class Toggle, le proxy appelle la fonction toggle qui a été remplacée par la fonction générique handleClick : 

- Ce correctif restaure la fonction toggle et implémente son appel dans handleClick

---

#### [#643](https://github.com/GouvernementFR/dsfr/pull/643) : 📝 correction doc analytics & readme
`docs (analytics)`

- mise à jour du readme

- corrections diverses documentation analytics

---

#### [#647](https://github.com/GouvernementFR/dsfr/pull/647) : 🐛 correctif hiérarchie
`fix (analytics)`

- l'analyse de hiérarchie ignorait les headings présents dans un composant. 

- ce correctif permet de les inclure dans l'analyse.

---

#### [#642](https://github.com/GouvernementFR/dsfr/pull/642) : 🐛 correctif inclusion des html
`fix (changelog)`

- inclusion des caractères spéciaux html pour que les snippets soient affichés correctement

---

#### [#638](https://github.com/GouvernementFR/dsfr/pull/638) : ⬆️ met a jour les dépendances Node
`chore (dependencies)`

- Mise à jour de sécurité

---

#### [#639](https://github.com/GouvernementFR/dsfr/pull/639) : 🐛 apparence du champ de recherche iOS
`fix (core)`

- En utilisant des librairies tierces (telles que normalize.css), le champ de recherche reprend son aspect natif arrondi en mobile IOS.

- Spécificité renforcée sur le sélecteur afin de conserver le appearance: none

---

#### [#637](https://github.com/GouvernementFR/dsfr/pull/637) : 🐛 duplication des id généralisée pour les quick access
`fix (header)`

- L'ensemble des id présents dans les accès rapides du header doivent être suffixés par -mobile à la duplication

---

#### [#612](https://github.com/GouvernementFR/dsfr/pull/612) : 🐛 correctifs divers et ajouts de propriétés de page
`fix (analytics)`

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

---

#### [#632](https://github.com/GouvernementFR/dsfr/pull/632) : 🐛 hauteur du champ trop grande de 1px sur ios
`fix (search)`

Sur ios le champ dépasse de 1px par rapport au bouton.



-> Correction du max-height

---

#### [#635](https://github.com/GouvernementFR/dsfr/pull/635) : ✨ ajout de la bordure en état erreur / succés / info
`feat (select, input)`

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

---

#### [#628](https://github.com/GouvernementFR/dsfr/pull/628) : 🐛 correction onglets imbriqués en legacy
`fix (tab)`

- correction des marges sur les tabs imbriqués sur IE

- correction disclosure et disclosureGroup IE

- correction syntax error selecteur Collapse

---

#### [#631](https://github.com/GouvernementFR/dsfr/pull/631) : 🐛 retire les attributs file des <link>
`fix (example)`

- l'attribut file n'est pas un attribut possible pour les éléments <link>

---

#### [#630](https://github.com/GouvernementFR/dsfr/pull/630) : 🐛 retrait du z-index
`fix (link, button, tag, badge)`

- retrait du z-index: 1 qui pose problème dans une modale avec footer.

---

#### [#486](https://github.com/GouvernementFR/dsfr/pull/486) : 🎉 ajout de la fonctionnalité Tooltip
`feat (tooltip)`

Le composant `Infobulle` (ou `bulle d’aide`, `aide contextuelle`) permet d’afficher du contenu dans le contexte de navigation (non modal), à propos et lors de l’interaction avec un élément précis de l’interface. Il est caché par défaut, et s’affiche au survol ou au clic de l’élément associé, par-dessus le reste de la page.

---

#### [#629](https://github.com/GouvernementFR/dsfr/pull/629) : 🐛 correction copie url dans presse papier
`fix (share)`

- Gestion de la Promise retournée par `navigator.clipboard.writeText()`

---

#### [#624](https://github.com/GouvernementFR/dsfr/pull/624) : ✨ met a jour les message d'aide des champs de formulaire
`feat (address)`

- ajout d'indication et de description du format attendu

---

#### [#618](https://github.com/GouvernementFR/dsfr/pull/618) : 🐛 met a jour la hiérarchie html des modèles de page
`fix (account)`

- Mise en place d'une hiérarchie sans saut de niveau de titre, plus cohérente

- Correctif typo sur la classe `fr-grid-row--gutters`

---

#### [#564](https://github.com/GouvernementFR/dsfr/pull/564) : 🐛 Ajustement sur l'état défaut et actif
`fix (accordion, transcription, translate, sidemenu)`

Harmonisation avec la navigation sur Accordion, Sidemenu, Translate et Transcription :

- Passage icône et intitulé en action-high-blue-france

- Ajout background-open-blue-france sur le bouton lorsque l'élément est ouvert

- Icône “arrow-down-s-ligne” (la même que sur navigation)

- Accordion, Translate : Retrait changement de graisse (normal -> bold) à l'ouverture et graisse constante en medium

---

#### [#621](https://github.com/GouvernementFR/dsfr/pull/621) : 🐛 correctif tab legacy & margin top des headings
`fix (tab, core)`

- Corrige la taille de l'icône

- Corrige l'alignement du contenu du tab_panel

- Ajustement du padding de la tab__list

- Retire les margin-top des headings (h1 -> h6)

---

#### [#613](https://github.com/GouvernementFR/dsfr/pull/613) : 📝 ajoute des exemples liens bruts et resets
`doc (core)`

Par défaut, le dsfr stylise les liens natifs, ce qui peut poser problème dans l'utilisation de librairie tierce.

2 classes utilitaires sont mise à disposition pour contrecarrer le style fort du lien : 

- `.fr-raw-link` retire toute stylisation sur les liens natifs

- `.fr-reset-link` remet le soulignement natif du navigateur (`text-decoration: underline;`)

Des pages d'exemples en illustrant l'utilisation ont été ajoutées dans les pages d'exemples des fondamentaux.

---

#### [#540](https://github.com/GouvernementFR/dsfr/pull/540) : 💥✨ radio rich sans images & pictogram à la place d'img
`feat (radio)`

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





---

#### [#623](https://github.com/GouvernementFR/dsfr/pull/623) : 📝 corrige les liens vers les pages de documentation des fondamentaux
`doc (core)`

- Mise à jour des liens vers les fondamentaux sur le site de documentation

---

#### [#622](https://github.com/GouvernementFR/dsfr/pull/622) : ⬆️ met a jour les dépendances Node
`chore (dependencies)`

- Mise à jour de sécurité

---

#### [#620](https://github.com/GouvernementFR/dsfr/pull/620) : ✨ image des cartes de téléchargement format a4
`feat (card)`

- Ajout d'une image de placeholder au format a4 (21x29.7)

---

#### [#615](https://github.com/GouvernementFR/dsfr/pull/615) : 🐛 corrige liens pour retro-compat sur firefox
`fix (core)`

- La fonction css max(), mise en place pour corriger le bug d'affichage d'un soulignement d'une épaisseur inférieure à 1px, est supportée à partir de la version 78 de firefox, ce qui est insuffisant.

- Le précédent bug est maintenant corrigé avec un léger épaississement du trait sur firefox (0.25px)

---

#### [#609](https://github.com/GouvernementFR/dsfr/pull/609) : 🐛 focus des nav-items mobile & ajustements
`fix (header, navigation)`

- L'outline de focus est maintenant entièrement visible sur les liens des sous menu en mobile

- Ajustement de l'alignement du bouton fermé en desktop

- Retrait du mega-menu__leader vide dans les examples

---

#### [#549](https://github.com/GouvernementFR/dsfr/pull/549) : ✨ évolution taille et écart des boutons
`feat (pagination)`

Harmonisation de l'espacement entre les boutons de pagination :

- L'espacement passe à 16px entre tous les boutons

- Les boutons passent en taille SM

---

#### [#519](https://github.com/GouvernementFR/dsfr/pull/519) : 🐛 décalage scrollbar à l'ouverture/fermeture modale & fix scroll behavior
`fix (core, modal)`

Lorsque la page est scrollable, un décalage se produit à l'ouverture d'une modal (la page étant figé elle n'est plus scrollable).



Une marge est donc appliquée à l'ouverture de la modale pour simuler la barre de scroll et ainsi éviter le mouvement du contenu en arrière plan.

---

#### [#502](https://github.com/GouvernementFR/dsfr/pull/502) : ♻️ passage input en bleu et refactorisation
`refactor (radio, checkbox, toggle)`

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



---

#### [#532](https://github.com/GouvernementFR/dsfr/pull/532) : ✨ ouverture des disclosures à partir des ancres, état disabled désactive disclosure
`feat (core)`

- Correctif de l'état disabled sur les boutons associés à une modale, un onglet ou un accordéon. La fonctionnalité d'ouverture est désactivée si les boutons primaires sont désactivés.

- Ajout de la fonctionnalité d'ouverture d'une modale, d'un onglet ou d'un accordéon si la partie ancre de l'url correspond à l'id de l'élément -> les liens d'évitements peuvent ouvrir le menu et la recherche en mobile.



---

#### [#531](https://github.com/GouvernementFR/dsfr/pull/531) : 🐛 écoute des événements de clavier déplacé sur la liste d'onglets
`fix (tab)`

L'écoute des événements de clavier se faisant sur le composant, il est impossible d'interagir avec des éléments de formulaire dans le contenu de l'onglet -> l'écoute est déplacée au niveau de la liste des onglets, ce qui en exclut le contenu

---

#### [#493](https://github.com/GouvernementFR/dsfr/pull/493) : ✨ ajout bouton de suppression de prénom
`feat (name)`

Dans le modèle de de bloc nom/prénom, un bouton permet d'ajouter des champs de saisie pour les prénoms secondaires -> ajout d'un bouton permettant de supprimer ces champs ajoutés

---

#### [#602](https://github.com/GouvernementFR/dsfr/pull/602) : ✨ Ajout icône flèche, état désactivé, icone lien externe, tuile de téléchargement
`feat (tile)`

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

---

#### [#534](https://github.com/GouvernementFR/dsfr/pull/534) : 🎉 évolution des tuiles
`feat (tile)`

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



---

#### [#487](https://github.com/GouvernementFR/dsfr/pull/487) : 💥🚚 séparation du download en carte et lien
`refactor (download)`

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





---



## v1.9

### [v1.9.4](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.4) - 23 octobre 2023


### [v1.9.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.3) - 17 mai 2023

#### [#600](https://github.com/GouvernementFR/dsfr/pull/600) : 🐛 ajoute une page exemple alternative
`fix (breadcrumb)`

- étiquette d'élément span rendue possible sur l'élément courant du fil d'ariane

- ajout d'une page d'exemple avec boutons

---

#### [#599](https://github.com/GouvernementFR/dsfr/pull/599) : 📝 doc analytics en markdown
`doc (analytics)`

Transformation du pdf de la doc analytics en fichiers markdown

---

#### [#596](https://github.com/GouvernementFR/dsfr/pull/596) : 🐛 correctifs divers
`fix (analytics)`

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

---

#### [#594](https://github.com/GouvernementFR/dsfr/pull/594) : 🐛 La valeur no-wrap n’existe pas dans la spécification CSS
`fix (core)`

Il y a un `-` en trop.



Voir https://www.w3.org/TR/css-flexbox-1/#flex-wrap-property



partial-fix de #593 

---

#### [#597](https://github.com/GouvernementFR/dsfr/pull/597) : 🐛 retrait propriété css :where
`fix (button, theme)`

La propriété CSS :where est encore trop récente (chrome 88).



-> retrait de cette propriété

---

#### [#572](https://github.com/GouvernementFR/dsfr/pull/572) : 🐛 correction ombre modal footer
`fix (modal)`

L'ombre du footer de la modal scrollable est mal placée et trop forte.



- Remplacement de l'ombre par une bordure d'1px en defaut-grey en haut du footer

- remplacement du token de background-color du footer par background-lifted-grey

- ajout d'un texte plus long dans l'exemple modal + footer pour faire apparaître le scroll

---

#### [#503](https://github.com/GouvernementFR/dsfr/pull/503) : 🐛 correction capslock safari
`fix (password, account)`

- Correction erreur js sur le champ password au clic sur le trousseau (safari)

- Retrait icone native capslock safari

- Ajout attribut `autocapitalize='off'` sur les champs password et email pour désactiver la majuscule au début (mobile)

- Ajout attribut `autocorrect` sur les champs password et email pour désactiver la correction orthographique

---

#### [#590](https://github.com/GouvernementFR/dsfr/pull/590) : ✨ nouvelle version interne changelog
`feat (*)`

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

---


### [v1.9.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.2) - 18 avril 2023

#### [#587](https://github.com/GouvernementFR/dsfr/pull/587) : 🐛 correctifs analytics & page test spa
`fix (analytics)`

* Amélioration de la qualité des labels envoyés à Eulerian

  * Maximum 50 caractères, couper avec […] au delà

  * Récupère uniquement le premier texte

  * Retrait des espaces en trop

* Ajout de la propriété `isDebugging` dans `dsfr.analytics` permettant d'activer/désactiver le debug Eulerian

* Mise en conformité avec les SPA (Single-page application - Angular, React, Vue)

* Ajout d’exemples de SPA (Vue & React)

---

#### [#588](https://github.com/GouvernementFR/dsfr/pull/588) : ✨ polyfill legacy
`feat (analytics)`

Ajout des polyfills et correctifs nécessaires au support d'IE11

---

#### [#561](https://github.com/GouvernementFR/dsfr/pull/561) : ✨ ajoute changelog auto-généré
`feat (changelog)`

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

---


### [v1.9.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.1) - 11 avril 2023

#### [#585](https://github.com/GouvernementFR/dsfr/pull/585) : correction bug icone date-picker firefox version 109+
`fix (input)`

Depuis la version 109 de Firefox, l'icone date-picker est en double sur les champs type date

- Ajout de l'icone date-picker si le navigateur le supporte uniquement

---

#### [#560](https://github.com/GouvernementFR/dsfr/pull/560) : ✨ évolution et ajout de nouveaux composants
`feat (analytics)`

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

---

#### [#583](https://github.com/GouvernementFR/dsfr/pull/583) : ✨ fermeture de la navigation au clic sur lien ou bouton
`feat (header, navigation)`

Actuellement, la navigation reste présente en mobile et en desktop lorsque l'on clique sur un lien ou un bouton qu'elle contient, ce qui pose problème dans le cas des Single-page application.

La fonctionnalité est maintenant modifiée pour que tout clic sur un élément `<button>` ou `<a>` entraîne la fermeture de la navigation (modale et/ou menu).

L'ajout de l'attribut `data-fr-prevent-conceal` permet de préserver un lien ou un bouton particulier de ce nouveau comportement.

---

#### [#580](https://github.com/GouvernementFR/dsfr/pull/580) : 🐛 changement des path pour compiler sur windows
`fix (build)`

Sur windows il n'est pas possible de recompiler le projet avec yarn build

Correction des path dans les tools (windows utilise "" et linux et mac "/")

---

#### [#569](https://github.com/GouvernementFR/dsfr/pull/569) : ✨ ajout de templates d'issue github
`feat (github)`

Création de template d'issue Github pour indiquer les informations demandées lors d'un report de 

- bug

- évolution

- documentation

---

#### [#548](https://github.com/GouvernementFR/dsfr/pull/548) : 🐛 correction icone lien externe IE
`fix (core)`

Sur Internet Explorer, les icônes des liens externes ne s'affichent plus.

Correction css sur core.

---

#### [#553](https://github.com/GouvernementFR/dsfr/pull/553) : ⬆️ mise à jour des dépendances
`feat (deps)`



---

#### [#565](https://github.com/GouvernementFR/dsfr/pull/565) : 🐛 corrige largeur du bouton a l'ouverture de la modale
`fix (transcription)`

à l'ouverture de la modale de la transcription, le déplacement des éléments en position fixed change la taille du bouton de la transcription à sa taille minimum. 

La largeur étendue à 100% permet de la conserver constante.

---

#### [#563](https://github.com/GouvernementFR/dsfr/pull/563) : 🐛 ajoute 'importante' au bandeau d'information importante
`fix (notice)`

Le nom du composant devient "Bandeau information importante"

---

#### [#568](https://github.com/GouvernementFR/dsfr/pull/568) : ✨ évolution des mentions légales
`feat (footer)`

Nouveau texte : ”Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous”

---

#### [#573](https://github.com/GouvernementFR/dsfr/pull/573) : 🐛 consent placeholder video mal centré
`fix (consent)`

Dans le cas d'une vidéo le placeholder est en display block

Retrait de la propriété non désirée

---

#### [#574](https://github.com/GouvernementFR/dsfr/pull/574) : 🐛 correctif erreur getModifierState
`fix (password)`

Lorsque le navigateur fait l'autocompletion du champ password, il lance un événement qui n'est pas forcément un évènement de clavier et provoque une erreur indiquant que la fonction getModifierState n'existe pas.

---

#### [#566](https://github.com/GouvernementFR/dsfr/pull/566) : 🐛 correctif prise de focus au focus-trap
`fix (modal)`

à l'ouverture de la modale, le focus est automatiquement déplacé sur le premier des éléments interactifs de la modale.

Ce comportement pose problème lorsque le focus est déjà sur un des éléments contenus dans la modale.



Ajout d'une condition qui vérifie que le focus n'est pas déjà sur un des éléments interactifs de la modale avant de déplacer le focus.

---

#### [#559](https://github.com/GouvernementFR/dsfr/pull/559) : ✨ Mise à jour du readme
`feat (readme)`

Fine tuning, ajout de licence et droit d'utilisation et corrections.

---

#### [#571](https://github.com/GouvernementFR/dsfr/pull/571) : ✨ ajout picto document-add
`feat (artwork)`

Ajout pictogramme : 

- document/document-add 

---


### [v1.9.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.9.0) - 1 mars 2023

#### [#555](https://github.com/GouvernementFR/dsfr/pull/555) : correctifs mineurs pa11y et buble + lint
`fix (*)`

correction du chemin relatif du layout dans les exemples du package response

spread operator non supporté par buble, remplacé par Object.assign pour la transpilation IE11

correctifs de false positive pa11y

---

#### [#528](https://github.com/GouvernementFR/dsfr/pull/528) : ajout de la fonctionnalité Analytics
`feat (analytics)`

Outil de collecte de données basé sur la solution Eulerian

---

#### [#554](https://github.com/GouvernementFR/dsfr/pull/554) : mise à jour browserlist
`fix (*)`



---

#### [#550](https://github.com/GouvernementFR/dsfr/pull/550) : correctif du scheme boot pour omission par ie11
`fix (scheme)`

Le code inline du scheme boot provoque des erreurs interrompant l'exécution du javascript sur IE11

Il faut ajouter l'attribut type="module" sur l'étiquette d'élément script liée au scheme-boot

---

#### [#547](https://github.com/GouvernementFR/dsfr/pull/547) : copie du sélecteur de langue sans accès rapide
`fix (header)`

Les accès rapides sont dupliqués dans le menu mobile par le JS (sauf dans les modes SPA)

En l'absence d'accès rapide, le sélecteur de langue n'était pas dupliqué comme attendu

---

#### [#545](https://github.com/GouvernementFR/dsfr/pull/545) : depreciation des xlink dans les artwork
`fix (artwork)`

xlink-href est déprécié : https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href

Il était privilégié jusqu'ici pour le support d'IE11. Un polyfill a été mis en place pour assurer la rétrocompatibilité avec IE11

---

#### [#544](https://github.com/GouvernementFR/dsfr/pull/544) : Inversion ordre immeuble et batiment
`fix (address)`

inversion de 2 champs dans les modèles formulaire d'adresse

---

#### [#543](https://github.com/GouvernementFR/dsfr/pull/543) : correctif de la taille minimum de l'underline des liens
`fix (core)`

Sur Firefox, la relativité de l'épaisseur du lien (en em) provoque parfois son invisibilité lorsque celui-ci est inférieur à 1px. Ce correctif met en place un minimum de 1px pour l'épaisseur du lien.

---

#### [#542](https://github.com/GouvernementFR/dsfr/pull/542) : alignement à gauche des raccourcis sans icônes
`fix (header)`

L'absence d'icône sur les accès rapides de l'En-tête provoque un alignement centré au lieu d'un alignement gauche attendu.



---

#### [#539](https://github.com/GouvernementFR/dsfr/pull/539) : placement de l'input caché & alignement sm
`fix (checkbox, radio)`

Corrige le mauvais placement du curseur sur les cases à cocher et les boutons radio lors de l'utilisation de VoiceOver (screen reader de MacOs)

---

#### [#537](https://github.com/GouvernementFR/dsfr/pull/537) : correction du curseur des textarea
`fix (core)`



---

#### [#536](https://github.com/GouvernementFR/dsfr/pull/536) : correction placement icone calendrier sur input type="date"
`fix (input)`

corrige le problème de double icône remonté dans #530

---

#### [#551](https://github.com/GouvernementFR/dsfr/pull/551) : ajout icones system
`feat (icon)`

Ajout d'icônes dans system :

fr--arrow-right-up-circle-fill,

fr--arrow-right-down-circle-fill,

fr--equal-circle-fill,

---

#### [#535](https://github.com/GouvernementFR/dsfr/pull/535) : ajout du mode sombre de la scrollbar du navigateur
`fix (scheme)`

Permet de synchroniser le thème de la scrollbar avec celui du DSFR

---

#### [#552](https://github.com/GouvernementFR/dsfr/pull/552) : ajout de token de couleurs artwork
`feat (color)`

Ajoute les tokens des familles de couleurs neutral, primary et accent sur artwork dans les usages decorative, background et motif

---

#### [#520](https://github.com/GouvernementFR/dsfr/pull/520) : Ajouts des pictogrammes food, grocery, house
`feat (pictograms)`



---

#### [#533](https://github.com/GouvernementFR/dsfr/pull/533) : mise à jour des dependances npm
`feat (deps)`



---

#### [#507](https://github.com/GouvernementFR/dsfr/pull/507) : retrait du fil d'Arianne sur les pages d'erreur
`fix (response)`



---

#### [#518](https://github.com/GouvernementFR/dsfr/pull/518) : rend le composant compatible avec vite+svelte
`fix (toggle)`



---



## v1.8

### [v1.8.5](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.5) - 28 novembre 2022

#### [#480](https://github.com/GouvernementFR/dsfr/pull/480) : correction régression lien tag
`fix (tag)`



---

#### [#483](https://github.com/GouvernementFR/dsfr/pull/483) : correction de la pleine largeur du composant
`fix (transcription)`



---


### [v1.8.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.3) - 15 novembre 2022

#### [#461](https://github.com/GouvernementFR/dsfr/pull/461) : correction régression icône à droite sur les éléments interactifs
`fix (link)`



---


### [v1.8.4](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.4) - 15 novembre 2022

#### [#465](https://github.com/GouvernementFR/dsfr/pull/465) : correction sur le séparateur bleu du pied de page
`fix (footer)`



---

#### [#466](https://github.com/GouvernementFR/dsfr/pull/466) : correction sur la présence du titre de la modale
`fix (transcription)`



---


### [v1.8.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.2) - 9 novembre 2022

#### [#456](https://github.com/GouvernementFR/dsfr/pull/456) : fix build, lint, clean
`fix (global)`



---

#### [#454](https://github.com/GouvernementFR/dsfr/pull/454) : correctif duplication du sélecteur de langue
`fix (display)`



---

#### [#436](https://github.com/GouvernementFR/dsfr/pull/436) : border active sur version constrasté
`feat (pagination)`



---

#### [#443](https://github.com/GouvernementFR/dsfr/pull/443) : bug IE label et statut actif
`fix (toggle)`



---

#### [#453](https://github.com/GouvernementFR/dsfr/pull/453) : déplacement du focus sur les tags supprimables
`fix (tag)`



---

#### [#452](https://github.com/GouvernementFR/dsfr/pull/452) : titre du contenu (a11y)
`fix (transcription)`



---

#### [#451](https://github.com/GouvernementFR/dsfr/pull/451) : correction du enlarge link
`fix (core, download)`



---

#### [#449](https://github.com/GouvernementFR/dsfr/pull/449) : titre des cartes en h3
`fix (download)`



---

#### [#455](https://github.com/GouvernementFR/dsfr/pull/455) : ajout du scheme-boot permettant d'éliminer le flash au load de la page en dark mode
`fix (scheme)`



---

#### [#448](https://github.com/GouvernementFR/dsfr/pull/448) : correctifs de l'API JS de couleur
`fix (scheme)`



---

#### [#439](https://github.com/GouvernementFR/dsfr/pull/439) : ajout du css deprecated legacy
`fix (form)`



---

#### [#425](https://github.com/GouvernementFR/dsfr/pull/425) : form autocomplete
`feat (pattern)`



---


### [v1.8.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.0) - 27 octobre 2022

#### [#438](https://github.com/GouvernementFR/dsfr/pull/438) : correction accessiblité des formulaires
`fix (form)`



---

#### [#426](https://github.com/GouvernementFR/dsfr/pull/426) : pattern nationalité
`feat (nationality)`



---

#### [#437](https://github.com/GouvernementFR/dsfr/pull/437) : couleur du texte quote__sources
`fix (quote)`



---

#### [#428](https://github.com/GouvernementFR/dsfr/pull/428) : error & disabled
`fix (form, upload)`



---

#### [#430](https://github.com/GouvernementFR/dsfr/pull/430) : correction tag selectionnable hover
`fix (tag)`



---

#### [#431](https://github.com/GouvernementFR/dsfr/pull/431) : correction wording "qu'est-ce que france connect"
`fix (connect)`



---

#### [#432](https://github.com/GouvernementFR/dsfr/pull/432) : correction token de couleur
`fix (accordion)`



---

#### [#434](https://github.com/GouvernementFR/dsfr/pull/434) : ajout d'événements sur le scheme
`feat (api)`



---

#### [#424](https://github.com/GouvernementFR/dsfr/pull/424) : ajoute la class Colors
`feat (api)`



---

#### [#423](https://github.com/GouvernementFR/dsfr/pull/423) : réagencement des modèles de bloc et de page
`refactor (pattern, page)`



---

#### [#420](https://github.com/GouvernementFR/dsfr/pull/420) : niveau de titre des composants
`fix (tile, summary, sidemenu)`



---

#### [#412](https://github.com/GouvernementFR/dsfr/pull/412) : ajoute le composant transcription
`feat (transcription)`



---

#### [#413](https://github.com/GouvernementFR/dsfr/pull/413) : met a jour les urls de documentation
`fix (doc)`



---

#### [#405](https://github.com/GouvernementFR/dsfr/pull/405) : Ouverture de modal à l'intérieur d'un composant onglet
`fix (tabs)`



---

#### [#406](https://github.com/GouvernementFR/dsfr/pull/406) : sidemenu disparait à l'ouverture modale FF
`fix (sidemenu)`



---

#### [#417](https://github.com/GouvernementFR/dsfr/pull/417) : ajustement des imbrications de container
`fix (page)`



---

#### [#410](https://github.com/GouvernementFR/dsfr/pull/410) : bordure bleu inset & logo toujours aligné en haut
`fix (footer)`



---

#### [#402](https://github.com/GouvernementFR/dsfr/pull/402) : met a jour les espacements des pages erreur
`fix (response)`



---

#### [#400](https://github.com/GouvernementFR/dsfr/pull/400) : Mise à jour des path des pictogrammes
`fix (response)`



---

#### [#399](https://github.com/GouvernementFR/dsfr/pull/399) : correction template password
`fix (password)`



---

#### [#403](https://github.com/GouvernementFR/dsfr/pull/403) : ajout de modèles de page de connexion et création de compte
`feat (account, register, login)`



---

#### [#396](https://github.com/GouvernementFR/dsfr/pull/396) : ajoute le modele de date unique
`Feat (pattern)`



---

#### [#415](https://github.com/GouvernementFR/dsfr/pull/415) : Ajout du pattern société
`feat (society)`



---

#### [#398](https://github.com/GouvernementFR/dsfr/pull/398) : Ajout du pattern adresse
`feat (address)`



---

#### [#401](https://github.com/GouvernementFR/dsfr/pull/401) : Ajout des fr-control et correction des pattern civility & name
`refactor (form)`



---

#### [#391](https://github.com/GouvernementFR/dsfr/pull/391) : ajout du composant mot de passe
`feat (password)`



---

#### [#375](https://github.com/GouvernementFR/dsfr/pull/375) : ajout de pictogrammes à la librairie
`feat (artwork)`



---

#### [#355](https://github.com/GouvernementFR/dsfr/pull/355) : ajoute le modele de civilite
`feat (pattern)`



---

#### [#356](https://github.com/GouvernementFR/dsfr/pull/356) : ajoute le modele de nom et prenom
`feat (pattern)`



---

#### [#363](https://github.com/GouvernementFR/dsfr/pull/363) : Séparation en sous composant d'input, ajout de input-email et input-tel
`refactor (input)`



---

#### [#383](https://github.com/GouvernementFR/dsfr/pull/383) : ajoute le modele de page erreur inattendue
`feat (page-unexpected)`



---


### [v1.8.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.8.1) - 27 octobre 2022

#### [#442](https://github.com/GouvernementFR/dsfr/pull/442) : correctif thème sombre (fix #440)
`fix (scheme)`



---



## v1.7

### [v1.7.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.7.3) - 2 février 2023


### [v1.7.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.7.2) - 29 juillet 2022


### [v1.7.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.7.1) - 25 juillet 2022

#### [#384](https://github.com/GouvernementFR/dsfr/pull/384) : legacy z-index
`fix (elevation)`



---


### [v1.7.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.7.0) - 21 juillet 2022

#### [#382](https://github.com/GouvernementFR/dsfr/pull/382) : correction lint
`fix (module)`



---

#### [#381](https://github.com/GouvernementFR/dsfr/pull/381) : mis à jour des dépendances
`chore (global)`



---

#### [#380](https://github.com/GouvernementFR/dsfr/pull/380) : ajout de la page d'exemple
`fix (unavailable)`



---

#### [#378](https://github.com/GouvernementFR/dsfr/pull/378) : correction de l'aspect ratio par défaut des vidéos
`fix (card)`



---

#### [#379](https://github.com/GouvernementFR/dsfr/pull/379) : ajuste la template not-found
`fix (not-found)`



---

#### [#374](https://github.com/GouvernementFR/dsfr/pull/374) : correction aspect ratio par défaut
`fix (card)`



---

#### [#330](https://github.com/GouvernementFR/dsfr/pull/330) : Ajout page erreur serveur
`feat (server)`



---

#### [#371](https://github.com/GouvernementFR/dsfr/pull/371) : ajoute les modèles de page erreur 404
`feat (not-found)`



---

#### [#376](https://github.com/GouvernementFR/dsfr/pull/376) : correction des erreurs pa11y
`fix (global)`



---

#### [#359](https://github.com/GouvernementFR/dsfr/pull/359) : Ajout du sélecteur de langue
`feat (translate)`



---

#### [#353](https://github.com/GouvernementFR/dsfr/pull/353) : généralisation de l'attribut 'title' du lien retour/accueil du logo
`fix (footer, header)`



---

#### [#373](https://github.com/GouvernementFR/dsfr/pull/373) : correction barre d'étape masquée sur Firefox
`fix (stepper)`



---

#### [#372](https://github.com/GouvernementFR/dsfr/pull/372) : évolution du système d'élévation et des ombres
`feat (global)`



---

#### [#370](https://github.com/GouvernementFR/dsfr/pull/370) : Amendements sur les CGU du DSFR
`fix (global)`



---

#### [#365](https://github.com/GouvernementFR/dsfr/pull/365) : système i18n globalisé
`feat (i18n)`



---

#### [#352](https://github.com/GouvernementFR/dsfr/pull/352) : bug ratio vidéos ios
`fix (content, core)`



---

#### [#354](https://github.com/GouvernementFR/dsfr/pull/354) : correction couleur des liens de pagination en 'button'
`fix (pagination)`



---

#### [#364](https://github.com/GouvernementFR/dsfr/pull/364) : correction standalone locale pour i18n
`fix (global)`



---

#### [#350](https://github.com/GouvernementFR/dsfr/pull/350) : correction du sens de l'extension du soulignement
`fix (core)`



---

#### [#360](https://github.com/GouvernementFR/dsfr/pull/360) : correction pa11y test
`fix (global)`



---

#### [#358](https://github.com/GouvernementFR/dsfr/pull/358) : module sass dsfr
`feat (global)`



---

#### [#357](https://github.com/GouvernementFR/dsfr/pull/357) : multiplication des pages d'exemple et internationalisation
`feat (global)`



---



## v1.6

### [v1.6.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.6.0) - 14 juin 2022

#### [#345](https://github.com/GouvernementFR/dsfr/pull/345) : mise à disposition de state et stage dans l'api js
`feat (core)`



---

#### [#343](https://github.com/GouvernementFR/dsfr/pull/343) : correction du fond du svg - faux positif PA11Y
`fix (core)`



---

#### [#338](https://github.com/GouvernementFR/dsfr/pull/338) : correctif des tailles fixes des cartes horizontales
`fix (card)`



---

#### [#340](https://github.com/GouvernementFR/dsfr/pull/340) : suppression de l'icône lien extérieur sur une balise form
`fix (core)`



---

#### [#337](https://github.com/GouvernementFR/dsfr/pull/337) : stylelint
`fix (global)`



---

#### [#331](https://github.com/GouvernementFR/dsfr/pull/331) : ajout texte explicatif icones RS disponibles
`fix (follow, share)`



---

#### [#333](https://github.com/GouvernementFR/dsfr/pull/333) : correctif icône lien extérieur
`fix (core, link, button, tag, card)`



---

#### [#334](https://github.com/GouvernementFR/dsfr/pull/334) : correctif depreciation fr-fi-checkbox-circle-line
`fix (icons)`



---

#### [#336](https://github.com/GouvernementFR/dsfr/pull/336) : correctif focus au clic sur les liens
`fix (navigation)`



---

#### [#335](https://github.com/GouvernementFR/dsfr/pull/335) : correctif espacement liens rapides
`fix (header)`



---

#### [#329](https://github.com/GouvernementFR/dsfr/pull/329) : cache le détail de la dernière étape en css
`fix (stepper)`



---

#### [#332](https://github.com/GouvernementFR/dsfr/pull/332) : bug ios bordures qui n'apparaissent pas
`fix (table)`



---

#### [#327](https://github.com/GouvernementFR/dsfr/pull/327) : mise en place de l'injection du code dans le html
`feat (global)`



---

#### [#324](https://github.com/GouvernementFR/dsfr/pull/324) : ajout icones réseau sociaux
`fix (share, , follow)`



---

#### [#326](https://github.com/GouvernementFR/dsfr/pull/326) : correctif de la version legacy deprecated
`fix (follow)`



---

#### [#325](https://github.com/GouvernementFR/dsfr/pull/325) : mise à jour des dépendances
`chore (deps)`



---

#### [#319](https://github.com/GouvernementFR/dsfr/pull/319) : ajout du composant indicateur d'étapes
`feat (stepper)`



---

#### [#317](https://github.com/GouvernementFR/dsfr/pull/317) : ajout des pictogrammes illustratifs
`feat (artwork)`



---

#### [#316](https://github.com/GouvernementFR/dsfr/pull/316) : ajout utilitaire fr-ratio et aspect-ratio des content img & vid
`refactor (core, card, content)`



---

#### [#302](https://github.com/GouvernementFR/dsfr/pull/302) : Ajout du composant bandeau d'information
`feat (notice)`



---

#### [#313](https://github.com/GouvernementFR/dsfr/pull/313) : couleur puce groupe de lien de téléchargement
`fix (download)`



---

#### [#310](https://github.com/GouvernementFR/dsfr/pull/310) : migration vers sass dart
`chore (global)`



---

#### [#320](https://github.com/GouvernementFR/dsfr/pull/320) : implémentation du positionnement des icônes en inline
`refactor (global)`



---

#### [#311](https://github.com/GouvernementFR/dsfr/pull/311) : correction espacements des groupes
`refactor (header, link, button, follow, share, tag, badge)`



---

#### [#290](https://github.com/GouvernementFR/dsfr/pull/290) : changement balise du titre
`fix (sidemenu)`



---

#### [#306](https://github.com/GouvernementFR/dsfr/pull/306) : correction link icon déprecié
`fix (follow)`



---

#### [#300](https://github.com/GouvernementFR/dsfr/pull/300) : correction de l'implémentation de $DIST-PATH
`fix (core)`



---

#### [#279](https://github.com/GouvernementFR/dsfr/pull/279) : suppression de node-sass-magic-importer
`chore `



---



## v1.5

### [v1.5.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.5.2) - 14 juin 2022


### [v1.5.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.5.1) - 26 avril 2022

#### [#299](https://github.com/GouvernementFR/dsfr/pull/299) : description et liens vers la documentation
`docs (utility)`



---

#### [#298](https://github.com/GouvernementFR/dsfr/pull/298) : correction lint
`fix (icons-system)`



---

#### [#297](https://github.com/GouvernementFR/dsfr/pull/297) : icônes dépréciées de la v1.4.0
`fix (icons)`



---

#### [#296](https://github.com/GouvernementFR/dsfr/pull/296) : icones dépréciées
`fix (core, utility)`



---

#### [#292](https://github.com/GouvernementFR/dsfr/pull/292) : correction erreur js legacy
`fix (download)`



---

#### [#295](https://github.com/GouvernementFR/dsfr/pull/295) : correction du nom de fichier sur le js legacy
`fix (dsfr-deprecated)`



---


### [v1.5.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.5.0) - 21 avril 2022

#### [#289](https://github.com/GouvernementFR/dsfr/pull/289) : titre groupe de liens en classe BEM
`fix (download)`



---

#### [#286](https://github.com/GouvernementFR/dsfr/pull/286) : contributing.md et readme.md 1.5.0
`fix `



---

#### [#287](https://github.com/GouvernementFR/dsfr/pull/287) : correctif icon alert et globale
`fix `



---

#### [#285](https://github.com/GouvernementFR/dsfr/pull/285) : media query legacy manquante
`fix (legacy)`



---

#### [#284](https://github.com/GouvernementFR/dsfr/pull/284) : retrait exemple groupe sm
`fix (download)`



---

#### [#283](https://github.com/GouvernementFR/dsfr/pull/283) : transpilation async et commentaire
`fix (download, card)`



---

#### [#280](https://github.com/GouvernementFR/dsfr/pull/280) : Ajouts nouvelles icones & séparation en familles
`refactor (icon)`



---

#### [#272](https://github.com/GouvernementFR/dsfr/pull/272) : Ajout du composant téléchargement de fichier
`feat (download)`



---

#### [#281](https://github.com/GouvernementFR/dsfr/pull/281) : correction de la variable de build isStandalone
`fix (connect)`



---

#### [#282](https://github.com/GouvernementFR/dsfr/pull/282) : typo dans l'exemple grille
`fix (card)`



---

#### [#276](https://github.com/GouvernementFR/dsfr/pull/276) : correction icone date
`fix (input)`



---

#### [#269](https://github.com/GouvernementFR/dsfr/pull/269) : bandeau de site en beta
`feat (header)`



---

#### [#277](https://github.com/GouvernementFR/dsfr/pull/277) : alignement des logos partenaires
`fix (footer)`



---

#### [#278](https://github.com/GouvernementFR/dsfr/pull/278) : suppression de node-sass-json-importer
`chore `



---

#### [#270](https://github.com/GouvernementFR/dsfr/pull/270) : ajout de la fonctionnalité card v2
`feat (card)`



---

#### [#273](https://github.com/GouvernementFR/dsfr/pull/273) : retrait import json & ajout rel noopener
`fix (connect)`



---

#### [#274](https://github.com/GouvernementFR/dsfr/pull/274) : mise à jour des dépendances
`fix (global)`



---

#### [#266](https://github.com/GouvernementFR/dsfr/pull/266) : changement de la taille des boutons (padding)
`feat (button)`



---

#### [#268](https://github.com/GouvernementFR/dsfr/pull/268) : correction liste à puce sur android
`fix (core)`



---

#### [#256](https://github.com/GouvernementFR/dsfr/pull/256) : restitution des icones en background + mask
`fix (global)`



---

#### [#252](https://github.com/GouvernementFR/dsfr/pull/252) : bug checkbox NVDA - correction du reset appearance
`fix (core)`



---

#### [#255](https://github.com/GouvernementFR/dsfr/pull/255) : généralisation du build du standalone
`refactor (connect)`



---



## v1.4

### [v1.4.3](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.3) - 14 juin 2022


### [v1.4.2](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.2) - 13 juin 2022


### [v1.4.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.1) - 29 mars 2022

#### [#258](https://github.com/GouvernementFR/dsfr/pull/258) : correction tag activable sm et dans un group sm
`fix (tag)`



---

#### [#261](https://github.com/GouvernementFR/dsfr/pull/261) : retrait description & ajout target blank
`fix (connect)`



---

#### [#257](https://github.com/GouvernementFR/dsfr/pull/257) : correction de la dépréciation pour être plus générique
`fix (follow)`



---

#### [#260](https://github.com/GouvernementFR/dsfr/pull/260) : libelle FranceConnect attaché
`fix (connect)`



---


### [v1.4.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.4.0) - 16 mars 2022

#### [#247](https://github.com/GouvernementFR/dsfr/pull/247) : correction et support des versions dépréciées
`fix (display)`



---

#### [#241](https://github.com/GouvernementFR/dsfr/pull/241) : retours dépréciation
`fix (header, follow, content)`



---

#### [#243](https://github.com/GouvernementFR/dsfr/pull/243) : correction hauteur & scroll sidemenu sticky
`fix (sidemenu)`



---

#### [#242](https://github.com/GouvernementFR/dsfr/pull/242) : correction affichage mega-menu
`fix (navigation)`



---

#### [#239](https://github.com/GouvernementFR/dsfr/pull/239) : correction taille du lien en sm
`fix (connect)`



---

#### [#237](https://github.com/GouvernementFR/dsfr/pull/237) : mise en place de la stratégie de dépréciation des composants
`feat (global)`



---

#### [#240](https://github.com/GouvernementFR/dsfr/pull/240) : corrections des retours dev 1.4.0
`fix `



---

#### [#238](https://github.com/GouvernementFR/dsfr/pull/238) : retrait du hint text
`fix (connect)`



---

#### [#233](https://github.com/GouvernementFR/dsfr/pull/233) : Ajout du lien "back to top"
`feat (link)`



---

#### [#226](https://github.com/GouvernementFR/dsfr/pull/226) : corrige erreur js en mode no-module
`fix (megamenu)`



---

#### [#227](https://github.com/GouvernementFR/dsfr/pull/227) : corrige le collapse multi-navigateurs
`fix (collapse)`



---

#### [#221](https://github.com/GouvernementFR/dsfr/pull/221) : templates plus paramétrables
`fix `



---

#### [#215](https://github.com/GouvernementFR/dsfr/pull/215) : ajout d'un sample de footer paramétrable
`feat (footer)`



---

#### [#223](https://github.com/GouvernementFR/dsfr/pull/223) : correction hauteur sidemenu sticky
`fix (sidemenu)`



---

#### [#230](https://github.com/GouvernementFR/dsfr/pull/230) : <dialog> masqué en no-css
`fix (modal)`



---

#### [#232](https://github.com/GouvernementFR/dsfr/pull/232) : correction z-index des tab-panels
`fix (tab)`



---

#### [#229](https://github.com/GouvernementFR/dsfr/pull/229) : margin bottom des textes et titres en css prop
`fix `



---

#### [#231](https://github.com/GouvernementFR/dsfr/pull/231) : ajout d'icones
`feat (core)`



---

#### [#234](https://github.com/GouvernementFR/dsfr/pull/234) : soulignement des liens et ajout des boutons tertiaires
`refactor (global)`



---

#### [#224](https://github.com/GouvernementFR/dsfr/pull/224) : ajout description et lien france connect
`feat (connect)`



---

#### [#225](https://github.com/GouvernementFR/dsfr/pull/225) : injection js de styles en variables css
`fix (core, tab, modal, button)`



---

#### [#212](https://github.com/GouvernementFR/dsfr/pull/212) : variabilisation du core
`feat (core)`



---

#### [#228](https://github.com/GouvernementFR/dsfr/pull/228) : mise a jour des dépendances node mineures
`feat (dependencies)`



---

#### [#211](https://github.com/GouvernementFR/dsfr/pull/211) : Ajout de la fonctionnalité FranceConnect
`feat (connect)`



---

#### [#213](https://github.com/GouvernementFR/dsfr/pull/213) : correction z-index de toggle
`fix (toggle, modal)`



---

#### [#214](https://github.com/GouvernementFR/dsfr/pull/214) : a11y retrait des ul li du groupe d'accordéon
`fix (accordion)`



---

#### [#169](https://github.com/GouvernementFR/dsfr/pull/169) : nouvelle fonte Marianne avec correction de l'alignement
`fix (core)`



---



## v1.3

### [v1.3.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.1) - 7 février 2022

#### [#210](https://github.com/GouvernementFR/dsfr/pull/210) : correction de l'état précoché de l'interrupteur
`fix (toggle)`



---

#### [#204](https://github.com/GouvernementFR/dsfr/pull/204) : correction focus coupés
`fix (navigation, sidemenu)`



---

#### [#209](https://github.com/GouvernementFR/dsfr/pull/209) : mise a jour des dépendances
`chore (deps)`



---

#### [#208](https://github.com/GouvernementFR/dsfr/pull/208) : correction de la gestion de l'attribut checked et de la page d'exemple de form
`fix (checkbox, form, radio, toggle)`



---

#### [#205](https://github.com/GouvernementFR/dsfr/pull/205) : correction de la mixin has-icon et has-not-icon
`fix (core)`



---

#### [#206](https://github.com/GouvernementFR/dsfr/pull/206) : faute dans le texte alternatif
`fix (core)`



---

#### [#171](https://github.com/GouvernementFR/dsfr/pull/171) : met a jour la doc des templates ejs
`fix (doc)`



---

#### [#198](https://github.com/GouvernementFR/dsfr/pull/198) : ajout de l'attribut checked
`fix (checkbox, radio, toggle)`



---

#### [#202](https://github.com/GouvernementFR/dsfr/pull/202) : ordre des media query au build css
`fix `



---

#### [#201](https://github.com/GouvernementFR/dsfr/pull/201) : correction font-icon descent
`fix (core)`



---

#### [#199](https://github.com/GouvernementFR/dsfr/pull/199) : alerte dynamique refermable
`refactor (alert)`



---

#### [#194](https://github.com/GouvernementFR/dsfr/pull/194) : ajout exemple dynamique
`feat (alert)`



---

#### [#196](https://github.com/GouvernementFR/dsfr/pull/196) : standardisation des icones
`refactor (core)`



---

#### [#197](https://github.com/GouvernementFR/dsfr/pull/197) : exemple checkbox sup et sub
`fix (checkbox)`



---

#### [#195](https://github.com/GouvernementFR/dsfr/pull/195) : ajout du module font-swap
`feat (core)`



---

#### [#193](https://github.com/GouvernementFR/dsfr/pull/193) : status width
`fix (toggle)`



---

#### [#192](https://github.com/GouvernementFR/dsfr/pull/192) : patch 1.3.1 - status width & modal icon aria-hidden
`fix (toggle, modal)`



---


### [v1.3.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.3.0) - 18 janvier 2022

#### [#190](https://github.com/GouvernementFR/dsfr/pull/190) : icones statut & remix
`fix (core)`



---

#### [#189](https://github.com/GouvernementFR/dsfr/pull/189) : sélectionnable
`fix (tag)`



---

#### [#185](https://github.com/GouvernementFR/dsfr/pull/185) : statut activer/desactiver a11y
`fix (toggle)`



---

#### [#182](https://github.com/GouvernementFR/dsfr/pull/182) : retrait attribut role='alert' et collapse
`fix (alert)`



---

#### [#188](https://github.com/GouvernementFR/dsfr/pull/188) : sup sub exemple
`fix (radio)`



---

#### [#186](https://github.com/GouvernementFR/dsfr/pull/186) : texte d'erreur email & centrage alignement icône erreur/valid
`fix (follow)`



---

#### [#187](https://github.com/GouvernementFR/dsfr/pull/187) : titre bandeau en h2
`fix (consent)`



---

#### [#184](https://github.com/GouvernementFR/dsfr/pull/184) : mise a jour des dépendances
`chore (deps)`



---

#### [#181](https://github.com/GouvernementFR/dsfr/pull/181) : role & aria link disabled
`fix (link, tag, pagination, share)`



---

#### [#180](https://github.com/GouvernementFR/dsfr/pull/180) : correctif js tag
`fix (tag)`

* fix(core): correctif js



* fix(tag): correctif js

---

#### [#179](https://github.com/GouvernementFR/dsfr/pull/179) : correctif lint + js
`fix (core)`



---

#### [#166](https://github.com/GouvernementFR/dsfr/pull/166) : Ajout des composants tag activable et tag supprimable
`feat (tag)`



---

#### [#59](https://github.com/GouvernementFR/dsfr/pull/59) : ajout du composant badge
`feat (badge)`



---

#### [#174](https://github.com/GouvernementFR/dsfr/pull/174) : Ajout des valeurs d'espacement 0.5v et 1.5v
`feat (core)`



---

#### [#175](https://github.com/GouvernementFR/dsfr/pull/175) : commentaire des textes alternatif des images
`fix `



---

#### [#176](https://github.com/GouvernementFR/dsfr/pull/176) : retours d'accessibilité a11y
`fix `



---

#### [#178](https://github.com/GouvernementFR/dsfr/pull/178) : correctif des imports js
`fix (core)`



---

#### [#170](https://github.com/GouvernementFR/dsfr/pull/170) : ajoute methode de detection du localstorage
`fix (scheme)`



---

#### [#168](https://github.com/GouvernementFR/dsfr/pull/168) : ajoute la nouvelle font-icon
`feat (icon)`



---

#### [#177](https://github.com/GouvernementFR/dsfr/pull/177) : correctif du hover des actions
`fix (core)`



---

#### [#86](https://github.com/GouvernementFR/dsfr/pull/86) : met a jour le style pour les indices et exposants
`fix (radio-checkbox)`



---

#### [#165](https://github.com/GouvernementFR/dsfr/pull/165) : modifie l'intitulé par défaut
`feat (logo)`



---

#### [#173](https://github.com/GouvernementFR/dsfr/pull/173) : retire les polyfills legacy du script module
`fix (legacy)`



---

#### [#172](https://github.com/GouvernementFR/dsfr/pull/172) : retrait du smooth scroll
`fix (tab)`



---

#### [#159](https://github.com/GouvernementFR/dsfr/pull/159) : ajout de l'ombre au scroll & recentrage des boutons
`feat (tab)`



---

#### [#154](https://github.com/GouvernementFR/dsfr/pull/154) : ie listes et marges
`fix (legacy)`



---

#### [#167](https://github.com/GouvernementFR/dsfr/pull/167) : background tile
`fix (tile)`



---

#### [#142](https://github.com/GouvernementFR/dsfr/pull/142) : ajout modifieur viewport-width
`feat (tab)`



---

#### [#89](https://github.com/GouvernementFR/dsfr/pull/89) : corrige le scroll horizontal
`fix (tab)`



---

#### [#164](https://github.com/GouvernementFR/dsfr/pull/164) : corrige erreur à la compilation
`fix (card)`



---

#### [#162](https://github.com/GouvernementFR/dsfr/pull/162) : bordure extérieure sur les cartes
`fix (card)`



---

#### [#160](https://github.com/GouvernementFR/dsfr/pull/160) : nettoyage et simplification du système de couleur
`refactor `



---



## v1.2

### [v1.2.1](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.1) - 29 novembre 2021

#### [#158](https://github.com/GouvernementFR/dsfr/pull/158) : ajout d'un attribut pour la fermeture au click
`feat (modal)`



---

#### [#157](https://github.com/GouvernementFR/dsfr/pull/157) : ajout de l'attribut aria-modal
`fix (modal)`



---

#### [#155](https://github.com/GouvernementFR/dsfr/pull/155) : allègement hover bloc marque
`fix (header)`



---

#### [#156](https://github.com/GouvernementFR/dsfr/pull/156) : passage du noir et du blanc dans l'échelle des gris
`refactor `



---

#### [#145](https://github.com/GouvernementFR/dsfr/pull/145) : accessibilité du focus
`fix (modal)`



---

#### [#153](https://github.com/GouvernementFR/dsfr/pull/153) : correction hover enlarge-link
`fix (card-tile)`



---

#### [#152](https://github.com/GouvernementFR/dsfr/pull/152) : correction de la version minimum node
`fix `



---

#### [#151](https://github.com/GouvernementFR/dsfr/pull/151) : correction du hover des liens
`fix (sidemenu)`



---

#### [#144](https://github.com/GouvernementFR/dsfr/pull/144) : corrections css pour IE, valeur initial
`fix (header)`



---

#### [#147](https://github.com/GouvernementFR/dsfr/pull/147) : met a jour les noms de class d'accentuation
`fix (card-tile)`



---

#### [#148](https://github.com/GouvernementFR/dsfr/pull/148) : ajout meta theme-color dans favicon
`feat (core)`



---

#### [#149](https://github.com/GouvernementFR/dsfr/pull/149) : ajout icone filter
`feat (core)`



---

#### [#150](https://github.com/GouvernementFR/dsfr/pull/150) : bug js tab conceal
`fix (core)`



---

#### [#146](https://github.com/GouvernementFR/dsfr/pull/146) : ajoute le chevron sur le aria-expanded
`feat (sidemenu)`



---

#### [#141](https://github.com/GouvernementFR/dsfr/pull/141) : ajout aria described
`fix (upload)`



---

#### [#143](https://github.com/GouvernementFR/dsfr/pull/143) : mise à jour des dépendances de développement majeures et mineures
`feat (yarn)`



---

#### [#140](https://github.com/GouvernementFR/dsfr/pull/140) : hover ajusté dans navigation, consent et summary
`fix `



---

#### [#139](https://github.com/GouvernementFR/dsfr/pull/139) : bug legacy IE
`fix `



---


### [v1.2.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.2.0) - 17 novembre 2021

#### [#136](https://github.com/GouvernementFR/dsfr/pull/136) : correction tableau avec bordure gris
`fix (table)`



---

#### [#134](https://github.com/GouvernementFR/dsfr/pull/134) : ajout de l'accentuation en usage contrast
`feat (tile)`



---

#### [#133](https://github.com/GouvernementFR/dsfr/pull/133) : ajout temporaire du chevron
`fix (select)`



---

#### [#132](https://github.com/GouvernementFR/dsfr/pull/132) : lint
`chore `



---

#### [#127](https://github.com/GouvernementFR/dsfr/pull/127) : ajoute une methode globale sur l'api pour definir legacy
`fix (inject-svg)`



---

#### [#131](https://github.com/GouvernementFR/dsfr/pull/131) : couleur catégorie menu
`fix (footer)`



---

#### [#130](https://github.com/GouvernementFR/dsfr/pull/130) : correction icon theme-fill
`fix `



---

#### [#129](https://github.com/GouvernementFR/dsfr/pull/129) : correction couleur des liens
`fix (footer)`



---

#### [#125](https://github.com/GouvernementFR/dsfr/pull/125) : accentuation du background
`fix (callout)`



---

#### [#122](https://github.com/GouvernementFR/dsfr/pull/122) : bordure sur la classe radio-rich__img
`fix (radio)`



---

#### [#128](https://github.com/GouvernementFR/dsfr/pull/128) : correction hover sur lien fil du texte et card
`fix `



---

#### [#123](https://github.com/GouvernementFR/dsfr/pull/123) : met a jour le modifier d'accent
`fix (card)`



---

#### [#115](https://github.com/GouvernementFR/dsfr/pull/115) : met à jour le reset des boutons et champs de saisie pour Safari
`fix (search)`



---

#### [#119](https://github.com/GouvernementFR/dsfr/pull/119) : corrige bouton d'affichage et bug a la selection du mode
`fix (display)`



---

#### [#120](https://github.com/GouvernementFR/dsfr/pull/120) : correctifs ejs form
`fix `



---

#### [#121](https://github.com/GouvernementFR/dsfr/pull/121) : ajoute un modifier d'accentuation
`fix (card)`



---

#### [#103](https://github.com/GouvernementFR/dsfr/pull/103) : fonctions pour générer l'objet consent
`refactor (consent)`



---

#### [#118](https://github.com/GouvernementFR/dsfr/pull/118) : ajoute des attributs d'accessibilité sur les svg
`fix (display)`



---

#### [#117](https://github.com/GouvernementFR/dsfr/pull/117) : correction du token
`fix (summary)`



---

#### [#116](https://github.com/GouvernementFR/dsfr/pull/116) : mise en place de l'overlay
`feat (modal)`



---

#### [#114](https://github.com/GouvernementFR/dsfr/pull/114) : hover radio / retour couleur
`fix `



---

#### [#113](https://github.com/GouvernementFR/dsfr/pull/113) : ajoute un bouton fixe pour les parametre d'affichage
`feat (example)`



---

#### [#112](https://github.com/GouvernementFR/dsfr/pull/112) : ejs corrections multiples
`fix `



---

#### [#111](https://github.com/GouvernementFR/dsfr/pull/111) : couleurs accentuation
`feat `



---

#### [#110](https://github.com/GouvernementFR/dsfr/pull/110) : correction ombre table + lint / pa11y
`fix `



---

#### [#109](https://github.com/GouvernementFR/dsfr/pull/109) : Ajout icones illustratives & thème systeme
`feat (display)`



---

#### [#108](https://github.com/GouvernementFR/dsfr/pull/108) : restructuration custom props / legacy
`refactor `



---

#### [#88](https://github.com/GouvernementFR/dsfr/pull/88) : corrige taille image mode horizontal
`fix (cards)`



---

#### [#105](https://github.com/GouvernementFR/dsfr/pull/105) : espacement catégories mobile
`fix (navigation)`



---

#### [#104](https://github.com/GouvernementFR/dsfr/pull/104) : espacement composant
`fix (toggle)`



---

#### [#94](https://github.com/GouvernementFR/dsfr/pull/94) : ajoute des exemples disabled et checked
`refactor (ejs)`



---

#### [#93](https://github.com/GouvernementFR/dsfr/pull/93) : ajout icon logout
`feat (icon)`



---

#### [#68](https://github.com/GouvernementFR/dsfr/pull/68) : nav-link hover sur a et button uniquement
`fix (navigation)`



---

#### [#73](https://github.com/GouvernementFR/dsfr/pull/73) : margin bottom <p> et <hx> des composants
`fix `



---

#### [#60](https://github.com/GouvernementFR/dsfr/pull/60) : ajout du reset de hr
`feat (core)`



---

#### [#102](https://github.com/GouvernementFR/dsfr/pull/102) : disabled input-upload & curseur pointeur
`fix (upload)`



---

#### [#43](https://github.com/GouvernementFR/dsfr/pull/43) : ajout du composant upload
`feat (upload)`



---

#### [#80](https://github.com/GouvernementFR/dsfr/pull/80) : corrige la hauteur de la modale sur desktop
`fix (modale)`



---

#### [#101](https://github.com/GouvernementFR/dsfr/pull/101) : ajout d'id aux services
`fix (consent)`



---

#### [#87](https://github.com/GouvernementFR/dsfr/pull/87) : met a jour le wording du copyright
`fix (footer)`



---

#### [#92](https://github.com/GouvernementFR/dsfr/pull/92) : focus trap avec iframe
`fix (modal)`



---

#### [#90](https://github.com/GouvernementFR/dsfr/pull/90) : readme et contributing
`fix `



---

#### [#76](https://github.com/GouvernementFR/dsfr/pull/76) : inclusion des composants ejs dans locals.nomComposant
`refactor `



---

#### [#100](https://github.com/GouvernementFR/dsfr/pull/100) : bouton sidemenu display none / scheme package.yml / fr-input code inutile / table refactor et couleurs
`fix `



---

#### [#99](https://github.com/GouvernementFR/dsfr/pull/99) : correction blue-france & mourning
`fix (logo)`



---

#### [#98](https://github.com/GouvernementFR/dsfr/pull/98) : correction du token art déprécié
`fix `



---

#### [#97](https://github.com/GouvernementFR/dsfr/pull/97) : correction des hovers
`fix `



---

#### [#96](https://github.com/GouvernementFR/dsfr/pull/96) : ajout des tokens artwork
`Refactor `



---

#### [#95](https://github.com/GouvernementFR/dsfr/pull/95) : corrige le lint en l'absence de fichier sass
`fix `



---

#### [#85](https://github.com/GouvernementFR/dsfr/pull/85) : met a jour le scope des tests pa11y
`Fix (pa11y)`



---

#### [#83](https://github.com/GouvernementFR/dsfr/pull/83) : nouveau système de couleur
`refactor (scheme)`



---

#### [#82](https://github.com/GouvernementFR/dsfr/pull/82) : dsfr license npm
`fix `



---

#### [#77](https://github.com/GouvernementFR/dsfr/pull/77) : bordures en desktop
`fix (sidemenu)`



---

#### [#84](https://github.com/GouvernementFR/dsfr/pull/84) : supprime les polyfill du linter eslint
`fix (lint)`



---

#### [#79](https://github.com/GouvernementFR/dsfr/pull/79) : définition d'une valeur par défaut de l'objet de configuration window.dsfr
`Fix `



---

#### [#78](https://github.com/GouvernementFR/dsfr/pull/78) : licence.md devient license.md
`fix `



---

#### [#72](https://github.com/GouvernementFR/dsfr/pull/72) : corrige les erreurs JS sous ie11
`fix (legacy-browser)`



---

#### [#74](https://github.com/GouvernementFR/dsfr/pull/74) : correction du package.json
`fix `



---

#### [#69](https://github.com/GouvernementFR/dsfr/pull/69) : Bug Modal JS
`fix (api)`



---

#### [#67](https://github.com/GouvernementFR/dsfr/pull/67) : page/pattern dossier vide et npm deploy
`fix `



---

#### [#71](https://github.com/GouvernementFR/dsfr/pull/71) : exemple texte taille md
`fix (core)`



---

#### [#70](https://github.com/GouvernementFR/dsfr/pull/70) : input type submit désactivé
`fix `



---

#### [#65](https://github.com/GouvernementFR/dsfr/pull/65) : ajout d'icones
`feat (core)`



---

#### [#53](https://github.com/GouvernementFR/dsfr/pull/53) : ajout d'un robots.txt à la racine de public
`feat `



---

#### [#66](https://github.com/GouvernementFR/dsfr/pull/66) : favicon path
`fix `

dsfr-dev devient dsfr

---

#### [#61](https://github.com/GouvernementFR/dsfr/pull/61) : mega menu category bold
`fix (navigation)`



---

#### [#62](https://github.com/GouvernementFR/dsfr/pull/62) : modification du gitignore
`refactor `



---

#### [#63](https://github.com/GouvernementFR/dsfr/pull/63) : fr-text devient fr-text--md
`fix (core)`



---

#### [#58](https://github.com/GouvernementFR/dsfr/pull/58) : reset bordure des inputs (ios)
`fix (core)`



---

#### [#57](https://github.com/GouvernementFR/dsfr/pull/57) : correction fr-input--error et fr-input--valid
`fix (search)`



---

#### [#54](https://github.com/GouvernementFR/dsfr/pull/54) : Le composant media ne fonctionne pas avec une image svg
`fix (content)`



---

#### [#55](https://github.com/GouvernementFR/dsfr/pull/55) : correction structure dev, retrait underscore dist exemple
`fix `



---

#### [#52](https://github.com/GouvernementFR/dsfr/pull/52) : marge sous les textes et titres
`fix (core)`



---

#### [#50](https://github.com/GouvernementFR/dsfr/pull/50) : correction semicolon manquant devant last-child
`fix (header)`



---

#### [#47](https://github.com/GouvernementFR/dsfr/pull/47) : fr-input--error sur un textarea le passe en rouge
`fix (input)`



---

#### [#49](https://github.com/GouvernementFR/dsfr/pull/49) : correction espacements des boutons de partage
`fix (share)`



---

#### [#48](https://github.com/GouvernementFR/dsfr/pull/48) : couleur lignes odd des tableaux
`fix (table)`



---

#### [#45](https://github.com/GouvernementFR/dsfr/pull/45) : passage au singulier des noms de fichiers et packages
`chore `



---

#### [#44](https://github.com/GouvernementFR/dsfr/pull/44) : évolution de la structure pattern, composant, page et du build
`refactor (pattern)`



---

#### [#41](https://github.com/GouvernementFR/dsfr/pull/41) : dynamic js instances et minification
`fix `



---

#### [#40](https://github.com/GouvernementFR/dsfr/pull/40) : correction font-display
`fix (core)`



---

#### [#9](https://github.com/GouvernementFR/dsfr/pull/9) : implémentation du js dynamique
`refactor `



---

#### [#37](https://github.com/GouvernementFR/dsfr/pull/37) : text-rendering en optimizeLegibility
`fix (core)`

* fix(core): text-rendering en optimizeLegibility



* fix(core): inputs en text rendering optimizeLegibility

---

#### [#38](https://github.com/GouvernementFR/dsfr/pull/38) : font-display swap par défaut
`fix (core)`



---



## v1.1

### [v1.1.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.1.0) - 27 juillet 2021

#### [#35](https://github.com/GouvernementFR/dsfr/pull/35) : Suppression du alt de l'image
`fix (quotes)`



---

#### [#34](https://github.com/GouvernementFR/dsfr/pull/34) : correction title désactivé
`fix (share)`



---

#### [#33](https://github.com/GouvernementFR/dsfr/pull/33) : maj contributing.md
`fix (doc)`



---

#### [#31](https://github.com/GouvernementFR/dsfr/pull/31) : input en position absolue
`fix (checkboxes, radios)`



---

#### [#32](https://github.com/GouvernementFR/dsfr/pull/32) : tailles des popup de partage
`fix (share)`



---

#### [#29](https://github.com/GouvernementFR/dsfr/pull/29) : séparateur en box shadow
`fix (follow)`



---

#### [#30](https://github.com/GouvernementFR/dsfr/pull/30) : correction template ejs et nom du composant
`fix (share)`



---

#### [#28](https://github.com/GouvernementFR/dsfr/pull/28) : corrections et nouveau nom composant
`fix (follow)`



---

#### [#10](https://github.com/GouvernementFR/dsfr/pull/10) : ajout du composant follow (nous suivre)
`feat `



---

#### [#23](https://github.com/GouvernementFR/dsfr/pull/23) : ajout du composant quotes (citation)
`feat `



---

#### [#21](https://github.com/GouvernementFR/dsfr/pull/21) : ajout du composant share (boutons de partage)
`feat `



---

#### [#16](https://github.com/GouvernementFR/dsfr/pull/16) : fonctionnement sans js
`refactor (table)`



---



## v1.0

### [v1.0.0](https://github.com/GouvernementFR/dsfr/releases/tag/v1.0.0) - 24 juin 2021

#### [#19](https://github.com/GouvernementFR/dsfr/pull/19) : correction nouveau nom d'icône
`fix (buttons, modal, tabs)`



---

#### [#17](https://github.com/GouvernementFR/dsfr/pull/17) : Correction texte explicatif
`fix (alerts)`



---

#### [#11](https://github.com/GouvernementFR/dsfr/pull/11) : ajustements et correctifs
`fix (modal)`



---

#### [#12](https://github.com/GouvernementFR/dsfr/pull/12) : Ajout du composant gestionnaire de consentement
`feat (consent)`



---

#### [#7](https://github.com/GouvernementFR/dsfr/pull/7) : ajout du composant alerts
`feat (alerts)`

* feat(alerts): style alertes



* feat(alerts): ajout d'exemples



* fix(alerts): examples



* fix(alerts): attributs bouton close



* fix(alerts): correction snippet



* fix(alerts): title bem style h6



* fix(alerts): margin p, hx et lien documentation

---

#### [#6](https://github.com/GouvernementFR/dsfr/pull/6) : Ajustement de summary avec les nouvelles listes
`fix (summary)`

* fix(summary): Ajustement de summary avec les nouvelles listes



* doc(summary): Commentaire d'explication sur les nombres utilisés pour créer le décalage de l'hover



* fix(summary): remplacement du marker par un before sur le lien (support safari + hover)

---

#### [#8](https://github.com/GouvernementFR/dsfr/pull/8) : ordre détail dans le snippet
`fix (cards)`



---

#### [#4](https://github.com/GouvernementFR/dsfr/pull/4) : correction des listes à puces
`fix (core)`

* fix(core): correction des listes pour un retour à un fonctionnement proche de celui par défaut



* fix(core): correction espacement des listes



* fix(core): nettoyage code commenté

---

#### [#5](https://github.com/GouvernementFR/dsfr/pull/5) : correction bug windows inversion des nombres
`fix (radios checkboxes)`

* fix(radios, checkboxes): correction display des labels



* feat: label checkbox & radios



* fix: case insensitive flag retiré des sélecteurs d'attribut (non supporté par IE edge)



Co-authored-by: lab9 <lab9.fr@gmail.com>

---

#### [#2](https://github.com/GouvernementFR/dsfr/pull/2) : contributing
`fix `



---



