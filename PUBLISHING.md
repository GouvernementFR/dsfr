
# Publishing

Le Design System de L'Etat est mis à disposition des utilisateurs sous la forme d'un fichier .zip téléchargeable, mais également sous forme de packages NPM.
Ces derniers peuvent être mis à jour sur NPM directement via l'outil [Lerna](https://github.com/lerna/lerna).
Lerna est un outil permettant de gérer des packages et leurs versions au sein d'un monorepo comme celui du Design System, ainsi que la montée en version de ceux-ci et leur publication sur NPM.

Lerna est configuré en mode "locked", c'est-à-dire qu'une version globale du Design System est publiée pour tous les packages, mais que des correctifs peuvent être appliqués de manière isolée à certains d'entre eux.
La gestion sémantique de version SemVer prévoit d'incrémenter de numéro de version (MAJEUR.MINEUR.CORRECTIF) de la façon suivante :

1.  le numéro de version MAJEUR quand il y a des changements non rétrocompatibles,
2.  le numéro de version MINEUR quand il y a des ajouts de fonctionnalités rétrocompatibles,
3.  le numéro de version de CORRECTIF quand il y a des corrections d’anomalies rétrocompatibles.

## Git
La version publiée sur NPM doit être la version à jour sur la branch `master` de ce repository. Il est de ce fait nécessaire de bien vérifier que l'ensemble des packages soient à jour avant publication.

Lerna va automatiquement créer un commit de publication, et pusher automatiquement un tag de release pour cette nouvelle version.

## Tests automatisés

Il est nécessaire de faire un dernier test automatisé afin de vérifier que tous les nouveaux ajouts sont conformes, à l'aide de l a commande :

```
yarn test
```

## Compilation des sources

Il faut ensuite compiler les sources afin de générer le dossier `dist` pour chaque package, avec les dernières versions des fichiers CSS et Javascript, avec la commande `yarn build`.

## Publication

Afin de publier une nouvelle version du Design System il est obligatoire d'avoir un compte NPM membre de l'organisation `@gouvfr`, et donc d'avoir les droits de publication sur les packages de celui-ci.

Une fois placé à la racine du projet, il faut donc dans un premier temps se connecter à npm via la commande `npm login`.

Pour publier la nouvelle version, utilisez la commande suivante :

```
npx lerna publish
```

Lerna créera un commit de release sous la forme `chore(release): %s`, ou `%s` sera remplacé par le numéro de verion (Ex : `chore(release): v0.3.0`)

A noter qu'il est possible de préciser un message de commit personnalisé, en précisant à la commande de ne pas prendre en compte les hooks de pre-commit :

```
npx lerna publish -m "v0.3.0 Design System de l'Etat" --no-commit-hooks
```

L'outil vous demandera ensuite sur quelle numéro de version passer (Montée majeure, mineure, ou patch), et déterminer quels packages sont impactés par cette nouvelle publication.

Il est à noter que pour tout changement de version majeur, l'ensemble des packages sera mis à jour, même si certains n'ont pas évolué depuis la dernière publication.

Lerna s'occupe automatiquement de créer un nouveau commit de release, mettre à jour la version des packages mis à jour, et pusher les tags et release sur Github.
