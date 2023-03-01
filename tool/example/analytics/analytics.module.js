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
    this.subTemplate = clear ? '' : this._config.subTemplate;
    this.theme = clear ? '' : this._config.theme;
    this.subTheme = clear ? '' : this._config.subTheme;
    this.related = clear ? '' : this._config.related;
    this.group = clear ? '' : this._config.group;
    this.segment = clear ? '' : this._config.segment;
    this.current = clear || isNaN(this._config.current) ? -1 : this._config.current;
    this.depth = clear || isNaN(this._config.depth) ? 0 : this._config.depth;
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

  set subTemplate (value) {
    const valid = validateString(value, 'page.subtemplate');
    if (valid !== null) this._subTemplate = valid;
  }

  get subTemplate () {
    return this._subTemplate;
  }

  set theme (value) {
    const valid = validateString(value, 'page.theme');
    if (valid !== null) this._theme = valid;
  }

  get theme () {
    return this._theme;
  }

  set subTheme (value) {
    const valid = validateString(value, 'page.subtheme');
    if (valid !== null) this._subTheme = valid;
  }

  get subTheme () {
    return this._subTheme;
  }

  set related (value) {
    const valid = validateString(value, 'page.related');
    if (valid !== null) this._related = valid;
  }

  get related () {
    return this._related;
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

  set depth (value) {
    const valid = validateNumber(value, 'page.depth');
    if (valid !== null) this._depth = valid;
  }

  get depth () {
    return this._depth;
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
    if (this._subTemplate) layer.push('page_subtemplate', normalize(this._subTemplate));
    if (this._theme) layer.push('page_theme', normalize(this._theme));
    if (this._subTheme) layer.push('page_subtheme', normalize(this._subTheme));
    if (this._related) layer.push('page_related', normalize(this._related));

    if (!isNaN(this._depth)) layer.push('page_depth', this._depth);

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

const Type$2 = {
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
    this._type = Object.values(Type$2).filter(type => type.id === id || type.value === id)[0];
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
User.Type = Type$2;

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

const ActionMode = {
  IN: 'in',
  OUT: 'out',
  NONE: 'none'
};

const ActionStatus = {
  UNSTARTED: {
    id: 'unstarted',
    value: -1
  },
  STARTED: {
    id: 'started',
    value: 1
  },
  ENDED: {
    id: 'ended',
    value: 2
  }
};

const getParametersLayer = (data) => {
  return Object.entries(data).map(([key, value]) => ['actionpname', normalize(key), 'actionpvalue', normalize(value)]).flat();
};

class Action {
  constructor (name, isCollectable = false) {
    this._isMuted = false;
    this._name = name;
    this._isCollectable = isCollectable;
    this._status = ActionStatus.UNSTARTED;
    this._labels = [];
    this._parameters = {};
  }

  get isMuted () {
    return this._isMuted;
  }

  set isMuted (value) {
    this._isMuted = value;
  }

  get isCollectable () {
    return this._isCollectable && this._status === ActionStatus.UNSTARTED;
  }

  get status () {
    return this._status;
  }

  get name () {
    return this._name;
  }

  get labels () {
    return this._labels;
  }

  get reference () {
    return this._reference;
  }

  get parameters () {
    return this._parameters;
  }

  addParameter (key, value) {
    this._parameters[key] = value;
  }

  removeParameter (key) {
    delete this._parameters[key];
  }

  set reference (value) {
    const valid = validateString(value, `action ${this._name}`);
    if (valid !== null) this._reference = valid;
  }

  get _base () {
    return ['actionname', this._name];
  }

  _getLayer (mode, data = {}) {
    if (this._isMuted) return [];
    const layer = this._base;
    switch (mode) {
      case ActionMode.IN:
      case ActionMode.OUT:
        layer.push('actionmode', mode);
        break;
    }

    const labels = this._labels.slice(0, 5);
    labels.length = 5;
    if (labels.some(label => label)) layer.push('actionlabel', labels.map(label => typeof label === 'string' ? normalize(label) : '').join(','));

    if (this._reference) layer.push('actionref', this._reference);

    if (data) layer.push.apply(layer, getParametersLayer({ ...this._parameters, ...data }));
    return layer;
  }

  start (data) {
    if (this._status.value > ActionStatus.UNSTARTED.value) {
      api.inspector.error(`unexpected start on action ${this._name} with status ${this._status.id}`);
      return;
    }
    const layer = this._getLayer(ActionMode.IN, data);
    this._status = ActionStatus.STARTED;
    return layer;
  }

  end (data) {
    const layer = this._getLayer(this._status === ActionStatus.STARTED ? ActionMode.OUT : ActionMode.NONE, data);
    this._status = ActionStatus.ENDED;
    return layer;
  }

  resume (data) {
    if (this._isMuted) return [];
    if (this._status.value >= ActionStatus.ENDED.value) {
      api.inspector.error(`unexpected resuming on action ${this._name} with status ${this._status.id}`);
      return [];
    }
    const layer = this._base;
    if (data) layer.push.apply(layer, getParametersLayer(data));
    return layer;
  }
}

class Actions {
  constructor () {
    this._actions = [];
  }

  getAction (name, isCollectable = false) {
    let action = this._actions.filter(action => action.name === name)[0];
    if (!action) {
      action = new Action(name, isCollectable);
      this._actions.push(action);
    }
    return action;
  }

  hasAction (name) {
    return this._actions.some(action => action.name === name);
  }

  remove (action) {
    const index = this._actions.indexOf(action);
    if (index === -1) return false;
    this._actions.splice(index, 1);
    return true;
  }

  get layers () {
    return this._actions.filter(action => action.isCollectable).map(action => action.start());
  }
}

Actions.ActionMode = ActionMode;

const actions = new Actions();
Actions.instance = actions;

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

const SLICE = 50;

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
    const actionLayers = actions.layers;

    let layer = [
      ...this._user.layer,
      ...this._site.layer,
      ...this._page.layer,
      ...this._search.layer,
      ...this._funnel.layer
    ];

    const length = ((actionLayers.length / SLICE) + 1) | 0;
    for (let i = 0; i < length; i++) {
      const slice = actionLayers.slice(i * SLICE, (i + 1) * SLICE);
      layer.push(...slice.flat());
      this.push(PushType.COLLECTOR, layer);
      layer = [];
    }
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

const Type$1 = {
  // impression
  IMPRESSION: {
    id: 'impression', // element appeared in the page
    mode: 'in',
    binding: false,
    type: 'impression'
  },
  // interaction
  CLICK: {
    id: 'click', // generic click interaction
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  INTERNAL: {
    id: 'internal', // anchor click redirecting on an internal url
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  EXTERNAL: {
    id: 'external', // anchor click redirecting on an external url
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  DOWNLOAD: {
    id: 'download', // anchor click downloading a file
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  BUTTON: {
    id: 'button', // button click
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'click',
    method: 'eventListener'
  },
  DOUBLE_CLICK: {
    id: 'dblclick', // double click
    mode: 'out',
    binding: true,
    type: 'interaction',
    event: 'dblclick',
    method: 'eventListener'
  },
  // event
  OPEN: {
    id: 'open', // open event
    mode: null,
    binding: false,
    type: 'event',
    method: 'eventListener'
  },
  COMPLETE: {
    id: 'complete', // complete event
    mode: null,
    binding: false,
    type: 'event',
    method: 'eventListener'
  },
  FOCUS: {
    id: 'focus', // focus event
    mode: null,
    binding: false,
    type: 'event',
    method: 'eventListener'
  },
  ERROR: {
    id: 'error', // error event
    mode: null,
    binding: false,
    type: 'event'
  },
  ADD: {
    id: 'add', // add event
    mode: null,
    binding: false,
    type: 'event'
  },
  REMOVE: {
    id: 'remove', // remove event
    mode: null,
    binding: false,
    type: 'event'
  },
  DISPLAY: {
    id: 'display', // display event
    mode: null,
    binding: false,
    type: 'event'
  },
  CHANGE: {
    id: 'change', // input event change
    mode: 'out',
    binding: true,
    type: 'event',
    event: 'change',
    method: 'change'
  },
  PROGRESS: {
    id: 'progress', // video retention event with percent of the part reached
    mode: 'out',
    binding: true,
    type: 'event'
  },
  // component interaction
  SHARE: {
    id: 'share', // component share click (share)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  PRESS: {
    id: 'press', // component press click (pressable tag)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  RELEASE: {
    id: 'release', // component release click (pressable tag)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  DISMISS: {
    id: 'dismiss', // component dismiss click (dismissible tag)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  UPLOAD: {
    id: 'upload', // component upload click (upload)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  CHECK: {
    id: 'check', // component check click (checkbox, radio, toggle)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  UNCHECK: {
    id: 'uncheck', // component uncheck click (checkbox, radio, toggle)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  SELECT: {
    id: 'select', // component select change (select)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  SUBSCRIBE: {
    id: 'subscribe', // component subscribe click (follow)
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  // component event
  DISCLOSE: {
    id: 'disclose', // component disclose event (accordion, modal, tab)
    mode: null,
    binding: false,
    type: 'event'
  },
  SHOW: {
    id: 'show', // component show event (tooltip)
    mode: null,
    binding: false,
    type: 'event'
  },
  HIDE: {
    id: 'hide', // component hide event (tooltip)
    mode: null,
    binding: false,
    type: 'event'
  },
  // video
  AUTOPLAY: {
    id: 'autoplay', // video autoplay event
    mode: 'out',
    binding: false,
    type: 'event'
  },
  PLAY: {
    id: 'play', // video play click
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  PAUSE: {
    id: 'pause', // video pause click
    mode: 'out',
    binding: false,
    type: 'interaction'
  },
  END: {
    id: 'end', // video end event
    mode: 'out',
    binding: false,
    type: 'event'
  }
};

const Type = {
  UNDEFINED: 'undefined',
  HEADING: 'heading',
  COMPONENT: 'component',
  CONTENT: 'content'
};

const NODE_POSITION = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY;

class Heading {
  constructor (heading) {
    this._label = heading.textContent.trim();
    this._level = Number(heading.tagName.charAt(1));
  }

  get level () {
    return this._level;
  }

  get label () {
    return this._label;
  }
}

class Member {
  constructor (node, target, level) {
    this._type = Type.UNDEFINED;
    this._node = node;
    this._target = target;
    this._level = level;
    this._label = '';
    this._component = '';
    this._isValid = true;
    this.analyse();
  }

  _parseHeadings () {
    const selector = Array.from({ length: this._level }, (v, i) => `:scope > h${i + 1}, :scope > * > h${i + 1}`).join(',');
    this._headings = [...this._node.querySelectorAll(selector)].filter(heading => (this._target.compareDocumentPosition(heading) & NODE_POSITION) > 0).map(heading => new Heading(heading)).reverse();
  }

  _getComponent () {
    if (typeof api !== 'function') return false;
    const element = api(this._node);
    if (!element) return false;
    const instance = Object.values(element).filter(actionee => actionee.isActionee).sort((a, b) => b.priority - a.priority)[0];
    if (!instance) return false;

    this._type = Type.COMPONENT;
    this._isValid = instance.validate(this._target);
    const selector = Array.from({ length: 6 }, (v, i) => `h${i + 1}`).join(',');
    const heading = this._node.closest(selector);
    if (heading) {
      this._level = Number(heading.tagName.charAt(1)) - 1;
    }
    // console.log('INSTANCE LEVEL', instance.level, this._level);

    if (!isNaN(instance.level) && instance.level < this._level) this._level = instance.level;
    this._label = instance.label;
    this._component = instance.component;
    return true;
  }

  _getHeading () {
    if (!this._headings.length) return false;
    const labels = [];
    this._headings.forEach(heading => {
      if (heading.level <= this._level) {
        if (heading.level > 1) labels.unshift(heading.label);
        this._level = heading.level - 1;
      }
    });
    if (!labels.length) return false;
    this._type = Type.HEADING;
    this._label = labels.join(' ＞ ');
    return true;
  }

  analyse () {
    this._parseHeadings();
    if (this._getComponent()) return;
    if (this._getHeading()) return;
    if (this._node !== this._target) return;

    const label = this._node.textContent.trim();
    if (!label) return;
    this._type = Type.CONTENT;
    this._label = label;
  }

  get type () {
    return this._type;
  }

  get level () {
    return this._level;
  }

  get label () {
    return this._label;
  }

  get component () {
    return this._component;
  }

  get node () {
    return this._node;
  }

  get target () {
    return this._target;
  }

  get isValid () {
    return this._isValid;
  }
}

class Hierarchy {
  constructor (node) {
    this._node = node;
    this._process();
  }

  _process () {
    // console.log('_______________ start ____________________');
    const member = new Member(this._node, this._node, 6);
    // console.log('- FIRST MEMBER', member);
    this._level = member.level;
    this._members = [member];

    let node = this._node.parentNode;

    while (document.documentElement.contains(node) && node !== document.documentElement && this._level > 0) {
      // console.log('MEMBERS ARRAY', this._members);
      // console.log('NODE ANALYSIS', node);
      const member = new Member(node, this._node, this._level);
      // console.log('NEW MEMBER', member);
      switch (true) {
        case member.type === Type.UNDEFINED:
          // console.log('****UNDEFINED');
          break;

        case !member.isValid:
          // console.log('****INVALID');
          break;

        case member.label === this._members[0].label && member.type === Type.HEADING && this._members[0].type === Type.COMPONENT:
          // console.log('***** SAME');
          // do nothing
          break;

        case member.label === this._members[0].label && member.type === Type.COMPONENT && this._members[0].type === Type.HEADING:
          // console.log('***** SAME INVERT');
          this._members.splice(0, 1, member);
          break;

        default:
          this._members.unshift(member);
          if (member.level < this._level) this._level = member.level;
      }

      node = node.parentNode;
    }

    this._label = normalize(this._members[this._members.length - 1].label);
    this._title = normalize(this._members.filter(member => member.label).map(member => member.label).join(' ＞ '));
    const components = this._members.filter(member => member.component).map(member => member.component);
    this._component = normalize(components.join(' ＞ '));
    this._localComponent = components[components.length - 1];
    this._globalComponent = components[0];

    // console.log('========= end ===========');
  }

  get localComponent () {
    return this._localComponent;
  }

  get globalComponent () {
    return this._globalComponent;
  }

  get label () {
    return this._label;
  }

  get title () {
    return this._title;
  }

  get component () {
    return this._component;
  }
}

class ActionElement {
  constructor (node, type, id, category = '', title = null) {
    this._node = node;
    this._type = type;
    this._id = id || this._node.id;
    this._isMuted = false;
    this._title = title;
    this._category = category;

    // this._init();
    requestAnimationFrame(this._init.bind(this));
  }

  _init () {
    this._hierarchy = new Hierarchy(this._node);

    let id = '';
    let type = '';
    if (this._id) id = `_[${this._id}]`;
    if (this._type) type = `_(${this._type.id})`;
    this._name = `${this._title || this._hierarchy.title}${id}${type}`;

    this._action = actions.getAction(this._name, true);
    this._action.isMuted = this._isMuted;

    this._action.labels[0] = this._type.id;
    this._action.labels[1] = this._hierarchy.globalComponent;
    this._action.labels[2] = this._hierarchy.localComponent;
    this._action.labels[4] = this._category;

    if (this._hierarchy.label) this._action.addParameter('component_label', this._hierarchy.label);
    if (this._hierarchy.title) this._action.addParameter('heading_hierarchy', this._hierarchy.title);
    if (this._hierarchy.component) this._action.addParameter('component_hierarchy', this._hierarchy.component);
  }

  get isMuted () {
    return this._isMuted;
  }

  set isMuted (value) {
    this._isMuted = value;
    if (this._action) this.action.isMuted = value;
  }

  get action () {
    return this._action;
  }

  act (data = {}) {
    const layer = this._action.end(data);
    push(PushType.ACTION, layer);
  }

  dispose () {
    actions.remove(this._action);
  }
}

class Actionee extends api.core.Instance {
  constructor (type = null, priority = -1, category = '', title = null) {
    super();
    this._type = type;
    this._priority = priority;
    this._category = category;
    this._title = title;
    this._data = {};
  }

  static get instanceClassName () {
    return 'Actionee';
  }

  get proxy () {
    const scope = this;

    const proxy = {
      validate: (target, members) => scope.validate(target, members)
    };

    const proxyAccessors = {
      get isActionee () {
        return true;
      },
      get label () {
        return scope.label;
      },
      get priority () {
        return scope.priority;
      },
      get level () {
        return scope.level;
      },
      get node () {
        return scope.node; // TODO: remove in v2
      }
    };

    return api.internals.property.completeAssign(super.proxy, proxy, proxyAccessors);
  }

  listenClick () {
    this.listen('click', this.handleClick.bind(this), { capture: true });
  }

  handleClick () {
    this.act();
  }

  _config (element, registration) {
    super._config(element, registration);
    if (this._type !== null) this._actionElement = new ActionElement(this.node, this._type, this.id, this._category, this._title);

    const actionees = element.instances.filter(instance => instance.isActionee).sort((a, b) => b.priority - a.priority);
    if (actionees.length <= 1) return;
    actionees.forEach((actionee, index) => { actionee.isMuted = index > 0; });
  }

  get isMuted () {
    return !this._actionElement && this._actionElement.isMuted;
  }

  set isMuted (value) {
    if (this._actionElement) this._actionElement.isMuted = value;
  }

  detectInteraction (node) {
    if (!node) node = this.node;
    const tag = node.tagName.toLowerCase();
    const href = node.getAttribute('href');
    const target = node.getAttribute('target');
    const isDownload = node.hasAttribute('download');

    switch (true) {
      case tag === 'a' && isDownload:
        this._type = Type$1.DOWNLOAD;
        this._data.component_value = href;
        break;

      case tag === 'a' && typeof target === 'string' && target.toLowerCase() === '_blank':
        this._type = Type$1.EXTERNAL;
        this._data.component_value = href;
        break;

      case tag === 'a':
        this._type = Type$1.INTERNAL;
        this._data.component_value = href;
        break;

      default:
        this._type = Type$1.CLICK;
    }
  }

  act (data = {}) {
    if (this._actionElement !== undefined) this._actionElement.act(Object.assign(this._data, data));
  }

  getInteractionLabel () {
    const title = this.getAttribute('title');
    if (title) return title;

    const content = this.node.textContent.trim();
    if (content) return content;

    const img = this.node.querySelector('img');
    if (img) return img.getAttribute('alt').trim();

    return null;
  }

  detectLevel (node) {
    if (!node) node = this.node;
    const selector = Array.from({ length: 6 }, (v, i) => `h${i + 1}`).join(',');
    const levels = [...node.querySelectorAll(selector)].map(heading => Number(heading.tagName.charAt(1)));
    if (levels.length) this._level = Math.min.apply(null, levels) - 1;
  }

  validate (target) {
    return true;
  }

  get actionElement () {
    return this._actionElement;
  }

  get label () {
    return null;
  }

  get priority () {
    return this._priority;
  }

  get isActionee () {
    return true;
  }

  get level () {
    return this._level;
  }
}

class AttributeActionee extends Actionee {
  constructor () {
    super(null, 100);
  }

  static get instanceClassName () {
    return 'AttributeActionee';
  }

  init () {
    this._attribute = this.registration.selector.replace(/[[\]]/g, '');
    const id = this._attribute.split('-').pop();
    this._type = Object.values(Type$1).filter(type => type.id === id)[0];

    this._title = this.getAttribute(this._attribute);

    switch (this._type.method) {
      case 'eventListener':
        this.listen(this._type.event, this.handleEvent.bind(this));
        break;

      case 'change':
        this.listen(this._type.event, this.handleChange.bind(this));
        break;
    }
  }

  handleEvent (e) {
    this._actionElement.act();
  }

  handleChange (e) {
    this._actionElement.act({ change_value: e.target.value });
  }

  dispose () {
    this._actionElement.dispose();
    super.dispose();
  }
}

Object.values(Type$1)
  .filter(type => type.binding)
  .forEach(type => api.internals.register(api.internals.ns.attr.selector(`analytics-${type.id}`), AttributeActionee));

class ComponentActionee extends Actionee {
  constructor (type = null, priority = -1) {
    super(type, priority, 'dsfr_component');
  }

  static get instanceClassName () {
    return 'ComponentActionee';
  }

  get proxy () {
    const scope = this;

    const proxyAccessors = {
      get component () {
        return scope.component;
      }
    };

    return api.internals.property.completeAssign(super.proxy, proxyAccessors);
  }

  listenDisclose () {
    this.listen(api.core.DisclosureEvent.DISCLOSE, this.handleDisclose.bind(this), { capture: true });
  }

  handleDisclose () {
    this.act();
  }

  listenCheckable () {
    this.listen('change', this.handleCheckable.bind(this), { capture: true });
  }

  handleCheckable (e) {
    if (e.target && e.target.value !== 'on') {
      this._data.component_value = e.target.value;
    }

    switch (true) {
      case this._type === Type$1.CHECK && e.target.checked:
      case this._type === Type$1.UNCHECK && !e.target.checked:
        this.act();
        break;
    }
  }

  detectCheckable () {
    const isChecked = this.node.checked;
    this._type = isChecked ? Type$1.UNCHECK : Type$1.CHECK;
  }

  get component () {
    return null;
  }
}

const AccordionSelector = {
  ACCORDION: api.internals.ns.selector('accordion'),
  TITLE: api.internals.ns.selector('accordion__title')
};

const ID$i = 'dsfr_accordion';

class AccordionButtonActionee extends ComponentActionee {
  constructor () {
    super(Type$1.CLICK, 2);
  }

  static get instanceClassName () {
    return 'AccordionButtonActionee';
  }

  init () {
    this.id = this.node.id || this.registration.creator.node.id;
    this._button = this.element.getInstance('CollapseButton');
    this.listenClick();
  }

  handleClick () {
    if (!this._button.disclosed) this.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID$i;
  }
}

class AccordionActionee extends ComponentActionee {
  constructor () {
    super(Type$1.DISCLOSE, 2);
  }

  static get instanceClassName () {
    return 'AccordionActionee';
  }

  init () {
    this.wrapper = this.node.closest(AccordionSelector.ACCORDION);
    this.detectLevel(this.wrapper);
    this.register(`[aria-controls="${this.id}"]`, AccordionButtonActionee);
    this._instance = this.element.getInstance('Collapse');
    this.listenDisclose();
  }

  get label () {
    if (this.wrapper) {
      const title = this.wrapper.querySelector(AccordionSelector.TITLE);
      if (title) return title.textContent.trim();
    }
    const button = this._instance.buttons.filter(button => button.isPrimary)[0];
    if (button) return button.node.textContent.trim();
    return null;
  }

  get component () {
    return ID$i;
  }
}

const BreadcrumbSelector = {
  LINK: api.internals.ns.selector('breadcrumb__link'),
  COLLAPSE: `${api.internals.ns.selector('breadcrumb')} ${api.internals.ns.selector('collapse')}`
};

class BreadcrumbButtonActionee extends ComponentActionee {
  constructor () {
    super(Type$1.CLICK, 2);
  }

  static get instanceClassName () {
    return 'BreadcrumbButtonActionee';
  }

  init () {
    this.id = this.node.id || this.registration.creator.node.id;
    this._button = this.element.getInstance('BreadcrumbButton');
    this.listenClick();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return null;
  }
}

const ID$h = 'dsfr_breadcrumb';

class BreadcrumbActionee extends ComponentActionee {
  constructor () {
    super(Type$1.IMPRESSION, 2);
  }

  static get instanceClassName () {
    return 'BreadcrumbActionee';
  }

  init () {
    if (!this.isBreakpoint(api.core.Breakpoints.MD)) {
      this.register(`[aria-controls="${this.id}"]`, BreadcrumbButtonActionee);
      this.listenDisclose();
    }
  }

  handleDisclose () {
    this.act();
  }

  get label () {
    return 'fil d\'ariane';
  }

  get component () {
    return ID$h;
  }
}

class BreadcrumbLinkActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'BreadcrumbLinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  handleClick () {
    this.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return null;
  }
}

const ButtonSelector = {
  BUTTON: api.internals.ns.selector('btn')
};

const ID$g = 'dsfr_button';

const ButtonEmission = {
  GET_DATA: api.internals.ns.emission('button', 'get-data')
};

class ButtonActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'ButtonActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  handleClick () {
    /* GET_DATA permet d'aller retrouver search_terms dans la search-bar */
    const data = this.ascend(ButtonEmission.GET_DATA);
    this.act(Object.assign({}, ...data));
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID$g;
  }
}

const CalloutSelector = {
  CALLOUT: api.internals.ns.selector('callout'),
  TITLE: api.internals.ns.selector('callout__title')
};

const ID$f = 'dsfr_callout';

class CalloutActionee extends ComponentActionee {
  constructor () {
    super(Type$1.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'CalloutActionee';
  }

  get label () {
    const calloutTitle = this.node.querySelector(CalloutSelector.TITLE);
    if (calloutTitle) return calloutTitle.textContent.trim();

    return 'Mise en avant';
  }

  get component () {
    return ID$f;
  }
}

const CardSelector = {
  CARD: api.internals.ns.selector('card'),
  LINK: `${api.internals.ns.selector('card__title')} a`,
  TITLE: api.internals.ns.selector('card__title')
};

const ID$e = 'dsfr_card';

class CardActionee extends ComponentActionee {
  constructor () {
    super(Type$1.IMPRESSION);
    this.handlingClick = this.handleClick.bind(this);
  }

  static get instanceClassName () {
    return 'CardActionee';
  }

  init () {
    const link = this.node.querySelector(CardSelector.LINK);
    if (link) {
      this.link = link;
      this.detectInteraction(link);
      this.link.addEventListener('click', this.handlingClick, { capture: true });
    }
  }

  get label () {
    const cardTitle = this.node.querySelector(CardSelector.TITLE);
    if (cardTitle) return cardTitle.textContent.trim();

    const selector = Array.from({ length: 6 }, (v, i) => `h${i + 1}`).join(',');
    const headings = this.node.querySelector(selector) ? [...this.node.querySelector(selector)].filter(heading => (this.node.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) : [];
    if (headings.length) return headings[0].textContent.trim();

    return null;
  }

  get component () {
    return ID$e;
  }

  dispose () {
    if (this.link) this.link.removeEventListener('click', this.handlingClick, { capture: true });
    super.dispose();
  }
}

const CheckboxSelector = {
  INPUT: api.internals.ns.selector('checkbox-group [type="checkbox"]')
};

const ID$d = 'dsfr_checkbox';

class CheckboxActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'CheckboxActionee';
  }

  init () {
    this.detectCheckable();
    this.listenCheckable();
  }

  get label () {
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    return label.textContent.trim();
  }

  get component () {
    return ID$d;
  }
}

const FooterSelector = {
  FOOTER: api.internals.ns.selector('footer'),
  FOOTER_LINKS: `${api.internals.ns.selector('footer__content-link')}, ${api.internals.ns.selector('footer__bottom-link')}, ${api.internals.ns.selector('footer__top-link')}, ${api.internals.ns.selector('footer__partners-link')}`
};

const ID$c = 'dsfr_footer';

class FooterActionee extends ComponentActionee {
  constructor () {
    super(Type$1.IMPRESSION);
  }

  static get instanceClassName () {
    return 'FooterActionee';
  }

  get label () {
    return 'Pied de page';
  }

  get component () {
    return ID$c;
  }
}

class FooterLinkActionee extends ComponentActionee {
  constructor () {
    super(Type$1.INTERNAL, 2);
  }

  static get instanceClassName () {
    return 'FooterLinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  get label () {
    return this.getInteractionLabel();
  }
}

const ID$b = 'dsfr_header';

class HeaderActionee extends ComponentActionee {
  constructor () {
    super(Type$1.IMPRESSION);
  }

  static get instanceClassName () {
    return 'HeaderActionee';
  }

  get label () {
    return 'En-tête';
  }

  get component () {
    return ID$b;
  }
}

const HeaderSelector = {
  TOOLS_BUTTON: `${api.internals.ns.selector('header__tools-links')} ${api.internals.ns.selector('btns-group')} ${api.internals.ns.selector('btn')}`,
  MENU_BUTTON: `${api.internals.ns.selector('header__menu-links')} ${api.internals.ns.selector('btns-group')} ${api.internals.ns.selector('btn')}`
};

class HeaderModalButtonActionee extends ComponentActionee {
  constructor () {
    super(null, 4);
  }

  static get instanceClassName () {
    return 'HeaderModalButtonActionee';
  }
}

class HeaderModalActionee extends ComponentActionee {
  constructor () {
    super(null, 0);
  }

  static get instanceClassName () {
    return 'HeaderModalActionee';
  }

  init () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) {
      this._priority = 4;
      this.register(`[aria-controls="${this.id}"]`, HeaderModalButtonActionee);
    }
  }
}

class HeaderToolsButtonActionee extends ComponentActionee {
  constructor () {
    super(null, 4);
  }

  static get instanceClassName () {
    return 'HeaderToolsButtonActionee';
  }

  init () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) this._priority = -1;
  }
}

class HeaderMenuButtonActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'HeaderMenuButtonActionee';
  }

  init () {
    if (this.isBreakpoint(api.core.Breakpoints.LG)) this._priority = 4;
  }
}

