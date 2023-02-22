/*! DSFR v1.9.0-alpha | SPDX-License-Identifier: MIT | License-Filename: LICENSE.md | restricted use (see terms and conditions) */

const config = {
  prefix: 'fr',
  namespace: 'dsfr',
  organisation: '@gouvfr',
  version: '1.9.0-alpha'
};

const api = window[config.namespace];

const patch = {
  namespace: 'a4e35ba2a938ba9d007689dbf3f46acbb9807869'
};

const Mode = {
  MANUAL: 'manual',
  AUTO: 'auto',
  NO_COMPONENTS: 'no_components'
};

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

/*  '["\'<>*$&~`|\\\\?^~]'; */
var RESTRICTED = {
  '0x0022': '＂',
  '0x0024': '＄',
  '0x0026': '＆',
  '0x0027': '＇',
  '0x002a': '＊',
  '0x003c': '＜',
  '0x003e': '＞',
  '0x003f': '？',
  '0x005c': '＼',
  '0x005e': '＾',
  '0x0060': '｀',
  '0x007c': '｜',
  '0x007e': '～'
};

// import TABLE from './unicode-table';

const charCodeHex = (char) => {
  const code = char.charCodeAt(0).toString(16);
  return '0x0000'.slice(0, -code.length) + code;
};

const normalize = (text) => {
  if (!text) return text;
  // text = [...text].map(char => TABLE[charCodeHex(char)] || char).join('');
  text = [...text].map(char => RESTRICTED[charCodeHex(char)] || char).join('');
  text = text.replace(/\s/g, '_');
  text = text.toLowerCase();
  return text;
};

const validateString = (value, name, allowNull = true) => {
  switch (true) {
    case typeof value === 'number':
      return `${value}`;

    case typeof value === 'string':
      return value;

    case value === undefined && allowNull:
    case value === null && allowNull:
      return '';
  }

  api.inspector.warn(`unexpected value '${value}' set at analytics.${name}. Expecting a String`);
  return null;
};

const validateNumber = (value, name, allowNull = true) => {
  switch (true) {
    case !isNaN(value):
      return value;

    case typeof value === 'string' && !isNaN(Number(value)):
      return Number(value);

    case value === undefined && allowNull:
    case value === null && allowNull:
      return -1;
  }

  api.inspector.warn(`unexpected value '${value}' set at analytics.${name}. Expecting a Number`);
  return null;
};

const validateBoolean = (value, name) => {
  switch (true) {
    case typeof value === 'boolean':
      return value;

    case typeof value === 'string' && value.toLowerCase() === 'true':
    case value === '1':
    case value === 1:
      return true;

    case typeof value === 'string' && value.toLowerCase() === 'false':
    case value === '0':
    case value === 0:
      return false;

    case value === undefined:
    case value === null:
      return value;
  }

  api.inspector.warn(`unexpected value '${value}' set at analytics.${name}. Expecting a Boolean`);
  return null;
};

const validateLang = (value, name, allowNull = true) => {
  switch (true) {
    case typeof value === 'string' && /^[A-Za-z]{2}$|^[A-Za-z]{2}[-_]/.test(value):
      return value.split(/[-_]/)[0].toLowerCase();

    case value === undefined && allowNull:
    case value === null && allowNull:
      return '';
  }

  api.inspector.warn(`unexpected value '${value}' set at analytics.${name}. Expecting language as a String following ISO 639-1 format`);
  return null;
};

const validateGeography = (value, name, allowNull = true) => {
  switch (true) {
    case typeof value === 'string':
      if (!/^FR-[A-Z0-9]{2,3}$/.test(value)) api.inspector.warn(`value '${value}' set at analytics.${name} with wrong format. Geographic location should be a String following ISO 3166-2:FR format`);
      return value;

    case value === undefined && allowNull:
    case value === null && allowNull:
      return '';
  }

  api.inspector.warn(`unexpected value '${value}' set at analytics.${name}. Expecting geographic location as a String following ISO 3166-2:FR format`);
  return null;
};

class Page {
  constructor (config) {
    this._config = config || {};
  }

