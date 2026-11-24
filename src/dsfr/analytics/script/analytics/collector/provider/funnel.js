import { restore, setContext, getContext } from '../../utils/context';

class Funnel {
  constructor (config) {
    this._config = config || {};
    this._initial = Object.assign({}, this._config);
  }

  reset (clear = false) {
    restore(this._config, clear ? {} : this._initial);
  }

  set (key, value) {
    setContext(this, 'funnel', key, value);
  }

  get (key) {
    return getContext(this, key);
  }

  get layer () {
    return {};
  }
}

export { Funnel };
