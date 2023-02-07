import api from '../../api.js';
import normalize from '../normalize';

const getName = (id, title, type) => `${normalize(title)}[${id}](${type.id})`;

const actions = {};

const ActionMode = {
  IN: 'in',
  OUT: 'out',
  NONE: 'none'
};

class Action {
  constructor (id, title, type) {
    this._isImpressed = false;
    this._name = getName(id, title, type);
    this._details = [];
    this._labels = [];
  }

  addLabel (...labels) {
    this._labels.push.apply(labels);
    this._updateDetails();
  }

  _verifyLabels (warn = true) {
    if (this._labels.length > 5) {
      if (warn) api.inspector.warn(`tracking action ${this._name} is over the limit of 5 actionlabel; previous labels will be overwritten`);
      this._labels.splice(0, this._labels.length - 5);
    }
  }

  get labels () {
    return this._labels;
  }

  set ref (value) {
    this._ref = value;
    this._updateDetails(false);
  }

  get ref () {
    return this._ref;
  }

  _updateDetails (warn = true) {
    this._details = [];
    if (this._labels.length) {
      this._verifyLabels(warn);
      this._details.push('actionlabel', this._labels.join(','));
    }
    if (this._ref) this._details.push('actionref', this._ref);
  }

  get details () {
    return this._details;
  }

  getLayer (mode) {
    const layer = ['actionname', `${this.name}[${this.id}]`];
    switch (mode) {
      case ActionMode.IN:
      case ActionMode.OUT:
        layer.push('actionmode', mode);
        break;
    }
    return layer;
  }

  getParameters (data) {
    return Object.entries(data).map(([key, value]) => ['actionpname', key, 'actionpvalue', value]).flat();
  }

  impress (data) {
    this._isImpressed = true;
    const layer = this.getLayer(ActionMode.IN);
    layer.push.apply(layer, this._details);
    if (data) layer.push.apply(layer, this.getParameters(data));
    return layer;
  }

  fill (data) {
    const layer = this.getLayer(ActionMode.NONE);
    if (data) layer.push.apply(layer, this.getParameters(data));
    return layer;
  }

  act (data) {
    const layer = this.getLayer(this._isImpressed ? ActionMode.OUT : ActionMode.NONE);
    if (!this._isImpressed) layer.push.apply(layer, this._details);
    if (data) layer.push.apply(layer, this.getParameters(data));
    return layer;
  }

  static getAction (id, label) {
    const name = getName(id, label);
    if (!actions[name]) actions[name] = new Action(id, label);
    return actions[name];
  }
}

export { Action };
