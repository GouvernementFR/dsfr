import { ComponentActionee } from '../component-actionee';
import { ButtonEmission } from '../button/button-emission';
import { Type } from '../../../analytics/action/type';
import ID from './id';
import { FollowSelector } from './follow-selector';

class FollowActionee extends ComponentActionee {
  constructor () {
    super(Type.null, 2);
  }

  static get instanceClassName () {
    return 'FollowActionee';
  }

  init () {
    this._input = this.querySelector(FollowSelector.NEWSLETTER_INPUT);
    if (this._input) {
      this.addAscent(ButtonEmission.CLICK, this.subscribe.bind(this));
      const button = this.element.getDescendantInstances('ButtonActionee', null, true)[0];
      button.isMuted = true;
      this._type = Type.SUBSCRIBE;
      this._input.addEventListener('keydown', this.handleKey.bind(this));
    }
  }

  handleKey (e) {
    if (e.keyCode === 13) {
      this.subscribe();
    }
  }

  subscribe () {
    this.act({ component_value: this._input.value.trim() });
  }

  get label () {
    return 'Lettre d\'information et Réseaux Sociaux';
  }

  get component () {
    return ID;
  }
}

export { FollowActionee };
