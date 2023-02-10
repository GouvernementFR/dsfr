import api from '../../../api';
import normalize from '../../utils/normalize';
import Environment from '../site/environment';

class Job {
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

  set title (value) {
    this._title = value;
  }

  get title () {
    return this._title;
  }

  set date (value) {
    this._date = value;
  }

  get date () {
    return this._date;
  }

  set level (value) {
    this._level = value;
  }

  get level () {
    return this._level;
  }

  get layer () {
    const layer = [];
    layer.push('site_environment', this._environment.value);
    if (this._entity) layer.push('site_entity', normalize(this._entity));

    return layer;
  }
}

Content.Environment = Environment;

export { Job };
