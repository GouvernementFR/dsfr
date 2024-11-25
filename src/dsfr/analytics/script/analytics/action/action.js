import api from '../../../api.js';
import normalize from '../utils/normalize';
import { ActionMode } from './action-mode';
import { validateString } from '../utils/type-validator';
import { ActionStatus } from './action-status';
import { ActionRegulation } from './action-regulation';

const getParametersLayer = (data) => {
  return Object.entries(data).map(([key, value]) => ['actionpname', normalize(key), 'actionpvalue', normalize(value)]).flat();
};

class Action {
  constructor (name) {
    this._isMuted = false;
    this._regulation = ActionRegulation.NONE;
    this._name = name;
    this._status = ActionStatus.UNSTARTED;
    this._labels = [];
    this._parameters = {};
    this._sentData = [];
  }

  get isMuted () {
    return this._isMuted;
  }

  set isMuted (value) {
    this._isMuted = value;
  }

  get regulation () {
    return this._regulation;
  }

  set regulation (value) {
    if (Object.values(ActionRegulation).includes(value)) this._regulation = value;
  }

  get isSingular () {
    return this._status === ActionStatus.SINGULAR;
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

  get mode () {
    return this._mode;
  }

  singularize () {
    this._status = ActionStatus.SINGULAR;
  }

  rewind () {
    this._sentData = [];
    this._status = ActionStatus.UNSTARTED;
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

  _getLayer (data = {}) {
    if (this._isMuted) return [];

    if (this._mode !== ActionMode.IN) this._sentData.push(JSON.stringify(data));

    const layer = this._base;
    switch (this._mode) {
      case ActionMode.IN:
      case ActionMode.OUT:
        layer.push('actionmode', this._mode);
        break;
    }

    const labels = this._labels.slice(0, 5);
    labels.length = 5;
    if (labels.some(label => label)) layer.push('actionlabel', labels.map(label => typeof label === 'string' ? normalize(label) : '').join(','));

    if (this._reference) layer.push('actionref', this._reference);

    layer.push.apply(layer, getParametersLayer(Object.assign(this._parameters, data || {})));
    return layer;
  }

  start (data) {
    switch (this._status) {
      case ActionStatus.UNSTARTED:
        this._mode = ActionMode.IN;
        this._status = ActionStatus.STARTED;
        break;

      case ActionStatus.SINGULAR:
        this._mode = ActionMode.NONE;
        this._status = ActionStatus.ENDED;
        break;

      default:
        api.inspector.error(`unexpected start on action ${this._name} with status ${this._status.id}`);
        return [];
    }
    return this._getLayer(data);
  }

  end (data) {
    switch (this._status) {
      case ActionStatus.STARTED:
        this._mode = ActionMode.OUT;
        this._status = ActionStatus.ENDED;
        break;

      case ActionStatus.UNSTARTED:
        this._mode = ActionMode.NONE;
        this._status = ActionStatus.ENDED;
        break;

      case ActionStatus.SINGULAR:
        this._mode = ActionMode.NONE;
        this._status = ActionStatus.ENDED;
        break;

      case ActionStatus.ENDED:
        if (this._sentData.includes(JSON.stringify(data))) return [];
        this._mode = ActionMode.NONE;
        this._status = ActionStatus.ENDED;
        break;

      default:
        return [];
    }
    return this._getLayer(data);
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
