import api from '../../api.js';
import { ToggleInput } from './toggle-input.js';

class ToggleStatusLabel extends api.core.Instance {
  static get instanceClassName () {
    return 'ToggleStatusLabel';
  }

  init () {
    this.register(`input[id="${this.getAttribute('for')}"]`, ToggleInput);
    this.update();
  }

  get input () {
    return this.getRegisteredInstances('ToggleInput')[0];
  }

  update () {
    const checked = this.input.isChecked;
    const style = getComputedStyle(this.node, 'before');
    let biggestVal = parseInt(style.width);
    this.input.node.checked = !checked;

    const style2 = getComputedStyle(this.node, 'before');
    const secondVal = parseInt(style2.width);
    if (secondVal > biggestVal) biggestVal = secondVal;
    this.input.node.checked = checked;

    this.node.style = '--toggle-status-width:' + (biggestVal / 16) + 'rem';
  }
}

export { ToggleStatusLabel };
