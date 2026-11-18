import PushType from '../facade/push-type.js';
import push from '../facade/push.js';
import renderer from './renderer';
import api from '../../../api';
import { ActionRegulation } from '../action/action-regulation';

const SLICE = 80;

class Queue {
  constructor () {
    this._startingActions = [];
    this._endingActions = [];
    this._handlingVisibilityChange = this._handleVisibilityChange.bind(this);
    this._handlingEnd = this._handleEnd.bind(this);
    this._isStarted = false;
    this._isListening = false;
    this._provider = null;
    this.reset();
  }

  setProvider (provider) {
    this._provider = provider;
  }

  setCollector (collector) {
    this._collector = collector;
  }

  reset (ending = false) {
    this._type = PushType.ACTION;
    if (!ending) this._startingActions.length = 0;
    this._endingActions.length = 0;
    this._count = 0;
    this._delay = -1;
    this._isRequested = false;
    this._unlisten();
  }

  start () {
    if (this._isStarted) return;
    this._isStarted = true;
    renderer.add(this);
  }

  collect () {
    this._type = PushType.COLLECTOR;
    this._request();
  }

  regulate (action, queue) {
    if (!action) return false;
    if (queue.some(queued => queued.test(action))) {
      api.inspector.log('action exists in queue', action);
      return false;
    }
    switch (action.regulation) {
      case ActionRegulation.PREVENT:
        return false;
      case ActionRegulation.ENFORCE:
        return true;
      default:
        return this._collector.isActionEnabled === true;
    }
  }

  appendStartingAction (action, data) {
    if (!this.regulate(action, this._startingActions)) return;
    const queued = new QueuedAction(action, data);
    this._startingActions.push(queued);
    this._request();
  }

  appendEndingAction (action, data) {
    if (!this.regulate(action, this._endingActions)) return;
    const queued = new QueuedAction(action, data);
    this._endingActions.push(queued);
    this._request();
  }

  _request () {
    this._listen();
    this._isRequested = true;
    this._delay = 4;
  }

  _listen () {
    if (this._isListening) return;
    this._isListening = true;
    document.addEventListener('visibilitychange', this._handlingVisibilityChange);
    window.addEventListener('pagehide', this._handlingEnd);
  }

  _unlisten () {
    if (!this._isListening) return;
    this._isListening = false;
    document.removeEventListener('visibilitychange', this._handlingVisibilityChange);
    window.removeEventListener('pagehide', this._handlingEnd);
  }

  _handleVisibilityChange (e) {
    if (document.visibilityState === 'hidden') this.send();
  }

  _handleEnd () {
    this.send();
  }

  render () {
    if (this._delay <= -1) return;
    this._delay--;
    this._count++;
    switch (true) {
      case this._count > 20:
      case this._delay === 0:
        this.send();
        break;
    }
  }

  send (ending = false) {
    if (!this._isRequested) return;

    const isValidLayer = layer => layer && (Array.isArray(layer) ? layer.length > 0 : true);

    const actionLayers = [];
    if (!ending) actionLayers.push(...this._startingActions.map(queued => queued.start()).filter(isValidLayer));
    actionLayers.push(...this._endingActions.map(queued => queued.end()).filter(isValidLayer));

    const objectLayers = actionLayers.filter(layer => !Array.isArray(layer));
    const arrayLayers = actionLayers.filter(layer => Array.isArray(layer));

    const pushObjectLayers = () => objectLayers.forEach(layer => {
      if (this._provider) this._provider.push(PushType.ACTION, layer);
      else push(PushType.ACTION, layer);
    });

    const slices = [];
    if (arrayLayers.length > 0) {
      const length = ((arrayLayers.length / SLICE) + 1) | 0;
      for (let i = 0; i < length; i++) {
        const slice = arrayLayers.slice(i * SLICE, (i + 1) * SLICE);
        slices.push(slice.flat());
      }
    }

    if (this._type === PushType.COLLECTOR && this._collector.isCollecting) {
      const layer = this._collector.layer;

      if (!Array.isArray(layer)) {
        if (this._provider) this._provider.push(PushType.COLLECTOR, layer);
        pushObjectLayers();
        this.reset(ending);
        return;
      }

      if (slices.length > 0) {
        const slice = slices.splice(0, 1)[0];
        if (slice.length > 0) layer.push.apply(layer, slice);
      }
      layer.flat();
      if (layer.length > 0) {
        if (this._provider) this._provider.push(PushType.COLLECTOR, layer);
        else push(PushType.COLLECTOR, layer);
      }
    }

    pushObjectLayers();

    if (slices.length > 0) {
      for (let i = 0; i < slices.length; i++) {
        const slice = slices[i];
        if (slice.length > 0) {
          if (this._provider) this._provider.push(PushType.ACTION, slice);
          else push(PushType.ACTION, slice);
        }
      }
    }

    this.reset(ending);
  }
}

class QueuedAction {
  constructor (action, data) {
    this._action = action;
    this._data = data;
  }

  test (action) {
    return this._action === action;
  }

  start () {
    return this._action.start(this._data);
  }

  end () {
    return this._action.end(this._data);
  }
}

const queue = new Queue();

export default queue;
