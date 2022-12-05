import api from '../../api.js';
import { TooltipTrigger } from './tooltip-trigger';
import { TooltipSelector } from './tooltip-selector';
import { TooltipVertical } from './tooltip-vertical';
import { TooltipHorizontal } from './tooltip-horizontal';

class Tooltip extends api.core.Instance {
  constructor () {
    super();
    this._shown = false;
    this.modifier = '';
  }

  static get instanceClassName () {
    return 'Tooltip';
  }

  init () {
    console.log('TOOLTIP');
    super.init();
    this.register(`[aria-describedby="${this.id}"]`, TooltipTrigger);
  }

  show () {
    this.shown = true;
  }

  hide () {
    this.shown = false;
  }

  get shown () {
    return this._shown;
  }

  set shown (value) {
    if (this._shown === value || !this.isEnabled) return;
    // this.dispatch(value ? DisclosureEvent.DISCLOSE : DisclosureEvent.CONCEAL, this.type);
    this._shown = value;
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

    const center = trigger.left + trigger.width * 0.5;
    const half = rect.width * 0.5;

    switch (true) {
      case center - half < 0:
        this.horizontal = TooltipHorizontal.LEFT;
        x = trigger.left;
        break;

      case center + half > window.innerWidth:
        this.horizontal = TooltipHorizontal.RIGHT;
        x = trigger.right - rect.width;
        break;

      default:
        this.horizontal = TooltipHorizontal.CENTER;
        x = center - half;
    }

    if (this._x !== x || this._y !== y) {
      this._x = x;
      this._y = y;
      this.node.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
}

export { Tooltip };
