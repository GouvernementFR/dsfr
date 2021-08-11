import { Instance } from '../api/register/instance.js';
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

    const width = Math.max(...equisizeds.map(equisized => equisized.measure()));
    equisizeds.forEach(equisized => equisized.adjust(width));
  }
}

export { EquisizedsGroup };
