const backstop = require('backstopjs');

const BACKSTOP_CONFIG = {
  id: 'DSFR',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  paths: {
    bitmaps_reference: '.backstop_data/bitmaps_reference',
    bitmaps_test: '.backstop_data/bitmaps_test',
    engine_scripts: '.backstop_data/engine_scripts',
    html_report: '.backstop_data/html_report',
    ci_report: '.backstop_data/ci_report'
  },
  report: [],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};

const VIEWPORTS = [
  {
    label: 'xs',
    width: 320,
    height: 768
  },
  {
    label: 'sm',
    width: 576,
    height: 768
  },
  {
    label: 'md',
    width: 768,
    height: 768
  },
  {
    label: 'lg',
    width: 992,
    height: 768
  },
  {
    label: 'xl',
    width: 1248,
    height: 768
  }
];

const SCENARIOS_CONFIG = {
  delay: 5000,
  removeSelectors: [
    '.snippet-accordion',
    '.fr-display-button'
  ],
  selectors: [
    '.example-layout'
  ],
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 0.3,
  requireSameDimensions: true
};

const generateConfig = (packages) => {
  for (const pck of packages) {
    if (pck.test && pck.test.visual) {
      const scenarios = pck.test.visual.scenarios.map(scenario => {
        const full = {
          label: scenario.label,
          url: `http://localhost:8080/${pck.example.root.dest.replace('index.html', '')}${scenario.url || ''}`,
          ...SCENARIOS_CONFIG,
          ...(scenario.specific || {})
        };
        return full;
      });

      const config = {
        viewports: VIEWPORTS,
        scenarios: scenarios,
        ...BACKSTOP_CONFIG
      };
      return config;
    }
  }
};

const testVisual = (packages, filter) => {
  const config = generateConfig(packages, filter);
  const packageIds = packages.map(pck => {
    return pck.id;
  });
  backstop('test', { config: config, filter: filter }).then(() => {
    console.log('Tests de regression visuel passés : ', packageIds);
  }).catch(() => {
    openReport(packages);
  });
};

const generateReference = (settings) => {
  const config = generateConfig(settings.packages);
  backstop('approve', { config: config, filter: settings.filter });
};

const openReport = (packages) => {
  const config = generateConfig(packages);
  backstop('openReport', { config: config });
};

module.exports = { testVisual, generateReference, openReport };
