#Schemes

## Dépendance
```shell
color-schemes
└─ core
```

####Introduction

Le système de scheme permet de gérer les couleurs de l'ensemble des composants du design system.
Il gère également le passage du design system en dark-mode. 

il existe 3 types de schemes : 

##### - scheme light
Les couleurs claires, proches du blanc. 
Le scheme par défaut, déjà asocié par `.rf-body`
Dans ce cas, les éléments decendants pourront avoir des couleurs prononcées.

##### - scheme dark
Les couleurs sombres
Dans ce cas, les éléments dans la descendance prennent une couleur en contraste avec le fond sombre.

##### - scheme chromatic
Les couleurs plus vives
Dans ce cas, les éléments dans la descendance sont en niveau de gris, sans coloration, afin de pouvoir vivre avec la couleur de fond du scheme.

les schemes sont définis par la variable $scheme-wrappers dans _settings

```scss
$scheme-wrappers : (
        light:(
                white:$white $blue-france-500 $grey-800 $blue-france-200,
                grey-100:$grey-100 $blue-france-100 $grey-800 $blue-france-200,
                beige:#F9F8F6 $blue-france-100 $grey-800 $blue-france-200,
        ),
        dark:(
                black:$grey-800 $blue-france-200
        ),
        chromatic:(
                pink:$pink-light-300 $pink-light-500 $grey-600 $blue-france-200
        )
    );
```
pour chaque scheme sont définis 4 valeurs de couleur :

1. la couleur de fond du scheme en light mode
2. la couleur de bordure du scheme en light mode  
3. la couleur de fond du scheme en dark mode
4. la couleur de bordure du scheme en dark mode  

Les schemes dark n'ont que 2 couleurs puisqu'ils restent inchangés par le passage en dark-mode


##Wrappers

Le wrapper va définir une couleur de fond sur l'ensemble du block et va styliser en conséquence les éléments de sa descendance.

Le wrapper doit être un descendant de `.rf-body`

La classe `.rf-scheme` applique le scheme par défaut avec un fond blanc.

En y adjoignant un modifier, on peut appliquer un autre scheme. 

Le modifier suit la nomenclature suivante : `.rf-scheme--#{$colorName}`

```html
<div class="rf-scheme rf-scheme--grey-100"></div>
```

#####Scheme borders

Il est possible d'ajouter une bordure sur le block du scheme avec la classe `.scheme-border`.

Pour définir des côtés spécifiques, utilisez les modifiers suivants :
``` css
.scheme-border--top 
.scheme-border--right 
.scheme-border--bottom 
.scheme-border--left
```

```html
<div class="rf-scheme rf-scheme--grey-100 rf-scheme-border rf-scheme-border--left"></div>
```

#####Component as scheme

```scss
@include component-as-scheme($scheme:light, $name:grey-100, $module:null, $width: 0 0 0 0);
```

cette mixin permet au composant auquel elle est incluse de se comporter comme un scheme prédéfini.

le `$scheme` et le `$name` doivent correspondre à la structure de `$scheme-wrappers` 

Si on veut définir une bordure spécifique à ce composant (seulement à gauche par exemple), il faut donner à `$module` une valeur null et définir `$width` sur 4 valeurs (top right bottom left).

Si on veut associer à notre composant un outil spécifique qui permettra à l'utilisateur final de modifier ses bordures, il faut renseigner `$module` avec le nom du composant (ex: `rf-callout`) donner à `$width` une valeur unique ou les valeurs correspondantes. À partir de `$module`, la mixin va créer un premier outil correspondant à `.#{$module}-border` (ex: `rf-callout-border`) et ses modifiers correspondant à `.#{$module}-border--#{$side}` (ex: `rf-callout-border--left`).


#####Add scheme

```scss
@include add-scheme($name, $color, $border-color, $dark-color:$grey-800, $dark-border-color:$blue-france-200, $scheme:light);

```
Cette mixin permet de créer de nouveau scheme pour avoir d'autre coouleurs de fond (ou de bordure)

Le `$name` déterminera le modifier qui sera associé à ce nouveau scheme : `.rf-scheme--#{$name}`