const HighlightSelector = {
  HIGHLIGHT: api.internals.ns.selector('highlight')
};

const ID$a = 'dsfr_highlight';

class HighlightActionee extends ComponentActionee {
  constructor () {
    super(Type$1.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'HighlightActionee';
  }

  get label () {
    return 'Mise en exergue';
  }

  get component () {
    return ID$a;
  }
}

const LinkSelector = {
  LINK: api.internals.ns.selector('link')
};

const ID$9 = 'dsfr_link';

class LinkActionee extends ComponentActionee {
  constructor () {
    super(Type$1.INTERNAL, 1);
  }

  static get instanceClassName () {
    return 'LinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID$9;
  }
}

const NavigationSelector = {
  LINK: api.internals.ns.selector('nav__link'),
  BUTTON: api.internals.ns.selector('nav__btn')
};

class NavigationActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
  }

  static get instanceClassName () {
    return 'NavigationActionee';
  }

  get label () {
    return 'Navigation';
  }
}

class NavigationSectionActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'NavigationSectionActionee';
  }

  init () {
    this._wrapper = this.node.closest(api.navigation.NavigationSelector.ITEM);
    this._instance = this.element.getInstance('Collapse');
  }

  get label () {
    if (this._wrapper) {
      const button = this._wrapper.querySelector(NavigationSelector.BUTTON);
      if (button) return button.textContent.trim();
    }
    const button = this._instance.buttons.filter(button => button.isPrimary)[0];
    if (button) return button.node.textContent.trim();
    return null;
  }
}

