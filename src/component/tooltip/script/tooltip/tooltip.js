import api from '../../api.js';
import { TooltipTrigger } from './tooltip-trigger';
import { TooltipSelector } from './tooltip-selector';
import { TooltipVertical } from './tooltip-vertical';
import { TooltipHorizontal } from './tooltip-horizontal';
import { TooltipEvent } from './tooltip-event.js';
import { completeAssign } from '../../../../core/script/api//utilities/property/complete-assign.js';

class Tooltip extends api.core.Instance {
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
    this.register(`[aria-describedby="${this.id}"]`, TooltipTrigger);
  }

  show () {
    this.isShown = true;
  }

  hide () {
    this.isShown = false;
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

  get vertical () {
    return this._vertical;
  }

  set vertical (value) {
    if (this._vertical === value) return;
    if (this._vertical === TooltipVertical.BOTTOM) this.removeClass(TooltipSelector.BOTTOM);
    this._vertical = value;
    if (this._vertical === TooltipVertical.BOTTOM) this.addClass(TooltipSelector.BOTTOM);
  }

  get horizontal () {
    return this._horizontal;
  }

  set horizontal (value) {
    if (this._horizontal === value) return;
    if (this._horizontal === TooltipHorizontal.LEFT) this.removeClass(TooltipSelector.LEFT);
    if (this._horizontal === TooltipHorizontal.RIGHT) this.removeClass(TooltipSelector.RIGHT);
    this._horizontal = value;
    if (this._horizontal === TooltipHorizontal.LEFT) this.addClass(TooltipSelector.LEFT);
    if (this._horizontal === TooltipHorizontal.RIGHT) this.addClass(TooltipSelector.RIGHT);
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
      },
      get vertical () {
        return scope.vertical;
      },
      set vertical (value) {
        scope.vertical = value;
      },
      get horizontal () {
        return scope.horizontal;
      },
      set horizontal (value) {
        scope.horizontal = value;
      }
    };

    return completeAssign(proxy, proxyAccessors);
  }

  update (trigger) {
    let x, y;
    const rect = this.getRect();
    const top = trigger.top - rect.height - 16;
    if (top < 0) {
      this.vertical = TooltipVertical.BOTTOM;
      y = trigger.bottom + 16;
    } else {
      y = top;
      this.vertical = TooltipVertical.TOP;
    }

    const center = trigger.width * 0.5;
    const middle = trigger.left + center;
    const half = rect.width * 0.5;

    switch (true) {
      case middle - half < 0:
        this.horizontal = TooltipHorizontal.LEFT;
        x = trigger.left;
        this.setProperty('--trigger-center', `${center}px`);
        break;

      case middle + half > window.innerWidth:
        this.horizontal = TooltipHorizontal.RIGHT;
        x = trigger.right - rect.width;
        this.setProperty('--trigger-center', `${center}px`);
        break;

      default:
        this.horizontal = TooltipHorizontal.CENTER;
        x = middle - half;
    }

    if (this._x !== x || this._y !== y) {
      this._x = x;
      this._y = y;
      this.node.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
}

export { Tooltip };
