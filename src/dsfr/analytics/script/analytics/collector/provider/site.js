import api from '../../../../api';
import Environment from '../site/environment';
import { restore, setContext, getContext } from '../../utils/context';

class Site {
  constructor (config) {
    this._config = config || {};
    this._initial = Object.assign({}, this._config);
  }

  reset (clear = false) {
    restore(this._config, clear ? {} : this._initial);
    this.environment = clear ? Environment.DEVELOPMENT.id : this._config.environment;
    this._api = api.version;
  }

  set (key, value) {
    setContext(this, 'site', key, value);
  }

  get (key) {
    return getContext(this, key);
  }

  set environment (value) {
    switch (value) {
      case Environment.PRODUCTION.id:
      case Environment.PRODUCTION.value:
        this._environment = Environment.PRODUCTION;
        break;

      case Environment.STAGE.id:
      case Environment.STAGE.value:
        this._environment = Environment.STAGE;
        break;

      case Environment.DEVELOPMENT.id:
      case Environment.DEVELOPMENT.value:
        this._environment = Environment.DEVELOPMENT;
        break;

      default:
        this._environment = Environment.DEVELOPMENT;
    }
  }

  get environment () {
    return this._environment ? this._environment.id : Environment.DEVELOPMENT.id;
  }

  get api () {
    return this._api;
  }

  get layer () {
    const layer = {};
    layer.environment = this._environment.value;
    if (this.api) layer.api_version = this.api;
    return layer;
  }
}

Site.Environment = Environment;

export { Site };
