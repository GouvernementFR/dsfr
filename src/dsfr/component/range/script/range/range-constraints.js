class RangeConstraints {
  constructor (node) {
    this._min = isNaN(node.min) ? 0 : node.min;
    this._max = isNaN(node.max) ? 100 : node.max;
    this._step = isNaN(node.step) ? 1 : node.step;
    this._rangeWidth = this._max - this._min;
  }

  get min () {
    return this._min;
  }

  get max () {
    return this._max;
  }

  get step () {
    return this._step;
  }

  get rangeWidth () {
    return this._rangeWidth;
  }

  test (min, max, step) {
    return this._min === min && this._max === max && this._step === step;
  }
}

export { RangeConstraints };
