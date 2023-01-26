import api from '../api.js';

const PUSH = 'EA_push';

class Init {
  configure (config, closure) {
    this.closure = closure;
    this._isLoaded = false;
    this.config = config;
    this.domain = config.domain;
    this.pushing();
    this.load();
  }

  get id () {
    if (!this._id) {
      let bit = 5381;
      for (let i = this.domain.length - 1; i > 0; i--) bit = (bit * 33) ^ this.domain.charCodeAt(i);
      bit >>>= 0;
      this._id = `_EA_${bit}`;
    }
    return this._id;
  }

  get store () {
    if (!this._store) {
      this._store = [];
      this._store.eah = this.domain;
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
    this.script = document.createElement('script');
    this.script.ea = this.id;
    this.script.async = true;
    this.script.addEventListener('load', this.loaded.bind(this));
    this.script.addEventListener('error', this.error.bind(this));
    this.script.src = `//${this.domain}/${key}.js?2`;
    const node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(this.script, node);
  }

  error () {
    api.inspector.error('unable to load Eulerian script file. the domain declared in your configuration must match the domain provided by the Eulerian interface (tag creation)');
  }

  loaded () {
    if (this._isLoaded) return;
    this._isLoaded = true;
    this.closure();
  }
}

export { Init };
