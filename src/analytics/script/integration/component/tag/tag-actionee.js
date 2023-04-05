import { ComponentActionee } from '../component-actionee';
import { TagSelector } from './tag-selector';
import ID from './id';

class TagActionee extends ComponentActionee {
  constructor () {
    super(2, true);
  }

  static get instanceClassName () {
    return 'TagActionee';
  }

  init () {
    switch (true) {
      case this.detectPressableType():
        this.listenPressable();
        break;

      case this.isInteractive && this.node.classList.contains(TagSelector.DISMISSIBLE):
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
    return this.getFirstText();
  }

  get component () {
    return ID;
  }
}

export { TagActionee };