const ID$8 = 'dsfr_navigation';

class NavigationLinkActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'NavigationLinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID$8;
  }
}

const ModalSelector = {
  TITLE: api.internals.ns.selector('modal__title')
};

const ID$7 = 'dsfr_modal';

class ModalActionee extends ComponentActionee {
  constructor () {
    super(Type$1.DISCLOSE, 2);
  }

  static get instanceClassName () {
    return 'ModalActionee';
  }

  init () {
    this.detectLevel();
    this.listenDisclose();
  }

  get label () {
    const title = this.node.querySelector(ModalSelector.TITLE);

    if (title) return title.textContent.trim();

    const selector = Array.from({ length: 2 }, (v, i) => `h${i + 1}`).join(',');
    const headings = this.node.querySelector(selector) ? [...this.node.querySelector(selector)].filter(heading => (this.node.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) : [];

    if (headings.length) return headings[0].textContent.trim();

    const button = this.element.getInstance('Modal').buttons.filter(button => button.isPrimary)[0];
    return button.node.textContent.trim();
  }

  get component () {
    return ID$7;
  }
}

const RadioSelector = {
  INPUT: api.internals.ns.selector('radio-group [type="radio"]')
};

const FormSelector = {
  LABEL: api.internals.ns.selector('label'),
  FIELDSET: api.internals.ns.selector('fieldset'),
  LEGEND: api.internals.ns.selector('fieldset__legend')
};

const ID$6 = 'dsfr_radio';

class RadioActionee extends ComponentActionee {
  constructor () {
    super(Type$1.CHECK, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'RadioActionee';
  }

  init () {
    this.listenCheckable();
  }

  get label () {
    const parts = [];
    const fieldset = this.node.closest(FormSelector.FIELDSET);
    if (fieldset) {
      const legend = fieldset.querySelector(FormSelector.LEGEND);
      if (legend) parts.push(legend.textContent.trim());
    }
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    if (label) parts.push(label.textContent.trim());
    return parts.join(' ＞ ');
  }

  get component () {
    return ID$6;
  }
}

const SearchSelector = {
  SEARCH_BAR: api.internals.ns.selector('search-bar')
};

const ID$5 = 'dsfr_search';

class SearchActionee extends ComponentActionee {
  constructor () {
    super(Type$1.IMPRESSION);
  }

