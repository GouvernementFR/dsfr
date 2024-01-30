'use strict';

const Pa11y = require('pa11y');
const Puppeteer = require('puppeteer');
const Express = require('express');
const log = require('../utilities/log');

const displayResults = (results, darkmode) => {
  log.info(`${darkmode ? '[DARKMODE] ' : ''}Pa11y automated tests for : ${results.documentTitle} : `);
  if (results.issues.length) {
    log.error(`Found ${results.issues.length} error(s)\n`);

    results.issues.forEach(issue => {
      log.error(`Error found at ${issue.selector}\n${issue.context}\n ${issue.message}`);
    });

    process.exit(1);
  } else {
    log(33, 'No errors');
  }
};

// Run pa11y tests on each package
const runPa11yTest = async (path, browser, hasDarkMode) => {
  const hideElements = '.is-pa11y-hidden, .code-toolbar, a:not([href]), input:disabled + label, [class*="--disabled"] > label, [class*="--disabled"] span';

  log(38, `\n${path}`);
  const page = await browser.newPage();

  const url = `http://localhost:8081/${path}`;

  // pa11y
  await Pa11y(url, {
    browser,
    page,
    timeout: 120000,
    ignore: ['WCAG2AA.Principle4.Guideline4_1.4_1_1.F77'], /* Ignore duplicate ID rule */
    hideElements: hideElements
  }).then(results => {
    displayResults(results);
  });

  if (hasDarkMode) {
    // pa11y - dark mode
    await Pa11y(url, {
      browser,
      page,
      timeout: 120000,
      hideElements: hideElements,
      ignore: ['WCAG2AA.Principle4.Guideline4_1.4_1_1.F77'], /* Ignore duplicate ID rule */
      actions: [
        'check field #fr-radios-theme-dark'
      ]
    }).then(results => {
      displayResults(results, true);
    });
  }

  await page.close();
};

const getPackageNodeDest = (node) => {
  const dest = [node.dest];
  if (node.children) dest.push(...node.children.map(child => getPackageNodeDest(child)));
  return dest.flat(1000);
};

const testPa11y = async (packages) => {
  // Start a local server to run tests
  const app = Express();
  const server = app.listen('8081');
  app.use(Express.static('./'));

  const publisheds = packages.filter(pck => !pck.draft);

  const browser = await Puppeteer.launch();

  for (const pck of publisheds) {
    if (!pck.example.root) continue;
    const paths = getPackageNodeDest(pck.example.root);

    for (const path of paths) await runPa11yTest(path, browser, !pck.noParameter);
  }

  await browser.close();

  // Close server
  server.close();
};

module.exports = testPa11y;
