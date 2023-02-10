import normalize from '../../utils/normalize';
import { validateNumber, validateString } from '../../utils/type-validator';
import Method from './mehod';

class Search {
  constructor (config) {
    this._config = config || {};
  }

  reset (clear = false) {
    this.engine = clear ? undefined : this._config.engine;
    this.results = clear || isNaN(this._results) ? -1 : this._config.results;
    this.terms = clear ? undefined : this._config.terms;
    this.category = clear ? undefined : this._config.category;
    this.theme = clear ? undefined : this._config.theme;
    this.type = clear ? undefined : this._config.type;
    this.engine = clear ? undefined : this._config.engine;
  }

  set engine (value) {
    const valid = validateString(value, 'search.engine');
    if (valid !== null) this._engine = valid;
  }

  get engine () {
    return this._engine;
  }

  set results (value) {
    const valid = validateNumber(value, 'search.terms');
    if (valid !== null) this._results = valid;
  }

  get results () {
    return this._results;
  }

  set terms (value) {
    const valid = validateString(value, 'search.terms');
    if (valid !== null) this._terms = valid;
  }

  get terms () {
    return this._terms;
  }

  set category (value) {
    const valid = validateString(value, 'search.category');
    if (valid !== null) this._category = valid;
  }

  get category () {
    return this._category;
  }

  set theme (value) {
    const valid = validateString(value, 'search.theme');
    if (valid !== null) this._theme = valid;
  }

  get theme () {
    return this._theme;
  }

  set type (value) {
    const valid = validateString(value, 'search.type');
    if (valid !== null) this._type = valid;
    this._type = value;
  }

  get type () {
    return this._type;
  }

  set method (id) {
    this._method = Object.values(Method).filter(method => method.id === id || method.value === id)[0];
  }

  get method () {
    return this._method;
  }

  get layer () {
    const layer = [];
    if (this._engine) layer.push('isearchengine', normalize(this._engine));
    if (this._results > -1) layer.push('isearchresults', this._results);
    if (this._terms) layer.push('isearchkey', 'search_terms', 'isearchdata', this._terms);
    if (this._category) layer.push('isearchkey', 'search_category', 'isearchdata', this._category);
    if (this._theme) layer.push('isearchkey', 'search_theme', 'isearchdata', this._theme);
    if (this._type) layer.push('isearchkey', 'search_type', 'isearchdata', this._type);
    if (this._method) layer.push('isearchkey', 'search_method', 'isearchdata', this._method);
    return layer;
  }
}

Search.Method = Method;

export { Search };
