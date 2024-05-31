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
    this._background = {};
  }

  configure (model) {
    if (!model) return;
    this._prefix = model._prefix;
    this._suffix = model._suffix;
    this._width = model.width;
    this.setConstraints(model._constraints);
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
  }

  get isSm () {
    return this._isSm;
  }

  set isSm (value) {
    if (this._isSm === value) return;
    this._isSm = value;
    this.setThumbSize(value ? 16 : 24);
    this.update();
  }

  setThumbSize (value, mult = 1) {
    this._thumbSize = value;
    this._innerPadding = value * mult;
  }

  get textValue () {
    return this._decorate(this._value);
  }

  get value () {
    return this._value;
  }

  set value (value) {
    this._value = value;
  }

  get outputX () {
    return this._outputX;
  }

  setConstraints (constraints) {
    this._constraints = constraints;
    this._min = constraints.min;
    this._max = constraints.max;
    this._step = constraints.step;
    this._rangeWidth = constraints.rangeWidth;
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

  get output () {
    return {
      text: this.textValue,
      transform: `translateX(${this._translateX}px) translateX(-${this._centerPercent}%)`
    };
  }

  _getRatio (value) {
    return (value - this._min) / this._rangeWidth;
  }

  get progress () {
    return this._progress;
  }

  update () {
    this._update();
  }

  _update () {
    this._innerWidth = this._width - this._innerPadding;
    const ratio = this._getRatio(this._value);
    this._translateX = ratio * this._width;
    this._centerPercent = ratio * 100;
    this._progress = {
      right: `${(this._innerWidth * ratio + this._innerPadding * 0.5).toFixed(2)}px`
    };
  }
}

class RangeModelStep extends RangeModel {
  get stepWidth () {
    return `${this._stepWidth.toFixed(3)}px`;
  }

  _update () {
    super._update();
    const steps = this._rangeWidth / this._step;
    this._stepWidth = this._innerWidth / steps;
    if (this._stepWidth < 1 || !isFinite(this._stepWidth)) this._stepWidth = 4;
    while (this._stepWidth < 4) this._stepWidth *= 2;
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

  setThumbSize (value) {
    super.setThumbSize(value, 2);
  }

  _update () {
    super._update();
    const ratio = this._getRatio((this._value + this._value2) * 0.5);
    this._translateX = ratio * this._width;
    this._centerPercent = ratio * 100;
    const ratio1 = this._getRatio(this._value);
    const ratio2 = this._getRatio(this._value2);
    this._progress = {
      left: `${(this._innerWidth * ratio1 + this._innerPadding * 0.25).toFixed(2)}px`,
      right: `${(this._innerWidth * ratio2 + this._innerPadding * 0.75).toFixed(2)}px`
    };
  }
}

class RangeModelDoubleStep extends RangeModelDouble {
  get stepWidth () {
    return `${this._stepWidth.toFixed(3)}px`;
  }

  _update () {
    super._update();
    const steps = this._rangeWidth / this._step;
    this._stepWidth = this._innerWidth / steps;
    if (this._stepWidth < 4) this._stepWidth *= Math.ceil(4 / this._stepWidth);
  }
}

export { RangeModel, RangeModelStep, RangeModelDouble, RangeModelDoubleStep };
