import { ComponentActionee } from '../component-actionee';
import { ContentSelector } from './content-selector';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class ContentActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'ContentActionee';
  }

  get label () {
    const contentImg = this.node.querySelector(ContentSelector.IMG);
    const contentIframe = this.node.querySelector('iframe');
    const contentVideo = this.node.querySelector('video');
    if (contentImg) {
      const alt = contentImg.querySelector('img, svg').getAttribute('alt');
      if (alt !== '') return alt;
      return 'Contenu média';
    } else if (contentIframe) return contentIframe.getAttribute('title') || contentIframe.getAttribute('aria-label');
    else if (contentVideo) return contentVideo.getAttribute('aria-label') || contentVideo.getAttribute('title');
    return this.node.getAttribute('aria-label') || 'Contenu média';
  }

  get component () {
    return ID;
  }
}

export { ContentActionee };
