import { RangeSVG } from './range-svg';

class RangeModel {
  constructor () {
    this._width = 0;
    this._min = 0;
    this._max = 0;
    this._value = 0;
    this._thumbSize = 24;
    this._innerWidth = 0;
    this._prefix = '';
    this._suffix = '';
    this._isDisabled = false;
  }

  configure (model, callback) {
    this._callback = callback;
    if (!model) return;
    this._prefix = model._prefix;
    this._suffix = model._suffix;
    this._width = model.width;
    this.setConstraints(model._constraints);
    this.isDisabled = model.isDisabled;
    this.value = model.value;
    this.update();
  }

  setPrefix (value) {
    this._prefix = value !== null ? value : '';
  }

  setSuffix (value) {
    this._suffix = value !== null ? value : '';
  }

  _decorate (value) {
    return `${this._prefix}${value}${this._suffix}`;
  }

  get width () {
    return this._width;
  }

  set width (value) {
    this._width = value;
    this.update();
  }

  get isDisabled () {
    return this._isDisabled;
  }

  set isDisabled (value) {
    if (this._isDisabled === value) return;
    this._isDisabled = value;
    this.update();
  }

  get isSm () {
    return this._isSm;
  }

  set isSm (value) {
    if (this._isSm === value) return;
    this._isSm = value;
    this.seThumbSize(value ? 16 : 24);
    this.setStrokeWidth(value ? 2 : 4);
    this.update();
  }

  seThumbSize (value, mult = 1) {
    this._thumbSize = value;
    this._innerPadding = value * mult;
  }

  setStrokeWidth (value) {
    this._strokeWidth = value;
  }

  get textValue () {
    return this._decorate(this._value);
  }

  get value () {
    return this._value;
  }

  set value (value) {
    if (this._value === value) return;
    this._value = value;
    this.render();
  }

  get outputX () {
    return this._outputX;
  }

  setConstraints (constraints) {
    if (constraints.test(this._min, this._max, this._step)) return;
    this._constraints = constraints;
    this._min = constraints.min;
    this._max = constraints.max;
    this._step = constraints.step;
    this._rangeWidth = constraints.rangeWidth;
    this.update();
  }

  get min () {
    return this._min;
  }

  get textMin () {
    return this._decorate(this._min);
  }

  get max () {
    return this._max;
  }

  get textMax () {
    return this._decorate(this._max);
  }

  get step () {
    return this._step;
  }

  _getRatio (value) {
    return (value - this._min) / this._rangeWidth;
  }

  update () {
    this._update();
    this.render();
  }

  _update () {
    this._innerWidth = this._width - this._innerPadding;
  }

  render () {
    this._calculate();
    if (this._rendering()) this._callback();
  }

  _calculate () {
    const ratio = this._getRatio(this._value);
    this._outputX = this._innerWidth * ratio + this._thumbSize * 0.5;
  }

  _rendering () {
    if (isNaN(this._outputX) || isNaN(this._strokeWidth)) return false;
    this._background = {
      size: `${this._outputX.toFixed(3)}px ${this._strokeWidth}px, 100% ${this._strokeWidth}px`
    };

    return true;
  }

  get background () {
    return this._background;
  }
}

class RangeModelStep extends RangeModel {
  constructor () {
    super();
    this._svg = new RangeSVG();
  }

  _update () {
    super._update();
    const steps = this._rangeWidth / this._step;
    const stepWidth = this._innerWidth / steps - this._strokeWidth;
    this._svg.isDisabled = this._isDisabled;
    this._svg.strokeWidth = this._strokeWidth;
    this._svg.width = (stepWidth + this._strokeWidth) * ((steps | 0) + 2);
    this._svg.stepWidth = stepWidth;

    this._background = {
      image: `url("${this._svg.getSvg(false, true)}"), url("${this._svg.getSvg(true, false)}")`
    };
  }

  _rendering () {
    this._background.size = `${this._svg.width}px 4px, ${this._svg.width}px 4px`;
    const progressX = this._outputX - this._svg.width + this._strokeWidth * 0.5;
    const trackX = this._thumbSize * 0.5 - this._svg.stepWidth - this._strokeWidth * 0.5;
    this._background.position = `${progressX}px 50%, ${trackX}px 50%`;
    return true;
  }
}

class RangeModelDouble extends RangeModel {
  get value2 () {
    return this._value;
  }

  set value2 (value) {
    if (this._value2 === value) return;
    this._value2 = value;
    this.update();
  }

  get textValue () {
    return `${this._decorate(this._value)} - ${this._decorate(this._value2)}`;
  }

  seThumbSize (value) {
    super.seThumbSize(value, 2);
  }

  _rendering () {
    const ratio = this._getRatio(this._value);
    const ratio2 = this._getRatio(this._value2);
    const x = this._innerWidth * ratio + this._thumbSize * 0.5;
    const width = this._innerWidth * (ratio2 - ratio) + this._thumbSize;
    this._outputX = x + width * 0.5;
    const x2 = this._width - this._thumbSize * 2;
    const overflow = this._innerWidth * (ratio2 - 1) + this._thumbSize * 0.5;
    const width2 = overflow > 0 ? overflow : 0;
    if (isNaN(x) || isNaN(width) || isNaN(this._strokeWidth) || isNaN(x2) || isNaN(width2)) return false;
    this._background = {
      position: `${x.toFixed(3)}px 50%, 0 50%`,
      size: `${width.toFixed(3)}px ${this._strokeWidth}px, 100% ${this._strokeWidth}px`,
      position2: `${x2.toFixed()}px 50%, 100% 50%`,
      size2: `${width2.toFixed(3)}px ${this._strokeWidth}px, ${this._thumbSize}px ${this._strokeWidth}px`
    };
    return true;
  }
}

export { RangeModel, RangeModelStep, RangeModelDouble };
