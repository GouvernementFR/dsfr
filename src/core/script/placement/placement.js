import { Instance } from '../api/modules/register/instance.js';
import { PlaceSelector } from './place-selector';
import { AlignSelector } from './align-selector';
import { completeAssign } from '../api/utilities/property/complete-assign.js';
import { Place } from './place';
import { Align } from './align';
import { Mode } from './mode';

class Placement extends Instance {
  constructor (mode = Mode.AUTO, places = [Place.BOTTOM, Place.TOP, Place.LEFT, Place.RIGHT], aligns = [Align.CENTER, Align.START, Align.END], safeAreaMargin = 16) {
    super();
    this._mode = mode;
    this._places = places;
    this._aligns = aligns;
    this._safeAreaMargin = safeAreaMargin;
    this._isShown = false;
  }

  static get instanceClassName () {
    return 'Placement';
  }

  init () {
    this.isResizing = true;
  }

  get proxy () {
    const scope = this;
    const proxy = Object.assign(super.proxy, {
      update: scope.update.bind(scope),
      show: scope.show.bind(scope),
      hide: scope.hide.bind(scope)
    });

    const proxyAccessors = {
      get mode () {
        return scope.mode;
      },
      set mode (value) {
        scope.mode = value;
      },
      get place () {
        return scope.place;
      },
      set place (value) {
        scope.place = value;
      },
      get align () {
        return scope.align;
      },
      set align (value) {
        scope.align = value;
      },
      get isShown () {
        return scope.isShown;
      },
      set isShown (value) {
        scope.isShown = value;
      }
    };

    return completeAssign(proxy, proxyAccessors);
  }

  get mode () {
    return this._mode;
  }

  set mode (value) {
    this._mode = value;
  }

  get place () {
    return this._place;
  }

  set place (value) {
    if (this._place === value) return;
    switch (this._place) {
      case Place.TOP:
        this.removeClass(PlaceSelector.TOP);
        break;

      case Place.RIGHT:
        this.removeClass(PlaceSelector.RIGHT);
        break;

      case Place.BOTTOM:
        this.removeClass(PlaceSelector.BOTTOM);
        break;

      case Place.LEFT:
        this.removeClass(PlaceSelector.LEFT);
        break;
    }
    this._place = value;
    switch (this._place) {
      case Place.TOP:
        this.addClass(PlaceSelector.TOP);
        break;

      case Place.RIGHT:
        this.addClass(PlaceSelector.RIGHT);
        break;

      case Place.BOTTOM:
        this.addClass(PlaceSelector.BOTTOM);
        break;

      case Place.LEFT:
        this.addClass(PlaceSelector.LEFT);
        break;
    }
  }

  get align () {
    return this._align;
  }

  set align (value) {
    if (this._align === value) return;
    switch (this._align) {
      case Align.START:
        this.removeClass(AlignSelector.START);
        break;

      case Align.CENTER:
        this.removeClass(AlignSelector.CENTER);
        break;

      case Align.END:
        this.removeClass(AlignSelector.END);
        break;
    }
    this._align = value;
    switch (this._align) {
      case Align.START:
        this.addClass(AlignSelector.START);
        break;

      case Align.CENTER:
        this.addClass(AlignSelector.CENTER);
        break;

      case Align.END:
        this.addClass(AlignSelector.END);
        break;
    }
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
    this.isRendering = value;
    this._isShown = value;
  }

  setReferent (referent) {
    this._referent = referent;
  }

  resize () {
    this.safeArea = {
      top: this._safeAreaMargin,
      right: window.innerWidth - this._safeAreaMargin,
      bottom: window.innerHeight - this._safeAreaMargin,
      left: this._safeAreaMargin,
      center: window.innerWidth * 0.5,
      middle: window.innerHeight * 0.5
    };
  }

  render () {
    if (!this._referent) return;
    this.rect = this.getRect();
    this.referentRect = this._referent.getRect();

    if (this.mode === Mode.AUTO) {
      this.place = this.getPlace();
      switch (this.place) {
        case Place.TOP:
        case Place.BOTTOM:
          this.align = this.getHorizontalAlign();
          break;

        case Place.LEFT:
        case Place.RIGHT:
          this.align = this.getVerticalAlign();
      }
    }

    let x, y;

    switch (this.place) {
      case Place.TOP:
        y = this.referentRect.top - this.rect.height;
        break;

      case Place.RIGHT:
        x = this.referentRect.right;
        break;

      case Place.BOTTOM:
        y = this.referentRect.bottom;
        break;

      case Place.LEFT:
        x = this.referentRect.left - this.rect.width;
        break;
    }

    switch (this.place) {
      case Place.TOP:
      case Place.BOTTOM:
        switch (this.align) {
          case Align.CENTER:
            x = this.referentRect.center - this.rect.width * 0.5;
            break;

          case Align.START:
            x = this.referentRect.left;
            break;

          case Align.END:
            x = this.referentRect.right - this.rect.width;
            break;
        }
        break;

      case Place.RIGHT:
      case Place.LEFT:
        switch (this.align) {
          case Align.CENTER:
            y = this.referentRect.middle - this.rect.height * 0.5;
            break;

          case Align.START:
            y = this.referentRect.top;
            break;

          case Align.END:
            y = this.referentRect.bottom - this.rect.height;
            break;
        }
        break;
    }

    if (this._x !== x || this._y !== y) {
      this._x = (x + 0.5) | 0;
      this._y = (y + 0.5) | 0;
      this.node.style.transform = `translate(${this._x}px,${this._y}px)`;
    }
  }

  getPlace () {
    for (const place of this._places) {
      switch (place) {
        case Place.TOP:
          if (this.referentRect.top - this.rect.height > this.safeArea.top) return Place.TOP;
          break;

        case Place.RIGHT:
          if (this.referentRect.right + this.rect.width < this.safeArea.right) return Place.RIGHT;
          break;

        case Place.BOTTOM:
          if (this.referentRect.bottom + this.rect.height < this.safeArea.bottom) return Place.BOTTOM;
          break;

        case Place.LEFT:
          if (this.referentRect.left - this.rect.width > this.safeArea.left) return Place.LEFT;
          break;
      }
    }

    return this._places[0];
  }

  getHorizontalAlign () {
    for (const align of this._aligns) {
      switch (align) {
        case Align.CENTER:
          if (this.referentRect.center - this.rect.width * 0.5 > this.safeArea.left && this.referentRect.center + this.rect.width * 0.5 < this.safeArea.right) return Align.CENTER;
          break;

        case Align.START:
          if (this.referentRect.left + this.rect.width < this.safeArea.right) return Align.START;
          break;

        case Align.END:
          if (this.referentRect.right - this.rect.width > this.safeArea.left) return Align.END;
          break;
      }
    }

    return this._aligns[0];
  }

  getVerticalAlign () {
    for (const align of this._aligns) {
      switch (align) {
        case Align.CENTER:
          if (this.referentRect.middle - this.rect.height * 0.5 > this.safeArea.top && this.referentRect.middle + this.rect.height * 0.5 < this.safeArea.bottom) return Align.CENTER;
          break;

        case Align.START:
          if (this.referentRect.top + this.rect.height < this.safeArea.bottom) return Align.START;
          break;

        case Align.END:
          if (this.referentRect.bottom - this.rect.height > this.safeArea.top) return Align.END;
          break;
      }
    }

    return this._aligns[0];
  }

  dispose () {
    this._referent = null;
    super.dispose();
  }
}

export { Placement };
