import { ActionMode } from './action-mode';
import { Action } from './action';

class Actions {
  constructor () {
    this._actions = [];
  }

  getAction (name, isCollectable = false) {
    let action = this._actions.filter(action => action.name === name)[0];
    if (!action) {
      action = new Action(name, isCollectable);
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

  get layer () {
    return this._actions.filter(action => action.isCollectable).map(action => action.start()).flat();
  }
}

Actions.ActionMode = ActionMode;

const actions = new Actions();
Actions.instance = actions;

export default actions;
