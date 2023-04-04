import api from '../../../api';
import actions from './actions';
import { Hierarchy } from '../utils/hierarchy/hierarchy';
import queue from '../engine/queue';

class ActionElement {
  constructor (node, type, id, category = '', title = null, parameters = {}) {
    this._node = node;
    this._type = type;
    this._id = id || this._node.id;
    this._isMuted = false;
    this._title = title;
    this._category = category;
    this._parameters = parameters;

    // this._init();
    requestAnimationFrame(this._init.bind(this));
  }

  _init () {
    this._hierarchy = new Hierarchy(this._node);

    let id = '';
    let type = '';
    if (this._id) id = `_[${this._id}]`;
    else api.inspector.warn(`Analytics API requires an id to be set on tracked element. Missing on ${this._node.outerHTML}`);
    if (this._type) type = `(${this._type.id})_`;
    this._name = `${type}${this._title || this._hierarchy.title}${id}`;

    this._action = actions.getAction(this._name, this._type.status);
    if (this._type.isSingular) this._action.singularize();
    Object.keys(this._parameters).forEach(key => this._action.addParameter(key, this._parameters[key]));
    this._action.isMuted = this._isMuted;

    this._action.labels[0] = this._type.id;
    this._action.labels[1] = this._hierarchy.globalComponent;
    this._action.labels[2] = this._hierarchy.localComponent;
    this._action.labels[4] = this._category;

    if (this._hierarchy.label) this._action.addParameter('component_label', this._hierarchy.label);
    if (this._hierarchy.title) this._action.addParameter('heading_hierarchy', this._hierarchy.title);
    if (this._hierarchy.component) this._action.addParameter('component_hierarchy', this._hierarchy.component);
    if (this._type.isStarting) queue.append(this._action.start());
  }

  get isMuted () {
    return this._action ? this._action.isMuted : this._isMuted;
  }

  set isMuted (value) {
    this._isMuted = value;
    if (this._action) this._action.isMuted = value;
  }

  get action () {
    return this._action;
  }

  act (data = {}) {
    if (this._isMuted) return;
    queue.append(this._action.end(data));
  }

  dispose () {
    actions.remove(this._action);
  }
}

export { ActionElement };
