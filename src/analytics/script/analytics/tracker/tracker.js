import api from '../api.js';
import { Init } from './init';
import TrackingMode from './tracking-mode';
import { Page } from './page/page';
import { Site } from './site/site';
import { User } from './user/user';

class Tracker {
  constructor () {
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

    switch (this._config.mode) {
      case TrackingMode.MANUAL:
        this._mode = TrackingMode.MANUAL;
        break;

      case TrackingMode.NO_COMPONENTS:
        this._mode = TrackingMode.NO_COMPONENTS;
        break;

      case TrackingMode.AUTO:
      default:
        this._mode = TrackingMode.AUTO;
    }

    this._user = new User(this._config.user);
    this._site = new Site(this._config.site);
    this._page = new Page(this._config.page);

    this.reset();

    this._init = new Init(this._config.domain);
    this._init.configure(this._start.bind(this));
  }

  _start () {
    switch (this._mode) {
      case TrackingMode.AUTO:
      case TrackingMode.NO_COMPONENTS:
        this.collect();
        break;
    }
  }

  get page () {
    return this._page;
  }

  get isAvailable () {
    return typeof window.EA_push === 'function';
  }

  push (layer, type = 'collector') {
    if (!this.isAvailable) return;

    api.inspector.log('analytics', type, layer);

    window.EA_push(type, layer);
  }

  reset (clear = false) {
    this._user.reset(clear);
    this._site.reset(clear);
    this._page.reset(clear);
  }

  collect () {
    const layer = [
      ...this._user.layer,
      ...this._site.layer,
      ...this._page.layer
    ];
    this.push(layer);
  }

  /*
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

  _trackPage (path, labels = [], group, custom = {}) {
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
  */
}

const tracker = new Tracker();

tracker.TrackingMode = TrackingMode;

export default tracker;
