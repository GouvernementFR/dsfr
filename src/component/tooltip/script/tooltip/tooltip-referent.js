import api from '../../api.js';
import { TooltipSelector } from './tooltip-selector';

const TooltipReferentState = {
  FOCUS: 1 << 0,
  HOVER: 1 << 1
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
    this.isShown = value > 0;
    this._state = value;
  }

  focusin () {
    this.state |= TooltipReferentState.FOCUS;
  }

  focusout () {
    this.state &= ~TooltipReferentState.FOCUS;
  }

  mouseover () {
    this.state |= TooltipReferentState.HOVER;
  }

  mouseout () {
    this.state &= ~TooltipReferentState.HOVER;
  }
}

export { TooltipReferent };
