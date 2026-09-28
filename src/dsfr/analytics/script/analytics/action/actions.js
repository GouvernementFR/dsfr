import { ActionMode } from './action-mode';
import { Action } from './action';

class Actions {
  constructor () {
    this._actions = [];
    this._actionClass = Action;
    this._isIdRequired = true;
  }

  get isIdRequired () {
    return this._isIdRequired;
  }

  setIdRequired (value) {
    this._isIdRequired = value;
  }

  setActionClass (actionClass) {
    this._actionClass = actionClass;
  }

  rewind () {
    this._actions.forEach(action => action.rewind());
  }

  getAction (name) {
    let action = this._actions.filter(action => action.name === name)[0];
    if (!action) {
      action = new this._actionClass(name);
      this._actions.push(action);
    }
    return action;
  }

  hasAction (name) {
    return this._actions.some(action => action.name === name);
  }

  remove (action) {
    const index = this._actions.indexOf(action);
    if (index === -1) return false;
    this._actions.splice(index, 1);
    return true;
  }
}

Actions.ActionMode = ActionMode;

const actions = new Actions();
Actions.instance = actions;

export default actions;
