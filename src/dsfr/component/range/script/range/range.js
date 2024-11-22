import api from '../../api.js';
import { RangeEmission } from './range-emission.js';
import { RangeSelector } from './range-selector.js';
import { RangeModel, RangeModelStep, RangeModelDouble, RangeModelDoubleStep } from './range-model';

const RangeTypes = {
  STEP: 'step',
  DOUBLE: 'double',
  DOUBLE_STEP: 'double-step',
  DEFAULT: 'default'
};

class Range extends api.core.Instance {
  static get instanceClassName () {
    return 'Range';
  }

  init () {
    this._retrieveType();
    this._retrieveSize();
    if (this.isLegacy) {
      this.isResizing = true;
      this.isMouseMoving = true;
    } else {
      this._observer = new ResizeObserver(this.resize.bind(this));
      this._observer.observe(this.node);
    }

    this.addAscent(RangeEmission.CONSTRAINTS, this.setConstraints.bind(this));
    this.addAscent(RangeEmission.VALUE, this.setValue.bind(this));
    this.addAscent(RangeEmission.VALUE2, this.setValue2.bind(this));
    if (this.getAttribute(RangeSelector.RANGE_PREFIX)) this.setPrefix(this.getAttribute(RangeSelector.RANGE_PREFIX));
    if (this.getAttribute(RangeSelector.RANGE_SUFFIX)) this.setSuffix(this.getAttribute(RangeSelector.RANGE_SUFFIX));
    this.update();
  }

  _retrieveType () {
    switch (true) {
      case this.matches(RangeSelector.RANGE_DOUBLE_STEP):
        this.type = RangeTypes.DOUBLE;
        break;

      case this.matches(RangeSelector.RANGE_DOUBLE):
        this.type = RangeTypes.DOUBLE;
        break;

      case this.matches(RangeSelector.RANGE_STEP):
        this.type = RangeTypes.STEP;
        break;

      default:
        this.type = RangeTypes.DEFAULT;
    }
  }

  set type (value) {
    if (this._type === value) return;
    this._type = value;

    const oldModel = this._model;

    switch (this._type) {
      case RangeTypes.DOUBLE_STEP:
        this._model = new RangeModelDoubleStep();
        break;

      case RangeTypes.DOUBLE:
        this._model = new RangeModelDouble();
        break;

      case RangeTypes.STEP:
        this._model = new RangeModelStep();
        break;

      default:
        this._model = new RangeModel();
    }

    this._model.configure(oldModel);
  }

  get type () {
    return this._type;
  }

  _retrieveSize () {
    this._model.isSm = this.matches(RangeSelector.RANGE_SM);
  }

  resize () {
    this._retrieveWidth();
    this.update();
  }

  _retrieveWidth () {
    this._model.width = this.getRect().width;
  }

  setValue (value) {
    this._model.value = value;
    switch (this._type) {
      case RangeTypes.DOUBLE_STEP:
      case RangeTypes.DOUBLE:
        this.descend(RangeEmission.VALUE, value);
        break;
    }
    this.update();
  }

  setValue2 (value) {
    this._model.value2 = value;
    this.descend(RangeEmission.VALUE2, value);
    this.update();
  }

  setConstraints (constraints) {
    this._model.setConstraints(constraints);
    this.update();
    this.descend(RangeEmission.CONSTRAINTS, constraints);
  }

  setPrefix (value) {
    this._model.setPrefix(value);
    this.update();
  }

  setSuffix (value) {
    this._model.setSuffix(value);
    this.update();
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
        this.update();
        break;
    }
  }

  update () {
    this._model.update();
    this.descend(RangeEmission.OUTPUT, this._model.output);
    this.descend(RangeEmission.MIN, this._model.textMin);
    this.descend(RangeEmission.MAX, this._model.textMax);
    const progress = this._model.progress;
    if (progress.left) {
      this.style.setProperty('--progress-left', progress.left);
    } else {
      this.style.removeProperty('--progress-left');
    }
    if (progress.right) {
      this.style.setProperty('--progress-right', progress.right);
      if (this.isLegacy) {
        if (progress.left) {
          this.style.setProperty('background-position-x', progress.left);
          this.style.setProperty('background-size', `${parseFloat(progress.right) - parseFloat(progress.left)}px ${this._model.isSm ? '8px' : '12px'}`);
        }
      }
    } else {
      this.style.removeProperty('--progress-right');
      if (this.isLegacy) {
        this.style.removeProperty('background-size');
        this.style.removeProperty('background-position-x');
      }
    }
    if (this._model.stepWidth) this.style.setProperty('--step-width', this._model.stepWidth);
    else this.style.removeProperty('--step-width');
  }

  mouseMove (point) {
    if (this._type !== RangeTypes.DOUBLE && this._type !== RangeTypes.DOUBLE_STEP) return;
    const x = point.x - this.getRect().left;
    this.descend(RangeEmission.ENABLE_POINTER, (parseFloat(this._model.progress.right) - parseFloat(this._model.progress.left)) / 2 + parseFloat(this._model.progress.left) < x ? 2 : 1);
  }

  dispose () {
    this._observer.disconnect();
  }
}

export { Range };
