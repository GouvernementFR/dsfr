import renderer from './renderer';

class Location {
  constructor (onRouteChange, isListeningHash = false) {
    this._onRouteChange = onRouteChange;
    this._isListeningHash = isListeningHash;
    this._update();
    renderer.add(this);
  }

  _update () {
    this._pathname = document.location.pathname;
    this._search = document.location.search;
    this._hash = document.location.hash;
    this._path = `${this._pathname}${this._search}`;
    if (this._isListeningHash) this._path += this._hash;
    this._hasTitle = this._title === document.title;
    this._title = document.title;
  }

  render () {
    if (this._pathname !== document.location.pathname || this._search !== document.location.search) this.change();
    if (this._isListeningHash && this._hash !== document.location.hash) this.change();
  }

  change () {
    this._referrer = this._path;
    this._update();
    this._onRouteChange();
  }

  get path () {
    return this._path;
  }

  get hasTitle () {
    return this._hasTitle;
  }

  get title () {
    return this._title;
  }

  get referrer () {
    return this._referrer;
  }
}

export { Location };
