#!/usr/bin/env node

const yargs = require('yargs');
const generateMarkdown = require('./generate/markdown');
const build = require('./build/build');
const { buildExample, buildMap } = require('./build/example');
const root = require('./utilities/root');
const buildStyles = require('./build/styles');
const { copyStyles } = require('./build/copy');
const { copyScripts } = require('./build/copy');
const buildScripts = require('./build/scripts');
const buildRedirect = require('./build/redirect');
const generatePackage = require('./generate/package');

yargs
  .scriptName('tools')
  .command(
    'build',
    'compilation de package',
    (yargs) => {
      return yargs
        .usage('Usage: $0 -p core -d ./ -t scripts -f core')
        .example(
          '$0 -p core -d . -t scripts -f core',
          'compile les fichiers scripts du package core à l’emplacement de l’appel'
        )
        .option('package', {
          alias: 'p',
          describe: 'liste des id des packages à inclure dans la compilation',
          type: 'array'
        })
        .option('target', {
          alias: 't',
          describe: 'limite la compilation aux styles ou aux scripts le cas échéant. [styles, scripts]',
          type: 'string',
          nargs: 1
        });
    }, (argv) => {
      console.log('build');
      build(false, false, false);
    })
  .command(
    'generate',
    'génération de fichier',
    (yargs) => {
      return yargs
        .usage('Usage: $0 -p core -t md')
        .example(
          '$0 -p core -t md',
          'génère le readme du package core'
        )
        .option('package', {
          alias: 'p',
          describe: 'le package pour lequel les fichiers seront générés',
          type: 'string'
        })
        .option('target', {
          alias: 't',
          describe: 'limite la compilation aux styles ou aux scripts le cas échéant. [md]',
          type: 'string',
          nargs: 1
        });
    }, (argv) => {
      console.log('command generate');
      if (argv.target === 'md') generateMarkdown(argv.package);
    })
  .command(
    'example',

  )
  .command(
    'tmp',
    '',
    (yargs) => {
      return yargs
        .usage('Usage: $0')
        .example(
          '$0',
          ''
        );
    }, (argv) => {
      const pck = 'skiplinks';
      //copyScripts(pck);
      //copyStyles(pck);
      //buildScripts([pck], 'public/packages', `public/dist/js/${pck}`, pck, true, true);
      //buildStyles([pck], 'public/packages', `public/dist/css/${pck}`, pck, true, true);
      //buildMap('public/example');
      //generatePackage();
      //generateMarkdown(pck);
      buildExample([pck], 'public/example');
    })
  .command(
    'release',
    '',
    (yargs) => {
      return yargs
        .usage('Usage: $0')
        .example(
          '$0',
          ''
        );
    }, (argv) => {
      build(true, true, true);
    })
  .command(
    'deploy',
    '',
    (yargs) => {
      return yargs
        .usage('Usage: $0')
        .example(
          '$0',
          ''
        );
    }, (argv) => {
      build(true, false, false);
      buildRedirect();
    })
  .help()
  .argv;
