import api from '../../api.js';

class Tooltip extends api.core.Disclosure {
  static get instanceClassName () {
    return 'Tooltip';
  }

  init () {
    console.log('TOOLTIP');
    super.init();
    this.listenClick();
    this.listenKey(api.core.KeyCodes.ESCAPE, this.conceal.bind(this, false, false), true, true);
    this.isRendering = true;
  }

  disclose (withhold) {
    if (!super.disclose(withhold)) return false;
    this.setAttribute('aria-tooltip', 'true');
    this.setAttribute('open', 'true');
    return true;
  }

  conceal (withhold, preventFocus) {
    if (!super.conceal(withhold, preventFocus)) return false;
    this.removeAttribute('aria-tooltip');
    this.removeAttribute('open');
    return true;
  }
}

export { Tooltip };