  static get instanceClassName () {
    return 'SearchActionee';
  }

  init () {
    this.addAscent(ButtonEmission.GET_DATA, this.getData.bind(this));
    this._input = this.querySelector('input[type="search"],input[type="text"]');
  }

  getData () {
    return { search_terms: this._input.value };
  }

  get label () {
    return 'barre de recherche';
  }

  get component () {
    return ID$5;
  }
}

const SidemenuSelector = {
  SIDEMENU: api.internals.ns.selector('sidemenu'),
  ITEM: api.internals.ns.selector('sidemenu__item'),
  LINK: api.internals.ns.selector('sidemenu__link'),
  BUTTON: api.internals.ns.selector('sidemenu__btn'),
  TITLE: api.internals.ns.selector('sidemenu__title')
};

class SidemenuActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
  }

  static get instanceClassName () {
    return 'SidemenuActionee';
  }

  get label () {
    const sidemenu = this.node.closest(SidemenuSelector.SIDEMENU);
    if (sidemenu) {
      const title = sidemenu.querySelector(SidemenuSelector.TITLE);
      if (title) return title.textContent.trim();
    }

    return 'Menu Latéral';
  }
}

const ID$4 = 'dsfr_sidemenu';

class SidemenuLinkActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'SidemenuLinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID$4;
  }
}

class SidemenuSectionActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'SidemenuSectionActionee';
  }

  init () {
    this._wrapper = this.node.closest(SidemenuSelector.ITEM);
    this._instance = this.element.getInstance('Collapse');
  }

  get label () {
    if (this._wrapper) {
      const button = this._wrapper.querySelector(SidemenuSelector.BUTTON);
      if (button) return button.textContent.trim();
    }
    const button = this._instance.buttons.filter(button => button.isPrimary)[0];
    if (button) return button.node.textContent.trim();
    return null;
  }
}

const ShareSelector = {
  SHARE: api.internals.ns.selector('share'),
  TITLE: api.internals.ns.selector('share__title')
};

const ID$3 = 'dsfr_share';

class ShareActionee extends ComponentActionee {
  constructor () {
    super(Type$1.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'ShareActionee';
  }

  get label () {
    const title = this.querySelector(ShareSelector.TITLE);
    if (title) return title.textContent.trim();
    return 'Boutons de partage';
  }

  get component () {
    return ID$3;
  }
}

const SummarySelector = {
  SUMMARY: api.internals.ns.selector('summary'),
  LINK: api.internals.ns.selector('summary__link'),
  TITLE: api.internals.ns.selector('summary__title'),
  ITEM: `${api.internals.ns.selector('summary')} li`
};

class SummaryActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
  }

  static get instanceClassName () {
    return 'SummaryActionee';
  }

  get label () {
    const title = this.node.querySelector(SummarySelector.TITLE);
    if (title) return title.textContent.trim();
    return 'Sommaire';
  }
}

