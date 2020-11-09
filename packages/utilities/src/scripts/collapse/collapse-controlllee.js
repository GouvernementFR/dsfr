import { Disclosure } from '../disclosure/aria-controllee';
import { COLLAPSE, MODIFIER } from './collapse-constants';

class CollapseControllee extends Disclosure {
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
