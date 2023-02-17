import api from '../../api.js';
import patch from '../../../patch/script/patch';
import Mode from './mode';
import { Init } from './facade/init';
import { Page } from './collector/page/page';
import { Site } from './collector/site/site';
import { User } from './collector/user/user';
import { Search } from './collector/search/search';
import { Funnel } from './collector/funnel/funnel';
import { ConsentManagerPlatform } from './cmp/consent-manager-platform';
import actions from './action/actions';
import push from './facade/push';
import PushType from './facade/push-type';

class Analytics {
  constructor () {
    this._isReady = false;
    this._readiness = new Promise((resolve, reject) => {
      if (this._isReady) resolve();
      else {
        this._resolve = resolve;
        this._reject = reject;
      }
    });
    this._configure(api);
  }

  _configure (api) {
    switch (true) {
      case window[patch.namespace] !== undefined:
        this._config = window[patch.namespace].configuration.analytics;
        window[patch.namespace].promise.then(this._build.bind(this), () => {});
        break;

      case api.internals !== undefined && api.internals.configuration !== undefined && api.internals.configuration.analytics !== undefined && api.internals.configuration.analytics.domain !== undefined:
        this._config = api.internals.configuration.analytics;
        this._build();
        break;

      case api.analytics !== undefined && api.analytics.domain !== undefined:
        this._config = api.analytics;
        this._build();
        break;

      default:
        api.inspector.warn('analytics configuration is incorrect or missing (required : domain)');
    }
  }

  _build () {
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

    this._init = new Init(this._config.domain);

    this._user = new User(this._config.user);
    this._site = new Site(this._config.site);
    this._page = new Page(this._config.page);
    this._search = new Search(this._config.search);
    this._funnel = new Funnel(this._config.funnel);

    this.reset();

    this._init.configure().then(this._start.bind(this), this._reject);
  }

  get isReady () {
    return this._isReady;
  }

  get readiness () {
    return this._readiness;
  }

  _start () {
    if (this._isReady) return;
    this._isReady = true;
    this._resolve();

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

  get search () {
    return this._search;
  }

  get funnel () {
    return this._funnel;
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
    this._search.reset(clear);
    this._funnel.reset(clear);
  }

  collect () {
    const layer = [
      ...this._user.layer,
      ...this._site.layer,
      ...this._page.layer,
      ...this._search.layer,
      ...this._funnel.layer,
      ...actions.layer
    ];
    this.push(PushType.COLLECTOR, layer);
  }
}

const analytics = new Analytics();

analytics.Mode = Mode;
analytics.PushType = PushType;

export default analytics;
