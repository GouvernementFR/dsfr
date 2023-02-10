import api from '../../../api';
import normalize from '../../utils/normalize';
import Environment from '../site/environment';

class Content {
  constructor (config) {
    this._config = config || {};
  }

  reset (clear = false) {
    this.id = clear ? undefined : this._config.environment;

  }

  set id (value) {
    this._id = value;
  }

  get id () {
    return this._id;
  }

  set name (value) {
    this._name = value;
  }

  get name () {
    return this._name;
  }

  set type (value) {
    this._type = value;
  }

  get type () {
    return this._type;
  }

  set category (value) {
    this._category = value;
  }

  get category () {
    return this._category;
  }

  set author (value) {
    this._author = value;
  }

  get author () {
    return this._author;
  }

  set date (value) {
    this._date = value;
  }

  get date () {
    return this._date;
  }

  get tags () {
    return this._tags;
  }

  set topic (value) {
    this._topic = value;
  }

  get topic () {
    return this._topic;
  }

  get layer () {
    const layer = [];
    layer.push('site_environment', this._environment.value);
    if (this._entity) layer.push('site_entity', normalize(this._entity));

    return layer;
  }
}

Content.Environment = Environment;

export { Content };
