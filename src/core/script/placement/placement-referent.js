import { Instance } from '../api/modules/register/instance.js';

class PlacementReferent extends Instance {
  static get instanceClassName () {
    return 'PlacementReferent';
  }

  init () {
    this.registration.creator.setReferent(this);
  }

  show () {
    this.registration.creator.show();
  }

  hide () {
    this.registration.creator.hide();
  }
}

export { PlacementReferent };