  reset (clear = false) {
    this.path = clear ? '' : this._config.path || document.location.pathname;
    this.referrer = clear ? '' : this._config.referrer;
    const title = this._config.title || document.title;
    this.title = clear ? '' : title;
    this.name = clear ? '' : this._config.name || title;
    this._labels = clear || !this._config.labels ? ['', '', '', '', ''] : this._config.labels;
    this._categories = clear || !this._config.categories ? ['', '', ''] : this._config.categories;
    this._labels.length = 5;
    this.isError = !clear && this._config.isError;
    this.template = clear ? '' : this._config.template;
    this.group = clear ? '' : this._config.group;
    this.segment = clear ? '' : this._config.segment;
    this.current = clear || isNaN(this._config.current) ? -1 : this._config.current;
    this.total = clear || isNaN(this._config.total) ? -1 : this._config.total;
    this._filters = clear || !this._config.filters ? [] : this._config.filters;
  }

  set path (value) {
    const valid = validateString(value, 'page.path');
    if (valid !== null) this._path = valid;
  }

  get path () {
    return this._path;
  }

  set referrer (value) {
    const valid = validateString(value, 'page.referrer');
    if (valid !== null) this._referrer = valid;
  }

  get referrer () {
    return this._referrer;
  }

  set title (value) {
    const valid = validateString(value, 'page.title');
    if (valid !== null) this._title = valid;
  }

  get title () {
    return this._title;
  }

  set name (value) {
    const valid = validateString(value, 'page.name');
    if (valid !== null) this._name = valid;
  }

  get name () {
    return this._name;
  }

  get labels () {
    return this._labels;
  }

  get categories () {
    return this._categories;
  }

  set isError (value) {
    const valid = validateBoolean(value, 'page.isError');
    if (valid !== null) this._isError = valid;
  }

  get isError () {
    return this._isError;
  }

  set template (value) {
    const valid = validateString(value, 'page.template');
    if (valid !== null) this._template = valid;
  }

  get template () {
    return this._template;
  }

  set segment (value) {
    const valid = validateString(value, 'page.segment');
    if (valid !== null) this._segment = valid;
  }

  get segment () {
    return this._segment;
  }

  set group (value) {
    const valid = validateString(value, 'page.group');
    if (valid !== null) this._group = valid;
  }

  get group () {
    return this._group;
  }

  set current (value) {
    const valid = validateNumber(value, 'page.current');
    if (valid !== null) this._current = valid;
  }

  get current () {
    return this._current;
  }

  set total (value) {
    const valid = validateNumber(value, 'page.total');
    if (valid !== null) this._total = valid;
  }

  get total () {
    return this._total;
  }

  get filters () {
    return this._filters;
  }

  get layer () {
    const layer = [];
    if (this._path) layer.push('path', normalize(this._path));
    if (this._referrer) layer.push('referrer', normalize(this._referrer));

    const title = normalize(this._title);
    if (title) layer.push('page_title', title);
    if (this._name || title) layer.push('page_name', normalize(this._name) || title);

    const labels = this._labels.slice(0, 5);
    labels.length = 5;
    if (labels.some(label => label)) layer.push('pagelabel', labels.map(label => typeof label === 'string' ? normalize(label) : '').join(','));

    this._categories.forEach((category, index) => {
      if (category) layer.push(`page_category${index + 1}`, category);
    });

    if (this._isError) layer.push('error', '1');

    const template = normalize(this._template) || 'autres';
    layer.push('page_template', template);
    layer.push('pagegroup', normalize(this._group) || template);
    layer.push('site-segment', normalize(this._segment) || template);

    if (!isNaN(this._current) && this._current > -1) {
      let pagination = `${this._current}`;
      if (!isNaN(this._total) && this._total > -1) pagination += `/${this._total}`;
      layer.push('page_pagination', pagination);
    }

    if (this._filters.length && this._filters.some(label => label)) {
      const filters = this._filters.map(filter => typeof filter === 'string' ? normalize(filter) : '');
      layer.push('page_filters', filters.join(','));
    }
    return layer;
  }
}

