
module.exports = {
  id: 'DSFR',
  viewports: [
    {
      label: 'xs',
      width: 575,
      height: 768
    },
    {
      label: 'md',
      width: 991,
      height: 768
    },
    {
      label: 'lg',
      width: 1247,
      height: 768
    }
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  scenarios: scenaris(),
  // scenarios: [
  // {
  //   label: 'accordion-closed',
  //   url: 'http://localhost:8080/example/component/accordion/',
  //   delay: 500,
  //   removeSelectors: ['.snippet-accordion', '.fr-display-button'],
  //   selectors: ['.example-layout'],
  //   selectorExpansion: true,
  //   expect: 0,
  //   misMatchThreshold: 0,
  //   requireSameDimensions: true,
  //   viewports: [
  //     {
  //       label: 'lg',
  //       width: 1247,
  //       height: 768
  //     }
  //   ]
  // },
  // {
  //   label: 'accordion-opened',
  //   url: 'http://localhost:8080/example/component/accordion/',
  //   delay: 500,
  //   removeSelectors: ['.snippet-accordion', '.fr-display-button'],
  //   hoverSelector: '',
  //   clickSelector: '.fr-accordion__btn',
  //   postInteractionWait: 500,
  //   selectors: ['.example-layout'],
  //   misMatchThreshold: 0,
  //   requireSameDimensions: true,
  //   viewports: [
  //     {
  //       label: 'lg',
  //       width: 1247,
  //       height: 768
  //     }
  //   ]
  // },
  // {
  //   label: 'accordion-group-closed',
  //   url: 'http://localhost:8080/example/component/accordion/group/',
  //   delay: 500,
  //   removeSelectors: ['.snippet-accordion', '.fr-display-button'],
  //   selectors: ['.example-layout'],
  //   selectorExpansion: true,
  //   expect: 0,
  //   misMatchThreshold: 0,
  //   requireSameDimensions: true,
  //   viewports: [
  //     {
  //       label: 'lg',
  //       width: 1247,
  //       height: 768
  //     }
  //   ]
  // },
  // {
  //   label: 'accordion-group-opened',
  //   url: 'http://localhost:8080/example/component/accordion/group/',
  //   delay: 500,
  //   removeSelectors: ['.snippet-accordion', '.fr-display-button'],
  //   hoverSelector: '',
  //   clickSelector: '.fr-accordion__btn',
  //   postInteractionWait: 4000,
  //   selectors: ['.example-layout'],
  //   misMatchThreshold: 0,
  //   requireSameDimensions: true,
  //   viewports: [
  //     {
  //       label: 'lg',
  //       width: 1247,
  //       height: 768
  //     }
  //   ]
  // },
  // {
  //   label: 'accordion-imbrication-closed',
  //   url: 'http://localhost:8080/example/component/accordion/imbrication/',
  //   delay: 500,
  //   removeSelectors: ['.snippet-accordion', '.fr-display-button'],
  //   selectors: ['.example-layout'],
  //   selectorExpansion: true,
  //   expect: 0,
  //   misMatchThreshold: 0,
  //   requireSameDimensions: true,
  //   viewports: [
  //     {
  //       label: 'lg',
  //       width: 1247,
  //       height: 768
  //     }
  //   ]
  // },
  // {
  //   label: 'accordion-imbrication-opened',
  //   url: 'http://localhost:8080/example/component/accordion/imbrication/',
  //   delay: 500,
  //   removeSelectors: ['.snippet-accordion', '.fr-display-button'],
  //   hoverSelector: '',
  //   clickSelector: '.fr-accordion__btn',
  //   postInteractionWait: 4000,
  //   selectors: ['.example-layout'],
  //   misMatchThreshold: 0,
  //   requireSameDimensions: true,
  //   onReadyScript: 'accordion-imbrication-opened.js',
  //   viewports: [
  //     {
  //       label: 'lg',
  //       width: 1247,
  //       height: 768
  //     }
  //   ]
  // }
  // ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
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
