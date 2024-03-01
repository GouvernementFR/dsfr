import { ComponentActionee } from '../component-actionee';
import { TileSelector } from './tile-selector';
import ID from './id';

class TileActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'TileActionee';
  }

  init () {
    const link = this.node.querySelector(TileSelector.LINK);
    if (link) {
      this.link = link;
      this.detectInteractionType(link);
      this.listenActionClick(link);
    }
  }

  get label () {
    const tileTitle = this.node.querySelector(TileSelector.TITLE);
    if (tileTitle) return this.getFirstText(tileTitle);

    const heading = this.getHeadingLabel();
    if (heading) return heading;

    return 'tuile';
  }

  get component () {
    return ID;
  }
}

export { TileActionee };