Les 4 couleurs du scheme (cf l'[introduction](#Introduction)) sont définie par `$color $border-color $dark-color $dark-border-color`.

Enfin, `$scheme` permet  de définir le type de scheme (light, chromatic ou dark)

```scss
@include add-scheme('brown', $brown-300, $brown-500, $grey-700, $blue-france-200, chromatic);
```



##Elements

####Sets

Des sets de couleurs peuvent être assignées aux éléments descendant des schemes.
Les sets sont définis par la variable $scheme-sets dans _settings

```scss
$scheme-sets : (
        bf500: $blue-france-500 $blue-france-300 $grey-700,
        bf500-plain: $blue-france-500,
        w-b500: $white $blue-france-500,
        bf200-bf300: $blue-france-200 $blue-france-300,
        t-plain: transparent,
        t-w: transparent $white,
        g800: $grey-800 $white,
        g700: $grey-700 $grey-200,
        g600: $grey-600 $grey-300,
        g500: $grey-500 $grey-400,
        g400: $grey-400 $grey-500,
        g300: $grey-300 $grey-600,
        g200: $grey-200 $grey-700,
        g100: $grey-100 $grey-800,
        beige: $beige $grey-750,
        g600-g500: $grey-600 $grey-500,
        g400-t: $grey-400 transparent,
        w-g750: $white $grey-750,
        focus:$color-focus $color-focus-dark-mode,
        info:$info $info-dark-mode,
        success:$success $success-dark-mode,
        warning:$warning $warning-dark-mode,
        error:$error $error-dark-mode
) !global;
```

pour chaque set sont définis 3 valeurs de couleur :

1. la couleur quand contenu dans un scheme light
2. la couleur quand contenu dans un scheme dark et en dark mode
3. la couleur quand contenu dans un scheme chromatic

Lorsque les 2e et/ou 3e couleurs ne sont pas définies, c'est la 1e qui est utilisée en remplacement.

####Mixins décoratives

Plusieurs mixin permettent d'assigner ces sets de couleur à des propriétés spécifiques

#####Background

```scss
@include scheme-element-bg-color($set-name, $transition:true, $hover:false);
```
Cette mixin permet d'assigner une couleur de fond à l'élément.

`$set-name` correspond au nom du set comme défini dans `scheme-sets`.

`transition` ajoute une transition sur la propriété associée. Ces transitions sont associées à l'élément dans lequel est invoqué la mixin, ce qui permet d'ajouter sur cet élément des transitions sur plusieurs propriétés (background-color et color par exemple). Il est recommandé de passer ce paramètre à false sur des états pour ne pas écraser les multiples transitions.

`$hover` permet d'ajouter au survol de l'élément (comme pour un bouton) un calque blanc ou noir (suivant la luminosité des couleurs associées) avec une transparence adaptée. Il ajoute également le même effet quand l'élément est activé (pendant que le click est maintenu) en plus prononcé (transparence diminué de moitié).

 ```scss
 @include scheme-element-bg-color(bf500, true, true);
 ```
 
 #####Text
 
 ```scss
 @include scheme-element-text-color($set-name, $transition:true,  $transition:true);
 ```
 Cette mixin permet d'assigner une couleur de texte à l'élément.
 
 `$set-name` correspond au nom du set comme défini dans `scheme-sets`.
 
 `transition` ajoute une transition sur la propriété associée. Ces transitions sont associées à l'élément dans lequel est invoqué la mixin, ce qui permet d'ajouter sur cet élément des transitions sur plusieurs propriétés (background-color et color par exemple). Il est recommandé de passer ce paramètre à false sur des états pour ne pas écraser les multiples transitions.
 
```scss
@include scheme-element-text-color(g700, true);
```

#####Fill
 
 ```scss
 @include scheme-element-fill-color($set-name, $transition:true);
 ```
 Cette mixin permet d'assigner une couleur de fill à l'élément.
 
 `$set-name` correspond au nom du set comme défini dans `scheme-sets`.
 
 `transition` ajoute une transition sur la propriété associée. Ces transitions sont associées à l'élément dans lequel est invoqué la mixin, ce qui permet d'ajouter sur cet élément des transitions sur plusieurs propriétés (background-color et color par exemple). Il est recommandé de passer ce paramètre à false sur des états pour ne pas écraser les multiples transitions.
 
```scss
@include scheme-element-fill-color(bf500, true);
```

#####Border
 
 ```scss
 @include scheme-element-border-color($set-name, $transition:true, $side:'', $value:1px solid $COLOR);
 ```
 Cette mixin permet d'assigner une couleur de bordure à l'élément.
 
 `$set-name` correspond au nom du set comme défini dans `scheme-sets`.
 
 `transition` ajoute une transition sur la propriété associée. Ces transitions sont associées à l'élément dans lequel est invoqué la mixin, ce qui permet d'ajouter sur cet élément des transitions sur plusieurs propriétés (background-color et color par exemple). Il est recommandé de passer ce paramètre à false sur des états pour ne pas écraser les multiples transitions.
 
 `$side` permet de limiter la bordure à coté particulier. Les valeurs possibles sont  top, right, bottom ou left
 
 `$value` définit la valeur assignée à la propriété border. 
 $COLOR sera remplacé par la couleur approprié de la combinaison.
 Attention à ne pas asigner de valeur à $COLOR.
 
```scss
@include scheme-element-border-color(bf500, true, left, 3px dotted $COLOR);
```

#####Outline
 
 ```scss
 @include scheme-element-outline-color($set-name, $transition:true, $value:'1px solid $color')
 ```
 Cette mixin permet d'assigner une couleur d'outline à l'élément.
 
  `$set-name` correspond au nom du set comme défini dans `scheme-sets`.
  
  `transition` ajoute une transition sur la propriété associée. Ces transitions sont associées à l'élément dans lequel est invoqué la mixin, ce qui permet d'ajouter sur cet élément des transitions sur plusieurs propriétés (background-color et color par exemple). Il est recommandé de passer ce paramètre à false sur des états pour ne pas écraser les multiples transitions.
  
  `$value` définit la valeur assignée à la propriété outline. 
   $COLOR sera remplacé par la couleur approprié de la combinaison.
   Attention à ne pas asigner de valeur à $COLOR.
 
```scss
@include scheme-element-outline-color(bf500, true, '1px dotted $color');
```


#####Box-shadow
 
 ```scss
 @include scheme-element-box-shadow-color($set-name, $transition:true, $value:inset 0 0 0 1px $COLOR);
 ```
 Cette mixin permet d'assigner une couleur d'outline à l'élément.
 
   `$set-name` correspond au nom du set comme défini dans `scheme-sets`.
   
   `transition` ajoute une transition sur la propriété associée. Ces transitions sont associées à l'élément dans lequel est invoqué la mixin, ce qui permet d'ajouter sur cet élément des transitions sur plusieurs propriétés (background-color et color par exemple). Il est recommandé de passer ce paramètre à false sur des états pour ne pas écraser les multiples transitions.
   
   `$value` définit la valeur assignée à la propriété box-shadow. 
    $COLOR sera remplacé par la couleur approprié de la combinaison.
    Attention à ne pas asigner de valeur à $COLOR.
 
```scss
@include scheme-element-box-shadow-color(bf500, true, inset 1px 1px 0 0 $COLOR, inset -1px -1px 0 0 $COLOR);
```

####Ajouter un set de couleur

```scss
@include add-scheme-set($set-name, $light, $dark:null, $chromatic:null);
```
Cette mixin permet d'ajouter de nouvelles combinaisons de couleurs 
`$set-name` correspond au nom qui pourra être utilisé par les mixins décoratives.
`$light` correspond à la couleur que prendra l'élément contenu dans un scheme light.
`$dark` correspond à la couleur que prendra l'élément contenu dans un scheme dark et en dark mode.
`$chromatic` correspond à la couleur que prendra l'élément contenu dans un scheme chromatic.

```scss
@include add-scheme-set(special, $blue-france-300, $dark:$blue-dark-600, $chromatic:$grey-300);
```


##Dark mode

Pour activer le `dark mode`, ajouter la classe `.rf-dark-mode` au même niveau que la classe `.rf-body`

Par défaut, le changement de couleur se fait avec une transition d'une durée de 0.3 seconds. 
Pour enlever cette transition, ajouter la classe modifier `.rf-dark-mode--sudden` au même niveau.


###Toggle switch

Le composant `#rf-dark-mode-toggle-switch` est un switch permettant le passage du light mode au dark mode.

Il identifie les préférences utilisateur du navigateur concernant le dark-mode via la media-query `prefers-color-scheme`

Il stocke en localStorage tout changement effectué via le switch pour retrouver le même état sur une prochaine session.

```html
<input type="checkbox" id="rf-dark-mode-toggle-switch" >
<label for="rf-dark-mode-toggle-switch" ></label>

```