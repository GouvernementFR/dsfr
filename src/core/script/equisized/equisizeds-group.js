import { Instance } from '../api/modules/register/instance.js';
import { EquisizedEmission } from './equisized-emission.js';

class EquisizedsGroup extends Instance {
  static get instanceClassName () {
    return 'EquisizedsGroup';
  }

  init () {
    this.isResizing = true;
    this.isLoading = true;
    this.addAscent(EquisizedEmission.CHANGE, this.resize.bind(this));
  }

  load () {
    this.resize();
  }

  resize () {
    const equisizeds = this.element.getDescendantInstances('Equisized');
    if (!this.isLegacy) this.style.setProperty('--equisized-width', 'auto');

    const width = Math.max(...equisizeds.map(equisized => equisized.measure()));
    if (this.isLegacy) equisizeds.forEach(equisized => equisized.adjust(width));
    else this.style.setProperty('--equisized-width', `${width}px`);
  }
}

export { EquisizedsGroup };
