/*! DSFR v1.9.0-alpha | SPDX-License-Identifier: MIT | License-Filename: LICENSE.md | restricted use (see terms and conditions) */

(function () {
  'use strict';

  var config = {
    prefix: 'fr',
    namespace: 'dsfr',
    organisation: '@gouvfr',
    version: '1.9.0-alpha'
  };

  var api = window[config.namespace];

  var patch = {
    namespace: 'a4e35ba2a938ba9d007689dbf3f46acbb9807869'
  };

  var Mode = {
    MANUAL: 'manual',
    AUTO: 'auto',
    NO_COMPONENTS: 'no_components'
  };

  var PUSH = 'EA_push';

  var Init = function Init (domain) {
    var this$1$1 = this;

    this._domain = domain;
    this._isLoaded = false;
    this._promise = new Promise(function (resolve, reject) {
      this$1$1._resolve = resolve;
      this$1$1._reject = reject;
    });
  };

  var prototypeAccessors$6 = { id: { configurable: true },store: { configurable: true } };

  Init.prototype.configure = function configure () {
    this.pushing();
    this.load();
    return this._promise;
  };

  prototypeAccessors$6.id.get = function () {
    if (!this._id) {
      var bit = 5381;
      for (var i = this._domain.length - 1; i > 0; i--) { bit = (bit * 33) ^ this._domain.charCodeAt(i); }
      bit >>>= 0;
      this._id = "_EA_" + bit;
    }
    return this._id;
  };

  prototypeAccessors$6.store.get = function () {
    if (!this._store) {
      this._store = [];
      this._store.eah = this._domain;
      window[this.id] = this._store;
    }
    return this._store;
  };

  Init.prototype.pushing = function pushing () {
      var this$1$1 = this;

    if (!window[PUSH]) { window[PUSH] = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return this$1$1.store.push(args);
        }; }
  };

  Init.prototype.load = function load () {
    var stamp = new Date() / 1E7 | 0;
    var offset = stamp % 26;
    var key = String.fromCharCode(97 + offset, 122 - offset, 65 + offset) + (stamp % 1E3);
    this._script = document.createElement('script');
    this._script.ea = this.id;
    this._script.async = true;
    this._script.addEventListener('load', this.loaded.bind(this));
    this._script.addEventListener('error', this.error.bind(this));
    this._script.src = "//" + (this._domain) + "/" + key + ".js?2";
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(this._script, node);
  };

  Init.prototype.error = function error () {
    api.inspector.error('unable to load Eulerian script file. the domain declared in your configuration must match the domain provided by the Eulerian interface (tag creation)');
    this._reject();
  };

  Init.prototype.loaded = function loaded () {
    if (this._isLoaded) { return; }
    this._isLoaded = true;
    this._resolve();
  };

  Object.defineProperties( Init.prototype, prototypeAccessors$6 );

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

  var charCodeHex = function (char) {
    var code = char.charCodeAt(0).toString(16);
    return '0x0000'.slice(0, -code.length) + code;
  };

  var normalize = function (text) {
    if (!text) { return text; }
    // text = [...text].map(char => TABLE[charCodeHex(char)] || char).join('');
    text = [].concat( text ).map(function (char) { return RESTRICTED[charCodeHex(char)] || char; }).join('');
    text = text.replace(/\s/g, '_');
    text = text.toLowerCase();
    return text;
  };

  var validateString = function (value, name, allowNull) {
    if ( allowNull === void 0 ) allowNull = true;

    switch (true) {
      case typeof value === 'number':
        return ("" + value);

      case typeof value === 'string':
        return value;

      case value === undefined && allowNull:
      case value === null && allowNull:
        return '';
    }

    api.inspector.warn(("unexpected value '" + value + "' set at analytics." + name + ". Expecting a String"));
    return null;
  };

  var validateNumber = function (value, name, allowNull) {
    if ( allowNull === void 0 ) allowNull = true;

    switch (true) {
      case !isNaN(value):
        return value;

      case typeof value === 'string' && !isNaN(Number(value)):
        return Number(value);

      case value === undefined && allowNull:
      case value === null && allowNull:
        return -1;
    }

    api.inspector.warn(("unexpected value '" + value + "' set at analytics." + name + ". Expecting a Number"));
    return null;
  };

  var validateBoolean = function (value, name) {
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

    api.inspector.warn(("unexpected value '" + value + "' set at analytics." + name + ". Expecting a Boolean"));
    return null;
  };

  var validateLang = function (value, name, allowNull) {
    if ( allowNull === void 0 ) allowNull = true;

    switch (true) {
      case typeof value === 'string' && /^[A-Za-z]{2}$|^[A-Za-z]{2}[-_]/.test(value):
        return value.split(/[-_]/)[0].toLowerCase();

      case value === undefined && allowNull:
      case value === null && allowNull:
        return '';
    }

    api.inspector.warn(("unexpected value '" + value + "' set at analytics." + name + ". Expecting language as a String following ISO 639-1 format"));
    return null;
  };

  var validateGeography = function (value, name, allowNull) {
    if ( allowNull === void 0 ) allowNull = true;

    switch (true) {
      case typeof value === 'string':
        if (!/^FR-[A-Z0-9]{2,3}$/.test(value)) { api.inspector.warn(("value '" + value + "' set at analytics." + name + " with wrong format. Geographic location should be a String following ISO 3166-2:FR format")); }
        return value;

      case value === undefined && allowNull:
      case value === null && allowNull:
        return '';
    }

    api.inspector.warn(("unexpected value '" + value + "' set at analytics." + name + ". Expecting geographic location as a String following ISO 3166-2:FR format"));
    return null;
  };

  var Page = function Page (config) {
    this._config = config || {};
  };

  var prototypeAccessors$5 = { path: { configurable: true },referrer: { configurable: true },title: { configurable: true },name: { configurable: true },labels: { configurable: true },categories: { configurable: true },isError: { configurable: true },template: { configurable: true },segment: { configurable: true },group: { configurable: true },current: { configurable: true },total: { configurable: true },filters: { configurable: true },layer: { configurable: true } };

  Page.prototype.reset = function reset (clear) {
      if ( clear === void 0 ) clear = false;

    this.path = clear ? '' : this._config.path || document.location.pathname;
    this.referrer = clear ? '' : this._config.referrer;
    var title = this._config.title || document.title;
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
  };

  prototypeAccessors$5.path.set = function (value) {
    var valid = validateString(value, 'page.path');
    if (valid !== null) { this._path = valid; }
  };

  prototypeAccessors$5.path.get = function () {
    return this._path;
  };

  prototypeAccessors$5.referrer.set = function (value) {
    var valid = validateString(value, 'page.referrer');
    if (valid !== null) { this._referrer = valid; }
  };

  prototypeAccessors$5.referrer.get = function () {
    return this._referrer;
  };

  prototypeAccessors$5.title.set = function (value) {
    var valid = validateString(value, 'page.title');
    if (valid !== null) { this._title = valid; }
  };

  prototypeAccessors$5.title.get = function () {
    return this._title;
  };

  prototypeAccessors$5.name.set = function (value) {
    var valid = validateString(value, 'page.name');
    if (valid !== null) { this._name = valid; }
  };

  prototypeAccessors$5.name.get = function () {
    return this._name;
  };

  prototypeAccessors$5.labels.get = function () {
    return this._labels;
  };

  prototypeAccessors$5.categories.get = function () {
    return this._categories;
  };

  prototypeAccessors$5.isError.set = function (value) {
    var valid = validateBoolean(value, 'page.isError');
    if (valid !== null) { this._isError = valid; }
  };

  prototypeAccessors$5.isError.get = function () {
    return this._isError;
  };

  prototypeAccessors$5.template.set = function (value) {
    var valid = validateString(value, 'page.template');
    if (valid !== null) { this._template = valid; }
  };

  prototypeAccessors$5.template.get = function () {
    return this._template;
  };

  prototypeAccessors$5.segment.set = function (value) {
    var valid = validateString(value, 'page.segment');
    if (valid !== null) { this._segment = valid; }
  };

  prototypeAccessors$5.segment.get = function () {
    return this._segment;
  };

  prototypeAccessors$5.group.set = function (value) {
    var valid = validateString(value, 'page.group');
    if (valid !== null) { this._group = valid; }
  };

  prototypeAccessors$5.group.get = function () {
    return this._group;
  };

  prototypeAccessors$5.current.set = function (value) {
    var valid = validateNumber(value, 'page.current');
    if (valid !== null) { this._current = valid; }
  };

  prototypeAccessors$5.current.get = function () {
    return this._current;
  };

  prototypeAccessors$5.total.set = function (value) {
    var valid = validateNumber(value, 'page.total');
    if (valid !== null) { this._total = valid; }
  };

  prototypeAccessors$5.total.get = function () {
    return this._total;
  };

  prototypeAccessors$5.filters.get = function () {
    return this._filters;
  };

  prototypeAccessors$5.layer.get = function () {
    var layer = [];
    if (this._path) { layer.push('path', normalize(this._path)); }
    if (this._referrer) { layer.push('referrer', normalize(this._referrer)); }

    var title = normalize(this._title);
    if (title) { layer.push('page_title', title); }
    if (this._name || title) { layer.push('page_name', normalize(this._name) || title); }

    var labels = this._labels.slice(0, 5);
    labels.length = 5;
    if (labels.some(function (label) { return label; })) { layer.push('pagelabel', labels.map(function (label) { return typeof label === 'string' ? normalize(label) : ''; }).join(',')); }

    this._categories.forEach(function (category, index) {
      if (category) { layer.push(("page_category" + (index + 1)), category); }
    });

    if (this._isError) { layer.push('error', '1'); }

    var template = normalize(this._template) || 'autres';
    layer.push('page_template', template);
    layer.push('pagegroup', normalize(this._group) || template);
    layer.push('site-segment', normalize(this._segment) || template);

    if (!isNaN(this._current) && this._current > -1) {
      var pagination = "" + (this._current);
      if (!isNaN(this._total) && this._total > -1) { pagination += "/" + (this._total); }
      layer.push('page_pagination', pagination);
    }

    if (this._filters.length && this._filters.some(function (label) { return label; })) {
      var filters = this._filters.map(function (filter) { return typeof filter === 'string' ? normalize(filter) : ''; });
      layer.push('page_filters', filters.join(','));
    }
    return layer;
  };

  Object.defineProperties( Page.prototype, prototypeAccessors$5 );

  var Environment = {
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

  var Site = function Site (config) {
    this._config = config || {};
  };

  var prototypeAccessors$4 = { environment: { configurable: true },entity: { configurable: true },language: { configurable: true },target: { configurable: true },type: { configurable: true },region: { configurable: true },department: { configurable: true },layer: { configurable: true } };

  Site.prototype.reset = function reset (clear) {
      if ( clear === void 0 ) clear = false;

    this.environment = clear ? undefined : this._config.environment;
    this.entity = clear ? undefined : this._config.entity;
    this.language = clear ? document.documentElement.lang : this._config.language || document.documentElement.lang;
    this.target = clear ? undefined : this._config.target;
    this.type = clear ? undefined : this._config.type;
    this.region = clear ? undefined : this._config.region;
    this.department = clear ? undefined : this._config.department;
  };

  prototypeAccessors$4.environment.set = function (value) {
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
  };

  prototypeAccessors$4.environment.get = function () {
    return this._environment.id;
  };

  prototypeAccessors$4.entity.set = function (value) {
    var valid = validateString(value, 'site.entity');
    if (valid !== null) { this._entity = valid; }
  };

  prototypeAccessors$4.entity.get = function () {
    return this._entity;
  };

  prototypeAccessors$4.language.set = function (value) {
    var valid = validateLang(value, 'site.language');
    if (valid !== null) { this._language = valid; }
  };

  prototypeAccessors$4.language.get = function () {
    return this._language;
  };

  prototypeAccessors$4.target.set = function (value) {
    var valid = validateString(value, 'site.target');
    if (valid !== null) { this._target = valid; }
  };

  prototypeAccessors$4.target.get = function () {
    return this._target;
  };

  prototypeAccessors$4.type.set = function (value) {
    var valid = validateString(value, 'site.type');
    if (valid !== null) { this._type = valid; }
  };

  prototypeAccessors$4.type.get = function () {
    return this._type;
  };

  prototypeAccessors$4.region.set = function (value) {
    var valid = validateGeography(value, 'site.region');
    if (valid !== null) { this._region = valid; }
  };

  prototypeAccessors$4.region.get = function () {
    return this._region;
  };

  prototypeAccessors$4.department.set = function (value) {
    var valid = validateGeography(value, 'site.department');
    if (valid !== null) { this._department = valid; }
  };

  prototypeAccessors$4.department.get = function () {
    return this._department;
  };

  prototypeAccessors$4.layer.get = function () {
    var layer = [];
    layer.push('site_environment', this._environment.value);
    if (this._entity) { layer.push('site_entity', normalize(this._entity)); }
    else { api.inspector.warn('entity is required in analytics.site'); }
    if (this._language) { layer.push('site_language', this._language); }
    if (this._target) { layer.push('site_target', normalize(this._target)); }
    if (this._type) { layer.push('site_type', normalize(this._type)); }
    if (this._region) { layer.push('site_region', this._region); }
    if (this._department) { layer.push('site_department', this._department); }
    return layer;
  };

  Object.defineProperties( Site.prototype, prototypeAccessors$4 );

  Site.Environment = Environment;

  var Status = {
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

  var Profile = {
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

  var Type = {
    INDIVIDUAL: {
      id: 'individual',
      value: 'part'
    },
    PROFESSIONNAL: {
      id: 'professionnal',
      value: 'pro'
    }
  };

  var User = function User (config) {
    this._config = config || {};
  };

  var prototypeAccessors$3 = { uid: { configurable: true },email: { configurable: true },isNew: { configurable: true },status: { configurable: true },profile: { configurable: true },language: { configurable: true },type: { configurable: true },layer: { configurable: true } };

  User.prototype.reset = function reset (clear) {
      if ( clear === void 0 ) clear = false;

    this._isConnected = false;
    this.status = Status.ANONYMOUS;
    if (!clear && this._config.connect) { this.connect(this._config.connect.uid, this._config.connect.email, this._config.connect.isNew); }
    else {
      this._uid = undefined;
      this._email = undefined;
      this._isNew = false;
    }
    this.profile = clear ? undefined : this._config.profile;
    this.language = clear ? navigator.language : this._config.language || navigator.language;
    this.type = clear ? undefined : this._config.type;
  };

  User.prototype.connect = function connect (uid, email, isNew) {
      if ( isNew === void 0 ) isNew = false;

    this._uid = validateString(uid, 'user.uid');
    if (/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]{2,}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/.test(email)) { api.inspector.warn('Please check analytics.user.email is properly encrypted '); }
    this._email = validateString(email, 'user.email');
    this._isNew = validateBoolean(isNew);
    this._isConnected = true;
    this.status = Status.CONNECTED;
  };

  prototypeAccessors$3.uid.get = function () {
    return this._uid;
  };

  prototypeAccessors$3.email.get = function () {
    return this._email;
  };

  prototypeAccessors$3.isNew.get = function () {
    return this._isNew;
  };

  prototypeAccessors$3.status.set = function (id) {
      var this$1$1 = this;

    var stati = Object.values(Status).filter(function (status) { return status.isConnected === this$1$1._isConnected; });
    this._status = stati.filter(function (status) { return status.id === id || status.value === id; })[0] || stati.filter(function (status) { return status.isDefault; })[0];
  };

  prototypeAccessors$3.status.get = function () {
    return this._status.id;
  };

  prototypeAccessors$3.profile.set = function (id) {
    this._profile = Object.values(Profile).filter(function (profile) { return profile.id === id || profile.value === id; })[0];
  };

  prototypeAccessors$3.profile.get = function () {
    return this._profile.id;
  };

  prototypeAccessors$3.language.set = function (value) {
    var valid = validateLang(value, 'user.language');
    if (valid !== null) { this._language = valid; }
  };

  prototypeAccessors$3.language.get = function () {
    return this._language;
  };

  prototypeAccessors$3.type.set = function (id) {
    this._type = Object.values(Type).filter(function (type) { return type.id === id || type.value === id; })[0];
  };

  prototypeAccessors$3.type.get = function () {
    return this._type.id;
  };

  prototypeAccessors$3.layer.get = function () {
    var layer = [];
    if (this._uid) { layer.push('uid', normalize(this._uid)); }
    if (this._email) { layer.push('email', normalize(this._email)); }
    if (this._isNew) { layer.push('newcustomer', '1'); }
    if (this._profile) { layer.push('profile', this._profile.value); }
    if (this._status) { layer.push('user_login_status', this._status.value); }
    if (this._language) { layer.push('user_language', this._language); }
    if (this._type) { layer.push('user_type', this._type.value); }
    return layer;
  };

  Object.defineProperties( User.prototype, prototypeAccessors$3 );

  User.Status = Status;
  User.Profile = Profile;
  User.Type = Type;

  var Method = {
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

  var Search = function Search (config) {
    this._config = config || {};
  };

  var prototypeAccessors$2 = { engine: { configurable: true },results: { configurable: true },terms: { configurable: true },category: { configurable: true },theme: { configurable: true },type: { configurable: true },method: { configurable: true },layer: { configurable: true } };

  Search.prototype.reset = function reset (clear) {
      if ( clear === void 0 ) clear = false;

    this.engine = clear ? undefined : this._config.engine;
    this.results = clear || isNaN(this._config.results) ? -1 : this._config.results;
    this.terms = clear ? undefined : this._config.terms;
    this.category = clear ? undefined : this._config.category;
    this.theme = clear ? undefined : this._config.theme;
    this.type = clear ? undefined : this._config.type;
    this.method = clear ? undefined : this._config.method;
  };

  prototypeAccessors$2.engine.set = function (value) {
    var valid = validateString(value, 'search.engine');
    if (valid !== null) { this._engine = valid; }
  };

  prototypeAccessors$2.engine.get = function () {
    return this._engine;
  };

  prototypeAccessors$2.results.set = function (value) {
    var valid = validateNumber(value, 'search.results');
    if (valid !== null) { this._results = valid; }
  };

  prototypeAccessors$2.results.get = function () {
    return this._results;
  };

  prototypeAccessors$2.terms.set = function (value) {
    var valid = validateString(value, 'search.terms');
    if (valid !== null) { this._terms = valid; }
  };

  prototypeAccessors$2.terms.get = function () {
    return this._terms;
  };

  prototypeAccessors$2.category.set = function (value) {
    var valid = validateString(value, 'search.category');
    if (valid !== null) { this._category = valid; }
  };

  prototypeAccessors$2.category.get = function () {
    return this._category;
  };

  prototypeAccessors$2.theme.set = function (value) {
    var valid = validateString(value, 'search.theme');
    if (valid !== null) { this._theme = valid; }
  };

  prototypeAccessors$2.theme.get = function () {
    return this._theme;
  };

  prototypeAccessors$2.type.set = function (value) {
    var valid = validateString(value, 'search.type');
    if (valid !== null) { this._type = valid; }
    this._type = value;
  };

  prototypeAccessors$2.type.get = function () {
    return this._type;
  };

  prototypeAccessors$2.method.set = function (id) {
    var methods = Object.values(Method);
    this._method = methods.filter(function (method) { return method.id === id || method.value === id; })[0] || methods.filter(function (method) { return method.isDefault; })[0];
  };

  prototypeAccessors$2.method.get = function () {
    return this._method;
  };

  prototypeAccessors$2.layer.get = function () {
    var layer = [];
    if (this._engine) { layer.push('isearchengine', normalize(this._engine)); }
    if (this._results > -1) { layer.push('isearchresults', this._results); }
    if (this._terms) { layer.push('isearchkey', 'search_terms', 'isearchdata', normalize(this._terms)); }
    if (this._category) { layer.push('isearchkey', 'search_category', 'isearchdata', normalize(this._category)); }
    if (this._theme) { layer.push('isearchkey', 'search_theme', 'isearchdata', normalize(this._theme)); }
    if (this._type) { layer.push('isearchkey', 'search_type', 'isearchdata', normalize(this._type)); }
    if (this._method && layer.length) { layer.push('isearchkey', 'search_method', 'isearchdata', this._method.value); }
    return layer;
  };

  Object.defineProperties( Search.prototype, prototypeAccessors$2 );

  Search.Method = Method;

  var Funnel = function Funnel (config) {
    this._config = config || {};
  };

  var prototypeAccessors$1 = { id: { configurable: true },type: { configurable: true },name: { configurable: true },step: { configurable: true },current: { configurable: true },total: { configurable: true },objective: { configurable: true },error: { configurable: true },layer: { configurable: true } };

  Funnel.prototype.reset = function reset (clear) {
      if ( clear === void 0 ) clear = false;

    this.id = clear ? undefined : this._config.id;
    this.type = clear ? undefined : this._config.type;
    this.name = clear ? undefined : this._config.name;
    this.step = clear ? undefined : this._config.step;
    this.current = clear || isNaN(this._config.current) ? -1 : this._config.current;
    this.total = clear || isNaN(this._config.total) ? -1 : this._config.total;
    this.objective = clear ? undefined : this._config.objective;
    this.error = clear ? undefined : this._config.error;
  };

  prototypeAccessors$1.id.set = function (value) {
    var valid = validateString(value, 'funnel.id');
    if (valid !== null) { this._id = valid; }
  };

  prototypeAccessors$1.id.get = function () {
    return this._id;
  };

  prototypeAccessors$1.type.set = function (value) {
    var valid = validateString(value, 'funnel.type');
    if (valid !== null) { this._type = valid; }
  };

  prototypeAccessors$1.type.get = function () {
    return this._type;
  };

  prototypeAccessors$1.name.set = function (value) {
    var valid = validateString(value, 'funnel.name');
    if (valid !== null) { this._name = valid; }
  };

  prototypeAccessors$1.name.get = function () {
    return this._name;
  };

  prototypeAccessors$1.step.set = function (value) {
    var valid = validateString(value, 'funnel.step');
    if (valid !== null) { this._step = valid; }
  };

  prototypeAccessors$1.step.get = function () {
    return this._step;
  };

  prototypeAccessors$1.current.set = function (value) {
    var valid = validateNumber(value, 'funnel.current');
    if (valid !== null) { this._current = valid; }
  };

  prototypeAccessors$1.current.get = function () {
    return this._current;
  };

  prototypeAccessors$1.total.set = function (value) {
    var valid = validateNumber(value, 'funnel.total');
    if (valid !== null) { this._total = valid; }
  };

  prototypeAccessors$1.total.get = function () {
    return this._total;
  };

  prototypeAccessors$1.objective.set = function (value) {
    var valid = validateString(value, 'funnel.objective');
    if (valid !== null) { this._objective = valid; }
    this._objective = value;
  };

  prototypeAccessors$1.objective.get = function () {
    return this._objective;
  };

  prototypeAccessors$1.error.set = function (value) {
    var valid = validateString(value, 'funnel.error');
    if (valid !== null) { this._error = valid; }
    this._error = value;
  };

  prototypeAccessors$1.error.get = function () {
    return this._error;
  };

  prototypeAccessors$1.layer.get = function () {
    var layer = [];
    if (this._id) { layer.push('funnel_id', normalize(this._id)); }
    if (this._type) { layer.push('funnel_type', normalize(this._type)); }
    if (this._name) { layer.push('funnel_name', normalize(this._name)); }
    if (this._step) { layer.push('funnel_step_name', normalize(this._step)); }
    if (!isNaN(this._current) && this._current > -1) { layer.push('funnel_step_number', this._current); }
    if (!isNaN(this._total) && this._total > -1) { layer.push('funnel_step_max', this._total); }
    if (this._objective) { layer.push('funnel_objective', normalize(this._objective)); }
    if (this._error) { layer.push('funnel_error', normalize(this._error)); }
    return layer;
  };

  Object.defineProperties( Funnel.prototype, prototypeAccessors$1 );

  var State = {
    UNKNOWN: -1,
    CONFIGURING: 0,
    CONFIGURED: 1,
    INITIATED: 2,
    READY: 3
  };

  var TarteAuCitronIntegration = function TarteAuCitronIntegration (config) {
    var this$1$1 = this;

    this._config = config;
    this._state = State.UNKNOWN;
    this._promise = new Promise(function (resolve, reject) {
      this$1$1._resolve = resolve;
      this$1$1._reject = reject;
    });
  };

  TarteAuCitronIntegration.prototype.configure = function configure () {
    if (this._state >= State.CONFIGURED) { return this._promise; }
    if (this._state === State.UNKNOWN) {
      api.inspector.info('analytics configures tarteaucitron');
      this._state = State.CONFIGURING;
    }

    var tarteaucitron = window.tarteaucitron;
    if (!tarteaucitron || !tarteaucitron.services) {
      window.requestAnimationFrame(this.configure.bind(this));
      return;
    }

    this._state = State.CONFIGURED;
    var init = this.init.bind(this);

    var data = {
      key: 'eulerian',
      type: 'analytic',
      name: 'Eulerian Analytics',
      needConsent: true,
      cookies: ['etuix'],
      uri: 'https://eulerian.com/vie-privee',
      js: init,
      fallback: function () { tarteaucitron.services.eulerian.js(); }
    };

    tarteaucitron.services.eulerian = data;
    if (!tarteaucitron.job) { tarteaucitron.job = []; }
    tarteaucitron.job.push('eulerian');

    return this._promise;
  };

  TarteAuCitronIntegration.prototype.init = function init () {
    if (this._state >= State.INITIATED) { return; }
    this._state = State.INITIATED;
    window.__eaGenericCmpApi = this.integrate.bind(this);
    var update = this.update.bind(this);
    window.addEventListener('tac.close_alert', update);
    window.addEventListener('tac.close_panel', update);
  };

  TarteAuCitronIntegration.prototype.integrate = function integrate (cmpApi) {
    if (this._state >= State.READY) { return; }
    this._state = State.READY;
    this._cmpApi = cmpApi;

    api.inspector.info('analytics has integrated tarteaucitron');

    this._resolve();
    this.update();
  };

  TarteAuCitronIntegration.prototype.update = function update () {
    if (this._state < State.READY) { return; }
    this._cmpApi('tac', window.tarteaucitron, 1);
  };

  var ConsentManagerPlatform = function ConsentManagerPlatform (config) {
    this._config = config;

    if (config) {
      switch (config.id) {
        case 'tarteaucitron':
          this.integrateTarteAuCitron();
          break;
      }
    }
  };

  ConsentManagerPlatform.prototype.integrateTarteAuCitron = function integrateTarteAuCitron () {
    this._tac = new TarteAuCitronIntegration(this._config);
    return this._tac.configure();
  };

  var push = function (type, layer) {
    if (typeof window.EA_push !== 'function') {
      api.inspector.warn('Analytics datalayer not sent, Eulerian API isn\'t yet avalaible');
      return;
    }

    api.inspector.log('analytics', type, layer);

    window.EA_push(type, layer);
  };

  var PushType = {
    COLLECTOR: 'collector',
    ACTION: 'action',
    ACTION_PARAMETER: 'actionparam'
  };

  var Analytics = function Analytics () {
    var this$1$1 = this;

    this._isReady = false;
    this._readiness = new Promise(function (resolve, reject) {
      if (this$1$1._isReady) { resolve(); }
      else {
        this$1$1._resolve = resolve;
        this$1$1._reject = reject;
      }
    });
    this._configure(api);
  };

  var prototypeAccessors = { isReady: { configurable: true },readiness: { configurable: true },page: { configurable: true },user: { configurable: true },site: { configurable: true },search: { configurable: true },funnel: { configurable: true },cmp: { configurable: true } };

  Analytics.prototype._configure = function _configure (api) {
    switch (true) {
      case window[patch.namespace] !== undefined:
        this._config = window[patch.namespace].configuration.analytics;
        window[patch.namespace].promise.then(this._build.bind(this), function () {});
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
  };

  Analytics.prototype._build = function _build () {
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
  };

  prototypeAccessors.isReady.get = function () {
    return this._isReady;
  };

  prototypeAccessors.readiness.get = function () {
    return this._readiness;
  };

  Analytics.prototype._start = function _start () {
    if (this._isReady) { return; }
    this._isReady = true;
    this._resolve();

    this._cmp = new ConsentManagerPlatform(this._config.cmp);

    switch (this._mode) {
      case Mode.AUTO:
      case Mode.NO_COMPONENTS:
        this.collect();
        break;
    }
  };

  prototypeAccessors.page.get = function () {
    return this._page;
  };

  prototypeAccessors.user.get = function () {
    return this._user;
  };

  prototypeAccessors.site.get = function () {
    return this._site;
  };

  prototypeAccessors.search.get = function () {
    return this._search;
  };

  prototypeAccessors.funnel.get = function () {
    return this._funnel;
  };

  prototypeAccessors.cmp.get = function () {
    return this._cmp;
  };

  Analytics.prototype.push = function push$1 (type, layer) {
    push(type, layer);
  };

  Analytics.prototype.reset = function reset (clear) {
      if ( clear === void 0 ) clear = false;

    this._user.reset(clear);
    this._site.reset(clear);
    this._page.reset(clear);
    this._search.reset(clear);
    this._funnel.reset(clear);
  };

  Analytics.prototype.collect = function collect () {
    var layer = ( this._user.layer ).concat( this._site.layer,
      this._page.layer,
      this._search.layer,
      this._funnel.layer
    );
    this.push(PushType.COLLECTOR, layer);
  };

  Object.defineProperties( Analytics.prototype, prototypeAccessors );

  var analytics = new Analytics();

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
  var completeAssign = function (target) {
    var sources = [], len = arguments.length - 1;
    while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

    sources.forEach(function (source) {
      var descriptors = Object.keys(source).reduce(function (descriptors, key) {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});

      Object.getOwnPropertySymbols(source).forEach(function (sym) {
        var descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  };

  api.analytics = completeAssign(analytics, {});

})();
