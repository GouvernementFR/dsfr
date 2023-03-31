import api from '../../api.js';
import patch from '../../../patch/script/patch';
import Mode from './engine/mode';
import { Init } from './facade/init';
import { ConsentManagerPlatform } from './cmp/consent-manager-platform';
import push from './facade/push';
import PushType from './facade/push-type';
import queue from './engine/queue';
import opt from './facade/opt';
import { Collector } from './engine/collector';

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
    this._init = new Init(this._config.domain);
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
    this._collector = new Collector(this._config);
    this._collector.reset();

    queue.start();
    this._collector.start();
  }

  get page () {
    return this._collector.page;
  }

  get user () {
    return this._collector.user;
  }

  get site () {
    return this._collector._site;
  }

  get search () {
    return this._collector.search;
  }

  get funnel () {
    return this._collector.funnel;
  }

  get cmp () {
    return this._cmp;
  }

  get opt () {
    return opt;
  }

  push (type, layer) {
    push(type, layer);
  }

  reset (clear = false) {
    this._collector.reset();
  }

  collect () {
    this._collector.collect();
  }
}

const analytics = new Analytics();

analytics.Mode = Mode;
analytics.PushType = PushType;

export default analytics;
