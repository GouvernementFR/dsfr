import { ComponentActionee } from '../component-actionee';
import ID from './id';
import { ButtonEmission } from './button-emission';

class ButtonActionee extends ComponentActionee {
  constructor () {
    super(1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'ButtonActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenActionClick();
  }

  handleClick () {
    this.ascend(ButtonEmission.CLICK);
    this.act();
  }

  get label () {
    if (this.node.tagName === 'input') {
      switch (this.node.type) {
        case 'button':
        case 'submit':
          if (this.hasAttribute('value')) return this.getAttribute('value');
      }
    }
    const firstText = this.getFirstText();
    if (firstText) return firstText;
    return 'bouton';
  }

  get component () {
    return ID;
  }
}

export { ButtonActionee };
