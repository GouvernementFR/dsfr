import { AriaControllee } from '../aria-controller/aria-controllee';
import { COLLAPSE, MODIFIER } from './collapse-constants';

class CollapseControllee extends AriaControllee {
  constructor (element) {
    super(element, COLLAPSE + MODIFIER);
  }

  get hasFocus () {
    if (this.element === document.activeElement) return true;
    if (this.element.querySelectorAll(':focus').length > 0) return true;
    return false;
  }
}

export { CollapseControllee };
