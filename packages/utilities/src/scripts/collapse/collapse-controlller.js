import { DisclosureController } from '../disclosure/disclosure-controller';
import { CollapseControllee } from './collapse-controlllee';

class CollapseController extends DisclosureController {
  constructor (element) {
    super(new CollapseControllee(element), 'aria-expanded');
  }

  get hasFocus () {
    if (this.controllee.hasFocus) return true;
    if (this.buttons.some((button) => { return button.element === document.activeElement; })) return true;
    return false;
  }

  focus () {
    this.element.focus();
  }
}

export { CollapseController };
