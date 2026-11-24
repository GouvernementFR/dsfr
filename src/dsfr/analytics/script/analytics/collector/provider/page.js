import api from '../../../../api';
import { validateString } from '../../utils/type-validator';
import { restore, setContext, getContext } from '../../utils/context';

const CollectionState = {
  COLLECTABLE: 'collectable',
  COLLECTING: 'collecting',
  COLLECTED: 'collected'
};

class Page {
  constructor (config) {
    this._config = config || {};
    this._initial = Object.assign({}, this._config);
    this._state = CollectionState.COLLECTABLE;
  }

  reset (clear = false) {
    restore(this._config, clear ? {} : this._initial);
    this.path = clear ? '' : this._config.path;
    this.referrer = clear ? '' : this._config.referrer;
    this.title = clear ? '' : this._config.title;
  }

  set (key, value) {
    setContext(this, 'page', key, value);
  }

  get (key) {
    return getContext(this, key);
  }

  collecting () {
    if (this._state !== CollectionState.COLLECTABLE) {
      api.inspector.warn(`current path '${this.path}' was already collected`);
      return false;
    }
    this._state = CollectionState.COLLECTING;
    return true;
  }

  get isCollecting () {
    return this._state === CollectionState.COLLECTING;
  }

  set path (value) {
    const valid = validateString(value, 'page.path');
    if (valid !== null) {
      this._path = valid;
      this._state = CollectionState.COLLECTABLE;
    }
  }

  get path () {
    return this._path || `${document.location.pathname}${document.location.search}`;
  }

  set referrer (value) {
    const valid = validateString(value, 'page.referrer');
    if (valid !== null) this._referrer = valid;
  }

  get referrer () {
    return this._referrer || document.referrer;
  }

  set title (value) {
    const valid = validateString(value, 'page.title');
    if (valid !== null) this._title = valid;
  }

  get title () {
    return this._title || document.title;
  }

  get layer () {
    this._state = CollectionState.COLLECTED;
    const layer = {};
    if (this.path) layer.path = this.path;
    layer.referrer = this.referrer;
    if (this.title) layer.title = this.title;

    return layer;
  }
}

export { Page };
