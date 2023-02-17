import api from '../../../api';
import Type from '../../analytics/action/type';
import { ActionElement } from '../../analytics/action/action-element';

class AttributeBinding extends api.core.Instance {
  static get instanceClassName () {
    return 'Binding';
  }

  init () {
    const id = this.registration.selector.replace(/[[\]]/g, '').split('-').pop();
    this._type = Object.values(Type).filter(type => type.id === id)[0];

    this._actionElement = new ActionElement(this.node, this._type);

    switch (this._type.method) {
      case 'eventListener':
        this.listen(this._type.event, this.handleEvent.bind(this));
        break;
    }
  }

  handleEvent (e) {
    this._actionElement.act();
  }

  handleChange (e) {
    this._actionElement.act({ change_value: e.target.value });
  }

  dispose () {
    this._actionElement.dispose();
    super.dispose();
  }
}

export { AttributeBinding };
