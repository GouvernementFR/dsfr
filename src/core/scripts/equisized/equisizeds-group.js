import { Instance } from '../api/register/instance';
import { EquisizedEmissions } from './equisized-emissions';

class EquisizedsGroup extends Instance {
  init () {
    this.isResizing = true;
    this.isLoading = true;
    this.addAscent(EquisizedEmissions.CHANGE, this.resize.bind(this));
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
