import { ComponentActionee } from '../component-actionee';
import { TagSelector } from './tag-selector';
import ID from './id';

class TagActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'TagActionee';
  }

  init () {
    switch (true) {
      case this.detectPressableType():
        this.listenPressable();
        break;

      case this.isInteractive && this.classList.contains(TagSelector.DISMISSIBLE):
        this.setDismissType();
        this.listenClick();
        break;

      case this.isInteractive:
        this.detectInteractionType();
        this.listenClick();
        break;

      default:
        this.setImpressionType();
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
