import api from '../../api.js';
import { RangeEmission } from './range-emission.js';
import { RangeSelector } from './range-selector.js';
import { RangeModel, RangeModelStep, RangeModelDouble } from './range-model';

const RangeTypes = {
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
    this.label = this.node.querySelector(RangeSelector.RANGE_LABEL);
    this._retrieveType();
    this._retrieveSize();
    if (this.isLegacy) {
      this.isResizing = true;
      this.isMouseMoving = true;
    } else {
      this._observer = new ResizeObserver(this._retrieveWidth.bind(this));
      this._observer.observe(this.node);
      this._retrieveWidth();
      this.addDescent(api.scheme.SchemeEmission.SCHEME, this._model.update.bind(this._model));
    }

    this.addAscent(RangeEmission.CONSTRAINTS, this.setConstraints.bind(this));
    this.addAscent(RangeEmission.VALUE, this.setValue.bind(this));
    this.addAscent(RangeEmission.DISABLED, this.setDisabled.bind(this));
    this.addAscent(RangeEmission.VALUE2, this.setValue2.bind(this));
    if (this.getAttribute(RangeSelector.RANGE_PREFIX)) this.setPrefix(this.getAttribute(RangeSelector.RANGE_PREFIX));
    if (this.getAttribute(RangeSelector.RANGE_SUFFIX)) this.setSuffix(this.getAttribute(RangeSelector.RANGE_SUFFIX));

    this.paint();
  }

  _retrieveType () {
    switch (true) {
      case this.matches(RangeSelector.RANGE_STEP):
        this.type = RangeTypes.STEP;
        break;

      case this.matches(RangeSelector.RANGE_DOUBLE):
        this.type = RangeTypes.DOUBLE;
        break;

      default:
        this.type = RangeTypes.DEFAULT;
    }
  }

  set type (value) {
    if (this._type === value) return;
    this._type = value;

    const oldModel = this._model;

    switch (true) {
      case this.matches(RangeSelector.RANGE_STEP):
        this._model = new RangeModelStep();
        break;

      case this.matches(RangeSelector.RANGE_DOUBLE):
        this._model = new RangeModelDouble();
        break;

      default:
        this._model = new RangeModel();
    }

    this.descend(RangeEmission.CLEAR);

    this._model.configure(oldModel, this.paint.bind(this));
  }

  get type () {
    return this._type;
  }

  _retrieveSize () {
    this._model.isSm = this.matches(RangeSelector.RANGE_SM);
  }

  resize () {
    this._retrieveWidth();
  }

  _retrieveWidth () {
    this._model.width = this.getRect().width;
  }

  setValue (value) {
    this._model.value = value;
    if (this._type === RangeTypes.DOUBLE) this.descend(RangeEmission.VALUE, value);
    this._assignValue();
  }

  setValue2 (value) {
    this._model.value2 = value;
    this.descend(RangeEmission.VALUE2, value);
    this._assignValue();
  }

  _assignValue () {
    if (!this.output) return;
    this.output.innerText = this._model.textValue;
  }

  setDisabled (value) {
    this._model.isDisabled = value;
  }

  setConstraints (constraints) {
    this._model.setConstraints(constraints);
    this._assignConstraints();
    this.descend(RangeEmission.CONSTRAINTS, constraints);
  }

  _assignConstraints () {
    if (!this.label) return;
    this.label.setAttribute(api.internals.ns.attr('min'), this._model.textMin);
    this.label.setAttribute(api.internals.ns.attr('max'), this._model.textMax);
  }

  setPrefix (value) {
    this._model.setPrefix(value);
    this._assignValue();
    this._assignConstraints();
  }

  setSuffix (value) {
    this._model.setSuffix(value);
    this._assignValue();
    this._assignConstraints();
  }

  mutate (attributesNames) {
    switch (true) {
      case attributesNames.includes('class'):
        this._retrieveType();
        this._retrieveSize();
        break;

      case attributesNames.includes(RangeSelector.RANGE_PREFIX):
      case attributesNames.includes(RangeSelector.RANGE_SUFFIX):
        this._model.setPrefix(this.getAttribute(RangeSelector.RANGE_PREFIX));
        this._model.setSuffix(this.getAttribute(RangeSelector.RANGE_SUFFIX));
        this._assignValue();
        this._assignConstraints();
        break;
    }
  }

  paint () {
    if (this._isPainting) return;
    this._isPainting = true;
    window.requestAnimationFrame(this._paint.bind(this));
  }

  _paint () {
    const background = this._model.background;
    this.descend(RangeEmission.BACKGROUND, background);
    this.placeOutput();
    this._isPainting = false;
  }

  placeOutput () {
    const outputX = Math.min(Math.max(this._model.outputX - this.output.offsetWidth * 0.5, 0), this._model.width - this.output.offsetWidth);
    this.output.style.transform = `translateX(${outputX}px)`;
  }

  mouseMove (point) {
    if (this._type !== RangeTypes.DOUBLE) return;
    const x = point.x - this.getRect().left;
    this.descend(RangeEmission.ENABLE_POINTER, this._model.outputX < x ? 2 : 1);
  }

  dispose () {
    for (const input of this.inputs) input.removeEventListener('input', this.changing);
    this._observer.disconnect();
  }
}

export { Range };