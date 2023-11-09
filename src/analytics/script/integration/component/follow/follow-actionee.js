import { ComponentActionee } from '../component-actionee';
import { FollowSelector } from './follow-selector';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class FollowActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'FollowActionee';
  }

  init () {
    this._inputGroup = this.querySelector(FollowSelector.NEWSLETTER_INPUT_GROUP);
    if (this._inputGroup) {
      this.listenInputValidation(this._inputGroup, Type.SUBSCRIBE);
      const input = this.element.getDescendantInstances('InputActionee', null, true)[0];
      if (input) input.isMuted = true;
    }
  }

  get label () {
    return 'lettre d\'information et réseaux sociaux';
  }

  get component () {
    return ID;
  }
}

export { FollowActionee };
