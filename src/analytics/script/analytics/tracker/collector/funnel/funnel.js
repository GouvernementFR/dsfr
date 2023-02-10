import api from '../../../api';
import normalize from '../../utils/normalize';
import Environment from '../site/environment';

class Funnel {
  constructor (config) {
    this._config = config || {};
  }

  reset (clear = false) {
    this.environment = clear ? undefined : this._config.environment;

  }

  set id (value) {
    this._id = value;
  }

  get id () {
    return this._id;
  }

  set type (value) {
    this._type = value;
  }

  get type () {
    return this._type;
  }

  set name (value) {
    this._name = value;
  }

  get name () {
    return this._name;
  }

  set step (value) {
    this._step = value;
  }

  get step () {
    return this._step;
  }

  set current (value) {
    this._current = value;
  }

  get current () {
    return this._current;
  }

  set total (value) {
    this._total = value;
  }

  get total () {
    return this._total;
  }

  set objective (value) {
    this._objective = value;
  }

  get objective () {
    return this._objective;
  }

  set error (value) {
    this._error = value;
  }

  get error () {
    return this._error;
  }

  get layer () {
    const layer = [];
    layer.push('site_environment', this._environment.value);
    if (this._entity) layer.push('site_entity', normalize(this._entity));

    return layer;
  }
}

Content.Environment = Environment;

export { Funnel };
