const { execFileSync } = require('child_process');
const root = require('../utilities/root');

const VIEWPORTS = [
  {
    label: 'lg',
    width: 1247,
    height: 768
  }
];

const RECURRENT = {
  delay: 500,
  removeSelectors: [
    '.snippet-accordion',
    '.fr-display-button'
  ],
  selectors: [
    '.example-layout'
  ],
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 0,
  requireSameDimensions: true,
  viewports: VIEWPORTS
};

const testVisual = (packages) => {
  for (const pck of packages) {
    if (pck.test && pck.test.visual) {
      const scenarios = pck.test.visual.scenarios.map(scenario => {
        const full = {
          label: scenario.label,
          url: `http://localhost:8080/${pck.example.root.dest.replace('index.html', '')}${scenario.url}`,
          ...RECURRENT,
          ...(scenario.specific || {})
        };

        return full;
      });
    }
  }
};

const REPORT = root('backstop_data/html_report/');

const openReport = () => {
  const platform = process.platform;
  const url = encodeURI(REPORT);

  switch (platform) {
    case 'android':
    case 'linux':
      execFileSync('xdg-open', [url]);
      break;

    case 'darwin':
      execFileSync('open', [url]);
      break;

    case 'win32':
      execFileSync('cmd', ['/c', 'start', url]);
      break;

    default:
      throw new Error(`Platform ${platform} isn't supported.`);
  }
};

const generateReference = (settings) => {

};

module.exports = { testVisual, generateReference };
