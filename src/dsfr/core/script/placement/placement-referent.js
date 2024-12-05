import { Instance } from '../api/modules/register/instance.js';

class PlacementReferent extends Instance {
  constructor () {
    super();
    this._isShown = false;
  }

  static get instanceClassName () {
    return 'PlacementReferent';
  }

  init () {
    this.registration.creator.setReferent(this);
    this._placement = this.registration.creator;
  }

  get placement () {
    return this._placement;
  }

  get isShown () {
    return this._isShown;
  }

  set isShown (value) {
    if (this._isShown === value || !this.isEnabled) return;
    this._isShown = value;
    if (value) this.registration.creator.show();
    else this.registration.creator.hide();
  }

  show () {
    this.isShown = true;
  }

  hide () {
    this.isShown = false;
  }
}

export { PlacementReferent };
