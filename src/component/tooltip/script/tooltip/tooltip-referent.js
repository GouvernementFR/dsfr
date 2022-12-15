import api from '../../api.js';
import { TooltipSelector } from './tooltip-selector';

const TooltipReferentState = {
  FOCUS: 1,
  HOVER: 2
};

class TooltipReferent extends api.core.PlacementReferent {
  constructor () {
    super();
    this._state = 0;
  }

  static get instanceClassName () {
    return 'TooltipReferent';
  }

  init () {
    super.init();
    this.listen('focusin', this.focusin.bind(this));
    this.listen('focusout', this.focusout.bind(this));
    if (!this.matches(TooltipSelector.BUTTON)) {
      this.listen('mouseover', this.mouseover.bind(this));
      this.listen('mouseout', this.mouseout.bind(this));
    }
  }

  get state () {
    return this._state;
  }

  set state (value) {
    if (this._state === value) return;
    if (value === 0) this.isShown = false;
    else this.isShown = true;
    this._state = value;
  }

  focusin () {
    this.state |= 1 << TooltipReferentState.FOCUS;
  }

  focusout () {
    this.state &= ~(1 << TooltipReferentState.FOCUS);
  }

  mouseover () {
    this.state |= 1 << TooltipReferentState.HOVER;
  }

  mouseout () {
    this.state &= ~(1 << TooltipReferentState.HOVER);
  }
}

export { TooltipReferent };
