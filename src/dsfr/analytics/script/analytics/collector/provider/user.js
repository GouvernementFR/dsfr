import api from '../../../../api';
import { validateString } from '../../utils/type-validator';
import { restore, setContext, getContext } from '../../utils/context';

class User {
  constructor (config) {
    this._config = config || {};
    this._initial = Object.assign({}, this._config);
  }

  reset (clear = false) {
    restore(this._config, clear ? {} : this._initial);
    this.uid = clear ? undefined : this._config.uid;
    this.email = clear ? undefined : this._config.email;
  }

  set (key, value) {
    setContext(this, 'user', key, value);
  }

  get (key) {
    return getContext(this, key);
  }

  set uid (value) {
    const valid = validateString(value, 'user.uid');
    if (valid !== null) this._uid = valid;
  }

  get uid () {
    return this._uid;
  }

  set email (value) {
    if (/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]{2,}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/.test(value)) api.inspector.warn('Please check analytics.user.email is properly encrypted');
    const valid = validateString(value, 'user.email');
    if (valid !== null) this._email = valid;
  }

  get email () {
    return this._email;
  }

  get layer () {
    const layer = {};
    if (this.uid) layer.uid = this.uid;
    if (this.email) layer.email = this.email;
    return layer;
  }
}

export { User };
