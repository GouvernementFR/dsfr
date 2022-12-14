import api from '../../api.js';
import { TooltipSelector } from './tooltip-selector';

const STATE_FOCUS = 1;
const STATE_OVER = 2;

class TooltipReferent extends api.core.PlacementReferent {
  static get instanceClassName () {
    return 'TooltipReferent';
  }

  init () {
    super.init();
    // const showing = this.show.bind(this);
    // const hiding = this.hide.bind(this);
    this.listen('focusin', this.focusin.bind(this));
    this.listen('focusout', this.focusout.bind(this));
    if (!this.matches(TooltipSelector.BUTTON)) {
      this.listen('mouseover', this.mouseover.bind(this));
      this.listen('mouseout', this.mouseout.bind(this));
    }
  }

  constructor () {
    super();
    this._state = 0;
  }

  get state () {
    return this._state;
  }

  set state (value) {
    if (this._state === value) return;
    if (value === 0) this.hide();
    else this.show();
    this._state = value;
  }

  focusin () {
    this.state |= 1 << STATE_FOCUS;
  }

  focusout () {
    this.state &= ~(1 << STATE_FOCUS);
  }

  mouseover () {
    this.state |= 1 << STATE_OVER;
  }

  mouseout () {
    this.state &= ~(1 << STATE_OVER);
  }
}

export { TooltipReferent };