const ID$2 = 'dsfr_summary';

class SummaryLinkActionee extends ComponentActionee {
  constructor () {
    super(Type$1.INTERNAL, 1);
  }

  static get instanceClassName () {
    return 'SummaryLinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID$2;
  }
}

class SummarySectionActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'SummarySectionActionee';
  }

  init () {
    this._link = this.querySelector(SummarySelector.LINK);
  }

  validate (target) {
    return this._link !== target;
  }

  get label () {
    if (!this._link) return null;
    return this._link.textContent.trim();
  }
}

const ToggleSelector = {
  INPUT: api.internals.ns.selector('toggle [type="checkbox"]')
};

const ID$1 = 'dsfr_toggle';

class ToggleActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'ToggleActionee';
  }

  init () {
    this.detectCheckable();
    this.listenCheckable();
  }

  get label () {
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('toggle__label'));
    return label.textContent.trim();
  }

  get component () {
    return ID$1;
  }
}

const ID = 'dsfr_tab';

class TabButtonActionee extends ComponentActionee {
  constructor () {
    super(Type$1.CLICK, 2);
  }

  static get instanceClassName () {
    return 'TabButtonActionee';
  }

  init () {
    this.id = this.node.id || this.registration.creator.node.id;
    this._button = this.element.getInstance('TabButton');
    this.listen('click', this.click.bind(this), { capture: true });
  }

