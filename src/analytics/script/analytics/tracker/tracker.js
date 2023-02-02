import api from '../api.js';
// import { ActionTypes } from './action-types';
import { Init } from './init';
import normalize from './normalize.js';
import { Action } from './action';

class Tracker {
  constructor () {
    this._requestUser = false;
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

    if (this._config.uid) this.setUser(this._config.uid, this._config.email, this._config.profile);

    this._init = new Init();
    this._init.configure(this._config, this._start.bind(this));
  }

  _start () {
    if (this._config.preventAutomaticPageTracking !== true) {
      this.trackPage(
        this._config.path || document.location.pathname, this._config.labels, this._config.group);
    }
  }

  get isAvailable () {
    return typeof window.EA_push === 'function';
  }

  setUser (uid, email = null, profile = null, newCustomer = null) {
    this._requestUser = true;
    this._uid = uid;
    this._email = email;
    this._profile = profile;
    this._newCustomer = newCustomer;
    this._user = ['uid', this._uid];
    if (this._profile) this._user.push('profile', this._profile);
    if (this._newCustomer) this._newCustomer.push('newcustomer', this._newCustomer);
    if (this._email) this._user.push('email', this._email);
  }

  get uid () {
    return this._uid;
  }

  _push (layer, type = 'collector') {
    if (!this.isAvailable) return;

    if (this._requestUser) {
      layer = [...this._user, ...layer];
      this._requestUser = false;
    }

    window.EA_push(type, layer);
  }

  trackPage (path, labels = [], group, custom = {}) {
    const layer = [];

    if (path) layer.push('path', path);
    else {
      api.inspector.error('trackPage method requires a valid path');
      return;
    }

    if (group) layer.push('pagegroup', normalize(group));
    if (labels && labels.length) layer.push('pagelabel', normalize(labels.map(label => label !== 0 && !label ? '' : label).join(',')));

    if (custom) layer.push.apply(layer, Object.entries(custom).flat());

    this._push(layer);
  }

  getAction (id, label) {
    const name = Action.getName(id, label)
    if (!this._actions[name]) this._actions[name] = new Action(name);
    return this._actions[name];
  }

  impressAction (action, data) {
    this._push('action', action.getImpression(data));
  }

  fillAction (action, data) {
    this._push('actionparam', action.getFiller(data));
  }

  trackAction (action, type, data) {
    this._push('action', action.getAction(data));
  }
}

const tracker = new Tracker();

export default tracker;
