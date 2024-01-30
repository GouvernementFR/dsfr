import api from '../../../../api';
import Environment from './environment';
import normalize from '../../utils/normalize';
import { validateGeography, validateLang, validateString } from '../../utils/type-validator';

class Site {
  constructor (config) {
    this._config = config || {};
  }

  reset (clear = false) {
    this.environment = clear ? Environment.DEVELOPMENT.id : this._config.environment;
    this.entity = clear ? undefined : this._config.entity;
    this.language = clear ? undefined : this._config.language;
    this.target = clear ? undefined : this._config.target;
    this.type = clear ? undefined : this._config.type;
    this.region = clear ? undefined : this._config.region;
    this.department = clear ? undefined : this._config.department;
    this.version = clear ? undefined : this._config.version;
    this._api = api.version;
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
    return this._environment ? this._environment.id : Environment.DEVELOPMENT.id;
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
    return this._language || document.documentElement.lang;
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

  set version (value) {
    const valid = validateString(value, 'site.version');
    if (valid !== null) this._version = valid;
  }

  get version () {
    return this._version;
  }

  get api () {
    return this._api;
  }

  get layer () {
    const layer = [];
    layer.push('site_environment', this._environment.value);
    if (this.entity) layer.push('site_entity', normalize(this.entity));
    else api.inspector.warn('entity is required in analytics.site');
    if (this.language) layer.push('site_language', this.language);
    if (this.target) layer.push('site_target', normalize(this.target));
    if (this.type) layer.push('site_type', normalize(this.type));
    if (this.region) layer.push('site_region', this.region);
    if (this.department) layer.push('site_department', this.department);
    if (this.version) layer.push('site_version', this.version);
    if (this.api) layer.push('api_version', this.api);
    return layer;
  }
}

Site.Environment = Environment;

export { Site };
