import Status from './status';
import Profile from './profile';
import Type from './type';

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
    this.language = clear ? navigator.language : this._config.language || navigator.language;
    this.type = clear ? undefined : this._config.type;
  }

  connect (uid, email, isNew = false) {
    this._uid = uid;
    this._email = email;
    this._isNew = isNew;
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

  set profile (id) {
    this._profile = Object.values(Profile).filter(profile => profile.id === id || profile.value === id)[0];
  }

  get profile () {
    return this._profile.id;
  }

  set language (value) {
    this._language = value.split(/[-_]/)[0];
  }

  get language () {
    return this._language;
  }

  set type (id) {
    this._type = Object.values(Type).filter(type => type.id === id)[0];
  }

  get type () {
    return this._type.id;
  }

  get layer () {
    const layer = [];
    if (this._uid) layer.push('uid', this._uid);
    if (this._email) layer.push('email', this._email);
    if (this._isNew) layer.push('newcustomer', '1');
    if (this._profile) layer.push('profile', this._profile.value);
    if (this._status) layer.push('user_login_status', this._status.value);
    if (this._language) layer.push('user_language', this._language);
    if (this._type) layer.push('user_type', this._type.value);
    return layer;
  }
}

User.Status = Status;
User.Profile = Profile;
User.Type = Type;

export { User };
