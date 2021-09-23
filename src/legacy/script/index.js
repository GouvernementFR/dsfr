/* eslint-disable no-new */

import './polyfill-io/custom-event-polyfill.min';
import './polyfill-io/add-event-listener-polyfill.min';
import './polyfill-io/foreach-polyfill.min';
import './polyfill-io/contains-polyfill.min';
import './polyfill-io/matches-polyfill.min';

import './css-vars-ponyfill/css-vars-ponyfill.min';
// import './custom-event-polyfill/custom-event-polyfill';
// import './contains-polyfill/contains-polyfill.min';
// import './focus-within-polyfill/focus-within-polyfill';
// import './element-matches-polyfill/element-matches-polyfill';
// import './foreach-polyfill/foreach-polyfill';
import { ObjectFitPolyfill } from './object-fit-polyfill/object-fit-polyfill';

new ObjectFitPolyfill('.${prefix}-content-media__img img', '.${prefix}-card__img img', '${prefix}-responsive-vid');
