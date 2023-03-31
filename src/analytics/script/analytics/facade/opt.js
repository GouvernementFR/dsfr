const key = '_EA_';
const DISABLED = `${key}disabled`;
const TOGGLE = `${key}toggle`;

class Opt {
  constructor () {
    this._configure();
  }

  _configure () {
    const scope = this;
    window[DISABLED] = () => scope.isDisabled;
    window[TOGGLE] = this.toggle.bind(this);
  }

  get isDisabled () {
    return localStorage.getItem(key);
  }

  toggle () {
    if (this.isDisabled) this.enable();
    else this.disable();
  }

  enable () {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  }

  disable () {
    localStorage.setItem(key, '1');
  }
}

const opt = new Opt();

export default opt;
