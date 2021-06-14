import api from '../../api.js';

class Navigation extends api.core.CollapsesGroup {
  constructor () {
    super();
    document.addEventListener('focusout', this.focusOut.bind(this));
  }

  init () {
    super.init();
  }

  focusOut (e) {
    requestAnimationFrame(() => {
      if (this.current !== null && !this.current.hasFocus) this.index = -1;
    });
  }

  get index () { return super.index; }

  set index (value) {
    if (value === -1 && this.current !== null && this.current.hasFocus) this.current.focus();
    super.index = value;
  }
}

export { Navigation };
