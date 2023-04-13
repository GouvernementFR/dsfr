
import PushType from '../facade/push-type.js';
import push from '../facade/push.js';
import renderer from './renderer';
import api from '../../../api';

const SLICE = 80;

class Queue {
  constructor () {
    this._startingActions = [];
    this._endingActions = [];
    this._handlingVisibilityChange = this._handleVisibilityChange.bind(this);
    this._handlingEnd = this._handleEnd.bind(this);
    this._isStarted = false;
    this._isListening = false;
    this.reset();
  }

  reset (ending = false) {
    this._type = PushType.ACTION;
    if (!ending) this._startingActions.length = 0;
    this._endingActions.length = 0;
    this._collectionLayer = [];
    this._count = 0;
    this._delay = -1;
    this._isRequested = false;
    this._unlisten();
  }

  start () {
    if (this._isStarted) return;
    this._isStarted = true;
    renderer.add(this);
    console.log('collector started');
  }

  collect (layer) {
    console.log('collector collect');
    this._type = PushType.COLLECTOR;
    this._collectionLayer = layer;
    this._request();
  }

  appendStartingAction (action) {
    if (!action || this._startingActions.indexOf(action) > -1) {
      api.inspector.log('appendStartingAction', action, `index: ${this._startingActions.indexOf(action)}`);
      return;
    }
    this._startingActions.push(action);
    this._request();
  }

  appendEndingAction (action) {
    if (!action || this._endingActions.indexOf(action) > -1) {
      api.inspector.log('appendEndingAction', action, `index: ${this._endingActions.indexOf(action)}`);
      return;
    }
    this._endingActions.push(action);
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
    document.addEventListener('unload', this._handlingEnd);
    document.addEventListener('beforeunload', this._handlingEnd);
    document.addEventListener('pagehide', this._handlingEnd);
  }

  _unlisten () {
    if (!this._isListening) return;
    this._isListening = false;
    document.removeEventListener('visibilitychange', this._handlingVisibilityChange);
    document.removeEventListener('unload', this._handlingEnd);
    document.removeEventListener('beforeunload', this._handlingEnd);
    document.removeEventListener('pagehide', this._handlingEnd);
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
    const actionLayers = [];
    if (!ending) actionLayers.push(...this._startingActions.map(action => action.start()).filter(layer => layer.length > 0));
    actionLayers.push(...this._endingActions.map(action => action.end()).filter(layer => layer.length > 0));

    const length = ((actionLayers.length / SLICE) + 1) | 0;
    const slices = [];
    for (let i = 0; i < length; i++) {
      const slice = actionLayers.slice(i * SLICE, (i + 1) * SLICE);
      slices.push(slice.flat());
    }

    push(this._type, [...this._collectionLayer, ...slices[0]]);

    if (slices.length > 1) {
      for (let i = 1; i < slices.length; i++) {
        push(PushType.ACTION, slices[i]);
      }
    }

    this.reset(ending);
  }
}

const queue = new Queue();

export default queue;
