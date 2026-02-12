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
    this.listen('focusin', this.focusIn.bind(this));
    this.listen('focusout', (e) => this.focusOut(e));
    if (!this.matches(TooltipSelector.BUTTON)) {
      const mouseover = this.mouseover.bind(this);
      this.listen('mouseover', mouseover);
      this.placement.listen('mouseover', mouseover);
      const mouseout = this.mouseout.bind(this);
      this.listen('mouseout', mouseout);
      this.placement.listen('mouseout', mouseout);
    }
    document.addEventListener('click', (e) => this._clickOut(e.target));
    this.addEmission(api.core.RootEmission.KEYDOWN, this._keydown.bind(this));
    this.listen('click', this._click.bind(this));
    this.addEmission(api.core.RootEmission.CLICK, this._clickOut.bind(this));
  }

  _click () {
    this.focusIn();
  }

  _clickOut (target) {
    if (this.node.contains(target) || this.placement.node.contains(target)) return;
    this.focusOut();
  }

  _keydown (keyCode) {
    switch (keyCode) {
      case api.core.KeyCodes.ESCAPE:
        this.close();
        break;
    }
  }

  close () {
    this.state = 0;
  }

  get state () {
    return this._state;
  }

  set state (value) {
    if (this._state === value) return;
    this.isShown = value > 0;
    this._state = value;
  }

  focusIn () {
    this.state |= TooltipReferentState.FOCUS;
  }

  focusOut (event = null) {
    const relatedTarget = event ? event.relatedTarget : null;
    if (relatedTarget && (this.node.contains(relatedTarget) || this.placement.node.contains(relatedTarget))) return;
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
