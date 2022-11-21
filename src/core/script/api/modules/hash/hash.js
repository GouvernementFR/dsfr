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

  set hash (value) {
    const hash = value.charAt(0) === '#' ? value.substring(1) : value;
    if (this._hash !== hash) window.location.hash = hash;
  }

  get hash () {
    return this._hash;
  }

  getLocationHash () {
    const hash = window.location.hash;
    this._hash = hash.charAt(0) === '#' ? hash.substring(1) : hash;
  }

  handle (e) {
    this.getLocationHash();
    this.forEach((instance) => instance.handleHash(this._hash, e));
  }
}

export { Hash };