const Environment = {
  DEVELOPMENT: {
    id: 'development',
    value: 'dev'
  },
  STAGE: {
    id: 'stage',
    value: 'stage'
  },
  PRODUCTION: {
    id: 'production',
    value: 'prod'
  }
};

class Site {
  constructor (config) {
    this._config = config || {};
  }

  reset (clear = false) {
    this.environment = clear ? undefined : this._config.environment;
    this.entity = clear ? undefined : this._config.entity;
    this.language = clear ? document.documentElement.lang : this._config.language || document.documentElement.lang;
    this.target = clear ? undefined : this._config.target;
    this.type = clear ? undefined : this._config.type;
    this.region = clear ? undefined : this._config.region;
    this.department = clear ? undefined : this._config.department;
  }

  set environment (value) {
    switch (value) {
      case Environment.PRODUCTION.id:
      case Environment.PRODUCTION.value:
        this._environment = Environment.PRODUCTION;
        break;

      case Environment.STAGE.id:
      case Environment.STAGE.value:
        this._environment = Environment.STAGE;
        break;

      case Environment.DEVELOPMENT.id:
      case Environment.DEVELOPMENT.value:
        this._environment = Environment.DEVELOPMENT;
        break;

      default:

        this._environment = Environment.DEVELOPMENT;
    }
  }

  get environment () {
    return this._environment.id;
  }

  set entity (value) {
    const valid = validateString(value, 'site.entity');
    if (valid !== null) this._entity = valid;
  }

  get entity () {
    return this._entity;
  }

  set language (value) {
    const valid = validateLang(value, 'site.language');
    if (valid !== null) this._language = valid;
  }

  get language () {
    return this._language;
  }

  set target (value) {
    const valid = validateString(value, 'site.target');
    if (valid !== null) this._target = valid;
  }

  get target () {
    return this._target;
  }

  set type (value) {
    const valid = validateString(value, 'site.type');
    if (valid !== null) this._type = valid;
  }

  get type () {
    return this._type;
  }

  set region (value) {
    const valid = validateGeography(value, 'site.region');
    if (valid !== null) this._region = valid;
  }

  get region () {
    return this._region;
  }

  set department (value) {
    const valid = validateGeography(value, 'site.department');
    if (valid !== null) this._department = valid;
  }

  get department () {
    return this._department;
  }

  get layer () {
    const layer = [];
    layer.push('site_environment', this._environment.value);
    if (this._entity) layer.push('site_entity', normalize(this._entity));
    else api.inspector.warn('entity is required in analytics.site');
    if (this._language) layer.push('site_language', this._language);
    if (this._target) layer.push('site_target', normalize(this._target));
    if (this._type) layer.push('site_type', normalize(this._type));
    if (this._region) layer.push('site_region', this._region);
    if (this._department) layer.push('site_department', this._department);
    return layer;
  }
}

Site.Environment = Environment;

const Status = {
  CONNECTED: {
    id: 'connected',
    value: 'connecté',
    isConnected: true,
    isDefault: true
  },
  ANONYMOUS: {
    id: 'anonymous',
    value: 'anonyme',
    isConnected: false,
    isDefault: true
  },
  GUEST: {
    id: 'guest',
    value: 'invité',
    isConnected: false
  }
};

const Profile = {
  VISITOR: {
    id: 'visitor',
    value: 'visitor'
  },
  LOOKER: {
    id: 'looker',
    value: 'looker'
  },
  SHOPPER: {
    id: 'shopper',
    value: 'shopper'
  },
  BUYER: {
    id: 'buyer',
    value: 'buyer'
  },
  REBUYER: {
    id: 'rebuyer',
    value: 'rebuyer'
  }
};

