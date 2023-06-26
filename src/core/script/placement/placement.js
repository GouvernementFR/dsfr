import { Instance } from '../api/modules/register/instance.js';
import { PlaceSelector } from './place-selector';
import { AlignSelector } from './align-selector';
import { completeAssign } from '../api/utilities/property/complete-assign.js';
import { PlacementPosition } from './placement-position';
import { PlacementAlign } from './placement-align';
import { PlacementMode } from './placement-mode';

class Placement extends Instance {
  constructor (mode = PlacementMode.AUTO, places = [PlacementPosition.BOTTOM, PlacementPosition.TOP, PlacementPosition.LEFT, PlacementPosition.RIGHT], aligns = [PlacementAlign.CENTER, PlacementAlign.START, PlacementAlign.END], safeAreaMargin = 16) {
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
      case PlacementPosition.TOP:
        this.removeClass(PlaceSelector.TOP);
        break;

      case PlacementPosition.RIGHT:
        this.removeClass(PlaceSelector.RIGHT);
        break;

      case PlacementPosition.BOTTOM:
        this.removeClass(PlaceSelector.BOTTOM);
        break;

      case PlacementPosition.LEFT:
        this.removeClass(PlaceSelector.LEFT);
        break;
    }
    this._place = value;
    switch (this._place) {
      case PlacementPosition.TOP:
        this.addClass(PlaceSelector.TOP);
        break;

      case PlacementPosition.RIGHT:
        this.addClass(PlaceSelector.RIGHT);
        break;

      case PlacementPosition.BOTTOM:
        this.addClass(PlaceSelector.BOTTOM);
        break;

      case PlacementPosition.LEFT:
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
      case PlacementAlign.START:
        this.removeClass(AlignSelector.START);
        break;

      case PlacementAlign.CENTER:
        this.removeClass(AlignSelector.CENTER);
        break;

      case PlacementAlign.END:
        this.removeClass(AlignSelector.END);
        break;
    }
    this._align = value;
    switch (this._align) {
      case PlacementAlign.START:
        this.addClass(AlignSelector.START);
        break;

      case PlacementAlign.CENTER:
        this.addClass(AlignSelector.CENTER);
        break;

      case PlacementAlign.END:
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

    if (this.mode === PlacementMode.AUTO) {
      this.place = this.getPlace();
      switch (this.place) {
        case PlacementPosition.TOP:
        case PlacementPosition.BOTTOM:
          this.align = this.getHorizontalAlign();
          break;

        case PlacementPosition.LEFT:
        case PlacementPosition.RIGHT:
          this.align = this.getVerticalAlign();
      }
    }

    let x, y;

    switch (this.place) {
      case PlacementPosition.TOP:
        y = this.referentRect.top - this.rect.height;
        break;

      case PlacementPosition.RIGHT:
        x = this.referentRect.right;
        break;

      case PlacementPosition.BOTTOM:
        y = this.referentRect.bottom;
        break;

      case PlacementPosition.LEFT:
        x = this.referentRect.left - this.rect.width;
        break;
    }

    switch (this.place) {
      case PlacementPosition.TOP:
      case PlacementPosition.BOTTOM:
        switch (this.align) {
          case PlacementAlign.CENTER:
            x = this.referentRect.center - this.rect.width * 0.5;
            break;

          case PlacementAlign.START:
            x = this.referentRect.left;
            break;

          case PlacementAlign.END:
            x = this.referentRect.right - this.rect.width;
            break;
        }
        break;

      case PlacementPosition.RIGHT:
      case PlacementPosition.LEFT:
        switch (this.align) {
          case PlacementAlign.CENTER:
            y = this.referentRect.middle - this.rect.height * 0.5;
            break;

          case PlacementAlign.START:
            y = this.referentRect.top;
            break;

          case PlacementAlign.END:
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
        case PlacementPosition.TOP:
          if (this.referentRect.top - this.rect.height > this.safeArea.top) return PlacementPosition.TOP;
          break;

        case PlacementPosition.RIGHT:
          if (this.referentRect.right + this.rect.width < this.safeArea.right) return PlacementPosition.RIGHT;
          break;

        case PlacementPosition.BOTTOM:
          if (this.referentRect.bottom + this.rect.height < this.safeArea.bottom) return PlacementPosition.BOTTOM;
          break;

        case PlacementPosition.LEFT:
          if (this.referentRect.left - this.rect.width > this.safeArea.left) return PlacementPosition.LEFT;
          break;
      }
    }

    return this._places[0];
  }

  getHorizontalAlign () {
    for (const align of this._aligns) {
      switch (align) {
        case PlacementAlign.CENTER:
          if (this.referentRect.center - this.rect.width * 0.5 > this.safeArea.left && this.referentRect.center + this.rect.width * 0.5 < this.safeArea.right) return PlacementAlign.CENTER;
          break;

        case PlacementAlign.START:
          if (this.referentRect.left + this.rect.width < this.safeArea.right) return PlacementAlign.START;
          break;

        case PlacementAlign.END:
          if (this.referentRect.right - this.rect.width > this.safeArea.left) return PlacementAlign.END;
          break;
      }
    }

    return this._aligns[0];
  }

  getVerticalAlign () {
    for (const align of this._aligns) {
      switch (align) {
        case PlacementAlign.CENTER:
          if (this.referentRect.middle - this.rect.height * 0.5 > this.safeArea.top && this.referentRect.middle + this.rect.height * 0.5 < this.safeArea.bottom) return PlacementAlign.CENTER;
          break;

        case PlacementAlign.START:
          if (this.referentRect.top + this.rect.height < this.safeArea.bottom) return PlacementAlign.START;
          break;

        case PlacementAlign.END:
          if (this.referentRect.bottom - this.rect.height > this.safeArea.top) return PlacementAlign.END;
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
