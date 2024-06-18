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

  _getImageLabel () {
    const contentImg = this.querySelector(ContentSelector.IMG);
    if (!contentImg) return false;
    const img = contentImg.getElementsByTagName('img')[0];
    if (img) {
      const alt = img.getAttribute('alt');
      if (alt) return alt;
      const ariaLabel = img.getAttribute('aria-label');
      if (ariaLabel) return ariaLabel;
    }
    const svg = contentImg.getElementsByTagName('svg')[0];
    if (svg) {
      const ariaLabel = svg.getAttribute('aria-label');
      if (ariaLabel) return ariaLabel;
      const title = svg.querySelector('title');
      if (title) {
        const textContent = title.textContent;
        if (textContent) return textContent.trim();
      }
    }
    return false;
  }

  get label () {
    const ariaLabel = this.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;

    const imageLabel = this._getImageLabel();
    if (imageLabel) return imageLabel;

    const iframe = this.querySelector('iframe');
    if (iframe) {
      const title = iframe.getAttribute('title');
      if (title) return title;
      const ariaLabel = iframe.getAttribute('aria-label');
      if (ariaLabel) return ariaLabel;
    }

    const video = this.querySelector('video');
    if (video) {
      const ariaLabel = video.getAttribute('aria-label');
      if (ariaLabel) return ariaLabel;
    }

    return 'contenu médias';
  }

  get component () {
    return ID;
  }
}

export { ContentActionee };
