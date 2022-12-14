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
    if (this._vertical === Vertical.MIDDLE) this.removeClass(VerticalSelector.MIDDLE);
    this._vertical = value;
    if (this._vertical === Vertical.TOP) this.addClass(VerticalSelector.TOP);
    if (this._vertical === Vertical.BOTTOM) this.addClass(VerticalSelector.BOTTOM);
    if (this._vertical === Vertical.MIDDLE) this.addClass(VerticalSelector.MIDDLE);
  }

  get horizontal () {
    return this._horizontal;
  }

  set horizontal (value) {
    if (this._horizontal === value) return;
    if (this._horizontal === Horizontal.LEFT) this.removeClass(HorizontalSelector.LEFT);
    if (this._horizontal === Horizontal.RIGHT) this.removeClass(HorizontalSelector.RIGHT);
    if (this._horizontal === Horizontal.CENTER) this.removeClass(HorizontalSelector.CENTER);
    this._horizontal = value;
    if (this._horizontal === Horizontal.LEFT) this.addClass(HorizontalSelector.LEFT);
    if (this._horizontal === Horizontal.RIGHT) this.addClass(HorizontalSelector.RIGHT);
    if (this._horizontal === Horizontal.CENTER) this.addClass(HorizontalSelector.CENTER);
  }

  show () {
    this.isRendering = true;
  }

  hide () {
    this.isRendering = false;
  }

  setReferent (referent) {
    this.referent = referent;
  }

  render () {
    if (!this.referent) return;
    let x, y;
    const rect = this.getRect();
    const referentRect = this.referent.getRect();
    const top = referentRect.top - rect.height - 12;

    if (top < 0) {
      this.vertical = Vertical.BOTTOM;
      y = referentRect.bottom + 12;
    } else {
      y = top;
      this.vertical = Vertical.TOP;
    }

    this.center = referentRect.width * 0.5;
    const referentX = referentRect.left + this.center;
    const half = rect.width * 0.5;

    switch (true) {
      case referentX - half < 0:
        this.horizontal = Horizontal.LEFT;
        x = referentRect.left;
        break;

      case referentX + half > window.innerWidth:
        this.horizontal = Horizontal.RIGHT;
        x = referentRect.right - rect.width;
        break;

      default:
        this.horizontal = Horizontal.CENTER;
        x = referentX - half;
    }

    if (this._x !== x || this._y !== y) {
      this._x = (x + 0.5) | 0;
      this._y = (y + 0.5) | 0;
      Object.assign(this.node.style, {
        left: `${this._x}px`,
        top: `${this._y}px`
      });
    }
  }
}

export { Placement };
