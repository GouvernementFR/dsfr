import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class TranslateButtonActionee extends ComponentActionee {
  constructor () {
    super(Type.CLICK, 2);
  }

  static get instanceClassName () {
    return 'TranslateButtonActionee';
  }

  init () {
    this.id = this.node.id || this.registration.creator.node.id;
    this._button = this.element.getInstance('CollapseButton');
    this.listenClick();
  }

  handleClick () {
    if (!this._button.disclosed) this.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { TranslateButtonActionee };
