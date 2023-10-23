import api from '../../../../api';
import normalize from '../../utils/normalize';
import { validateBoolean, validateNumber, validateString, validateDate } from '../../utils/type-validator';
import { Inventory } from './inventory';

const CollectionState = {
  COLLECTABLE: 'collectable',
  COLLECTING: 'collecting',
  COLLECTED: 'collected'
};

class Page {
  constructor (config) {
    this._config = config || {};
    this._state = CollectionState.COLLECTABLE;
  }

  reset (clear = false) {
    this.path = clear ? '' : this._config.path;
    this.referrer = clear ? '' : this._config.referrer;
    this.title = clear ? '' : this._config.title;
    this.name = clear ? '' : this._config.name;
    this.id = clear ? '' : this._config.id;
    this.author = clear ? '' : this._config.author;
    this.date = clear ? '' : this._config.date;
    this._labels = clear || !this._config.labels ? ['', '', '', '', ''] : this._config.labels;
    this._labels.length = 5;
    this._tags = clear || !this._config.tags ? [] : this._config.tags;
    this._categories = clear || !this._config.categories ? ['', '', ''] : this._config.categories;
    this.isError = !clear && this._config.isError;
    this.template = clear ? '' : this._config.template;
    this.group = clear ? '' : this._config.group;
    this.segment = clear ? '' : this._config.segment;
    this.subtemplate = clear ? '' : this._config.subtemplate;
    this.theme = clear ? '' : this._config.theme;
    this.subtheme = clear ? '' : this._config.subtheme;
    this.related = clear ? '' : this._config.related;
    this.depth = clear || isNaN(this._config.depth) ? 0 : this._config.depth;
    this.current = clear || isNaN(this._config.current) ? -1 : this._config.current;
    this.total = clear || isNaN(this._config.total) ? -1 : this._config.total;
    this._filters = clear || !this._config.filters ? [] : this._config.filters;
  }

  collecting () {
    if (this._state !== CollectionState.COLLECTABLE) {
      api.inspector.warn(`current path '${this.path}' was already collected`);
      return false;
    }
    this._state = CollectionState.COLLECTING;
    return true;
  }

  get isCollecting () {
    return this._state === CollectionState.COLLECTING;
  }

  set path (value) {
    const valid = validateString(value, 'page.path');
    if (valid !== null) {
      this._path = valid;
      this._state = CollectionState.COLLECTABLE;
    }
  }

  get path () {
    return this._path || `${document.location.pathname}${document.location.search}`;
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
    return this._title || document.title;
  }

  set id (value) {
    const valid = validateString(value, 'page.id');
    if (valid !== null) this._id = valid;
  }

  get id () {
    return this._id;
  }

  set author (value) {
    const valid = validateString(value, 'page.author');
    if (valid !== null) this._author = valid;
  }

  get author () {
    return this._author;
  }

  set date (value) {
    const valid = validateDate(value, 'page.date');
    if (valid !== null) this._date = valid;
  }

  get date () {
    return this._date;
  }

  get tags () {
    return this._tags;
  }

  set name (value) {
    const valid = validateString(value, 'page.name');
    if (valid !== null) this._name = valid;
  }

  get name () {
    return this._name || this.title;
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
    return this._template || 'autres';
  }

  set segment (value) {
    const valid = validateString(value, 'page.segment');
    if (valid !== null) this._segment = valid;
  }

  get segment () {
    return this._segment || this.template;
  }

  set group (value) {
    const valid = validateString(value, 'page.group');
    if (valid !== null) this._group = valid;
  }

  get group () {
    return this._group || this.template;
  }

  set subtemplate (value) {
    const valid = validateString(value, 'page.subtemplate');
    if (valid !== null) this._subtemplate = valid;
  }

  get subtemplate () {
    return this._subtemplate;
  }

  set theme (value) {
    const valid = validateString(value, 'page.theme');
    if (valid !== null) this._theme = valid;
  }

  get theme () {
    return this._theme;
  }

  set subtheme (value) {
    const valid = validateString(value, 'page.subtheme');
    if (valid !== null) this._subtheme = valid;
  }

  get subtheme () {
    return this._subtheme;
  }

  set related (value) {
    const valid = validateString(value, 'page.related');
    if (valid !== null) this._related = valid;
  }

  get related () {
    return this._related;
  }

  set depth (value) {
    const valid = validateNumber(value, 'page.depth');
    if (valid !== null) this._depth = valid;
  }

  get depth () {
    return this._depth;
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
    this._state = CollectionState.COLLECTED;
    const layer = [];
    if (this.path) layer.push('path', normalize(this.path));
    if (this.referrer) layer.push('referrer', normalize(this.referrer));
    if (this.title) layer.push('page_title', normalize(this.title));
    if (this.name) layer.push('page_name', normalize(this.name));
    if (this.id) layer.push('page_id', normalize(this.id));
    if (this.author) layer.push('page_author', normalize(this.author));
    if (this.date) layer.push('page_date', normalize(this.date));

    const components = Object.keys(Inventory).map(id => document.querySelector(Inventory[id]) !== null ? id : null).filter(id => id !== null).join(',');
    if (components) layer.push('page_components', components);

    const labels = this._labels.slice(0, 5);
    labels.length = 5;
    if (labels.some(label => label)) layer.push('pagelabel', labels.map(label => typeof label === 'string' ? normalize(label) : '').join(','));

    const tags = this._tags;
    if (tags.some(tag => tag)) layer.push('pagetag', tags.map(tag => typeof tag === 'string' ? normalize(tag) : '').join(','));

    this._categories.forEach((category, index) => {
      if (category) layer.push(`page_category${index + 1}`, category);
    });

    if (this._isError) layer.push('error', '1');

    layer.push('page_template', normalize(this.template));
    layer.push('pagegroup', normalize(this.group));
    layer.push('site-segment', normalize(this.segment));

    if (this.subtemplate) layer.push('page_subtemplate', normalize(this.subtemplate));
    if (this.theme) layer.push('page_theme', normalize(this.theme));
    if (this.subtheme) layer.push('page_subtheme', normalize(this.subtheme));
    if (this.related) layer.push('page_related', normalize(this.related));
    if (!isNaN(this.depth)) layer.push('page_depth', this.depth);

    if (!isNaN(this.current) && this.current > -1) {
      let pagination = `${this.current}`;
      if (!isNaN(this.total) && this.total > -1) pagination += `/${this.total}`;
      layer.push('page_pagination', pagination);
    }

    if (this.filters.length && this.filters.some(label => label)) {
      const filters = this.filters.map(filter => typeof filter === 'string' ? normalize(filter) : '');
      layer.push('page_filters', filters.join(','));
    }
    return layer;
  }
}

export { Page };
