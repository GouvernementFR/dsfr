import api from '../../api';
import { StrokeLine } from './stroke-line';

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
    value = Math.round(value * 1000) / 1000;
    this._width = value;
    this._track.x2 = value;
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

  getSvg (track = true, progress = true) {
    let svg = `<svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 ${this._width} 4' width='${this._width}px' height='4px'>`;
    if (track) svg += this._track.line;
    if (progress) svg += this._progress.line;
    svg += '</svg>';

    svg = svg.replace(/#/gi, '%23');
    if (api.internals.legacy.isLegacy) {
      svg = svg.replace(/</gi, '%3C');
      svg = svg.replace(/>/gi, '%3E');
      svg = svg.replace(/"/gi, '\'');
      svg = svg.replace(/{/gi, '%7B');
      svg = svg.replace(/}/gi, '%7D');
    }
    return `data:image/svg+xml;charset=utf8,${svg}`;
  }
}

export { RangeSVG };
