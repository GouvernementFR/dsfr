import api from '../../api.js';
import { RangeEmission } from './range-emission.js';
import { RangeSelector } from './range-selector.js';

class Range extends api.core.Instance {
  static get instanceClassName () {
    return 'Range';
  }

  init () {
    this.output = this.node.querySelector(RangeSelector.RANGE_OUTPUT);
    this.retrieveType();
    this.addAscent(RangeEmission.MIN, this.setMin.bind(this));
    this.addAscent(RangeEmission.MAX, this.setMax.bind(this));
    this.addAscent(RangeEmission.VALUE, this.setValue.bind(this));
    this.addAscent(RangeEmission.DISABLED, this.setDisabled.bind(this));

    // this.addAscent(RangeEmission.VALUE_MAX, this.setValueMax.bind(this));
    // this.addAscent(RangeEmission.STEP, this.setStep.bind(this));
    // if (this.getAttribute(RangeSelector.RANGE_PREFIX)) this.setPrefix(this.getAttribute(RangeSelector.RANGE_PREFIX));
    // if (this.getAttribute(RangeSelector.RANGE_SUFFIX)) this.setSuffix(this.getAttribute(RangeSelector.RANGE_SUFFIX));

    this.update();
  }

  retrieveType () {
    switch (true) {
      case this.matches(RangeSelector.RANGE_STEP):
        this._model = new RangeModelStep();
        break;

      case this.matches(RangeSelector.RANGE_DOUBLE):
        this._model = new RangeModelDouble();
        break;

      default:
        this._type = new RangeModel();
        break;
    }

    this.retrieveSize();
  }

  retrieveSize () {
    this._model.isSm = this.matches(RangeSelector.RANGE_SM);
  }

  setValue (value) {
    this._value = value;
    this.style.setProperty('--text-value', `"${this._value}"`);
    this.update();
  }

  setValueMax (value) {
    this.valueMax = value;
    this.style.setProperty('--text-value-b', `"${this._value}"`);
    this.update();
  }

  setDisabled (value) {
    this._model.isDisabled = value;
  }

  setMin (value) {
    this._min = value || 0; // browser remove min value if it's 0
    this.style.setProperty('--min', this.min);
    this.style.setProperty('--text-min', `"${this.min}"`);
    this.descend(RangeEmission.MIN, this.min);
    this.update();
  }

  setMax (value) {
    this._max = value;
    this.style.setProperty('--max', this.max);
    this.style.setProperty('--text-max', `"${this.max}"`);
    this.descend(RangeEmission.MAX, this.max);
    this.update();
  }

  setStep (value) {
    this.step = value;
    this.style.setProperty('--step', this.step);
    this.descend(RangeEmission.STEP, this.step);
  }

  setPrefix (value) {
    this.prefix = value;
    this.style.setProperty('--prefix', `"${this.prefix}"`);
    this.update();
  }

  setSuffix (value) {
    this.suffix = value;
    this.style.setProperty('--suffix', `"${this.suffix}"`);
    this.update();
  }

  mutate (attributesNames) {
    this.retrieveSize();
    this.retrieveType();
    this.update();
    // if (attributesNames.includes(RangeSelector.RANGE_PREFIX)) this.setPrefix(this.getAttribute(RangeSelector.RANGE_PREFIX));
    // if (attributesNames.includes(RangeSelector.RANGE_SUFFIX)) this.setSuffix(this.getAttribute(RangeSelector.RANGE_SUFFIX));
  }

  getSvg (trackColor, progressColor) {
    let trackLine;
    let progressLine;

    switch (this._type) {
      // case: RangeType.STEP:
      //   trackLine = `<line stroke-width='${this.strokeWidth}' stroke='${trackColor}' x1='0' y1='0' x2='${this.rangeWidth}' y2='0' />`;
      //   progressLine = `<line stroke-width='${this.strokeWidth}' stroke='${progressColor}' x1='0' y1='0' x2='${this.rangeWidth}' y2='0' />`;
      //   break;
      default:
        trackLine = `<line stroke-width='${this.strokeWidth}' stroke='${trackColor}' x1='0' y1='0' x2='${this.rangeWidth}' y2='0' />`;
        progressLine = `<line stroke-width='${this.strokeWidth}' stroke='${progressColor}' x1='0' y1='0' x2='${this.progressX}' y2='0' />`;
    }

    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 ${this.rangeWidth} ${this.strokeWidth}' width='${this.rangeWidth}px' height='${this.strokeWidth}px'>${trackLine}${progressLine}</svg>`;

    const cleanSvg = this.cleanSvg(svg);
    return `data:image/svg+xml;charset=utf8,${cleanSvg}`;
  }

