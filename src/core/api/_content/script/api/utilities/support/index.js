import { supportLocalStorage, supportAspectRatio } from './browser-support.js';

const support = {};

support.supportLocalStorage = supportLocalStorage;

support.supportAspectRatio = supportAspectRatio;

export default support;
