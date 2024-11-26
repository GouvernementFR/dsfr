import api from '../../../../api';
import Status from './status';
import Type from './type';
import normalize from '../../utils/normalize';
import { validateBoolean, validateLang, validateString } from '../../utils/type-validator';

class User {
  constructor (config) {
    this._config = config || {};
  }

  reset (clear = false) {
    this._isConnected = false;
    this.status = Status.ANONYMOUS;
    if (!clear && this._config.connect) this.connect(this._config.connect.uid, this._config.connect.email, this._config.connect.isNew);
    else {
      this._uid = undefined;
      this._email = undefined;
      this._isNew = false;
    }
    this.profile = clear ? undefined : this._config.profile;
    this.language = clear ? undefined : this._config.language;
    this.type = clear ? undefined : this._config.type;
  }

  connect (uid, email, isNew = false) {
    this._uid = validateString(uid, 'user.uid');
    if (/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]{2,}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/.test(email)) api.inspector.warn('Please check analytics.user.email is properly encrypted ');
    this._email = validateString(email, 'user.email');
    this._isNew = validateBoolean(isNew);
    this._isConnected = true;
    this.status = Status.CONNECTED;
  }

  get uid () {
    return this._uid;
  }

  get email () {
    return this._email;
  }

  get isNew () {
    return this._isNew;
  }

  set status (id) {
    const stati = Object.values(Status).filter(status => status.isConnected === this._isConnected);
    this._status = stati.filter(status => status.id === id || status.value === id)[0] || stati.filter(status => status.isDefault)[0];
  }

  get status () {
    return this._status.id;
  }

  set profile (value) {
    const valid = validateString(value, 'user.profile');
    if (valid !== null) this._profile = valid;
  }

  get profile () {
    return this._profile.id;
  }

  set language (value) {
    const valid = validateLang(value, 'user.language');
    if (valid !== null) this._language = valid;
  }

  get language () {
    return this._language || navigator.language;
  }

  set type (id) {
    this._type = Object.values(Type).filter(type => type.id === id || type.value === id)[0];
  }

  get type () {
    return this._type.id;
  }

  get layer () {
    const layer = [];
    if (this.uid) layer.push('uid', normalize(this.uid));
    if (this.email) layer.push('email', normalize(this.email));
    if (this.isNew) layer.push('newcustomer', '1');
    if (this.language) layer.push('user_language', this.language);
    layer.push('user_login_status', this._status.value);
    if (this._profile) layer.push('profile', this._profile);
    if (this._type) layer.push('user_type', this._type.value);
    return layer;
  }
}

User.Status = Status;
User.Type = Type;

export { User };
