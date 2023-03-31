import { ComponentActionee } from '../component-actionee';
import { TagSelector } from './tag-selector';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class TagActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 2);
  }

  static get instanceClassName () {
    return 'TagActionee';
  }

  init () {
    if (this.detectPressable()) {
      this.listenPressable();
      return;
    }

    if (this.node.tagName === 'A' || this.node.tagName === 'BUTTON') {
      if (this.node.classList.contains(TagSelector.DISMISSIBLE)) {
        this._type = Type.DISMISS;
      } else {
        this.detectInteraction();
      }
      this.listenClick();
    }
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { TagActionee };
