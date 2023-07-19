import { addClass, hasClass, removeClass } from './classes.js';
import { queryParentSelector, querySelectorAllArray } from './query-selector.js';
import { queryActions } from './actions';
import { uniqueId } from './id';

const dom = {};

dom.addClass = addClass;
dom.hasClass = hasClass;
dom.removeClass = removeClass;
dom.queryParentSelector = queryParentSelector;
dom.querySelectorAllArray = querySelectorAllArray;
dom.queryActions = queryActions;
dom.uniqueId = uniqueId;

export default dom;
