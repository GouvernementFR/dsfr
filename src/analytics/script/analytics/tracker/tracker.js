import api from '../api.js';
import Mode from './mode';
import { Init } from './facade/init';
import { Page } from './page/page';
import { Site } from './site/site';
import { User } from './user/user';
import push from './facade/push';
import PushType from './facade/push-type';
import { ConsentManagerPlatform } from './cmp/consent-manager-platform';

class Tracker {
  constructor () {
    this._isReady = false;
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
      case Mode.MANUAL:
        this._mode = Mode.MANUAL;
        break;

      case Mode.NO_COMPONENTS:
        this._mode = Mode.NO_COMPONENTS;
        break;

      case Mode.AUTO:
      default:
        this._mode = Mode.AUTO;
    }

    this._user = new User(this._config.user);
    this._site = new Site(this._config.site);
    this._page = new Page(this._config.page);

    this.reset();

    this._init = new Init(this._config.domain);
    this._init.configure(this._start.bind(this)).then(this._start.bind(this), () => { if (this._reject) this._reject(); });
  }

  get isReady () {
    return this._isReady;
  }

  get readiness () {
    const promise = new Promise((resolve, reject) => {
      if (this._isReady) resolve();
      else {
        this._resolve = resolve;
        this._reject = reject;
      }
    });
    return promise;
  }

  _start () {
    this._isReady = true;
    if (this._resolve) this._resolve();

    console.log('ready');

    this._cmp = new ConsentManagerPlatform(this._config.cmp);

    switch (this._mode) {
      case Mode.AUTO:
      case Mode.NO_COMPONENTS:
        this.collect();
        break;
    }
  }

  get page () {
    return this._page;
  }

  get user () {
    return this._user;
  }

  get site () {
    return this._site;
  }

  get cmp () {
    return this._cmp;
  }

  push (type, layer) {
    push(type, layer);
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
    this.push(PushType.COLLECTOR, layer);
  }
}

const tracker = new Tracker();

tracker.Mode = Mode;
tracker.PushType = PushType;

export default tracker;
