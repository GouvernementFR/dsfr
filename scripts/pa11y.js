'use strict';

const Pa11y = require('pa11y');
const Puppeteer = require('puppeteer');
const Express = require('express');
const FS = require('fs');

const displayResults = (results, darkmode) => {
  console.log(`${darkmode ? '[DARKMODE] ' : ''}Pa11y automated tests for : ${results.documentTitle} : `);
  if(results.issues.length) {
    console.log(`Found ${results.issues.length} error(s)\n`);

    results.issues.map(issue => {
      console.log(`Error found at ${issue.selector}`);
      console.log(`${issue.context}\n ${issue.message}`);
    });

    process.exit(1);
  }else {
    console.log('No errors');
  }
};

// Run pa11y tests on each package
const runPa11yTests = async(urls) => {
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
        'check field #rf-dark-mode-toggle-switch'
      ],
    }).then(results => {
      displayResults(results, true);
    });

    await page.close();
  });

  await Promise.all(tests);

  await browser.close();
};

// Start a local server to run tests
(async() => {
  // Start server
  const app = Express();
  const server = app.listen('8080');
  app.use(Express.static('./test/'));

  // Get all packages
  const urls = [];
  const packages = FS.readdirSync('./packages', {withFileTypes: true}).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
  packages.map(pkg => {
    if(FS.existsSync(`./test/${pkg}/index.html`)) {
      urls.push(`http://localhost:8080/${pkg}/`);
    }
  });

  // Run tests
  await runPa11yTests(urls);

  // Close server
  server.close();
})();
