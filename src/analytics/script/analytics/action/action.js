import api from '../../../api.js';
import normalize from '../utils/normalize';
import { ActionMode } from './action-mode';
import { validateString } from '../utils/type-validator';
import { ActionStatus } from './action-status';

const getParametersLayer = (data) => {
  return Object.entries(data).map(([key, value]) => ['actionpname', normalize(key), 'actionpvalue', normalize(value)]).flat();
};

class Action {
  constructor (name, isCollectable = false) {
    this._isMuted = false;
    this._name = name;
    this._isCollectable = isCollectable;
    this._status = ActionStatus.UNSTARTED;
    this._labels = [];
    this._parameters = {};
  }

  get isMuted () {
    return this._isMuted;
  }

  set isMuted (value) {
    this._isMuted = value;
  }

  get isCollectable () {
    return this._isCollectable && this._status === ActionStatus.UNSTARTED;
  }

  get status () {
    return this._status;
  }

  get name () {
    return this._name;
  }

  get labels () {
    return this._labels;
  }

  get reference () {
    return this._reference;
  }

  get parameters () {
    return this._parameters;
  }

  addParameter (key, value) {
    this._parameters[key] = value;
  }

  removeParameter (key) {
    delete this._parameters[key];
  }

  set reference (value) {
    const valid = validateString(value, `action ${this._name}`);
    if (valid !== null) this._reference = valid;
  }

  get _base () {
    return ['actionname', this._name];
  }

  _getLayer (mode, data = {}) {
    if (this._isMuted) return [];
    const layer = this._base;
    switch (mode) {
      case ActionMode.IN:
      case ActionMode.OUT:
        layer.push('actionmode', mode);
        break;
    }

    const labels = this._labels.slice(0, 5);
    labels.length = 5;
    if (labels.some(label => label)) layer.push('actionlabel', labels.map(label => typeof label === 'string' ? normalize(label) : '').join(','));

    if (this._reference) layer.push('actionref', this._reference);

    if (data) layer.push.apply(layer, getParametersLayer({ ...this._parameters, ...data }));
    return layer;
  }

  start (data) {
    if (this._status.value > ActionStatus.UNSTARTED.value) {
      api.inspector.error(`unexpected start on action ${this._name} with status ${this._status.id}`);
      return;
    }
    const layer = this._getLayer(ActionMode.IN, data);
    this._status = ActionStatus.STARTED;
    return layer;
  }

  end (data) {
    const layer = this._getLayer(this._status === ActionStatus.STARTED ? ActionMode.OUT : ActionMode.NONE, data);
    this._status = ActionStatus.ENDED;
    return layer;
  }

  resume (data) {
    if (this._isMuted) return [];
    if (this._status.value >= ActionStatus.ENDED.value) {
      api.inspector.error(`unexpected resuming on action ${this._name} with status ${this._status.id}`);
      return [];
    }
    const layer = this._base;
    if (data) layer.push.apply(layer, getParametersLayer(data));
    return layer;
  }
}

export { Action };
