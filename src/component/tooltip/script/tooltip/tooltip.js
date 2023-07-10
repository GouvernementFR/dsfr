import api from '../../api.js';
import { TooltipReferent } from './tooltip-referent';
import { TooltipSelector } from './tooltip-selector';
import { TooltipEvent } from './tooltip-event.js';

const TooltipState = {
  HIDDEN: 'hidden',
  SHOWN: 'shown',
  HIDING: 'hiding'
};

class Tooltip extends api.core.Placement {
  constructor () {
    super(api.core.PlacementMode.AUTO, [api.core.PlacementPosition.TOP, api.core.PlacementPosition.BOTTOM], [api.core.PlacementAlign.CENTER, api.core.PlacementAlign.START, api.core.PlacementAlign.END]);
    this.modifier = '';
    this._state = TooltipState.HIDDEN;
  }

  static get instanceClassName () {
    return 'Tooltip';
  }

  init () {
    super.init();
    this.register(`[aria-describedby="${this.id}"]`, TooltipReferent);
    this.listen('transitionend', this.transitionEnd.bind(this));
  }

  transitionEnd () {
    if (this._state === TooltipState.HIDING) {
      this._state = TooltipState.HIDDEN;
      this.isShown = false;
    }
  }

  get isShown () {
    return super.isShown;
  }

  set isShown (value) {
    if (!this.isEnabled) return;
    switch (true) {
      case value:
        this._state = TooltipState.SHOWN;
        this.addClass(TooltipSelector.SHOWN);
        this.dispatch(TooltipEvent.SHOW);
        super.isShown = true;
        break;

      case this.isShown && !value && this._state === TooltipState.SHOWN:
        this._state = TooltipState.HIDING;
        this.removeClass(TooltipSelector.SHOWN);
        break;

      case this.isShown && !value && this._state === TooltipState.HIDDEN:
        this.dispatch(TooltipEvent.HIDE);
        super.isShown = false;
        break;
    }
  }

  render () {
    super.render();
    let x = this.referentRect.center - this.rect.center;
    const limit = this.rect.width * 0.5 - 8;
    if (x < -limit) x = -limit;
    if (x > limit) x = limit;
    this.setProperty('--arrow-x', `${x.toFixed(2)}px`);
  }
}

export { Tooltip };
