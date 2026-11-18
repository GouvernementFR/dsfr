import { Action } from '../../action/action';
import { ActionMode } from '../../action/action-mode';
import normalize from '../../utils/normalize';

class MatomoAction extends Action {
  _getName (params) {
    const prefix = `(${this._labels[0]})_`;
    let name = this._name.indexOf(prefix) === 0 ? this._name.slice(prefix.length) : this._name;
    if (params.heading_hierarchy && params.component_label) name = name.replace(params.heading_hierarchy, params.component_label);

    const value = params.change_value !== undefined ? params.change_value : params.component_value;
    const normalizedValue = value !== undefined && value !== null ? normalize(String(value)) : '';
    if (normalizedValue && normalizedValue !== params.component_label) name = `${name}_›_${normalizedValue}`;

    return name;
  }

  _getLayer (data = {}) {
    if (this._isMuted) return [];
    if (this._mode !== ActionMode.IN) this._sentData.push(JSON.stringify(data));

    const params = Object.assign({}, this._parameters, data || {});

    return {
      category: this._labels[1] || this._labels[4],
      action: this._mode === ActionMode.IN ? `${this._labels[0]}_in` : this._labels[0],
      name: this._getName(params),
      value: undefined
    };
  }
}

export default MatomoAction;
