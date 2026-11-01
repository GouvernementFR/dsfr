class RangeConstraints {
  constructor (node) {
    const min = parseFloat(node.min);
    const max = parseFloat(node.max);
    const step = parseFloat(node.step);
    this._min = isNaN(min) ? 0 : min;
    this._max = isNaN(max) ? 100 : max;
    this._step = isNaN(step) ? 1 : step;
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
