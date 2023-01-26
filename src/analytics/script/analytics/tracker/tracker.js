import api from '../api.js';
// import { ActionTypes } from './action-types';
import { Init } from './init';
import normalize from './normalize.js';

class Tracker {
  constructor () {
    this._requestUid = false;
    this._configure(api);
  }

  _configure (api) {
    switch (true) {
      case api.internals !== undefined && api.internals.configuration !== undefined && api.internals.configuration.analytics !== undefined && api.internals.configuration.analytics.domain !== undefined:
        this._config = api.internals.configuration.analytics;
        break;

      case api.analytics !== undefined && api.analytics.domain !== undefined:
        this._config = api.analytics;
        break;

      default:
        api.inspector.warn('analytics configuration is incorrect or missing (required : domain)');
        return;
    }

    if (this._config.uid) this.setUserId(this._config.uid);

    this._init = new Init();
    this._init.configure(this._config, this._start.bind(this));
  }

  _start () {
    if (this._config.preventPageTracking !== true) {
      this.trackPage(
        this._config.path || document.location.href,
        this._config.referrer || document.referrer,
        this._config.title || document.title, this._config.group);
    }
  }

  get isAvailable () {
    return typeof window.EA_push === 'function';
  }

  setUserId (id) {
    this._requestUid = true;
    this._uid = id;
  }

  get uid () {
    return this._uid;
  }

  trackPage (path, referrer, title, group, data) {
    const layer = [];
    if (this._requestUid && this._uid) layer.push('uid', this._uid);

    if (path) layer.push('path', path);
    else {
      api.inspector.error('trackPage method requires a valid path');
      return;
    }

    if (referrer) layer.push('referrer', referrer);
    else {
      api.inspector.error('trackPage method requires a valid referrer');
      return;
    }

    if (title) layer.push('page_title', normalize(title));
    if (group) layer.push('pagegroup', normalize(group));

    this._push(layer);
  }

  _push (layer, type) {
    if (!this.isAvailable) return;
    const args = [layer];
    // const applying = [layer.map((item, index, array) => index % 2 === 1 || array.length === 1 ? this._normalise(item) : item)];
    if (type) args.unshift(type);
    console.log(args);
    window.EA_push.apply(null, args);
  }
}

const tracker = new Tracker();

export default tracker;
