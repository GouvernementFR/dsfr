import Environment from './environment';
import api from '../../api';
import normalize from '../normalize';

class Site {
  constructor (config) {
    this._config = config;
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
      default:
        this._environment = Environment.DEVELOPMENT;
    }
  }

  get environment () {
    return this._environment.id;
  }

  set entity (value) {
    this._entity = value;
  }

  get entity () {
    return this._entity;
  }

  set language (value) {
    this._language = value.split(/[-_]/)[0];
  }

  get language () {
    return this._language;
  }

  set target (value) {
    this._target = value;
  }

  get target () {
    return this._target;
  }

  set type (value) {
    this._type = value;
  }

  get type () {
    return this._type;
  }

  set region (value) {
    this._region = value;
  }

  get region () {
    return this._region;
  }

  set department (value) {
    this._department = value;
  }

  get department () {
    return this._department;
  }

  get layer () {
    const layer = [];
    layer.push('site_environment', this._environment.value);
    if (this._entity) layer.push('site_entity', normalize(this._entity));
    else api.inspector.warn('entity is required in site analytics');
    if (this._language) layer.push('site_language', this._language);
    if (this._target) layer.push('site_target', this._target);
    if (this._type) layer.push('site_type', this._type);
    if (this._region) layer.push('site_region', this._region);
    if (this._department) layer.push('site_department', this._department);
    return layer;
  }
}

Site.Environment = Environment;

export { Site };
