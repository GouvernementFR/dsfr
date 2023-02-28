import api from '../../../api';
import Type from '../../analytics/action/type';
import { ActionElement } from '../../analytics/action/action-element';

class AttributeActionee extends api.core.Instance {
  static get instanceClassName () {
    return 'AttributeActionee';
  }

  init () {
    this._attribute = this.registration.selector.replace(/[[\]]/g, '');
    const id = this._attribute.split('-').pop();
    this._type = Object.values(Type).filter(type => type.id === id)[0];

    this._actionElement = new ActionElement(this.node, this._type, this.id, this.getAttribute(this._attribute));

    switch (this._type.method) {
      case 'eventListener':
        this.listen(this._type.event, this.handleEvent.bind(this));
        break;

      case 'change':
        this.listen(this._type.event, this.handleChange.bind(this));
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

export { AttributeActionee };
