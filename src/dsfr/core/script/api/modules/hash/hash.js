import { Module } from '../module.js';

class Hash extends Module {
  constructor () {
    super('hash');
    this.handling = this.handle.bind(this);
    this.getLocationHash();
  }

  activate () {
    window.addEventListener('hashchange', this.handling);
  }

  deactivate () {
    window.removeEventListener('hashchange', this.handling);
  }

  _sanitize (hash) {
    if (hash.charAt(0) === '#') return hash.substring(1);
    return hash;
  }

  set hash (value) {
    const hash = this._sanitize(value);
    if (this._hash !== hash) window.location.hash = hash;
  }

  get hash () {
    return this._hash;
  }

  getLocationHash () {
    const hash = window.location.hash;
    this._hash = this._sanitize(hash);
  }

  handle (e) {
    this.getLocationHash();
    this.forEach((instance) => instance.handleHash(this._hash, e));
  }
}

export { Hash };
