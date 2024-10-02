import api from '../../api.js';
import { ToggleInput } from './toggle-input.js';

class ToggleStatusLabel extends api.core.Instance {
  static get instanceClassName () {
    return 'ToggleStatusLabel';
  }

  init () {
    this.register(`input[id="${this.getAttribute('for')}"]`, ToggleInput);
    this.update();
    this.isSwappingFont = true;
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      update: scope.update.bind(scope)
    });
  }

  get input () {
    return this.getRegisteredInstances('ToggleInput')[0];
  }

  update () {
    this.node.style.removeProperty('--toggle-status-width');
    const checked = this.input.isChecked;

    const style = getComputedStyle(this.node, ':before');
    let maxWidth = parseFloat(style.width);
    this.input.node.checked = !checked;

    const style2 = getComputedStyle(this.node, ':before');
    const width = parseFloat(style2.width);
    if (width > maxWidth) maxWidth = width;
    this.input.node.checked = checked;

    this.node.style.setProperty('--toggle-status-width', (maxWidth / 16) + 'rem');
  }

  swapFont (families) {
    this.update();
  }
}

export { ToggleStatusLabel };
