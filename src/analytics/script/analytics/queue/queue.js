import PushType from '../facade/push-type.js';
import push from '../facade/push.js';

const SLICE = 50;

class Queue {
  constructor () {
    this._actions = [];
    this._requesting = this._request.bind(this);
    this.reset();
  }

  reset () {
    this._type = PushType.ACTION;
    this._layer = [];
    this._count = 0;
    this._delay = -1;
    this._actions.length = 0;
  }

  collect (layer) {
    this._type = PushType.COLLECTOR;
    this._collectionLayer = layer;
    this._request();
  }

  append (action) {
    this._delay = 4;
    this._actions.push(action);
  }

  _request () {
    this._delay = 4;
    if (this._isRequested) return;
    this._isRequested = true;
    this._counting();
  }

  _counting () {
    this._delay--;
    this._count++;
    switch (true) {
      case this._count > 20:
      case this._delay <= 0:
        this.send();
        break;

      default:
        requestAnimationFrame(this._requesting);
        break;
    }
  }

  send () {
    const length = ((this._actions.length / SLICE) + 1) | 0;
    const layer = [...this._collectionLayer];

    for (let i = 0; i < length; i++) {
      const slice = this._actions.slice(i * SLICE, (i + 1) * SLICE);
      layer.push(...slice.map(action => action.layer).flat());
      push(this._type, layer);
    }

    this.reset();
  }
}

const queue = new Queue();

export default queue;
