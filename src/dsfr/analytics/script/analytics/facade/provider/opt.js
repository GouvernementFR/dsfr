class Opt {
  constructor (config) {
    this._disabledKey = config.disabledKey;
    this._toggleKey = config.toggleKey;
    this._configure();
  }

  _configure () {
    window[this._disabledKey] = () => this.isDisabled;
    window[this._toggleKey] = this.toggle.bind(this);
  }

  toggle () {
    if (this.isDisabled) this.enable();
    else this.disable();
  }

  get isDisabled () {
    // from subclass
  }

  enable () {
    // from subclass
  }

  disable () {
    // from subclass
  }
}

export default Opt;
