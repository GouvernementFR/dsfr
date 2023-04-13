import api from '../../../api.js';
import opt from './opt';

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
    console.log('init configure', opt.isDisabled);
    if (opt.isDisabled) this._reject();
    else this.load();
    return this._promise;
  }

  get id () {
    if (!this._id) {
      let bit = 5381;
      for (let i = this._domain.length - 1; i > 0; i--) bit = (bit * 33) ^ this._domain.charCodeAt(i);
      bit >>>= 0;
      this._id = `_EA_${bit}`;
    }
    console.log(this._id);
    return this._id;
  }

  get store () {
    if (!this._store) {
      this._store = [];
      this._store.eah = this._domain;
      window[this.id] = this._store;
    }
    console.log(this._store);
    return this._store;
  }

  pushing () {
    console.log('init pushing', window[PUSH]);
    if (!window[PUSH]) window[PUSH] = (...args) => this.store.push(args);
  }

  load () {
    setTimeout(this._load.bind(this), 250);
  }

  _load () {
    console.log('init load');
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
   setTimeout(this._loaded.bind(this), 250);
  }

  _loaded () {
    if (this._isLoaded) return;
    console.log('init loaded');
    this._isLoaded = true;
    this._resolve();
  }
}

export { Init };

/*
(function(e, a) {
  var i = e.length,
    y = 5381,
    k = 'script',
    s = window,
    v = document,
    o = v.createElement(k);
  for (; i;) {
    i -= 1;
    y = (y * 33) ^ e.charCodeAt(i)
  }
  y = '_EA_' + (y >>>= 0);
  (function(e, a, s, y) {
    s[a] = s[a] || function() {
      (s[y] = s[y] || []).push(arguments);
      s[y].eah = e;
    };
  }(e, a, s, y));
  i = new Date / 1E7 | 0;
  o.ea = y;
  y = i % 26;
  o.async = 1;
  o.src = '//' + e + '/' + String.fromCharCode(97 + y, 122 - y, 65 + y) + (i % 1E3) + '.js?2';
  s = v.getElementsByTagName(k)[0];
  s.parentNode.insertBefore(o, s);
})
('mon.domainedetracking.com', 'EA_push');
*/

/*
(function(e, a) {
  var i = e.length,
    y = 5381,
    k = 'script',
    z = '_EA_',
    zd = z + 'disabled',
    s = window,
    v = document,
    o = v.createElement(k),
    l = s.localStorage;
  for (; i;) {
    i -= 1;
    y = (y * 33) ^ e.charCodeAt(i)
  }
  y = z + (y >>>= 0);
  (function(e, a, s, y, z, zd, l) {
    s[a] = s[a] || function() {
      (s[y] = s[y] || []).push(arguments);
      s[y].eah = e;
    };
    s[zd] = function() {
      return l.getItem(z);
    };
    s[z + 'toggle'] = function() {
      (s[zd]()) ? l.removeItem(z): l.setItem(z, 1);
    }
  }(e, a, s, y, z, zd, l));
  if (!s[zd]()) {
    i = new Date / 1E7 | 0;
    o.ea = y;
    y = i % 26;
    o.async = 1;
    o.src = '//' + e + '/' + String.fromCharCode(97 + y, 122 - y, 65 + y) + (i % 1E3) + '.js?2';
    s = v.getElementsByTagName(k)[0];
    s.parentNode.insertBefore(o, s);
  }
})('mon.domainedetracking.com', 'EA_push');
*/
