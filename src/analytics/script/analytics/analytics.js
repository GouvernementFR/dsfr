import api from '../../api.js';
import patch from '../../../patch/script/patch';
import Collection from './engine/collection';
import { Init } from './facade/init';
import { ConsentManagerPlatform } from './cmp/consent-manager-platform';
import push from './facade/push';
import PushType from './facade/push-type';
import queue from './engine/queue';
import opt from './facade/opt';
import debug from './facade/debug';
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
    this._configure();
  }

  _configure () {
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
    this._init.configure().then(this._start.bind(this), (reason) => this._reject(reason));
  }

  get isReady () {
    return this._isReady;
  }

  get readiness () {
    return this._readiness;
  }

  _start () {
    if (this._isReady) return;

    this._cmp = new ConsentManagerPlatform(this._config.cmp);
    this._collector = new Collector(this._config);
    this._collector.reset();

    this._isReady = true;
    this._resolve();

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

  get collection () {
    return this._collector.collection;
  }

  get isActionEnabled () {
    return this._collector.isActionEnabled;
  }

  set isActionEnabled (value) {
    this._collector.isActionEnabled = value;
  }

  get isDebugging () {
    return debug.isActive;
  }

  set isDebugging (value) {
    debug.isActive = value;
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

analytics.Collection = Collection;
analytics.PushType = PushType;

export default analytics;