const Type = {
  INDIVIDUAL: {
    id: 'individual',
    value: 'part'
  },
  PROFESSIONNAL: {
    id: 'professionnal',
    value: 'pro'
  }
};

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

  set profile (id) {
    this._profile = Object.values(Profile).filter(profile => profile.id === id || profile.value === id)[0];
  }

  get profile () {
    return this._profile.id;
  }

  set language (value) {
    const valid = validateLang(value, 'user.language');
    if (valid !== null) this._language = valid;
  }

  get language () {
    return this._language;
  }

  set type (id) {
    this._type = Object.values(Type).filter(type => type.id === id || type.value === id)[0];
  }

  get type () {
    return this._type.id;
  }

  get layer () {
    const layer = [];
    if (this._uid) layer.push('uid', normalize(this._uid));
    if (this._email) layer.push('email', normalize(this._email));
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

const Method = {
  STANDARD: {
    id: 'standard',
    value: 'standard',
    isDefault: true
  },
  AUTOCOMPLETE: {
    id: 'autocomplete',
    value: 'autocompletion'
  }
};

class Search {
  constructor (config) {
    this._config = config || {};
  }

  reset (clear = false) {
    this.engine = clear ? undefined : this._config.engine;
    this.results = clear || isNaN(this._config.results) ? -1 : this._config.results;
    this.terms = clear ? undefined : this._config.terms;
    this.category = clear ? undefined : this._config.category;
    this.theme = clear ? undefined : this._config.theme;
    this.type = clear ? undefined : this._config.type;
    this.method = clear ? undefined : this._config.method;
  }

  set engine (value) {
    const valid = validateString(value, 'search.engine');
    if (valid !== null) this._engine = valid;
  }

  get engine () {
    return this._engine;
  }

  set results (value) {
    const valid = validateNumber(value, 'search.results');
    if (valid !== null) this._results = valid;
  }

  get results () {
    return this._results;
  }

  set terms (value) {
    const valid = validateString(value, 'search.terms');
    if (valid !== null) this._terms = valid;
  }

  get terms () {
    return this._terms;
  }

  set category (value) {
    const valid = validateString(value, 'search.category');
    if (valid !== null) this._category = valid;
  }

  get category () {
    return this._category;
  }

  set theme (value) {
    const valid = validateString(value, 'search.theme');
    if (valid !== null) this._theme = valid;
  }

  get theme () {
    return this._theme;
  }

  set type (value) {
    const valid = validateString(value, 'search.type');
    if (valid !== null) this._type = valid;
    this._type = value;
  }

  get type () {
    return this._type;
  }

  set method (id) {
    const methods = Object.values(Method);
    this._method = methods.filter(method => method.id === id || method.value === id)[0] || methods.filter(method => method.isDefault)[0];
  }

  get method () {
    return this._method;
  }

  get layer () {
    const layer = [];
    if (this._engine) layer.push('isearchengine', normalize(this._engine));
    if (this._results > -1) layer.push('isearchresults', this._results);
    if (this._terms) layer.push('isearchkey', 'search_terms', 'isearchdata', normalize(this._terms));
    if (this._category) layer.push('isearchkey', 'search_category', 'isearchdata', normalize(this._category));
    if (this._theme) layer.push('isearchkey', 'search_theme', 'isearchdata', normalize(this._theme));
    if (this._type) layer.push('isearchkey', 'search_type', 'isearchdata', normalize(this._type));
    if (this._method && layer.length) layer.push('isearchkey', 'search_method', 'isearchdata', this._method.value);
    return layer;
  }
}

Search.Method = Method;

class Funnel {
  constructor (config) {
    this._config = config || {};
  }

  reset (clear = false) {
    this.id = clear ? undefined : this._config.id;
    this.type = clear ? undefined : this._config.type;
    this.name = clear ? undefined : this._config.name;
    this.step = clear ? undefined : this._config.step;
    this.current = clear || isNaN(this._config.current) ? -1 : this._config.current;
    this.total = clear || isNaN(this._config.total) ? -1 : this._config.total;
    this.objective = clear ? undefined : this._config.objective;
    this.error = clear ? undefined : this._config.error;
  }

  set id (value) {
    const valid = validateString(value, 'funnel.id');
    if (valid !== null) this._id = valid;
  }

  get id () {
    return this._id;
  }

  set type (value) {
    const valid = validateString(value, 'funnel.type');
    if (valid !== null) this._type = valid;
  }

  get type () {
    return this._type;
  }

  set name (value) {
    const valid = validateString(value, 'funnel.name');
    if (valid !== null) this._name = valid;
  }

  get name () {
    return this._name;
  }

  set step (value) {
    const valid = validateString(value, 'funnel.step');
    if (valid !== null) this._step = valid;
  }

  get step () {
    return this._step;
  }

  set current (value) {
    const valid = validateNumber(value, 'funnel.current');
    if (valid !== null) this._current = valid;
  }

  get current () {
    return this._current;
  }

  set total (value) {
    const valid = validateNumber(value, 'funnel.total');
    if (valid !== null) this._total = valid;
  }

  get total () {
    return this._total;
  }

  set objective (value) {
    const valid = validateString(value, 'funnel.objective');
    if (valid !== null) this._objective = valid;
    this._objective = value;
  }

  get objective () {
    return this._objective;
  }

  set error (value) {
    const valid = validateString(value, 'funnel.error');
    if (valid !== null) this._error = valid;
    this._error = value;
  }

  get error () {
    return this._error;
  }

  get layer () {
    const layer = [];
    if (this._id) layer.push('funnel_id', normalize(this._id));
    if (this._type) layer.push('funnel_type', normalize(this._type));
    if (this._name) layer.push('funnel_name', normalize(this._name));
    if (this._step) layer.push('funnel_step_name', normalize(this._step));
    if (!isNaN(this._current) && this._current > -1) layer.push('funnel_step_number', this._current);
    if (!isNaN(this._total) && this._total > -1) layer.push('funnel_step_max', this._total);
    if (this._objective) layer.push('funnel_objective', normalize(this._objective));
    if (this._error) layer.push('funnel_error', normalize(this._error));
    return layer;
  }
}

const State = {
  UNKNOWN: -1,
  CONFIGURING: 0,
  CONFIGURED: 1,
  INITIATED: 2,
  READY: 3
};

class TarteAuCitronIntegration {
  constructor (config) {
    this._config = config;
    this._state = State.UNKNOWN;
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  configure () {
    if (this._state >= State.CONFIGURED) return this._promise;
    if (this._state === State.UNKNOWN) {
      api.inspector.info('analytics configures tarteaucitron');
      this._state = State.CONFIGURING;
    }

    const tarteaucitron = window.tarteaucitron;
    if (!tarteaucitron || !tarteaucitron.services) {
      window.requestAnimationFrame(this.configure.bind(this));
      return;
    }

    this._state = State.CONFIGURED;
    const init = this.init.bind(this);

    const data = {
      key: 'eulerian',
      type: 'analytic',
      name: 'Eulerian Analytics',
      needConsent: true,
      cookies: ['etuix'],
      uri: 'https://eulerian.com/vie-privee',
      js: init,
      fallback: () => { tarteaucitron.services.eulerian.js(); }
    };

    tarteaucitron.services.eulerian = data;
    if (!tarteaucitron.job) tarteaucitron.job = [];
    tarteaucitron.job.push('eulerian');

    return this._promise;
  }

  init () {
    if (this._state >= State.INITIATED) return;
    this._state = State.INITIATED;
    window.__eaGenericCmpApi = this.integrate.bind(this);
    const update = this.update.bind(this);
    window.addEventListener('tac.close_alert', update);
    window.addEventListener('tac.close_panel', update);
  }

  integrate (cmpApi) {
    if (this._state >= State.READY) return;
    this._state = State.READY;
    this._cmpApi = cmpApi;

    api.inspector.info('analytics has integrated tarteaucitron');

    this._resolve();
    this.update();
  }

  update () {
    if (this._state < State.READY) return;
    this._cmpApi('tac', window.tarteaucitron, 1);
  }
}

class ConsentManagerPlatform {
  constructor (config) {
    this._config = config;

    if (config) {
      switch (config.id) {
        case 'tarteaucitron':
          this.integrateTarteAuCitron();
          break;
      }
    }
  }

  integrateTarteAuCitron () {
    this._tac = new TarteAuCitronIntegration(this._config);
    return this._tac.configure();
  }
}

const push = (type, layer) => {
  if (typeof window.EA_push !== 'function') {
    api.inspector.warn('Analytics datalayer not sent, Eulerian API isn\'t yet avalaible');
    return;
  }

  api.inspector.log('analytics', type, layer);

  window.EA_push(type, layer);
};

const PushType = {
  COLLECTOR: 'collector',
  ACTION: 'action',
  ACTION_PARAMETER: 'actionparam'
};

class Analytics {
  constructor () {
    this._isReady = false;
    this._readiness = new Promise((resolve, reject) => {
      if (this._isReady) resolve();
      else {
        this._resolve = resolve;
        this._reject = reject;
      }
    });
    this._configure(api);
  }

  _configure (api) {
    switch (true) {
      case window[patch.namespace] !== undefined:
        this._config = window[patch.namespace].configuration.analytics;
        window[patch.namespace].promise.then(this._build.bind(this), () => {});
        break;

      case api.internals !== undefined && api.internals.configuration !== undefined && api.internals.configuration.analytics !== undefined && api.internals.configuration.analytics.domain !== undefined:
        this._config = api.internals.configuration.analytics;
        this._build();
        break;

      case api.analytics !== undefined && api.analytics.domain !== undefined:
        this._config = api.analytics;
        this._build();
        break;

      default:
        api.inspector.warn('analytics configuration is incorrect or missing (required : domain)');
    }
  }

  _build () {
    switch (this._config.mode) {
      case Mode.MANUAL:
        this._mode = Mode.MANUAL;
        break;

      case Mode.NO_COMPONENTS:
        this._mode = Mode.NO_COMPONENTS;
        break;

      case Mode.AUTO:
      default:
        this._mode = Mode.AUTO;
    }

    this._init = new Init(this._config.domain);

    this._user = new User(this._config.user);
    this._site = new Site(this._config.site);
    this._page = new Page(this._config.page);
    this._search = new Search(this._config.search);
    this._funnel = new Funnel(this._config.funnel);

    this.reset();

    this._init.configure().then(this._start.bind(this), this._reject);
  }

  get isReady () {
    return this._isReady;
  }

  get readiness () {
    return this._readiness;
  }

  _start () {
    if (this._isReady) return;
    this._isReady = true;
    this._resolve();

    this._cmp = new ConsentManagerPlatform(this._config.cmp);

    switch (this._mode) {
      case Mode.AUTO:
      case Mode.NO_COMPONENTS:
        this.collect();
        break;
    }
  }

  get page () {
    return this._page;
  }

  get user () {
    return this._user;
  }

  get site () {
    return this._site;
  }

  get search () {
    return this._search;
  }

  get funnel () {
    return this._funnel;
  }

  get cmp () {
    return this._cmp;
  }

  push (type, layer) {
    push(type, layer);
  }

  reset (clear = false) {
    this._user.reset(clear);
    this._site.reset(clear);
    this._page.reset(clear);
    this._search.reset(clear);
    this._funnel.reset(clear);
  }

  collect () {
    const layer = [
      ...this._user.layer,
      ...this._site.layer,
      ...this._page.layer,
      ...this._search.layer,
      ...this._funnel.layer
    ];
    this.push(PushType.COLLECTOR, layer);
  }
}

const analytics = new Analytics();

analytics.Mode = Mode;
analytics.PushType = PushType;

/**
 * Copy properties from multiple sources including accessors.
 * source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#copier_des_accesseurs
 *
 * @param {object} [target] - Target object to copy into
 * @param {...objects} [sources] - Multiple objects
 * @return {object} A new object
 *
 * @example
 *
 *     const obj1 = {
 *        key: 'value'
 *     };
 *     const obj2 = {
 *        get function01 () {
 *          return a-value;
 *        }
 *        set function01 () {
 *          return a-value;
 *        }
 *     };
 *     completeAssign(obj1, obj2)
 */
const completeAssign = (target, ...sources) => {
  sources.forEach(source => {
    const descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    Object.getOwnPropertySymbols(source).forEach(sym => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
};

api.analytics = completeAssign(analytics, {});
