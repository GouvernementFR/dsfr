import api from '../../../api.js';

const TABS_SELECTOR = api.ns.selector('tabs');
const TABS_CLASS = api.ns('tabs');
const TAB_CLASS = api.ns('tabs__tab');
const PANEL_CLASS = api.ns('tabs__panel');
const LIST_CLASS = api.ns('tabs__list');

const TRANSITION_TIME = 100;

export { TABS_SELECTOR, TABS_CLASS, TAB_CLASS, PANEL_CLASS, LIST_CLASS, TRANSITION_TIME };
