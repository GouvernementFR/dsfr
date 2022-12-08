import { Instance } from '../api/modules/register/instance.js';
import { VerticalSelector } from './vertical-selector';
import { HorizontalSelector } from './horizontal-selector';
import { Vertical } from './vertical';
import { Horizontal } from './horizontal';
import { completeAssign } from '../api/utilities/property/complete-assign.js';

class Placement extends Instance {
  static get instanceClassName () {
    return 'Placement';
  }

  get proxy () {
    const scope = this;
    const proxy = Object.assign(super.proxy, {
      update: scope.update.bind(scope)
    });

    const proxyAccessors = {
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

  get vertical () {
    return this._vertical;
  }

  set vertical (value) {
    if (this._vertical === value) return;
    if (this._vertical === Vertical.BOTTOM) this.removeClass(VerticalSelector.BOTTOM);
    this._vertical = value;
    if (this._vertical === Vertical.BOTTOM) this.addClass(VerticalSelector.BOTTOM);
  }

  get horizontal () {
    return this._horizontal;
  }

  set horizontal (value) {
    if (this._horizontal === value) return;
    if (this._horizontal === Horizontal.LEFT) this.removeClass(HorizontalSelector.LEFT);
    if (this._horizontal === Horizontal.RIGHT) this.removeClass(HorizontalSelector.RIGHT);
    this._horizontal = value;
    if (this._horizontal === Horizontal.LEFT) this.addClass(HorizontalSelector.LEFT);
    if (this._horizontal === Horizontal.RIGHT) this.addClass(HorizontalSelector.RIGHT);
  }

  update (trigger) {
    let x, y;
    const rect = this.getRect();
    const top = trigger.top - rect.height - 12;
    if (top < 0) {
      this.vertical = Vertical.BOTTOM;
      y = trigger.bottom + 12;
    } else {
      y = top;
      this.vertical = Vertical.TOP;
    }

    const center = trigger.width * 0.5;
    const middle = trigger.left + center;
    const half = rect.width * 0.5;

    switch (true) {
      case middle - half < 0:
        this.horizontal = Horizontal.LEFT;
        x = trigger.left;
        this.setProperty('--trigger-center', `${center}px`);
        break;

      case middle + half > window.innerWidth:
        this.horizontal = Horizontal.RIGHT;
        x = trigger.right - rect.width;
        this.setProperty('--trigger-center', `${center}px`);
        break;

      default:
        this.horizontal = Horizontal.CENTER;
        x = middle - half;
    }

    if (this._x !== x || this._y !== y) {
      this._x = Math.round(x);
      this._y = Math.round(y);
      this.node.style.transform = `translate(${this._x}px, ${this._y}px)`;
    }
  }
}

export { Placement };