  click () {
    this.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

class TabActionee extends ComponentActionee {
  constructor () {
    super(Type$1.DISCLOSE, 2);
  }

  static get instanceClassName () {
    return 'TabActionee';
  }

  init () {
    this.register(`[aria-controls="${this.id}"]`, TabButtonActionee);
    this._instance = this.element.getInstance('TabPanel');
    this.listenDisclose();
  }

  get label () {
    const tabs = this.node.closest(api.tab.TabSelector.GROUP);
    if (tabs) {
      const tab = tabs.querySelector(`${api.tab.TabSelector.LIST} [aria-controls="${this.id}"]${api.tab.TabSelector.TAB}`);
      if (tab) return tab.textContent.trim();
    }

    const button = this._instance.buttons.filter(button => button.isPrimary)[0];
    if (button) return button.node.textContent.trim();
    return null;
  }

  get component () {
    return ID;
  }
}

if (api.accordion) {
  api.internals.register(api.accordion.AccordionSelector.COLLAPSE, AccordionActionee);
}

if (api.breadcrumb) {
  api.internals.register(BreadcrumbSelector.COLLAPSE, BreadcrumbActionee);
  api.internals.register(BreadcrumbSelector.LINK, BreadcrumbLinkActionee);
}

api.internals.register(ButtonSelector.BUTTON, ButtonActionee);

api.internals.register(CalloutSelector.CALLOUT, CalloutActionee);

api.internals.register(CardSelector.CARD, CardActionee);

api.internals.register(CheckboxSelector.INPUT, CheckboxActionee);

api.internals.register(FooterSelector.FOOTER, FooterActionee);
api.internals.register(FooterSelector.FOOTER_LINKS, FooterLinkActionee);

if (api.header) {
  api.internals.register(api.header.HeaderSelector.HEADER, HeaderActionee);
  api.internals.register(api.header.HeaderSelector.MODALS, HeaderModalActionee);
  api.internals.register(HeaderSelector.TOOLS_BUTTON, HeaderToolsButtonActionee);
  api.internals.register(HeaderSelector.MENU_BUTTON, HeaderMenuButtonActionee);
}

api.internals.register(HighlightSelector.HIGHLIGHT, HighlightActionee);

api.internals.register(LinkSelector.LINK, LinkActionee);

if (api.modal) {
  api.internals.register(api.modal.ModalSelector.MODAL, ModalActionee);
}

if (api.navigation) {
  api.internals.register(api.navigation.NavigationSelector.NAVIGATION, NavigationActionee);
  api.internals.register(NavigationSelector.LINK, NavigationLinkActionee);
  api.internals.register(api.navigation.NavigationSelector.COLLAPSE, NavigationSectionActionee);
}

api.internals.register(RadioSelector.INPUT, RadioActionee);

api.internals.register(SearchSelector.SEARCH_BAR, SearchActionee);

if (api.sidemenu) {
  api.internals.register(SidemenuSelector.SIDEMENU, SidemenuActionee);
  api.internals.register(SidemenuSelector.LINK, SidemenuLinkActionee);
  api.internals.register(api.sidemenu.SidemenuSelector.COLLAPSE, SidemenuSectionActionee);
}

api.internals.register(ShareSelector.SHARE, ShareActionee);

api.internals.register(SummarySelector.SUMMARY, SummaryActionee);
api.internals.register(SummarySelector.LINK, SummaryLinkActionee);
api.internals.register(SummarySelector.ITEM, SummarySectionActionee);

if (api.tab) {
  api.internals.register(api.tab.TabSelector.PANEL, TabActionee);
}

api.internals.register(ToggleSelector.INPUT, ToggleActionee);