  update () {
    this.rangeWidth = this.getRect().width;
    this.activeWidth = this.rangeWidth - this._thumbSize;
    this.ratio = (this._value - this._min) / (this._max - this._min);
    this.progressX = this.activeWidth * this.ratio + this._thumbSize / 2;
    this.strokeWidth = this._isSm ? 2 : 4;
    if (this.output) this.output.innerText = `${this.prefix || ''}${this._value}${this.suffix || ''}${this.valueMax ? ` - ${this.prefix || ''}${this.valueMax}${this.suffix || ''}` : ''}`;

    this.descend(RangeEmission.SVG, this.model.svg);
  }

  dispose () {
    for (const input of this.inputs) input.removeEventListener('input', this.changing);
  }
}

class RangeModel {
  constructor () {
    this.build();
  }

  build () {
    this._svg = new RangeSVG();
  }

  get isDisabled () {
    return this._svg.isDisabled;
  }

  set isDisabled (value) {
    this._svg.isDisabled = value;
  }

  get isSm () {
    return this._isSm;
  }

  set isSm (value) {
    if (this._isSm === value) return;
    this._isSm = value;
    this._thumbSize = this._isSm ? 16 : 24;
    this._svg.strokeWidth = this._isSm ? 2 : 4;
  }

  get svg () {
    return this._svg.svg;
  }
}

class RangeModelStep extends RangeModel {
  build () {
    this._svg = new RangeSVGStep();
  }
}

class RangeModelDouble extends RangeModel {
  build () {
    this._svg = new RangeSVGDouble();
  }
}

class RangeSVG {
  constructor (StrokeConstructor = StrokeLine) {
    this._value = 0;
    this._width = 0;
    this._track = new StrokeConstructor();
    this._track.setToken(['background', 'contrast', 'grey']);
    this._progress = new StrokeConstructor();
  }

  get width () {
    return this._width;
  }

  set width (value) {
    this._width = value;
  }

  get value () {
    return this._value;
  }

  set value (value) {
    this._value = value;
  }

  get strokeWidth () {
    return this._track.strokeWidth;
  }

  set strokeWidth (value) {
    this._track.strokeWidth = value;
    this._progress.strokeWidth = value;
  }

  get isDisabled () {
    return this._isDisabled;
  }

  set isDisabled (value) {
    if (this._isDisabled === value) return;
    this._isDisabled = value;
    this._progress.setToken(this._isDisabled ? ['background', 'disabled', 'grey'] : ['background', 'active', 'blue-france']);
  }

  get svg () {
    let svg = `<svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 ${this._width} ${this.strokeWidth}' width='${this._width}px' height='${this.strokeWidth}px'>${this._track.line}${this._progress.line}</svg>`;

    svg = svg.replace(/#/gi, '%23');
    // if (this.isLegacy) {
    //   svg = svg.replace('<', '%3C');
    //   svg = svg.replace('>', '%3E');
    //   svg = svg.replace('"', '\'');
    //   svg = svg.replace('{', '%7B');
    //   svg = svg.replace('}', '%7D');
    //   svg = svg.replace('’', '%E2%80%99');
    // }
    return svg;
  }
}

class RangeSVGStep extends RangeSVG {
  constructor () {
    super(StrokeLineStep);
  }

  get strokeWidth () {
    return super.strokeWidth;
  }

  set strokeWidth (value) {
    super.strokeWidth = value;
    // dasharray
  }
}

class RangeSVGDouble extends RangeSVG {
  get value2 () {
    return this._value2;
  }

  set value2 (value) {
    this._value2 = value;
  }
}

class StrokeLine {
  constructor () {
    this._strokeWidth = 4;
    this._x1 = 0;
    this._y1 = 0;
    this._x2 = 0;
    this._y2 = 0;
  }

  setToken (token) {
    this._token = token;
  }

  get strokeWidth () {
    return this._strokeWidth;
  }

  set strokeWidth (value) {
    this._strokeWidth = value;
  }

  get x1 () {
    return this._x1;
  }

  set x1 (value) {
    this._x1 = value;
  }

  get y1 () {
    return this._y1;
  }

  set y1 (value) {
    this._y1 = value;
  }

  get x2 () {
    return this._x2;
  }

  set x2 (value) {
    this._x2 = value;
  }

  get y2 () {
    return this._y2;
  }

  set y2 (value) {
    this._y2 = value;
  }

  get data () {
    return {
      'stroke-width': this._strokeWidth,
      stroke: api.colors.getColor.apply(api.colors, this._token),
      x1: this._x1,
      y1: this._y1,
      x2: this._x2,
      y2: this._y2
    };
  }

  get line () {
    const data = this.data;
    const attributes = Object.keys(data).map(key => `${key}="${data[key]}"`).join(' ');

    return `<line ${attributes} />`;
  }
}

class StrokeLineStep extends StrokeLine {
  get data () {
    return {
      ...super.data,
      'stroke-dasharray': this._dashArray,
      'stroke-dashoffset': this._dashOffset
    };
  }
}

export { Range };
