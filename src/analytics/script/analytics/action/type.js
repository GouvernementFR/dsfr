export const Type = {
  // impression
  IMPRESSION: {
    id: 'impression', // element appeared in the page
    isSingular: true,
    isBeginning: true,
    attributed: false,
    type: 'impression'
  },
  // interaction
  CLICK: {
    id: 'click', // generic click interaction
    isBeginning: true,
    attributed: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  INTERNAL: {
    id: 'internal', // anchor click redirecting on an internal url
    isBeginning: true,
    attributed: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  EXTERNAL: {
    id: 'external', // anchor click redirecting on an external url
    isBeginning: true,
    attributed: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  DOWNLOAD: {
    id: 'download', // anchor click downloading a file
    isBeginning: true,
    attributed: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  BUTTON: {
    id: 'button', // button click
    isBeginning: true,
    attributed: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  DOUBLE_CLICK: {
    id: 'dblclick', // double click
    isBeginning: true,
    attributed: true,
    type: 'interaction',
    event: 'dblclick',
    method: 'eventListener'
  },
  // event
  OPEN: {
    id: 'open', // open event
    isSingular: true,
    attributed: false,
    type: 'event',
    method: 'eventListener'
  },
  COMPLETE: {
    id: 'complete', // complete event
    isSingular: true,
    attributed: false,
    type: 'event',
    method: 'eventListener'
  },
  FOCUS: {
    id: 'focus', // focus event
    isSingular: true,
    attributed: false,
    type: 'event',
    method: 'eventListener'
  },
  ERROR: {
    id: 'error', // error event
    isSingular: true,
    attributed: false,
    type: 'event'
  },
  ADD: {
    id: 'add', // add event
    isSingular: true,
    attributed: false,
    type: 'event'
  },
  REMOVE: {
    id: 'remove', // remove event
    isSingular: true,
    attributed: false,
    type: 'event'
  },
  DISPLAY: {
    id: 'display', // display event
    isSingular: true,
    attributed: false,
    type: 'event'
  },
  CHANGE: {
    id: 'change', // input event change
    isSingular: true,
    attributed: true,
    type: 'event',
    event: 'change',
    method: 'change'
  },
  PROGRESS: {
    id: 'progress', // video retention event with percent of the part reached
    isBeginning: true,
    attributed: true,
    type: 'event'
  },
  // component interaction
  SHARE: {
    id: 'share', // component share click (share)
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  PRESS: {
    id: 'press', // component press click (pressable tag)
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  RELEASE: {
    id: 'release', // component release click (pressable tag)
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  DISMISS: {
    id: 'dismiss', // component dismiss click (dismissible tag)
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  UPLOAD: {
    id: 'upload', // component upload click (upload)
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  CHECK: {
    id: 'check', // component check click (checkbox, radio, toggle)
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  UNCHECK: {
    id: 'uncheck', // component uncheck click (checkbox, radio, toggle)
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  SELECT: {
    id: 'select', // component select change (select)
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  SUBSCRIBE: {
    id: 'subscribe', // component subscribe click (follow)
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  // component event
  DISCLOSE: {
    id: 'disclose', // component disclose event (accordion, modal, tab)
    isBeginning: true,
    attributed: false,
    type: 'event'
  },
  SEARCH: {
    id: 'search', // component disclose event (accordion, modal, tab)
    isBeginning: true,
    attributed: false,
    type: 'event'
  },
  SHOW: {
    id: 'show', // component show event (tooltip)
    isSingular: true,
    attributed: false,
    type: 'event'
  },
  HIDE: {
    id: 'hide', // component hide event (tooltip)
    isSingular: true,
    attributed: false,
    type: 'event'
  },
  // video
  AUTOPLAY: {
    id: 'autoplay', // video autoplay event
    isBeginning: true,
    attributed: false,
    type: 'event'
  },
  PLAY: {
    id: 'play', // video play click
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  PAUSE: {
    id: 'pause', // video pause click
    isBeginning: true,
    attributed: false,
    type: 'interaction'
  },
  END: {
    id: 'end', // video end event
    isBeginning: true,
    attributed: false,
    type: 'event'
  }
};

export default Type;
