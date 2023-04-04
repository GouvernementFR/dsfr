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
    if (this._inputGroup) this.listenInputValidation(this._inputGroup, Type.SUBSCRIBE);
  }

  get label () {
    return 'Lettre d\'information et Réseaux Sociaux';
  }

  get component () {
    return ID;
  }
}

export { FollowActionee };
