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
    if (this._vertical === Vertical.TOP) this.removeClass(VerticalSelector.TOP);
    if (this._vertical === Vertical.BOTTOM) this.removeClass(VerticalSelector.BOTTOM);
    this._vertical = value;
    if (this._vertical === Vertical.TOP) this.addClass(VerticalSelector.TOP);
    if (this._vertical === Vertical.BOTTOM) this.addClass(VerticalSelector.BOTTOM);
  }

  get horizontal () {
    return this._horizontal;
  }

  set horizontal (value) {
    if (this._horizontal === value) return;
    if (this._horizontal === Horizontal.LEFT) this.removeClass(HorizontalSelector.LEFT);
    if (this._horizontal === Horizontal.RIGHT) this.removeClass(HorizontalSelector.RIGHT);
    if (this._horizontal === Horizontal.MIDDLE) this.removeClass(HorizontalSelector.MIDDLE);
    this._horizontal = value;
    if (this._horizontal === Horizontal.LEFT) this.addClass(HorizontalSelector.LEFT);
    if (this._horizontal === Horizontal.RIGHT) this.addClass(HorizontalSelector.RIGHT);
    if (this._horizontal === Horizontal.MIDDLE) this.addClass(HorizontalSelector.MIDDLE);
  }

  update (referent) {
    let x, y;
    const rect = this.getRect();
    const top = referent.top - rect.height - 12;

    if (top < 0) {
      this.vertical = Vertical.BOTTOM;
      y = referent.bottom + 12;
    } else {
      y = top;
      this.vertical = Vertical.TOP;
    }

    const center = referent.width * 0.5;
    const middle = referent.left + center;
    const half = rect.width * 0.5;

    switch (true) {
      case middle - half < 0:
        this.horizontal = Horizontal.LEFT;
        x = referent.left;
        this.setProperty('--referent-middle', `${center}px`);
        break;

      case middle + half > window.innerWidth:
        this.horizontal = Horizontal.RIGHT;
        x = referent.right - rect.width;
        this.setProperty('--referent-middle', `${center}px`);
        break;

      default:
        this.horizontal = Horizontal.MIDDLE;
        x = middle - half;
    }

    if (this._x !== x || this._y !== y) {
      this._x = (x + 0.5) | 0;
      this._y = (y + 0.5) | 0;
      console.log('x', this._x);
      Object.assign(this.node.style, {
        left: `${this._x}px`,
        top: `${this._y}px`
      });
    }
  }
}

export { Placement };
