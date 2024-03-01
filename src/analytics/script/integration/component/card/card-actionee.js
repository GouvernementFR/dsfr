import { ComponentActionee } from '../component-actionee';
import { CardSelector } from './card-selector';
import ID from './id';

class CardActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'CardActionee';
  }

  init () {
    const link = this.node.querySelector(CardSelector.LINK);
    if (link) {
      this.link = link;
      this.detectInteractionType(link);
      this.listenActionClick(link);
    }
  }

  get label () {
    const cardTitle = this.node.querySelector(CardSelector.TITLE);
    if (cardTitle) {
      const text = this.getFirstText(cardTitle);
      if (text) return text;
    }

    const heading = this.getHeadingLabel();
    if (heading) return heading;

    return 'carte';
  }

  get component () {
    return ID;
  }
}

export { CardActionee };
