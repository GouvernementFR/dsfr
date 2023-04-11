import { ComponentActionee } from '../component-actionee';
import { ContentSelector } from './content-selector';
import ID from './id';

class ContentActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'ContentActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    if (this.getAttribute('aria-label')) return this.getAttribute('aria-label');

    const selectorImg = this.querySelector(ContentSelector.IMG);
    if (selectorImg) {
      const contentImg = selectorImg.querySelector('img');
      const labelImg = contentImg.getAttribute('alt') || contentImg.getAttribute('aria-label');
      const contentSvg = selectorImg.querySelector('svg');
      const labelSvg = contentSvg.getAttribute('aria-label') || contentSvg.querySelector('title').textContent.trim();
      if (labelImg && labelImg !== '') return labelImg;
      if (labelSvg && labelSvg !== '') return labelSvg;
    }

    const contentIframe = this.querySelector('iframe');
    if (contentIframe) return contentIframe.getAttribute('title') || contentIframe.getAttribute('aria-label');

    const contentVideo = this.querySelector('video');
    if (contentVideo) return contentVideo.getAttribute('aria-label');

    return 'Contenu média';
  }

  get component () {
    return ID;
  }
}

export { ContentActionee };
