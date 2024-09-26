import ns from '../../utilities/namespace.js';

const RootEvent = {
  READY: ns.event('ready'),
  START: ns.event('start'),
  STOP: ns.event('stop'),
  RENDER: ns.event('render'),
  RESIZE: ns.event('resize'),
  BREAKPOINT: ns.event('breakpoint'),
  SCROLL_LOCK: ns.event('scroll-lock'),
  SCROLL_UNLOCK: ns.event('scroll-unlock')
};

export { RootEvent };
