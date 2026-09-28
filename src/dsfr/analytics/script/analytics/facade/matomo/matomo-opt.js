import Opt from '../provider/opt.js';
import { clear } from './matomo-push';

const DISABLED = 'mtm_consent_removed';
const DISABLE = 'optUserOut';
const ENABLE = 'forgetUserOptOut';
const TOGGLE = 'isUserOptedOut';

class MatomoOpt extends Opt {
  constructor (provider) {
    super({
      disabledKey: DISABLED,
      toggleKey: TOGGLE
    });
    this._provider = provider;
  }

  get isDisabled () {
    return document.cookie.includes(DISABLED);
  }

  get _paq () {
    if (!window._paq) window._paq = [];
    return window._paq;
  }

  enable () {
    this._paq.push([ENABLE]);
    this._provider.load();
  }

  disable () {
    clear();
    this._paq.push([DISABLE]);
  }
}

export default MatomoOpt;
