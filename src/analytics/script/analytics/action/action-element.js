import actions from './actions';
import push from '../facade/push';
import PushType from '../facade/push-type';
import { Hierarchy } from '../utils/hierarchy/hierarchy';

class ActionElement {
  constructor (node, type, id) {
    this._node = node;
    this._type = type;
    this._id = id || this._node.id;
    this._isMuted = false;

    requestAnimationFrame(this._init.bind(this));
    // this._init();
  }

  _init () {
    console.log('init');
    this._hierarchy = new Hierarchy(this._node);

    let id = '';
    let type = '';
    if (this._id) id = `_[${this._id}]`;
    if (this._type) type = `_(${this._type.id})`;
    this._name = `${this._hierarchy.title}${id}${type}`;

    this._action = actions.getAction(this._name, true);
    this._action.isMuted = this._isMuted;

    if (this._hierarchy.label) this._action.addParameter('component_label', this._hierarchy.label);
    if (this._hierarchy.title) this._action.addParameter('heading_hierarchy', this._hierarchy.title);
    if (this._hierarchy.component) this._action.addParameter('component_hierarchy', this._hierarchy.component);
  }

  get isMuted () {
    return this._isMuted;
  }

  set isMuted (value) {
    this._isMuted = value;
    if (this._action) this.action.isMuted = value;
  }

  get action () {
    return this._action;
  }

  act (data = {}) {
    const layer = this._action.end(data);
    push(PushType.ACTION, layer);
  }

  dispose () {
    actions.remove(this._action);
  }
}

export { ActionElement };
