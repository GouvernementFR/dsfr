import api from '../../api.js';
import { TooltipReferent } from './tooltip-referent';
import { TooltipSelector } from './tooltip-selector';
import { TooltipEvent } from './tooltip-event.js';
import { completeAssign } from '../../../../core/script/api//utilities/property/complete-assign.js';

class Tooltip extends api.core.Placement {
  constructor () {
    super();
    this._isShown = false;
    this.modifier = '';
  }

  static get instanceClassName () {
    return 'Tooltip';
  }

  init () {
    super.init();
    this.register(`[aria-describedby="${this.id}"]`, TooltipReferent);
    this.listen('transitionend', this.transitionEnd.bind(this));
  }

  show () {
    super.show();
    this.isShown = true;
  }

  hide () {
    this.isShown = false;
  }

  transitionEnd () {
    if (!this.isShown) super.hide();
  }

  get isShown () {
    return this._isShown;
  }

  set isShown (value) {
    if (this._isShown === value || !this.isEnabled) return;
    this.dispatch(value ? TooltipEvent.SHOW : TooltipEvent.HIDE);
    this._isShown = value;
    if (value) this.addClass(TooltipSelector.SHOWN);
    else this.removeClass(TooltipSelector.SHOWN);
  }

  render () {
    super.render();
    this.setProperty('--referent-center', `${this.center}px`);
  }

  get proxy () {
    const scope = this;
    const proxy = Object.assign(super.proxy, {
      show: scope.show.bind(scope),
      hide: scope.hide.bind(scope)
    });

    const proxyAccessors = {
      get isShown () {
        return scope.isShown;
      },
      set isShown (value) {
        scope.isShown = value;
      }
    };

    return completeAssign(proxy, proxyAccessors);
  }
}

export { Tooltip };
