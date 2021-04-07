'use strict';

const Pa11y = require('pa11y');
const Puppeteer = require('puppeteer');
const Express = require('express');
const FS = require('fs');
const { getPackages } = require('../utilities/config');
const log = require('../utilities/log');

const displayResults = (results, darkmode) => {
  log.info(`${darkmode ? '[DARKMODE] ' : ''}Pa11y automated tests for : ${results.documentTitle} : `);
  if (results.issues.length) {
    log.error(`Found ${results.issues.length} error(s)\n`);

    results.issues.map(issue => {
      log.error(`Error found at ${issue.selector}\n${issue.context}\n ${issue.message}`);
    });

    process.exit(1);
  } else {
    log(38, 'No errors');
  }
};

// Run pa11y tests on each package
const runPa11yTests = async (urls) => {
  const browser = await Puppeteer.launch();

  const tests = urls.map(async (url) => {
    const page = await browser.newPage();

    // pa11y
    await Pa11y(url, {
      browser,
      page,
      timeout: 120000,
      ignore: ['WCAG2AA.Principle4.Guideline4_1.4_1_1.F77'], /* Ignore duplicate ID rule */
      hideElements: '.is-pa11y-hidden, .code-toolbar'
    }).then(results => {
      displayResults(results);
    });

    // pa11y - dark mode
    await Pa11y(url, {
      browser,
      page,
      timeout: 120000,
      hideElements: '.is-pa11y-hidden, .code-toolbar',
      ignore: ['WCAG2AA.Principle4.Guideline4_1.4_1_1.F77'], /* Ignore duplicate ID rule */
      actions: [
        'check field #theme-checkbox'
      ]
    }).then(results => {
      displayResults(results, true);
    });

    await page.close();
  });

  await Promise.all(tests);

  await browser.close();
};

const testPa11y = async (packages) => {
  if (!packages) packages = getPackages();
  // Start a local server to run tests
  const app = Express();
  const server = app.listen('8081');
  app.use(Express.static('./public/'));

  // Get all packages
  const urls = [];
  packages.map(pkg => {
    if (FS.existsSync(`./public/example/${pkg}/index.html`)) {
      urls.push(`http://localhost:8081/example/${pkg}/`);
    }
  });

  // Run tests
  await runPa11yTests(urls);

  // Close server
  server.close();
};

module.exports = testPa11y;
