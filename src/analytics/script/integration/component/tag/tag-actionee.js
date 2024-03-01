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

      case this.isInteractive && this.node.classList.contains(TagSelector.DISMISSIBLE):
        this.setDismissType();
        this.listenActionClick();
        break;

      case this.isInteractive:
        this.detectInteractionType();
        this.listenActionClick();
        break;
    }
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;

    return 'tag';
  }

  get component () {
    return ID;
  }
}

export { TagActionee };
