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
    this._isShownOnInteraction = null;
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
    this.addEmission(api.core.RootEmission.KEYDOWN, this._keydown.bind(this));
    this.listen('pointerdown', this._interactionStart.bind(this));
    this.listen('mousedown', this._interactionStart.bind(this));
    this.listen('touchstart', this._interactionStart.bind(this));
    this.listen('click', this._click.bind(this));
    this.addEmission(api.core.RootEmission.CLICK, this._clickOut.bind(this));
    this.addEmission(api.core.RootEmission.INTERACTION, this._clickOut.bind(this)); // IOS
  }

  _interactionStart () {
    this._isShownOnInteraction = this.state > 0;
  }

  _click () {
    const isButtonTooltip = this.matches(TooltipSelector.BUTTON);

    if (isButtonTooltip && (this._isShownOnInteraction === true || (this._isShownOnInteraction === null && this.state > 0))) {
      this.close();
      this._isShownOnInteraction = null;
      return;
    }

    if (!isButtonTooltip) {
      this.focusOut();
      this._isShownOnInteraction = null;
      return;
    }

    this.focusIn();
    this._isShownOnInteraction = null;
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

      case api.core.KeyCodes.TAB:
        this.request(this._tab.bind(this));
        break;
    }
  }

  _tab () {
    if (this.node.contains(document.activeElement) || this.placement.node.contains(document.activeElement)) return;
    this.focusOut();
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
