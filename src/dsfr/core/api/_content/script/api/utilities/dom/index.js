import { addClass, hasClass, removeClass } from './classes.js';
import { queryParentSelector, querySelectorAllArray } from './query-selector.js';

const dom = {};

dom.addClass = addClass;
dom.hasClass = hasClass;
dom.removeClass = removeClass;
dom.queryParentSelector = queryParentSelector;
dom.querySelectorAllArray = querySelectorAllArray;

export default dom;
