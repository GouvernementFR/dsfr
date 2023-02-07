import api from '../../api.js';
import normalize from '../normalize';

class Page {
  constructor (config) {
    this._config = config;
  }

  reset (clear = false) {
    this.path = clear ? undefined : this._config.path || document.location.pathname;
    this.referrer = clear ? undefined : this._config.referrer;
    const title = this._config.title || document.title;
    this.title = clear ? undefined : title;
    this.name = clear ? undefined : this._config.name || title;
    this._labels = clear && this._config.labels ? [undefined, undefined, undefined, undefined, undefined] : this._config.labels.map(label => normalize(label));
    this._labels.length = 5;
    this.isError = !clear && this._config.isError;
    this.template = clear ? undefined : this._config.template;
    this.group = clear ? undefined : this._config.group;
    this.segment = clear ? undefined : this._config.segment;
    this.current = clear ? -1 : this._config.current;
    this.total = clear ? -1 : this._config.total;
    this._filters = clear ? [] : this._config.filters;
  }

  set path (value) {
    this._path = value;
  }

  get path () {
    return this._path;
  }

  set referrer (value) {
    this._referrer = value;
  }

  get referrer () {
    return this._referrer;
  }

  set title (value) {
    this._title = value;
  }

  get title () {
    return this._title;
  }

  set name (value) {
    this._name = value;
  }

  get name () {
    return this._name;
  }

  get labels () {
    return this._labels;
  }

  set isError (value) {
    this._isError = value;
  }

  get isError () {
    return this._isError;
  }

  set template (value) {
    this._template = value;
  }

  get template () {
    return this._template;
  }

  set segment (value) {
    this._segment = value;
  }

  get segment () {
    return this._segment;
  }

  set group (value) {
    this._group = value;
  }

  get group () {
    return this._group;
  }

  set current (value) {
    if (isNaN(value)) api.inspector.warn(`unexpected value '${value}' set at analytics.page.current. Expecting a Number`);
    this._current = Number(value);
  }

  get current () {
    return this._current;
  }

  set total (value) {
    if (isNaN(value)) api.inspector.warn(`unexpected value '${value}' set at analytics.page.total. Expecting a Number`);
    this._total = Number(value);
  }

  get total () {
    return this._total;
  }

  get filters () {
    return this._filters;
  }

  get layer () {
    const layer = ['path', this._path];
    if (this._referrer) layer.push('referrer', this._referrer);

    const title = normalize(this._title);
    if (title) layer.push('page_title', title);
    if (this._name || title) layer.push('page_name', normalize(this._name) || title);

    if (this._labels.some(label => label)) {
      const labels = this._labels.map(label => typeof label === 'string' ? normalize(label) : '');
      layer.push('pagelabel', labels.join(','));
      if (labels[0]) layer.push('page_category1', labels[0]);
      if (labels[1]) layer.push('page_category2', labels[1]);
      if (labels[2]) layer.push('page_category3', labels[2]);
    }

    if (this._isError) layer.push('error', '1');

    const template = normalize(this._template);
    if (this._template) layer.push('page_template', template);
    else api.inspector.warn('template is required in page analytics');
    if (this._group || this._template) layer.push('pagegroup', normalize(this._group) || template);
    if (this._segment || this._template) layer.push('site-segment', normalize(this._segment) || template);

    if (!isNaN(this._current) && this._current !== -1) {
      let pagination = `${this._current}`;
      if (!isNaN(this._total) && this._total !== -1) pagination += `/${this._total}`;
      layer.push('page_pagination', pagination);
    } else {
      // TODO: get pagination value
    }

    if (this._filters.length) {
      const filters = this._filters.map(filter => typeof filter === 'string' ? normalize(filter) : '');
      layer.push('page_filters', filters.join(','));
    }
    return layer;
  }
}

export { Page };
