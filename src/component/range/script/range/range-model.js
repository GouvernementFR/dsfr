import { RangeSVG, RangeSVGStep, RangeSVGDouble } from './range-svg';

class RangeModel {
  constructor (SVGConstructor = RangeSVG) {
    this._svg = new SVGConstructor();
    this._width = 0;
    this._min = 0;
    this._max = 0;
    this._value = 0;
    this._thumbSize = 24;
    this._innerWidth = 0;
    this._prefix = '';
    this._suffix = '';
  }

  configure (model, rendering) {
    this._rendering = rendering;
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
    this._svg.width = value;
    this.update();
  }

  get isDisabled () {
    return this._svg.isDisabled;
  }

  set isDisabled (value) {
    this._svg.isDisabled = value;
    this._rendering();
  }

  get isSm () {
    return this._isSm;
  }

  set isSm (value) {
    if (this._isSm === value) return;
    this._isSm = value;
    this.seThumbSize(value ? 16 : 24);
    this._svg.strokeWidth = value ? 2 : 4;
    this.update();
  }

  seThumbSize (value, mult = 1) {
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
    if (this._value === value) return;
    this._value = value;
    this.update();
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
    return `"${this._decorate(this._min)}"`;
  }

  get max () {
    return this._max;
  }

  get textMax () {
    return `"${this._decorate(this._max)}"`;
  }

  get step () {
    return this._step;
  }

  _getRatio (value) {
    return (value - this._min) / this._rangeWidth;
  }

  update () {
    this._update();
    this._rendering();
  }

  _update () {
    this._innerWidth = this._width - this._innerPadding;
    this._ratio = this._getRatio(this._value);
    this._svg.value = this._innerWidth * this._ratio + this._thumbSize * 0.5;
  }

  get background () {
    return [`url("${this._svg.getSvg()}")`];
  }
}

class RangeModelStep extends RangeModel {
  constructor () {
    super(RangeSVGStep);
  }

  _update () {
    super._update();
    const steps = this._rangeWidth / this._step;
    const stepWidth = this._innerWidth / steps - this._svg.strokeWidth;
    this._svg.stepWidth = stepWidth;
    this._svg.offset = stepWidth - this._thumbSize * 0.5;
  }
}

class RangeModelDouble extends RangeModel {
  constructor () {
    super(RangeSVGDouble);
  }

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

  _update () {
    super._update();
    this._ratio2 = this._getRatio(this._value2);
    this._svg.value2 = this._innerWidth * this._ratio2 + this._thumbSize * 1.5;
  }

  get background () {
    return [`url("${this._svg.getSvg(this._width - this._thumbSize, true)}")`, `url("${this._svg.getSvg(this._thumbSize, this._thumbSize - this._width)}")`];
  }
}

export { RangeModel, RangeModelStep, RangeModelDouble };
