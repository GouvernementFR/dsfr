/* eslint-disable no-new */

import { ObjectFitPolyfill } from './object-fit-polyfill/object-fit-polyfill';

if (window.MSInputMethodContext && document.documentMode) {
  const scripts = [
    'https://unpkg.com/css-vars-ponyfill@2/dist/css-vars-ponyfill.min.js',
    'https://polyfill.io/v3/polyfill.min.js?features=Event',
    'https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js'
  ];

  for (let i = 0; i < scripts.length; i++) document.write('<script src="' + scripts[i] + '"><\x2fscript>');

  new ObjectFitPolyfill('.${prefix}-content-media__img img', '.${prefix}-card__img img', '${prefix}-responsive-vid');
}
