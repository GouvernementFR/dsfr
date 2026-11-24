import { restore, setContext, getContext } from '../../utils/context';

class Search {
  constructor (config) {
    this._config = config || {};
    this._initial = Object.assign({}, this._config);
  }

  reset (clear = false) {
    restore(this._config, clear ? {} : this._initial);
  }

  set (key, value) {
    setContext(this, 'search', key, value);
  }

  get (key) {
    return getContext(this, key);
  }

  get layer () {
    return {};
  }
}

export { Search };
