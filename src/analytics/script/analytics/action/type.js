export const Type = {
  // impression
  IMPRESSION: {
    id: 'impression', // element appeared in the page
    mode: 'in',
    binding: false,
    type: 'impression'
  },
  // interaction
  CLICK: {
    id: 'click', // generic click interaction
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  INTERNAL: {
    id: 'internal', // anchor click redirecting on an internal url
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  EXTERNAL: {
    id: 'external', // anchor click redirecting on an external url
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  DOWNLOAD: {
    id: 'download', // anchor click downloading a file
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  BUTTON: {
    id: 'button', // button click
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  DOUBLE_CLICK: {
    id: 'button', // button click
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'dblclick',
    method: 'eventListener'
  },
  // event
  OPEN: {
    id: 'open', // open event
    mode: null,
    binding: false,
    type: 'event',
    method: 'eventListener'
  },
  COMPLETE: {
    id: 'complete', // complete event
    mode: null,
    binding: false,
    type: 'event',
    method: 'eventListener'
  },
  FOCUS: {
    id: 'focus', // focus event
    mode: null,
    binding: false,
    type: 'event',
    method: 'eventListener'
  },
  ERROR: {
    id: 'error', // error event
    mode: null,
    binding: false,
    type: 'event'
  },
  ADD: {
    id: 'add', // add event
    mode: null,
    binding: false,
    type: 'event'
  },
  REMOVE: {
    id: 'remove', // remove event
    mode: null,
    binding: false,
    type: 'event'
  },
  DISPLAY: {
    id: 'display', // display event
    mode: null,
    binding: true,
    type: 'event'
  },
  CHANGE: {
    id: 'change', // input event change
    mode: 'out',
    binding: true,
    type: 'event',
    event: 'change',
    method: 'change'
  },
  PROGRESS: {
    id: 'progress', // video retention event with percent of the part reached
    mode: 'out',
    binding: true,
    type: 'event'
  },
  // component interaction
  SHARE: {
    id: 'share', // component share click (share)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  PRESS: {
    id: 'press', // component press click (pressable tag)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  RELEASE: {
    id: 'release', // component release click (pressable tag)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  DISMISS: {
    id: 'dismiss', // component dismiss click (dismissible tag)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  UPLOAD: {
    id: 'upload', // component upload click (upload)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  CHECK: {
    id: 'check', // component check click (checkbox, radio, toggle)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  UNCHECK: {
    id: 'uncheck', // component uncheck click (checkbox, radio, toggle)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  SELECT: {
    id: 'select', // component select change (select)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  SUBSCRIBE: {
    id: 'subscribe', // component subscribe click (follow)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  // component event
  DISCLOSE: {
    id: 'disclose', // component disclose event (accordion, modal, tab)
    mode: null,
    binding: false,
    type: 'event'
  },
  SHOW: {
    id: 'show', // component show event (tooltip)
    mode: null,
    binding: false,
    type: 'event'
  },
  HIDE: {
    id: 'hide', // component hide event (tooltip)
    mode: null,
    binding: false,
    type: 'event'
  },
  // video
  AUTOPLAY: {
    id: 'autoplay', // video autoplay event
    mode: 'out',
    binding: false,
    type: 'event'
  },
  PLAY: {
    id: 'play', // video play click
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  PAUSE: {
    id: 'pause', // video pause click
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  END: {
    id: 'end', // video end event
    mode: 'out',
    binding: false,
    type: 'event'
  }
};

export default Type;
