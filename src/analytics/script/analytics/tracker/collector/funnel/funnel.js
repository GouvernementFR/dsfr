import normalize from '../../utils/normalize';
import { validateNumber, validateString } from '../../utils/type-validator';

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

export { Funnel };
