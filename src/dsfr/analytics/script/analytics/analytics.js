import api from '../../api.js';
import Collection from './engine/collection';
import { Init } from './facade/init';
import { PluginManager } from './facade/provider/plugin-manager';
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
      case api.internals !== undefined && api.internals.configuration !== undefined && api.internals.configuration.analytics !== undefined && api.internals.configuration.analytics.domain !== undefined:
        this._config = api.internals.configuration.analytics;
        this._build();
        break;

      case api.analytics !== undefined && api.analytics.domain !== undefined:
        this._config = api.analytics;
        this._build();
        break;

      case api.internals !== undefined && api.internals.configuration !== undefined && api.internals.configuration.analytics !== undefined && api.internals.configuration.analytics.providers !== undefined && Object.keys(api.internals.configuration.analytics.providers).length > 0:
        this._config = api.internals.configuration.analytics;
        [this._providerKey] = Object.keys(this._config.providers);
        this._provider = this._createProvider();
        this._buildProvider();
        break;

      case api.analytics !== undefined && api.analytics.providers !== undefined && Object.keys(api.analytics.providers).length > 0:
        this._config = api.analytics;
        [this._providerKey] = Object.keys(this._config.providers);
        this._provider = this._createProvider();
        this._buildProvider();
        break;

      default:
        api.inspector.warn('analytics configuration is incorrect or missing (required : domain or provider)');
    }
  }

  _createProvider () {
    const keys = Object.keys(this._config.providers);
    if (keys.length > 1) api.inspector.warn(`analytics configuration declares several providers (${keys.join(', ')}), only '${this._providerKey}' is used`);
    const plugin = PluginManager[this._providerKey];
    if (!plugin) {
      api.inspector.warn(`analytics provider '${this._providerKey}' is unknown, expecting ${Object.keys(PluginManager).join(' or ')}`);
      return null;
    }
    const Provider = plugin.classProvider;
    return new Provider(this._config.providers[this._providerKey]);
  }

  _build () {
    if (this._config.providers && Object.keys(this._config.providers).length > 0) api.inspector.warn('analytics configuration declares both domain and providers, providers are ignored (remove domain to use them)');
    this._init = new Init(this._config.domain);
    this._init.configure().then(this._start.bind(this), (reason) => this._reject(reason));
  }

  _buildProvider () {
    if (!this._provider) return;
    this._init = this._provider;
    this._init.configure().then(this._startProvider.bind(this), (reason) => this._reject(reason));
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

  _startProvider () {
    if (this._isReady) return;

    this._cmp = new ConsentManagerPlatform(this._config, this._provider);

    this._collector = this._provider.collector(this._config);
    this._collector.reset();

    this._isReady = true;
    this._resolve();

    queue.setProvider(this._provider);
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

  get context () {
    return this._collector;
  }

  get cmp () {
    return this._cmp;
  }

  get opt () {
    return this._provider ? this._provider.opt : opt;
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
    if (this._provider) {
      this._provider.push(type, layer);
    } else {
      push(type, layer);
    }
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
