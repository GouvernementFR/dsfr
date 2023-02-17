import normalize from '../../utils/normalize';
import { validateBoolean, validateNumber, validateString } from '../../utils/type-validator';

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
    } else {
      // TODO: get pagination value
    }

    if (this._filters.length && this._filters.some(label => label)) {
      const filters = this._filters.map(filter => typeof filter === 'string' ? normalize(filter) : '');
      layer.push('page_filters', filters.join(','));
    }
    return layer;
  }
}

export { Page };
