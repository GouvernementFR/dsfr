import { Instance } from '../api/modules/register/instance.js';
import api from '../../api.js';

class Ratio extends Instance {
  static get instanceClassName () {
    return 'Ratio';
  }

  init () {
    if (!api.internals.support.supportAspectRatio()) {
      this.ratio = 16 / 9;
      for (const className in this.classNames) {
        console.log(this.classNames[className], this.registration.selector.indexOf(this.classNames[className]), this.classNames[className].split('--'));
        if (this.registration.selector.indexOf(this.classNames[className]) > 0) {
          const ratio = this.classNames[className].split('--');
          if (ratio[1]) {
            this.ratio = ratio[1].split('x')[0] / ratio[1].split('x')[1];
          }
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
    console.log(this.currentWidth, this.ratio, this.currentWidth / this.ratio + 'px');
    console.log(this.style.height);

    this.style.height = this.currentWidth / this.ratio + 'px';
    console.log(this.style.height);
  }
}

export { Ratio };
