import api from '../../api.js';
import { TooltipSelector } from './tooltip-selector';

class TooltipTrigger extends api.core.Instance {
  static get instanceClassName () {
    return 'TooltipTrigger';
  }

  init () {
    const showing = this.show.bind(this);
    const hiding = this.hide.bind(this);
    if (this.matches(TooltipSelector.BUTTON)) {
      this.listen('focusin', showing);
      this.listen('focusout', hiding);
    } else {
      this.listen('mouseover', showing);
      this.listen('mouseout', hiding);
    }
  }

  show () {
    this.isRendering = true;
    this.registration.creator.show();
  }

  hide () {
    this.registration.creator.hide();
    this.isRendering = false;
  }

  render () {
    this.registration.creator.update(this.getRect());
  }
}

export { TooltipTrigger };
