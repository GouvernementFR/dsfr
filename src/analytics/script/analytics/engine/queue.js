
import PushType from '../facade/push-type.js';
import push from '../facade/push.js';
import renderer from './renderer';

const SLICE = 50;

class Queue {
  constructor () {
    this._actionLayers = [];
    this._handlingVisibilityChange = this._handleVisibilityChange.bind(this);
    this._handlingEnd = this._handleEnd.bind(this);
    this._isStarted = false;
    this._isListening = false;
    this.reset();
  }

  reset () {
    this._type = PushType.ACTION;
    this._actionLayers.length = 0;
    this._collectionLayer = [];
    this._count = 0;
    this._delay = -1;
    this._isRequested = false;
    this._unlisten();
  }

  start () {
    if (this._isStarted) return;
    this._isStarted = true;
    renderer.add(this.render.bind(this));
  }

  collect (layer) {
    this._type = PushType.COLLECTOR;
    this._collectionLayer = layer;
    this._request();
  }

  append (layer) {
    this._actionLayers.push(layer);
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

  send () {
    if (!this._isRequested) return;
    const length = ((this._actionLayers.length / SLICE) + 1) | 0;
    const layer = [...this._collectionLayer];

    for (let i = 0; i < length; i++) {
      const slice = this._actionLayers.slice(i * SLICE, (i + 1) * SLICE);
      layer.push(...slice.flat());
      push(this._type, layer);
    }

    this.reset();
  }
}

const queue = new Queue();

export default queue;
