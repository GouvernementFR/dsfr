import ref from '../../../ref.js';
import { RATIOS } from './ratios';

class Ratio extends ref.api.Instance {
  static get instanceClassName () {
    return 'Ratio';
  }

  init () {
    if (!ref.internals.support.supportAspectRatio()) {
      this.ratio = 16 / 9;
      for (const className of this.classNames) {
        if (this.registration.selector.indexOf(className) > 0) {
          const modifier = className.split('--')[1];
          const ratio = RATIOS.filter(ratio => ratio.id === modifier)[0];
          if (ratio) this.ratio = ratio.ratio;
        }
      }
      this.isRendering = true;
      this.update();
    }
  }

  render () {
    const width = this.getRect().width;
    if (width !== this.currentWidth) this.update();
  }

  update () {
    this.currentWidth = this.getRect().width;
    this.style.height = this.currentWidth / this.ratio + 'px';
  }
}

export { Ratio };
