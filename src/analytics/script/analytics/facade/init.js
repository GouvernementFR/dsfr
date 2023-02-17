import api from '../../../api.js';

const PUSH = 'EA_push';

class Init {
  constructor (domain) {
    this._domain = domain;
    this._isLoaded = false;
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  configure () {
    this.pushing();
    this.load();
    return this._promise;
  }

  get id () {
    if (!this._id) {
      let bit = 5381;
      for (let i = this._domain.length - 1; i > 0; i--) bit = (bit * 33) ^ this._domain.charCodeAt(i);
      bit >>>= 0;
      this._id = `_EA_${bit}`;
    }
    return this._id;
  }

  get store () {
    if (!this._store) {
      this._store = [];
      this._store.eah = this._domain;
      window[this.id] = this._store;
    }
    return this._store;
  }

  pushing () {
    if (!window[PUSH]) window[PUSH] = (...args) => this.store.push(args);
  }

  load () {
    const stamp = new Date() / 1E7 | 0;
    const offset = stamp % 26;
    const key = String.fromCharCode(97 + offset, 122 - offset, 65 + offset) + (stamp % 1E3);
    this._script = document.createElement('script');
    this._script.ea = this.id;
    this._script.async = true;
    this._script.addEventListener('load', this.loaded.bind(this));
    this._script.addEventListener('error', this.error.bind(this));
    this._script.src = `//${this._domain}/${key}.js?2`;
    const node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(this._script, node);
  }

  error () {
    api.inspector.error('unable to load Eulerian script file. the domain declared in your configuration must match the domain provided by the Eulerian interface (tag creation)');
    this._reject();
  }

  loaded () {
    if (this._isLoaded) return;
    this._isLoaded = true;
    this._resolve();
  }
}

export { Init };
