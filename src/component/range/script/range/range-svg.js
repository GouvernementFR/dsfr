import { StrokeLine, StrokeLineStep } from './stroke-line';

const RangeTokens = {
  TRACK: ['background', 'contrast', 'grey'],
  PROGRESS: ['background', 'active', 'blue-france'],
  DISABLED: ['background', 'disabled', 'grey']
};

class RangeSVG {
  constructor (StrokeConstructor = StrokeLine) {
    this._value = 0;
    this._width = 0;
    this._track = new StrokeConstructor();
    this._track.setToken(RangeTokens.TRACK);
    this._progress = new StrokeConstructor();
  }

  get width () {
    return this._width;
  }

  set width (value) {
    this._width = value;
    this._track.x2 = value;
  }

  get value () {
    return this._progress.x2;
  }

  set value (value) {
    if (this._progress.x2 === value) return;
    this._progress.x2 = value;
  }

  get strokeWidth () {
    return this._track.strokeWidth;
  }

  set strokeWidth (value) {
    if (this._strokeWidth === value) return;
    this._strokeWidth = value;
    this._track.strokeWidth = value;
    this._progress.strokeWidth = value;
  }

  get isDisabled () {
    return this._isDisabled;
  }

  set isDisabled (value) {
    if (this._isDisabled === value) return;
    this._isDisabled = value;
    this._progress.setToken(this._isDisabled ? RangeTokens.DISABLED : RangeTokens.PROGRESS);
  }

  getSvg (width = this._width, tx = null) {
    let svg = `<svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 ${width} 4' width='${width}px' height='4px'>`;
    if (tx !== null) svg += `<g transform='translate(${tx}, 0)'>`;
    svg += this._track.line;
    svg += this._progress.line;
    if (tx !== null) svg += '</g>';
    svg += '</svg>';

    svg = svg.replace(/#/gi, '%23');
    if (this.isLegacy) {
      svg = svg.replace('<', '%3C');
      svg = svg.replace('>', '%3E');
      svg = svg.replace('"', '\'');
      svg = svg.replace('{', '%7B');
      svg = svg.replace('}', '%7D');
      svg = svg.replace('’', '%E2%80%99');
    }
    return `data:image/svg+xml;charset=utf8,${svg}`;
  }
}

class RangeSVGStep extends RangeSVG {
  constructor () {
    super(StrokeLineStep);
  }

  get stepWidth () {
    return this._track.stepWidth;
  }

  set stepWidth (value) {
    this._track.stepWidth = value;
    this._progress.stepWidth = value;
  }

  get offset () {
    return this._track.offset;
  }

  set offset (value) {
    this._track.offset = value;
    this._progress.offset = value;
  }
}

class RangeSVGDouble extends RangeSVG {
  get value () {
    return this._progress.x1;
  }

  set value (value) {
    if (this._progress.x1 === value) return;
    this._progress.x1 = value;
  }

  get value2 () {
    return this._progress.x2;
  }

  set value2 (value) {
    if (this._progress.x2 === value) return;
    this._progress.x2 = value;
  }
}

export { RangeSVG, RangeSVGStep, RangeSVGDouble };
