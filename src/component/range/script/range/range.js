import api from '../../api.js';
// import { RangeSelector } from './range-selector.js';
import { RangeEmission } from './range-emission.js';
import { RangeInput } from './range-input.js';
import { RangeSelector } from './range-selector.js';

const RangeType = {
  STEP: 'step',
  DOUBLE: 'double',
  DEFAULT: 'default'
};

class Range extends api.core.Instance {
  static get instanceClassName () {
    return 'Range';
  }

  init () {
    this.output = this.node.querySelector(RangeSelector.RANGE_OUTPUT);
    this.addAscent(RangeEmission.MIN, this.setMin.bind(this));
    this.addAscent(RangeEmission.MAX, this.setMax.bind(this));
    this.addAscent(RangeEmission.VALUE, this.setValue.bind(this));
    this.addAscent(RangeEmission.DISABLED, this.setDisabled.bind(this));
    // this.addAscent(RangeEmission.VALUE_MAX, this.setValueMax.bind(this));
    // this.addAscent(RangeEmission.STEP, this.setStep.bind(this));
    // if (this.getAttribute(RangeSelector.RANGE_PREFIX)) this.setPrefix(this.getAttribute(RangeSelector.RANGE_PREFIX));
    // if (this.getAttribute(RangeSelector.RANGE_SUFFIX)) this.setSuffix(this.getAttribute(RangeSelector.RANGE_SUFFIX));
    this.retrieveSize();
    this.retrieveType();
    this.update();
  }

  retrieveType () {
    switch (true) {
      case this.matches(RangeSelector.RANGE_STEP):
        this._type = RangeType.STEP;
        break;

      case this.matches(RangeSelector.RANGE_DOUBLE):
        this._type = RangeType.DOUBLE;
        break;

      default:
        this._type = RangeType.DEFAULT;
        break;
    }
  }

  retrieveSize () {
    this._isSm = this.matches(RangeSelector.RANGE_SM);
    this._thumbSize = this._isSm ? 16 : 24;
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
    this.disabled = value;
    this.update();
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

  cleanSvg (svg) {
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

  update () {
    this.rangeWidth = this.getRect().width;
    this.activeWidth = this.rangeWidth - this._thumbSize;
    this.ratio = (this._value - this._min) / (this._max - this._min);
    this.progressX = this.activeWidth * this.ratio + this._thumbSize / 2;
    this.strokeWidth = this._isSm ? 2 : 4;
    if (this.output) this.output.innerText = `${this.prefix || ''}${this._value}${this.suffix || ''}${this.valueMax ? ` - ${this.prefix || ''}${this.valueMax}${this.suffix || ''}` : ''}`;

    const rangeColors = new RangeColors();
    this.descend(RangeEmission.SVG, this.getSvg(rangeColors.track, rangeColors.progress));
  }

  dispose () {
    for (const input of this.inputs) input.removeEventListener('input', this.changing);
  }
}

class RangeColors {
  constructor () {
    this.track = api.colors.getColor('background', 'contrast', 'grey');
    this.progress = api.colors.getColor('background', 'active', 'blue-france');
  }
}

export { Range };
