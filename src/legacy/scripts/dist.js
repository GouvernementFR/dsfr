/* eslint-disable no-new */

import { ObjectFitPolyfill } from './object-fit-polyfill/object-fit-polyfill';
import { dse } from '@gouvfr/core';

let count;

function loaded () {
  count--;
  if (count === 0) {
    new ObjectFitPolyfill([dse('content-media__img img'), dse('card__img img'), dse('responsive-vid')]);
  }
}

if (window.MSInputMethodContext && document.documentMode) {
  const scripts = [

    'https://unpkg.com/focus-within-polyfill/dist/focus-within-polyfill.js'
  ];

  count = scripts.length;

  for (let i = 0; i < scripts.length; i++) {
    const script = document.createElement('script');
    script.onload = loaded;
    script.src = scripts[i];
    document.head.appendChild(script);
  }
}
